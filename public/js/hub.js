/**
 * NexBuild Hub JS — Extracted from index.html inline scripts
 * Combines all 3 inline <script> blocks in order.
 * Loaded with defer after common.js — DOM is guaranteed ready.
 */

// ══════════════════════════════════════════════════════════════
// BLOCK 1 — Main Hub Logic (was inline before common.js)
// ══════════════════════════════════════════════════════════════

// ── DATA ──
const ECO_DATA = {
  "m1":{name:"NexDesign AI",file:"nexdesign-app.html",model:"AI Thiết kế · Subscription SaaS",hook:"Không bao giờ xây xong rồi mới hối hận vì sai thiết kế",desc:"Hàng nghìn người mỗi năm phá đi làm lại vì thiết kế không đúng kỳ vọng. NexDesign AI cho bạn thấy kết quả trước khi bỏ một đồng thi công.",
    icoSvg:`<path d="M11 2L19 6.5V15.5L11 20L3 15.5V6.5L11 2Z" stroke="#00C9A7" stroke-width="1.5" stroke-linejoin="round"/><circle cx="11" cy="11" r="2.5" fill="#00C9A7" opacity=".8"/>`,icoBg:"rgba(0,201,167,.1)",icoBd:"rgba(0,201,167,.2)",ctaBg:"linear-gradient(135deg,#00C9A7,#0EA5E9)",
    pains:[["Mô tả ý tưởng nhưng thợ hiểu sai","Kết quả khác xa hình dung — phá đi làm lại tốn kém","Thấy ngay hình ảnh không gian thực tế trong 30 giây","Nói gì ra vậy. Không lo hiểu nhầm. Chỉnh đến khi ưng rồi mới thi công."],["BOQ vật liệu nhập tay mất cả ngày, hay sai","Copy từ bản vẽ sang Excel — dễ nhầm, dễ sai số lượng","BOQ tự ra ngay sau khi chọn thiết kế","Đầy đủ danh mục, số lượng, giá thị trường — không cần làm tay."]],results:[["🏠","Thấy nhà trước khi xây","Không hối hận sau thi công"],["📋","BOQ chính xác 100%","Biết chi phí từ đầu"],["⚡","Từ ý tưởng đến hành động 1 click","Không chờ, không phối hợp lòng vòng"]]},
  "m2":{name:"NexTalent",file:"nextalent-app.html",model:"Lao động · Success-based Fee",hook:"Tiền ra khi xong việc — không bao giờ mất tiền khi thợ chưa làm xong",desc:"9 trong 10 chủ nhà từng gặp thợ bỏ giữa chừng. NexTalent đảo ngược tình thế — tiền được giữ an toàn, chỉ ra khi bạn hài lòng.",
    icoSvg:`<circle cx="11" cy="8" r="3.5" stroke="#0EA5E9" stroke-width="1.5"/><path d="M4 20C4 16.5 7.1 13.5 11 13.5C14.9 13.5 18 16.5 18 20" stroke="#0EA5E9" stroke-width="1.5" stroke-linecap="round"/><path d="M16 10L17.5 12L21 9" stroke="#00C9A7" stroke-width="1.5" stroke-linecap="round"/>`,icoBg:"rgba(14,165,233,.1)",icoBd:"rgba(14,165,233,.2)",ctaBg:"linear-gradient(135deg,#0EA5E9,#6366F1)",
    pains:[["Thợ nhận tiền rồi bỏ hoặc kéo dài","Không có cơ chế nào bảo vệ khi thợ không hoàn thành việc","Tiền giữ an toàn — chỉ ra khi bạn xác nhận xong","Thợ biết chỉ nhận tiền khi làm đúng. Không ai dám bỏ giữa chừng."],["Tìm thợ qua người quen — không biết chất lượng","Không hồ sơ, không đánh giá — đặt cọc xong mới biết có tốt không","Portfolio, rating thực, lịch sử 234 dự án đã làm","Chọn thợ như chọn sản phẩm. Đủ thông tin trước khi quyết định."]],results:[["🔒","Tiền an toàn 100%","Không bao giờ mất tiền khi thợ chưa xong"],["⭐","Thợ đã được kiểm chứng","Hồ sơ thực, rating thực"],["📱","Theo dõi tiến độ realtime","Biết thợ đang làm gì — không cần gọi"]]},
  "m3":{name:"NexSupply",file:"nexsupply-app.html",model:"Vật liệu B2B · GMV Commission",hook:"Không bao giờ mua hớ hay thiếu vật liệu giữa chừng",desc:"Cùng một sản phẩm, chênh lệch giá có thể lên 30% tùy nhà cung cấp. NexSupply cho bạn thấy toàn bộ thị trường trong 1 màn hình.",
    icoSvg:`<path d="M2 5H20L18 16H4L2 5Z" stroke="#F59E0B" stroke-width="1.5" stroke-linejoin="round"/><circle cx="8" cy="19.5" r="1.5" fill="#F59E0B"/><circle cx="15" cy="19.5" r="1.5" fill="#F59E0B"/>`,icoBg:"rgba(245,158,11,.1)",icoBd:"rgba(245,158,11,.2)",ctaBg:"linear-gradient(135deg,#F59E0B,#FB923C)",
    pains:[["Không biết mình mua giá thị trường không","Gọi 2–3 nơi hỏi giá mất cả buổi vẫn không chắc ai rẻ nhất","200+ nhà cung cấp so sánh giá cùng lúc — realtime","Biết chính xác mình đang trả giá nào so với thị trường."],["Phải trả tiền mặt trước khi nhận hàng","Nhà thầu nhỏ thiếu vốn xoay vòng — ảnh hưởng dòng tiền","Nhận hàng bây giờ, thanh toán sau 60 ngày","Dùng hàng, bàn giao công trình, thu tiền xong rồi mới trả."]],results:[["💰","Không bao giờ mua hớ nữa","Giá thực từ thị trường, minh bạch"],["📦","Hàng đến đúng ngày cần","Không dừng công trình vì thiếu vật liệu"],["💳","Xoay vốn linh hoạt","Mua trước trả sau 60 ngày"]]},
  "m4":{name:"NexERP",file:"nexerp-app.html",model:"Quản lý dự án · Monthly SaaS",hook:"Biết ngay công trình đang ở đâu — dù bạn không có mặt",desc:"80% dự án xây dựng VN trễ hạn. Lý do phổ biến nhất: không ai có đủ thông tin để quyết định kịp thời. NexERP thay đổi điều đó.",
    icoSvg:`<rect x="2" y="2" width="8" height="8" rx="2" stroke="#6366F1" stroke-width="1.5"/><rect x="12" y="2" width="8" height="8" rx="2" stroke="#0EA5E9" stroke-width="1.5"/><rect x="2" y="12" width="8" height="8" rx="2" stroke="#0EA5E9" stroke-width="1.5"/><rect x="12" y="12" width="8" height="8" rx="2" stroke="#6366F1" stroke-width="1.5"/>`,icoBg:"rgba(99,102,241,.1)",icoBd:"rgba(99,102,241,.2)",ctaBg:"linear-gradient(135deg,#6366F1,#0EA5E9)",
    pains:[["Chủ đầu tư hỏi tiến độ không biết trả lời","Thông tin nằm trong đầu từng người — tổng hợp mất cả buổi","Báo cáo tiến độ gửi được ngay trong 30 giây","Mọi thông tin đã có sẵn. Chỉ cần 1 cái chạm."],["Phát hiện trễ hạn khi đã quá muộn để xử lý","Đến lúc biết thì đã trễ 2 tuần — khó bù lại","Cảnh báo sớm 2–4 tuần trước khi xảy ra","Còn đủ thời gian điều chỉnh. Không bao giờ bị bất ngờ."]],results:[["👁️","Thấy mọi thứ từ xa","Tiến độ, tài chính, nhân công realtime"],["⏰","Không bao giờ trễ mà không hay","Cảnh báo sớm khi có rủi ro"],["📊","Báo cáo chuyên nghiệp tức thì","Tăng uy tín, dễ nhận dự án mới"]]},
  "m5":{name:"NexMedia",file:"nexmedia-app.html",model:"Quảng cáo B2B · Performance",hook:"Tiếp cận đúng người đúng lúc — khi họ đang quyết định mua",desc:"Sản phẩm của bạn xuất hiện ngay trong ảnh thiết kế AI khi khách đang chọn lựa. Intent cao nhất có thể. Không ad blocker nào chặn được.",
    icoSvg:`<rect x="2" y="4" width="18" height="12" rx="2" stroke="#A855F7" stroke-width="1.5"/><path d="M8 8L14 11L8 14V8Z" fill="#A855F7" opacity=".8"/><path d="M6 19H16" stroke="#A855F7" stroke-width="1.5" stroke-linecap="round"/>`,icoBg:"rgba(168,85,247,.1)",icoBd:"rgba(168,85,247,.2)",ctaBg:"linear-gradient(135deg,#A855F7,#6366F1)",
    pains:[["Quảng cáo tốn tiền nhưng không biết có hiệu quả","Facebook, Google không biết ai trong số đó thực sự mua hàng","Theo dõi từ lần đầu thấy sản phẩm đến khi thanh toán","Attribution 100%. Biết chính xác ROI từng đồng."],["Khách dùng ad blocker — quảng cáo không đến được","35% người dùng internet dùng ad blocker. Ngân sách thất thoát.","Sản phẩm nằm trong hình render — không thể tắt","Không phải quảng cáo kiểu thông thường. Là nội dung tự nhiên."]],results:[["🎯","Đúng người đúng lúc","Intent mua hàng cao nhất"],["📈","ROI rõ ràng từng đồng","Không đoán mò, không thất thoát"],["🚫","0% ad blocker","Không thể bị chặn"]]},
  "m6":{name:"NexFinance",file:"nexfinance-app.html",model:"Tài chính · Origination Fee",hook:"Vốn khi cần — không cần tài sản thế chấp, không chờ ngân hàng",desc:"4 triệu lao động kỹ thuật VN không tiếp cận được vốn ngân hàng. NexFinance dùng lịch sử làm việc thay cho sổ đỏ.",
    icoSvg:`<rect x="2" y="5" width="18" height="13" rx="2.5" stroke="#22C55E" stroke-width="1.5"/><path d="M2 9H20" stroke="#22C55E" stroke-width="1.5"/><circle cx="11" cy="13" r="2" stroke="#22C55E" stroke-width="1.2"/>`,icoBg:"rgba(34,197,94,.1)",icoBd:"rgba(34,197,94,.2)",ctaBg:"linear-gradient(135deg,#22C55E,#00C9A7)",
    pains:[["Ngân hàng từ chối vì không có tài sản thế chấp","Thợ giỏi nhiều việc nhưng không vay được — phải đi vay nóng lãi cao","Xem hạn mức vay ngay — lịch sử làm việc là tín dụng","Không cần sổ đỏ. Rating trên NexTalent là đủ."],["Chờ ngân hàng duyệt mất 1–2 tuần","Cần tiền gấp mua vật liệu cho job ngày mai — không kịp","Duyệt và nhận tiền trong vòng 24 giờ","Không xếp hàng. Không chờ duyệt."]],results:[["💰","Vốn khi cần","Không bỏ lỡ cơ hội vì thiếu tiền mặt"],["⏱️","Nhận trong 24h","Không phải chờ tuần hay tháng"],["🛡️","Bảo hiểm tự động","Làm việc an tâm hơn"]]},
  "m7":{name:"NexAffiliates",file:"nexaffiliates-app.html",model:"Hoa hồng · Revenue Share",hook:"Share một lần — kiếm tiền mỗi khi ai đó hành động",desc:"Mạng lưới quan hệ của bạn là tài sản. Share hình ảnh thiết kế đẹp — link tự nhúng trong ảnh — kiếm hoa hồng tự động.",
    icoSvg:`<circle cx="11" cy="4" r="2.5" stroke="#FB923C" stroke-width="1.5"/><circle cx="3" cy="17" r="2.5" stroke="#FB923C" stroke-width="1.5"/><circle cx="19" cy="17" r="2.5" stroke="#FB923C" stroke-width="1.5"/><path d="M11 6.5L5.5 14.5M11 6.5L16.5 14.5" stroke="#FB923C" stroke-width="1.5" stroke-linecap="round"/>`,icoBg:"rgba(251,146,60,.1)",icoBd:"rgba(251,146,60,.2)",ctaBg:"linear-gradient(135deg,#FB923C,#F59E0B)",
    pains:[["Giới thiệu bạn bè dùng dịch vụ nhưng không nhận được gì","Bạn tìm được thợ tốt, chia sẻ — dịch vụ nhận khách, bạn không nhận gì","Kiếm hoa hồng mỗi khi ai đó dùng từ link của bạn","Người dùng trả thứ họ đã trả, bạn nhận thêm phần thưởng."],["Chờ cả tháng mới được thanh toán","Tiền tích lũy nhưng phải chờ — mất động lực","Rút tiền bất cứ lúc nào trong vòng 24h","Tiền là của bạn. Rút khi muốn."]],results:[["💰","Thu nhập thụ động thực sự","Share một lần — earn mãi"],["📱","Công cụ share đẹp sẵn","Hình ảnh hấp dẫn, bạn bè muốn xem"],["📈","Bronze → Gold → Platinum","3–12% không giới hạn thu nhập"]]},
  "m8":{name:"NexAcademy",file:"nexacademy-app.html",model:"Đào tạo · Per Course + B2B",hook:"Học xong là kiếm được nhiều hơn ngay — không phải lời hứa",desc:"Thợ giỏi tay nghề nhưng không có bằng chứng. Chủ nhà không dám trả cao hơn. NexAcademy phá vỡ vòng tròn đó.",
    icoSvg:`<path d="M11 2L21 7.5L11 13L1 7.5L11 2Z" stroke="#6366F1" stroke-width="1.5" stroke-linejoin="round"/><path d="M5 10.5V16C5 16 7 19 11 19C15 19 17 16 17 16V10.5" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round"/>`,icoBg:"rgba(99,102,241,.1)",icoBd:"rgba(99,102,241,.2)",ctaBg:"linear-gradient(135deg,#6366F1,#A855F7)",
    pains:[["Học xong không biết có tăng thu nhập không","Bỏ tiền thời gian học — không biết ROI thực tế","Thấy thu nhập tăng bao nhiêu trước khi đăng ký","Quyết định có cơ sở. Không đoán mò."],["Chứng chỉ giấy không ai xác minh được","Chủ nhà không biết thật hay giả — không dám trả cao hơn","Cert hiện thẳng trên hồ sơ NexTalent tức thì","Chủ nhà thấy và tin ngay. Booking nhiều hơn. Thu nhập cao hơn."]],results:[["🎓","Chứng chỉ được công nhận","Hiển thị hồ sơ — verify tức thì"],["💰","Thu nhập tăng +15–25%","Sau khi có chứng chỉ NexAcademy"],["🧠","AI Practice Partner","Ôn luyện đúng lúc cần"]]},
  "m9":{name:"NexAgent",file:"nexagent-app.html",model:"Agentic AI · Per Project",hook:"Công trình tự chạy — bạn chỉ cần phê duyệt khi cần thiết",desc:"Quản lý một công trình đòi hỏi hàng chục quyết định mỗi ngày. NexAgent làm hết những việc đó — bạn chỉ focus vào quyết định chiến lược.",
    icoSvg:`<circle cx="11" cy="11" r="8" stroke="#6366F1" stroke-width="1.5"/><path d="M11 7V11L14 13" stroke="#A855F7" stroke-width="1.5" stroke-linecap="round"/><path d="M7 4L5 2M15 4L17 2M4 11H2M20 11H18" stroke="#6366F1" stroke-width="1" stroke-linecap="round" opacity=".5"/>`,icoBg:"rgba(99,102,241,.1)",icoBd:"rgba(99,102,241,.2)",ctaBg:"linear-gradient(135deg,#6366F1,#A855F7)",
    pains:[["Hàng chục việc nhỏ chiếm hết thời gian quản lý","Đặt thợ, nhắc vật liệu, cập nhật lịch — mỗi việc nhỏ nhưng cộng lại chiếm cả ngày","Những việc đó tự xảy ra — bạn chỉ nhận thông báo kết quả","Tập trung vào quyết định chiến lược."],["Quản lý 3–4 công trình cùng lúc không xuể","Không thể để mắt đến hết — phải chọn thiếu cái này bỏ bê cái kia","Mỗi công trình có AI riêng chạy 24/7","Mở rộng không cần thuê thêm người quản lý."]],results:[["🤖","Trợ lý quản lý 24/7","Không nghỉ, không quên"],["📋","Mọi việc đúng hạn","Không bỏ sót bất kỳ bước nào"],["📈","Mở rộng không tốn nhân sự","Chi phí không tăng theo quy mô"]]},
  "m10":{name:"NexConnect",file:"nexconnect-app.html",model:"Tích hợp · iPaaS",hook:"Giữ nguyên phần mềm đang dùng — NexBuild tự kết nối vào",desc:"Dữ liệu rải rác 5–8 phần mềm. Nhập tay nhiều lần. NexConnect chấm dứt điều đó — nhập một lần, đồng bộ khắp nơi.",
    icoSvg:`<circle cx="4" cy="11" r="2.5" stroke="#0EA5E9" stroke-width="1.5"/><circle cx="18" cy="5" r="2.5" stroke="#00C9A7" stroke-width="1.5"/><circle cx="18" cy="17" r="2.5" stroke="#00C9A7" stroke-width="1.5"/><path d="M6.5 11H11M11 11L15.5 5.8M11 11L15.5 16.2" stroke="#0EA5E9" stroke-width="1.2" stroke-linecap="round"/>`,icoBg:"rgba(14,165,233,.1)",icoBd:"rgba(14,165,233,.2)",ctaBg:"linear-gradient(135deg,#0EA5E9,#00C9A7)",
    pains:[["Dữ liệu nằm rải rác 5–8 phần mềm","MISA kế toán, Excel quản lý, Zalo giao tiếp — không cái nào liên thông","Tất cả tự đổ về một nơi — realtime","Không nhập tay, không copy paste."],["Muốn dùng NexBuild nhưng ngại đổi toàn bộ","Đã quen MISA, đã có dữ liệu lịch sử — thay đổi hết gây xáo trộn","Giữ nguyên phần mềm cũ — NexBuild tự kết nối vào","Không thay thói quen. Không mất dữ liệu lịch sử."]],results:[["🔗","Mọi phần mềm liên thông","MISA, Zalo, Google, Slack"],["⏱️","Tiết kiệm giờ nhập tay mỗi ngày","Không copy paste, không nhập lại"],["📊","Báo cáo tổng hợp tức thì","Mở app → thấy ngay"]]},
  "m11":{name:"NexAccounting",file:"nexaccounting-app.html",model:"Kế toán · MISA Integration",hook:"Sổ sách tự ghi khi có giao dịch — kế toán chỉ cần mở ra xem",desc:"Nhà thầu đang quản lý tài chính bằng Excel và ghi chép tay. Cuối tháng mất cả tuần đối soát — và vẫn hay sai.",
    icoSvg:`<rect x="3" y="3" width="16" height="16" rx="3" stroke="#22C55E" stroke-width="1.5"/><path d="M7 11H15M7 7H15M7 15H11" stroke="#22C55E" stroke-width="1.2" stroke-linecap="round"/>`,icoBg:"rgba(34,197,94,.1)",icoBd:"rgba(34,197,94,.2)",ctaBg:"linear-gradient(135deg,#22C55E,#0EA5E9)",
    pains:[["Cuối tháng mất cả tuần ngồi đối soát số liệu","Tiền rải ở nhiều chỗ — tổng hợp mệt mỏi và hay sai","Mọi giao dịch ghi sổ ngay khi phát sinh — không nhập tay","Đặt thợ → ghi tự động. Mua vật liệu → vào kho. Cuối tháng chỉ cần xem."],["Không biết dự án nào lời, dự án nào lỗ","Tiền trộn lẫn nhiều dự án — đến lúc quyết toán mới biết lỗ mấy tháng","Lãi lỗ từng dự án cập nhật realtime","Biết để điều chỉnh kịp thời. Không chờ đến quyết toán."]],results:[["📊","Biết rõ tài chính mọi lúc","Lãi lỗ dự án realtime"],["⏱️","Quyết toán 5 phút","Thay vì 3–5 ngày thủ công"],["🔗","MISA tự cập nhật","Kế toán mở ra là thấy đủ"]]},
};

