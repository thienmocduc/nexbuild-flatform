// NexMarket JS (extracted from inline)

// ── DATA ──
const PRODUCTS = [
  {ico:'🧱',bg:'rgba(0,201,167,.1)',name:'Xi măng PCB40 bao 40kg',sup:'Vicem Hải Phòng',rating:'4.9',price:'128,000',unit:'/bao',old:'145,000',info:'Tối thiểu 20 bao · Giao 24h · HN',badges:['d2c','sale'],saleNum:'-12%',ctaBg:'linear-gradient(135deg,#00C9A7,#0EA5E9)',c:'#00C9A7'},
  {ico:'🔩',bg:'rgba(99,102,241,.1)',name:'Thép cuộn CB240-T Φ10mm',sup:'Hòa Phát Steel',rating:'4.8',price:'17,800',unit:'/kg',old:'',info:'Tối thiểu 1 tấn · Giao theo lô',badges:['bulk'],saleNum:'Bulk -8%',ctaBg:'linear-gradient(135deg,#6366F1,#A855F7)',c:'#6366F1'},
  {ico:'🪵',bg:'rgba(245,158,11,.1)',name:'MDF An Cường 18mm 1220×2440',sup:'An Cường Wood',rating:'4.9',price:'265,000',unit:'/tờ',old:'',info:'Sẵn kho · Giao 48h · Toàn quốc',badges:['d2c','new'],saleNum:'',ctaBg:'linear-gradient(135deg,#F59E0B,#FB923C)',c:'#F59E0B'},
  {ico:'🪟',bg:'rgba(14,165,233,.1)',name:'Kính cường lực 10mm tempered',sup:'Kính Việt',rating:'4.7',price:'360,000',unit:'/m²',old:'',info:'Cắt theo yêu cầu · Lắp đặt +phí',badges:['hot'],saleNum:'Hot',ctaBg:'linear-gradient(135deg,#0EA5E9,#6366F1)',c:'#0EA5E9'},
  {ico:'🎨',bg:'rgba(168,85,247,.1)',name:'Dulux Weathershield 18L',sup:'Dulux Vietnam',rating:'4.8',price:'780,000',unit:'',old:'920,000',info:'Giao 24h · Trộn màu miễn phí',badges:['d2c','sale'],saleNum:'-15%',ctaBg:'linear-gradient(135deg,#A855F7,#6366F1)',c:'#A855F7'},
  {ico:'⚡',bg:'rgba(34,197,94,.1)',name:'Dây điện Cadivi 2.5mm² (100m)',sup:'Cadivi Corp',rating:'4.9',price:'2,200,000',unit:'/cuộn',old:'',info:'Sẵn kho · Giao 24h · Chuẩn quốc tế',badges:['vip'],saleNum:'Top NCC',ctaBg:'linear-gradient(135deg,#22C55E,#00C9A7)',c:'#22C55E'},
  {ico:'🚿',bg:'rgba(14,165,233,.1)',name:'Bộ sen vòi TOTO đơn giản',sup:'TOTO Vietnam',rating:'4.7',price:'3,800,000',unit:'/bộ',old:'4,500,000',info:'Bảo hành 5 năm · Giao 48h',badges:['sale'],saleNum:'-16%',ctaBg:'linear-gradient(135deg,#0EA5E9,#00C9A7)',c:'#0EA5E9'},
  {ico:'⚙️',bg:'rgba(251,146,60,.1)',name:'Máy trộn bê tông 250L điện 3pha',sup:'Machinery VN',rating:'4.6',price:'8,500,000',unit:'',old:'',info:'Cho thuê: 350K/ngày · Toàn quốc',badges:['bulk'],saleNum:'Cho thuê',ctaBg:'linear-gradient(135deg,#FB923C,#F59E0B)',c:'#FB923C'},
];

const WORKERS = [
  {av:'👷',avBg:'linear-gradient(135deg,#00C9A7,#0EA5E9)',name:'Nguyễn Văn An',loc:'Thợ hồ · Đống Đa, HN',km:'1.2km',online:true,status:'● Online ngay',statusC:'#22C55E',price:'450K',pricec:'#00C9A7',rating:'⭐ 4.9',ratingNum:'(128)',desc:'Chuyên tô trát, ốp lát, chống thấm. 8 năm KN, 234 dự án. Làm việc kỹ, đúng hạn, báo cáo hàng ngày qua app.',tags:[{t:'NexAcademy ✓',c:'rgba(0,201,167,.1)',bc:'rgba(0,201,167,.25)',tc:'#00C9A7'},{t:'Escrow ✓',c:'rgba(0,201,167,.1)',bc:'rgba(0,201,167,.25)',tc:'#00C9A7'},{t:'Bảo hiểm ✓',c:'rgba(14,165,233,.1)',bc:'rgba(14,165,233,.25)',tc:'#0EA5E9'}],btnBg:'linear-gradient(135deg,#00C9A7,#0EA5E9)'},
  {av:'⚡',avBg:'linear-gradient(135deg,#0EA5E9,#6366F1)',name:'Trần Văn Minh',loc:'Thợ điện · Cầu Giấy, HN',km:'2.8km',online:true,status:'● Online ngay',statusC:'#22C55E',price:'550K',pricec:'#0EA5E9',rating:'⭐ 4.8',ratingNum:'(96)',desc:'Điện dân dụng & công nghiệp. Chứng chỉ an toàn điện quốc gia. 6 năm KN. Nhận gấp được, bắt đầu hôm nay.',tags:[{t:'Cert AT điện ✓',c:'rgba(14,165,233,.1)',bc:'rgba(14,165,233,.25)',tc:'#0EA5E9'},{t:'Escrow ✓',c:'rgba(0,201,167,.1)',bc:'rgba(0,201,167,.25)',tc:'#00C9A7'}],btnBg:'linear-gradient(135deg,#0EA5E9,#6366F1)'},
  {av:'🪵',avBg:'linear-gradient(135deg,#6366F1,#A855F7)',name:'Lê Minh Tuấn',loc:'Thợ mộc · Hoàn Kiếm, HN',km:'0.8km',online:true,status:'● Online ngay',statusC:'#22C55E',price:'700K',pricec:'#6366F1',rating:'⭐ 5.0',ratingNum:'(214)',desc:'Đồ gỗ cao cấp, nội thất theo yêu cầu. 12 năm KN chuyên biệt thự và văn phòng. Portfolio 200+ dự án. Bảo hành 12T.',tags:[{t:'Top Rated',c:'rgba(99,102,241,.1)',bc:'rgba(99,102,241,.25)',tc:'#6366F1'},{t:'Escrow ✓',c:'rgba(0,201,167,.1)',bc:'rgba(0,201,167,.25)',tc:'#00C9A7'},{t:'Bảo hành 12T',c:'rgba(168,85,247,.1)',bc:'rgba(168,85,247,.25)',tc:'#A855F7'}],btnBg:'linear-gradient(135deg,#6366F1,#A855F7)'},
  {av:'🏗️',avBg:'linear-gradient(135deg,#A855F7,#6366F1)',name:'CT Hoàng Gia',loc:'Nhà thầu · HN · Đội 15 người',km:'—',online:false,status:'◐ Sẵn sàng tháng 8',statusC:'#F59E0B',price:'Theo DA',pricec:'#A855F7',rating:'⭐ 5.0',ratingNum:'(48)',desc:'Nhà thầu full-service: hoàn thiện + nội thất. Đội 15 thợ chuyên biệt từng hạng mục. 48 DA biệt thự/VP. Bảo hành 24T.',tags:[{t:'Nhà thầu A+',c:'rgba(168,85,247,.1)',bc:'rgba(168,85,247,.25)',tc:'#A855F7'},{t:'Bảo hành 24T',c:'rgba(34,197,94,.1)',bc:'rgba(34,197,94,.25)',tc:'#22C55E'},{t:'Hợp đồng số',c:'rgba(14,165,233,.1)',bc:'rgba(14,165,233,.25)',tc:'#0EA5E9'}],btnBg:'linear-gradient(135deg,#A855F7,#6366F1)'},
  {av:'🎨',avBg:'linear-gradient(135deg,#FB923C,#F59E0B)',name:'Phạm Thị Hoa',loc:'Thợ sơn · Thanh Xuân, HN',km:'3.5km',online:true,status:'● Online ngay',statusC:'#22C55E',price:'350K',pricec:'#FB923C',rating:'⭐ 4.7',ratingNum:'(67)',desc:'Sơn nội ngoại thất, phun sơn, sơn epoxy sàn. 5 năm KN. Thợ nữ, làm việc cẩn thận, dọn dẹp sạch sau khi xong.',tags:[{t:'Escrow ✓',c:'rgba(0,201,167,.1)',bc:'rgba(0,201,167,.25)',tc:'#00C9A7'},{t:'Sơn epoxy',c:'rgba(251,146,60,.1)',bc:'rgba(251,146,60,.25)',tc:'#FB923C'}],btnBg:'linear-gradient(135deg,#FB923C,#F59E0B)'},
  {av:'🚰',avBg:'linear-gradient(135deg,#22C55E,#00C9A7)',name:'Nguyễn Đức Thành',loc:'Thợ nước · Hà Đông, HN',km:'6.2km',online:false,status:'◐ Sáng mai sẵn sàng',statusC:'#F59E0B',price:'420K',pricec:'#22C55E',rating:'⭐ 4.8',ratingNum:'(89)',desc:'Cấp thoát nước, điện nước, thiết bị vệ sinh cao cấp. Chuyên lắp đặt TOTO, American Standard. 7 năm KN.',tags:[{t:'Escrow ✓',c:'rgba(0,201,167,.1)',bc:'rgba(0,201,167,.25)',tc:'#00C9A7'},{t:'Thiết bị cao cấp',c:'rgba(34,197,94,.1)',bc:'rgba(34,197,94,.25)',tc:'#22C55E'}],btnBg:'linear-gradient(135deg,#22C55E,#00C9A7)'},
];

const PROJECTS = [
  {type:'🏠 Nhà phố',typeC:'p-t',name:'Hoàn thiện nội thất nhà phố 3 tầng — Đống Đa, HN',desc:'Nhà 120m²/tầng × 3 tầng. Cần hoàn thiện toàn bộ: hồ, điện, nước, sơn, nội thất. Có bản vẽ NexDesign AI. Escrow qua NexBuild bắt buộc. Chủ nhà nghiêm túc, trả đúng hạn.',pills:[{t:'💰 280–350 triệu',c:'p-t'},{t:'⏱️ 45 ngày',c:'p-b'},{t:'📍 Đống Đa·HN',c:'p-gold'},{t:'🔒 Escrow',c:'p-i'}],status:'p-g',statusT:'Mới đăng',views:18,btnBg:'linear-gradient(135deg,#00C9A7,#0EA5E9)',time:'3h trước'},
  {type:'🏢 Văn phòng',typeC:'p-i',name:'Fit-out văn phòng 400m² tầng 8 — Cầu Giấy, HN',desc:'Tòa Handico, tầng 8. Thiết kế open space hiện đại. Cần đội nhà thầu full-service có KN văn phòng. Deadline cứng — thưởng 20 triệu nếu xong sớm 1 tuần.',pills:[{t:'💰 1.2–1.8 tỷ',c:'p-i'},{t:'⏱️ 30 ngày',c:'p-b'},{t:'📍 Cầu Giấy·HN',c:'p-gold'},{t:'🏆 Thưởng tiến độ',c:'p-g'}],status:'p-r',statusT:'⚡ Gấp',views:34,btnBg:'linear-gradient(135deg,#6366F1,#A855F7)',time:'6h trước'},
  {type:'🏡 Biệt thự',typeC:'p-gold',name:'Xây thô + hoàn thiện biệt thự 500m² — Hà Đông, HN',desc:'Biệt thự 3 tầng + 1 tum, 500m² sàn. Giai đoạn 1: xây thô. Giai đoạn 2: hoàn thiện. Thanh toán theo 6 milestone. Ưu tiên nhà thầu có portfolio biệt thự tương đương.',pills:[{t:'💰 3.5–5 tỷ',c:'p-gold'},{t:'⏱️ 8 tháng',c:'p-b'},{t:'📍 Hà Đông·HN',c:'p-t'},{t:'💎 Milestone payment',c:'p-v'}],status:'p-b',statusT:'Hot',views:12,btnBg:'linear-gradient(135deg,#C9A84C,#F59E0B)',time:'1 ngày trước'},
  {type:'🏬 Shophouse',typeC:'p-or',name:'Cải tạo shophouse 4 tầng thành chuỗi F&B — Hai Bà Trưng',desc:'4 tầng, 80m²/tầng. Concept: cafe tầng 1, kitchen tầng 2, lounge tầng 3+4. Cần tổng thầu thiết kế + thi công. Có sẵn concept board. Timeline gấp — khai trương Q3.',pills:[{t:'💰 800M–1.2 tỷ',c:'p-or'},{t:'⏱️ 45 ngày',c:'p-b'},{t:'📍 Hai Bà Trưng·HN',c:'p-gold'},{t:'🍽️ F&B Concept',c:'p-r'}],status:'p-g',statusT:'Mới',views:22,btnBg:'linear-gradient(135deg,#FB923C,#F59E0B)',time:'2 ngày trước'},
];

const SUPPLIERS = [
  {ico:'🏭',name:'Vicem Hải Phòng',verified:'✓ Verified D2C Partner',bg:'linear-gradient(135deg,rgba(0,201,167,.25),rgba(14,165,233,.15))',cats:[{t:'Xi măng',c:'p-t'},{t:'Vữa khô',c:'p-b'}],prods:'2,100',rating:'4.9',delivery:'24h',actBg:'linear-gradient(135deg,#00C9A7,#0EA5E9)'},
  {ico:'🔩',name:'Hòa Phát Steel',verified:'✓ Verified D2C Partner',bg:'linear-gradient(135deg,rgba(99,102,241,.25),rgba(168,85,247,.15))',cats:[{t:'Thép xây dựng',c:'p-i'},{t:'Thép hình',c:'p-v'}],prods:'380',rating:'4.8',delivery:'Theo lô',actBg:'linear-gradient(135deg,#6366F1,#A855F7)'},
  {ico:'🪵',name:'An Cường Wood',verified:'✓ Verified D2C Partner',bg:'linear-gradient(135deg,rgba(245,158,11,.25),rgba(251,146,60,.15))',cats:[{t:'Gỗ MDF',c:'p-gold'},{t:'Gỗ HDF',c:'p-or'}],prods:'560',rating:'4.9',delivery:'48h',actBg:'linear-gradient(135deg,#F59E0B,#FB923C)'},
  {ico:'⚡',name:'Cadivi Corp',verified:'✓ Verified D2C Partner',bg:'linear-gradient(135deg,rgba(34,197,94,.25),rgba(0,201,167,.15))',cats:[{t:'Dây điện',c:'p-g'},{t:'Cáp điện',c:'p-t'}],prods:'820',rating:'4.9',delivery:'Toàn quốc',actBg:'linear-gradient(135deg,#22C55E,#00C9A7)'},
  {ico:'🚿',name:'TOTO Vietnam',verified:'✓ Verified D2C Partner',bg:'linear-gradient(135deg,rgba(14,165,233,.25),rgba(99,102,241,.15))',cats:[{t:'Vệ sinh',c:'p-b'},{t:'Vòi nước',c:'p-i'}],prods:'340',rating:'4.7',delivery:'48h',actBg:'linear-gradient(135deg,#0EA5E9,#6366F1)'},
  {ico:'🎨',name:'Dulux Vietnam',verified:'✓ Verified D2C Partner',bg:'linear-gradient(135deg,rgba(168,85,247,.25),rgba(239,68,68,.15))',cats:[{t:'Sơn nội thất',c:'p-v'},{t:'Sơn ngoại thất',c:'p-r'}],prods:'420',rating:'4.8',delivery:'24h',actBg:'linear-gradient(135deg,#A855F7,#EF4444)'},
];

