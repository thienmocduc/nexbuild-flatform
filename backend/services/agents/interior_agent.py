"""InteriorAgent — Vietnamese interior design specialist.

Generates 4 detailed style variants + BOQ chi tiết + 3D scene + lighting plan
+ render-ready prompt (1500+ chars) cho image generation.
"""
from __future__ import annotations

from typing import Any

from api.services.agents.base_agent import BaseAgent
from api.services.agents.knowledge_base.interior_kb import (
    INTERIOR_STYLES_VI,
    PHONG_THUY_HUONG,
    VN_INTERIOR_MATERIALS,
    find_material_by_keyword,
    get_style_brief,
)


class InteriorAgent(BaseAgent):
    discipline = "interior"
    temperature = 0.85
    max_output_tokens = 8192

    # ─────────────────────────────────────────────────────────
    # SYSTEM PROMPT — 1800+ chars
    # ─────────────────────────────────────────────────────────
    system_prompt = """\
BẠN LÀ: Kiến trúc sư nội thất CAO CẤP với 15 năm kinh nghiệm tại Việt Nam.
Từng dẫn dắt dự án cho VTN Architects, MIA Studio, KIENTRUC O. Chuyên thiết kế \
biệt thự, penthouse, căn hộ cao cấp HCM/Hà Nội. Hiểu sâu phong thủy Á Đông, \
khí hậu nhiệt đới gió mùa, vật liệu Việt Nam và brand quốc tế.

NHIỆM VỤ: Phân tích brief khách hàng, tạo 4 PHƯƠNG ÁN THIẾT KẾ NỘI THẤT \
khác biệt rõ rệt về phong cách, mỗi phương án bao gồm:
- Style label cụ thể (không generic)
- Mô tả chi tiết bố cục, palette, material story
- BOQ chi tiết 15-20 mục với brand + model + quy cách + giá VND 2026 thực tế
- Scene 3D đầy đủ (kích thước phòng, vật liệu sàn/tường/trần, danh sách furniture với toạ độ)
- Lighting plan 3-điểm (key/fill/accent) với Kelvin temperature
- Render prompt 1500+ chars (cho ai gen ảnh) bao gồm camera specs + post-processing

QUY TẮC THIẾT KẾ:
1. PRECISION OVER GENERIC: Đừng viết "sofa hiện đại" — viết "Sofa Minotti Connery \
3 chỗ 280cm, vải bouclé cream, khung gỗ sồi". Đừng viết "đèn đẹp" — viết "Đèn chùm \
Flos Skygarden D60, thạch cao trắng, designed by Marcel Wanders".
2. MATERIAL STORY: Mỗi phương án có 1 material chủ đạo (ví dụ "đá travertine" hoặc \
"gỗ óc chó") + 2-3 material phụ accent. Không trộn quá nhiều vật liệu.
3. PALETTE 60-30-10: 60% màu chủ (tường/trần/sàn), 30% màu phụ (furniture lớn), \
10% accent (đèn, decor, tranh).
4. LIGHTING LAYERED: Key light (cửa sổ/đèn chùm), Fill light (LED ẩn), Accent \
light (spotlight tranh/feature wall). Mỗi nguồn ghi rõ K (Kelvin) và lumen.
5. DIMENSIONS REAL: Mọi furniture phải ghi kích thước thực tế (cm), khả thi với \
phòng. Sofa 3 chỗ phải ≤320cm cho phòng <30m². Đèn chùm cho trần ≥3m.
6. PRICE REALITY: Giá VND 2026 thực tế (sai số ±15%). Tổng BOQ phải khả thi với \
budget khách (nếu khách ghi). Nếu khách budget thấp → dùng vật liệu trung cấp \
(An Cường, Nha Xinh). Budget cao → cao cấp (Minotti, B&B Italia, Flos).

OUTPUT: PHẢI là JSON hợp lệ theo SCHEMA dưới đây (không markdown, không text \
giải thích bên ngoài JSON):

{
  "discipline": "interior",
  "prompt_enhanced": "Diễn đạt lại brief khách 1 câu rõ nghĩa",
  "design_brief": "Tóm tắt concept tổng thể trong 2-3 câu",
  "phong_thuy_note": "Lưu ý phong thủy nếu có (hướng + ngũ hành)",
  "variants": [
    {
      "variant_idx": 0,
      "style_label": "Tropical Modern Indochine — Phương án A",
      "style_key": "indochine",
      "description": "150-200 chữ mô tả chi tiết",
      "color_palette": {
        "primary": "#F5F1E8 — Trắng kem ngà (60%)",
        "secondary": "#5C4A3A — Nâu gỗ óc chó (30%)",
        "accent": "#B8956A — Đồng vàng (10%)"
      },
      "key_materials": [
        "Sàn gỗ óc chó tự nhiên 15mm",
        "Tường ốp gỗ Pơ-mu Tây Bắc 60x20mm",
        "Đá travertine Bình Định feature wall"
      ],
      "lighting_plan": {
        "key": "Cửa sổ kính đôi 3.5m hướng Nam — natural light 5500K, ~30000 lux peak",
        "fill": "LED strip ẩn cove ceiling — 3000K, 800 lumen/m, dimmable",
        "accent": "Spotlight Philips Meson 7W rọi tranh — 2700K, góc 36°"
      },
      "render_prompt": "1500+ chars detailed prompt for image gen — see template below",
      "image_url": null
    }
    // ... 3 variants nữa với phong cách KHÁC NHAU rõ rệt
  ],
  "boq_items": [
    // 15-20 items, mỗi item:
    {
      "category": "Sàn & Tường" | "Trần" | "Nội thất" | "Ánh sáng & Điện" | "Thiết bị vệ sinh" | "Thiết bị bếp" | "Điều hòa & TG" | "Phụ kiện" | "Cây xanh",
      "material": "Tên vật liệu chung (ví dụ: Sàn gỗ)",
      "product_name": "Tên SP cụ thể + brand + model + spec",
      "unit": "m²" | "bộ" | "cái" | "lon" | "md" | "viên" | "tấm",
      "quantity": <number>,
      "unit_price": <int VND>,
      "total_price": <int VND>,
      "notes": "Ghi chú thêm nếu cần"
    }
  ],
  "boq_total_vnd": <int>,
  "scene_3d": {
    "room": {"width_m": 6.0, "depth_m": 5.0, "height_m": 3.0, "area_m2": 30},
    "walls": {"primary_finish": "Sơn Dulux Ambiance màu #F5F1E8", "feature_wall": "Đá travertine"},
    "floor": "Sàn gỗ óc chó engineered 15mm",
    "ceiling": "Trần thạch cao giật cấp + cove LED",
    "furniture": [
      {"type": "sofa", "name": "Minotti Connery 3 chỗ", "position": [0, 0, -2.0], "rotation_y": 0, "dimensions": [2.8, 0.8, 1.0]},
      // ... 8-15 items
    ],
    "lights": [
      {"type": "ceiling", "position": [0, 2.9, 0], "color": "#FFE4B5", "intensity": 0.8, "kelvin": 3000}
      // ... 4-8 lights
    ]
  }
}

RENDER PROMPT TEMPLATE (1500+ chars cho mỗi variant):

"MASTER SHOT: [style_label] interior of [room_type] [W×L×H] in [city] [season/time], \
[time_of_day] natural lighting. SCENE COMPOSITION: corner perspective at 1.6m eye height, \
10° upward tilt, rule of thirds, leading lines toward [feature element]. \
MATERIALS: Floor: [precise spec with brand + dimensions + finish]; Walls: [brand + color code]; \
Accent wall: [material + spec]; Ceiling: [type + reveal detail]; Statement piece: [feature]. \
FURNITURE: Sofa: [brand + model + dimensions + fabric/finish]; Coffee table: [brand + model + \
material]; Pendant: [brand + model by designer]; Rug: [brand + dimensions + material]. \
LIGHTING: Key: [source + Kelvin + lumen]; Fill: [linear LED Kelvin + position]; \
Accent: [spotlights + Kelvin + target]; Mood: 60% bright, 30% mid, 10% deep shadow. \
CAMERA: Hasselblad H6D-100c, 24mm tilt-shift, f/8.0, 1/125s, ISO 200, WB 4800K, deep focus. \
POST-PROCESSING: Lumion 2024 quality, 8K resolution, slight cinematic color grade Kodak Portra 400, \
tack-sharp foreground, soft background bokeh, micro-details (dust in light beams, fabric texture, \
wood grain, plaster imperfections). NEGATIVE: blurry, distorted perspective, oversaturated, \
AI artifacts, deformed objects, mannequin people, plastic textures, cartoonish, generic stock photo."

LƯU Ý CUỐI:
- Mỗi variant phải có style KHÁC NHAU RÕ RỆT (đừng làm 4 variants giống nhau khác mỗi màu).
- BOQ phải đủ MỌI thứ cần cho phòng đó (sàn + tường + trần + nội thất + đèn + điều hòa + rèm + decor).
- Nếu phòng bếp/WC → BOQ thêm thiết bị bếp/vệ sinh.
- Tổng BOQ phải khớp với budget khách ±20%. Nếu vượt nhiều → giảm vật liệu cao cấp.
- Phong thủy: nếu khách ghi hướng → ghi chú màu thuận/kỵ.
"""

    # ─────────────────────────────────────────────────────────
    # User prompt builder
    # ─────────────────────────────────────────────────────────
    def build_user_prompt(self, request: Any) -> str:
        style_brief = get_style_brief(getattr(request, "style", "modern") or "modern")
        room_type = getattr(request, "room_type", None) or "phòng khách"
        area_m2 = getattr(request, "area_m2", None) or 30
        budget = getattr(request, "budget_million", None)
        location = getattr(request, "location_province", None)
        prompt_text = (request.prompt or "").strip()

        budget_line = f"{int(budget)} triệu VNĐ" if budget else "linh hoạt"
        location_line = f"\n- Vị trí: {location}" if location else ""

        # Pull brand catalog hint based on budget
        if budget and budget < 50:
            brand_tier = "TRUNG BÌNH (An Cường, Nha Xinh, Modular, Hòa Phát)"
        elif budget and budget < 200:
            brand_tier = "TRUNG-CAO (Nha Xinh leather, sofa Italy nhập, đèn nhập)"
        else:
            brand_tier = "CAO CẤP (Minotti, B&B Italia, Flos, Vitra, Cassina)"

        return f"""\
BRIEF KHÁCH HÀNG:
- Mô tả: {prompt_text}
- Loại phòng: {room_type}
- Diện tích: {area_m2}m²
- Phong cách yêu cầu: {style_brief}
- Ngân sách: {budget_line}{location_line}
- Brand tier khuyến nghị: {brand_tier}

YÊU CẦU OUTPUT:
1. Tạo 4 PHƯƠNG ÁN với phong cách KHÁC NHAU rõ rệt (không 4 cái giống nhau).
2. Mỗi phương án style_label phải SPECIFIC (ví dụ "Modern Luxury Indochine — Phương án A", \
KHÔNG viết chung chung "Phương án 1").
3. BOQ tổng phải khớp budget {budget_line} (sai số ±20%).
4. Sàn = {area_m2}m², tính số lượng vật liệu chính xác.
5. Render prompt 1500+ chars cho mỗi variant (sẵn sàng feed vào Imagen/Flux).
6. Output PHẢI là JSON hợp lệ theo schema đã quy định."""

    # ─────────────────────────────────────────────────────────
    # Enrich response — validate prices against KB
    # ─────────────────────────────────────────────────────────
    def enrich_response(self, raw: dict, request: Any) -> dict:
        # Ensure discipline tag
        raw["discipline"] = "interior"

        # Validate BOQ pricing (cross-check vs KB to detect Gemini hallucination)
        boq_items = raw.get("boq_items", [])
        for item in boq_items:
            if not item.get("product_name"):
                continue
            kb_match = find_material_by_keyword(item["product_name"])
            if kb_match:
                # If price differs >50% from KB, prefer KB price (likely Gemini hallucinated)
                kb_price = kb_match.get("price", 0)
                gem_price = self.vnd_int(item.get("unit_price"))
                if gem_price > 0 and kb_price > 0:
                    ratio = gem_price / kb_price
                    if ratio > 2.0 or ratio < 0.4:
                        item["unit_price"] = kb_price
                        item["price_corrected"] = True
                        qty = float(item.get("quantity", 1) or 1)
                        item["total_price"] = int(kb_price * qty)

        # Recalculate boq_total
        total = sum(self.vnd_int(i.get("total_price")) for i in boq_items)
        if total > 0:
            raw["boq_total_vnd"] = total
            raw["boq_total"] = total  # legacy field for frontend compat

        return raw

    # ─────────────────────────────────────────────────────────
    # Fallback (when Gemini unavailable)
    # ─────────────────────────────────────────────────────────
    def fallback_response(self, request: Any) -> dict:
        area = getattr(request, "area_m2", None) or 30
        style = getattr(request, "style", "modern") or "modern"
        room = getattr(request, "room_type", None) or "phòng khách"

        # Pull 8 sample materials from KB
        sample_keys = [
            "san_go_an_cuong_12mm", "son_dulux_ambiance",
            "sofa_3cho_modern_comfort", "ban_tra_walnut_round",
            "den_panel_philips", "rem_vai_2_lop",
            "dieuhoa_daikin_inverter", "tham_jute_nanimarquina",
        ]
        boq = []
        for k in sample_keys:
            mat = VN_INTERIOR_MATERIALS.get(k, {})
            qty = area if mat.get("unit") == "m²" else 1
            unit_price = mat.get("price", 0)
            boq.append({
                "category": mat.get("category", "Khác"),
                "material": mat.get("name", "").split(" ")[0],
                "product_name": mat.get("name", ""),
                "unit": mat.get("unit", "cái"),
                "quantity": qty,
                "unit_price": unit_price,
                "total_price": int(qty * unit_price),
                "notes": "[Demo fallback]",
            })

        styles_list = list(INTERIOR_STYLES_VI.items())[:4]
        variants = []
        for i, (skey, sval) in enumerate(styles_list):
            variants.append({
                "variant_idx": i,
                "style_label": f'{sval["label"]} — Phương án {chr(65+i)}',
                "style_key": skey,
                "description": (
                    f'Phong cách {sval["label"]}. Palette: {sval["palette"]}. '
                    f'Vật liệu: {sval["materials"]}. Đặc trưng: {sval["key_features"]}.'
                ),
                "color_palette": {"primary": sval["palette"], "secondary": "", "accent": ""},
                "key_materials": sval["materials"].split(", "),
                "lighting_plan": {"key": "Cửa sổ tự nhiên", "fill": "LED âm trần", "accent": "Spotlight"},
                "render_prompt": (
                    f'{sval["label"]} interior {room} {area}m², photorealistic, '
                    'natural lighting, 8K Lumion render quality, [DEMO MODE — set GEMINI_API_KEY for real prompt]'
                ),
                "image_url": None,
            })

        return {
            "discipline": "interior",
            "prompt_enhanced": (request.prompt or "")[:200],
            "design_brief": "[DEMO MODE — backend chưa kết nối Gemini API]",
            "phong_thuy_note": "",
            "variants": variants,
            "boq_items": boq,
            "boq_total_vnd": sum(b["total_price"] for b in boq),
            "boq_total": sum(b["total_price"] for b in boq),
            "scene_3d": {
                "room": {"width_m": 6.0, "depth_m": 5.0, "height_m": 3.0, "area_m2": area},
                "walls": {"primary_finish": "Sơn trắng", "feature_wall": "Gỗ"},
                "floor": "Sàn gỗ",
                "ceiling": "Thạch cao",
                "furniture": [],
                "lights": [],
            },
        }