// ── ECOSYSTEM PANEL ──
let currentModule = null;
function openEco(id){
  const d = ECO_DATA[id];
  if(!d) return;
  currentModule = d;
  document.querySelectorAll(".mc").forEach(c=>c.classList.remove("eco-active"));
  document.getElementById("card-"+id)?.classList.add("eco-active");
  document.getElementById("ecoName").textContent = d.name;
  document.getElementById("ecoModel").textContent = d.model;
  document.getElementById("ecoHook").textContent = d.hook;
  document.getElementById("ecoDesc").textContent = d.desc;
  document.getElementById("ecoIco").style.cssText = `background:${d.icoBg};border:1px solid ${d.icoBd}`;
  document.getElementById("ecoIco").innerHTML = `<svg viewBox="0 0 22 22" fill="none" width="28" height="28">${d.icoSvg}</svg>`;
  // Pains
  const painEl = document.getElementById("ecoPain");
  painEl.innerHTML = d.pains.map(p=>`
    <div class="ep">
      <div class="ep-before">TRƯỚC ĐÂY</div>
      <div class="ep-q">${p[0]}</div>
      <div style="font-size:11px;color:var(--text3);margin-bottom:8px;line-height:1.4">${p[1]}</div>
      <div class="ep-after">VỚI NEXBUILD</div>
      <div class="ep-q" style="color:var(--c1)">${p[2]}</div>
      <div class="ep-a">${p[3]}</div>
    </div>`).join("");
  // Results
  document.getElementById("ecoResults").innerHTML = d.results.map(r=>`
    <div class="er">
      <div class="er-ico">${r[0]}</div>
      <div class="er-title">${r[1]}</div>
      <div class="er-kpi">${r[2]}</div>
    </div>`).join("");
  document.getElementById("ecoOverlay").classList.add("open");
  document.getElementById("ecoPanel").classList.add("open");
  document.getElementById("ecoBtn1").style.background = d.ctaBg;
}