const FORUM_POSTS = [
  {av:'👷',avBg:'linear-gradient(135deg,#00C9A7,#0EA5E9)',name:'KS. Nguyễn Thanh Hùng',role:'Kỹ sư XD · 12 năm KN',votes:156,title:'Kinh nghiệm chống thấm tầng hầm không cần đục phá — tiết kiệm 70% chi phí',excerpt:'Sau 12 năm thi công, phương pháp tiêm áp lực PU foam có thể xử lý thấm hiệu quả mà không cần phá dỡ. Đặc biệt phù hợp với tầng hầm nhà phố HN mùa mưa. Kết quả thực tế trên 23 công trình...',tags:[{t:'Kỹ thuật',c:'p-t'},{t:'Chống thấm',c:'p-b'}],comments:43,time:'2h trước'},
  {av:'🏗️',avBg:'linear-gradient(135deg,#6366F1,#A855F7)',name:'Nhà thầu Lê Văn Dũng',role:'Nhà thầu · 8 năm · 200+ dự án',votes:289,title:'7 sai lầm chí mạng khiến 80% nhà thầu nhỏ thua lỗ năm đầu',excerpt:'Dựa trên 8 năm và quan sát 200+ đội thầu, từ báo giá thiếu, dòng tiền kém đến không có hợp đồng rõ ràng — mỗi sai lầm đều có giải pháp cụ thể đã được kiểm chứng thực tế...',tags:[{t:'Kinh doanh',c:'p-v'},{t:'Nhà thầu',c:'p-gold'}],comments:67,time:'5h trước'},
  {av:'📐',avBg:'linear-gradient(135deg,#F59E0B,#FB923C)',name:'KTS. Phạm Thu Hà',role:'Kiến trúc sư · 10 năm KN',votes:412,title:'Hướng dẫn đọc bản vẽ kỹ thuật từ cơ bản đến nâng cao — 12 tập video',excerpt:'Series 12 tập cho thợ và nhà thầu: ký hiệu cơ bản, mặt bằng, mặt cắt đến chi tiết kết cấu. Xem trước ROI thực tế — thợ học xong booking tăng 25% theo khảo sát 200 học viên...',tags:[{t:'Tutorial',c:'p-gold'},{t:'Thiết kế',c:'p-t'}],comments:89,time:'1 ngày trước'},
  {av:'💰',avBg:'linear-gradient(135deg,#22C55E,#00C9A7)',name:'Tài chính Trần Minh',role:'Chuyên gia tài chính XD',votes:178,title:'Cách tính dòng tiền dự án xây dựng để không bao giờ bị thiếu vốn giữa chừng',excerpt:'80% nhà thầu không có cashflow model. Tôi chia sẻ template Excel miễn phí + phương pháp tính nhu cầu vốn theo từng milestone để luôn chủ động dòng tiền...',tags:[{t:'Tài chính',c:'p-g'},{t:'Cashflow',c:'p-b'}],comments:52,time:'2 ngày trước'},
];

const CART_DATA = [
  {ico:'🧱',bg:'rgba(0,201,167,.12)',name:'Xi măng PCB40 bao 40kg — Vicem',sup:'Vicem Hải Phòng · D2C',qty:20,unit:'bao',unitPrice:128000,total:2560000,totalF:'2,560,000đ'},
  {ico:'🔩',bg:'rgba(99,102,241,.12)',name:'Thép cuộn CB240-T Φ10mm',sup:'Hòa Phát Steel · D2C',qty:500,unit:'kg',unitPrice:17800,total:8900000,totalF:'8,900,000đ'},
  {ico:'🎨',bg:'rgba(168,85,247,.12)',name:'Dulux Weathershield 18L',sup:'Dulux Vietnam · D2C',qty:2,unit:'thùng',unitPrice:780000,total:1560000,totalF:'1,560,000đ'},
];

const ORDERS = [
  {id:'NXM-2025-0891',date:'Hôm nay 09:34',status:'p-gold',statusT:'Đang xử lý',items:[{ico:'🧱',name:'Xi măng PCB40 × 20 bao — Vicem'},{ico:'🎨',name:'Dulux Weathershield 18L × 2 thùng'}],total:'4,120,000đ',totalNum:4120000},
  {id:'NXM-2025-0756',date:'3 ngày trước',status:'p-b',statusT:'Đang giao',items:[{ico:'🔩',name:'Thép CB240-T 500kg — Hòa Phát'},{ico:'⚡',name:'Dây Cadivi 2.5mm² × 3 cuộn'}],total:'15,500,000đ',totalNum:15500000},
  {id:'NXM-2025-0612',date:'1 tuần trước',status:'p-g',statusT:'Đã nhận',items:[{ico:'🪵',name:'MDF An Cường 18mm × 10 tờ'}],total:'2,650,000đ',totalNum:2650000},
  {id:'NXM-2025-0543',date:'2 tuần trước',status:'p-g',statusT:'Đã nhận',items:[{ico:'🚿',name:'Bộ sen vòi TOTO × 2 bộ'}],total:'7,600,000đ',totalNum:7600000},
];

const TOP_CONTRIBS = [
  {medal:'🥇',name:'KS. Nguyễn Thanh Hùng',posts:47,upvotes:'2,840',pts:'+470 NXT',bg:'linear-gradient(135deg,#C9A84C,#F59E0B)'},
  {medal:'🥈',name:'Nhà thầu Lê Văn Dũng',posts:31,upvotes:'1,920',pts:'+310 NXT',bg:'linear-gradient(135deg,#94A3B8,#64748B)'},
  {medal:'🥉',name:'KTS. Phạm Thu Hà',posts:28,upvotes:'1,640',pts:'+280 NXT',bg:'linear-gradient(135deg,#FB923C,#F59E0B)'},
];

// ── RENDER FUNCTIONS ──
function renderProducts(data){
  document.getElementById('productGrid').innerHTML = data.map(p=>`
    <div class="pcard">
      <div class="pc-img" style="background:${p.bg}">${p.ico}
        <div class="pc-badges">${p.badges.includes('sale')?`<span class="bdg bdg-sale">${p.saleNum||'-12%'}</span>`:p.badges.includes('new')?`<span class="bdg bdg-new">New</span>`:p.badges.includes('hot')?`<span class="bdg bdg-hot">Hot</span>`:p.badges.includes('bulk')?`<span class="bdg bdg-bulk">${p.saleNum||'Bulk'}</span>`:p.badges.includes('vip')?`<span class="bdg bdg-vip">${p.saleNum||'VIP'}</span>`:''}</div>
        ${p.badges.includes('d2c')?'<div class="pc-badge-l"><span class="bdg bdg-d2c">D2C</span></div>':''}
      </div>
      <div class="pc-body">
        <div class="pc-sup"><span>${p.sup}</span><span style="color:${p.c};font-weight:700">⭐${p.rating}</span></div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-price-row"><span class="pc-price" style="color:${p.c}">${p.price}</span>${p.old?`<span class="pc-price-old">${p.old}</span>`:''}<span class="pc-unit">${p.unit}</span></div>
        <div class="pc-info">${p.info}</div>
        <div class="pc-acts">
          <button class="pb" style="background:${p.ctaBg}" onclick="addToCart('${p.name}')">🛒 Thêm giỏ</button>
          <button class="pb-s" onclick="toast('Xem chi tiết sản phẩm')">Chi tiết</button>
        </div>
      </div>
    </div>`).join('');
}

function renderWorkers(){
  document.getElementById('workerGrid').innerHTML = WORKERS.map(w=>`
    <div class="wcard">
      <div class="wc-top">
        <div class="wc-av" style="background:${w.avBg}">${w.av}<div class="wc-online ${w.online?'on-green':'on-yellow'}"></div></div>
        <div class="wc-info">
          <div class="wc-name">${w.name}</div>
          <div class="wc-loc">${w.loc} ${w.km!=='—'?`· ${w.km}`:''}</div>
          <div class="wc-status" style="color:${w.statusC}">${w.status}</div>
        </div>
        <div style="text-align:right">
          <div class="wc-price" style="color:${w.pricec}">${w.price}${w.price!=='Theo DA'?'<span style="font-size:10px;color:var(--text3)">/ngày</span>':''}</div>
          <div class="wc-rating" style="color:var(--amb)">${w.rating}<span style="color:var(--text3);font-weight:400"> ${w.ratingNum}</span></div>
        </div>
      </div>
      <div class="wc-desc">${w.desc}</div>
      <div class="wc-tags">${w.tags.map(t=>`<span class="wtag" style="background:${t.c};border-color:${t.bc};color:${t.tc}">${t.t}</span>`).join('')}</div>
      <div class="wc-acts">
        <button class="wa" style="background:${w.btnBg}" onclick="openBooking('${w.name}','${w.pricec}')">Đặt lịch ngay</button>
        <button class="wa-g wa" onclick="toast('Xem hồ sơ đầy đủ của ${w.name}')">Xem hồ sơ</button>
      </div>
    </div>`).join('');
}

function renderProjects(){
  document.getElementById('projectList').innerHTML = PROJECTS.map(p=>`
    <div class="pjcard">
      <div class="pjc-top">
        <div class="pjc-info">
          <div class="pjc-header">
            <span class="pill ${p.typeC}">${p.type}</span>
            <span style="font-size:10px;color:var(--text3)">${p.time}</span>
            <span class="pill ${p.status}">${p.statusT}</span>
          </div>
          <div class="pjc-name">${p.name}</div>
          <div class="pills">${p.pills.map(pl=>`<span class="pill ${pl.c}">${pl.t}</span>`).join('')}</div>
          <div class="pjc-desc">${p.desc}</div>
        </div>
        <div class="pjc-acts">
          <button class="pja" style="background:${p.btnBg}" onclick="openBidModal()">Ứng tuyển ngay</button>
          <button class="pja pja-g" onclick="toast('Xem chi tiết công trình')">Xem chi tiết</button>
          <div class="pjc-views">👁️ ${p.views} người đang xem</div>
        </div>
      </div>
    </div>`).join('');
}

function renderSuppliers(){
  document.getElementById('supplierGrid').innerHTML = SUPPLIERS.map(s=>`
    <div class="scard">
      <div class="sc-banner" style="background:${s.bg}">
        <div class="sc-ico">${s.ico}</div>
        <div><div class="sc-bname">${s.name}</div><div class="sc-verified">✓ ${s.verified.replace('✓ ','')}</div></div>
      </div>
      <div class="sc-body">
        <div class="sc-cats">${s.cats.map(c=>`<span class="pill ${c.c}">${c.t}</span>`).join('')}</div>
        <div class="sc-meta">
          <div class="sc-m"><div class="sc-mv" style="color:var(--c1)">${s.prods}</div><div class="sc-ml">SP</div></div>
          <div class="sc-m"><div class="sc-mv" style="color:var(--amb)">⭐${s.rating}</div><div class="sc-ml">Rating</div></div>
          <div class="sc-m"><div class="sc-mv" style="color:var(--green)">${s.delivery}</div><div class="sc-ml">Giao</div></div>
        </div>
        <button class="sc-act" style="background:${s.actBg}" onclick="openSupplierStore('${s.name}')">Xem gian hàng →</button>
      </div>
    </div>`).join('');
}

function renderForum(){
  document.getElementById('forumList').innerHTML = FORUM_POSTS.map(p=>`
    <div class="fpost" onclick="toast('Mở bài viết: ${p.title.substring(0,40)}...')">
      <div class="fp-top">
        <div class="fp-av" style="background:${p.avBg}">${p.av}</div>
        <div class="fp-meta"><div class="fp-name">${p.name}</div><div class="fp-role">${p.role}</div></div>
        <div class="fp-vote" style="color:var(--amb)">▲ ${p.votes}</div>
      </div>
      <div class="fp-title">${p.title}</div>
      <div class="fp-excerpt">${p.excerpt}</div>
      <div class="fp-footer">
        <div style="display:flex;gap:4px">${p.tags.map(t=>`<span class="pill ${t.c}">${t.t}</span>`).join('')}</div>
        <strong style="color:var(--text2)">${p.comments} bình luận</strong>
        <span>${p.time}</span>
      </div>
    </div>`).join('');
  document.getElementById('topContrib').innerHTML = TOP_CONTRIBS.map(t=>`
    <div class="tc-item">
      <div class="tc-av" style="background:${t.bg}">${t.medal}</div>
      <div style="flex:1"><div class="tc-name">${t.name}</div><div style="font-size:9px;color:var(--text3)">${t.posts} bài · ${t.upvotes} upvotes</div></div>
      <div class="tc-pts">${t.pts}</div>
    </div>`).join('');
}

function renderCart(){
  document.getElementById('cartItems').innerHTML = CART_DATA.map((item,idx)=>`
    <div class="cart-item">
      <div class="ci-thumb" style="background:${item.bg}">${item.ico}</div>
      <div class="ci-info">
        <div class="ci-name">${item.name}</div>
        <div class="ci-sup">${item.sup}</div>
        <div class="ci-qty-row">
          <button class="qty-btn" onclick="changeQty(${idx},-1)">−</button>
          <span class="qty-val" id="qty-${idx}">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${idx},1)">+</button>
          <span class="ci-unit">${item.unit}</span>
          <span style="font-size:11px;color:var(--text3);margin-left:8px">${item.unitPrice.toLocaleString('vi')}đ/${item.unit}</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <div class="ci-total" style="color:var(--c1)" id="total-${idx}">${item.totalF}</div>
        <button class="ci-del" onclick="removeItem(${idx})">Xoá</button>
      </div>
    </div>`).join('');
  // Update summary
  const rows = document.getElementById('cartSummaryRows');
  if(rows) rows.innerHTML = CART_DATA.map(item=>`
    <div class="cs-row"><span>${item.name.substring(0,25)}${item.name.length>25?'...':''} (${item.qty} ${item.unit})</span><span>${item.totalF}</span></div>`).join('');
  const sub = CART_DATA.reduce((s,i)=>s+i.total,0);
  const vat = Math.round(sub*0.1);
  const total = sub + vat;
  const vatEl = document.getElementById('cartVat');
  const totalEl = document.getElementById('cartTotal');
  if(vatEl) vatEl.textContent = vat.toLocaleString('vi')+'đ';
  if(totalEl) totalEl.textContent = total.toLocaleString('vi')+'đ';
  // Update header badge
  const count = CART_DATA.reduce((s,i)=>s+i.qty,0);
  const countEl=document.getElementById('cartCount');
  const sbEl=document.getElementById('cartBadgeSb');
  if(countEl) countEl.textContent=count;
  if(sbEl) sbEl.textContent=count;
  // Update cart header pill
  const hdrPill = document.querySelector('#pg-cart .pill.p-r');
  if(hdrPill) hdrPill.textContent = CART_DATA.length+' sản phẩm';
}

function renderOrders(filter){
  const filtered = filter && filter!=='all'
    ? ORDERS.filter(o=>({processing:'p-gold',shipping:'p-b',done:'p-g',dispute:'p-r'})[filter]===o.status)
    : ORDERS;
  document.getElementById('orderList').innerHTML = filtered.length ? filtered.map((o,idx)=>`
    <div class="order-card" id="ocard-${idx}">
      <div class="oc-head">
        <div>
          <div class="oc-id">#${o.id}</div>
          <div class="oc-date">${o.date}</div>
        </div>
        <div class="oc-status"><span class="pill ${o.status}">${o.statusT}</span></div>
      </div>

      ${o.status==='p-b'?`
      <div style="background:rgba(14,165,233,.06);border:1px solid rgba(14,165,233,.18);border-radius:9px;padding:10px 12px;margin-bottom:10px;font-size:11px;color:var(--c2)">
        <div style="font-weight:700;margin-bottom:4px">📍 Đang giao hàng — Cập nhật mới nhất</div>
        <div style="color:var(--text2);display:flex;flex-direction:column;gap:3px">
          <div>✅ <strong>14:22</strong> — Đơn hàng đã được bàn giao cho đơn vị vận chuyển</div>
          <div>✅ <strong>09:15</strong> — Hàng đã xuất kho nhà cung cấp</div>
          <div style="color:var(--text3)">⏳ Dự kiến nhận hàng: <strong style="color:var(--text)">Ngày mai 8–12h</strong></div>
        </div>
      </div>`:''}

      ${o.status==='p-gold'?`
      <div style="background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.18);border-radius:9px;padding:10px 12px;margin-bottom:10px;font-size:11px">
        <div style="font-weight:700;color:var(--amb);margin-bottom:6px">⚙️ Trạng thái xử lý đơn hàng</div>
        <div style="display:flex;gap:0;position:relative">
          <div style="position:absolute;top:8px;left:8px;right:8px;height:2px;background:rgba(245,158,11,.2)"></div>
          ${['Đặt hàng','Xác nhận','Đóng gói','Vận chuyển'].map((s,i)=>`
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;position:relative;z-index:1">
            <div style="width:18px;height:18px;border-radius:50%;${i<2?'background:var(--amb);':'background:rgba(255,255,255,.1);border:2px solid rgba(245,158,11,.3);'}display:flex;align-items:center;justify-content:center;font-size:9px;color:#fff;font-weight:700">${i<2?'✓':(i+1)}</div>
            <div style="font-size:9px;color:${i<2?'var(--amb)':'var(--text3)'};">${s}</div>
          </div>`).join('')}
        </div>
      </div>`:''}

      <div class="oc-items">${o.items.map(i=>`
        <div class="oc-item">
          <span class="oc-item-ico">${i.ico}</span>
          <span style="flex:1">${i.name}</span>
          ${o.status==='p-g'?`<button onclick="toast('Đánh giá sản phẩm: ${i.name}')" style="padding:3px 9px;border-radius:6px;border:1px solid rgba(245,158,11,.3);background:rgba(245,158,11,.08);color:var(--amb);font-size:9px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif">⭐ Đánh giá</button>`:''}
        </div>`).join('')}
      </div>

      <div class="oc-total">
        <div>
          <div class="oc-total-l">Tổng giá trị Escrow</div>
          ${o.status==='p-g'?`<div style="font-size:10px;color:var(--green);font-weight:600;margin-top:2px">✅ Escrow đã release · Tiền đến NCC</div>`:''}
          ${o.status==='p-b'?`<div style="font-size:10px;color:var(--c2);font-weight:600;margin-top:2px">🔒 Escrow đang giữ · Sẽ release khi bạn xác nhận</div>`:''}
          ${o.status==='p-gold'?`<div style="font-size:10px;color:var(--amb);font-weight:600;margin-top:2px">⏳ Tiền Escrow đang giữ an toàn</div>`:''}
        </div>
        <div class="oc-total-v">${o.total}</div>
      </div>

      <div class="oc-acts" style="margin-top:10px">
        ${o.status==='p-b'?`
          <button class="oa" style="background:linear-gradient(135deg,#22C55E,#00C9A7)" onclick="confirmReceived(${idx})">✅ Xác nhận nhận hàng</button>
          <button class="oa oa-g" onclick="openOrderDetail(${idx})">Chi tiết</button>
          <button class="oa oa-g" onclick="openDispute(${idx})">⚠️ Khiếu nại</button>
          <button class="oa oa-g" onclick="openChat('NCC')">💬 Chat NCC</button>
        `:''}
        ${o.status==='p-gold'?`
          <button class="oa" style="background:linear-gradient(135deg,#F59E0B,#FB923C)" onclick="openOrderDetail(${idx})">📋 Xem chi tiết</button>
          <button class="oa oa-g" onclick="openChat('NCC')">💬 Chat NCC</button>
          <button class="oa oa-g" onclick="toast('Đơn hàng #${o.id} đã huỷ thành công · Hoàn tiền Escrow trong 24h')">❌ Huỷ đơn</button>
        `:''}
        ${o.status==='p-g'?`
          <button class="oa" style="background:linear-gradient(135deg,#0EA5E9,#6366F1)" onclick="reorder(${idx})">🔄 Mua lại</button>
          <button class="oa oa-g" onclick="openOrderDetail(${idx})">📋 Chi tiết</button>
          <button class="oa oa-g" onclick="downloadInvoice('${o.id}')">🧾 Hoá đơn</button>
          <button class="oa oa-g" onclick="rateOrder(${idx})">⭐ Đánh giá NCC</button>
        `:''}
      </div>
    </div>`).join('') : `<div style="text-align:center;padding:40px;color:var(--text3)"><div style="font-size:40px;margin-bottom:12px">📦</div><div style="font-weight:700;font-size:14px;margin-bottom:6px">Không có đơn hàng</div><div style="font-size:12px">Chưa có đơn nào trong trạng thái này</div></div>`;
}

