"""Structural Engineering Knowledge Base — TCVN 5574, 2737, thép & bê tông VN.

Sources:
    - TCVN 5574:2018 Kết cấu bê tông và bê tông cốt thép
    - TCVN 2737:2023 Tải trọng và tác động — Tiêu chuẩn thiết kế
    - TCVN 1651-2:2018 Thép cốt bê tông
    - TCVN 9362:2012 Tiêu chuẩn nền móng
"""

# ─── Bê tông Việt Nam (TCVN 5574:2018) ──────────────────────────────
CONCRETE_GRADES_VN: dict[str, dict] = {
    "B15": {
        "fc_mpa": 8.5, "rb_mpa": 7.5, "rbt_mpa": 0.66,
        "use_case": "Bê tông lót móng, không cốt thép chịu lực",
        "vnd_per_m3": 1180000,
        "old_mark": "M200",
    },
    "B20": {
        "fc_mpa": 11.5, "rb_mpa": 10.5, "rbt_mpa": 0.78,
        "use_case": "Móng đơn nhà cấp 4, sàn nhỏ",
        "vnd_per_m3": 1280000,
        "old_mark": "M250",
    },
    "B22.5": {
        "fc_mpa": 13.0, "rb_mpa": 11.5, "rbt_mpa": 0.85,
        "use_case": "Sàn dân dụng, móng nhà 2-3 tầng",
        "vnd_per_m3": 1380000,
        "old_mark": "M300",
    },
    "B25": {
        "fc_mpa": 14.5, "rb_mpa": 13.0, "rbt_mpa": 0.95,
        "use_case": "Sàn + dầm + cột nhà 3-5 tầng (PHỔ THÔNG NHẤT)",
        "vnd_per_m3": 1450000,
        "old_mark": "M350",
    },
    "B30": {
        "fc_mpa": 17.0, "rb_mpa": 15.5, "rbt_mpa": 1.10,
        "use_case": "Cột tầng dưới nhà cao 6-10 tầng",
        "vnd_per_m3": 1580000,
        "old_mark": "M400",
    },
    "B35": {
        "fc_mpa": 19.5, "rb_mpa": 17.5, "rbt_mpa": 1.20,
        "use_case": "Cột nhà cao tầng 10-20 tầng, bể nước",
        "vnd_per_m3": 1750000,
        "old_mark": "M450",
    },
    "B40": {
        "fc_mpa": 22.0, "rb_mpa": 20.0, "rbt_mpa": 1.30,
        "use_case": "Nhà siêu cao tầng, ứng suất trước",
        "vnd_per_m3": 1950000,
        "old_mark": "M500",
    },
}


# ─── Cốt thép Việt Nam (TCVN 1651-2:2018) ───────────────────────────
REBAR_GRADES_VN: dict[str, dict] = {
    "CB240-T": {
        "fy_mpa": 240, "rs_mpa": 210,
        "shape": "Tròn trơn",
        "use": "Đai cột, đai dầm, lưới sàn nhỏ",
        "phi_range": "φ6, φ8",
        "vnd_per_kg": 17500,
    },
    "CB300-V": {
        "fy_mpa": 300, "rs_mpa": 260,
        "shape": "Vằn",
        "use": "Cốt chịu lực dầm/sàn nhà thấp tầng",
        "phi_range": "φ10, φ12, φ14, φ16",
        "vnd_per_kg": 18200,
    },
    "CB400-V": {
        "fy_mpa": 400, "rs_mpa": 350,
        "shape": "Vằn",
        "use": "Cốt chịu lực chính (dầm, cột, móng) (PHỔ THÔNG NHẤT)",
        "phi_range": "φ10 → φ32",
        "vnd_per_kg": 18800,
    },
    "CB500-V": {
        "fy_mpa": 500, "rs_mpa": 435,
        "shape": "Vằn",
        "use": "Cột nhà cao tầng, công trình lớn",
        "phi_range": "φ16 → φ40",
        "vnd_per_kg": 19500,
    },
    "CB600-V": {
        "fy_mpa": 600, "rs_mpa": 520,
        "shape": "Vằn",
        "use": "Ứng suất trước, công trình đặc biệt",
        "phi_range": "φ12 → φ32",
        "vnd_per_kg": 22000,
    },
}