function closeEco(){
  document.getElementById("ecoOverlay").classList.remove("open");
  document.getElementById("ecoPanel").classList.remove("open");
  document.querySelectorAll(".mc").forEach(c=>c.classList.remove("eco-active"));
}

function openModule(){
  if(currentModule) window.open(currentModule.file,"_blank");
}

// ── SCROLL + HEADER ──
function goTo(id){document.querySelector(id)?.scrollIntoView({behavior:"smooth"})}
window.addEventListener("scroll",()=>{
  document.getElementById("hdr").classList.toggle("scrolled",window.scrollY>60);
});

// ── COUNTER ANIMATION ──
function animCount(id,target,suffix="",dur=2200){
  const el=document.getElementById(id); if(!el)return;
  const start=performance.now();
  const run=now=>{const p=Math.min((now-start)/dur,1),e=1-Math.pow(1-p,3);
    el.textContent=Math.floor(e*target).toLocaleString("vi")+suffix;
    if(p<1)requestAnimationFrame(run);};
  requestAnimationFrame(run);
}
window.addEventListener("load",()=>{
  setTimeout(()=>{
    animCount("s1",50234,"");animCount("s2",200,"+");
    animCount("s3",1847,"");animCount("s4",128493,"");animCount("s5",4280,"");
  },500);
});

// ── THEME (hub-specific override — uses #themeIco SVG element) ──
let isDark = true;
function toggleTheme(){
  isDark = !isDark;
  document.documentElement.setAttribute("data-theme", isDark?"dark":"light");
  const ico = document.getElementById("themeIco");
  if(isDark){
    ico.innerHTML = `<path d="M6.5 1V2M6.5 11V12M12 6.5H11M2 6.5H1M10.2 2.8L9.5 3.5M3.5 9.5L2.8 10.2M10.2 10.2L9.5 9.5M3.5 3.5L2.8 2.8" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/><circle cx="6.5" cy="6.5" r="2.5" stroke="currentColor" stroke-width="1.1"/>`;
  } else {
    ico.innerHTML = `<path d="M11 1.5C6.3 1.5 2.5 5.3 2.5 10C2.5 14.7 6.3 18.5 11 18.5C15.7 18.5 19.5 14.7 19.5 10C19.5 5.3 15.7 1.5 11 1.5Z" stroke="currentColor" stroke-width="1.1"/>`;
  }
}

// ── LANGUAGE ──
const LANGS = [
  ["VI","Tiếng Việt"],["EN","English"],["ZH","中文"],["JA","日本語"],["KO","한국어"],
  ["TH","ภาษาไทย"],["ID","Bahasa Indonesia"],["MS","Bahasa Melayu"],["FR","Français"],
  ["DE","Deutsch"],["ES","Español"],["PT","Português"],["IT","Italiano"],["RU","Русский"],
  ["AR","العربية"],["HI","हिन्दी"],["BN","বাংলা"],["UR","اردو"],["FA","فارسی"],
  ["TR","Türkçe"],["PL","Polski"],["NL","Nederlands"],["SV","Svenska"],["NO","Norsk"],
  ["DA","Dansk"],["FI","Suomi"],["CS","Čeština"],["SK","Slovenčina"],["HU","Magyar"],
  ["RO","Română"],["UK","Українська"],["BG","Български"],["HR","Hrvatski"],["SR","Српски"],
  ["EL","Ελληνικά"],["HE","עברית"],["SW","Kiswahili"],["VI","Việt"],
];
let langOpen = false;
const langMenu = document.getElementById("langMenu");
LANGS.forEach(([code,name],i)=>{
  const d = document.createElement("div");
  d.className = "lang-opt"+(code==="VI"&&i===0?" on":"");
  d.textContent = `${code} ${name}`;
  d.onclick = ()=>{
    document.getElementById("langLabel").textContent = code;
    document.querySelectorAll(".lang-opt").forEach(x=>x.classList.remove("on"));
    d.classList.add("on");
    langMenu.classList.remove("open");
    langOpen = false;
    toast("Ngôn ngữ: "+name);
  };
  langMenu.appendChild(d);
});

