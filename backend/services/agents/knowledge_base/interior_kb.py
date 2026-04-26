"""Interior Design Knowledge Base — Vietnamese materials, brands, phong thủy.

Prices reflect Q1 2026 retail in HCM/Hà Nội. Used by InteriorAgent.enrich_response()
to validate Gemini-generated BOQ pricing.
"""
from typing import Any

# ─── 50+ vật liệu nội thất Việt Nam (2026 retail) ──────────────────
VN_INTERIOR_MATERIALS: dict[str, dict[str, Any]] = {
    # Sàn
    "san_go_an_cuong_12mm": {
        "name": "Sàn gỗ công nghiệp An Cường AC4 12mm",
        "unit": "m²", "price": 285000, "category": "Sàn & Tường",
        "spec": "12mm, AC4 chống xước cấp 4, hèm V-groove",
    },
    "san_go_walnut_engineered": {
        "name": "Sàn gỗ engineered Walnut Mỹ 15mm",
        "unit": "m²", "price": 1850000, "category": "Sàn & Tường",
        "spec": "Lớp mặt walnut tự nhiên 3mm, finish UV oil",
    },
    "san_da_marble_calacatta": {
        "name": "Đá marble Calacatta Carrara 600x600x18mm",
        "unit": "m²", "price": 2450000, "category": "Sàn & Tường",
        "spec": "Đá thật Italy, nhập khẩu, mài bóng",
    },
    "san_da_travertine_binh_dinh": {
        "name": "Đá travertine Bình Định 600x600x20mm",
        "unit": "m²", "price": 685000, "category": "Sàn & Tường",
        "spec": "Đá tự nhiên VN, finish honed, màu beige",
    },
    "gach_porcelain_y_my": {
        "name": "Gạch porcelain Ý Mỹ 800x800mm",
        "unit": "m²", "price": 385000, "category": "Sàn & Tường",
        "spec": "Vân đá tự nhiên, độ hút nước <0.5%",
    },
    # Sơn & Tường
    "son_dulux_ambiance": {
        "name": "Sơn nội thất Dulux Ambiance 5in1 5L",
        "unit": "lon", "price": 1550000, "category": "Sàn & Tường",
        "spec": "Lau chùi cấp 5, kháng khuẩn, mịn",
    },
    "son_jotun_majestic": {
        "name": "Sơn Jotun Majestic Soft Touch 5L",
        "unit": "lon", "price": 1850000, "category": "Sàn & Tường",
        "spec": "Cảm giác mềm, hệ acrylic cao cấp",
    },
    "son_dulux_easyclean": {
        "name": "Sơn Dulux EasyClean Lau Chùi Hiệu Quả 5L",
        "unit": "lon", "price": 680000, "category": "Sàn & Tường",
        "spec": "Lau chùi vết bẩn dễ dàng, kinh tế",
    },
    "go_pomu_op_tuong": {
        "name": "Gỗ Pơ-mu Tây Bắc ốp tường 60x20mm",
        "unit": "m²", "price": 1450000, "category": "Sàn & Tường",
        "spec": "Gỗ thơm tự nhiên, finish oil tự nhiên",
    },
    "may_tre_dan_op": {
        "name": "Mây tre đan ốp tường (Bạc Liêu)",
        "unit": "m²", "price": 580000, "category": "Sàn & Tường",
        "spec": "Thủ công truyền thống, phong cách Indochine",
    },
    # Trần
    "tran_thach_cao_giat": {
        "name": "Trần thạch cao khung xương Vĩnh Tường giật cấp",
        "unit": "m²", "price": 285000, "category": "Trần",
        "spec": "Tấm Gyproc 9mm + khung Vĩnh Tường + sơn",
    },
    "tran_go_xoan_dao": {
        "name": "Trần ốp gỗ xoan đào tự nhiên (1 lớp)",
        "unit": "m²", "price": 850000, "category": "Trần",
        "spec": "Gỗ xoan đào finish PU mờ",
    },
    # Nội thất rời
    "sofa_minotti_connery": {
        "name": "Sofa Minotti Connery 3 chỗ 280cm bouclé cream",
        "unit": "bộ", "price": 285000000, "category": "Nội thất",
        "spec": "Khung gỗ sồi, vải bouclé Italy, cao cấp",
    },
    "sofa_3cho_modern_comfort": {
        "name": "Sofa 3 chỗ Modern Comfort vải bố nhập",
        "unit": "bộ", "price": 18500000, "category": "Nội thất",
        "spec": "Khung gỗ thông sấy, đệm Foam D40 hồi nhanh",
    },
    "sofa_nha_xinh_da_that": {
        "name": "Sofa da thật Nhà Xinh Lavin 3 chỗ",
        "unit": "bộ", "price": 38500000, "category": "Nội thất",
        "spec": "Da bò thật Ý, khung gỗ Mỹ",
    },
    "ban_tra_walnut_round": {
        "name": "Bàn trà tròn gỗ walnut D100cm",
        "unit": "cái", "price": 8500000, "category": "Nội thất",
        "spec": "Gỗ walnut tự nhiên, chân thép sơn tĩnh điện",
    },
    "ban_an_6cho_oc_cho": {
        "name": "Bàn ăn 6 chỗ gỗ óc chó 1m8x1m",
        "unit": "bộ", "price": 25000000, "category": "Nội thất",
        "spec": "Mặt gỗ óc chó dày 30mm, finish UV oil",
    },
    "giuong_king_an_cuong": {
        "name": "Giường King 1m8x2m An Cường Melamine + đầu giường nệm",
        "unit": "bộ", "price": 12500000, "category": "Nội thất",
        "spec": "MFC An Cường E1, đầu giường bọc nệm da",
    },
    "giuong_master_da_that": {
        "name": "Giường Master 1m8x2m da thật cao cấp",
        "unit": "bộ", "price": 45000000, "category": "Nội thất",
        "spec": "Da bò Ý, khung gỗ thông Mỹ",
    },
    "tu_quan_ao_am_tuong": {
        "name": "Tủ quần áo âm tường kịch trần (per m²)",
        "unit": "m²", "price": 2600000, "category": "Nội thất",
        "spec": "MFC An Cường E1, ray giảm chấn Hettich",
    },
    "ke_tv_may_do_walnut": {
        "name": "Kệ TV may đo gỗ walnut (per md)",
        "unit": "md", "price": 4500000, "category": "Nội thất",
        "spec": "Veneer walnut tự nhiên, ray Hettich",
    },
    "ban_lam_viec_oc_cho": {
        "name": "Bàn làm việc gỗ óc chó 1m6x70cm",
        "unit": "cái", "price": 15500000, "category": "Nội thất",
        "spec": "Gỗ óc chó dày 30mm, chân thép đen",
    },
    "ghe_eames_replica": {
        "name": "Ghế Eames Replica chất lượng cao",
        "unit": "cái", "price": 4500000, "category": "Nội thất",
        "spec": "Khung sợi thủy tinh, da microfiber",
    },
    # Đèn & Điện
    "den_chum_pha_le": {
        "name": "Đèn chùm pha lê K9 D80cm 12 bóng E14",
        "unit": "bộ", "price": 12500000, "category": "Ánh sáng & Điện",
        "spec": "Pha lê K9 Tiệp, khung mạ vàng titan",
    },
    "den_chum_flos_skygarden": {
        "name": "Đèn chùm Flos Skygarden D60 (Marcel Wanders)",
        "unit": "cái", "price": 35000000, "category": "Ánh sáng & Điện",
        "spec": "Designer Italy, thạch cao trắng/đen",
    },
    "den_panel_philips": {
        "name": "Đèn Panel LED Philips 18W 4000K 600x600",
        "unit": "bộ", "price": 285000, "category": "Ánh sáng & Điện",
        "spec": "Tuổi thọ 30,000h, CRI >80",
    },
    "den_meson_philips": {
        "name": "Đèn downlight Philips Meson 7W 3000K",
        "unit": "cái", "price": 125000, "category": "Ánh sáng & Điện",
        "spec": "IP44, ánh sáng vàng ấm",
    },
    "den_rotret_thanh_3000k": {
        "name": "Đèn LED rọi tray âm trần 3000K 5W",
        "unit": "cái", "price": 185000, "category": "Ánh sáng & Điện",
        "spec": "Góc chiếu 36°, dimmable",
    },
    "led_strip_philips_hue": {
        "name": "LED Strip Philips Hue Lightstrip Plus 2m",
        "unit": "bộ", "price": 2850000, "category": "Ánh sáng & Điện",
        "spec": "RGB 16 triệu màu, điều khiển smartphone",
    },
    "cong_tac_schneider": {
        "name": "Công tắc Schneider Vivace 1 nút",
        "unit": "cái", "price": 145000, "category": "Ánh sáng & Điện",
        "spec": "Thiết kế phẳng, bảo hành 5 năm",
    },
    "o_cam_panasonic_usb": {
        "name": "Ổ cắm Panasonic 2 chấu + USB Type-C",
        "unit": "cái", "price": 285000, "category": "Ánh sáng & Điện",
        "spec": "Sạc nhanh 18W, an toàn trẻ em",
    },
    # Vệ sinh
    "vsen_toto_neorest": {
        "name": "Bồn cầu thông minh TOTO Neorest NX2",
        "unit": "bộ", "price": 185000000, "category": "Thiết bị vệ sinh",
        "spec": "Tự rửa, sấy, đèn LED, Wi-Fi",
    },
    "vsen_toto_msw904": {
        "name": "Bồn cầu TOTO MS904 1 khối",
        "unit": "bộ", "price": 18500000, "category": "Thiết bị vệ sinh",
        "spec": "Tornado Flush 4.8L, men Cefiontect",
    },
    "vsen_inax_aqua": {
        "name": "Bồn cầu Inax AC-832 nắp êm",
        "unit": "bộ", "price": 4850000, "category": "Thiết bị vệ sinh",
        "spec": "Rửa xoáy 3L/4.5L, men Hyper-KW",
    },
    "lavabo_toto_oval": {
        "name": "Lavabo TOTO oval đặt bàn LT4715",
        "unit": "cái", "price": 6850000, "category": "Thiết bị vệ sinh",
        "spec": "Sứ vệ sinh men Cefiontect",
    },
    "voi_grohe_essence": {
        "name": "Vòi lavabo Grohe Essence chrome",
        "unit": "cái", "price": 5850000, "category": "Thiết bị vệ sinh",
        "spec": "Khóa C3, tiết kiệm nước EcoJoy",
    },
    "sen_grohe_rainshower": {
        "name": "Sen tắm Grohe Rainshower 310 SmartActive",
        "unit": "bộ", "price": 18500000, "category": "Thiết bị vệ sinh",
        "spec": "3 chế độ phun, chống cặn vôi",
    },
    # Bếp
    "bep_tu_bosch_4vung": {
        "name": "Bếp từ Bosch 4 vùng PXY875DC1E",
        "unit": "bộ", "price": 38500000, "category": "Thiết bị bếp",
        "spec": "Inverter, FlexInduction, nhập Đức",
    },
    "may_hut_mui_bosch": {
        "name": "Máy hút mùi Bosch DWB97IM50 90cm",
        "unit": "bộ", "price": 15800000, "category": "Thiết bị bếp",
        "spec": "Hút 730 m³/h, đèn LED, điều khiển cảm ứng",
    },
    "tu_lanh_lg_inverter": {
        "name": "Tủ lạnh LG Inverter Linear 600L Side-by-side",
        "unit": "bộ", "price": 32500000, "category": "Thiết bị bếp",
        "spec": "Inverter 10 năm bảo hành, làm đá tự động",
    },
    # Điều hòa
    "dieuhoa_daikin_inverter": {
        "name": "Điều hòa Daikin Inverter 12000BTU FTKB35WAVMV",
        "unit": "bộ", "price": 18500000, "category": "Điều hòa & TG",
        "spec": "Inverter, R32, gas thân thiện môi trường",
    },
    "dieuhoa_panasonic_xpu": {
        "name": "Điều hòa Panasonic XPU 18000BTU 2 chiều",
        "unit": "bộ", "price": 28500000, "category": "Điều hòa & TG",
        "spec": "Nanoe-X kháng khuẩn, làm lạnh + sưởi",
    },
    # Rèm cửa
    "rem_vai_2_lop": {
        "name": "Rèm vải 2 lớp cao cấp (per m²)",
        "unit": "m²", "price": 850000, "category": "Phụ kiện",
        "spec": "Vải Hàn Quốc + voan, ray Vĩnh Hưng",
    },
    "rem_go_basswood": {
        "name": "Rèm gỗ Basswood Mỹ 50mm (per m²)",
        "unit": "m²", "price": 1450000, "category": "Phụ kiện",
        "spec": "Gỗ basswood tự nhiên, dây kéo nilon",
    },
    "rem_cuon_chong_nang": {
        "name": "Rèm cuốn chống nắng (per m²)",
        "unit": "m²", "price": 485000, "category": "Phụ kiện",
        "spec": "Vải polyester chống UV 95%, blackout",
    },
    # Thảm & decor
    "tham_jute_nanimarquina": {
        "name": "Thảm jute Nanimarquina 240x320cm",
        "unit": "tấm", "price": 18500000, "category": "Phụ kiện",
        "spec": "Sợi jute tự nhiên, dệt thủ công Tây Ban Nha",
    },
    "tham_persian_3x4m": {
        "name": "Thảm Persian Iran handmade 3x4m",
        "unit": "tấm", "price": 65000000, "category": "Phụ kiện",
        "spec": "Lông cừu thật, dệt tay, Iran",
    },
    "guong_lon_treo_tuong": {
        "name": "Gương treo tường D100cm khung gỗ óc chó",
        "unit": "cái", "price": 4850000, "category": "Phụ kiện",
        "spec": "Gương 5mm + khung walnut",
    },
    "tranh_canvas_lon": {
        "name": "Tranh canvas in UV cao cấp 100x70cm",
        "unit": "bức", "price": 1850000, "category": "Phụ kiện",
        "spec": "Vải canvas + khung gỗ thông",
    },
    "cay_canh_monstera_lon": {
        "name": "Cây Monstera Deliciosa cao 1.5m + chậu gốm",
        "unit": "chậu", "price": 1850000, "category": "Cây xanh",
        "spec": "Cây thật, chậu gốm Bát Tràng",
    },
}


