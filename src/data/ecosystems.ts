export interface EcoPain {
  before: string;
  beforeDesc: string;
  after: string;
  afterDesc: string;
}

export interface EcoFeature {
  icon: string;
  title: string;
  desc: string;
}

export interface EcoKPI {
  label: string;
  value: string;
  note: string;
  highlight?: boolean;
}

export interface EcoModule {
  slug: string;
  num: string;
  name: string;
  tag: string;
  color: string;
  colorBg: string;
  gradientFrom: string;
  gradientTo: string;
  model: string;
  hook: string;
  desc: string;
  kpis: EcoKPI[];
  pains: EcoPain[];
  features: EcoFeature[];
  pricing: EcoKPI[];
}

export const ecosystems: EcoModule[] = [
  {
    slug: "market",
    num: "KEY · 12",
    name: "NexMarket",
    tag: "Cho xay dung",
    color: "#C9A84C",
    colorBg: "rgba(201,168,76,.12)",
    gradientFrom: "#C9A84C",
    gradientTo: "#F59E0B",
    model: "B2B · B2C · D2C · C2C Marketplace",
    hook: "Cho xay dung lon nhat Viet Nam",
    desc: "B2B · B2C · D2C · Tho · Vat lieu · Cong trinh · Dien dan — tat ca trong 1 san giao dich.",
    kpis: [
      { label: "Loai giao dich", value: "4 luong", note: "B2B, B2C, D2C, C2C", highlight: true },
      { label: "NCC da xac thuc", value: "200+", note: "Verified suppliers" },
      { label: "Phi GMV", value: "2-4%", note: "Tren don hang" },
      { label: "Revenue Y5", value: "$120M", note: "Tong marketplace", highlight: true },
    ],
    pains: [
      { before: "Mua vat lieu khong biet gia thi truong", beforeDesc: "Goi 2-3 noi hoi gia mat ca buoi, van khong biet ai re nhat.", after: "Thay ngay gia 200+ NCC cung luc", afterDesc: "1 man hinh, biet chinh xac gia thi truong." },
      { before: "Tim tho qua nguoi quen — khong biet chat luong", beforeDesc: "Khong ho so, khong danh gia, dat coc xong moi biet.", after: "Portfolio, danh gia thuc tu chu nha khac", afterDesc: "Chon tho nhu chon san pham — du thong tin." },
      { before: "Cong trinh dung vi vat lieu giao muon", beforeDesc: "Tho den khong co vat lieu lam.", after: "Dat lich giao dung ngay cong trinh can", afterDesc: "Vat lieu den truoc khi tho bat tay vao." },
      { before: "Thanh toan khong minh bach", beforeDesc: "Khong biet tien di dau, khong co chung tu ro rang.", after: "Escrow + audit log day du", afterDesc: "Moi giao dich duoc theo doi, minh bach 100%." },
    ],
    features: [
      { icon: "🏪", title: "4 luong giao dich", desc: "B2C mua vat lieu, D2C tu NCC, booking tho, dau thau cong trinh." },
      { icon: "🔒", title: "Escrow bao ve", desc: "Tien giu an toan, chi release khi xac nhan hoan thanh." },
      { icon: "🌐", title: "Dien dan + NXT Token", desc: "Chia se kien thuc, AI extract, earn token." },
    ],
    pricing: [
      { label: "Phi GMV", value: "2-4%", note: "Tren don hang" },
      { label: "Listing NCC", value: "Mien phi", note: "Dang san pham 0 dong", highlight: true },
      { label: "Premium store", value: "500K/thang", note: "Gian hang noi bat" },
    ],
  },
  {
    slug: "design",
    num: "01",
    name: "NexDesign AI",
    tag: "AI Thiet ke",
    color: "#00C9A7",
    colorBg: "rgba(0,201,167,.12)",
    gradientFrom: "#00C9A7",
    gradientTo: "#0EA5E9",
    model: "AI Thiet ke · He sinh thai 01",
    hook: "Mo ta y tuong — AI render khong gian 3D trong 30 giay",
    desc: "Mo ta y tuong bang loi — AI render khong gian 3D trong 30 giay, tu lap BOQ vat lieu voi gia thuc te, 1 click dat tho hoac mua vat lieu ngay tu hinh anh.",
    kpis: [
      { label: "Thoi gian render", value: "30 giay", note: "Tu mo ta den hinh anh 3D", highlight: true },
      { label: "BOQ tu dong", value: "100%", note: "Khong nhap tay" },
      { label: "Gia goi Pro", value: "299K", note: "dong / thang" },
      { label: "Revenue Y5", value: "$24M", note: "Subscription SaaS", highlight: true },
    ],
    pains: [
      { before: "Mo ta y tuong nhung tho hieu sai", beforeDesc: "Ket qua khac xa hinh dung — pha di lam lai ton kem.", after: "Thay ngay hinh anh khong gian thuc te", afterDesc: "Noi gi ra vay. Khong lo hieu nham." },
      { before: "Lap BOQ vat lieu mat ca ngay, hay sai", beforeDesc: "Copy tu ban ve sang Excel sang don hang — de nham so luong.", after: "BOQ tu ra ngay sau khi chon thiet ke", afterDesc: "Day du danh muc, so luong, gia thi truong." },
      { before: "Moi kien truc su ton tien va mat tuan", beforeDesc: "Chi de co 1-2 ban phac thao chua chac da dung y.", after: "Xem ngay nhieu phong cach khac nhau — mien phi", afterDesc: "Chon cai ung roi moi quyet dinh." },
      { before: "Mua vat lieu xong moi biet khong hop", beforeDesc: "Tho den cong trinh thieu do, phai chay di mua bo sung.", after: "Mua ngay tu danh sach — giao dung ngay can", afterDesc: "Khong thieu, khong thua, khong chay di mua bo sung." },
    ],
    features: [
      { icon: "🎨", title: "AI Render 3D realtime", desc: "Text, voice hoac anh tham khao → hinh anh khong gian chat luong cao trong vai giay." },
      { icon: "📋", title: "Shoppable renders", desc: "Click vao bat ky do vat trong hinh → them vao gio NexSupply hoac dat tho NexTalent ngay." },
      { icon: "📐", title: "BIM Reader (Phase 2)", desc: "Upload file CAD/Revit → BOQ tu extract. Khong nhap tay tung hang muc nua." },
    ],
    pricing: [
      { label: "Free tier", value: "3 designs", note: "/ thang mien phi" },
      { label: "Pro", value: "299K/thang", note: "Khong gioi han", highlight: true },
      { label: "Affiliate", value: "Co", note: "Share design = earn commission" },
    ],
  },
  {
    slug: "talent",
    num: "02",
    name: "NexTalent",
    tag: "Lao dong",
    color: "#0EA5E9",
    colorBg: "rgba(14,165,233,.12)",
    gradientFrom: "#0EA5E9",
    gradientTo: "#6366F1",
    model: "Lao dong · He sinh thai 02",
    hook: "Booking tho verified — tien giu an toan den khi xong viec",
    desc: "Booking tho verified — tien giu an toan den khi xong viec, bao hiem tu kich hoat, theo doi tien do realtime. 4M+ lao dong ky thuat Viet Nam.",
    kpis: [
      { label: "Lao dong ky thuat VN", value: "4M+", note: "Thi truong tiem nang", highlight: true },
      { label: "Phi booking", value: "8-12%", note: "Tren gia tri thanh cong" },
      { label: "Escrow", value: "100%", note: "Tien an toan den khi xong" },
      { label: "Revenue Y5", value: "$55M", note: "Largest module", highlight: true },
    ],
    pains: [
      { before: "Tho nhan tien roi bo hoac keo dai", beforeDesc: "Khong co co che nao bao ve khi tho khong hoan thanh viec.", after: "Tien giu an toan — chi ra khi ban xac nhan xong", afterDesc: "Tho biet chi nhan tien khi lam dung." },
      { before: "Tim tho qua nguoi quen — khong biet chat luong", beforeDesc: "Khong ho so, khong danh gia.", after: "Portfolio, danh gia thuc tu chu nha khac", afterDesc: "Chon tho nhu chon san pham." },
      { before: "Tai nan xay ra khong ai phat hien kip", beforeDesc: "Khong bao hiem, khong ai boi thuong.", after: "Bao hiem tai nan tu kich hoat khi dat tho", afterDesc: "Ca hai deu duoc bao ve." },
      { before: "Goi dien ca ngay khong biet tho dang lam gi", beforeDesc: "Khong the kiem chung tien do tu xa.", after: "Xem tien do va vi tri tho realtime trong app", afterDesc: "Check-in/out tu dong." },
    ],
    features: [
      { icon: "🔒", title: "Escrow bao ve 100%", desc: "Tien khong ra tay tho cho den khi ban xac nhan hai long." },
      { icon: "👷", title: "Dat ca doi nhieu nghe", desc: "1 hop dong, 1 lich, 1 thanh toan — phoi hop tho tu dong." },
      { icon: "🎓", title: "NFT Cert tu NexAcademy", desc: "Badge chung chi hien ngay tren ho so. Chu nha tin, booking nhieu hon." },
    ],
    pricing: [
      { label: "Phi booking", value: "8-12%", note: "Tren gia tri thanh cong" },
      { label: "Tho dang ky", value: "Mien phi", note: "0 dong", highlight: true },
      { label: "Bao hiem", value: "Tu dong", note: "Kich hoat khi booking" },
    ],
  },
  {
    slug: "supply",
    num: "03",
    name: "NexSupply",
    tag: "Vat lieu B2B",
    color: "#F59E0B",
    colorBg: "rgba(245,158,11,.12)",
    gradientFrom: "#F59E0B",
    gradientTo: "#FB923C",
    model: "Vat lieu B2B · He sinh thai 03",
    hook: "San B2B vat lieu xay dung — 200+ NCC, so sanh gia realtime",
    desc: "San B2B vat lieu xay dung — 200+ nha cung cap, so sanh gia realtime, BOQ import 1-click, mua truoc tra sau 60 ngay. Tiet kiem trung binh 15-20%.",
    kpis: [
      { label: "Nha cung cap", value: "200+", note: "Da xac thuc", highlight: true },
      { label: "Tiet kiem TB", value: "15-20%", note: "So voi mua le" },
      { label: "Phi GMV", value: "2-4%", note: "Tren gia tri don hang" },
      { label: "Revenue Y5", value: "$42M", note: "GMV commission", highlight: true },
    ],
    pains: [
      { before: "Khong biet minh dang mua gia thi truong khong", beforeDesc: "Goi 2-3 noi hoi gia mat ca buoi.", after: "Thay ngay gia 200+ NCC cung luc", afterDesc: "Biet chinh xac dang mua gia nao — 1 man hinh." },
      { before: "Nhap danh sach vat lieu tu ban ve mat ca ngay", beforeDesc: "Copy paste tu ban ve sang Excel — sai sot lien tuc.", after: "BOQ tu NexDesign tu do vao gio hang", afterDesc: "Khong nhap tay. Khong sai so luong." },
      { before: "Phai tra tien mat truoc khi nhan hang", beforeDesc: "Nha thau nho thieu von xoay vong.", after: "Nhan hang bay gio, thanh toan sau 60 ngay", afterDesc: "Dung hang, ban giao, thu tien xong roi moi tra." },
      { before: "Vat lieu giao muon → cong trinh dung", beforeDesc: "Tho den khong co vat lieu lam.", after: "Dat lich giao dung ngay cong trinh can", afterDesc: "Vat lieu den truoc khi tho bat tay vao." },
    ],
    features: [
      { icon: "📊", title: "So sanh gia realtime", desc: "200+ NCC, gia cap nhat lien tuc, chon NCC tot nhat." },
      { icon: "📦", title: "BOQ import 1-click", desc: "Upload BOQ tu NexDesign → tu map vat lieu → checkout." },
      { icon: "💳", title: "Mua truoc tra sau 60 ngay", desc: "B2B credit cho nha thau, khong can ung truoc." },
    ],
    pricing: [
      { label: "B2B Credit", value: "60 ngay", note: "Mua truoc tra sau" },
      { label: "Group buying", value: "-15-20%", note: "Mua chung giam them", highlight: true },
      { label: "Carbon tracker", value: "Phase 3", note: "CO2 tung vat lieu" },
    ],
  },
  {
    slug: "erp",
    num: "04",
    name: "NexERP",
    tag: "Quan ly du an",
    color: "#6366F1",
    colorBg: "rgba(99,102,241,.12)",
    gradientFrom: "#6366F1",
    gradientTo: "#0EA5E9",
    model: "Quan ly du an · He sinh thai 04",
    hook: "Quan ly cong trinh thong minh — voice command, AI photo progress",
    desc: "Quan ly cong trinh thong minh — voice command tai cong truong, nhan biet tien do tu anh chup, canh bao tre han som, bao cao 1-tap.",
    kpis: [
      { label: "Du an tre han nganh", value: "80%", note: "Van de NexERP giai quyet", highlight: true },
      { label: "Gia SaaS", value: "500K-2M", note: "dong / thang" },
      { label: "Thu mien phi", value: "14 ngay", note: "Day du tinh nang" },
      { label: "Revenue Y5", value: "$22M", note: "SaaS subscription", highlight: true },
    ],
    pains: [
      { before: "Chu dau tu hoi tien do khong biet tra loi", beforeDesc: "Thong tin nam trong dau tung nguoi.", after: "Bao cao tien do gui duoc ngay trong 30 giay", afterDesc: "Moi thong tin da co san — chi can 1 cai cham." },
      { before: "Phat hien tre han khi da khong con kip xu ly", beforeDesc: "Den luc biet thi da tre 2 tuan.", after: "Canh bao som 2-4 tuan truoc khi tre", afterDesc: "Con thoi gian dieu chinh." },
      { before: "Cap nhat tien do ton thoi gian nhap tay", beforeDesc: "Tho phai ghi chep, gui anh, nhap so lieu.", after: "Chup anh hoac noi — tien do tu ghi nhan", afterDesc: "AI nhan biet giai doan thi cong tu anh." },
      { before: "Tai nan lao dong khong ai phat hien kip", beforeDesc: "Khong the giam sat an toan lien tuc.", after: "Cong trinh tu canh bao nguy hiem tuc thi", afterDesc: "Camera AI phat hien thieu bao ho." },
    ],
    features: [
      { icon: "🗣️", title: "Voice Command", desc: "Noi vao dien thoai tai cong truong — cap nhat tu dong vao he thong." },
      { icon: "📸", title: "AI Photo Progress", desc: "Chup anh cong trinh → AI nhan biet tien do → ghi nhan tu dong." },
      { icon: "🌐", title: "Digital Twin (Phase 3)", desc: "Ban sao so 3D cua cong trinh. Xem tu xa nhu dung tai cho." },
    ],
    pricing: [
      { label: "Starter", value: "500K/thang", note: "1-3 du an" },
      { label: "Business", value: "1.2M/thang", note: "10 du an, AI full", highlight: true },
      { label: "Enterprise", value: "2M+/thang", note: "Khong gioi han" },
    ],
  },
  {
    slug: "media",
    num: "05",
    name: "NexMedia",
    tag: "Quang cao B2B",
    color: "#A855F7",
    colorBg: "rgba(168,85,247,.12)",
    gradientFrom: "#A855F7",
    gradientTo: "#6366F1",
    model: "Quang cao B2B · He sinh thai 05",
    hook: "In-render Ads — san pham xuat hien trong anh AI render",
    desc: "San pham xuat hien trong anh AI render — tiep can dung nguoi dang thiet ke va mua. Attribution 100%. Khong the bi chan boi ad blocker.",
    kpis: [
      { label: "CPM", value: "$5-50", note: "Tuy phan khuc", highlight: true },
      { label: "CPS", value: "2-5%", note: "Doanh thu phat sinh" },
      { label: "Ad Blocker", value: "0%", note: "Khong the bi chan" },
      { label: "Revenue Y5", value: "$18M", note: "Ad revenue", highlight: true },
    ],
    pains: [
      { before: "Quang cao xay dung khong ai click", beforeDesc: "Banner ads tren web xay dung: CTR 0.1%.", after: "San pham nam trong thiet ke — nguoi dung tu click", afterDesc: "CTR 8-15% vi san pham phu hop context." },
      { before: "Khong biet quang cao co dan den mua khong", beforeDesc: "Attribution mo ho, khong do duoc ROI.", after: "Attribution 100% tu xem den mua", afterDesc: "Biet chinh xac quang cao nao dan den don hang nao." },
    ],
    features: [
      { icon: "🖼️", title: "In-render Placement", desc: "San pham xuat hien tu nhien trong anh AI render." },
      { icon: "📊", title: "Attribution 100%", desc: "Theo doi tu impression → click → mua hang." },
      { icon: "🛡️", title: "Ad-block proof", desc: "Khong the bi chan vi nam trong noi dung render." },
    ],
    pricing: [
      { label: "CPM", value: "$5-50", note: "Tuy phan khuc" },
      { label: "CPS", value: "2-5%", note: "Doanh thu phat sinh", highlight: true },
      { label: "Self-serve", value: "Phase 2", note: "Dashboard tu quan ly" },
    ],
  },
  {
    slug: "finance",
    num: "06",
    name: "NexFinance",
    tag: "Tai chinh",
    color: "#22C55E",
    colorBg: "rgba(34,197,94,.12)",
    gradientFrom: "#22C55E",
    gradientTo: "#00C9A7",
    model: "Tai chinh · He sinh thai 06",
    hook: "Vay khong the chap — duyet 24h — giai ngan theo milestone",
    desc: "Vay khong the chap cho nha thau — duyet 24h dua tren du lieu NexBuild. Giai ngan theo milestone cong trinh. Bao hiem tu dong.",
    kpis: [
      { label: "Duyet vay", value: "24h", note: "Tu dong dua tren data", highlight: true },
      { label: "The chap", value: "Khong", note: "Dua tren lich su NexBuild" },
      { label: "Giai ngan", value: "Milestone", note: "Theo tien do cong trinh" },
      { label: "Revenue Y5", value: "$15M", note: "Interest + fees", highlight: true },
    ],
    pains: [
      { before: "Nha thau nho khong vay duoc ngan hang", beforeDesc: "Khong co tai san the chap, thu tuc phuc tap.", after: "Vay dua tren lich su lam viec tren NexBuild", afterDesc: "Data la tai san. Duyet 24h, khong giay to." },
      { before: "Giai ngan 1 lan — nha thau xai het roi het tien", beforeDesc: "Dong tien khong kiem soat.", after: "Giai ngan theo milestone cong trinh", afterDesc: "Tien ra dung luc can, khong lang phi." },
    ],
    features: [
      { icon: "💰", title: "AI Credit Scoring", desc: "Cham diem tin dung tu lich su giao dich tren NexBuild." },
      { icon: "📊", title: "Milestone Disbursement", desc: "Giai ngan tu dong khi cong trinh dat milestone." },
      { icon: "🛡️", title: "Bao hiem tich hop", desc: "Bao hiem cong trinh, bao hiem lao dong tu dong." },
    ],
    pricing: [
      { label: "Lai suat", value: "Tu 0.8%/thang", note: "Tuy risk score" },
      { label: "Han muc", value: "500M+", note: "Tuy lich su", highlight: true },
      { label: "Bao hiem", value: "Tu 0.3%", note: "Tu dong kich hoat" },
    ],
  },
  {
    slug: "affiliates",
    num: "07",
    name: "NexAffiliates",
    tag: "Hoa hong",
    color: "#FB923C",
    colorBg: "rgba(251,146,60,.12)",
    gradientFrom: "#FB923C",
    gradientTo: "#F59E0B",
    model: "Hoa hong · He sinh thai 07",
    hook: "Share thiet ke → Earn 3-12% hoa hong",
    desc: "Share thiet ke NexDesign hoac san pham NexSupply — earn 3-12% hoa hong. Payout 24h. Link tracking chinh xac.",
    kpis: [
      { label: "Hoa hong", value: "3-12%", note: "Tren don hang", highlight: true },
      { label: "Payout", value: "24h", note: "Rut tien nhanh" },
      { label: "Cookie", value: "30 ngay", note: "Attribution window" },
      { label: "Revenue Y5", value: "$8M", note: "Platform fee", highlight: true },
    ],
    pains: [
      { before: "Kien truc su gioi thieu khach nhung khong duoc gi", beforeDesc: "Gioi thieu vat lieu, tho cho khach — 0 dong hoa hong.", after: "Moi gioi thieu thanh cong = 3-12% hoa hong", afterDesc: "Link tracking chinh xac, payout 24h." },
    ],
    features: [
      { icon: "🔗", title: "Smart Link", desc: "Tao link affiliate trong 1 click, tracking tu dong." },
      { icon: "💸", title: "Payout 24h", desc: "Rut tien nhanh, khong cho lau." },
      { icon: "📊", title: "Dashboard realtime", desc: "Theo doi click, conversion, doanh thu realtime." },
    ],
    pricing: [
      { label: "Dang ky", value: "Mien phi", note: "0 dong", highlight: true },
      { label: "Hoa hong", value: "3-12%", note: "Tren don hang" },
      { label: "Payout", value: "24h", note: "Tu dong" },
    ],
  },
  {
    slug: "academy",
    num: "08",
    name: "NexAcademy",
    tag: "Dao tao",
    color: "#6366F1",
    colorBg: "rgba(99,102,241,.12)",
    gradientFrom: "#6366F1",
    gradientTo: "#A855F7",
    model: "Dao tao · He sinh thai 08",
    hook: "Hoc → Cert → Badge NexTalent → Thu nhap tang +15-25%",
    desc: "Dao tao ky nang xay dung — chung chi NFT Badge hien tren NexTalent. Tho co cert duoc booking nhieu hon, thu nhap tang 15-25%.",
    kpis: [
      { label: "Tang thu nhap", value: "+15-25%", note: "Sau khi co cert", highlight: true },
      { label: "Khoa hoc", value: "50+", note: "Video + thuc hanh" },
      { label: "NFT Badge", value: "On-chain", note: "Khong the gia mao" },
      { label: "Revenue Y5", value: "$6M", note: "Course fees", highlight: true },
    ],
    pains: [
      { before: "Tho muon nang cap nhung khong biet hoc o dau", beforeDesc: "Khoa hoc roi rac, khong co chung chi uy tin.", after: "Hoc online, thi, nhan cert ngay", afterDesc: "Badge hien tren NexTalent, chu nha tin hon." },
    ],
    features: [
      { icon: "📚", title: "Khoa hoc thuc chien", desc: "Video + bai tap thuc hanh + thi online." },
      { icon: "🎖️", title: "NFT Certificate", desc: "Chung chi on-chain, khong the gia mao, hien tren NexTalent." },
      { icon: "💰", title: "Earn while learn", desc: "Hoan thanh khoa hoc = earn NXT token." },
    ],
    pricing: [
      { label: "Khoa co ban", value: "Mien phi", note: "Co so", highlight: true },
      { label: "Khoa Pro", value: "200-500K", note: "Chuyen sau" },
      { label: "Cert fee", value: "50K", note: "Mint NFT badge" },
    ],
  },
  {
    slug: "agent",
    num: "09",
    name: "NexAgent AI",
    tag: "Tu dong AI",
    color: "#A855F7",
    colorBg: "rgba(168,85,247,.12)",
    gradientFrom: "#6366F1",
    gradientTo: "#A855F7",
    model: "Tu dong AI · He sinh thai 09",
    hook: "Cong trinh tu van hanh — dat tho, order vat lieu tu dong",
    desc: "AI Agent tu dong hoa workflow xay dung — tu dat tho, order vat lieu, theo doi tien do den canh bao van de. Cong trinh tu van hanh.",
    kpis: [
      { label: "Tu dong hoa", value: "80%", note: "Workflow xay dung", highlight: true },
      { label: "Tiet kiem thoi gian", value: "60%", note: "So voi thu cong" },
      { label: "24/7", value: "Hoat dong", note: "Khong nghi" },
      { label: "Revenue Y5", value: "$12M", note: "Premium AI", highlight: true },
    ],
    pains: [
      { before: "Quan ly cong trinh mat hang gio moi ngay", beforeDesc: "Dat tho, order vat lieu, kiem tra tien do — lam tay het.", after: "AI Agent lam thay — chi can duyet", afterDesc: "Tu dong dat tho, order vat lieu dung thoi diem." },
    ],
    features: [
      { icon: "🤖", title: "Auto-ordering", desc: "AI tu order vat lieu khi can, dua tren tien do cong trinh." },
      { icon: "👷", title: "Auto-booking", desc: "Tu dat tho dung thoi diem, dung ky nang." },
      { icon: "⚡", title: "Smart alerts", desc: "Canh bao van de truoc khi xay ra." },
    ],
    pricing: [
      { label: "Basic AI", value: "Mien phi", note: "Canh bao co ban", highlight: true },
      { label: "Pro Agent", value: "1M/thang", note: "Tu dong hoa day du" },
      { label: "Enterprise", value: "Lien he", note: "Custom workflows" },
    ],
  },
  {
    slug: "connect",
    num: "10",
    name: "NexConnect",
    tag: "Tich hop",
    color: "#0EA5E9",
    colorBg: "rgba(14,165,233,.12)",
    gradientFrom: "#0EA5E9",
    gradientTo: "#00C9A7",
    model: "Tich hop · He sinh thai 10",
    hook: "MISA · Slack · Google · Zalo · 50+ app · Nhap 1 lan",
    desc: "Ket noi NexBuild voi he thong hien tai — MISA, Slack, Google Workspace, Zalo, va 50+ ung dung khac. Nhap 1 lan, dong bo moi noi.",
    kpis: [
      { label: "Tich hop", value: "50+", note: "Ung dung", highlight: true },
      { label: "Sync", value: "Realtime", note: "Dong bo 2 chieu" },
      { label: "API", value: "REST + WS", note: "Webhook support" },
      { label: "Revenue Y5", value: "$4M", note: "Integration fees", highlight: true },
    ],
    pains: [
      { before: "Nhap du lieu vao nhieu he thong khac nhau", beforeDesc: "MISA rieng, Excel rieng, Zalo rieng — ton thoi gian.", after: "Nhap 1 lan, dong bo moi noi tu dong", afterDesc: "NexConnect lam cau noi giua tat ca." },
    ],
    features: [
      { icon: "🔌", title: "50+ Connectors", desc: "MISA, Slack, Google, Zalo, va nhieu hon." },
      { icon: "🔄", title: "2-way Sync", desc: "Dong bo 2 chieu realtime, khong mat du lieu." },
      { icon: "🛠️", title: "Custom API", desc: "REST API + Webhooks cho tich hop rieng." },
    ],
    pricing: [
      { label: "3 connectors", value: "Mien phi", note: "Co ban", highlight: true },
      { label: "Unlimited", value: "300K/thang", note: "Tat ca connectors" },
      { label: "Custom", value: "Lien he", note: "Tich hop rieng" },
    ],
  },
  {
    slug: "accounting",
    num: "11",
    name: "NexAccounting",
    tag: "Ke toan",
    color: "#22C55E",
    colorBg: "rgba(34,197,94,.12)",
    gradientFrom: "#22C55E",
    gradientTo: "#0EA5E9",
    model: "Ke toan · He sinh thai 11",
    hook: "Ket noi MISA · So sach tu ghi · Lai lo realtime",
    desc: "Ke toan xay dung tu dong — ket noi MISA, so sach tu ghi tu giao dich NexBuild, lai lo realtime, quyet toan 5 phut.",
    kpis: [
      { label: "Quyet toan", value: "5 phut", note: "Thay vi 2 ngay", highlight: true },
      { label: "Sai sot", value: "-95%", note: "So voi nhap tay" },
      { label: "MISA sync", value: "Realtime", note: "2-way" },
      { label: "Revenue Y5", value: "$5M", note: "SaaS fees", highlight: true },
    ],
    pains: [
      { before: "Ke toan xay dung phuc tap, hay sai", beforeDesc: "Nhieu dong tien, nhieu NCC, nhap tay de nham.", after: "Tu dong ghi so tu moi giao dich NexBuild", afterDesc: "Chinh xac 100%, dong bo MISA realtime." },
    ],
    features: [
      { icon: "📒", title: "Tu dong ghi so", desc: "Moi giao dich tren NexBuild tu dong vao so ke toan." },
      { icon: "📊", title: "Lai lo realtime", desc: "Dashboard lai lo theo tung cong trinh, realtime." },
      { icon: "🔗", title: "MISA Integration", desc: "Dong bo 2 chieu voi MISA ke toan." },
    ],
    pricing: [
      { label: "Co ban", value: "200K/thang", note: "1 cong trinh" },
      { label: "Business", value: "500K/thang", note: "10 cong trinh", highlight: true },
      { label: "Enterprise", value: "Lien he", note: "Khong gioi han" },
    ],
  },
];

export function getEcosystem(slug: string): EcoModule | undefined {
  return ecosystems.find((e) => e.slug === slug);
}