function confirmReceived(idx){
  const o = ORDERS[idx];
  document.getElementById('confirmModal').style.display='flex';
  document.getElementById('confirmModalContent').innerHTML=`
    <div style="text-align:center;padding:10px 0">
      <div style="font-size:48px;margin-bottom:12px">✅</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:6px">Xác nhận đã nhận hàng?</div>
      <div style="font-size:12px;color:var(--text2);line-height:1.7;margin-bottom:16px">Sau khi xác nhận, <strong style="color:var(--green)">Escrow ${o.total}</strong> sẽ tự động chuyển cho nhà cung cấp. Hành động này không thể hoàn tác.</div>
      <div style="background:rgba(0,0,0,.2);border-radius:10px;padding:12px;margin-bottom:16px;text-align:left">
        <div style="font-size:11px;font-weight:700;margin-bottom:6px;color:var(--text2)">Đơn hàng #${o.id}</div>
        ${o.items.map(i=>`<div style="font-size:11px;color:var(--text3);padding:3px 0">${i.ico} ${i.name}</div>`).join('')}
      </div>
      <div style="margin-bottom:12px">
        <div style="font-size:11px;font-weight:700;color:var(--text3);margin-bottom:6px">Hàng có đúng mô tả không?</div>
        <div style="display:flex;gap:6px;justify-content:center">
          <button class="pm on" onclick="selPM(this)">✅ Đúng như mô tả</button>
          <button class="pm" onclick="selPM(this)">⚠️ Có vấn đề nhỏ</button>
          <button class="pm" onclick="openDispute(${idx});closeConfirmModal()">❌ Sai nghiêm trọng</button>
        </div>
      </div>
      <div style="display:flex;gap:8px">
        <button style="flex:1;padding:11px;border-radius:9px;background:linear-gradient(135deg,#22C55E,#00C9A7);border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="doConfirmReceived(${idx})">✅ Xác nhận & Release Escrow</button>
        <button style="padding:11px 14px;border-radius:9px;background:transparent;border:1px solid var(--bdr2);color:var(--text2);font-size:12px;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="closeConfirmModal()">Huỷ</button>
      </div>
    </div>`;
}
function closeConfirmModal(){document.getElementById('confirmModal').style.display='none'}
function doConfirmReceived(idx){
  closeConfirmModal();
  ORDERS[idx].status='p-g';
  ORDERS[idx].statusT='Đã nhận';
  renderOrdersData(ORDERS);
  toast('🎉 Đã xác nhận! Escrow '+ORDERS[idx].total+' đã chuyển cho NCC. Cảm ơn bạn!');
}

function openOrderDetail(idx){
  const o=ORDERS[idx];
  document.getElementById('orderDetailModal').style.display='flex';
  document.getElementById('orderDetailContent').innerHTML=`
    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <div><div style="font-family:'Noto Sans Mono',monospace;font-size:13px;font-weight:700">#${o.id}</div><div style="font-size:11px;color:var(--text3)">${o.date}</div></div>
        <span class="pill ${o.status}">${o.statusT}</span>
      </div>
      <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:12px;margin-bottom:12px">
        <div style="font-weight:700;font-size:12px;margin-bottom:8px">📦 Danh sách sản phẩm</div>
        ${o.items.map(i=>`<div style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:11px"><span style="font-size:20px">${i.ico}</span><span style="flex:1;color:var(--text2)">${i.name}</span></div>`).join('')}
      </div>
      <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:12px;margin-bottom:12px">
        <div style="font-weight:700;font-size:12px;margin-bottom:8px">📍 Địa chỉ giao hàng</div>
        <div style="font-size:12px;color:var(--text2)">12 Trần Duy Hưng, P. Trung Hoà, Q. Cầu Giấy, HN<br>Người nhận: Nguyễn Văn A · 0988 766 686</div>
      </div>
      <div style="background:rgba(0,201,167,.06);border:1px solid rgba(0,201,167,.15);border-radius:10px;padding:12px;margin-bottom:12px">
        <div style="font-weight:700;font-size:12px;margin-bottom:8px;color:var(--c1)">🔒 Thông tin Escrow</div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text2);margin-bottom:4px"><span>Giá trị giữ</span><span style="font-weight:700;color:var(--c1)">${o.total}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text2);margin-bottom:4px"><span>Trạng thái</span><span>${o.status==='p-g'?'<span style="color:#22C55E;font-weight:700">Đã release ✅</span>':o.status==='p-b'?'<span style="color:#0EA5E9;font-weight:700">Đang giữ 🔒</span>':'<span style="color:#F59E0B;font-weight:700">Chờ xử lý ⏳</span>'}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text2)"><span>Bảo vệ đến</span><span>30 ngày sau nhận hàng</span></div>
      </div>
      <div style="display:flex;gap:8px">
        ${o.status==='p-b'?`<button style="flex:1;padding:10px;border-radius:9px;background:linear-gradient(135deg,#22C55E,#00C9A7);border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('orderDetailModal').style.display='none';confirmReceived(${idx})">✅ Xác nhận nhận hàng</button>`:''}
        ${o.status==='p-g'?`<button style="flex:1;padding:10px;border-radius:9px;background:linear-gradient(135deg,#0EA5E9,#6366F1);border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('orderDetailModal').style.display='none';reorder(${idx})">🔄 Mua lại</button>`:''}
        <button style="padding:10px 14px;border-radius:9px;background:transparent;border:1px solid var(--bdr2);color:var(--text2);font-size:11px;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('orderDetailModal').style.display='none'">Đóng</button>
      </div>
    </div>`;
}

function openDispute(idx){
  const o=ORDERS[idx];
  document.getElementById('disputeModal').style.display='flex';
  document.getElementById('disputeContent').innerHTML=`
    <div>
      <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.18);border-radius:10px;padding:12px;margin-bottom:14px;font-size:12px;color:var(--text2)">
        <div style="font-weight:700;color:var(--red);margin-bottom:4px">⚠️ Mở khiếu nại — Đơn #${o.id}</div>
        NexBuild sẽ giữ Escrow cho đến khi khiếu nại được giải quyết. Thời gian xử lý: 24–48h.
      </div>
      <div style="margin-bottom:12px"><label style="font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:5px">Lý do khiếu nại</label>
        <div style="display:flex;flex-direction:column;gap:6px">
          ${['Hàng không đúng mô tả','Hàng bị hỏng/thiếu','Chưa nhận được hàng','Số lượng không đủ','Chất lượng kém hơn cam kết'].map((r,i)=>`
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;padding:8px;border-radius:8px;border:1px solid var(--bdr);font-size:12px;color:var(--text2)" onclick="this.style.borderColor='var(--red)';this.querySelector('input').checked=true">
            <input type="radio" name="dReason" style="accent-color:var(--red)"> ${r}
          </label>`).join('')}
        </div>
      </div>
      <div style="margin-bottom:12px"><label style="font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:5px">Mô tả chi tiết vấn đề</label>
        <textarea style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--bdr);background:rgba(255,255,255,.05);color:var(--text);font-size:12px;font-family:'Noto Sans',sans-serif;outline:none;resize:none;height:90px" placeholder="Mô tả cụ thể vấn đề bạn gặp phải..."></textarea>
      </div>
      <div style="margin-bottom:14px"><label style="font-size:10px;font-weight:700;color:var(--text3);letter-spacing:.08em;text-transform:uppercase;display:block;margin-bottom:5px">Ảnh bằng chứng</label>
        <div style="border:1px dashed var(--bdr);border-radius:8px;padding:14px;text-align:center;cursor:pointer;color:var(--text3);font-size:12px" onclick="toast('Upload ảnh bằng chứng')">📸 Click để upload ảnh (tối đa 5 ảnh)</div>
      </div>
      <div style="display:flex;gap:8px">
        <button style="flex:1;padding:11px;border-radius:9px;background:linear-gradient(135deg,#EF4444,#F59E0B);border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('disputeModal').style.display='none';toast('⚖️ Khiếu nại đã gửi! NexBuild sẽ xem xét trong 24h. Escrow tiếp tục giữ an toàn.')">📤 Gửi khiếu nại</button>
        <button style="padding:11px 14px;border-radius:9px;background:transparent;border:1px solid var(--bdr2);color:var(--text2);font-size:12px;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('disputeModal').style.display='none'">Huỷ</button>
      </div>
    </div>`;
}

function reorder(idx){
  const o=ORDERS[idx];
  o.items.forEach(i=>addToCart(i.name));
  toast('🛒 Đã thêm '+o.items.length+' sản phẩm vào giỏ hàng · Tổng: '+o.total);
  setTimeout(()=>setTab('cart'),800);
}

function downloadInvoice(id){
  toast('📄 Đang tạo hoá đơn #'+id+' · PDF sẽ tải xuống trong giây lát');
}

function rateOrder(idx){
  document.getElementById('rateModal').style.display='flex';
  document.getElementById('rateContent').innerHTML=`
    <div style="text-align:center">
      <div style="font-size:36px;margin-bottom:10px">⭐</div>
      <div style="font-size:15px;font-weight:800;margin-bottom:4px">Đánh giá nhà cung cấp</div>
      <div style="font-size:12px;color:var(--text2);margin-bottom:16px">Đơn hàng #${ORDERS[idx].id}</div>
      <div style="display:flex;gap:6px;justify-content:center;margin-bottom:14px" id="starRow">
        ${[1,2,3,4,5].map(i=>`<button onclick="setStars(${i})" id="star${i}" style="font-size:28px;background:transparent;border:none;cursor:pointer;transition:transform .15s;color:rgba(255,255,255,.2)">★</button>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;text-align:left">
        ${['Đúng mô tả','Giao hàng đúng hạn','Đóng gói cẩn thận','Hỗ trợ tốt'].map(r=>`
        <label style="display:flex;align-items:center;gap:6px;font-size:11px;color:var(--text2);cursor:pointer"><input type="checkbox" style="accent-color:var(--amb)"> ${r}</label>`).join('')}
      </div>
      <textarea style="width:100%;padding:9px;border-radius:8px;border:1px solid var(--bdr);background:rgba(255,255,255,.05);color:var(--text);font-size:12px;font-family:'Noto Sans',sans-serif;outline:none;resize:none;height:72px;margin-bottom:12px" placeholder="Nhận xét của bạn về NCC..."></textarea>
      <button style="width:100%;padding:10px;border-radius:9px;background:linear-gradient(135deg,#F59E0B,#FB923C);border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('rateModal').style.display='none';toast('⭐ Cảm ơn đánh giá! Đánh giá của bạn giúp cộng đồng mua hàng tốt hơn.')">Gửi đánh giá</button>
    </div>`;
}
function setStars(n){
  for(let i=1;i<=5;i++){
    const s=document.getElementById('star'+i);
    if(s) s.style.color=i<=n?'#F59E0B':'rgba(255,255,255,.2)';
  }
}

function openChat(who){
  document.getElementById('chatModal').style.display='flex';
  document.getElementById('chatContent').innerHTML=`
    <div style="display:flex;flex-direction:column;height:100%">
      <div style="display:flex;align-items:center;gap:9px;padding:12px;background:rgba(255,255,255,.04);border-radius:10px;margin-bottom:12px">
        <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#00C9A7,#0EA5E9);display:flex;align-items:center;justify-content:center;font-size:18px">🏭</div>
        <div><div style="font-weight:700;font-size:13px">${who==='NCC'?'Nhà cung cấp':'Hỗ trợ NexBuild'}</div><div style="font-size:10px;color:var(--green)">● Online</div></div>
      </div>
      <div style="flex:1;display:flex;flex-direction:column;gap:8px;overflow-y:auto;margin-bottom:12px;min-height:200px">
        <div style="background:rgba(255,255,255,.06);border-radius:10px 10px 10px 2px;padding:9px 12px;max-width:80%;font-size:12px;color:var(--text2)">Xin chào! Tôi có thể giúp gì cho bạn?</div>
        <div style="background:linear-gradient(135deg,rgba(0,201,167,.15),rgba(14,165,233,.1));border-radius:10px 10px 2px 10px;padding:9px 12px;max-width:80%;align-self:flex-end;font-size:12px">Đơn hàng của tôi giao chậm hơn dự kiến</div>
        <div style="background:rgba(255,255,255,.06);border-radius:10px 10px 10px 2px;padding:9px 12px;max-width:80%;font-size:12px;color:var(--text2)">Xin lỗi vì sự chậm trễ. Hàng đang trên đường giao, dự kiến ngày mai 8-12h. Chúng tôi sẽ cập nhật ngay khi có thay đổi.</div>
      </div>
      <div style="display:flex;gap:6px">
        <input id="chatInput" style="flex:1;padding:9px 12px;border-radius:8px;border:1px solid var(--bdr);background:rgba(255,255,255,.05);color:var(--text);font-size:12px;font-family:'Noto Sans',sans-serif;outline:none" placeholder="Nhập tin nhắn..." onkeydown="if(event.key==='Enter')sendChat()">
        <button onclick="sendChat()" style="padding:9px 16px;border-radius:8px;background:linear-gradient(135deg,#00C9A7,#0EA5E9);border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif">Gửi</button>
      </div>
    </div>`;
}
function sendChat(){
  const inp=document.getElementById('chatInput');
  if(!inp||!inp.value.trim())return;
  const v=inp.value;
  inp.value='';
  toast('Tin nhắn đã gửi: "'+v.substring(0,30)+'"');
}

// ── NAVIGATION ──
const ALL_TABS = ['mat','work','proj','sup','forum','cart','orders'];
const NAV_CLASS = {'mat':'nav-mat','work':'nav-work','proj':'nav-proj','sup':'nav-sup','forum':'nav-forum','cart':'nav-cart','orders':'nav-orders'};
function setTab(id){
  ALL_TABS.forEach(t=>{
    document.getElementById('pg-'+t).classList.remove('on');
    const navEl = document.getElementById('nav-'+t);
    if(navEl) navEl.classList.remove('on');
  });
  document.getElementById('pg-'+id).classList.add('on');
  const navEl = document.getElementById('nav-'+id);
  if(navEl) navEl.classList.add('on');
}

function goBack(){if(window.history.length>1)window.history.back();else window.location.href='nexbuild-hub.html'}

// ── THEME ──
let isDark=true;
function toggleTheme(){isDark=!isDark;document.documentElement.setAttribute('data-theme',isDark?'dark':'light');document.getElementById('themeBtn').textContent=isDark?'☀️':'🌙'}

// ── TOAST ──
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.style.transform='translateX(-50%) translateY(0)';clearTimeout(t._t);t._t=setTimeout(()=>{t.style.transform='translateX(-50%) translateY(80px)'},3200)}

// ── HELPERS ──
function activeCat(el){document.querySelectorAll('.ci').forEach(c=>c.classList.remove('on'));el.classList.add('on')}
function setMatCat(cat,btn){document.querySelectorAll('.tb-mat').forEach(b=>b.classList.remove('on'));btn.classList.add('on')}
function setWorkTab(cat,btn){document.querySelectorAll('.tb-work').forEach(b=>b.classList.remove('on'));btn.classList.add('on')}
function selPM(btn){btn.closest('div').querySelectorAll('.pm').forEach(b=>b.classList.remove('on'));btn.classList.add('on')}

