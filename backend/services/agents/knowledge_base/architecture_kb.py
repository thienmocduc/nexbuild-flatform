"""Architecture Knowledge Base — TCVN codes, sun path, climate, VN materials.

Sources:
    - TCVN 4205:2012 Tiêu chuẩn nhà ở
    - TCVN 9411:2012 Chiếu sáng tự nhiên trong nhà
    - TCVN 6160:1996 Phòng cháy chữa cháy
    - TCVN 5687:2010 Thông gió, điều hòa không khí
    - QCVN 02:2009/BXD Số liệu tự nhiên xây dựng
"""

# ─── TCVN tiêu chuẩn xây dựng ───────────────────────────────────────
TCVN_CODES_ARCHITECTURE: dict[str, dict[str, str]] = {
    "TCVN 4205:2012": {
        "title": "Nhà ở — Tiêu chuẩn thiết kế",
        "key_rules": (
            "Diện tích phòng tối thiểu: phòng ngủ 9m², phòng khách 14m², "
            "WC 3m². Chiều cao tầng: tầng 1 ≥3.0m, tầng trên ≥2.7m."
        ),
    },
    "TCVN 9411:2012": {
        "title": "Chiếu sáng tự nhiên trong nhà ở",
        "key_rules": (
            "Hệ số chiếu sáng tự nhiên (DF) tối thiểu: phòng khách/ngủ ≥0.5%, "
            "bếp ≥1.0%, WC ≥0.5%. Diện tích cửa sổ ≥1/8 diện tích sàn."
        ),
    },
    "TCVN 6160:1996": {
        "title": "Phòng cháy chữa cháy nhà cao tầng",
        "key_rules": (
            "Lối thoát hiểm: ≥1 cầu thang/100 người, chiều rộng ≥1.0m. "
            "Khoảng cách đến lối thoát ≤25m. Cửa thoát hiểm mở ngoài."
        ),
    },
    "TCVN 5687:2010": {
        "title": "Thông gió — Điều hòa không khí",
        "key_rules": (
            "Lưu lượng gió tươi: phòng ngủ 7 l/s/người, "
            "phòng khách 10 l/s/người, bếp 20 l/s. Cửa thông gió đối lưu."
        ),
    },
    "QCVN 02:2009/BXD": {
        "title": "Số liệu tự nhiên dùng trong xây dựng",
        "key_rules": (
            "Áp lực gió W0: HCM=0.83 kN/m² vùng IIA, HN=0.95 vùng IIB, "
            "Đà Nẵng=1.25 vùng IIIB. Nhiệt độ thiết kế: 35-37°C."
        ),
    },
    "QCVN 06:2022/BXD": {
        "title": "An toàn cháy cho nhà và công trình",
        "key_rules": (
            "Bậc chịu lửa nhà ở: I-II với cao tầng. "
            "Khoảng cách an toàn giữa các nhà: ≥6m."
        ),
    },
}


# ─── Sun path data (Vietnam major cities) ───────────────────────────
# Latitude (positive = North), longitude
VN_CITIES_GEO: dict[str, dict[str, float]] = {
    "Hà Nội":      {"lat": 21.03, "lon": 105.85, "climate_zone": "north_subtropical"},
    "Hải Phòng":   {"lat": 20.86, "lon": 106.68, "climate_zone": "north_subtropical"},
    "Đà Nẵng":     {"lat": 16.05, "lon": 108.21, "climate_zone": "central_tropical"},
    "Huế":         {"lat": 16.46, "lon": 107.59, "climate_zone": "central_tropical"},
    "Nha Trang":   {"lat": 12.24, "lon": 109.20, "climate_zone": "south_central_tropical"},
    "HCM":         {"lat": 10.82, "lon": 106.63, "climate_zone": "south_tropical"},
    "Hồ Chí Minh": {"lat": 10.82, "lon": 106.63, "climate_zone": "south_tropical"},
    "Cần Thơ":     {"lat": 10.04, "lon": 105.78, "climate_zone": "south_tropical"},
    "Đà Lạt":      {"lat": 11.94, "lon": 108.45, "climate_zone": "highland_temperate"},
}