# ─── 8 phong cách Việt phổ biến ─────────────────────────────────────
INTERIOR_STYLES_VI: dict[str, dict[str, str]] = {
    "modern": {
        "label": "Modern Luxury (Hiện đại sang trọng)",
        "palette": "Trung tính warm + accent đồng/vàng",
        "materials": "Marble, kính, kim loại, gỗ óc chó",
        "key_features": "Đường nét sạch, không trang trí thừa, ánh sáng layered",
    },
    "scandinavian": {
        "label": "Scandinavian (Bắc Âu)",
        "palette": "Trắng, xám nhạt, gỗ tự nhiên",
        "materials": "Gỗ sồi, linen, len wool",
        "key_features": "Ánh sáng nhiều, hygge, cây xanh, đơn giản",
    },
    "japandi": {
        "label": "Japandi (Nhật Bản + Bắc Âu)",
        "palette": "Beige, nâu trầm, đen mờ",
        "materials": "Gỗ sồi, washi paper, vải linen",
        "key_features": "Wabi-sabi, đồ thấp tầng, không gian âm",
    },
    "industrial": {
        "label": "Industrial (Công nghiệp)",
        "palette": "Đen, xám bê tông, gỉ sét, nâu da",
        "materials": "Bê tông, thép, gạch trần, da",
        "key_features": "Ống pipe lộ, đèn Edison, thô mộc",
    },
    "indochine": {
        "label": "Indochine (Đông Dương cách tân)",
        "palette": "Trắng kem, xanh ngọc, vàng nhạt",
        "materials": "Gỗ tự nhiên, gạch bông, mây tre, đồng",
        "key_features": "Cửa lá sách, gạch hoa, đèn lụa, hoa văn Á Đông",
    },
    "tropical_modern": {
        "label": "Tropical Modern (Nhiệt đới hiện đại)",
        "palette": "Xanh lá đậm, kem, gỗ tếch, đá travertine",
        "materials": "Gỗ tếch, đá tự nhiên, mây tre, vải bố",
        "key_features": "Cây xanh nhiều, cửa kính lớn, indoor-outdoor flow",
    },
    "wabi_sabi": {
        "label": "Wabi-Sabi (Thẩm mỹ Nhật)",
        "palette": "Be, nâu đất, trắng kem, xám đá",
        "materials": "Lime plaster, gỗ thô, vải linen thô, gốm Bát Tràng",
        "key_features": "Imperfect beauty, texture thô, ánh sáng dịu",
    },
    "neo_classical": {
        "label": "Tân cổ điển",
        "palette": "Trắng + vàng champagne + xanh navy",
        "materials": "Phào chỉ thạch cao, marble, gỗ sơn trắng, đồng",
        "key_features": "Đối xứng, chi tiết phào, đèn chùm pha lê",
    },
}