// CART
let cartQtys = CART_DATA.map(i=>i.qty);
function changeQty(idx,delta){
  cartQtys[idx]=Math.max(1,cartQtys[idx]+delta);
  document.getElementById('qty-'+idx).textContent=cartQtys[idx];
  const total=cartQtys[idx]*CART_DATA[idx].unitPrice;
  document.getElementById('total-'+idx).textContent=total.toLocaleString('vi')+'đ';
}
function removeItem(idx){toast('Đã xoá sản phẩm khỏi giỏ hàng');CART_DATA.splice(idx,1);cartQtys.splice(idx,1);renderCart();updateCartCount()}
function addToCart(name){
  // Tìm sản phẩm trong PRODUCTS
  const prod = PRODUCTS.find(p => p.name === name);
  // Kiểm tra đã có trong giỏ chưa
  const existing = CART_DATA.find(c => c.name === (prod ? prod.name : name));
  if(existing){
    existing.qty += 1;
    existing.total = existing.qty * existing.unitPrice;
    existing.totalF = existing.total.toLocaleString('vi') + 'đ';
  } else {
    const price = prod ? parseInt(prod.price.replace(/,/g,'')) : 0;
    CART_DATA.push({
      ico: prod ? prod.ico : '📦',
      bg: prod ? prod.bg : 'rgba(0,201,167,.1)',
      name: prod ? prod.name : name,
      sup: prod ? prod.sup : 'NexMarket',
      qty: 1,
      unit: prod ? prod.unit.replace('/','') : 'cái',
      unitPrice: price,
      total: price,
      totalF: price > 0 ? price.toLocaleString('vi')+'đ' : 'Liên hệ'
    });
  }
  updateCartCount();
  renderCart();
  // Toast animation
  const toast_el = document.getElementById('toast');
  toast_el.textContent = '✓ Đã thêm vào giỏ: ' + name.substring(0,30) + (name.length>30?'...':'');
  toast_el.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast_el._t);
  toast_el._t = setTimeout(()=>{toast_el.style.transform='translateX(-50%) translateY(80px)'},2500);
}
function updateCartCount(){
  const c=CART_DATA.reduce((sum,i)=>sum+i.qty,0);
  const el=document.getElementById('cartCount');
  const sb=document.getElementById('cartBadgeSb');
  if(el) el.textContent=c;
  if(sb) sb.textContent=c;
  // Update cart total
  const total=CART_DATA.reduce((sum,i)=>sum+i.total,0);
  const totalEl=document.getElementById('cartTotal');
  if(totalEl) totalEl.textContent=total.toLocaleString('vi')+'đ';
}

// CHECKOUT
function openCheckout(){document.getElementById('checkoutModal').classList.add('open')}
function closeCheckout(){document.getElementById('checkoutModal').classList.remove('open')}
let checkoutStep=1;
function nextCheckoutStep(){
  checkoutStep++;
  if(checkoutStep===2){
    document.getElementById('checkoutTitle').textContent='📱 Xác minh OTP';
    document.getElementById('checkoutBody').innerHTML=`
      <div class="otp-box" style="display:block;text-align:center;padding:20px 0">
        <div style="font-size:24px;margin-bottom:12px">📱</div>
        <div class="otp-title">Nhập mã OTP</div>
        <div style="font-size:12px;color:var(--text2);margin-bottom:16px">Mã 6 số đã gửi đến <strong>0988 xxx xxx</strong><br>Hiệu lực trong 5:00</div>
        <div style="display:flex;gap:8px;justify-content:center;margin-bottom:14px">
          ${[1,2,3,4,5,6].map(i=>`<input class="otp-inp" maxlength="1" id="otp${i}" onkeyup="moveOtp(${i},this)">`).join('')}
        </div>
        <div style="font-size:11px;color:var(--text3);margin-bottom:20px">Không nhận được mã? <button onclick="toast('Đã gửi lại OTP')" style="color:var(--c1);background:transparent;border:none;cursor:pointer;font-family:'Noto Sans',sans-serif;font-weight:700">Gửi lại (30s)</button></div>
        <button style="width:100%;padding:11px;border-radius:9px;background:linear-gradient(135deg,#00C9A7,#0EA5E9);border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="confirmPayment()">✅ Xác nhận thanh toán</button>
      </div>`;
    setTimeout(()=>{document.getElementById('otp1').focus()},100);
  }
}
function moveOtp(idx,el){if(el.value&&idx<6)document.getElementById('otp'+(idx+1)).focus()}
function confirmPayment(){
  closeCheckout();
  checkoutStep=1;
  toast('🎉 Thanh toán thành công! Escrow đã kích hoạt · Mã đơn: NXM-2025-0892');
  setTimeout(()=>setTab('orders'),1000);
}

// BOOKING
let bookingStep=1;
function openBooking(name,color){
  document.getElementById('bookingWorkerName').textContent=name;
  document.getElementById('bookingModal').classList.add('open');
  bookingStep=1;
  showBookingStep(1);
  // Render calendar
  const d=new Date();
  let cal='';
  for(let i=0;i<10;i++){
    const dt=new Date(d);dt.setDate(d.getDate()+i);
    const day=['CN','T2','T3','T4','T5','T6','T7'][dt.getDay()];
    cal+=`<button class="pm ${i===1?'on':''}" onclick="selPM(this)" style="min-width:50px">${day}<br><strong>${dt.getDate()}</strong></button>`;
  }
  document.getElementById('calGrid').innerHTML=cal;
}
function closeBooking(){document.getElementById('bookingModal').classList.remove('open');bookingStep=1}
function showBookingStep(s){
  [1,2,3].forEach(i=>{
    document.getElementById('bookingStep'+i).style.display=i===s?'block':'none';
    const dot=document.getElementById('bk'+i);
    if(i<s){dot.className='bs-dot done';dot.textContent='✓'}
    else if(i===s){dot.className='bs-dot act';dot.textContent=i}
    else{dot.className='bs-dot';dot.textContent=i}
  });
}
function nextBookingStep(){showBookingStep(++bookingStep)}
function finishBooking(){closeBooking();toast('✅ Đặt lịch thành công! Escrow 1,458,000đ đã kích hoạt. Thợ sẽ liên hệ trong 30 phút.')}

// BID
function openBidModal(){document.getElementById('bidModal').classList.add('open')}
function closeBid(){document.getElementById('bidModal').classList.remove('open')}

// INIT
renderProducts(PRODUCTS);
renderWorkers();
renderProjects();
renderSuppliers();
renderForum();
renderCart();
renderOrdersData(ORDERS);


// ══════════════════════════════════════════
// FULL INTERACTIVE LAYER
// ══════════════════════════════════════════

// ── SEARCH ──
document.getElementById('globalSearch').addEventListener('keyup', function(e){
  const q = this.value.toLowerCase().trim();
  if(!q) return;
  // Search products
  const filtered = PRODUCTS.filter(p=>
    p.name.toLowerCase().includes(q)||
    p.sup.toLowerCase().includes(q)||
    p.badges.join('').includes(q)
  );
  if(document.getElementById('pg-mat').classList.contains('on')){
    renderProducts(filtered.length ? filtered : PRODUCTS);
    if(!filtered.length) toast('Không tìm thấy "'+q+'" trong vật liệu');
  }
  if(e.key==='Enter'){
    if(q.includes('thợ')||q.includes('worker')) setTab('work');
    else if(q.includes('công trình')||q.includes('thầu')) setTab('proj');
    else if(q.includes('cung cấp')||q.includes('nhà máy')) setTab('sup');
  }
});

// ── CATEGORY FILTER (Vật liệu) ──
function filterByCategory(keyword){
  const filtered = keyword==='all' ? PRODUCTS : PRODUCTS.filter(p=>{
    const map={cement:['xi măng','cement','pcb'],steel:['thép','steel'],
      wood:['gỗ','mdf','hdf','wood'],glass:['kính','glass'],elec:['điện','cadivi'],
      plumb:['nước','sen','toto','plumb'],paint:['sơn','dulux','paint'],mach:['máy','mach']};
    return (map[keyword]||[]).some(k=>p.name.toLowerCase().includes(k)||p.sup.toLowerCase().includes(k));
  });
  renderProducts(filtered.length ? filtered : PRODUCTS);
  if(!filtered.length) toast('Không có sản phẩm trong danh mục này');
}

// Override setMatCat to also filter
function setMatCat(cat, btn){
  document.querySelectorAll('.tb-mat').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  filterByCategory(cat);
  // also update sidebar category
  document.querySelectorAll('.ci').forEach(c=>c.classList.remove('on'));
  document.querySelector('.ci:first-child').classList.add('on');
}

// Category list item click
function activeCat(el){
  document.querySelectorAll('.ci').forEach(c=>c.classList.remove('on'));
  el.classList.add('on');
  const txt = el.textContent.toLowerCase();
  let key='all';
  if(txt.includes('xi măng')||txt.includes('gạch')) key='cement';
  else if(txt.includes('thép')) key='steel';
  else if(txt.includes('gỗ')) key='wood';
  else if(txt.includes('kính')) key='glass';
  else if(txt.includes('điện')) key='elec';
  else if(txt.includes('vệ sinh')||txt.includes('nước')) key='plumb';
  else if(txt.includes('sơn')) key='paint';
  else if(txt.includes('máy')) key='mach';
  filterByCategory(key);
}

// ── PRODUCT DETAIL PANEL ──
function openProductDetail(idx){
  const p = PRODUCTS[idx];
  if(!p) return;
  document.getElementById('pdPanel').innerHTML = `
    <div style="padding:18px;display:flex;flex-direction:column;height:100%">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div style="font-weight:800;font-size:15px">Chi tiết sản phẩm</div>
        <button onclick="closePdPanel()" style="width:28px;height:28px;border-radius:7px;border:1px solid var(--bdr);background:transparent;color:var(--text2);cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center">×</button>
      </div>
      <div style="height:140px;background:${p.bg};border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:60px;margin-bottom:14px">${p.ico}</div>
      <div style="font-size:11px;color:var(--text3);margin-bottom:4px">${p.sup} · ⭐${p.rating}</div>
      <div style="font-weight:800;font-size:15px;margin-bottom:8px;line-height:1.3">${p.name}</div>
      <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:6px">
        <span style="font-family:'Noto Sans Mono',monospace;font-size:22px;font-weight:800;color:${p.c}">${p.price}</span>
        ${p.old?`<span style="font-size:12px;color:var(--text3);text-decoration:line-through">${p.old}</span>`:''}
        <span style="font-size:11px;color:var(--text3)">${p.unit}</span>
      </div>
      <div style="font-size:11px;color:var(--text3);margin-bottom:12px">${p.info}</div>
      <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:12px;margin-bottom:12px;font-size:11px;line-height:1.8;color:var(--text2)">
        <div style="font-weight:700;margin-bottom:6px;color:var(--text)">📋 Thông số kỹ thuật</div>
        <div>Xuất xứ: Việt Nam</div>
        <div>Bảo hành: 12 tháng</div>
        <div>Tiêu chuẩn: TCVN 2682:2009</div>
        <div>Đóng gói: ${p.info.split('·')[0].trim()}</div>
        <div>Giao hàng: ${p.info.includes('24h')?'24h':p.info.includes('48h')?'48h':'Theo lịch'}</div>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:8px">
        <select style="flex:1;padding:8px;border-radius:8px;border:1px solid var(--bdr);background:var(--sur);color:var(--text);font-size:11px;font-family:'Noto Sans',sans-serif;outline:none">
          <option>Số lượng: 1</option><option>5</option><option>10</option><option>20</option><option>50</option><option>100</option>
        </select>
        <select style="flex:1;padding:8px;border-radius:8px;border:1px solid var(--bdr);background:var(--sur);color:var(--text);font-size:11px;font-family:'Noto Sans',sans-serif;outline:none">
          <option>Giao nhanh 24h</option><option>Giao tiêu chuẩn 3-5 ngày</option><option>Hẹn lịch</option>
        </select>
      </div>
      <button style="width:100%;padding:10px;border-radius:9px;background:${p.ctaBg};border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif;margin-bottom:6px" onclick="addToCart('${p.name.replace(/'/g,"\\'")}');closePdPanel()">🛒 Thêm vào giỏ hàng</button>
      <button style="width:100%;padding:10px;border-radius:9px;background:transparent;border:1px solid var(--bdr2);color:var(--text);font-size:12px;font-weight:600;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="toast('Mở chat với ${p.sup}')">💬 Chat với nhà cung cấp</button>
    </div>`;
  document.getElementById('pdPanel').style.display = 'flex';
  document.getElementById('pdPanel').style.flexDirection = 'column';
  // Resize product grid
  document.querySelector('.pc-two').style.gridTemplateColumns = '190px 1fr 280px';
}
function closePdPanel(){
  document.getElementById('pdPanel').style.display = 'none';
  document.querySelector('.pc-two').style.gridTemplateColumns = '190px 1fr';
}

// ── WORKER FILTER ──
function setWorkTab(cat, btn){
  document.querySelectorAll('.tb-work').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  const filtered = cat==='all' ? WORKERS : WORKERS.filter(w=>{
    const map={mason:['hồ'],elec:['điện'],plumb:['nước'],wood:['mộc'],paint:['sơn'],arch:['kts','kiến trúc'],contractor:['thầu']};
    return (map[cat]||[]).some(k=>w.loc.toLowerCase().includes(k)||w.desc.toLowerCase().includes(k));
  });
  renderWorkers(filtered.length ? filtered : [{...WORKERS[0],name:'Không tìm thấy thợ trong danh mục này. Thử tìm kiếm toàn bộ.',desc:'Đang cập nhật thêm thợ.',tags:[],btnBg:'var(--bdr)',av:'🔍',avBg:'var(--bg3)',pricec:'var(--text3)',price:'—',online:false,status:'Không có thợ',statusC:'var(--text3)',rating:'',ratingNum:'',loc:'',km:''}]);
}

// Override renderWorkers to accept data
const _renderWorkersOrig = renderWorkers;
function renderWorkers(data){
  const workers = data || WORKERS;
  document.getElementById('workerGrid').innerHTML = workers.map(w=>`
    <div class="wcard">
      <div class="wc-top">
        <div class="wc-av" style="background:${w.avBg}">${w.av}<div class="wc-online ${w.online?'on-green':'on-yellow'}"></div></div>
        <div class="wc-info">
          <div class="wc-name">${w.name}</div>
          <div class="wc-loc">${w.loc} ${w.km&&w.km!=='—'?`· ${w.km}`:''}</div>
          <div class="wc-status" style="color:${w.statusC||'var(--text3)'}">${w.status}</div>
        </div>
        <div style="text-align:right">
          <div class="wc-price" style="color:${w.pricec}">${w.price}${w.price&&w.price!=='Theo DA'&&w.price!=='—'?'<span style="font-size:10px;color:var(--text3)">/ngày</span>':''}</div>
          <div class="wc-rating" style="color:var(--amb)">${w.rating||''}<span style="color:var(--text3);font-weight:400"> ${w.ratingNum||''}</span></div>
        </div>
      </div>
      <div class="wc-desc">${w.desc}</div>
      <div class="wc-tags">${(w.tags||[]).map(t=>`<span class="wtag" style="background:${t.c};border-color:${t.bc};color:${t.tc}">${t.t}</span>`).join('')}</div>
      <div class="wc-acts">
        <button class="wa" style="background:${w.btnBg||'var(--bdr)'}" onclick="openBooking('${(w.name||'').replace(/'/g,"\\'")}','${w.pricec||'#fff'}')">Đặt lịch ngay</button>
        <button class="wa-g wa" onclick="showWorkerProfile('${(w.name||'').replace(/'/g,"\\'")}')">Xem hồ sơ</button>
      </div>
    </div>`).join('');
}

// Worker profile panel
function showWorkerProfile(name){
  const w = WORKERS.find(x=>x.name===name);
  if(!w){toast('Xem hồ sơ: '+name);return;}
  document.getElementById('workerProfileModal').style.display='flex';
  document.getElementById('workerProfileContent').innerHTML=`
    <div style="text-align:center;padding:20px 0 14px">
      <div style="width:72px;height:72px;border-radius:50%;background:${w.avBg};display:flex;align-items:center;justify-content:center;font-size:32px;margin:0 auto 10px">${w.av}</div>
      <div style="font-weight:900;font-size:17px">${w.name}</div>
      <div style="font-size:11px;color:var(--text3);margin-top:3px">${w.loc}</div>
      <div style="font-size:13px;font-weight:800;color:${w.pricec};margin-top:6px">${w.price}${w.price!=='Theo DA'?'/ngày':''}</div>
      <div style="font-size:12px;color:var(--amb);font-weight:700;margin-top:3px">${w.rating} ${w.ratingNum}</div>
    </div>
    <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:12px;margin-bottom:12px">
      <div style="font-weight:700;font-size:12px;margin-bottom:6px">Giới thiệu</div>
      <div style="font-size:12px;color:var(--text2);line-height:1.7">${w.desc}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px">
      <div style="text-align:center;padding:10px;background:rgba(255,255,255,.04);border-radius:9px"><div style="font-family:'Noto Sans Mono',monospace;font-size:18px;font-weight:800;color:var(--c1)">234</div><div style="font-size:9px;color:var(--text3)">Dự án</div></div>
      <div style="text-align:center;padding:10px;background:rgba(255,255,255,.04);border-radius:9px"><div style="font-family:'Noto Sans Mono',monospace;font-size:18px;font-weight:800;color:var(--amb)">8</div><div style="font-size:9px;color:var(--text3)">Năm KN</div></div>
      <div style="text-align:center;padding:10px;background:rgba(255,255,255,.04);border-radius:9px"><div style="font-family:'Noto Sans Mono',monospace;font-size:18px;font-weight:800;color:var(--green)">98%</div><div style="font-size:9px;color:var(--text3)">Hoàn thành</div></div>
    </div>
    <div style="margin-bottom:12px">
      <div style="font-weight:700;font-size:12px;margin-bottom:8px">Chứng chỉ & Badges</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">${(w.tags||[]).map(t=>`<span style="padding:4px 10px;border-radius:8px;font-size:10px;font-weight:700;background:${t.c};border:1px solid ${t.bc};color:${t.tc}">${t.t}</span>`).join('')}</div>
    </div>
    <div style="margin-bottom:12px">
      <div style="font-weight:700;font-size:12px;margin-bottom:8px">Đánh giá gần đây</div>
      ${['Thợ làm rất kỹ, đúng hạn. Sẽ book lại lần sau!','Chất lượng 5 sao, sạch sẽ và chuyên nghiệp','Đúng như mô tả, giá hợp lý'].map((r,i)=>`
      <div style="padding:9px;background:rgba(255,255,255,.04);border-radius:8px;font-size:11px;color:var(--text2);margin-bottom:6px">
        <div style="color:var(--amb);font-weight:700;margin-bottom:3px">⭐⭐⭐⭐⭐</div>${r}
      </div>`).join('')}
    </div>
    <button style="width:100%;padding:11px;border-radius:10px;background:${w.btnBg};border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('workerProfileModal').style.display='none';openBooking('${w.name.replace(/'/g,"\\'")}','${w.pricec}')">Đặt lịch ngay →</button>`;
}