def sun_path(province: str | None) -> dict:
    """Return solar geometry summary for a Vietnamese province.

    Returns sunrise/sunset azimuth + zenith angle at noon for the 3 key dates:
    summer solstice (Jun 21), equinox (Mar 21 / Sep 23), winter solstice (Dec 22).
    Azimuth measured from North clockwise (0=N, 90=E, 180=S, 270=W).
    """
    geo = VN_CITIES_GEO.get(province or "HCM", VN_CITIES_GEO["HCM"])
    lat = geo["lat"]

    # Solar declination at solstices/equinox: ±23.45° / 0°
    def noon_zenith(declination_deg: float) -> float:
        # Zenith angle = |latitude − declination| (when sun is south of zenith)
        return round(abs(lat - declination_deg), 1)

    return {
        "city": province or "HCM",
        "latitude": lat,
        "summer_solstice_jun21": {
            "noon_sun_zenith_deg": noon_zenith(23.45),
            "sun_position_at_noon": "Bắc đỉnh đầu" if lat < 23.45 else "Phía Nam",
            "shading_priority": "Tây + Tây Nam (chống nắng nóng buổi chiều)",
        },
        "equinox_mar21_sep23": {
            "noon_sun_zenith_deg": noon_zenith(0),
            "sun_position_at_noon": "Phía Nam",
            "shading_priority": "Cửa Tây cần che, Đông Nam đón nắng sáng",
        },
        "winter_solstice_dec22": {
            "noon_sun_zenith_deg": noon_zenith(-23.45),
            "sun_position_at_noon": "Phía Nam",
            "shading_priority": "Mở cửa Nam đón nắng ấm (miền Bắc)",
        },
        "design_recommendation": (
            "Đặt phòng khách + ngủ chính hướng Nam/Đông Nam (đón nắng, tránh nóng tây). "
            "WC + kho hướng Tây (chấp nhận nắng nóng). "
            "Mái đua/lam che cửa Tây ≥1.2m sâu."
        ),
    }


# ─── Climate zones VN ───────────────────────────────────────────────
VN_CLIMATE_ZONES: dict[str, dict[str, str]] = {
    "north_subtropical": {
        "name": "Cận nhiệt đới ẩm gió mùa miền Bắc",
        "temp_range": "8°C (mùa đông) — 38°C (mùa hè)",
        "rainfall_mm_year": "1500-2000",
        "humidity": "75-85% quanh năm, mùa nồm 90%+",
        "dominant_wind_summer": "Đông Nam (mát từ biển)",
        "dominant_wind_winter": "Đông Bắc (lạnh khô)",
        "design_keys": (
            "Cách nhiệt mái + tường tốt. Cửa lá sách giúp thông gió mùa hè. "
            "Tránh sàn gỗ trực tiếp lên đất (mùa nồm ẩm)."
        ),
    },
    "central_tropical": {
        "name": "Nhiệt đới gió mùa miền Trung",
        "temp_range": "18°C — 40°C",
        "rainfall_mm_year": "2000-3500 (cực đại tháng 9-12)",
        "humidity": "75-85%",
        "dominant_wind_summer": "Tây Nam khô nóng (gió Lào)",
        "dominant_wind_winter": "Đông Bắc + bão",
        "design_keys": (
            "Chống bão: mái dốc 30-40°, neo mái chắc. "
            "Chống nóng tây: lam che + cây xanh. "
            "Cốt nền ≥30cm chống ngập."
        ),
    },
    "south_tropical": {
        "name": "Nhiệt đới ẩm cận xích đạo miền Nam",
        "temp_range": "22°C — 36°C (ổn định)",
        "rainfall_mm_year": "1500-2000 (mùa mưa T5-T11)",
        "humidity": "75-85%",
        "dominant_wind_summer": "Tây Nam (ẩm, mưa)",
        "dominant_wind_winter": "Đông Bắc (mát khô)",
        "design_keys": (
            "Mở rộng cửa sổ đón gió Đông Nam. "
            "Mái đua sâu chống mưa xiên. "
            "Tránh hướng Tây buổi chiều, dùng lam BTCT hoặc cây xanh."
        ),
    },
    "south_central_tropical": {
        "name": "Nhiệt đới gió mùa Nam Trung Bộ",
        "temp_range": "20°C — 36°C",
        "rainfall_mm_year": "1000-1500 (khô hơn)",
        "humidity": "70-80%",
        "dominant_wind_summer": "Tây Nam",
        "dominant_wind_winter": "Đông Bắc",
        "design_keys": (
            "Khí hậu khô hơn → vật liệu đa dạng. "
            "Đón gió biển Đông. Cửa sổ lớn không sợ ẩm."
        ),
    },
    "highland_temperate": {
        "name": "Ôn đới cao nguyên (Đà Lạt, Lâm Đồng)",
        "temp_range": "12°C — 25°C",
        "rainfall_mm_year": "1800-2200",
        "humidity": "80-90%",
        "dominant_wind_summer": "Đông Nam mát",
        "dominant_wind_winter": "Đông Bắc lạnh",
        "design_keys": (
            "Cách nhiệt mái + tường (mùa lạnh). "
            "Mái dốc ≥25° thoát nước nhanh. "
            "Lò sưởi/sàn ấm cho mùa đông."
        ),
    },
}