# ─── Bảng tra cốt thép — Diện tích As (mm²) và khối lượng (kg/m) ────
REBAR_SECTION_TABLE: dict[int, dict] = {
    6:  {"area_mm2": 28.3,  "weight_kg_m": 0.222},
    8:  {"area_mm2": 50.3,  "weight_kg_m": 0.395},
    10: {"area_mm2": 78.5,  "weight_kg_m": 0.617},
    12: {"area_mm2": 113.1, "weight_kg_m": 0.888},
    14: {"area_mm2": 153.9, "weight_kg_m": 1.21},
    16: {"area_mm2": 201.1, "weight_kg_m": 1.58},
    18: {"area_mm2": 254.5, "weight_kg_m": 2.00},
    20: {"area_mm2": 314.2, "weight_kg_m": 2.47},
    22: {"area_mm2": 380.1, "weight_kg_m": 2.98},
    25: {"area_mm2": 490.9, "weight_kg_m": 3.85},
    28: {"area_mm2": 615.8, "weight_kg_m": 4.83},
    32: {"area_mm2": 804.2, "weight_kg_m": 6.31},
}


# ─── Tải trọng tiêu chuẩn TCVN 2737:2023 (kN/m²) ────────────────────
LIVE_LOADS_TCVN_2737: dict[str, dict[str, float]] = {
    "phong_o":          {"qk_kn_m2": 1.5, "note": "Phòng ở (tiêu chuẩn)"},
    "phong_khach":      {"qk_kn_m2": 2.0, "note": "Phòng khách, phòng ăn"},
    "ban_cong":         {"qk_kn_m2": 2.0, "note": "Ban công nhà ở"},
    "cau_thang":        {"qk_kn_m2": 3.0, "note": "Cầu thang nhà ở"},
    "san_thuong_su_dung": {"qk_kn_m2": 1.5, "note": "Sân thượng có sử dụng"},
    "mai_khong_su_dung": {"qk_kn_m2": 0.75, "note": "Mái không sử dụng"},
    "van_phong":        {"qk_kn_m2": 2.0, "note": "Văn phòng"},
    "phong_hop":        {"qk_kn_m2": 3.0, "note": "Phòng họp tập trung"},
    "kho_nhe":          {"qk_kn_m2": 5.0, "note": "Kho nhẹ"},
    "kho_nang":         {"qk_kn_m2": 10.0, "note": "Kho nặng (≤25kN/m²)"},
    "garage":           {"qk_kn_m2": 2.5, "note": "Garage xe con (≤25 kN/trục)"},
    "phong_an_nha_hang":{"qk_kn_m2": 3.0, "note": "Nhà hàng, ăn uống công cộng"},
    "lop_hoc":          {"qk_kn_m2": 2.0, "note": "Lớp học"},
    "san_thuong_xanh":  {"qk_kn_m2": 4.0, "note": "Sân thượng có cây xanh"},
}


# ─── Áp lực gió W0 theo vùng (TCVN 2737, kN/m²) ─────────────────────
WIND_PRESSURE_VN: dict[str, dict[str, float | str]] = {
    "IA":    {"w0_kn_m2": 0.55, "cities": "Vĩnh Long, Đồng Tháp"},
    "IB":    {"w0_kn_m2": 0.65, "cities": "An Giang, Cần Thơ"},
    "IIA":   {"w0_kn_m2": 0.83, "cities": "TP HCM, Bình Dương, Đồng Nai"},
    "IIB":   {"w0_kn_m2": 0.95, "cities": "Hà Nội, Hải Phòng, Thanh Hóa"},
    "IIIA":  {"w0_kn_m2": 1.10, "cities": "Quảng Nam, Quảng Ngãi"},
    "IIIB":  {"w0_kn_m2": 1.25, "cities": "Đà Nẵng, Quảng Trị, Thừa Thiên Huế"},
    "IVA":   {"w0_kn_m2": 1.55, "cities": "Khánh Hòa ven biển"},
    "IVB":   {"w0_kn_m2": 1.85, "cities": "Vùng đảo Trường Sa, đặc biệt"},
}


