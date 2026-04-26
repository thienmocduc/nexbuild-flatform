"""ArchitectureAgent — Vietnamese architecture design specialist.

Generates 3 concept variants + site analysis (sun path, wind, climate)
+ floor plan layout + facade materials + estimated construction cost
+ TCVN compliance check.
"""
from __future__ import annotations

from typing import Any

from api.services.agents.base_agent import BaseAgent
from api.services.agents.knowledge_base.architecture_kb import (
    CONSTRUCTION_COST_BENCHMARKS_VND_PER_M2,
    TCVN_CODES_ARCHITECTURE,
    VN_ARCH_MATERIALS,
    VN_CITIES_GEO,
    VN_CLIMATE_ZONES,
    estimate_construction_cost,
    sun_path,
)


class ArchitectureAgent(BaseAgent):
    discipline = "architecture"
    temperature = 0.8
    max_output_tokens = 8192

    # ─────────────────────────────────────────────────────────
    # SYSTEM PROMPT — 2200+ chars
    # ─────────────────────────────────────────────────────────
    system_prompt = """\
BẠN LÀ: Kiến trúc sư công trình SENIOR với 20 năm kinh nghiệm tại Việt Nam.
Từng thiết kế cho VTN Architects (Võ Trọng Nghĩa), MIA Design Studio, KIENTRUC O. \
Am hiểu sâu TCVN 4205, 9411, 6160, 5687, QCVN 02/BXD, QCVN 06/BXD. \
Chuyên thiết kế nhà phố, biệt thự, công trình thấp tầng và trung tầng \
phù hợp khí hậu nhiệt đới gió mùa, văn hóa Á Đông, vật liệu xây dựng VN.

NHIỆM VỤ: Phân tích brief khách, tạo 3 PHƯƠNG ÁN KIẾN TRÚC khác nhau \
về parti (concept tổ chức không gian), mỗi phương án có:
- Tên concept rõ ràng (ví dụ "Tropical Courtyard", "Linear Bar Form", "Stacked Garden")
- Mặt đứng (facade) chính + vật liệu hoàn thiện ngoại thất
- Bố cục mặt bằng từng tầng (zoning chính, không cần chi tiết kỹ thuật)
- Định hướng mở cửa theo sun path + gió chủ đạo
- Render prompt 1500+ chars cho ai gen ảnh phối cảnh
- Compliance check với TCVN cơ bản

QUY TẮC THIẾT KẾ KIẾN TRÚC VIỆT NAM:
1. KHÍ HẬU TRƯỚC TIÊN:
   - Miền Bắc: Cửa hướng Nam/Đông Nam (đón nắng đông, gió mát hè).
   - Miền Trung: Mái dốc 30-40°, móng cao chống ngập, neo mái chống bão.
   - Miền Nam: Mở cửa Đông Nam đón gió, mái đua sâu chống mưa xiên.
   - Tránh hướng Tây cho phòng chính. Lam che cửa Tây sâu ≥1.0m.
2. PHONG THỦY (NẾU KHÁCH YÊU CẦU):
   - Cửa chính không thẳng cửa hậu/WC.
   - Bếp không đối diện WC.
   - Phòng ngủ chính: hướng tốt theo cung mệnh (nếu khách cấp tuổi).
3. CÔNG NĂNG:
   - Diện tích phòng: ngủ ≥9m², khách ≥14m², WC ≥3m² (TCVN 4205).
   - Cao tầng: tầng 1 ≥3.0m (kể cả gác lửng), tầng trên ≥2.7m.
   - Cầu thang: bậc 25-30cm rộng, 15-17cm cao, 1 vế ≥1.2m rộng.
4. ÁNH SÁNG TỰ NHIÊN (TCVN 9411):
   - Diện tích cửa sổ ≥1/8 diện tích sàn.
   - Hệ số chiếu sáng (DF) ≥0.5% phòng ở, ≥1.0% bếp.
5. THÔNG GIÓ ĐỐI LƯU:
   - Mỗi phòng có ≥2 cửa/lỗ thông gió đối diện.
   - Lưu lượng gió tươi: ngủ 7 l/s/người, khách 10, bếp 20 (TCVN 5687).
6. PCCC (TCVN 6160 / QCVN 06):
   - Nhà cao tầng: ≥1 cầu thang thoát hiểm /100 người, rộng ≥1.0m.
   - Khoảng cách đến lối thoát ≤25m.
   - Bậc chịu lửa: I-II với nhà ≥5 tầng.
7. STRUCTURAL HINTS (sơ bộ, agent kết cấu sẽ tính chi tiết):
   - Nhịp dầm BTCT khả thi: ≤6m an toàn, 6-8m cần dầm cao, ≥9m cần ứng suất trước.
   - Cao trình tầng tiêu chuẩn 3.0-3.6m (cho điều hòa + đèn + hệ máy).
   - Console (đua) tối đa 1.5-2.0m không cần cột phụ.
8. CHỈ GIỚI XÂY DỰNG:
   - Lùi sau lộ giới ≥3m (đường ≥12m).
   - Mật độ xây dựng ≤80% (đất ≤200m²), ≤70% (đất 200-500m²).
   - Chiều cao theo quy hoạch khu vực.

OUTPUT: PHẢI là JSON hợp lệ theo SCHEMA dưới đây (không markdown, \
không text giải thích bên ngoài JSON):

{
  "discipline": "architecture",
  "prompt_enhanced": "Diễn đạt brief 1 câu rõ nghĩa",
  "design_brief": "Tổng quan concept 2-3 câu",
  "site_analysis": {
    "city": "HCM",
    "climate_zone_name": "Nhiệt đới ẩm cận xích đạo miền Nam",
    "sun_path_summary": "Mặt trời cao đỉnh đầu mùa hè (zenith 12.5°), thấp Nam mùa đông (zenith 34.3°). Tránh cửa Tây, mở cửa Đông Nam.",
    "wind_summary": "Mùa khô (T11-T4): Đông Bắc mát. Mùa mưa (T5-T10): Tây Nam ẩm.",
    "design_recommendations": [
      "Đặt phòng khách + ngủ chính hướng Nam/Đông Nam",
      "WC + kho hướng Tây",
      "Mái đua/lam che cửa Tây ≥1.2m sâu"
    ]
  },
  "concept_variants": [
    {
      "variant_idx": 0,
      "concept_name": "Tropical Courtyard — Phương án A",
      "parti_diagram": "U-shape ôm sân trong, mở Bắc đón gió",
      "description": "200-300 chữ mô tả ý tưởng, không gian, trải nghiệm",
      "facade_description": "Mặt đứng chính: gạch không nung trắng + lam dọc gỗ tếch + kính Low-E nâu",
      "floor_plans": [
        {
          "floor": 1,
          "area_m2": 80,
          "rooms": [
            {"name": "Phòng khách", "area_m2": 28, "orientation": "South"},
            {"name": "Bếp + Ăn", "area_m2": 22, "orientation": "East"},
            {"name": "WC khách", "area_m2": 4, "orientation": "West"},
            {"name": "Sân trong", "area_m2": 12, "orientation": "Center"}
          ]
        },
        {
          "floor": 2,
          "area_m2": 80,
          "rooms": [
            {"name": "Phòng ngủ master", "area_m2": 25, "orientation": "South"},
            {"name": "Phòng ngủ 2", "area_m2": 16, "orientation": "East"},
            {"name": "Phòng làm việc", "area_m2": 12, "orientation": "Southeast"},
            {"name": "WC chung", "area_m2": 6, "orientation": "West"}
          ]
        }
      ],
      "facade_materials": [
        {"item": "Gạch không nung AAC", "area_m2": 180, "qty_unit": "viên", "qty": 1500, "unit_price": 12500},
        {"item": "Sơn ngoại thất Dulux Weathershield", "area_m2": 180, "qty_unit": "lon", "qty": 6, "unit_price": 1280000},
        {"item": "Kính hộp Low-E Saint-Gobain 6+9A+6mm", "qty": 25, "qty_unit": "m²", "unit_price": 1850000},
        {"item": "Lam dọc gỗ tếch nhân tạo Composite", "qty": 60, "qty_unit": "md", "unit_price": 580000}
      ],
      "structural_hint": "Khung BTCT 5 cột x 4 cột, nhịp 4-5m, dầm BxH=25x40, sàn dày 120mm",
      "compliance_check": {
        "tcvn_4205_room_size": "OK (ngủ 16-25m²)",
        "tcvn_9411_natural_light": "OK (cửa sổ ≥1/8 sàn)",
        "tcvn_5687_ventilation": "OK (đối lưu nhờ sân trong)",
        "density_check": "Mật độ XD ~70% — OK với đất 100-200m²",
        "warnings": []
      },
      "render_prompt": "1500+ chars detailed prompt — see template below",
      "image_url": null
    }
    // ... 2 concept_variants nữa
  ],
  "estimated_cost": {
    "total_floor_area_m2": 240,
    "finish_level": "Hoàn thiện cơ bản",
    "cost_per_m2_vnd": 6500000,
    "cost_min_vnd": 1080000000,
    "cost_typical_vnd": 1560000000,
    "cost_max_vnd": 2160000000,
    "note": "Dự toán sơ bộ — chưa gồm thiết kế phí + nội thất rời"
  },
  "tcvn_references_applied": [
    {"code": "TCVN 4205:2012", "use": "Diện tích phòng tối thiểu"},
    {"code": "TCVN 9411:2012", "use": "Chiếu sáng tự nhiên"},
    {"code": "TCVN 5687:2010", "use": "Thông gió"},
    {"code": "QCVN 02:2009/BXD", "use": "Áp lực gió thiết kế"}
  ]
}

RENDER PROMPT TEMPLATE (1500+ chars cho mỗi concept):

"EXTERIOR ARCHITECTURAL VISUALIZATION: [concept_name] residential villa in \
[city, country], [time_of_day] [season] tropical climate. SITE & ORIENTATION: \
[lot_size] m² lot, [floors]-storey building, façade facing [orientation], \
mature tropical vegetation surrounding (banana palms, frangipani, lotus pond). \
ARCHITECTURAL FORM: [parti_description — U-shape/L-shape/linear bar/stacked]. \
FACADE MATERIALS: walls in [material + color/finish]; windows: [glazing spec + \
mullion material]; sun shading: [horizontal louvers/vertical fins/perforated screen]; \
roof: [pitch + material + ridge detail]. ENTRY: [door + portico description]. \
LANDSCAPE: [hardscape + softscape elements]. LIGHTING: golden hour 16:30-17:30 \
warm sunlight 4500K, fill from sky 6500K, accent uplighting 3000K on facade textures. \
CAMERA: Phase One XF IQ4, 35mm f/8.0, ISO 100, polarizing filter, eye-level perspective \
from approach driveway. POST-PROCESSING: V-Ray 6 Quality, photoreal architectural \
visualization, deep DOF, slight cinematic color grade Fuji Pro 400H, sharp building, \
soft sky bokeh, subtle atmospheric haze, micro-details (concrete formwork lines, \
plant leaf veins, glass reflections). NEGATIVE: cartoonish, oversaturated greens, \
unrealistic perspective, distorted columns, AI artifacts, generic stock photo render."

LƯU Ý CUỐI:
- 3 concept_variants phải khác nhau RÕ RỆT về parti (organization), không chỉ khác facade.
- Mặt bằng phải khả thi với diện tích đất + số tầng khách yêu cầu.
- Compliance_check ghi rõ OK / WARNING. Nếu vi phạm TCVN → ghi vào warnings.
- Estimated_cost dùng benchmark VND 2026 thực tế (cấp finish khách yêu cầu).
"""

    # ─────────────────────────────────────────────────────────
    def build_user_prompt(self, request: Any) -> str:
        prompt_text = (request.prompt or "").strip()
        area_m2 = getattr(request, "area_m2", None) or 80
        floors = getattr(request, "floors", None) or 2
        location = getattr(request, "location_province", None) or "HCM"
        budget = getattr(request, "budget_million", None)
        style = getattr(request, "style", "modern") or "modern"

        # Pre-compute site analysis from KB (sun path + climate)
        sun = sun_path(location)
        geo = VN_CITIES_GEO.get(location, VN_CITIES_GEO["HCM"])
        climate = VN_CLIMATE_ZONES.get(geo["climate_zone"], VN_CLIMATE_ZONES["south_tropical"])

        budget_line = f"{int(budget)} triệu VND" if budget else "linh hoạt"

        # Pre-compute construction cost benchmark
        if budget:
            cost_per_m2 = (budget * 1_000_000) / (area_m2 * floors)
            if cost_per_m2 < 5_000_000:
                finish_level = "co_so"
            elif cost_per_m2 < 9_000_000:
                finish_level = "ban_hoan_thien"
            elif cost_per_m2 < 18_000_000:
                finish_level = "cao_cap"
            else:
                finish_level = "luxury"
        else:
            finish_level = "ban_hoan_thien"

        cost_estimate = estimate_construction_cost(area_m2, floors, finish_level)

        return f"""\
BRIEF CÔNG TRÌNH:
- Mô tả: {prompt_text}
- Vị trí: {location} (lat {geo["lat"]}°)
- Diện tích sàn/tầng: {area_m2}m²
- Số tầng: {floors}
- Tổng diện tích sàn: {area_m2 * floors}m²
- Phong cách kiến trúc: {style}
- Ngân sách xây dựng: {budget_line}

DỮ LIỆU SITE (đã pre-compute từ KB):
- Climate zone: {climate["name"]}
- Nhiệt độ: {climate["temp_range"]}, Lượng mưa: {climate["rainfall_mm_year"]} mm/năm
- Gió chủ đạo mùa hè: {climate["dominant_wind_summer"]}
- Gió chủ đạo mùa đông: {climate["dominant_wind_winter"]}
- Sun path noon zenith: hè {sun["summer_solstice_jun21"]["noon_sun_zenith_deg"]}°, \
xuân/thu {sun["equinox_mar21_sep23"]["noon_sun_zenith_deg"]}°, \
đông {sun["winter_solstice_dec22"]["noon_sun_zenith_deg"]}°
- Khuyến nghị: {sun["design_recommendation"]}
- Design keys khí hậu: {climate["design_keys"]}

DỮ LIỆU COST BENCHMARK (VND 2026):
- Cấp hoàn thiện đề xuất: {cost_estimate["finish_level"]}
- Cost/m²: {cost_estimate["cost_per_m2_vnd"]:,} VND
- Tổng dự toán: {cost_estimate["cost_min_vnd"]:,} - {cost_estimate["cost_typical_vnd"]:,} - {cost_estimate["cost_max_vnd"]:,} VND

YÊU CẦU OUTPUT:
1. site_analysis: dùng đúng số liệu sun_path + climate đã pre-compute trên.
2. 3 concept_variants với parti KHÁC NHAU rõ rệt (ví dụ: Tropical Courtyard / \
Linear Bar / Stacked Garden / Floating Box / L-shape opens to view).
3. Mỗi concept có floor_plans cho từng tầng với rooms + area + orientation.
4. facade_materials: ≥4 hạng mục với brand + qty + unit_price (dùng KB VN_ARCH_MATERIALS).
5. structural_hint: gợi ý sơ bộ khung BTCT, nhịp dầm khả thi.
6. compliance_check: kiểm 4 mục TCVN cơ bản, ghi warnings nếu vi phạm.
7. estimated_cost: dùng pre-compute cost trên.
8. render_prompt: 1500+ chars sẵn sàng feed Imagen.
9. Output PHẢI là JSON hợp lệ theo schema."""

    # ─────────────────────────────────────────────────────────
    def enrich_response(self, raw: dict, request: Any) -> dict:
        raw["discipline"] = "architecture"

        # Inject site_analysis from KB if Gemini missed/weak
        location = getattr(request, "location_province", None) or "HCM"
        if not raw.get("site_analysis", {}).get("city"):
            sun = sun_path(location)
            geo = VN_CITIES_GEO.get(location, VN_CITIES_GEO["HCM"])
            climate = VN_CLIMATE_ZONES.get(geo["climate_zone"], VN_CLIMATE_ZONES["south_tropical"])
            raw["site_analysis"] = {
                "city": location,
                "latitude": geo["lat"],
                "climate_zone_name": climate["name"],
                "sun_path_summary": (
                    f'Hè zenith {sun["summer_solstice_jun21"]["noon_sun_zenith_deg"]}°, '
                    f'đông {sun["winter_solstice_dec22"]["noon_sun_zenith_deg"]}°'
                ),
                "wind_summary": (
                    f'Hè: {climate["dominant_wind_summer"]}. '
                    f'Đông: {climate["dominant_wind_winter"]}'
                ),
                "design_recommendations": [sun["design_recommendation"], climate["design_keys"]],
            }

        # Validate cost estimate
        area_m2 = getattr(request, "area_m2", None) or 80
        floors = getattr(request, "floors", None) or 2
        if "estimated_cost" not in raw or not raw["estimated_cost"].get("cost_typical_vnd"):
            raw["estimated_cost"] = estimate_construction_cost(area_m2, floors)

        # Inject TCVN references list
        if "tcvn_references_applied" not in raw:
            raw["tcvn_references_applied"] = [
                {"code": k, "use": v["title"]}
                for k, v in list(TCVN_CODES_ARCHITECTURE.items())[:4]
            ]

        return raw

    # ─────────────────────────────────────────────────────────
    def fallback_response(self, request: Any) -> dict:
        area_m2 = getattr(request, "area_m2", None) or 80
        floors = getattr(request, "floors", None) or 2
        location = getattr(request, "location_province", None) or "HCM"

        sun = sun_path(location)
        geo = VN_CITIES_GEO.get(location, VN_CITIES_GEO["HCM"])
        climate = VN_CLIMATE_ZONES.get(geo["climate_zone"], VN_CLIMATE_ZONES["south_tropical"])
        cost = estimate_construction_cost(area_m2, floors)

        concepts = [
            ("Tropical Courtyard", "U-shape ôm sân trong giữa nhà", "Mặt tiền gạch trắng + lam gỗ"),
            ("Linear Bar Form", "Khối thẳng tuyến dài, mặt tiền nhỏ", "Mặt tiền kính + bê tông trần"),
            ("Stacked Garden", "Tầng trên lùi vào tạo sân vườn ngoài trời", "Mặt tiền kính + gỗ + cây xanh"),
        ]

        variants = []
        for i, (name, parti, facade) in enumerate(concepts):
            variants.append({
                "variant_idx": i,
                "concept_name": f"{name} — Phương án {chr(65+i)}",
                "parti_diagram": parti,
                "description": f"[DEMO] {name}: {parti}. {facade}.",
                "facade_description": facade,
                "floor_plans": [
                    {"floor": f, "area_m2": area_m2, "rooms": [
                        {"name": "Khu chính", "area_m2": area_m2 * 0.7, "orientation": "South"},
                        {"name": "WC + kho", "area_m2": area_m2 * 0.15, "orientation": "West"},
                    ]} for f in range(1, floors + 1)
                ],
                "facade_materials": [
                    {"item": v["name"], "qty": 50, "qty_unit": v["unit"], "unit_price": v["price"]}
                    for v in list(VN_ARCH_MATERIALS.values())[:4]
                ],
                "structural_hint": f"Khung BTCT, nhịp dầm 4-5m, sàn dày 120mm, {floors} tầng",
                "compliance_check": {"warnings": ["[DEMO MODE]"]},
                "render_prompt": f"[DEMO] {name} villa in {location}, tropical climate, photorealistic, V-Ray render quality, 8K",
                "image_url": None,
            })

        return {
            "discipline": "architecture",
            "prompt_enhanced": (request.prompt or "")[:200],
            "design_brief": "[DEMO MODE — backend chưa kết nối Gemini API]",
            "site_analysis": {
                "city": location,
                "latitude": geo["lat"],
                "climate_zone_name": climate["name"],
                "sun_path_summary": f'Hè zenith {sun["summer_solstice_jun21"]["noon_sun_zenith_deg"]}°',
                "wind_summary": f'{climate["dominant_wind_summer"]} / {climate["dominant_wind_winter"]}',
                "design_recommendations": [sun["design_recommendation"]],
            },
            "concept_variants": variants,
            "estimated_cost": cost,
            "tcvn_references_applied": [
                {"code": k, "use": v["title"]}
                for k, v in list(TCVN_CODES_ARCHITECTURE.items())[:4]
            ],
        }