# ─── Vật liệu ngoại thất / kiến trúc VN ─────────────────────────────
VN_ARCH_MATERIALS: dict[str, dict] = {
    "gach_xay": {
        "name": "Gạch ống Tuynel 80x80x180",
        "unit": "viên", "price": 1850,
        "spec": "Mác 75, hấp thụ nước <16%",
    },
    "gach_khong_nung": {
        "name": "Gạch không nung AAC 600x100x200",
        "unit": "viên", "price": 12500,
        "spec": "Cách nhiệt λ=0.16, nhẹ, thân thiện môi trường",
    },
    "be_tong_thuong_pham": {
        "name": "Bê tông thương phẩm B25 (M350)",
        "unit": "m³", "price": 1450000,
        "spec": "Cường độ Rb=14.5 MPa, độ sụt 12±2cm",
    },
    "thep_pomina": {
        "name": "Thép Pomina CB400-V φ16",
        "unit": "kg", "price": 18500,
        "spec": "Giới hạn chảy 400 MPa, theo TCVN 1651-2:2018",
    },
    "thep_hoa_phat": {
        "name": "Thép Hòa Phát CB400-V φ12",
        "unit": "kg", "price": 18800,
        "spec": "Giới hạn chảy 400 MPa, gân hình",
    },
    "son_dulux_weathershield": {
        "name": "Sơn ngoại thất Dulux Weathershield 5L",
        "unit": "lon", "price": 1280000,
        "spec": "Chống thấm + chống bám bụi, bảo hành 7 năm",
    },
    "da_granite_op_mat": {
        "name": "Đá granite ốp mặt tiền (Bình Định) 600x300x20",
        "unit": "m²", "price": 685000,
        "spec": "Chống thấm tự nhiên, độ bền 50+ năm",
    },
    "kinh_low_e": {
        "name": "Kính hộp Low-E 6+9A+6mm Saint-Gobain",
        "unit": "m²", "price": 1850000,
        "spec": "Truyền nhiệt U=1.6 W/m²K, cách âm 32dB",
    },
    "ngoi_dat_set_nung": {
        "name": "Ngói đất sét nung Đồng Tâm 22 viên/m²",
        "unit": "viên", "price": 12500,
        "spec": "Chịu mưa bão, không bay màu, nhiệt thấp",
    },
    "ngoi_thai_lan": {
        "name": "Ngói màu Thái Lan SCG 5° dốc",
        "unit": "viên", "price": 18500,
        "spec": "Bê tông phủ epoxy, bảo hành 30 năm",
    },
    "lam_chong_nang_btct": {
        "name": "Lam chống nắng BTCT đúc sẵn 100x10cm",
        "unit": "md", "price": 285000,
        "spec": "Bê tông M250 + thép φ8, đúc sẵn nhà máy",
    },
    "ton_lop_mai_kem": {
        "name": "Tôn kẽm 5 sóng Hoa Sen 0.45mm",
        "unit": "m²", "price": 165000,
        "spec": "Mạ kẽm AZ100, dày 0.45mm, chống gỉ",
    },
}


# ─── Cost benchmarks construction VN 2026 (per m² sàn) ──────────────
CONSTRUCTION_COST_BENCHMARKS_VND_PER_M2: dict[str, dict[str, int]] = {
    "co_so": {
        "name": "Phần thô",
        "min": 3500000,
        "typical": 4500000,
        "max": 5800000,
        "note": "BTCT khung, gạch xây, mái, không gồm hoàn thiện",
    },
    "ban_hoan_thien": {
        "name": "Hoàn thiện cơ bản",
        "min": 4500000,
        "typical": 6500000,
        "max": 9000000,
        "note": "Sơn, sàn gạch, cửa nhôm, vệ sinh phổ thông",
    },
    "cao_cap": {
        "name": "Hoàn thiện cao cấp",
        "min": 9000000,
        "typical": 12500000,
        "max": 18000000,
        "note": "Marble, gỗ tự nhiên, vệ sinh TOTO/Grohe, cửa gỗ thật",
    },
    "luxury": {
        "name": "Luxury (biệt thự cao cấp)",
        "min": 18000000,
        "typical": 25000000,
        "max": 40000000,
        "note": "Designer furniture, smart home, sân vườn cảnh quan",
    },
}


def estimate_construction_cost(
    area_m2: float,
    floors: int = 1,
    finish_level: str = "ban_hoan_thien"
) -> dict:
    """Estimate total construction cost for a Vietnamese residential project.

    Args:
        area_m2: floor area per floor (m²)
        floors: number of floors (1-50)
        finish_level: co_so | ban_hoan_thien | cao_cap | luxury

    Returns:
        dict with min/typical/max VND total + per m² breakdown
    """
    benchmark = CONSTRUCTION_COST_BENCHMARKS_VND_PER_M2.get(
        finish_level, CONSTRUCTION_COST_BENCHMARKS_VND_PER_M2["ban_hoan_thien"]
    )
    total_area = area_m2 * floors
    return {
        "total_floor_area_m2": total_area,
        "finish_level": benchmark["name"],
        "cost_per_m2_vnd": benchmark["typical"],
        "cost_min_vnd": int(total_area * benchmark["min"]),
        "cost_typical_vnd": int(total_area * benchmark["typical"]),
        "cost_max_vnd": int(total_area * benchmark["max"]),
        "note": benchmark["note"],
    }
