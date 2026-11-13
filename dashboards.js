// 入口頁的儀表板登錄表。要加新儀表板：在 dashboard/ 底下開一個資料夾放它的 index.html，然後在這裡加一筆。
// path 是相對於站台根目錄的子路徑（要以 / 結尾）；workflow 會把整個 dashboard/ 原樣發布到 https://baton.atticus.tw/
window.DASHBOARDS = [
  {
    path: "projects/",
    name: "專案儀表板",
    area: "Baton",
    desc: "接棒板：等你、各機器手上的棒子、每個專案的狀態與完成路徑、流水帳。資料來自各專案的 handoff.md 與 progress.md。",
    source: "atticuswu/Baton · scripts/build-dashboard.py",
  },
  {
    path: "guide/",
    name: "教學手冊：Baton 接力棒 AI 管理工具",
    area: "Baton · 說明",
    desc: "整套做法的白話教學：四樣東西、三台機器怎麼接 GitHub、跟著一天走一遍、儀表板的寫回、常見誤解與邊界、要動手時的格式與腳本。",
    source: "html-visualizer · 2026-11-07 更新 · 靜態頁，做法變了要改這一頁",
  },
  {
    path: "flow/",
    name: "單一專案的目標流程",
    area: "Baton · 說明",
    desc: "一個專案怎麼在三台機器間接力而不掉棒：五道泳道圖（點格子看說明）、用 11/07 真實 commit 走一遍、常見誤解與邊界。",
    source: "html-visualizer · 2026-11-07 · 靜態頁，內容改了要重產",
  },
];