function toggleLang(){
  langOpen = !langOpen;
  langMenu.classList.toggle("open", langOpen);
}

document.addEventListener("click", e=>{
  if(!e.target.closest(".lang-wrap")) { langMenu.classList.remove("open"); langOpen=false; }
});

function openMarketplace(){
  window.open('nexbuild-marketplace.html','_blank');
}
function _openMarketplaceEco(){
  // Đóng drawer nếu đang mở
  document.getElementById('ecoDrawer').classList.remove('open');
  document.getElementById('ecoDrawerOverlay').classList.remove('open');
  // Mở eco section
  const section = document.getElementById("ecoFullSection");
  section.classList.add("open");
  document.body.style.overflow = "hidden";
  // Ẩn folder grid
  document.getElementById("ecoFolderGrid").style.display = "none";
  // Ẩn tất cả detail pages
  document.querySelectorAll(".eco-detail").forEach(d=>{d.classList.remove("open");d.style.display="";});
  // Hiện marketplace
  const mkt = document.getElementById("ecoDetail-marketplace");
  if(mkt){ mkt.classList.add("open"); }
  // Update header
  document.getElementById("ecoSectionTitle").textContent = "NexMarket — Chợ xây dựng thông minh";
  document.getElementById("ecoBackBtn").onclick = backToFolders;
  section.scrollTo(0,0);
}