// ── PROJECT FILTER ──
function filterProjects(type){
  const map={house:'nhà phố',office:'văn phòng',villa:'biệt thự',shop:'shophouse',industrial:'công nghiệp'};
  const filtered = type==='all' ? PROJECTS : PROJECTS.filter(p=>p.type.toLowerCase().includes(map[type]||type));
  const el = document.getElementById('projectList');
  el.innerHTML = (filtered.length?filtered:PROJECTS).map(p=>`
    <div class="pjcard">
      <div class="pjc-top">
        <div class="pjc-info">
          <div class="pjc-header">
            <span class="pill ${p.typeC}">${p.type}</span>
            <span style="font-size:10px;color:var(--text3)">${p.time}</span>
            <span class="pill ${p.status}">${p.statusT}</span>
          </div>
          <div class="pjc-name">${p.name}</div>
          <div class="pills">${p.pills.map(pl=>`<span class="pill ${pl.c}">${pl.t}</span>`).join('')}</div>
          <div class="pjc-desc">${p.desc}</div>
        </div>
        <div class="pjc-acts">
          <button class="pja" style="background:${p.btnBg}" onclick="openBidModal('${p.name.replace(/'/g,"\\'")}')">Ứng tuyển ngay</button>
          <button class="pja pja-g" onclick="showProjectDetail('${p.name.replace(/'/g,"\\'")}')">Xem chi tiết</button>
          <div class="pjc-views">👁️ ${p.views} người đang xem</div>
        </div>
      </div>
    </div>`).join('');
}

function showProjectDetail(name){
  const p = PROJECTS.find(x=>x.name===name);
  if(!p){toast('Xem chi tiết');return;}
  document.getElementById('projDetailModal').style.display='flex';
  document.getElementById('projDetailContent').innerHTML=`
    <div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">
        <span class="pill ${p.typeC}">${p.type}</span>
        <span class="pill ${p.status}">${p.statusT}</span>
      </div>
      <div style="font-size:16px;font-weight:900;margin-bottom:8px;line-height:1.3">${p.name}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px">${p.pills.map(pl=>`<span class="pill ${pl.c}">${pl.t}</span>`).join('')}</div>
      <div style="font-size:13px;color:var(--text2);line-height:1.75;margin-bottom:14px">${p.desc}</div>
      <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:14px;margin-bottom:14px">
        <div style="font-weight:700;font-size:12px;margin-bottom:8px">📋 Yêu cầu nhà thầu</div>
        <div style="font-size:12px;color:var(--text2);display:flex;flex-direction:column;gap:5px">
          <div>✓ Kinh nghiệm ≥ 5 năm với công trình tương đương</div>
          <div>✓ Portfolio ít nhất 10 dự án hoàn thành</div>
          <div>✓ Đội thợ đủ nhân lực, không outsource toàn bộ</div>
          <div>✓ Bảo hành thi công tối thiểu 12 tháng</div>
          <div>✓ Thanh toán qua Escrow NexBuild</div>
        </div>
      </div>
      <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:14px;margin-bottom:14px">
        <div style="font-weight:700;font-size:12px;margin-bottom:8px">⏱️ Timeline đấu thầu</div>
        <div style="font-size:11px;color:var(--text2);display:flex;flex-direction:column;gap:5px">
          <div>• Hạn nộp hồ sơ: <strong style="color:var(--text)">5 ngày nữa</strong></div>
          <div>• Chủ đầu tư xem xét: 3 ngày sau hạn</div>
          <div>• Phỏng vấn nhà thầu shortlist: 2 ngày tiếp</div>
          <div>• Chốt hợp đồng và kích hoạt Escrow</div>
        </div>
      </div>
      <div style="display:flex;gap:8px">
        <button style="flex:1;padding:11px;border-radius:9px;background:${p.btnBg};border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('projDetailModal').style.display='none';openBidModal('${p.name.replace(/'/g,"\\'")}')">📝 Nộp hồ sơ thầu</button>
        <button style="padding:11px 14px;border-radius:9px;background:transparent;border:1px solid var(--bdr2);color:var(--text2);font-size:12px;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('projDetailModal').style.display='none'">Đóng</button>
      </div>
    </div>`;
}

// Override openBidModal to accept project name
function openBidModal(projName){
  document.getElementById('bidModal').classList.add('open');
  if(projName) document.querySelector('#bidModal .modal-title').textContent='📝 Nộp hồ sơ thầu — '+projName.substring(0,40)+'...';
}
function closeBid(){document.getElementById('bidModal').classList.remove('open')}

// ── FORUM INTERACTIONS ──
function votePost(btn, delta){
  const voteEl = btn.closest('.fpost').querySelector('.fp-vote');
  const cur = parseInt(voteEl.textContent.replace(/[^\d]/g,''));
  voteEl.textContent = '▲ '+(cur+delta);
  btn.style.color=delta>0?'var(--gold)':'var(--text3)';
  toast(delta>0?'Đã upvote bài viết này!':'Đã bỏ upvote');
}
function openWritePost(){
  document.getElementById('writePostModal').style.display='flex';
}
function closeWritePost(){document.getElementById('writePostModal').style.display='none'}

// ── SUPPLIER STORE ──
function openSupplierStore(name){
  const s = SUPPLIERS.find(x=>x.name===name);
  if(!s){toast('Xem gian hàng: '+name);return;}
  document.getElementById('supplierModal').style.display='flex';
  document.getElementById('supplierModalContent').innerHTML=`
    <div>
      <div style="height:80px;background:${s.bg};border-radius:12px;display:flex;align-items:center;gap:14px;padding:0 18px;margin-bottom:16px">
        <div style="font-size:36px">${s.ico}</div>
        <div><div style="font-weight:800;font-size:18px;color:#fff">${s.name}</div><div style="font-size:10px;color:rgba(255,255,255,.7)">${s.verified}</div></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px">
        <div style="text-align:center;padding:12px;background:rgba(255,255,255,.04);border-radius:10px"><div style="font-family:'Noto Sans Mono',monospace;font-size:20px;font-weight:800;color:var(--c1)">${s.prods}</div><div style="font-size:10px;color:var(--text3)">Sản phẩm</div></div>
        <div style="text-align:center;padding:12px;background:rgba(255,255,255,.04);border-radius:10px"><div style="font-family:'Noto Sans Mono',monospace;font-size:20px;font-weight:800;color:var(--amb)">⭐${s.rating}</div><div style="font-size:10px;color:var(--text3)">Rating</div></div>
        <div style="text-align:center;padding:12px;background:rgba(255,255,255,.04);border-radius:10px"><div style="font-family:'Noto Sans Mono',monospace;font-size:20px;font-weight:800;color:var(--green)">${s.delivery}</div><div style="font-size:10px;color:var(--text3)">Giao hàng</div></div>
      </div>
      <div style="margin-bottom:14px">
        <div style="font-weight:700;font-size:12px;margin-bottom:8px">Danh mục sản phẩm</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">${s.cats.map(c=>`<span class="pill ${c.c}">${c.t}</span>`).join('')}</div>
      </div>
      <div style="margin-bottom:14px">
        <div style="font-weight:700;font-size:12px;margin-bottom:8px">Sản phẩm nổi bật từ ${s.name}</div>
        ${PRODUCTS.slice(0,3).map(p=>`
        <div style="display:flex;align-items:center;gap:10px;padding:9px;background:rgba(255,255,255,.04);border-radius:8px;margin-bottom:6px;cursor:pointer" onclick="toast('Xem chi tiết: ${p.name}')">
          <div style="width:36px;height:36px;border-radius:8px;background:${p.bg};display:flex;align-items:center;justify-content:center;font-size:18px">${p.ico}</div>
          <div style="flex:1"><div style="font-size:12px;font-weight:600">${p.name}</div><div style="font-size:10px;color:var(--text3)">${p.info}</div></div>
          <div style="font-family:'Noto Sans Mono',monospace;font-size:13px;font-weight:700;color:${p.c}">${p.price}</div>
        </div>`).join('')}
      </div>
      <div style="display:flex;gap:8px">
        <button style="flex:1;padding:10px;border-radius:9px;background:linear-gradient(135deg,#00C9A7,#0EA5E9);border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="toast('Mở chat với ${s.name}')">💬 Chat với nhà cung cấp</button>
        <button style="padding:10px 14px;border-radius:9px;background:transparent;border:1px solid var(--bdr2);color:var(--text2);font-size:11px;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="document.getElementById('supplierModal').style.display='none'">Đóng</button>
      </div>
    </div>`;
}

// Re-render suppliers with working buttons
function renderSuppliers(){
  document.getElementById('supplierGrid').innerHTML = SUPPLIERS.map(s=>`
    <div class="scard">
      <div class="sc-banner" style="background:${s.bg}">
        <div class="sc-ico">${s.ico}</div>
        <div><div class="sc-bname">${s.name}</div><div class="sc-verified">${s.verified}</div></div>
      </div>
      <div class="sc-body">
        <div class="sc-cats">${s.cats.map(c=>`<span class="pill ${c.c}">${c.t}</span>`).join('')}</div>
        <div class="sc-meta">
          <div class="sc-m"><div class="sc-mv" style="color:var(--c1)">${s.prods}</div><div class="sc-ml">SP</div></div>
          <div class="sc-m"><div class="sc-mv" style="color:var(--amb)">⭐${s.rating}</div><div class="sc-ml">Rating</div></div>
          <div class="sc-m"><div class="sc-mv" style="color:var(--green)">${s.delivery}</div><div class="sc-ml">Giao</div></div>
        </div>
        <button class="sc-act" style="background:${s.actBg}" onclick="openSupplierStore('${s.name}')">Xem gian hàng →</button>
      </div>
    </div>`).join('');
}

// Re-render forum with working vote buttons
function renderForum(){
  document.getElementById('forumList').innerHTML = FORUM_POSTS.map((p,idx)=>`
    <div class="fpost">
      <div class="fp-top">
        <div class="fp-av" style="background:${p.avBg}">${p.av}</div>
        <div class="fp-meta"><div class="fp-name">${p.name}</div><div class="fp-role">${p.role}</div></div>
        <div class="fp-vote" style="color:var(--amb)" id="vote-${idx}">▲ ${p.votes}</div>
      </div>
      <div class="fp-title" style="cursor:pointer" onclick="openPostDetail(${idx})">${p.title}</div>
      <div class="fp-excerpt" onclick="openPostDetail(${idx})" style="cursor:pointer">${p.excerpt}</div>
      <div class="fp-footer">
        <div style="display:flex;gap:4px">${p.tags.map(t=>`<span class="pill ${t.c}">${t.t}</span>`).join('')}</div>
        <button onclick="votePost(this,1)" style="background:transparent;border:1px solid var(--bdr);border-radius:6px;color:var(--text2);padding:2px 8px;cursor:pointer;font-size:11px;font-family:'Noto Sans',sans-serif">▲ Upvote</button>
        <button onclick="openPostDetail(${idx})" style="background:transparent;border:none;color:var(--c1);cursor:pointer;font-size:11px;font-weight:600;font-family:'Noto Sans',sans-serif">💬 ${p.comments} bình luận</button>
        <span>${p.time}</span>
      </div>
    </div>`).join('');
  document.getElementById('topContrib').innerHTML = TOP_CONTRIBS.map(t=>`
    <div class="tc-item">
      <div class="tc-av" style="background:${t.bg}">${t.medal}</div>
      <div style="flex:1"><div class="tc-name">${t.name}</div><div style="font-size:9px;color:var(--text3)">${t.posts} bài · ${t.upvotes} upvotes</div></div>
      <div class="tc-pts">${t.pts}</div>
    </div>`).join('');
}

function openPostDetail(idx){
  const p = FORUM_POSTS[idx];
  document.getElementById('postDetailModal').style.display='flex';
  document.getElementById('postDetailContent').innerHTML=`
    <div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">${p.tags.map(t=>`<span class="pill ${t.c}">${t.t}</span>`).join('')}</div>
      <div style="font-size:16px;font-weight:900;margin-bottom:8px;line-height:1.3">${p.title}</div>
      <div style="display:flex;align-items:center;gap:9px;margin-bottom:14px">
        <div style="width:36px;height:36px;border-radius:50%;background:${p.avBg};display:flex;align-items:center;justify-content:center;font-size:16px">${p.av}</div>
        <div><div style="font-weight:700;font-size:12px">${p.name}</div><div style="font-size:10px;color:var(--text3)">${p.role} · ${p.time}</div></div>
        <div style="margin-left:auto;font-size:12px;font-weight:700;color:var(--amb)">▲ ${p.votes} upvotes</div>
      </div>
      <div style="font-size:13px;color:var(--text2);line-height:1.8;margin-bottom:16px">${p.excerpt}<br><br>
        <em style="color:var(--text3);font-size:11px">[Nội dung đầy đủ hiển thị khi đăng nhập · Bài viết ${p.comments > 50 ? 'viral' : 'phổ biến'} — ${p.comments} bình luận]</em>
      </div>
      <div style="background:rgba(255,255,255,.04);border-radius:10px;padding:12px;margin-bottom:14px">
        <div style="font-weight:700;font-size:12px;margin-bottom:8px">💬 Bình luận nổi bật (${p.comments})</div>
        ${['Cảm ơn chia sẻ! Tôi đã áp dụng và tiết kiệm được 3 ngày công.','Có thể cho xem chi tiết hơn về vật liệu không anh?','Rất hữu ích, bookmark lại đọc sau.'].map(c=>`
        <div style="padding:8px;border-bottom:1px solid rgba(255,255,255,.04);font-size:11px;color:var(--text2)">${c}</div>`).join('')}
      </div>
      <div style="display:flex;gap:8px">
        <input style="flex:1;padding:9px 13px;border-radius:8px;border:1px solid var(--bdr);background:rgba(255,255,255,.05);color:var(--text);font-size:12px;font-family:'Noto Sans',sans-serif;outline:none" placeholder="Viết bình luận..." onclick="toast('Đăng nhập để bình luận')">
        <button onclick="toast('Đăng nhập để bình luận')" style="padding:9px 16px;border-radius:8px;background:linear-gradient(135deg,#A855F7,#6366F1);border:none;color:#fff;font-size:12px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif">Gửi</button>
      </div>
    </div>`;
}

// Re-render project with working buttons
function renderProjects(){
  document.getElementById('projectList').innerHTML = PROJECTS.map(p=>`
    <div class="pjcard">
      <div class="pjc-top">
        <div class="pjc-info">
          <div class="pjc-header">
            <span class="pill ${p.typeC}">${p.type}</span>
            <span style="font-size:10px;color:var(--text3)">${p.time}</span>
            <span class="pill ${p.status}">${p.statusT}</span>
          </div>
          <div class="pjc-name">${p.name}</div>
          <div class="pills">${p.pills.map(pl=>`<span class="pill ${pl.c}">${pl.t}</span>`).join('')}</div>
          <div class="pjc-desc">${p.desc}</div>
        </div>
        <div class="pjc-acts">
          <button class="pja" style="background:${p.btnBg}" onclick="openBidModal('${p.name.replace(/'/g,"\\'")}')">Ứng tuyển ngay</button>
          <button class="pja pja-g" onclick="showProjectDetail('${p.name.replace(/'/g,"\\'")}')">Xem chi tiết</button>
          <div class="pjc-views">👁️ ${p.views} người đang xem</div>
        </div>
      </div>
    </div>`).join('');
}

