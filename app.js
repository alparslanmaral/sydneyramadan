// Sydney timezone-based utilities
const TZ = "Australia/Sydney";

// Full data from provided image (20.02.2026 → 22.03.2026)
const TIMES = [
  { date: "2026-02-20", hijri: "2 Ramazan 1447",  fajr: "05:06", sun: "06:28", dhuhr: "13:14", asr: "16:52", maghrib: "19:50", isha: "21:06" },
  { date: "2026-02-21", hijri: "3 Ramazan 1447",  fajr: "05:08", sun: "06:29", dhuhr: "13:14", asr: "16:52", maghrib: "19:49", isha: "21:05" },
  { date: "2026-02-22", hijri: "4 Ramazan 1447",  fajr: "05:09", sun: "06:30", dhuhr: "13:14", asr: "16:52", maghrib: "19:48", isha: "21:03" },
  { date: "2026-02-23", hijri: "5 Ramazan 1447",  fajr: "05:10", sun: "06:31", dhuhr: "13:14", asr: "16:51", maghrib: "19:47", isha: "21:02" },
  { date: "2026-02-24", hijri: "6 Ramazan 1447",  fajr: "05:11", sun: "06:31", dhuhr: "13:13", asr: "16:51", maghrib: "19:45", isha: "21:01" },
  { date: "2026-02-25", hijri: "7 Ramazan 1447",  fajr: "05:12", sun: "06:32", dhuhr: "13:13", asr: "16:50", maghrib: "19:44", isha: "20:59" },
  { date: "2026-02-26", hijri: "8 Ramazan 1447",  fajr: "05:13", sun: "06:33", dhuhr: "13:13", asr: "16:50", maghrib: "19:43", isha: "20:58" },
  { date: "2026-02-27", hijri: "9 Ramazan 1447",  fajr: "05:14", sun: "06:34", dhuhr: "13:13", asr: "16:49", maghrib: "19:42", isha: "20:56" },
  { date: "2026-02-28", hijri: "10 Ramazan 1447", fajr: "05:15", sun: "06:35", dhuhr: "13:13", asr: "16:49", maghrib: "19:41", isha: "20:55" },
  { date: "2026-03-01", hijri: "11 Ramazan 1447", fajr: "05:17", sun: "06:36", dhuhr: "13:13", asr: "16:48", maghrib: "19:39", isha: "20:53" },
  { date: "2026-03-02", hijri: "12 Ramazan 1447", fajr: "05:18", sun: "06:37", dhuhr: "13:12", asr: "16:47", maghrib: "19:38", isha: "20:52" },
  { date: "2026-03-03", hijri: "13 Ramazan 1447", fajr: "05:19", sun: "06:37", dhuhr: "13:12", asr: "16:47", maghrib: "19:37", isha: "20:51" },
  { date: "2026-03-04", hijri: "14 Ramazan 1447", fajr: "05:20", sun: "06:38", dhuhr: "13:12", asr: "16:46", maghrib: "19:36", isha: "20:49" },
  { date: "2026-03-05", hijri: "15 Ramazan 1447", fajr: "05:21", sun: "06:39", dhuhr: "13:12", asr: "16:46", maghrib: "19:34", isha: "20:48" },
  { date: "2026-03-06", hijri: "16 Ramazan 1447", fajr: "05:22", sun: "06:40", dhuhr: "13:12", asr: "16:45", maghrib: "19:33", isha: "20:46" },
  { date: "2026-03-07", hijri: "17 Ramazan 1447", fajr: "05:23", sun: "06:41", dhuhr: "13:11", asr: "16:44", maghrib: "19:32", isha: "20:45" },
  { date: "2026-03-08", hijri: "18 Ramazan 1447", fajr: "05:24", sun: "06:42", dhuhr: "13:11", asr: "16:44", maghrib: "19:30", isha: "20:43" },
  { date: "2026-03-09", hijri: "19 Ramazan 1447", fajr: "05:25", sun: "06:42", dhuhr: "13:11", asr: "16:43", maghrib: "19:29", isha: "20:42" },
  { date: "2026-03-10", hijri: "20 Ramazan 1447", fajr: "05:26", sun: "06:43", dhuhr: "13:11", asr: "16:42", maghrib: "19:28", isha: "20:40" },
  { date: "2026-03-11", hijri: "21 Ramazan 1447", fajr: "05:27", sun: "06:44", dhuhr: "13:10", asr: "16:41", maghrib: "19:27", isha: "20:39" },
  { date: "2026-03-12", hijri: "22 Ramazan 1447", fajr: "05:28", sun: "06:45", dhuhr: "13:10", asr: "16:41", maghrib: "19:25", isha: "20:38" },
  { date: "2026-03-13", hijri: "23 Ramazan 1447", fajr: "05:28", sun: "06:46", dhuhr: "13:10", asr: "16:40", maghrib: "19:24", isha: "20:36" },
  { date: "2026-03-14", hijri: "24 Ramazan 1447", fajr: "05:29", sun: "06:46", dhuhr: "13:09", asr: "16:39", maghrib: "19:23", isha: "20:35" },
  { date: "2026-03-15", hijri: "25 Ramazan 1447", fajr: "05:30", sun: "06:47", dhuhr: "13:09", asr: "16:38", maghrib: "19:21", isha: "20:33" },
  { date: "2026-03-16", hijri: "26 Ramazan 1447", fajr: "05:31", sun: "06:48", dhuhr: "13:09", asr: "16:38", maghrib: "19:20", isha: "20:32" },
  { date: "2026-03-17", hijri: "27 Ramazan 1447", fajr: "05:32", sun: "06:49", dhuhr: "13:09", asr: "16:37", maghrib: "19:19", isha: "20:30" },
  { date: "2026-03-18", hijri: "28 Ramazan 1447", fajr: "05:33", sun: "06:50", dhuhr: "13:08", asr: "16:36", maghrib: "19:17", isha: "20:29" },
  { date: "2026-03-19", hijri: "29 Ramazan 1447", fajr: "05:34", sun: "06:50", dhuhr: "13:08", asr: "16:35", maghrib: "19:16", isha: "20:27" },
  { date: "2026-03-20", hijri: "1 Şevval 1447",  fajr: "05:35", sun: "06:51", dhuhr: "13:08", asr: "16:34", maghrib: "19:14", isha: "20:26" },
  { date: "2026-03-21", hijri: "2 Şevval 1447",  fajr: "05:36", sun: "06:52", dhuhr: "13:07", asr: "16:33", maghrib: "19:13", isha: "20:25" },
  { date: "2026-03-22", hijri: "3 Şevval 1447",  fajr: "05:36", sun: "06:53", dhuhr: "13:07", asr: "16:33", maghrib: "19:12", isha: "20:23" }
];