# ─── Vùng động đất (TCVN 9386:2012, theo gia tốc nền) ───────────────
SEISMIC_ZONES_VN: dict[str, dict] = {
    "0": {"agr_g": 0.04, "zone": "Yếu",       "note": "Đa số tỉnh đồng bằng Nam Bộ"},
    "I": {"agr_g": 0.08, "zone": "Trung bình", "note": "TP HCM, Cần Thơ, Hà Nội"},
    "II":{"agr_g": 0.12, "zone": "Mạnh",      "note": "Tây Bắc, Hòa Bình, Sơn La"},
    "III":{"agr_g":0.20, "zone": "Rất mạnh",  "note": "Điện Biên, Lai Châu vùng đứt gãy"},
}


# ─── Hệ số an toàn (TCVN 5574:2018) ─────────────────────────────────
SAFETY_FACTORS = {
    "gamma_f_dead":  1.1,   # tĩnh tải bất lợi
    "gamma_f_live":  1.2,   # hoạt tải bất lợi
    "gamma_f_wind":  1.4,   # tải gió
    "gamma_c":       1.5,   # bê tông (cường độ)
    "gamma_s":       1.15,  # cốt thép (cường độ)
    "gamma_n":       1.0,   # hệ số tin cậy nhà cấp III dân dụng
}


# ─── Sơ bộ chọn tiết diện theo nhịp/tầng ────────────────────────────
PRELIMINARY_SECTIONS: dict[str, dict] = {
    "cot_nha_2tang":  {"min": "20x25", "typical": "25x25", "max": "30x30", "note": "Nhà 2-3 tầng nhỏ"},
    "cot_nha_3tang":  {"min": "25x25", "typical": "25x30", "max": "30x40", "note": "Nhà 3-4 tầng"},
    "cot_nha_5tang":  {"min": "30x30", "typical": "30x40", "max": "40x50", "note": "Nhà 5-6 tầng"},
    "cot_nha_8tang":  {"min": "40x40", "typical": "40x50", "max": "50x60", "note": "Tầng dưới nhà 8 tầng"},
    "cot_nha_15tang": {"min": "50x50", "typical": "50x60", "max": "60x80", "note": "Tầng dưới cao tầng"},
    "dam_chinh_5m":   {"min": "20x35", "typical": "25x40", "max": "25x45", "note": "Dầm chính nhịp 4-5m"},
    "dam_chinh_7m":   {"min": "25x45", "typical": "25x50", "max": "30x55", "note": "Dầm chính nhịp 6-7m"},
    "dam_chinh_9m":   {"min": "30x55", "typical": "30x60", "max": "30x70", "note": "Dầm chính nhịp 8-9m"},
    "san_btct_1huong":{"min": "h=L/30", "typical": "h=L/25", "max": "h=L/20", "note": "Sàn 1 phương BTCT"},
    "san_btct_2huong":{"min": "h=L/40", "typical": "h=L/32", "max": "h=L/30", "note": "Sàn 2 phương BTCT"},
}