// Re-render products with working detail button
function renderProducts(data){
  const prods = data || PRODUCTS;
  document.getElementById('productGrid').innerHTML = prods.map((p,idx)=>`
    <div class="pcard">
      <div class="pc-img" style="background:${p.bg}">${p.ico}
        <div class="pc-badges">${p.badges.includes('sale')?`<span class="bdg bdg-sale">${p.saleNum||'-12%'}</span>`:p.badges.includes('new')?`<span class="bdg bdg-new">New</span>`:p.badges.includes('hot')?`<span class="bdg bdg-hot">Hot</span>`:p.badges.includes('bulk')?`<span class="bdg bdg-bulk">${p.saleNum||'Bulk'}</span>`:p.badges.includes('vip')?`<span class="bdg bdg-vip">${p.saleNum||'VIP'}</span>`:''}</div>
        ${p.badges.includes('d2c')?'<div class="pc-badge-l"><span class="bdg bdg-d2c">D2C</span></div>':''}
      </div>
      <div class="pc-body">
        <div class="pc-sup"><span>${p.sup}</span><span style="color:${p.c};font-weight:700">⭐${p.rating}</span></div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-price-row"><span class="pc-price" style="color:${p.c}">${p.price}</span>${p.old?`<span class="pc-price-old">${p.old}</span>`:''}<span class="pc-unit">${p.unit}</span></div>
        <div class="pc-info">${p.info}</div>
        <div class="pc-acts">
          <button class="pb" style="background:${p.ctaBg}" onclick="addToCart('${p.name.replace(/'/g,"\\'")}')">🛒 Thêm giỏ</button>
          <button class="pb-s" onclick="openProductDetail(PRODUCTS.findIndex(x=>x.name==='${p.name.replace(/'/g,"\\'")}'))">Chi tiết</button>
        </div>
      </div>
    </div>`).join('');
}

