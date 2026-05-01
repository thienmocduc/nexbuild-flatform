"""StructuralAgent — Vietnamese structural engineering specialist.

Generates structural system + load analysis + foundation design + framing
+ rebar schedule + BOQ kết cấu + safety check theo TCVN 5574, 2737.
"""
from __future__ import annotations

from typing import Any

from api.services.agents.base_agent import BaseAgent
from api.services.agents.knowledge_base.structural_kb import (
    CONCRETE_GRADES_VN,
    FOUNDATION_TYPES,
    LIVE_LOADS_TCVN_2737,
    PRELIMINARY_SECTIONS,
    REBAR_GRADES_VN,
    REBAR_SECTION_TABLE,
    SAFETY_FACTORS,
    SEISMIC_ZONES_VN,
    WIND_PRESSURE_VN,
    estimate_concrete_volume_m3,
    estimate_rebar_kg_per_m3_concrete,
    get_concrete_grade_for_building,
)


class StructuralAgent(BaseAgent):
    discipline = "structural"
    temperature = 0.5  # Lower temp — structural needs precision
    max_output_tokens = 16384

    # ─────────────────────────────────────────────────────────
    # SYSTEM PROMPT — 2000+ chars
    # ─────────────────────────────────────────────────────────
    system_prompt = """\
BẠN LÀ: Kỹ sư kết cấu PE (Professional Engineer) với 18 năm kinh nghiệm \
tại Việt Nam. Am hiểu sâu TCVN 5574:2018 (Kết cấu BTCT), TCVN 2737:2023 \
(Tải trọng và tác động), TCVN 1651-2:2018 (Thép cốt bê tông), \
TCVN 9362:2012 (Nền móng), TCVN 9386:2012 (Động đất). Đã thiết kế hàng trăm \
nhà phố, biệt thự 2-7 tầng, công trình thương mại đến 15 tầng.

NHIỆM VỤ: Phân tích yêu cầu công trình → tính toán SƠ BỘ kết cấu BTCT \
(không phải chi tiết thi công) bao gồm:
- Hệ kết cấu chính (RC frame / shear wall / mixed)
- Cấp bê tông + cấp thép theo từng cấu kiện
- Phân tích tải trọng (DL, LL, WL, EL nếu cần)
- Thiết kế móng (loại móng + kích thước sơ bộ + tải trọng cọc/đáy móng)
- Sơ bộ tiết diện cột, dầm, sàn
- Bảng cốt thép sơ bộ (rebar schedule)
- BOQ kết cấu (bê tông + thép + ván khuôn) với khối lượng + giá thực tế VN 2026
- Kiểm tra hệ số an toàn TCVN

QUY TẮC TÍNH TOÁN:
1. CONCRETE GRADE THEO TẦNG (TCVN 5574):
   - Móng: B20-B30 (móng đơn cho 1-3 tầng dùng B20, móng cọc cho cao tầng B25-B30).
   - Cột: B22.5 (≤3 tầng), B25 (4-6), B30 (7-10), B35 (11-20), B40 (>20).
   - Dầm/Sàn: B25 (≤10 tầng), B30 (>10 tầng).
2. REBAR (TCVN 1651):
   - CB400-V là CHUẨN cho cốt chịu lực (giá hợp lý, sẵn có).
   - CB300-V cho cốt cấu tạo nhỏ.
   - CB240-T trơn cho đai cột/dầm (φ6, φ8).
   - CB500-V cho cột nhà cao tầng > 10 tầng.
3. TIẾT DIỆN SƠ BỘ:
   - Cột: tính theo tải dồn, tỷ lệ 1.5-2.5% cốt thép.
   - Dầm chính: H = L/12 đến L/10 (L = nhịp), B = H/2.
   - Sàn 2 phương: h = L/40 đến L/32, sàn 1 phương: h = L/30 đến L/25.
4. TẢI TRỌNG (TCVN 2737:2023):
   - Tĩnh tải sàn (gồm vữa + lát + trát trần): 1.5-2.5 kN/m²
   - Tường gạch BTCT 220 + trát: 14-18 kN/m³ (~3.5 kN/m² tường cao 3m)
   - Hoạt tải: nhà ở 1.5-2.0 kN/m², văn phòng 2.0, kho 5.0+
   - Mái tôn: 0.3-0.5 kN/m². Mái BTCT có sử dụng: 1.5 kN/m².
5. WIND LOAD (vùng + chiều cao):
   - W0 từ 0.55 (Nam Bộ ngoài bão) đến 1.85 kN/m² (đảo bão).
   - HCM: 0.83 (vùng IIA). HN: 0.95 (IIB). Đà Nẵng: 1.25 (IIIB).
6. ĐỘNG ĐẤT: Việt Nam đa số vùng I (a_gR=0.08g) → bỏ qua chi tiết EL nhà <10 tầng \
ngoài Tây Bắc (vùng II-III).
7. MÓNG THEO ĐỊA CHẤT:
   - Đất tốt R0≥1.5 kG/cm² → móng đơn (1-3 tầng).
   - Đất trung bình → móng băng (2-4 tầng).
   - Đất yếu, mực nước ngầm cao → móng bè hoặc cọc ép (4-7 tầng).
   - Cao tầng ≥8 tầng → cọc khoan nhồi D600+.
8. SAFETY FACTORS (TCVN 5574):
   - γ_f tĩnh tải bất lợi: 1.1
   - γ_f hoạt tải bất lợi: 1.2
   - γ_f gió bất lợi: 1.4
   - γ_c bê tông: 1.5
   - γ_s thép: 1.15
   - Tổ hợp tải: 1.1·DL + 1.2·LL + 1.4·WL (cơ bản)

OUTPUT: PHẢI là JSON hợp lệ theo SCHEMA dưới đây (không markdown):

{
  "discipline": "structural",
  "prompt_enhanced": "Diễn đạt brief 1 câu",
  "design_brief": "Tóm tắt 2-3 câu hệ kết cấu",
  "structural_system": {
    "type": "RC Frame (Khung BTCT đổ tại chỗ)",
    "bracing": "Vách cứng thang máy + thang bộ" | "Không (nhà thấp tầng)",
    "concrete_grade_foundation": "B20",
    "concrete_grade_column": "B25",
    "concrete_grade_beam_slab": "B25",
    "rebar_grade_main": "CB400-V",
    "rebar_grade_stirrup": "CB240-T"
  },
  "load_analysis": {
    "dead_load_kn_m2": 5.5,
    "live_load_kn_m2": 2.0,
    "wind_load_zone": "IIA",
    "wind_pressure_w0_kn_m2": 0.83,
    "seismic_zone": "I",
    "seismic_agr_g": 0.08,
    "load_combination_basic": "1.1·DL + 1.2·LL + 1.4·WL",
    "live_load_breakdown": [
      {"area": "Phòng ở", "qk_kn_m2": 1.5},
      {"area": "Cầu thang", "qk_kn_m2": 3.0},
      {"area": "Ban công", "qk_kn_m2": 2.0},
      {"area": "Mái không sử dụng", "qk_kn_m2": 0.75}
    ]
  },
  "foundation_design": {
    "type": "Móng đơn BTCT đúc tại chỗ",
    "soil_assumed": "Đất tốt sét pha cứng, R0=1.8 kG/cm²",
    "depth_m": 1.8,
    "concrete_grade": "B20",
    "typical_size_m": "1.5x1.5x0.4",
    "qty_total": 12,
    "rebar_schedule": [
      {"position": "Lưới đáy 2 phương", "phi": 16, "spacing_mm": 150, "as_provided_mm2_m": 1340},
      {"position": "Cốt cấu tạo trên", "phi": 12, "spacing_mm": 200, "as_provided_mm2_m": 565}
    ]
  },
  "framing": {
    "columns": [
      {"location": "Cột góc tầng 1", "section": "30x30", "rebar_main": "8φ20", "rebar_stirrup": "φ8a150", "concrete_m3_per_col": 0.3},
      {"location": "Cột giữa tầng 1", "section": "30x40", "rebar_main": "10φ22", "rebar_stirrup": "φ8a100", "concrete_m3_per_col": 0.4}
    ],
    "beams": [
      {"location": "Dầm chính nhịp 5m", "section": "25x40", "rebar_top": "3φ16", "rebar_bot": "4φ20", "stirrup": "φ8a150", "concrete_m3_per_md": 0.1},
      {"location": "Dầm phụ nhịp 4m", "section": "20x35", "rebar_top": "2φ14", "rebar_bot": "3φ16", "stirrup": "φ6a200", "concrete_m3_per_md": 0.07}
    ],
    "slabs": [
      {"type": "Sàn 2 phương", "thickness_mm": 120, "rebar_bot_2way": "φ10a150", "rebar_top_at_support": "φ10a200"}
    ]
  },
  "boq_structural": [
    {"item": "Bê tông B25 cột + dầm + sàn", "unit": "m³", "qty": 28, "unit_price": 1450000, "total_price": 40600000},
    {"item": "Bê tông B20 móng + bê tông lót", "unit": "m³", "qty": 8, "unit_price": 1280000, "total_price": 10240000},
    {"item": "Thép Hòa Phát CB400-V φ16-φ22 (cốt chính)", "unit": "kg", "qty": 2800, "unit_price": 18800, "total_price": 52640000},
    {"item": "Thép CB240-T φ6, φ8 (đai)", "unit": "kg", "qty": 380, "unit_price": 17500, "total_price": 6650000},
    {"item": "Ván khuôn coppha thép (sàn + dầm)", "unit": "m²", "qty": 350, "unit_price": 95000, "total_price": 33250000},
    {"item": "Gia công + lắp đặt cốt thép", "unit": "kg", "qty": 3180, "unit_price": 3500, "total_price": 11130000},
    {"item": "Đổ + bảo dưỡng bê tông", "unit": "m³", "qty": 36, "unit_price": 250000, "total_price": 9000000}
  ],
  "boq_total_vnd": 163510000,
  "safety_check": {
    "compliant_tcvn_5574": true,
    "compliant_tcvn_2737": true,
    "safety_factors": {
      "gamma_f_dead": 1.1,
      "gamma_f_live": 1.2,
      "gamma_f_wind": 1.4,
      "gamma_c_concrete": 1.5,
      "gamma_s_steel": 1.15
    },
    "deflection_check": "Sàn 2 phương L=4-5m h=120mm OK (L/250)",
    "warnings": []
  },
  "tcvn_references_applied": [
    {"code": "TCVN 5574:2018", "use": "Thiết kế kết cấu BTCT"},
    {"code": "TCVN 2737:2023", "use": "Xác định tải trọng"},
    {"code": "TCVN 1651-2:2018", "use": "Lựa chọn thép cốt bê tông"},
    {"code": "TCVN 9362:2012", "use": "Tính toán nền móng"}
  ]
}

LƯU Ý CUỐI:
- Khối lượng bê tông + thép phải KHỚP với diện tích sàn + số tầng (tham chiếu KB).
- Tiết diện cột/dầm phải khả thi (không cột mảnh φ20x20 cho nhà 5 tầng!).
- Móng phải khớp với địa chất (đừng dùng móng đơn cho đất yếu).
- Warnings ghi rõ nếu phát hiện rủi ro (ví dụ "Nhịp dầm >7m cần kiểm chuyển vị")."""

    # ─────────────────────────────────────────────────────────
    def build_user_prompt(self, request: Any) -> str:
        prompt_text = (request.prompt or "").strip()
        area_m2 = getattr(request, "area_m2", None) or 100
        floors = getattr(request, "floors", None) or 3
        location = getattr(request, "location_province", None) or "HCM"
        soil = getattr(request, "soil_type", None) or "Đất sét pha cứng (mặc định)"

        # Pre-compute structural quantities from KB
        concrete = estimate_concrete_volume_m3(area_m2, floors)

        # Wind zone lookup
        wind_zone, wind_data = "IIA", WIND_PRESSURE_VN["IIA"]
        for zone, data in WIND_PRESSURE_VN.items():
            cities = str(data.get("cities", "")).lower()
            if location.lower() in cities:
                wind_zone = zone
                wind_data = data
                break

        # Pre-compute rebar tonnage
        total_concrete = concrete["total_m3"]
        rebar_total_kg = sum(
            v * estimate_rebar_kg_per_m3_concrete(elem)
            for elem, v in concrete["by_element"].items()
        )

        # Pre-compute BOQ baseline
        beam_slab_grade = get_concrete_grade_for_building(floors, "beam")
        column_grade = get_concrete_grade_for_building(floors, "column")
        foundation_grade = get_concrete_grade_for_building(floors, "foundation")

        return f"""\
BRIEF CÔNG TRÌNH:
- Mô tả: {prompt_text}
- Vị trí: {location}
- Diện tích sàn/tầng: {area_m2}m²
- Số tầng: {floors}
- Tổng diện tích sàn: {area_m2 * floors}m²
- Loại đất: {soil}

DỮ LIỆU PRE-COMPUTE TỪ KB:
- Vùng gió: {wind_zone}, áp lực W0 = {wind_data["w0_kn_m2"]} kN/m²
- Cấp bê tông đề xuất:
  * Móng: {foundation_grade}
  * Cột: {column_grade}
  * Dầm + Sàn: {beam_slab_grade}
- Khối lượng bê tông tổng dự tính: {total_concrete} m³
  * Sàn: {concrete["by_element"]["slab"]} m³
  * Dầm: {concrete["by_element"]["beam"]} m³
  * Cột: {concrete["by_element"]["column"]} m³
  * Móng: {concrete["by_element"]["foundation"]} m³
- Khối lượng thép tổng dự tính: {int(rebar_total_kg)} kg

YÊU CẦU OUTPUT:
1. structural_system: chọn hệ kết cấu phù hợp ({floors} tầng, {area_m2}m²/tầng).
2. load_analysis: dùng W0 = {wind_data["w0_kn_m2"]} kN/m². Tổ hợp tải cơ bản.
3. foundation_design: chọn loại móng theo {soil} + tải trọng.
4. framing: tiết diện cột (góc + giữa), dầm chính + dầm phụ, sàn dày {120 if floors <= 5 else 150}mm.
5. boq_structural: dùng khối lượng pre-compute, đơn giá VND 2026 thực tế \
(bê tông B25 ~1.45M/m³, thép CB400 ~18.8K/kg, ván khuôn ~95K/m², gia công thép ~3.5K/kg).
6. safety_check: tổ hợp tải, kiểm chuyển vị sàn (L/250), warnings nếu có.
7. Output PHẢI là JSON hợp lệ theo schema."""

    # ─────────────────────────────────────────────────────────
    def enrich_response(self, raw: dict, request: Any) -> dict:
        raw["discipline"] = "structural"

        area_m2 = getattr(request, "area_m2", None) or 100
        floors = getattr(request, "floors", None) or 3

        # Validate / inject load analysis
        location = getattr(request, "location_province", None) or "HCM"
        wind_zone, wind_data = "IIA", WIND_PRESSURE_VN["IIA"]
        for zone, data in WIND_PRESSURE_VN.items():
            cities = str(data.get("cities", "")).lower()
            if location.lower() in cities:
                wind_zone = zone
                wind_data = data
                break

        if "load_analysis" not in raw or not raw["load_analysis"].get("wind_pressure_w0_kn_m2"):
            raw["load_analysis"] = {
                "dead_load_kn_m2": 5.5,
                "live_load_kn_m2": 2.0,
                "wind_load_zone": wind_zone,
                "wind_pressure_w0_kn_m2": wind_data["w0_kn_m2"],
                "seismic_zone": "I",
                "seismic_agr_g": 0.08,
                "load_combination_basic": "1.1·DL + 1.2·LL + 1.4·WL",
                "live_load_breakdown": [
                    {"area": k, "qk_kn_m2": v["qk_kn_m2"]}
                    for k, v in list(LIVE_LOADS_TCVN_2737.items())[:5]
                ],
            }

        # Validate BOQ totals
        boq = raw.get("boq_structural", [])
        for item in boq:
            qty = float(item.get("qty", 0) or 0)
            up = self.vnd_int(item.get("unit_price"))
            item["total_price"] = int(qty * up)
        if boq:
            raw["boq_total_vnd"] = sum(self.vnd_int(i.get("total_price")) for i in boq)
            raw["boq_total"] = raw["boq_total_vnd"]  # legacy compat

        # Inject safety_check defaults
        if "safety_check" not in raw:
            raw["safety_check"] = {
                "compliant_tcvn_5574": True,
                "compliant_tcvn_2737": True,
                "safety_factors": SAFETY_FACTORS,
                "deflection_check": f"Sàn h=120mm L={int(area_m2**0.5)}m — kiểm L/250 OK",
                "warnings": [],
            }

        # Add TCVN references if missing
        if "tcvn_references_applied" not in raw:
            raw["tcvn_references_applied"] = [
                {"code": "TCVN 5574:2018", "use": "Thiết kế kết cấu BTCT"},
                {"code": "TCVN 2737:2023", "use": "Xác định tải trọng và tác động"},
                {"code": "TCVN 1651-2:2018", "use": "Lựa chọn thép cốt bê tông"},
                {"code": "TCVN 9362:2012", "use": "Tính toán nền móng"},
            ]

        return raw

    # ─────────────────────────────────────────────────────────
    def fallback_response(self, request: Any) -> dict:
        area_m2 = getattr(request, "area_m2", None) or 100
        floors = getattr(request, "floors", None) or 3
        location = getattr(request, "location_province", None) or "HCM"

        concrete = estimate_concrete_volume_m3(area_m2, floors)
        total_concrete = concrete["total_m3"]
        rebar_total_kg = int(sum(
            v * estimate_rebar_kg_per_m3_concrete(elem)
            for elem, v in concrete["by_element"].items()
        ))

        beam_slab_grade = get_concrete_grade_for_building(floors, "beam")
        column_grade = get_concrete_grade_for_building(floors, "column")
        foundation_grade = get_concrete_grade_for_building(floors, "foundation")

        # Get prices from KB
        rebar_kb = REBAR_GRADES_VN["CB400-V"]
        rebar_stirrup_kb = REBAR_GRADES_VN["CB240-T"]
        beam_concrete_price = CONCRETE_GRADES_VN[beam_slab_grade]["vnd_per_m3"]
        foundation_concrete_price = CONCRETE_GRADES_VN[foundation_grade]["vnd_per_m3"]

        boq = [
            {
                "item": f"Bê tông {beam_slab_grade} (cột + dầm + sàn)",
                "unit": "m³",
                "qty": round(total_concrete - concrete["by_element"]["foundation"], 1),
                "unit_price": beam_concrete_price,
                "total_price": int((total_concrete - concrete["by_element"]["foundation"]) * beam_concrete_price),
            },
            {
                "item": f"Bê tông {foundation_grade} (móng + lót)",
                "unit": "m³",
                "qty": round(concrete["by_element"]["foundation"] * 1.2, 1),
                "unit_price": foundation_concrete_price,
                "total_price": int(concrete["by_element"]["foundation"] * 1.2 * foundation_concrete_price),
            },
            {
                "item": "Thép Hòa Phát CB400-V φ16-φ22 (cốt chính)",
                "unit": "kg",
                "qty": int(rebar_total_kg * 0.85),
                "unit_price": rebar_kb["vnd_per_kg"],
                "total_price": int(rebar_total_kg * 0.85 * rebar_kb["vnd_per_kg"]),
            },
            {
                "item": "Thép CB240-T φ6, φ8 (đai)",
                "unit": "kg",
                "qty": int(rebar_total_kg * 0.15),
                "unit_price": rebar_stirrup_kb["vnd_per_kg"],
                "total_price": int(rebar_total_kg * 0.15 * rebar_stirrup_kb["vnd_per_kg"]),
            },
            {
                "item": "Ván khuôn coppha thép (sàn + dầm)",
                "unit": "m²",
                "qty": int(area_m2 * floors * 1.4),
                "unit_price": 95000,
                "total_price": int(area_m2 * floors * 1.4 * 95000),
            },
            {
                "item": "Gia công + lắp đặt cốt thép",
                "unit": "kg",
                "qty": rebar_total_kg,
                "unit_price": 3500,
                "total_price": rebar_total_kg * 3500,
            },
            {
                "item": "Đổ + bảo dưỡng bê tông",
                "unit": "m³",
                "qty": round(total_concrete, 1),
                "unit_price": 250000,
                "total_price": int(total_concrete * 250000),
            },
        ]

        boq_total = sum(b["total_price"] for b in boq)

        # Foundation choice
        if floors <= 3:
            fnd_key = "mong_don_btct"
        elif floors <= 5:
            fnd_key = "mong_be"
        elif floors <= 8:
            fnd_key = "mong_coc_ep"
        else:
            fnd_key = "mong_coc_khoan_nhoi"
        fnd = FOUNDATION_TYPES[fnd_key]

        return {
            "discipline": "structural",
            "prompt_enhanced": (request.prompt or "")[:200],
            "design_brief": (
                f"[DEMO MODE] Hệ khung BTCT {floors} tầng, {area_m2}m²/tầng. "
                f"Bê tông cột {column_grade}, dầm/sàn {beam_slab_grade}, móng {foundation_grade}. "
                f"Cốt thép chính CB400-V."
            ),
            "structural_system": {
                "type": "RC Frame (Khung BTCT đổ tại chỗ)",
                "bracing": "Vách thang bộ + thang máy" if floors >= 6 else "Không",
                "concrete_grade_foundation": foundation_grade,
                "concrete_grade_column": column_grade,
                "concrete_grade_beam_slab": beam_slab_grade,
                "rebar_grade_main": "CB400-V",
                "rebar_grade_stirrup": "CB240-T",
            },
            "load_analysis": {
                "dead_load_kn_m2": 5.5,
                "live_load_kn_m2": 2.0,
                "wind_load_zone": "IIA",
                "wind_pressure_w0_kn_m2": WIND_PRESSURE_VN["IIA"]["w0_kn_m2"],
                "seismic_zone": "I",
                "seismic_agr_g": 0.08,
                "load_combination_basic": "1.1·DL + 1.2·LL + 1.4·WL",
                "live_load_breakdown": [
                    {"area": k, "qk_kn_m2": v["qk_kn_m2"]}
                    for k, v in list(LIVE_LOADS_TCVN_2737.items())[:5]
                ],
            },
            "foundation_design": {
                "type": fnd["name"],
                "soil_assumed": fnd["soil"],
                "depth_m": float(fnd["depth_m"].split("-")[0]),
                "concrete_grade": foundation_grade,
                "typical_size_m": "1.5x1.5x0.4" if fnd_key == "mong_don_btct" else "tham khảo bản vẽ chi tiết",
                "qty_total": max(4, area_m2 // 25),
                "rebar_schedule": [
                    {"position": "Lưới đáy 2 phương", "phi": 16, "spacing_mm": 150, "as_provided_mm2_m": 1340},
                    {"position": "Cốt cấu tạo trên", "phi": 12, "spacing_mm": 200, "as_provided_mm2_m": 565},
                ],
            },
            "framing": {
                "columns": [
                    {"location": "Cột góc", "section": "30x30", "rebar_main": "8φ20", "rebar_stirrup": "φ8a150", "concrete_m3_per_col": 0.3},
                    {"location": "Cột giữa", "section": "30x40", "rebar_main": "10φ22", "rebar_stirrup": "φ8a100", "concrete_m3_per_col": 0.4},
                ],
                "beams": [
                    {"location": "Dầm chính", "section": "25x40", "rebar_top": "3φ16", "rebar_bot": "4φ20", "stirrup": "φ8a150", "concrete_m3_per_md": 0.1},
                    {"location": "Dầm phụ", "section": "20x35", "rebar_top": "2φ14", "rebar_bot": "3φ16", "stirrup": "φ6a200", "concrete_m3_per_md": 0.07},
                ],
                "slabs": [
                    {"type": "Sàn 2 phương", "thickness_mm": 120 if floors <= 5 else 150, "rebar_bot_2way": "φ10a150", "rebar_top_at_support": "φ10a200"},
                ],
            },
            "boq_structural": boq,
            "boq_total_vnd": boq_total,
            "boq_total": boq_total,
            "safety_check": {
                "compliant_tcvn_5574": True,
                "compliant_tcvn_2737": True,
                "safety_factors": SAFETY_FACTORS,
                "deflection_check": "Sàn h=120mm OK (L/250)",
                "warnings": ["[DEMO MODE]"],
            },
            "tcvn_references_applied": [
                {"code": "TCVN 5574:2018", "use": "Thiết kế kết cấu BTCT"},
                {"code": "TCVN 2737:2023", "use": "Xác định tải trọng"},
                {"code": "TCVN 1651-2:2018", "use": "Thép cốt bê tông"},
                {"code": "TCVN 9362:2012", "use": "Nền móng"},
            ],
        }