// Surah list (offline)
const SURAHS = [
  { no: 1, name: "Fâtiha", ayah: 7 },
  { no: 2, name: "Bakara", ayah: 286 },
  { no: 3, name: "Âl-i İmrân", ayah: 200 },
  { no: 36, name: "Yâsîn", ayah: 83 },
  { no: 55, name: "Rahmân", ayah: 78 },
  { no: 67, name: "Mülk", ayah: 30 },
  { no: 112, name: "İhlâs", ayah: 4 },
  { no: 113, name: "Felak", ayah: 5 },
  { no: 114, name: "Nâs", ayah: 6 },
];

function pad2(n){ return String(n).padStart(2,"0"); }

function nowInTZ() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());

  const get = (type) => parts.find(p => p.type === type)?.value;
  const y = get("year"), m = get("month"), d = get("day");
  const hh = get("hour"), mm = get("minute"), ss = get("second");
  return new Date(`${y}-${m}-${d}T${hh}:${mm}:${ss}`);
}

function dateKeyInTZ(d = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year:"numeric", month:"2-digit", day:"2-digit" }).formatToParts(d);
  const y = parts.find(p=>p.type==="year").value;
  const m = parts.find(p=>p.type==="month").value;
  const day = parts.find(p=>p.type==="day").value;
  return `${y}-${m}-${day}`;
}

function atTimeInTZ(dateKey, hhmm) {
  return new Date(`${dateKey}T${hhmm}:00`);
}

function findDay(dateKey){
  return TIMES.find(x => x.date === dateKey) || null;
}