// ── ORDER FILTER ──
function filterOrders(type, btn){
  document.querySelectorAll('#pg-orders .pg-btn').forEach(b=>b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  const map={all:null,processing:'p-gold',shipping:'p-b',done:'p-g'};
  const status = map[type];
  const filtered = status ? ORDERS.filter(o=>o.status===status) : ORDERS;
  const el = document.getElementById('orderList');
  if(!el) return;
  el.innerHTML = '';
  renderOrdersData(filtered);
}

function renderOrdersData(list){
  document.getElementById('orderList').innerHTML = list.length ? list.map((o,idx)=>`
    <div class="order-card">
      <div class="oc-head">
        <div>
          <div class="oc-id">#${o.id}</div>
          <div class="oc-date">${o.date}</div>
        </div>
        <div class="oc-status"><span class="pill ${o.status}">${o.statusT}</span></div>
      </div>
      ${o.status==='p-b'?`
      <div style="background:rgba(14,165,233,.06);border:1px solid rgba(14,165,233,.18);border-radius:9px;padding:10px 12px;margin-bottom:10px;font-size:11px">
        <div style="font-weight:700;color:var(--c2);margin-bottom:4px">📍 Đang giao hàng</div>
        <div style="color:var(--text2);display:flex;flex-direction:column;gap:3px">
          <div>✅ <strong>14:22</strong> — Đã bàn giao cho đơn vị vận chuyển</div>
          <div>✅ <strong>09:15</strong> — Xuất kho nhà cung cấp</div>
          <div style="color:var(--text3)">⏳ Dự kiến: <strong style="color:var(--text)">Ngày mai 8–12h</strong></div>
        </div>
      </div>`:''}
      ${o.status==='p-gold'?`
      <div style="background:rgba(245,158,11,.06);border:1px solid rgba(245,158,11,.18);border-radius:9px;padding:10px 12px;margin-bottom:10px">
        <div style="font-weight:700;font-size:11px;color:var(--amb);margin-bottom:8px">⚙️ Tiến trình xử lý</div>
        <div style="display:flex;gap:0;position:relative">
          <div style="position:absolute;top:9px;left:10px;right:10px;height:2px;background:rgba(245,158,11,.15)"></div>
          ${['Đặt hàng','Xác nhận','Đóng gói','Vận chuyển'].map((s,i)=>`
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;position:relative;z-index:1">
            <div style="width:18px;height:18px;border-radius:50%;${i<2?'background:var(--amb);color:#fff;':'background:rgba(255,255,255,.08);border:2px solid rgba(245,158,11,.25);color:var(--text3);'}display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700">${i<2?'✓':(i+1)}</div>
            <div style="font-size:9px;color:${i<2?'var(--amb)':'var(--text3)'};">${s}</div>
          </div>`).join('')}
        </div>
      </div>`:''}
      <div class="oc-items">${o.items.map(i=>`
        <div class="oc-item">
          <span class="oc-item-ico">${i.ico}</span>
          <span style="flex:1">${i.name}</span>
          ${o.status==='p-g'?`<button onclick="rateOrder(ORDERS.indexOf(o))" style="padding:3px 9px;border-radius:6px;border:1px solid rgba(245,158,11,.3);background:rgba(245,158,11,.07);color:var(--amb);font-size:9px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif">⭐ Đánh giá</button>`:''}
        </div>`).join('')}
      </div>
      <div class="oc-total">
        <div>
          <div class="oc-total-l">Tổng giá trị Escrow</div>
          <div style="font-size:10px;font-weight:600;margin-top:2px;${o.status==='p-g'?'color:var(--green)':o.status==='p-b'?'color:var(--c2)':'color:var(--amb)'}">
            ${o.status==='p-g'?'✅ Đã release — Tiền đến NCC':o.status==='p-b'?'🔒 Đang giữ — release khi bạn xác nhận':'⏳ Đang giữ an toàn'}
          </div>
        </div>
        <div class="oc-total-v">${o.total}</div>
      </div>
      <div class="oc-acts" style="margin-top:10px">
        ${o.status==='p-b'?`
          <button class="oa" style="background:linear-gradient(135deg,#22C55E,#00C9A7)" onclick="confirmReceived(${ORDERS.indexOf(o)})">✅ Xác nhận nhận hàng</button>
          <button class="oa oa-g" onclick="openOrderDetail(${ORDERS.indexOf(o)})">📋 Chi tiết</button>
          <button class="oa oa-g" onclick="openDispute(${ORDERS.indexOf(o)})">⚠️ Khiếu nại</button>
          <button class="oa oa-g" onclick="openChat('NCC')">💬 Chat</button>
        `:''}
        ${o.status==='p-gold'?`
          <button class="oa" style="background:linear-gradient(135deg,#F59E0B,#FB923C)" onclick="openOrderDetail(${ORDERS.indexOf(o)})">📋 Chi tiết</button>
          <button class="oa oa-g" onclick="openChat('NCC')">💬 Chat NCC</button>
          <button class="oa oa-g" onclick="toast('Đã huỷ đơn hàng #${o.id} · Hoàn tiền Escrow 24h')">❌ Huỷ đơn</button>
        `:''}
        ${o.status==='p-g'?`
          <button class="oa" style="background:linear-gradient(135deg,#0EA5E9,#6366F1)" onclick="reorder(${ORDERS.indexOf(o)})">🔄 Mua lại</button>
          <button class="oa oa-g" onclick="openOrderDetail(${ORDERS.indexOf(o)})">📋 Chi tiết</button>
          <button class="oa oa-g" onclick="downloadInvoice('${o.id}')">🧾 Hoá đơn</button>
          <button class="oa oa-g" onclick="rateOrder(${ORDERS.indexOf(o)})">⭐ Đánh giá</button>
        `:''}
      </div>
    </div>`).join('')
  : `<div style="text-align:center;padding:40px;color:var(--text3)"><div style="font-size:40px;margin-bottom:12px">📦</div><div style="font-weight:700;font-size:14px;margin-bottom:6px">Không có đơn hàng</div><div style="font-size:12px">Chưa có đơn nào ở trạng thái này</div></div>`;
}

// ── RE-INIT ALL ──
setTimeout(()=>{
  renderProducts();
  renderWorkers();
  renderProjects();
  renderSuppliers();
  renderForum();
  renderCart();
  renderOrdersData(ORDERS);
},100);


// ── REQUIRE AUTH HELPER ──
function requireAuth(callback){
  if(currentUser){ callback(); }
  else { openAuthModal(); toast('Vui lòng đăng nhập để sử dụng tính năng này'); }
}


// ══════════════════════════════════════════
// USER SYSTEM
// ══════════════════════════════════════════
const ROLE_CONFIG = {
  buyer:{label:'Chủ nhà / CĐT',icon:'🏠',color:'var(--c1)',bg:'rgba(0,201,167,.1)',bdr:'rgba(0,201,167,.25)',id:'NXB',prefix:'CHN'},
  worker:{label:'Thợ kỹ thuật',icon:'👷',color:'var(--c2)',bg:'rgba(14,165,233,.1)',bdr:'rgba(14,165,233,.25)',id:'NXW',prefix:'THO'},
  contractor:{label:'Nhà thầu',icon:'🏗️',color:'var(--ind)',bg:'rgba(99,102,241,.1)',bdr:'rgba(99,102,241,.25)',id:'NXC',prefix:'NHT'},
  supplier:{label:'Nhà cung cấp',icon:'🏭',color:'var(--gold)',bg:'rgba(201,168,76,.1)',bdr:'rgba(201,168,76,.25)',id:'NXS',prefix:'NCC'},
};

let currentUser = null;
let selectedRole = 'buyer';

function openAuthModal(){
  document.getElementById('authModal').style.display='flex';
}

function switchAuthTab(tab){
  const isLogin = tab==='login';
  document.getElementById('authLogin').style.display=isLogin?'block':'none';
  document.getElementById('authReg').style.display=isLogin?'none':'block';
  document.getElementById('authTab-login').style.borderBottomColor=isLogin?'var(--c1)':'transparent';
  document.getElementById('authTab-login').style.color=isLogin?'var(--c1)':'var(--text3)';
  document.getElementById('authTab-reg').style.borderBottomColor=isLogin?'transparent':'var(--c1)';
  document.getElementById('authTab-reg').style.color=isLogin?'var(--text3)':'var(--c1)';
}

function selRole(btn, role){
  document.querySelectorAll('.role-btn').forEach(b=>{
    b.style.borderColor='var(--bdr)';b.style.background='transparent';b.style.color='var(--text2)';
  });
  const rc=ROLE_CONFIG[role];
  btn.style.borderColor=rc.bdr;btn.style.background=rc.bg;btn.style.color=rc.color;
  selectedRole=role;
}

function doLogin(){
  const email=document.getElementById('loginEmail').value.trim();
  if(!email){toast('Vui lòng nhập email hoặc SĐT');return;}
  demoLogin('buyer');
}
function quickLogin(provider){demoLogin('buyer');}

function doRegister(){
  demoLogin(selectedRole);
}

function demoLogin(role){
  const rc=ROLE_CONFIG[role];
  const uid=rc.prefix+'-'+Math.floor(Math.random()*9000+1000);
  currentUser={role,uid,name:role==='buyer'?'Nguyễn Văn A':role==='worker'?'Lê Minh Tuấn':role==='contractor'?'CT Hoàng Gia':'Vicem Hải Phòng',rc};
  document.getElementById('authModal').style.display='none';
  updateAuthUI();
  updateSidebarForRole();
  toast('✅ Đã đăng nhập · '+rc.icon+' '+rc.label+' · ID: '+uid);
  setTimeout(()=>openDashboard(),400);
}

function updateAuthUI(){
  if(!currentUser)return;
  const rc=currentUser.rc;
  document.getElementById('authArea').innerHTML=`
    <div style="display:flex;align-items:center;gap:6px;cursor:pointer" onclick="openDashboard()">
      <div style="width:28px;height:28px;border-radius:50%;background:${rc.bg};border:1px solid ${rc.bdr};display:flex;align-items:center;justify-content:center;font-size:14px">${rc.icon}</div>
      <div>
        <div style="font-size:11px;font-weight:700;color:${rc.color}">${currentUser.name}</div>
        <div style="font-size:9px;color:var(--text3);font-family:'Noto Sans Mono',monospace">${currentUser.uid}</div>
      </div>
      <div style="font-size:10px;font-weight:700;padding:2px 8px;border-radius:6px;background:${rc.bg};border:1px solid ${rc.bdr};color:${rc.color}">${rc.label}</div>
      <button onclick="event.stopPropagation();logout()" style="padding:4px 10px;border-radius:7px;border:1px solid var(--bdr);background:transparent;color:var(--text3);font-size:10px;cursor:pointer;font-family:'Noto Sans',sans-serif">Đăng xuất</button>
    </div>`;
}

function logout(){
  currentUser=null;
  document.getElementById('authArea').innerHTML=`<button class="tba tba-gold" onclick="openAuthModal()">Đăng nhập / Đăng ký</button>`;
  document.getElementById('sbDashboardSection').style.display='none';
  toast('Đã đăng xuất');
}

// ══ SIDEBAR UPDATE THEO ROLE ══
function updateSidebarForRole(){
  if(!currentUser)return;
  const rc=currentUser.rc;
  document.getElementById('sbDashboardSection').style.display='block';
  document.getElementById('sbRoleLabel').textContent=rc.icon+' '+rc.label;
  document.getElementById('sbRoleLabel').style.color=rc.color;
  document.getElementById('sbUserId').textContent=currentUser.uid;
  // Show đăng tin relevant to role
  const postItems=document.getElementById('sbPostItems');
  const rolePostMap={
    buyer:'<div class="si" onclick="openPostForm(\'project\')"><div class="si-ic">🏗️</div>Đăng công trình tìm thầu</div>',
    worker:'<div class="si" onclick="openPostForm(\'worker\')"><div class="si-ic">📝</div>Cập nhật hồ sơ thợ</div>',
    contractor:'<div class="si" onclick="openPostForm(\'project\')"><div class="si-ic">📋</div>Đăng dịch vụ nhà thầu</div><div class="si" onclick="setTab(\'proj\')"><div class="si-ic">🔍</div>Tìm công trình đấu thầu</div>',
    supplier:'<div class="si" onclick="openPostForm(\'product\')"><div class="si-ic">➕</div>Đăng sản phẩm mới</div><div class="si" onclick="openPostForm(\'store\')"><div class="si-ic">🏭</div>Quản lý gian hàng</div>',
  };
  if(postItems) postItems.innerHTML=rolePostMap[currentUser.role]||'';
}

// ══ DASHBOARD PER ROLE ══
function openDashboard(){
  if(!currentUser){openAuthModal();return;}
  setTab('dashboard');
  renderDashboard(currentUser.role);
}

function renderDashboard(role){
  const rc=ROLE_CONFIG[role];
  const dashboards={
    buyer: `
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:22px;padding:18px;background:${rc.bg};border:1px solid ${rc.bdr};border-radius:14px">
        <div style="width:56px;height:56px;border-radius:50%;background:${rc.bg};border:2px solid ${rc.bdr};display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0">${rc.icon}</div>
        <div style="flex:1">
          <div style="font-weight:900;font-size:18px">${currentUser.name}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:2px">${rc.label} · <span style="font-family:'Noto Sans Mono',monospace;color:${rc.color}">${currentUser.uid}</span></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:5px;align-items:flex-end">
          <span style="padding:3px 10px;border-radius:8px;font-size:10px;font-weight:700;background:${rc.bg};border:1px solid ${rc.bdr};color:${rc.color}">Verified ✓</span>
          <span style="font-size:10px;color:var(--text3)">Thành viên từ 2024</span>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
        ${[['📦','3','Đơn hàng','var(--c1)'],['👷','2','Thợ đã book','var(--c2)'],['🎨','5','Thiết kế AI','var(--ind)'],['🔒','14.3M','Escrow an toàn','var(--gold)']].map(([ico,val,lbl,c])=>`
        <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:12px;padding:14px;text-align:center">
          <div style="font-size:22px;margin-bottom:6px">${ico}</div>
          <div style="font-family:'Noto Sans Mono',monospace;font-size:18px;font-weight:800;color:${c}">${val}</div>
          <div style="font-size:10px;color:var(--text3);margin-top:3px">${lbl}</div>
        </div>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px">
        <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:14px;padding:16px">
          <div style="font-weight:800;font-size:13px;margin-bottom:12px">📦 Đơn hàng gần đây</div>
          ${ORDERS.map(o=>`<div style="display:flex;align-items:center;gap:8px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:11px"><div style="flex:1"><div style="font-weight:600">${o.items[0].name.substring(0,28)}...</div><div style="font-size:10px;color:var(--text3)">${o.date}</div></div><span class="pill ${o.status}" style="font-size:9px">${o.statusT}</span></div>`).join('')}
          <button onclick="setTab('orders')" style="width:100%;margin-top:10px;padding:7px;border-radius:8px;background:transparent;border:1px solid var(--bdr);color:var(--text2);font-size:11px;cursor:pointer;font-family:'Noto Sans',sans-serif">Xem tất cả →</button>
        </div>
        <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:14px;padding:16px">
          <div style="font-weight:800;font-size:13px;margin-bottom:12px">👷 Thợ đã book</div>
          ${WORKERS.slice(0,2).map(w=>`<div style="display:flex;align-items:center;gap:9px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,.04)"><div style="width:32px;height:32px;border-radius:50%;background:${w.avBg};display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0">${w.av}</div><div style="flex:1"><div style="font-size:11px;font-weight:700">${w.name}</div><div style="font-size:10px;color:var(--text3)">${w.loc}</div></div><div style="font-size:11px;font-weight:700;color:${w.pricec}">${w.price}/ngày</div></div>`).join('')}
          <button onclick="setTab('work')" style="width:100%;margin-top:10px;padding:7px;border-radius:8px;background:transparent;border:1px solid var(--bdr);color:var(--text2);font-size:11px;cursor:pointer;font-family:'Noto Sans',sans-serif">Tìm thêm thợ →</button>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
        <div onclick="openPostForm('project')" style="background:linear-gradient(135deg,rgba(0,201,167,.08),rgba(14,165,233,.05));border:1px solid rgba(0,201,167,.18);border-radius:12px;padding:14px;text-align:center;cursor:pointer;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''"><div style="font-size:24px;margin-bottom:6px">🏗️</div><div style="font-size:12px;font-weight:700">Đăng công trình</div><div style="font-size:10px;color:var(--text3)">Tìm nhà thầu</div></div>
        <div onclick="setTab('mat')" style="background:linear-gradient(135deg,rgba(245,158,11,.08),rgba(251,146,60,.05));border:1px solid rgba(245,158,11,.18);border-radius:12px;padding:14px;text-align:center;cursor:pointer;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''"><div style="font-size:24px;margin-bottom:6px">📦</div><div style="font-size:12px;font-weight:700">Mua vật liệu</div><div style="font-size:10px;color:var(--text3)">D2C giá tốt nhất</div></div>
        <div onclick="toast('Mở NexDesign AI → nexdesign-app.html')" style="background:linear-gradient(135deg,rgba(99,102,241,.08),rgba(168,85,247,.05));border:1px solid rgba(99,102,241,.18);border-radius:12px;padding:14px;text-align:center;cursor:pointer;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''"><div style="font-size:24px;margin-bottom:6px">🎨</div><div style="font-size:12px;font-weight:700">Thiết kế AI</div><div style="font-size:10px;color:var(--text3)">NexDesign Studio</div></div>
      </div>`,

    worker: `
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:22px;padding:18px;background:${rc.bg};border:1px solid ${rc.bdr};border-radius:14px">
        <div style="width:56px;height:56px;border-radius:50%;background:${rc.bg};border:2px solid ${rc.bdr};display:flex;align-items:center;justify-content:center;font-size:28px">${rc.icon}</div>
        <div style="flex:1"><div style="font-weight:900;font-size:18px">${currentUser.name}</div><div style="font-size:11px;color:var(--text3);margin-top:2px">Thợ hồ · <span style="font-family:'Noto Sans Mono',monospace;color:${rc.color}">${currentUser.uid}</span></div><div style="margin-top:5px;display:flex;gap:5px"><span style="padding:2px 8px;border-radius:6px;font-size:9px;font-weight:700;background:rgba(0,201,167,.1);color:var(--c1);border:1px solid rgba(0,201,167,.2)">NexAcademy ✓</span><span style="padding:2px 8px;border-radius:6px;font-size:9px;font-weight:700;background:rgba(14,165,233,.1);color:var(--c2);border:1px solid rgba(14,165,233,.2)">Bảo hiểm ✓</span></div></div>
        <div style="text-align:right"><div style="font-family:'Noto Sans Mono',monospace;font-size:22px;font-weight:800;color:${rc.color}">4.9★</div><div style="font-size:10px;color:var(--text3)">128 đánh giá</div></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
        ${[['💰','18.6M','Thu nhập tháng','var(--green)'],['📅','12','Lịch làm hôm nay','var(--c2)'],['⭐','4.9','Rating trung bình','var(--amb)'],['✅','234','Dự án hoàn thành','var(--c1)']].map(([ico,val,lbl,c])=>`
        <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:12px;padding:14px;text-align:center"><div style="font-size:22px;margin-bottom:6px">${ico}</div><div style="font-family:'Noto Sans Mono',monospace;font-size:18px;font-weight:800;color:${c}">${val}</div><div style="font-size:10px;color:var(--text3);margin-top:3px">${lbl}</div></div>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px">
        <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:14px;padding:16px">
          <div style="font-weight:800;font-size:13px;margin-bottom:12px">📅 Lịch làm việc tuần này</div>
          ${['T2 · 7:00 — Tô trát tầng 3 · Đống Đa','T3 · 7:00 — Ốp lát phòng tắm · Cầu Giấy','T5 · 8:00 — Chống thấm mái · Hai Bà Trưng'].map(s=>`<div style="padding:8px 10px;background:rgba(14,165,233,.07);border:1px solid rgba(14,165,233,.15);border-radius:8px;font-size:11px;color:var(--text2);margin-bottom:6px">📍 ${s}</div>`).join('')}
          <button onclick="toast('Mở lịch làm việc đầy đủ')" style="width:100%;margin-top:6px;padding:7px;border-radius:8px;background:transparent;border:1px solid var(--bdr);color:var(--text2);font-size:11px;cursor:pointer;font-family:'Noto Sans',sans-serif">Xem lịch đầy đủ →</button>
        </div>
        <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:14px;padding:16px">
          <div style="font-weight:800;font-size:13px;margin-bottom:12px">🔔 Yêu cầu booking mới</div>
          ${['Nguyễn Thị Mai · Tô trát · Từ Liêm · 450K/ngày · 3 ngày','Trần Văn Hùng · Ốp gạch · Cầu Giấy · 500K/ngày · 2 ngày'].map(r=>`<div style="padding:9px;background:rgba(0,201,167,.05);border:1px solid rgba(0,201,167,.15);border-radius:8px;font-size:11px;margin-bottom:6px"><div style="color:var(--text)">${r.split('·')[0]}</div><div style="color:var(--text3);font-size:10px">${r.split('·').slice(1).join('·')}</div><div style="display:flex;gap:6px;margin-top:7px"><button onclick="toast('Đã chấp nhận booking')" style="flex:1;padding:5px;border-radius:6px;background:linear-gradient(135deg,#00C9A7,#0EA5E9);border:none;color:#fff;font-size:10px;font-weight:700;cursor:pointer">Nhận</button><button onclick="toast('Đã từ chối')" style="flex:1;padding:5px;border-radius:6px;background:transparent;border:1px solid var(--bdr);color:var(--text3);font-size:10px;cursor:pointer">Từ chối</button></div></div>`).join('')}
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div onclick="openPostForm('worker')" style="background:linear-gradient(135deg,rgba(14,165,233,.08),rgba(0,201,167,.05));border:1px solid rgba(14,165,233,.18);border-radius:12px;padding:14px;text-align:center;cursor:pointer;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''"><div style="font-size:24px;margin-bottom:6px">📝</div><div style="font-size:12px;font-weight:700">Cập nhật hồ sơ</div><div style="font-size:10px;color:var(--text3)">Tăng cơ hội nhận việc</div></div>
        <div onclick="setTab('work')" style="background:linear-gradient(135deg,rgba(34,197,94,.08),rgba(0,201,167,.05));border:1px solid rgba(34,197,94,.18);border-radius:12px;padding:14px;text-align:center;cursor:pointer;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''"><div style="font-size:24px;margin-bottom:6px">🔍</div><div style="font-size:12px;font-weight:700">Tìm việc làm mới</div><div style="font-size:10px;color:var(--text3)">Job đang chờ thợ</div></div>
      </div>`,

    contractor: `
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:22px;padding:18px;background:${rc.bg};border:1px solid ${rc.bdr};border-radius:14px">
        <div style="width:56px;height:56px;border-radius:50%;background:${rc.bg};border:2px solid ${rc.bdr};display:flex;align-items:center;justify-content:center;font-size:28px">${rc.icon}</div>
        <div style="flex:1"><div style="font-weight:900;font-size:18px">${currentUser.name}</div><div style="font-size:11px;color:var(--text3);margin-top:2px">Nhà thầu · <span style="font-family:'Noto Sans Mono',monospace;color:${rc.color}">${currentUser.uid}</span></div></div>
        <div style="text-align:right"><div style="font-family:'Noto Sans Mono',monospace;font-size:20px;font-weight:800;color:${rc.color}">A+</div><div style="font-size:10px;color:var(--text3)">Nhà thầu hạng A</div></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
        ${[['🏗️','3','DA đang thi công','var(--ind)'],['📋','5','Hồ sơ đang thầu','var(--c2)'],['💰','2.8B','GMV tháng này','var(--green)'],['👷','15','Thợ trong đội','var(--amb)']].map(([ico,val,lbl,c])=>`
        <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:12px;padding:14px;text-align:center"><div style="font-size:22px;margin-bottom:6px">${ico}</div><div style="font-family:'Noto Sans Mono',monospace;font-size:18px;font-weight:800;color:${c}">${val}</div><div style="font-size:10px;color:var(--text3);margin-top:3px">${lbl}</div></div>`).join('')}
      </div>
      <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:14px;padding:16px;margin-bottom:16px">
        <div style="font-weight:800;font-size:13px;margin-bottom:12px">🏗️ Dự án đang thi công</div>
        ${[{name:'Biệt thự 500m² Hà Đông',progress:45,budget:'4.2 tỷ',deadline:'120 ngày còn lại',c:'#00C9A7'},{name:'Văn phòng fit-out Cầu Giấy',progress:78,budget:'1.5 tỷ',deadline:'12 ngày còn lại',c:'#F59E0B'},{name:'Nhà phố 3 tầng Đống Đa',progress:92,budget:'320 triệu',deadline:'5 ngày còn lại',c:'#22C55E'}].map(p=>`
        <div style="margin-bottom:12px;padding:10px;background:rgba(255,255,255,.04);border-radius:9px">
          <div style="display:flex;justify-content:space-between;margin-bottom:5px"><span style="font-size:12px;font-weight:700">${p.name}</span><span style="font-size:11px;color:var(--text3)">${p.deadline}</span></div>
          <div style="height:5px;background:rgba(255,255,255,.08);border-radius:3px;overflow:hidden;margin-bottom:4px"><div style="height:100%;background:${p.c};width:${p.progress}%;border-radius:3px;transition:width .5s"></div></div>
          <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text3)"><span>${p.progress}% hoàn thành</span><span>Ngân sách: ${p.budget}</span></div>
        </div>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div onclick="setTab('proj')" style="background:linear-gradient(135deg,rgba(99,102,241,.08),rgba(168,85,247,.05));border:1px solid rgba(99,102,241,.18);border-radius:12px;padding:14px;text-align:center;cursor:pointer;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''"><div style="font-size:24px;margin-bottom:6px">🔍</div><div style="font-size:12px;font-weight:700">Tìm công trình đấu thầu</div></div>
        <div onclick="openPostForm('project')" style="background:linear-gradient(135deg,rgba(14,165,233,.08),rgba(99,102,241,.05));border:1px solid rgba(14,165,233,.18);border-radius:12px;padding:14px;text-align:center;cursor:pointer;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''"><div style="font-size:24px;margin-bottom:6px">📋</div><div style="font-size:12px;font-weight:700">Đăng năng lực nhà thầu</div></div>
      </div>`,

    supplier: `
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:22px;padding:18px;background:${rc.bg};border:1px solid ${rc.bdr};border-radius:14px">
        <div style="width:56px;height:56px;border-radius:50%;background:${rc.bg};border:2px solid ${rc.bdr};display:flex;align-items:center;justify-content:center;font-size:28px">${rc.icon}</div>
        <div style="flex:1"><div style="font-weight:900;font-size:18px">${currentUser.name}</div><div style="font-size:11px;color:var(--text3);margin-top:2px">D2C Partner · <span style="font-family:'Noto Sans Mono',monospace;color:${rc.color}">${currentUser.uid}</span></div></div>
        <div style="text-align:right"><div style="font-size:11px;font-weight:700;padding:3px 10px;border-radius:8px;background:rgba(34,197,94,.1);color:var(--green);border:1px solid rgba(34,197,94,.2)">Verified D2C ✓</div></div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px">
        ${[['📦','2,140','Sản phẩm đang bán','var(--c1)'],['🛒','156','Đơn hàng tháng này','var(--c2)'],['💰','4.8B','Doanh thu tháng','var(--green)'],['⭐','4.9','Rating gian hàng','var(--amb)']].map(([ico,val,lbl,c])=>`
        <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:12px;padding:14px;text-align:center"><div style="font-size:22px;margin-bottom:6px">${ico}</div><div style="font-family:'Noto Sans Mono',monospace;font-size:18px;font-weight:800;color:${c}">${val}</div><div style="font-size:10px;color:var(--text3);margin-top:3px">${lbl}</div></div>`).join('')}
      </div>
      <div style="background:var(--sur);border:1px solid var(--bdr);border-radius:14px;padding:16px;margin-bottom:16px">
        <div style="font-weight:800;font-size:13px;margin-bottom:12px">📊 Hiệu suất gian hàng (30 ngày)</div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
          ${[['👁️ Lượt xem','28,400','+12%'],['🛒 Thêm giỏ','4,210','+8%'],['💳 Tỷ lệ mua','14.8%','+2.1%']].map(([lbl,val,chg])=>`
          <div style="padding:12px;background:rgba(255,255,255,.04);border-radius:9px;text-align:center"><div style="font-size:11px;color:var(--text3);margin-bottom:5px">${lbl}</div><div style="font-family:'Noto Sans Mono',monospace;font-size:16px;font-weight:800">${val}</div><div style="font-size:10px;color:var(--green);font-weight:700">${chg} so tháng trước</div></div>`).join('')}
        </div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div onclick="openPostForm('product')" style="background:linear-gradient(135deg,rgba(201,168,76,.08),rgba(245,158,11,.05));border:1px solid rgba(201,168,76,.18);border-radius:12px;padding:14px;text-align:center;cursor:pointer;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''"><div style="font-size:24px;margin-bottom:6px">➕</div><div style="font-size:12px;font-weight:700">Đăng sản phẩm mới</div></div>
        <div onclick="openPostForm('store')" style="background:linear-gradient(135deg,rgba(99,102,241,.08),rgba(201,168,76,.05));border:1px solid rgba(99,102,241,.18);border-radius:12px;padding:14px;text-align:center;cursor:pointer;transition:all .2s" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''"><div style="font-size:24px;margin-bottom:6px">🏭</div><div style="font-size:12px;font-weight:700">Quản lý gian hàng</div></div>
      </div>`,
  };
  document.getElementById('dashboardContent').innerHTML = dashboards[role] || dashboards.buyer;
}

// ══ ĐĂNG TIN FORMS ══
const POST_FORMS = {
  product:{title:'➕ Đăng sản phẩm mới',icon:'📦',role:'supplier',body:`
    <div class="notice n-gold" style="margin-bottom:14px">🏭 Sản phẩm sẽ hiển thị ngay trên NexMarket sau khi được duyệt (thường trong 2h)</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Tên sản phẩm *</label><input class="form-input" placeholder="Xi măng PCB40 bao 40kg"></div>
      <div class="form-group"><label class="form-label">Danh mục *</label><select class="form-input"><option>Xi măng & Gạch</option><option>Thép</option><option>Gỗ</option><option>Điện</option><option>Sơn</option><option>Vệ sinh</option><option>Kính</option><option>Máy móc</option></select></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Đơn giá *</label><input class="form-input" type="number" placeholder="128000"></div>
      <div class="form-group"><label class="form-label">Đơn vị</label><select class="form-input"><option>bao</option><option>kg</option><option>tấn</option><option>m²</option><option>m³</option><option>cái</option><option>bộ</option><option>cuộn</option></select></div>
      <div class="form-group"><label class="form-label">Số lượng tồn kho</label><input class="form-input" type="number" placeholder="500"></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Số lượng tối thiểu mua</label><input class="form-input" type="number" placeholder="20"></div>
      <div class="form-group"><label class="form-label">Thời gian giao hàng</label><select class="form-input"><option>Giao trong 24h</option><option>2–3 ngày</option><option>Giao theo lô</option><option>Hẹn lịch</option></select></div>
    </div>
    <div class="form-group"><label class="form-label">Mô tả sản phẩm</label><textarea class="form-input" rows="3" style="resize:none" placeholder="Thông số kỹ thuật, tiêu chuẩn, xuất xứ, bảo hành..."></textarea></div>
    <div class="form-group"><label class="form-label">Hình ảnh sản phẩm</label><div style="border:1px dashed var(--bdr2);border-radius:9px;padding:18px;text-align:center;cursor:pointer;color:var(--text3);font-size:12px" onclick="toast('Upload ảnh sản phẩm (tối đa 8 ảnh, 5MB/ảnh)')">📸 Upload ảnh · Kéo thả vào đây hoặc click</div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px">
      <div class="form-group"><label class="form-label">Giá khuyến mãi (nếu có)</label><input class="form-input" type="number" placeholder="Giá sau KM"></div>
      <div class="form-group"><label class="form-label">Mã SKU nội bộ</label><input class="form-input" placeholder="SKU-001"></div>
    </div>
    <div style="display:flex;gap:6px;margin-bottom:14px">
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer"><input type="checkbox" checked style="accent-color:var(--c1)"> D2C (Bán thẳng từ nhà máy)</label>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer"><input type="checkbox" style="accent-color:var(--c1)"> Cho phép mua trả chậm B2B</label>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer"><input type="checkbox" checked style="accent-color:var(--c1)"> Hiển thị trong BOQ AI</label>
    </div>
    <button style="width:100%;padding:12px;border-radius:10px;background:linear-gradient(135deg,#C9A84C,#F59E0B);border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="submitPostForm('sản phẩm')">📤 Đăng sản phẩm lên NexMarket</button>`},

  worker:{title:'📝 Cập nhật hồ sơ thợ',icon:'👷',role:'worker',body:`
    <div class="notice n-teal" style="margin-bottom:14px">✅ Hồ sơ được AI tự gợi ý cho chủ nhà phù hợp — cập nhật đầy đủ tăng 3x cơ hội nhận việc</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Họ tên *</label><input class="form-input" placeholder="Nguyễn Văn An"></div>
      <div class="form-group"><label class="form-label">SĐT *</label><input class="form-input" placeholder="09xx xxx xxx"></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Nghề chính *</label><select class="form-input"><option>Thợ hồ (xây, tô trát)</option><option>Thợ điện</option><option>Thợ nước</option><option>Thợ mộc</option><option>Thợ sơn</option><option>Thợ ốp lát</option><option>Thợ chống thấm</option><option>Kiến trúc sư</option><option>Kỹ sư xây dựng</option></select></div>
      <div class="form-group"><label class="form-label">Kinh nghiệm</label><select class="form-input"><option>1–2 năm</option><option>3–5 năm</option><option>5–8 năm</option><option>8–12 năm</option><option>Trên 12 năm</option></select></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Giá công/ngày *</label><input class="form-input" type="number" placeholder="450000"></div>
      <div class="form-group"><label class="form-label">Khu vực làm việc</label><select class="form-input"><option>Hà Nội</option><option>TP.HCM</option><option>Đà Nẵng</option><option>Toàn quốc</option></select></div>
      <div class="form-group"><label class="form-label">Bán kính di chuyển</label><select class="form-input"><option>5km</option><option>10km</option><option>20km</option><option>Không giới hạn</option></select></div>
    </div>
    <div class="form-group"><label class="form-label">Giới thiệu bản thân</label><textarea class="form-input" rows="3" style="resize:none" placeholder="Kinh nghiệm, điểm mạnh, dự án tiêu biểu, phong cách làm việc..."></textarea></div>
    <div class="form-group"><label class="form-label">Kỹ năng & Chuyên môn</label>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${['Tô trát','Ốp lát','Chống thấm','Đổ bê tông','Xây gạch','Hoàn thiện','Xi măng tự san phẳng'].map(s=>`<label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;padding:4px 9px;border-radius:7px;border:1px solid var(--bdr);color:var(--text2)"><input type="checkbox" style="accent-color:var(--c1)"> ${s}</label>`).join('')}
      </div>
    </div>
    <div class="form-group"><label class="form-label">Chứng chỉ & Bằng cấp</label><div style="border:1px dashed var(--bdr2);border-radius:9px;padding:14px;text-align:center;cursor:pointer;color:var(--text3);font-size:12px" onclick="toast('Upload ảnh chứng chỉ để được Verified')">📸 Upload ảnh chứng chỉ · Được badge Verified sau xác thực</div></div>
    <div style="display:flex;gap:6px;margin-bottom:14px">
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer"><input type="checkbox" checked style="accent-color:var(--c1)"> Nhận booking qua Escrow</label>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer"><input type="checkbox" checked style="accent-color:var(--c1)"> Cho phép GPS tracking</label>
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer"><input type="checkbox" style="accent-color:var(--c1)"> Nhận bảo hiểm tai nạn</label>
    </div>
    <button style="width:100%;padding:12px;border-radius:10px;background:linear-gradient(135deg,#00C9A7,#0EA5E9);border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="submitPostForm('hồ sơ thợ')">💾 Lưu và đăng hồ sơ</button>`},

  project:{title:'🏗️ Đăng công trình tìm nhà thầu',icon:'🏗️',role:'buyer/contractor',body:`
    <div class="notice n-blue" style="margin-bottom:14px">💡 AI sẽ tự gợi ý nhà thầu phù hợp và thông báo ngay cho họ sau khi bạn đăng</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Tiêu đề công trình *</label><input class="form-input" placeholder="Hoàn thiện nhà phố 3 tầng Đống Đa"></div>
      <div class="form-group"><label class="form-label">Loại công trình *</label><select class="form-input"><option>Nhà ở / Nhà phố</option><option>Biệt thự</option><option>Văn phòng</option><option>Shophouse</option><option>Chung cư</option><option>Công nghiệp</option><option>F&B / Nhà hàng</option></select></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Ngân sách dự kiến *</label><input class="form-input" placeholder="280,000,000"></div>
      <div class="form-group"><label class="form-label">Đến ngân sách tối đa</label><input class="form-input" placeholder="350,000,000"></div>
      <div class="form-group"><label class="form-label">Thời gian thi công</label><input class="form-input" placeholder="45 ngày"></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Địa chỉ công trình *</label><input class="form-input" placeholder="12 Trần Duy Hưng, Cầu Giấy, HN"></div>
      <div class="form-group"><label class="form-label">Diện tích sàn</label><input class="form-input" placeholder="360m² (3 tầng × 120m²)"></div>
    </div>
    <div class="form-group"><label class="form-label">Mô tả yêu cầu chi tiết *</label><textarea class="form-input" rows="4" style="resize:none" placeholder="Công việc cần làm: tô trát, điện nước, sơn, nội thất... Yêu cầu đặc biệt: có bản vẽ, ưu tiên đội thợ có kinh nghiệm biệt thự..."></textarea></div>
    <div class="form-group"><label class="form-label">Hạng mục công việc cần</label>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        ${['Xây thô','Hoàn thiện','Điện nước','Sơn','Nội thất','Ốp lát','Chống thấm','Mái'].map(s=>`<label style="display:flex;align-items:center;gap:5px;font-size:11px;cursor:pointer;padding:4px 9px;border-radius:7px;border:1px solid var(--bdr);color:var(--text2)"><input type="checkbox" style="accent-color:var(--c2)"> ${s}</label>`).join('')}
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Hạn nộp hồ sơ thầu</label><input class="form-input" type="date"></div>
      <div class="form-group"><label class="form-label">Hình thức thanh toán</label><select class="form-input"><option>Escrow NexBuild (khuyến nghị)</option><option>Milestone payment</option><option>Trả sau hoàn thành</option></select></div>
    </div>
    <div class="form-group"><label class="form-label">Tải lên bản vẽ (nếu có)</label><div style="border:1px dashed var(--bdr2);border-radius:9px;padding:14px;text-align:center;cursor:pointer;color:var(--text3);font-size:12px" onclick="toast('Upload bản vẽ CAD, PDF · Nhà thầu sẽ báo giá chính xác hơn')">📐 Upload bản vẽ · PDF / CAD / Revit</div></div>
    <button style="width:100%;padding:12px;border-radius:10px;background:linear-gradient(135deg,#0EA5E9,#6366F1);border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="submitPostForm('công trình')">📤 Đăng công trình · AI gợi ý nhà thầu ngay</button>`},

  store:{title:'🏭 Quản lý gian hàng D2C',icon:'🏭',role:'supplier',body:`
    <div class="notice n-gold" style="margin-bottom:14px">🏭 D2C — Bán thẳng đến 80K+ nhà thầu, không qua phân phối · Commission 2–4% GMV</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Tên gian hàng / Thương hiệu *</label><input class="form-input" placeholder="Vicem Hải Phòng · D2C"></div>
      <div class="form-group"><label class="form-label">Loại nhà cung cấp</label><select class="form-input"><option>Nhà sản xuất / Nhà máy (D2C)</option><option>Nhà phân phối độc quyền</option><option>Đại lý chính thức</option><option>Nhà bán lẻ B2B</option></select></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Ngành hàng chính</label><select class="form-input"><option>Xi măng & Vật liệu nền</option><option>Thép & Kết cấu</option><option>Gỗ & Nội thất</option><option>Điện & Chiếu sáng</option><option>Sơn & Hoàn thiện</option><option>Vệ sinh & Nước</option></select></div>
      <div class="form-group"><label class="form-label">Khu vực giao hàng</label><select class="form-input"><option>Toàn quốc</option><option>Miền Bắc</option><option>Miền Nam</option><option>Miền Trung</option></select></div>
    </div>
    <div class="form-group"><label class="form-label">Giới thiệu gian hàng</label><textarea class="form-input" rows="3" style="resize:none" placeholder="Năng lực sản xuất, chứng chỉ chất lượng, ưu điểm D2C..."></textarea></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px">
      <div class="form-group"><label class="form-label">Thời gian giao hàng tiêu chuẩn</label><select class="form-input"><option>Trong ngày (Hà Nội / HCM)</option><option>24h</option><option>2–3 ngày</option><option>Theo lịch lô</option></select></div>
      <div class="form-group"><label class="form-label">Chính sách B2B Credit</label><select class="form-input"><option>Không có</option><option>Trả chậm 30 ngày</option><option>Trả chậm 60 ngày</option><option>Trả chậm 90 ngày</option></select></div>
    </div>
    <div class="form-group"><label class="form-label">Tài liệu xác minh</label><div style="border:1px dashed var(--bdr2);border-radius:9px;padding:14px;text-align:center;cursor:pointer;color:var(--text3);font-size:12px" onclick="toast('Upload: GPKD, ISO, CO/CQ, chứng chỉ chất lượng')">📄 Upload GPKD · Chứng chỉ ISO · CO/CQ · Bắt buộc để được Verified</div></div>
    <div style="background:rgba(0,201,167,.06);border:1px solid rgba(0,201,167,.15);border-radius:10px;padding:12px;margin-bottom:14px;font-size:11px;color:var(--text2)">
      <div style="font-weight:700;color:var(--c1);margin-bottom:6px">📋 Gói tham gia</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        ${[['Free','3 tháng','2.000 SP','4% commission'],['Growth','2M/tháng','10.000 SP','2.5% commission'],['Enterprise','Liên hệ','Không giới hạn','1.5% commission']].map(([n,t,p,c])=>`<div style="padding:10px;border:1px solid var(--bdr);border-radius:8px;text-align:center;cursor:pointer" onclick="toast('Chọn gói ${n}')"><div style="font-weight:800;font-size:12px">${n}</div><div style="font-size:10px;color:var(--text3)">${t}</div><div style="font-size:10px;color:var(--c1);font-weight:600">${p}</div><div style="font-size:9px;color:var(--text3)">${c}</div></div>`).join('')}
      </div>
    </div>
    <button style="width:100%;padding:12px;border-radius:10px;background:linear-gradient(135deg,#6366F1,#A855F7);border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:'Noto Sans',sans-serif" onclick="submitPostForm('gian hàng D2C')">🏭 Đăng ký gian hàng D2C</button>`},
};

function openPostForm(type){
  const form = POST_FORMS[type];
  if(!form){toast('Tính năng này đang phát triển');return;}
  if(!currentUser){openAuthModal();toast('Vui lòng đăng nhập trước');return;}
  document.getElementById('postFormTitle').textContent = form.title;
  document.getElementById('postFormBody').innerHTML = form.body;
  document.getElementById('postFormModal').style.display='flex';
}

function submitPostForm(type){
  document.getElementById('postFormModal').style.display='none';
  toast('✅ Đã gửi '+type+' · NexBuild sẽ duyệt trong 2h · Thông báo qua SĐT và email');
}

// ══ INIT SIDEBAR DASHBOARD SECTION ══
function initSidebarDashboard(){
  const sbDiv = document.getElementById('sb');
  const dashHtml = `
    <div id="sbDashboardSection" style="display:none;border-top:1px solid var(--bdr);padding-top:6px">
      <div class="sb-sec" id="sbRoleLabel" style="color:var(--c1)">Dashboard</div>
      <div class="si on" onclick="openDashboard()" style="background:rgba(0,201,167,.06)"><div class="si-ic">📊</div>Tổng quan<div style="margin-left:auto;font-size:9px;font-family:'Noto Sans Mono',monospace;color:var(--text3)" id="sbUserId"></div></div>
      <div id="sbPostItems"></div>
    </div>`;
  sbDiv.insertAdjacentHTML('beforeend', dashHtml);
}

// Extend ALL_TABS
const _origSetTab = setTab;
function setTab(id){
  const allTabs=['mat','work','proj','sup','forum','cart','orders','dashboard','post'];
  allTabs.forEach(t=>{
    const el=document.getElementById('pg-'+t);
    if(el)el.classList.remove('on');
    const navEl=document.getElementById('nav-'+t);
    if(navEl)navEl.classList.remove('on');
  });
  const pg=document.getElementById('pg-'+id);
  if(pg)pg.classList.add('on');
  const nav=document.getElementById('nav-'+id);
  if(nav)nav.classList.add('on');
}

// Re-init
setTimeout(()=>{
  initSidebarDashboard();
  renderOrdersData(ORDERS);
},200);

// ── BOQ IMPORT MODAL ──
function openBoqModal(){
  document.getElementById('boqModal').style.display='flex';
}
function closeBoqModal(){
  document.getElementById('boqModal').style.display='none';
}
function handleBoqFile(input){
  if(!input.files||!input.files[0]) return;
  const file = input.files[0];
  closeBoqModal();
  toast('📋 Đang phân tích BOQ: '+file.name+' · AI đang ghép NCC tốt nhất...');
  setTimeout(()=>{
    toast('✅ Xong! Tìm '+Math.floor(Math.random()*8+4)+' hạng mục · '+Math.floor(Math.random()*3+2)+' NCC · Đã thêm vào giỏ hàng');
    setTimeout(()=>setTab('cart'),1200);
  },2500);
}



// ── Marketplace API Bootstrap ──

// Update auth UI elements
AUTH.on('auth:ready', function() {
  const loginBtns = document.querySelectorAll('[data-action="login"]');
  loginBtns.forEach(function(btn) {
    if (AUTH.isLoggedIn) {
      btn.textContent = AUTH.user.full_name || 'Tài khoản';
      btn.onclick = function() { location.href = '/dashboard'; };
    } else {
      btn.onclick = function() { showAuthModal(); };
    }
  });
  // Update cart count from API
  if (AUTH.isLoggedIn) loadCartCount();
});

async function loadCartCount() {
  try {
    const cart = await apiFetch('/cart');
    if (cart && cart.count !== undefined) {
      document.querySelectorAll('.cart-count').forEach(function(el) {
        el.textContent = cart.count;
      });
    }
  } catch(e) {}
}

// Load products from API (with fallback to hardcoded data)
async function loadProducts() {
  try {
    const resp = await apiFetch('/products?limit=40');
    if (resp && resp.items && resp.items.length > 0) {
      // Replace hardcoded PRODUCTS array if available
      if (typeof PRODUCTS !== 'undefined' && resp.items.length > 0) {
        // Map API response to existing frontend format
        window._apiProducts = resp.items;
      }
    }
  } catch(e) {}
}

// Load workers from API
async function loadWorkers() {
  try {
    const resp = await apiFetch('/workers?limit=20');
    if (resp && resp.items && resp.items.length > 0) {
      window._apiWorkers = resp.items;
    }
  } catch(e) {}
}

// Wire checkout to real API
const _origCheckout = window.confirmPayment;
window.confirmPayment = async function() {
  if (!AUTH.isLoggedIn) {
    showAuthModal(function() { window.confirmPayment(); });
    return;
  }
  try {
    const resp = await apiFetch('/orders/checkout', {
      method: 'POST',
      body: JSON.stringify({
        shipping_address: document.querySelector('[data-checkout-address]')?.value || '',
        receiver_name: AUTH.user?.full_name || '',
        payment_method: 'mock',
      }),
    });
    if (resp && resp.order_number) {
      toast('Đặt hàng thành công! Mã đơn: ' + resp.order_number, 'success');
      loadCartCount();
    } else if (_origCheckout) {
      _origCheckout();
    }
  } catch(e) {
    if (_origCheckout) _origCheckout();
  }
};

// Wire add-to-cart to real API
const _origAddCart = window.addToCart;
window.addToCart = async function(productId, qty) {
  if (!AUTH.isLoggedIn) {
    showAuthModal(function() { window.addToCart(productId, qty); });
    return;
  }
  try {
    const resp = await apiFetch('/cart/items', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId, quantity: qty || 1 }),
    });
    if (resp && resp.ok) {
      toast('Đã thêm vào giỏ hàng!', 'success');
      loadCartCount();
      return;
    }
  } catch(e) {}
  // Fallback to original
  if (_origAddCart) _origAddCart(productId, qty);
};

// Wire BOQ import to real API
window.importBOQFromAPI = async function(text) {
  if (!AUTH.isLoggedIn) { showAuthModal(); return; }
  try {
    const resp = await apiFetch('/boq/import', {
      method: 'POST',
      body: JSON.stringify({ manual_text: text }),
    });
    if (resp && resp.items) {
      toast('BOQ đã phân tích: ' + resp.items.length + ' mục · Tổng ' + formatVND(resp.total), 'success');
      return resp;
    }
  } catch(e) { toast('Lỗi phân tích BOQ', 'error'); }
};

// Wire chat to WebSocket
window.openChatWS = function(roomId) {
  if (!AUTH.isLoggedIn) { showAuthModal(); return; }
  const ws = connectWS('/ws/chat/' + roomId, function(data) {
    if (data.type === 'message') {
      toast(data.sender_name + ': ' + data.content.substring(0, 50), 'info');
    }
  });
  return ws;
};

// Init
loadProducts();
loadWorkers();