# ─── Phong thủy cơ bản (cho khách Á Đông) ───────────────────────────
PHONG_THUY_HUONG: dict[str, dict[str, str]] = {
    "Đông": {"ngu_hanh": "Mộc", "color_lucky": "Xanh lá, đen", "color_avoid": "Trắng, xám"},
    "Đông Nam": {"ngu_hanh": "Mộc", "color_lucky": "Xanh lá, tím", "color_avoid": "Trắng"},
    "Nam": {"ngu_hanh": "Hỏa", "color_lucky": "Đỏ, hồng, cam", "color_avoid": "Đen, xanh dương"},
    "Tây Nam": {"ngu_hanh": "Thổ", "color_lucky": "Vàng, nâu đất", "color_avoid": "Xanh lá"},
    "Tây": {"ngu_hanh": "Kim", "color_lucky": "Trắng, xám, vàng kim", "color_avoid": "Đỏ"},
    "Tây Bắc": {"ngu_hanh": "Kim", "color_lucky": "Trắng, vàng kim", "color_avoid": "Đỏ"},
    "Bắc": {"ngu_hanh": "Thủy", "color_lucky": "Đen, xanh dương", "color_avoid": "Vàng"},
    "Đông Bắc": {"ngu_hanh": "Thổ", "color_lucky": "Vàng, nâu", "color_avoid": "Xanh lá"},
}


def find_material_by_keyword(keyword: str) -> dict | None:
    """Search materials by keyword (case-insensitive)."""
    kw = keyword.lower()
    for key, mat in VN_INTERIOR_MATERIALS.items():
        if kw in key.lower() or kw in mat["name"].lower():
            return {**mat, "key": key}
    return None


def get_style_brief(style: str) -> str:
    """Return concise style description for prompt injection."""
    s = INTERIOR_STYLES_VI.get(style, INTERIOR_STYLES_VI["modern"])
    return (
        f'{s["label"]} — palette: {s["palette"]}; '
        f'materials: {s["materials"]}; key: {s["key_features"]}'
    )