function renderToday(day){
  const todayMeta = document.getElementById("todayMeta");
  const hijri = document.getElementById("hijri");
  const grid = document.getElementById("timesGrid");
  const teravih = document.getElementById("teravih");

  if(!day){
    todayMeta.textContent = `Bu tarih için veri yok.`;
    hijri.textContent = "—";
    grid.innerHTML = `<div class="muted small">Veri aralığı dışındasın (20.02.2026–22.03.2026).</div>`;
    teravih.textContent = "—";
    return;
  }

  todayMeta.textContent = `${day.date} • Sydney (Australia/Sydney)`;
  hijri.textContent = day.hijri;
  teravih.textContent = day.isha;

  const tiles = [
    ["İmsak (Fajr)", day.fajr],
    ["Güneş", day.sun],
    ["Öğle", day.dhuhr],
    ["İkindi", day.asr],
    ["İftar (Maghrib)", day.maghrib],
    ["Yatsı", day.isha],
  ];

  grid.innerHTML = tiles.map(([k,v]) => `
    <div class="tile">
      <div class="k">${k}</div>
      <div class="v">${v}</div>
    </div>
  `).join("");
}

function renderDaysList(){
  const el = document.getElementById("daysList");
  if(TIMES.length === 0){
    el.innerHTML = `<div class="muted small">Henüz veri yok.</div>`;
    return;
  }
  el.innerHTML = TIMES.map(d => `
    <div class="row">
      <div>
        <div class="d">${d.date}</div>
        <div class="s">${d.hijri}</div>
      </div>
      <div class="m">${d.maghrib}</div>
    </div>
  `).join("");
}

function diffParts(ms){
  const total = Math.max(0, Math.floor(ms/1000));
  const h = Math.floor(total/3600);
  const m = Math.floor((total%3600)/60);
  const s = total%60;
  return {h,m,s};
}

function updateCountdown(){
  const now = nowInTZ();
  const todayKey = dateKeyInTZ(new Date());
  const day = findDay(todayKey);

  const modeEl = document.getElementById("countdownMode");
  const hintEl = document.getElementById("nextEventHint");

  if(!day){
    modeEl.textContent = "—";
    hintEl.textContent = "Bugün için vakit verisi yok (veri aralığı dışı).";
    setTimer(0,0,0);
    return;
  }

  const iftar = atTimeInTZ(day.date, day.maghrib);
  const sahurEnd = atTimeInTZ(day.date, day.fajr);

  let target = null;
  let mode = "";

  if(now < sahurEnd){
    target = sahurEnd;
    mode = "Sahura";
  } else if(now < iftar){
    target = iftar;
    mode = "İftara";
  } else {
    const idx = TIMES.findIndex(x => x.date === day.date);
    const nextDay = TIMES[idx + 1] || null;
    if(nextDay){
      target = atTimeInTZ(nextDay.date, nextDay.fajr);
      mode = "Sahura";
    } else {
      target = iftar;
      mode = "İftara";
    }
  }

  modeEl.textContent = mode;
  const ms = target - now;
  const p = diffParts(ms);
  setTimer(p.h, p.m, p.s);

  hintEl.textContent =
    `Hedef: ${mode} kalan süre • ` +
    `${new Intl.DateTimeFormat("tr-TR", { timeZone: TZ, dateStyle: "medium", timeStyle: "short" }).format(target)}`;
}

function setTimer(h,m,s){
  document.getElementById("hh").textContent = pad2(h);
  document.getElementById("mm").textContent = pad2(m);
  document.getElementById("ss").textContent = pad2(s);
}

function startSurahRotation(){
  const nameEl = document.getElementById("surahName");
  const metaEl = document.getElementById("surahMeta");
  let pool = [];

  function refill(){
    pool = [...SURAHS];
    for(let i=pool.length-1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      [pool[i],pool[j]] = [pool[j],pool[i]];
    }
  }

  function next(){
    if(pool.length === 0) refill();
    const s = pool.pop();
    nameEl.textContent = `${s.no}. ${s.name}`;
    metaEl.textContent = `${s.ayah} ayet`;
  }

  refill();
  next();
  setInterval(next, 20000);
}

function setupPWA(){
  if("serviceWorker" in navigator){
    navigator.serviceWorker.register("./sw.js");
  }

  const installBtn = document.getElementById("installBtn");
  let deferredPrompt = null;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.hidden = false;
  });

  installBtn.addEventListener("click", async () => {
    if(!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBtn.hidden = true;
  });

  const offlineEl = document.getElementById("offlineStatus");
  const upd = () => offlineEl.textContent = navigator.onLine ? "Online" : "Offline";
  window.addEventListener("online", upd);
  window.addEventListener("offline", upd);
  upd();
}

function boot(){
  const todayKey = dateKeyInTZ(new Date());
  renderToday(findDay(todayKey));
  renderDaysList();
  startSurahRotation();
  setupPWA();

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

boot();