// ── ECO DRAWER ──
function openEcoDrawer(){
  document.getElementById('ecoDrawer').classList.add('open');
  document.getElementById('ecoDrawerOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeEcoDrawer(){
  document.getElementById('ecoDrawer').classList.remove('open');
  document.getElementById('ecoDrawerOverlay').classList.remove('open');
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}
function drawerOpenDetail(pid){
  closeEcoDrawer();
  openEcoSection();
  setTimeout(()=>openEcoDetail(pid),50);
}

// ── ECOSYSTEM FULL SECTION ──
const ECO_MODULE_META = {};
ECO_MODULE_META["design"] = {name:"NexDesign AI",tag:"AI Thiết kế",num:"01",color:"#00C9A7",grad:"linear-gradient(135deg,#00C9A7,#0EA5E9)"};
ECO_MODULE_META["talent"] = {name:"NexTalent",tag:"Lao động",num:"02",color:"#0EA5E9",grad:"linear-gradient(135deg,#0EA5E9,#6366F1)"};
ECO_MODULE_META["supply"] = {name:"NexSupply",tag:"Vật liệu B2B",num:"03",color:"#F59E0B",grad:"linear-gradient(135deg,#F59E0B,#FB923C)"};
ECO_MODULE_META["erp"] = {name:"NexERP",tag:"Quản lý dự án",num:"04",color:"#6366F1",grad:"linear-gradient(135deg,#6366F1,#0EA5E9)"};
ECO_MODULE_META["media"] = {name:"NexMedia",tag:"Quảng cáo B2B",num:"05",color:"#A855F7",grad:"linear-gradient(135deg,#A855F7,#6366F1)"};
ECO_MODULE_META["finance2"] = {name:"NexFinance",tag:"Tài chính",num:"06",color:"#22C55E",grad:"linear-gradient(135deg,#22C55E,#00C9A7)"};
ECO_MODULE_META["affiliates"] = {name:"NexAffiliates",tag:"Hoa hồng",num:"07",color:"#FB923C",grad:"linear-gradient(135deg,#FB923C,#F59E0B)"};
ECO_MODULE_META["academy"] = {name:"NexAcademy",tag:"Đào tạo",num:"08",color:"#6366F1",grad:"linear-gradient(135deg,#6366F1,#A855F7)"};
ECO_MODULE_META["nexagent"] = {name:"NexAgent AI",tag:"Tự động AI",num:"09",color:"#6366F1",grad:"linear-gradient(135deg,#6366F1,#A855F7)"};
ECO_MODULE_META["connect"] = {name:"NexConnect",tag:"Tích hợp",num:"10",color:"#0EA5E9",grad:"linear-gradient(135deg,#0EA5E9,#00C9A7)"};
ECO_MODULE_META["accounting"] = {name:"NexAccounting",tag:"Kế toán",num:"11",color:"#22C55E",grad:"linear-gradient(135deg,#22C55E,#0EA5E9)"};

function closeEcoSection(){
  document.getElementById("ecoFullSection").classList.remove("open");
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

function openEcoSection(){
  document.getElementById("ecoFullSection").classList.add("open");
  document.getElementById("ecoFolderGrid").style.display = "block";
  document.querySelectorAll(".eco-detail").forEach(d=>d.classList.remove("open"));
  document.getElementById("ecoSectionTitle").textContent = "12 Hệ sinh thái NexBuild";
  document.getElementById("ecoBackBtn").onclick = closeEcoSection;
  document.body.style.overflow = "hidden";
}

function openEcoDetail(pid){
  const m = ECO_MODULE_META[pid];
  if(!m) return;
  document.getElementById("ecoFolderGrid").style.display = "none";
  document.querySelectorAll(".eco-detail").forEach(d=>d.classList.remove("open"));
  const detail = document.getElementById("ecoDetail-"+pid);
  if(detail) detail.classList.add("open");
  document.getElementById("ecoSectionTitle").textContent = m.name+" — "+m.tag;
  document.getElementById("ecoBackBtn").onclick = backToFolders;
  document.getElementById("ecoFullSection").scrollTo(0,0);
}

function backToFolders(){
  document.querySelectorAll(".eco-detail").forEach(d=>d.classList.remove("open"));
  document.getElementById("ecoFolderGrid").style.display = "block";
  document.getElementById("ecoSectionTitle").textContent = "11 Hệ sinh thái NexBuild";
  document.getElementById("ecoBackBtn").onclick = closeEcoSection;
  document.getElementById("ecoFullSection").scrollTo(0,0);
}

ECO_MODULE_META["marketplace"] = {name:"NexMarket & Community",tag:"Marketplace · Diễn đàn",num:"12",color:"#C9A84C",grad:"linear-gradient(135deg,#C9A84C,#F59E0B,#0EA5E9)"};

function switchMktMainTab(btn, tabId) {
  document.querySelectorAll('.mkt-main-btn').forEach(b => {
    b.style.background = 'var(--card-bg)';
    b.style.borderColor = 'var(--card-bdr)';
  });
  btn.style.borderColor = 'rgba(201,168,76,.35)';
  btn.style.background = 'linear-gradient(135deg,rgba(201,168,76,.1),rgba(245,158,11,.06))';
  document.querySelectorAll('.mkt-main-tab').forEach(t => t.style.display = 'none');
  const el = document.getElementById(tabId);
  if(el) el.style.display = 'block';
}

function switchMktTab(btn, tabId) {
  // Reset all tab buttons
  document.querySelectorAll('.mkt-tab-btn').forEach(b => {
    b.style.background = 'var(--card-bg)';
    b.style.border = '1px solid var(--card-bdr)';
    b.style.color = 'var(--text2)';
  });
  // Activate clicked
  btn.style.background = 'rgba(201,168,76,.12)';
  btn.style.border = '1px solid rgba(201,168,76,.3)';
  btn.style.color = '#C9A84C';
  // Show/hide tabs
  document.querySelectorAll('.mkt-tab').forEach(t => t.style.display = 'none');
  const el = document.getElementById(tabId);
  if(el) el.style.display = 'block';
}

// Override nav link for hệ sinh thái
function openEcoNav(){
  openEcoSection();
}

// ── TOAST (hub-specific — uses #toast DOM element) ──
function toast(msg){
  const t=document.getElementById("toast");
  t.textContent=msg;
  t.style.transform="translateX(-50%) translateY(0)";
  clearTimeout(t._t);
  t._t=setTimeout(()=>{t.style.transform="translateX(-50%) translateY(80px)"},3500);
}

// ── AUTH MODAL (hub-specific — uses hub's own #authModal markup) ──
function openAuthModal(){
  document.getElementById('authModal').style.display='flex';
  setTimeout(()=>document.getElementById('authEmail').focus(),100);
}
function closeAuthModal(){
  document.getElementById('authModal').style.display='none';
}
function switchAuthTab(tab){
  const isLogin=tab==='login';
  document.getElementById('loginForm').style.display=isLogin?'block':'none';
  document.getElementById('regForm').style.display=isLogin?'none':'block';
  document.getElementById('tabLogin').style.borderBottomColor=isLogin?'var(--c1)':'transparent';
  document.getElementById('tabLogin').style.color=isLogin?'var(--c1)':'var(--text3)';
  document.getElementById('tabReg').style.borderBottomColor=isLogin?'transparent':'var(--c1)';
  document.getElementById('tabReg').style.color=isLogin?'var(--text3)':'var(--c1)';
}
function doLogin(){
  const email=document.getElementById('authEmail').value.trim();
  if(!email){toast('Vui lòng nhập email hoặc SĐT');return;}
  closeAuthModal();
  toast('✅ Đăng nhập thành công · Đang vào Marketplace...');
  setTimeout(()=>window.open('nexbuild-marketplace.html','_blank'),900);
}
function doRegister(){
  const email=document.getElementById('regEmail').value.trim();
  const name=document.getElementById('regName').value.trim();
  if(!name||!email){toast('Vui lòng điền đầy đủ thông tin');return;}
  closeAuthModal();
  toast('✅ Đã gửi link xác nhận về '+email+' · Kiểm tra hộp thư!');
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAuthModal();});

function selRole(btn){
  btn.closest('div').querySelectorAll('button').forEach(b=>{
    b.style.borderColor='var(--bdr)';
    b.style.background='transparent';
    b.style.color='var(--text2)';
  });
  btn.style.borderColor='rgba(0,201,167,.3)';
  btn.style.background='rgba(0,201,167,.08)';
  btn.style.color='var(--c1)';
}

// ══════════════════════════════════════════════════════════════
// BLOCK 2 — Admin Layer (was after </html> tag)
// ══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
// NEXBUILD HUB — ADMIN LAYER
// Auth via backend API — NO hardcoded credentials
// ══════════════════════════════════════════════════════

// Admin access uses common.js AUTH — check role from JWT
(function(){
  if(typeof AUTH !== 'undefined'){
    AUTH.on('auth:login', function(user){
      if(user && user.role === 'admin') adminEnter();
    });
    AUTH.on('auth:ready', function(user){
      if(user && user.role === 'admin') adminEnter();
    });
  }
})();

function adminEnter(){
  document.body.style.paddingTop = '40px';
  document.getElementById('adminBar').classList.add('on');
  document.getElementById('adPanel').classList.add('on');
  apGoPage('hub-overview');
}

function adminLogout(){
  document.body.style.paddingTop = '';
  document.getElementById('adminBar').classList.remove('on');
  document.getElementById('adPanel').classList.remove('on');
}

function apNav(btn, pageId){
  document.querySelectorAll('.ab-btn').forEach(function(b){ b.classList.remove('on'); });
  btn.classList.add('on');
  apGoPage(pageId);
}

function apGoPage(id){
  var page = AP_PAGES[id];
  if(!page) return;
  document.getElementById('adMain').innerHTML = page.html;
  document.getElementById('adBread').innerHTML = page.bread;
  document.querySelectorAll('.aps-item').forEach(function(el){ el.classList.remove('on'); });
  var nav = document.getElementById('sbn-'+id);
  if(nav) nav.classList.add('on');
}

// ══ PAGE DATA ══
var AP_PAGES = {};

AP_PAGES['hub-overview'] = {
  bread: '<strong>Dashboard</strong> · Hub Layer',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:4px">⚡ Hub Admin Dashboard</div>'+
    '<div style="font-size:11px;color:#3A4F6A;margin-bottom:18px">Landing page · Marketing · User acquisition</div>'+
    '<div class="ag4" style="margin-bottom:16px">'+
    kpiCard('👥 Visitors hôm nay','2,847','↑ +12% hôm qua','#00C9A7')+
    kpiCard('📝 Signups hôm nay','124','↑ +34%','#22C55E')+
    kpiCard('💌 Email captured','3,291','Tổng toàn thời gian','#0EA5E9')+
    kpiCard('💰 Angel Round','32%','$2.1M / $6.5M','#C9A84C')+
    '</div>'+
    alertBox('or','⚠️','3 hạng mục cần xử lý: Hub section text cũ · 284 emails chưa gửi welcome · SEO title quá dài')+
    '<div class="ag2">'+
    '<div class="acard">'+
    '<div class="acard-t">📈 Traffic 7 ngày</div>'+
    trafficBar(['T2','T3','T4','T5','T6','T7','CN'],['1,842','2,104','1,987','2,341','2,847','1,234','892'])+
    '</div>'+
    '<div class="acard">'+
    '<div class="acard-t">🌿 12 Modules — Status</div>'+
    moduleStatus()+
    '</div></div></div>'
};

AP_PAGES['hub-content'] = {
  bread: '🖊️ Nội dung › <strong>Hero &amp; CTA</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:18px">🖊️ Hero Section &amp; CTA</div>'+
    '<div class="ag2" style="margin-bottom:14px">'+
    '<div class="acard">'+
    '<div class="acard-t">📝 Headline</div>'+
    inputField('Line 1 (trắng)','Xây dựng thông minh')+
    inputField('Line 2 (gradient màu)','bắt đầu từ đây')+
    textareaField('Subtitle','Nền tảng kết nối 5 lớp hệ sinh thái xây dựng — thợ, vật liệu, thiết kế AI, quản lý và tài chính')+
    '<button class="abtn abtn-t abtn-sm" onclick="toast(\'✅ Lưu Hero content · Preview đang cập nhật\')">💾 Lưu &amp; Preview</button>'+
    '</div>'+
    '<div class="acard">'+
    '<div class="acard-t">🔘 CTA Buttons</div>'+
    ctaRow('CTA chính','Bắt đầu miễn phí','#signup')+
    ctaRow('CTA phụ','Xem Marketplace','nexbuild-marketplace.html')+
    ctaRow('Nhà đầu tư','Dành cho nhà đầu tư','mailto:invest@nexbuild.holdings')+
    '<button class="abtn abtn-t abtn-sm" style="margin-top:6px" onclick="toast(\'✅ Lưu CTA config\')">💾 Lưu</button>'+
    '</div></div>'+
    '<div class="acard">'+
    '<div class="acard-t">📊 Metrics Banner (4 chỉ số)</div>'+
    '<div class="ag4">'+
    metricRow('2,847+','Users đang dùng')+
    metricRow('892M','Giá trị Escrow')+
    metricRow('12','Hệ sinh thái')+
    metricRow('98%','Hài lòng')+
    '</div>'+
    '<button class="abtn abtn-t abtn-sm" style="margin-top:10px" onclick="toast(\'✅ Cập nhật metrics banner\')">💾 Lưu</button>'+
    '</div></div>'
};

AP_PAGES['hub-eco'] = {
  bread: '🌿 Nội dung › <strong>Ecosystem Modules</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:6px">🌿 Ecosystem Module Manager</div>'+
    '<div style="font-size:11px;color:#3A4F6A;margin-bottom:16px">Thứ tự hiển thị · Mô tả · Trạng thái live từng module</div>'+
    ecoModules()+
    '<div style="display:flex;gap:8px;margin-top:12px">'+
    '<button class="abtn abtn-t abtn-sm" onclick="toast(\'✅ Lưu thứ tự ecosystem modules\')">💾 Lưu thứ tự</button>'+
    '<button class="abtn abtn-g abtn-sm" onclick="toast(\'+ Module mới đang phát triển\')">+ Module mới</button>'+
    '</div></div>'
};

AP_PAGES['hub-seo'] = {
  bread: '🔍 Marketing › <strong>SEO Config</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:18px">🔍 SEO Configuration</div>'+
    seoBlock('Trang chủ (/)','NexBuild Holdings — Hệ sinh thái xây dựng thông minh Việt Nam','Nền tảng xây dựng all-in-one: vật liệu D2C, tìm thợ, thiết kế AI, quản lý dự án và Escrow thông minh.','nền tảng xây dựng, tìm thợ hà nội, vật liệu xây dựng trực tuyến')+
    seoBlock('Marketplace (/marketplace)','NexMarket — Chợ vật liệu xây dựng D2C Việt Nam','Mua vật liệu xây dựng trực tiếp từ nhà máy: xi măng, thép, gạch, sơn giá tốt nhất.','mua vật liệu xây dựng, xi măng giá rẻ, thép xây dựng')+
    '<div class="acard">'+
    '<div class="acard-t">⚙️ Technical SEO</div>'+
    techSeoRows()+
    '</div></div>'
};

AP_PAGES['hub-analytics'] = {
  bread: '📈 Marketing › <strong>Analytics</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:18px">📈 Hub Analytics</div>'+
    '<div class="ag4" style="margin-bottom:16px">'+
    kpiCard('Pageviews/ngày','18,420','↑ +24%','#0EA5E9')+
    kpiCard('Unique visitors','2,847','↑ +12%','#22C55E')+
    kpiCard('Avg session','3m 42s','↑ +8%','#00C9A7')+
    kpiCard('Bounce rate','42%','↓ -3%','#F59E0B')+
    '</div>'+
    '<div class="ag2">'+
    trafficSourceCard()+
    topPagesCard()+
    '</div></div>'
};

AP_PAGES['hub-users'] = {
  bread: '👥 Vận hành › <strong>Users &amp; Signups</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:18px">👥 User Management</div>'+
    '<div class="ag4" style="margin-bottom:16px">'+
    kpiCard('Tổng registered','3,291','từ Hub','#0EA5E9')+
    kpiCard('Signups hôm nay','124','↑ +34%','#22C55E')+
    kpiCard('Converted active','42%','Dùng marketplace','#F59E0B')+
    kpiCard('Chờ verify email','284','Gửi reminder','#EF4444')+
    '</div>'+
    userTable()+
    '</div>'
};

AP_PAGES['hub-investors'] = {
  bread: '💼 Vận hành › <strong>Nhà đầu tư</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:18px">💼 Investor Relations</div>'+
    '<div class="ag4" style="margin-bottom:16px">'+
    kpiCard('Angel target','$6.5M','Đang gọi vốn','#C9A84C')+
    kpiCard('Đã commit','$2.1M','32.3%','#22C55E')+
    kpiCard('Investor requests','3','Mới tuần này','#F59E0B')+
    kpiCard('Deck downloads','284','30 ngày qua','#0EA5E9')+
    '</div>'+
    '<div class="ag2">'+
    investorRequests()+
    investorDocs()+
    '</div></div>'
};

AP_PAGES['hub-broadcast'] = {
  bread: '✉️ Marketing › <strong>Email Broadcast</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:18px">✉️ Email Broadcast</div>'+
    '<div class="acard">'+
    '<div class="acard-t">✉️ Tạo campaign mới</div>'+
    '<div class="ag2" style="margin-bottom:10px">'+
    inputField('Subject line','')+
    selectField('Segment',['Tất cả (3,291)','Chủ nhà (1,248)','Nhà thầu (342)','NCC (365)','Chưa active (284)'])+
    '</div>'+
    textareaField('Nội dung','',4)+
    '<div style="display:flex;gap:8px;margin-top:8px">'+
    '<button class="abtn abtn-t abtn-sm" onclick="toast(\'📧 Đang gửi đến 3,291 users...\')">📧 Gửi ngay</button>'+
    '<button class="abtn abtn-g abtn-sm" onclick="toast(\'⏰ Lên lịch gửi\')">⏰ Lên lịch</button>'+
    '<button class="abtn abtn-g abtn-sm" onclick="toast(\'👁 Test email gửi đến admin@nexbuild.holdings\')">👁 Test</button>'+
    '</div></div>'+
    campaignHistory()+
    '</div>'
};

AP_PAGES['hub-press'] = {
  bread: '📰 Nội dung › <strong>Press &amp; Blog</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:18px">📰 Press &amp; Blog</div>'+
    '<div class="acard">'+
    '<div class="acard-t">📋 Bài viết'+
    '<button class="abtn abtn-t abtn-xs" onclick="toast(\'+ Tạo bài viết mới\')">+ Bài mới</button>'+
    '</div>'+
    pressRows()+
    '</div></div>'
};

AP_PAGES['hub-announce'] = {
  bread: '📢 Nội dung › <strong>Thông báo &amp; Banner</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:18px">📢 Announcements &amp; Banners</div>'+
    '<div class="acard">'+
    '<div class="acard-t">🎯 Announcement Bar</div>'+
    '<div style="padding:10px 14px;background:linear-gradient(135deg,rgba(0,201,167,.12),rgba(14,165,233,.08));border:1px solid rgba(0,201,167,.2);border-radius:9px;margin-bottom:10px;font-size:12px;text-align:center;color:#EDF2FF">🎉 Angel Round đang mở — Tham gia cùng chúng tôi xây dựng tương lai ngành xây dựng Việt Nam →</div>'+
    '<div style="display:flex;gap:7px">'+
    '<input class="ai" value="🎉 Angel Round đang mở — Tham gia cùng chúng tôi xây dựng tương lai ngành xây dựng Việt Nam" style="flex:1">'+
    '<button class="abtn abtn-t abtn-xs" onclick="toast(\'✅ Cập nhật announcement bar\')">Lưu</button>'+
    '<button class="abtn abtn-g abtn-xs" onclick="toast(\'🚫 Ẩn announcement bar\')">Ẩn</button>'+
    '</div></div>'+
    announcePopups()+
    '</div>'
};

AP_PAGES['hub-settings'] = {
  bread: '⚙️ Vận hành › <strong>Cài đặt Hub</strong>',
  html: '<div>'+
    '<div style="font-size:18px;font-weight:900;color:#EDF2FF;margin-bottom:18px">⚙️ Cài đặt Hub</div>'+
    '<div class="ag2">'+
    '<div class="acard">'+
    '<div class="acard-t">🌐 General</div>'+
    inputField('Domain chính','nexbuild.holdings')+
    inputField('Email liên hệ','hello@nexbuild.holdings')+
    inputField('Email đầu tư','invest@nexbuild.holdings')+
    inputField('Timezone','Asia/Ho_Chi_Minh (UTC+7)')+
    '<button class="abtn abtn-t abtn-sm" style="margin-top:6px" onclick="toast(\'✅ Lưu cài đặt\')">💾 Lưu</button>'+
    '</div>'+
    '<div class="acard">'+
    '<div class="acard-t">🔧 Feature Flags</div>'+
    featureRows()+
    '</div></div></div>'
};

// ══ HELPER FUNCTIONS ══
function kpiCard(l,v,n,c){
  return '<div class="akpi"><div class="akpi-l">'+l+'</div><div class="akpi-v" style="color:'+c+'">'+v+'</div><div class="akpi-n">'+n+'</div></div>';
}
function alertBox(type,ico,msg){
  var colors={'or':'rgba(251,146,60,.06)/rgba(251,146,60,.18)','r':'rgba(239,68,68,.06)/rgba(239,68,68,.18)','b':'rgba(14,165,233,.06)/rgba(14,165,233,.18)'};
  var c=colors[type]||colors.or; var parts=c.split('/');
  return '<div style="padding:11px 14px;border-radius:10px;font-size:12px;line-height:1.6;margin-bottom:14px;display:flex;gap:10px;background:'+parts[0]+';border:1px solid '+parts[1]+'"><span>'+ico+'</span><span>'+msg+'</span></div>';
}
function inputField(label,val){
  return '<div style="margin-bottom:10px"><label class="al">'+label+'</label><input class="ai" value="'+val+'"></div>';
}
function textareaField(label,val,rows){
  rows=rows||3;
  return '<div style="margin-bottom:10px"><label class="al">'+label+'</label><textarea class="ai" rows="'+rows+'" style="resize:none">'+val+'</textarea></div>';
}
function selectField(label,opts){
  return '<div style="margin-bottom:10px"><label class="al">'+label+'</label><select class="ai" style="appearance:none">'+opts.map(function(o){return '<option>'+o+'</option>';}).join('')+'</select></div>';
}
function ctaRow(label,text,url){
  return '<div style="margin-bottom:10px;padding:10px;background:rgba(255,255,255,.04);border-radius:9px"><div style="font-size:9px;font-weight:700;color:#3A4F6A;margin-bottom:6px;letter-spacing:.08em;text-transform:uppercase">'+label+'</div><div style="display:flex;gap:7px"><input class="ai" value="'+text+'" style="flex:1;font-size:11px;padding:6px 10px"><input class="ai" value="'+url+'" style="flex:1;font-size:11px;padding:6px 10px"></div></div>';
}
function metricRow(v,l){
  return '<div style="display:flex;gap:7px;align-items:center"><input class="ai" value="'+v+'" style="width:80px;text-align:center;font-size:11px;padding:6px 8px"><input class="ai" value="'+l+'" style="flex:1;font-size:11px;padding:6px 8px"></div>';
}
function trafficBar(days,vals){
  var max=parseInt(vals.reduce(function(a,b){return parseInt(a.replace(/,/g,''))>parseInt(b.replace(/,/g,''))?a:b;}).replace(/,/g,''));
  return days.map(function(d,i){
    var pct=Math.round(parseInt(vals[i].replace(/,/g,''))/max*100);
    return '<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:11px"><span style="width:22px;color:#3A4F6A">'+d+'</span><div style="flex:1;height:5px;background:rgba(255,255,255,.06);border-radius:3px"><div style="width:'+pct+'%;height:100%;background:#00C9A7;border-radius:3px"></div></div><span style="font-weight:700;color:#0EA5E9;width:42px;text-align:right">'+vals[i]+'</span></div>';
  }).join('');
}
function moduleStatus(){
  var mods=[['🛒','NexMarket','Live','#22C55E'],['🎨','NexDesign AI','Live','#22C55E'],['👷','NexTalent','Live','#22C55E'],['🏭','NexSupply','Live','#22C55E'],['📊','NexERP','Live','#22C55E'],['💰','NexFinance','Live','#22C55E'],['📣','NexMedia','Beta','#F59E0B'],['🤝','NexAffiliates','Live','#22C55E'],['🎓','NexAcademy','Live','#22C55E'],['🤖','NexAgent','Dev','#FB923C'],['🔗','NexConnect','Beta','#F59E0B'],['📒','NexAccounting','Live','#22C55E']];
  return mods.map(function(m){return '<div style="display:flex;align-items:center;gap:7px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04);font-size:11px;cursor:pointer" onclick="apGoPage(\'hub-eco\')" onmouseover="this.style.background=\'rgba(255,255,255,.03)\'" onmouseout="this.style.background=\'transparent\'"><span style="width:18px;text-align:center">'+m[0]+'</span><span style="flex:1">'+m[1]+'</span><span style="font-size:9px;padding:1px 6px;border-radius:5px;font-weight:700;color:'+m[3]+';background:'+m[3]+'19">'+m[2]+'</span></div>';}).join('');
}
function ecoModules(){
  var mods=[['🛒','NexMarket','Chợ vật liệu xây dựng B2C & B2B trực tiếp từ nhà máy','Live'],['🎨','NexDesign AI','Thiết kế kiến trúc + BOQ tự động bằng AI','Live'],['👷','NexTalent','Tìm thợ kỹ thuật được xác minh, booking và Escrow','Live'],['🏭','NexSupply','Kho vật liệu B2B, tín dụng 60 ngày cho nhà thầu','Live'],['📊','NexERP','Quản lý dự án xây dựng SaaS all-in-one','Live'],['💰','NexFinance','Escrow thông minh, tín dụng B2B và thanh toán tự động','Live'],['📣','NexMedia','Quảng cáo B2B ngành xây dựng chính xác theo phân khúc','Beta'],['🤝','NexAffiliates','Chương trình affiliate hoa hồng cao cho người giới thiệu','Live'],['🎓','NexAcademy','Đào tạo nghề xây dựng + chứng chỉ blockchain','Live'],['🤖','NexAgent','AI Agents tự động hóa quy trình cho toàn hệ sinh thái','Dev'],['🔗','NexConnect','API Platform kết nối đối tác và tích hợp third-party','Beta'],['📒','NexAccounting','Kế toán xây dựng tích hợp MISA, VAT & hóa đơn điện tử','Live']];
  return mods.map(function(m,i){return '<div style="display:flex;align-items:center;gap:11px;padding:10px 14px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;margin-bottom:7px"><span style="font-size:20px;width:28px;text-align:center">'+m[0]+'</span><div style="flex:1"><div style="font-weight:700;font-size:12px;margin-bottom:4px">'+m[1]+'</div><input class="ai" value="'+m[2]+'" style="font-size:11px;padding:5px 9px"></div><span style="padding:3px 8px;border-radius:6px;font-size:9px;font-weight:700;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.2);color:#22C55E;flex-shrink:0">'+m[3]+'</span><div style="display:flex;gap:4px;flex-shrink:0"><button onclick="toast(\'↑ '+m[1]+'\')" style="width:24px;height:24px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:transparent;color:#3A4F6A;cursor:pointer">↑</button><button onclick="toast(\'↓ '+m[1]+'\')" style="width:24px;height:24px;border-radius:6px;border:1px solid rgba(255,255,255,.1);background:transparent;color:#3A4F6A;cursor:pointer">↓</button></div></div>';}).join('');
}
function seoBlock(page,title,desc,kw){
  var tlen=title.length; var dlen=desc.length;
  return '<div class="acard"><div class="acard-t" style="color:#0EA5E9">📄 '+page+'</div>'+
    '<div style="margin-bottom:8px"><label class="al">Title tag <span style="color:'+(tlen>60?'#EF4444':'#22C55E')+'">('+tlen+'/60 chars)</span></label><input class="ai" value="'+title+'"></div>'+
    '<div style="margin-bottom:8px"><label class="al">Meta description <span style="color:'+(dlen>160?'#EF4444':'#22C55E')+'">('+dlen+'/160 chars)</span></label><textarea class="ai" rows="2" style="resize:none">'+desc+'</textarea></div>'+
    '<div style="margin-bottom:10px"><label class="al">Keywords</label><input class="ai" value="'+kw+'"></div>'+
    '<button class="abtn abtn-t abtn-xs" onclick="toast(\'✅ Lưu SEO: '+page+'\')">💾 Lưu</button>'+
    '</div>';
}
function techSeoRows(){
  var rows=[['Sitemap tự động','✅ Active','Cập nhật mỗi 24h'],['Schema Markup','✅ Organization + WebSite','Structured data OK'],['OG Tags (Facebook/LinkedIn)','✅ Đầy đủ','Share preview OK'],['Canonical URLs','✅ Configured','No duplicate content'],['Robots.txt','/admin → noindex','Crawl rules OK']];
  return rows.map(function(r){return '<div class="arow"><span style="flex:1">'+r[0]+'</span><span style="color:#22C55E">'+r[1]+'</span><span style="color:#3A4F6A">'+r[2]+'</span></div>';}).join('');
}
function trafficSourceCard(){
  return '<div class="acard"><div class="acard-t">🌍 Traffic nguồn</div>'+
    [['Organic Search','38%',38,'#22C55E'],['Direct','28%',28,'#00C9A7'],['Social Media','18%',18,'#0EA5E9'],['Referral','11%',11,'#6366F1'],['Email','5%',5,'#C9A84C']].map(function(s){
    return '<div style="margin-bottom:9px"><div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px"><span>'+s[0]+'</span><span style="font-weight:700;color:'+s[3]+'">'+s[1]+'</span></div><div class="prog"><div class="pf" style="width:'+s[2]+'%;background:'+s[3]+'"></div></div></div>';
  }).join('')+'</div>';
}
function topPagesCard(){
  return '<div class="acard"><div class="acard-t">📄 Top pages</div>'+
    [['/ Trang chủ','8,421'],['/#ecosystem','3,284'],['/#pricing','2,841'],['/#how','1,924'],['/#about','1,284']].map(function(p){
    return '<div class="arow"><span style="color:#0EA5E9;flex:1">'+p[0]+'</span><span style="color:#3A4F6A">'+p[1]+' views</span></div>';
  }).join('')+'</div>';
}
function userTable(){
  var users=[['Nguyễn Thị Mai','mai@gmail.com','Chủ nhà','2 phút','Chờ verify','#F59E0B'],['Trần Văn Hùng','hung@xd.vn','Nhà thầu','15 phút','Đã verify','#22C55E'],['CT Phú Quý','phuquy@ct.vn','Nhà thầu','1 giờ','Đã verify','#22C55E'],['Gạch Đồng Tâm','sales@dt.vn','NCC','3 giờ','Đã verify','#22C55E'],['Lê Minh Khôi','khoi@gmail.com','Thợ','2 giờ','KYC pending','#FB923C']];
  return '<div class="acard"><div class="acard-t">📋 Signups mới nhất<button class="abtn abtn-t abtn-xs" onclick="toast(\'⬇ Export CSV signups\')">⬇ Export</button></div>'+
    '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:12px">'+
    '<thead><tr>'+['Tên','Email','Role','Đăng ký','Status'].map(function(h){return '<th style="text-align:left;padding:7px 12px;font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:#3A4F6A;border-bottom:1px solid rgba(255,255,255,.07)">'+h+'</th>';}).join('')+'</tr></thead>'+
    '<tbody>'+users.map(function(u){return '<tr><td style="padding:8px 12px;font-weight:600">'+u[0]+'</td><td style="padding:8px 12px;color:#3A4F6A;font-family:\'Noto Sans Mono\',monospace;font-size:10px">'+u[1]+'</td><td style="padding:8px 12px"><span class="apill ap-b">'+u[2]+'</span></td><td style="padding:8px 12px;color:#3A4F6A">'+u[3]+' trước</td><td style="padding:8px 12px"><span style="padding:2px 8px;border-radius:6px;font-size:9px;font-weight:700;background:'+u[5]+'19;border:1px solid '+u[5]+'44;color:'+u[5]+'">'+u[4]+'</span></td></tr>';}).join('')+
    '</tbody></table></div></div>';
}
function investorRequests(){
  return '<div class="acard" style="background:rgba(201,168,76,.05);border-color:rgba(201,168,76,.18)">'+
    '<div class="acard-t" style="color:#C9A84C">📋 Investor Requests mới</div>'+
    [['Mekong Capital','invest@mekong.vc','$500K','Quan tâm Series A roadmap','2h trước'],['Angel Nguyễn Minh','nguyen@angel.vn','$50K','Founder background info','1 ngày trước'],['Vietnam Investment Group','vig@vig.com','$1M','Due diligence package','3 ngày trước']].map(function(inv){
    return '<div style="padding:12px;background:rgba(255,255,255,.04);border-radius:9px;margin-bottom:8px">'+
      '<div style="font-weight:700;font-size:12px;margin-bottom:2px">'+inv[0]+'</div>'+
      '<div style="font-size:10px;color:#3A4F6A;margin-bottom:5px">'+inv[1]+' · '+inv[4]+'</div>'+
      '<div style="font-size:11px;color:#8898B8;margin-bottom:8px">'+inv[2]+' · '+inv[3]+'</div>'+
      '<div style="display:flex;gap:6px">'+
      '<button class="abtn abtn-gold abtn-xs" onclick="toast(\'📧 Reply: '+inv[0]+'\')">📧 Reply</button>'+
      '<button class="abtn abtn-g abtn-xs" onclick="toast(\'📄 Gửi deck: '+inv[0]+'\')">📄 Deck</button>'+
      '</div></div>';
    }).join('')+'</div>';
}
function investorDocs(){
  return '<div style="display:flex;flex-direction:column;gap:12px">'+
    '<div class="acard">'+
    '<div class="acard-t">📊 Angel Round Progress</div>'+
    '<div style="height:10px;background:rgba(255,255,255,.06);border-radius:5px;margin-bottom:6px"><div style="width:32%;height:100%;background:linear-gradient(90deg,#C9A84C,#F59E0B);border-radius:5px"></div></div>'+
    '<div style="display:flex;justify-content:space-between;font-size:11px;color:#3A4F6A;margin-bottom:12px"><span>$2.1M committed</span><span>Target: $6.5M</span></div>'+
    [['Q1 2025','$2.1M committed → 32%'],['Q2 2025','Target $2.0M thêm → 63%'],['Q3 2025','Close round → 100%']].map(function(q){return '<div style="font-size:11px;padding:7px 10px;background:rgba(255,255,255,.04);border-radius:8px;margin-bottom:5px;display:flex;justify-content:space-between"><strong>'+q[0]+'</strong><span style="color:#C9A84C">'+q[1]+'</span></div>';}).join('')+
    '</div>'+
    '<div class="acard">'+
    '<div class="acard-t">📄 Materials<button class="abtn abtn-g abtn-xs" onclick="toast(\'+ Upload tài liệu\')">+ Upload</button></div>'+
    [['Pitch Deck Q2 2025','PDF 24 slides','284 dl'],['Financial Model','Excel 5 tabs','142 dl'],['Executive Summary','PDF 2 pages','892 dl'],['Data Room (NDA req.)','Notion link','28 access']].map(function(d){return '<div class="arow" style="cursor:pointer" onclick="toast(\'Quản lý: '+d[0]+'\')"><span style="flex:1;font-weight:600">'+d[0]+'<span style="font-weight:400;color:#3A4F6A"> · '+d[1]+'</span></span><span style="color:#3A4F6A">'+d[2]+'</span></div>';}).join('')+
    '</div></div>';
}
function campaignHistory(){
  return '<div class="acard"><div class="acard-t">📋 Campaigns gần đây</div>'+
    [['Chào mừng Q2 2025','3,291','98.2%','42%','8.4%'],['Flash Sale Tết','1,590','100%','61%','18.2%'],['Update tính năng','2,847','98.8%','38%','6.1%']].map(function(c){
    return '<div style="padding:10px;background:rgba(255,255,255,.04);border-radius:9px;margin-bottom:7px">'+
      '<div style="font-weight:700;font-size:12px;margin-bottom:5px">'+c[0]+'</div>'+
      '<div style="display:flex;gap:14px;font-size:11px;color:#3A4F6A">'+
      '<span>📤 Sent: <strong style="color:#EDF2FF">'+c[1]+'</strong></span>'+
      '<span style="color:#22C55E">✓ '+c[2]+'</span>'+
      '<span style="color:#0EA5E9">Open: '+c[3]+'</span>'+
      '<span style="color:#C9A84C">CTR: '+c[4]+'</span>'+
      '</div></div>';
  }).join('')+'</div>';
}
function pressRows(){
  return [['NexBuild nhận đầu tư Angel Round','Press','2,841 views','Published','#22C55E'],['5 xu hướng xây dựng thông minh 2025','Blog','4,120 views','Published','#22C55E'],['Hướng dẫn đặt thợ qua NexTalent','Blog','-','Draft','#F59E0B'],['Case study CT Hoàng Gia tiết kiệm 30%','Blog','-','Draft','#F59E0B']].map(function(a){
    return '<div style="display:flex;align-items:center;gap:10px;padding:10px;background:rgba(255,255,255,.04);border-radius:9px;margin-bottom:7px;font-size:12px">'+
      '<div style="flex:1"><strong>'+a[0]+'</strong><div style="font-size:11px;color:#3A4F6A">'+a[1]+' · '+a[2]+'</div></div>'+
      '<span style="padding:2px 8px;border-radius:6px;font-size:9px;font-weight:700;background:'+a[4]+'19;border:1px solid '+a[4]+'44;color:'+a[4]+'">'+a[3]+'</span>'+
      '<button class="abtn abtn-g abtn-xs" onclick="toast(\'Edit: '+a[0]+'\')">✏️</button>'+
      '</div>';
  }).join('');
}
function announcePopups(){
  return '<div class="acard"><div class="acard-t">📋 Popup Announcements</div>'+
    [['Angel Round Open','Gọi vốn Q1/2025','Đang hiển thị','#22C55E'],['Maintenance 22/01','Bảo trì 2-4AM','Đã kết thúc','#3A4F6A'],['Tết Holiday','Nghỉ 26/01-05/02','Draft','#F59E0B']].map(function(a){
    return '<div style="display:flex;align-items:center;gap:10px;padding:10px;background:rgba(255,255,255,.04);border-radius:9px;margin-bottom:7px;font-size:12px">'+
      '<div style="flex:1"><strong>'+a[0]+'</strong><div style="font-size:11px;color:#3A4F6A">'+a[1]+'</div></div>'+
      '<span style="padding:2px 8px;border-radius:6px;font-size:9px;font-weight:700;color:'+a[3]+';background:'+a[3]+'19;border:1px solid '+a[3]+'44">'+a[2]+'</span>'+
      '<button class="abtn abtn-g abtn-xs" onclick="toast(\'Edit: '+a[0]+'\')">✏️</button>'+
      '</div>';
  }).join('')+
  '<button class="abtn abtn-g abtn-sm" style="margin-top:6px" onclick="toast(\'+ Tạo thông báo popup mới\')">+ Thêm popup</button>'+
  '</div>';
}
function featureRows(){
  return [['Announcement bar','on','#22C55E'],['Maintenance mode','off','#3A4F6A'],['Angel round banner','on','#22C55E'],['Dark mode default','on','#22C55E'],['Multi-language vi+en','on','#22C55E']].map(function(f){
    return '<div class="arow">'+
      '<span style="flex:1">'+f[0]+'</span>'+
      '<span style="font-weight:700;color:'+f[2]+'">'+f[1]+'</span>'+
      '<button class="abtn abtn-g abtn-xs" onclick="toast(\'Toggle: '+f[0]+'\')">Toggle</button>'+
      '</div>';
  }).join('');
}

// ══════════════════════════════════════════════════════════════
// BLOCK 3 — Hub API Bootstrap (was after common.js script tag)
// ══════════════════════════════════════════════════════════════

// ── Hub API Bootstrap ──
AUTH.on('auth:ready', function() {
  document.querySelectorAll('.btn-cta').forEach(function(btn) {
    if (btn.textContent.includes('Đăng nhập') || btn.textContent.includes('Bắt đầu')) {
      if (AUTH.isLoggedIn) {
        btn.textContent = '📊 Dashboard';
        btn.onclick = function() { location.href = '/dashboard'; };
      } else {
        btn.onclick = function() { showAuthModal(function() { location.href = '/dashboard'; }); };
      }
    }
  });
});

// Load platform stats from API
(async function() {
  try {
    const stats = await apiFetch('/stats/platform');
    if (stats && stats.ok !== false) {
      document.querySelectorAll('[data-stat]').forEach(function(el) {
        const key = el.getAttribute('data-stat');
        if (stats[key] !== undefined) el.textContent = typeof stats[key] === 'number' ? stats[key].toLocaleString('vi-VN') : stats[key];
      });
    }
  } catch(e) {}
})();