# ─── Móng — chọn theo địa chất + tải ────────────────────────────────
FOUNDATION_TYPES: dict[str, dict] = {
    "mong_don_btct": {
        "name": "Móng đơn BTCT đúc tại chỗ",
        "soil": "Đất tốt, sét cứng, sét pha, R0 ≥1.5 kG/cm²",
        "use_case": "Nhà 1-3 tầng, tải cột ≤80T",
        "depth_m": "1.5-2.5",
        "cost_relative": 1.0,
    },
    "mong_bang": {
        "name": "Móng băng BTCT 1 phương",
        "soil": "Đất trung bình, R0 = 1.0-1.5 kG/cm²",
        "use_case": "Nhà 2-4 tầng, tường chịu lực",
        "depth_m": "1.5-2.0",
        "cost_relative": 1.4,
    },
    "mong_be": {
        "name": "Móng bè BTCT",
        "soil": "Đất yếu, R0 < 1.0 kG/cm², mực nước ngầm cao",
        "use_case": "Nhà 3-5 tầng trên đất yếu, có tầng hầm",
        "depth_m": "1.5-3.0",
        "cost_relative": 2.2,
    },
    "mong_coc_ep": {
        "name": "Móng cọc ép BTCT (300x300, 30-45MT)",
        "soil": "Đất yếu sâu, có lớp đất tốt ở 8-15m",
        "use_case": "Nhà 4-7 tầng đô thị, đất sét pha bùn",
        "depth_m": "8-20",
        "cost_relative": 2.8,
    },
    "mong_coc_khoan_nhoi": {
        "name": "Móng cọc khoan nhồi D600-D1500",
        "soil": "Mọi loại đất, cần xuyên tới đá hoặc cát chặt sâu",
        "use_case": "Nhà cao tầng ≥8 tầng, công trình quan trọng",
        "depth_m": "20-60",
        "cost_relative": 4.5,
    },
}


def get_concrete_grade_for_building(floors: int, role: str = "structural") -> str:
    """Suggest concrete grade by building height + structural role."""
    if role == "foundation":
        if floors <= 3: return "B20"
        if floors <= 6: return "B22.5"
        if floors <= 12: return "B25"
        return "B30"
    if role == "column":
        if floors <= 3: return "B22.5"
        if floors <= 6: return "B25"
        if floors <= 10: return "B30"
        if floors <= 20: return "B35"
        return "B40"
    # slab/beam (default)
    if floors <= 5: return "B25"
    if floors <= 10: return "B25"
    if floors <= 20: return "B30"
    return "B35"


def estimate_rebar_kg_per_m3_concrete(element: str) -> float:
    """Average rebar consumption (kg) per m³ concrete by element type."""
    return {
        "foundation": 70,    # móng
        "column":     180,   # cột
        "beam":       130,   # dầm
        "slab":       80,    # sàn
        "stair":      120,   # cầu thang
        "wall":       80,    # tường BTCT
        "shearwall":  150,   # vách cứng
    }.get(element, 100)


def estimate_concrete_volume_m3(area_m2: float, floors: int, slab_thickness_mm: int = 120) -> dict:
    """Rough estimate of concrete volume for a building.

    Heuristic: per 1 m² floor area there is ~0.25 m³ total concrete
    (slab 0.12, beam 0.07, column 0.04, foundation amortized 0.02).
    """
    coeff_slab = slab_thickness_mm / 1000  # m
    per_m2 = coeff_slab + 0.07 + 0.04 + 0.02
    total_floor = area_m2 * floors
    total_m3 = round(total_floor * per_m2, 1)

    # Distribution
    return {
        "total_m3": total_m3,
        "by_element": {
            "slab":       round(total_floor * coeff_slab, 1),
            "beam":       round(total_floor * 0.07, 1),
            "column":     round(total_floor * 0.04, 1),
            "foundation": round(total_floor * 0.02, 1),
        },
        "by_grade_recommendation": {
            "foundation": get_concrete_grade_for_building(floors, "foundation"),
            "column":     get_concrete_grade_for_building(floors, "column"),
            "beam":       get_concrete_grade_for_building(floors, "beam"),
            "slab":       get_concrete_grade_for_building(floors, "slab"),
        },
    }
