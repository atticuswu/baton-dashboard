window.DASHBOARD_DATA = {
  "generated": "2026-11-22T04:10+08:00",
  "machines": [
    {
      "id": "mac-mini",
      "name": "Mac mini"
    },
    {
      "id": "macbook-air",
      "name": "MacBook Air"
    },
    {
      "id": "groq-bot",
      "name": "Groq bot"
    },
    {
      "id": "cloud",
      "name": "雲端"
    }
  ],
  "projects": [
    {
      "slug": "all-invest",
      "name": "退休投資策略",
      "area": "投資",
      "status": "active",
      "owner": "mac-mini",
      "next": "把五份策略文件從原本的 all-invest 資料夾搬進 docs/",
      "due": "",
      "goal": "",
      "blocked": "",
      "appetite": "",
      "started": "",
      "updated": "2026-11-07T21:39+08:00",
      "now": "控制檔已建好，五份策略文件還在原本的 all-invest 資料夾，尚未搬進中樞倉庫。",
      "file": "all-invest/handoff.md",
      "seq": "3",
      "tasks": [
        {
          "text": "all-invest-1 把 atticus-invest、safemax-strategy、daughter-investment、crypto-strategy、realestate-strategy 五份 md 搬進 docs/",
          "id": "all-invest-1",
          "label": "把 atticus-invest、safemax-strategy、daughter-investment、crypto-strategy、realestate-strategy 五份 md 搬進 docs/",
          "who": "",
          "done": false,
          "line": 16,
          "phase": "",
          "added": "2026-11-05"
        },
        {
          "text": "all-invest-2 在 Claude App 把投資用的選取資料夾換成 ~/Project/Baton/all-invest",
          "id": "all-invest-2",
          "label": "在 Claude App 把投資用的選取資料夾換成 ~/Project/Baton/all-invest",
          "who": "",
          "done": false,
          "line": 17,
          "phase": "",
          "added": "2026-11-05"
        },
        {
          "text": "all-invest-3 檢查五份文件裡有沒有帳號或金額明細，有就移出倉庫",
          "id": "all-invest-3",
          "label": "檢查五份文件裡有沒有帳號或金額明細，有就移出倉庫",
          "who": "",
          "done": false,
          "line": 18,
          "phase": "",
          "added": "2026-11-05"
        }
      ],
      "completed": [],
      "traps": "- 倉庫是私有的，但仍然不要放帳號與身分資料。",
      "progress": [
        {
          "title": "2026-11-05 15:30 · cloud · 雲端 session",
          "lines": [
            "建立控制檔（CLAUDE.md、handoff.md、progress.md），登記到 projects.yaml",
            "五份策略文件尚未搬入，等 Mac mini 上的 session 處理"
          ],
          "date": "2026-11-05",
          "time": "15:30",
          "machine": "cloud",
          "tool": "雲端 session"
        }
      ],
      "machines": []
    },
    {
      "slug": "baton",
      "name": "Baton 接力棒",
      "area": "基礎建設",
      "status": "active",
      "owner": "mac-mini",
      "next": "baton-16 本人到 GitHub 替 Groq bot 的 token 開 Issues 讀寫權限，再請 bot 重跑安裝腳本（裝好後 @groq-bot 開頭的指示才會轉派過去）",
      "due": "2026-11-08",
      "goal": "三台機器都能接力交棒，所有專案的進度在儀表板看得到、也能從儀表板寫回",
      "blocked": "",
      "appetite": "",
      "started": "",
      "updated": "2026-11-19T13:29+08:00",
      "now": "- 三台機器都進圈且驗過接力：Mac mini（gh）、MacBook Air（部署金鑰）、Groq bot 主機＝Grok Bot app 的雲端 Linux（HTTPS token，由 bot 代操）。每台的 SessionStart／Stop hook 都用無頭 CLI 驗到。\n- 倉庫與儀表板都上線：https://baton.atticus.tw/ 入口頁＋ /projects/ 專案儀表板（完成路徑、勾選寫回、輸入列交給 Actions 的 Claude，要在機器上動手的指示會轉派給 mac-mini 執行、整件完成自動打勾，11/18 上線並實測兩條路）＋ /guide/ 教學手冊＋ /flow/ 說明頁；流水帳有月歸檔（sync.sh 跑 roll-progress.py）。\n- 11/12 定方向：Baton 只同步進度；程式進各專案自己的 GitHub 倉庫，素材大檔進 Google Drive 的 `Baton-assets/<slug>/`。兩台 Mac 已裝 Google Drive 電腦版（同帳號、串流模式），試用中。11/19 起各機器在 sync.sh 裡用 `scripts/repo-status.py` 回報程式倉庫狀態到 `machines/<本機代號>.json`，專案頁「程式與素材」標出沒提交／沒推／落後／沒有遠端；目前只有 mac-mini 回報過。",
      "file": "baton/handoff.md",
      "seq": "16",
      "tasks": [
        {
          "text": "baton-2 把 all-invest 的五份策略文件搬進 all-invest/docs/（11/19 查過：原檔在兩台 Mac 的舊資料夾（內容相同），含金額明細與門牌，與 all-invest 禁忌衝突，等本人選放法，三個選項見流水帳 11/19 11:46）",
          "id": "baton-2",
          "label": "把 all-invest 的五份策略文件搬進 all-invest/docs/（11/19 查過：原檔在兩台 Mac 的舊資料夾（內容相同），含金額明細與門牌，與 all-invest 禁忌衝突，等本人選放法，三個選項見流水帳 11/19 11:46）",
          "who": "",
          "done": false,
          "line": 20,
          "phase": "把專案搬進來",
          "added": "2026-11-05"
        },
        {
          "text": "baton-12 @本人 開儀表板搬家要的權限：Cloudflare 啟用 Zero Trust、開兩把 token、決定登入方式與公開倉庫去留（清單在 `baton/docs/cloudflare-migration.md`「本人先做」）",
          "id": "baton-12",
          "label": "開儀表板搬家要的權限：Cloudflare 啟用 Zero Trust、開兩把 token、決定登入方式與公開倉庫去留（清單在 `baton/docs/cloudflare-migration.md`「本人先做」）",
          "who": "本人",
          "done": false,
          "line": 22,
          "phase": "機器互連與權限",
          "added": "2026-11-18"
        },
        {
          "text": "baton-4 儀表板搬到 Cloudflare Pages＋Access（登入才能看、伺服器代持 token）：程式已備妥並本機測過，等 baton-12 完成後照 `baton/docs/cloudflare-migration.md` 切換〔進行中 · mac-mini · 11/18 12:48 起〕",
          "id": "baton-4",
          "label": "儀表板搬到 Cloudflare Pages＋Access（登入才能看、伺服器代持 token）：程式已備妥並本機測過，等 baton-12 完成後照 `baton/docs/cloudflare-migration.md` 切換〔進行中 · mac-mini · 11/18 12:48 起〕",
          "who": "",
          "done": false,
          "line": 23,
          "phase": "機器互連與權限",
          "added": "2026-11-07"
        },
        {
          "text": "baton-16 @本人 到 GitHub 的 Fine-grained tokens 頁，把給 Groq bot 用的那把（清單上有三把，認 2027-02-05 到期那把）在這個倉庫的 Issues 權限改成 Read and write 並按頁尾 Update；再到 Grok Bot app 請 bot 在 `~/Project/Baton` 先 `git pull --rebase --autostash` 再跑 `scripts/install-dispatch.sh`、把輸出貼回來（11/19 bot 跑過兩次都被環境檢查擋下：那把 token 讀不到 Issue；本人改過一次但沒生效）",
          "id": "baton-16",
          "label": "到 GitHub 的 Fine-grained tokens 頁，把給 Groq bot 用的那把（清單上有三把，認 2027-02-05 到期那把）在這個倉庫的 Issues 權限改成 Read and write 並按頁尾 Update；再到 Grok Bot app 請 bot 在 `~/Project/Baton` 先 `git pull --rebase --autostash` 再跑 `scripts/install-dispatch.sh`、把輸出貼回來（11/19 bot 跑過兩次都被環境檢查擋下：那把 token 讀不到 Issue；本人改過一次但沒生效）",
          "who": "本人",
          "done": false,
          "line": 24,
          "phase": "機器互連與權限",
          "added": "2026-11-19"
        },
        {
          "text": "baton-5 @本人 看過 /projects/ 新版後決定：階段 2 要不要拿掉今天／即將／隨時、加每週檢視",
          "id": "baton-5",
          "label": "看過 /projects/ 新版後決定：階段 2 要不要拿掉今天／即將／隨時、加每週檢視",
          "who": "本人",
          "done": false,
          "line": 26,
          "phase": "儀表板改版（提案 `baton/docs/dashboard-redesign.md`）",
          "added": "2026-11-07"
        },
        {
          "text": "baton-6 讓 `dashboard/projects/data.js`／`data.json` 不進 git、只由 Actions 產生（根治兩台機器 sync 撞產生檔）",
          "id": "baton-6",
          "label": "讓 `dashboard/projects/data.js`／`data.json` 不進 git、只由 Actions 產生（根治兩台機器 sync 撞產生檔）",
          "who": "",
          "done": false,
          "line": 27,
          "phase": "儀表板改版（提案 `baton/docs/dashboard-redesign.md`）",
          "added": "2026-11-07"
        },
        {
          "text": "baton-8 儀表板每個待辦標出對應的 Claude session：哪台機器（mac-mini／macbook-air／cloud）、哪個 session，Groq bot 主機（Grok Bot app 代操）的 session 也要標；先定 session 身分怎麼寫進 handoff／progress，再改 `build-dashboard.py` 與專案頁",
          "id": "baton-8",
          "label": "儀表板每個待辦標出對應的 Claude session：哪台機器（mac-mini／macbook-air／cloud）、哪個 session，Groq bot 主機（Grok Bot app 代操）的 session 也要標；先定 session 身分怎麼寫進 handoff／progress，再改 `build-dashboard.py` 與專案頁",
          "who": "",
          "done": false,
          "line": 28,
          "phase": "儀表板改版（提案 `baton/docs/dashboard-redesign.md`）",
          "added": "2026-11-08"
        }
      ],
      "completed": [
        {
          "id": "baton-1",
          "who": "",
          "label": "搬 content-studio 與貓下去：照 `baton/docs/new-project-flow.md`「搬既有專案進來」一節做",
          "on": "2026-11-19"
        },
        {
          "id": "baton-3",
          "who": "本人",
          "label": "機器互連：Mac mini 與 MacBook Air 開 Claude App 的 Remote Control（Settings → Claude Code → Remote Control，加入 ~/Project/Baton）；Groq bot 主機靠 bot 對話代操",
          "on": "2026-11-19"
        },
        {
          "id": "baton-9",
          "who": "本人",
          "label": "Google Drive 電腦版試用到 11/26 後拍板：留用，或同步太慢就換 Dropbox（資料夾結構原樣搬）",
          "on": "2026-11-19"
        },
        {
          "id": "baton-10",
          "who": "",
          "label": "`projects.yaml` 登記各專案的程式倉庫與素材資料夾，儀表板標出各機器「沒推／落後」；方向已談，等本人點頭才動工",
          "on": "2026-11-19"
        },
        {
          "id": "baton-15",
          "who": "",
          "label": "轉派支援 Groq bot 主機（程式面）：`scripts/dispatch.py` 改走 GitHub API 不靠 gh，安裝腳本支援 Linux（cron 或常駐），可轉派的機器由安裝腳本登記進 `scripts/dispatch-machines.txt`",
          "on": "2026-11-19"
        },
        {
          "id": "baton-14",
          "who": "",
          "label": "專案頁已完成的待辦離開清單：收進頁尾「已完成」區塊＋左側跨專案「已完成」分頁；完成日與已移走的任務由 `build-dashboard.py` 從 git 歷史算",
          "on": "2026-11-19"
        },
        {
          "id": "baton-13",
          "who": "",
          "label": "儀表板輸入列的指示能轉派給 mac-mini 執行、整件完成自動打勾（`scripts/dispatch.py`＋launchd；指示開頭 `@mac-mini` 或由雲端 Claude 判斷轉派）",
          "on": "2026-11-18"
        },
        {
          "id": "",
          "who": "",
          "label": "使用者：建 fine-grained PAT（只給 Baton 的 Contents＋Issues 讀寫），貼進 https://baton.atticus.tw/projects/ 左下角「設定 token」",
          "on": "2026-11-07"
        },
        {
          "id": "",
          "who": "",
          "label": "使用者：在登入過的機器跑 `claude setup-token`，把結果 `gh secret set CLAUDE_CODE_OAUTH_TOKEN --repo atticuswu/Baton`（或改放 ANTHROPIC_API_KEY）；然後在 Issue #1 把 claude 標籤移除再加回去測一次",
          "on": "2026-11-07"
        },
        {
          "id": "",
          "who": "",
          "label": "階段 1：`@本人`／`@機器` 任務標籤、「等你」與「接棒板」視圖、專案狀態列",
          "on": "2026-11-07"
        }
      ],
      "traps": "- 使用者層 Stop hook 對這台機器上任何 Claude 工作階段都會觸發：別的 session 一結束回合，sync.sh 就把 Baton 工作區當下狀態全部 commit 推走。在 Baton 裡做半途的改動要一氣呵成，或先關掉其他 session；兩個 session 同時改寫同一份 handoff.md 會互相覆蓋（11/07 21:02 實發，儀表板待辦被蓋掉一次）\n- 儀表板是公開的：任何專案 handoff.md 全文與 progress.md 最近 80 段都會出現在公開網址，帳號、金額、私人資訊不要寫。自訂網域靠 `dashboard/CNAME` 與 Cloudflare 的 `baton` CNAME（DNS only）；不要手改 atticuswu/baton-dashboard，每次發布整個覆蓋。加新儀表板：`dashboard/` 開子資料夾＋`dashboards.js` 加一筆\n- 各機器的 GitHub 認證不同：Groq bot 主機只放行 HTTPS、連不回 Mac，用只給 Baton 的 fine-grained token（存在 bot 的加密欄位 BATON_GH_TOKEN，到期要換），要它做事就在 Grok Bot app 跟「控制cluade cli」對話，bot 不經 claude CLI 改檔時要自己開工 pull、收工 sync.sh。Air 走部署金鑰（`~/.ssh/id_ed25519_baton`、ssh 別名 `github-baton`，remote 是 `git@github-baton:atticuswu/Baton.git`），不走 gh，Air 的 gh token 已失效\n- 兩種會撞衝突的情況：(1) 儀表板寫回的 commit 直接進 main，某台機器若有還沒 commit 的 handoff.md 改動，SessionStart 的 `pull --rebase --autostash` 可能撞到，撞到就停下來人工解；claude-task.yml 裡的 Claude 只准動該專案資料夾、hooks 關閉，模型用 repo variable `CLAUDE_MODEL` 改。(2) `dashboard/projects/data.js`／`data.json` 進了 git，兩台接連 sync 會撞（11/07 實撞）：重跑 `scripts/build-dashboard.py`、`git add` 這兩檔、`git rebase --continue`，再跑 sync.sh\n- 轉派器：`scripts/dispatch.py` 每分鐘跑一次（mac-mini 是 launchd `tw.atticus.baton-dispatch`；Linux 是 cron），只執行倉庫主人開、帶 `run:<本機代號>` 標籤的 Issue，無頭 Claude 可以跑指令，所以「能在 Baton 開 Issue＝能在裝了轉派器的機器動手」，儀表板的 token 外流要立刻撤銷。失敗不會自動重試（把標籤加回去才重跑）；機器關機或 claude CLI 登入過期時 Issue 會帶著標籤停住。指示不寫 `@機器` 時由雲端 Claude 判斷，可能判斷錯。無人看守的執行踩到 macOS 權限視窗會卡到有人按或逾時（11/19 Issue #14 掃家目錄實發，提示詞已禁止）。雲端與機器同時改同一份 handoff.md 會撞衝突讓 workflow 失敗（11/19 Issue #13 實發），同一專案的指示別連發。停用：`scripts/install-dispatch.sh --remove`；紀錄 mac 在 `~/Library/Logs/baton-dispatch.log`、Linux 在 `~/.cache/baton/dispatch.log`\n- 在 Baton 根目錄開 session 會同時吃到使用者層與專案層兩份 hook，sync.sh 靠 `.git/baton-sync.lock` 互斥；本機代號來自 `~/.config/baton/machine`。改 hooks 時 `scripts/hooks.json` 與 `.claude/settings.json` 要同步；`.claude/commands/` 新增檔案才要重跑 install.sh（既有指令是 symlink，pull 即生效）。驗 hooks：Claude App 沒有 /status、/hooks，在專案子資料夾跑 `claude -p \"只回覆 OK\" --output-format stream-json --verbose --include-hook-events` 看 hook_started／hook_response。progress.md 的歸檔由 sync.sh 自動做（roll-progress.py），別手動搬、別改 `progress/*.md`；它只看段落標題的日期，標題格式錯的段落會留在原地\n- Google Drive 只放素材與成品，git 倉庫、`.venv`、`node_modules` 不要放進去。目前是串流模式（本機是佔位檔，讀取時才下載）；本機路徑是 `~/Library/CloudStorage/GoogleDrive-<帳號>/我的雲端硬碟/`，含帳號，腳本別寫死。`machines/*.json` 是各機器上次跑 sync.sh 時的自述，機器沒開就停在舊狀態；別手改、別替別台寫。repo-status.py 會對登記的程式倉庫 `git fetch`（每小時最多一次），Air 的 content-studio 在文件資料夾底下且 gh 失效，第一次跑可能跳權限視窗或標「連不上遠端」。Groq bot 主機沒有 Drive，要碰素材得另裝 rclone；別人分享來的資料夾要先在網頁「新增捷徑到我的雲端硬碟」才會出現在本機",
      "progress": [
        {
          "title": "2026-11-19 13:29 · mac-mini · Claude App",
          "lines": [
            "baton-16 第二次嘗試仍失敗：bot 重跑，「api 讀 Issue」還是 403；bot 直接打 GitHub，回應說需要 Issues 的讀取權限，代表那把 token 目前完全沒有 Issues 權限，本人先前的修改沒有存到這一把上",
            "用本人的 Chrome 只讀查看 GitHub 的 Fine-grained tokens 清單：共三把（一把給 Groq bot、2027-02-05 到期；一把沒有到期日；一把已過期）。改錯把或沒按頁尾的 Update 都可能是沒生效的原因，沒辦法從清單頁分辨",
            "想點進那一把看目前的權限，GitHub 要求先用電子郵件驗證身分（sudo 模式），這一步只能本人做，所以沒看到權限內容、也沒有改任何設定",
            "bot 這次回報的「api 寫 Issue: ok」是舊版檢查的行為，推測它重跑前沒有先 pull（13:22 推上去的修正版在讀不到 Issue 時會顯示「未測」）；下次請它先 pull",
            "改了：baton/handoff.md（baton-16 那行、updated）、本檔"
          ],
          "date": "2026-11-19",
          "time": "13:29",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-19 13:25 · mac-mini · Claude App",
          "lines": [
            "baton-16 第一次嘗試：本人請 Grok Bot app 的 bot 在那台主機 pull 並跑 `scripts/install-dispatch.sh`。pull 成功；環境檢查擋下，「api 讀 Issue」回 403，那把 fine-grained token 沒有 Issues 權限。腳本在登記前就停了：沒有排程、沒有常駐程序、沒寫進 `scripts/dispatch-machines.txt`；只留下 token 存檔（權限 600）。Linux 這條路到環境檢查為止首次在真機跑通（認得本機代號、中樞路徑、claude CLI）",
            "同一份輸出暴露檢查的誤報：「api 寫 Issue」顯示 ok，但那把 token 連讀都不行。原因是舊做法對不存在的 Issue 編號留言、以 404 當作有權限，而完全沒有 Issues 權限的 token 也回 404。改成對一則現有 Issue 送「什麼都不改」的修改：有權限回 200，在 mac-mini 實測更新時間與時間軸都不變；讀不到 Issue 時標「未測」。沒權限時回 403 這一半沒有實測（手邊沒有缺權限的 token），要等 bot 重跑才看得到",
            "安裝腳本另一個洞：token 存檔只在檔案不存在時才寫，換一把新 token 放進環境變數後，檢查用新的、排程實際用舊的。改成環境變數與存檔不同就覆蓋",
            "順手清交接單：baton-10、baton-15 已打勾且 commit 過，移走；baton-16 改寫成現在卡的那一步",
            "上一段提到的排隊都跑完了：#14 blocked（等本人選放法）、#15 done 自動打勾、#16 partial、#17 partial",
            "改了：scripts/dispatch.py、scripts/install-dispatch.sh、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-19",
          "time": "13:25",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-19 12:01 · mac-mini · claude CLI",
          "lines": [
            "baton-15 轉派器改版後的驗收，來源是儀表板 Issue #16。只跑 `python3 scripts/dispatch.py --check`，沒改任何程式",
            "mac-mini 結果（結束碼 0）：token ok（來源是 gh 的登入憑證）；api 讀倉庫 ok；api 讀 Issue ok，排隊中 1 則（推測就是這則 #16 本身，沒另外查證）；api 寫 Issue ok；claude CLI 也找得到",
            "「api 寫 Issue ok」的意思：腳本對一個不存在的 Issue 編號送留言，拿到 404 判定有寫入權限（沒權限會是 403），沒有真的寫出任何東西。真正的留言與關閉要看轉派器收尾這則 Issue 時成不成功",
            "沒驗到的：這只證明 mac-mini 走 GitHub API 這條路通；Groq bot 主機（Linux、fine-grained token）還沒跑過，那是 baton-16",
            "改了：baton/progress.md（只追加本段）；交接單沒有因此過期，沒動"
          ],
          "date": "2026-11-19",
          "time": "12:01",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-19 11:55 · mac-mini · claude CLI",
          "lines": [
            "baton-10，來源是儀表板 Issue #15，指示「去辦」（視為本人點頭）。做完：`projects.yaml` 的登記加上素材欄位，儀表板專案頁標出各機器的程式「沒提交／沒推／落後／沒有遠端」",
            "做法：新增 `scripts/repo-status.py`，每台機器只看 `projects.yaml` 裡自己那條 `path`，把分支、有沒有未提交、幾個 commit 沒推（附最早那筆日期）、落後遠端幾個、素材資料夾在不在，寫進 `machines/<本機代號>.json`；`sync.sh` 每次跑，狀態沒變且不到一天就不重寫。`build-dashboard.py` 併進每個專案的 `machines` 欄位，專案頁多一個「程式與素材」區塊，總覽的專案標題有問題時標紅字。公開資料只帶分支名、數字、日期，不帶本機路徑與倉庫網址",
            "`projects.yaml`：新增 `assets` 欄位說明；只替 content-studio 登記素材資料夾（11/12 盤點確認它有大量沒進 git 的素材）。其他專案有沒有素材不確定，沒填；groq-bot 的倉庫與路徑、maoxiaqu 仍是空的。沒替 baton 自己登記 path（會改變 `/baton` 在中樞根目錄的認專案行為）。雲端硬碟上的素材資料夾沒建、素材沒搬",
            "mac-mini 實測結果：content-studio 在功能分支、有未提交改動、1 個 commit 沒推、素材資料夾還沒建；skill-somecw 沒有遠端（程式只存在這台，沒有異地備份）、有未提交改動；social-sync 與遠端一致",
            "驗證：在暫存副本跑完整條（狀態腳本 → 產生資料 → 無頭 Chrome 開三個專案頁與總覽，區塊與紅字都有畫出來）；連跑兩次第二次不重寫；`MACHINE_ID=test` 不會產生程式狀態；`/baton` 用的 which-project.py 照常認得專案；sync.sh 過語法檢查；再在工作區正式跑一次產生 `machines/mac-mini.json`",
            "沒驗到的：MacBook Air 與 Groq bot 主機還沒回報（要等它們下次 pull 後跑 sync.sh）；Air 的 content-studio 在文件資料夾底下且 GitHub 認證失效，第一次可能跳權限視窗或標「連不上遠端」。線上頁面要等這次改動推上去後才看得到。狀態是各機器上次 sync 時的自述，機器沒開就是舊的，所以每列標了多久前檢查",
            "副作用：sync.sh 多了對登記倉庫的 `git fetch`（每個倉庫每小時最多一次，逾時 15 秒）；程式倉庫狀態一變，中樞就多一筆 commit，`data.js` 撞衝突的機會略增（根治仍是 baton-6）。驗證用的暫存副本留在系統暫存區（想刪被權限擋下），重開機會清掉",
            "改了：scripts/repo-status.py（新增）、machines/mac-mini.json（新增）、scripts/build-dashboard.py、scripts/sync.sh、projects.yaml、dashboard/projects/index.html（app-ver 2026-11-19.2）、dashboard/projects/data.js、data.json、CLAUDE.md、baton/docs/architecture.md、dashboard/guide/index.html、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-19",
          "time": "11:55",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-19 11:49 · mac-mini · Claude App",
          "lines": [
            "本人回報 macOS 跳出「2.1.321 想要取用其他 App 的資料」：查到是轉派器執行 Issue #14（baton-2）時，無頭 Claude 對整個家目錄做 find，掃進其他 App 的資料夾；搜尋卡住等人按。建議本人按不允許",
            "轉派器提示詞加規則：不准掃整個家目錄或 ~/Library，找不到檔案就回報 blocked；交接單陷阱補一句",
            "改版驗收：Issue #16 經新版 workflow（機器清單改讀 `scripts/dispatch-machines.txt`）正確轉派；先前撞衝突失敗的 #13 重跑成功",
            "改了：scripts/dispatch.py、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-19",
          "time": "11:49",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-19 11:47 · mac-mini · Claude App",
          "lines": [
            "完成 baton-15（程式面）：轉派器能在 Groq bot 主機那種 Linux 環境跑。`dispatch.py` 的 GitHub 操作從 gh 指令改成直接打 API（urllib），token 依序從環境變數、`~/.config/baton/gh-token`、`gh auth token`、git 憑證管理、origin 網址找；多了 `--loop` 常駐模式；`--check` 會驗 token、讀倉庫、讀 Issue，並用不存在的 Issue 編號試探寫入權限（有權限回 404、沒權限回 403，不產生任何東西），有問題結束碼 1",
            "`install-dispatch.sh` 支援 Linux：先跑環境檢查，沒過不裝；有在跑的 cron 用 crontab，否則 nohup 常駐；token 若只在環境變數就存一份到 `~/.config/baton/gh-token`（600）。可轉派的機器改由安裝腳本登記進 `scripts/dispatch-machines.txt`，workflow 讀清單，不再寫死在 yml",
            "驗證：mac-mini 上新版已實際接手儀表板送來的 Issue #14（API 的讀取、認領、留言都正常）；workflow 解析用三種指示測過（`@mac-mini` 轉、`@groq-bot` 未登記不轉、沒寫機器交給雲端判斷）；無效 token 的檢查輸出正確。Linux 的 cron／常駐分支只過語法檢查，沒有在真的 Linux 主機跑過，要等 baton-16",
            "順手修：斷線時同一個錯誤只記一筆（昨天的過濾條件漏了兩種訊息）",
            "觀察：今天本人從儀表板連送多則指示，#10、#11、#12 在 content-studio 的程式碼資料夾正常執行（#11 併回 main，761 個測試全過後快轉推送、自動打勾）；#13 在 Actions 失敗，原因是雲端與 mac-mini 同時改 content-studio/handoff.md 撞衝突，不是程式錯誤",
            "改了：scripts/dispatch.py、scripts/install-dispatch.sh、scripts/dispatch-machines.txt（新增）、.github/workflows/claude-task.yml、CLAUDE.md、baton/docs/architecture.md、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-19",
          "time": "11:47",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-19 11:46 · mac-mini · claude CLI",
          "lines": [
            "baton-2（搬 all-invest 策略文件），來源是儀表板 Issue #14，指示「去辦」。結論：沒搬，卡在要本人拍板",
            "找到原檔：兩台 Mac 各有一份，內容雜湊完全相同——mac-mini 的 iCloud 雲碟與 MacBook Air 的舊 all-invest 資料夾（都只讀取，沒改沒刪）；Air 另有一份 iCloud 封存副本沒比對。裡面是六份 md（五份主文件＋一份沒登記的 taiwan-stock-strategy.md）與兩份房貸試算 xlsx",
            "先複製到倉庫外的暫存區掃內容（雜湊與 Air 原檔一致）：五份主文件含大量金額明細（資產淨值、貸款額、家人收入、女兒帳戶金額）、不動產門牌、往來銀行與券商名稱。沒有帳號號碼、密碼、金鑰",
            "沒搬的原因：all-invest/CLAUDE.md 禁忌寫明「金額明細、身分資料不進這個倉庫，文件只放策略與比例」，all-invest-3 也要求有就移出。檔案一放進 docs/，轉派器收尾的 sync.sh 就會 commit 推上 GitHub，進了 git 歷史收不回來，而且 Groq bot 主機的 clone 與 Actions 的雲端 Claude 都讀得到。docs/ 本身不會上公開儀表板（儀表板只收 handoff 與 progress）",
            "要本人選一條：(A) 原檔放 Google Drive 的 `Baton-assets/all-invest/`，兩台 Mac 同步、不進 git，倉庫 docs/ 只放索引（建議）；(B) 做去識別版進倉庫（金額改比例、門牌改代稱），原檔留在倉庫外；(C) 改掉禁忌、原樣進私有倉庫，接受上述曝光範圍。另外要決定第六份 taiwan-stock-strategy.md 要不要一起、Air 上的原檔搬完後留或刪",
            "驗證：`all-invest/docs/` 仍只有 .gitkeep，中樞倉庫除本檔與交接單外沒動。暫存副本在 mac-mini 的 /tmp（權限 700，重開機會清掉），想刪但被權限擋下，沒再試",
            "改了：baton/progress.md、baton/handoff.md（baton-2 那行補上卡點）"
          ],
          "date": "2026-11-19",
          "time": "11:46",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-19 11:43 · mac-mini · Claude App",
          "lines": [
            "完成 baton-14：專案頁已完成的待辦不再留在清單（原本劃掉後還帶輸入列）。專案頁清單只列未完成的，已完成收進頁尾可展開的「已完成」區塊；左側多一個跨專案的「已完成」分頁，依完成日分組",
            "完成紀錄從 git 歷史算（`build-dashboard.py` 的 `completion_history`）：任務最後一次寫進 handoff.md 時是打勾的就算完成，之後被移走也找得回來；data.js 每個專案多 `completed`，已完成任務多 `done_on`。全倉庫掃一次約 1.8 秒",
            "限制：沒打勾就直接被刪掉的任務算不到（例如 baton-7、baton-11 都沒出現）。規則補上「先打勾、被 commit 過才移走」（CLAUDE.md、/wrap）",
            "驗證：本機預覽看過專案頁、已完成分頁、375px 手機寬度，點完成路徑上的已完成節點會展開區塊；「改回未完成」沿用原本的勾選寫回，本機沒有 token 沒實測",
            "順手：baton-1、baton-9、baton-3 已打勾並 commit 過，從交接單移走（會出現在已完成分頁）；next 改指 baton-15；登記 baton-15（轉派支援 Groq bot 主機）",
            "改了：scripts/build-dashboard.py、dashboard/projects/index.html（app-ver 2026-11-19.1）、CLAUDE.md、.claude/commands/wrap.md、baton/docs/architecture.md、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-19",
          "time": "11:43",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-18 13:14 · mac-mini · Claude App",
          "lines": [
            "完成 baton-13：儀表板輸入列的指示能轉派到 mac-mini 執行，整件完成自動打勾。入口不變（一律開帶 `claude` 標籤的 Issue），由 `claude-task.yml` 轉派：指示開頭寫 `@mac-mini` 直接轉，沒寫的由雲端 Claude 判斷，回 `DISPATCH: mac-mini` 才轉；轉派＝標籤換成 `run:mac-mini`。不讓前端指定標籤，是因為 Cloudflare 那版代理（baton-4）把標籤寫死成 claude",
            "mac-mini 端：`scripts/dispatch.py`（純標準函式庫）由 launchd `tw.atticus.baton-dispatch` 每 60 秒跑一次。只認倉庫主人開的 Issue、先拿掉標籤認領、在 projects.yaml 登記的本機資料夾用 claude 無頭模式執行（hooks 關、工具白名單、擋明顯危險指令、最長 30 分鐘），依最後一行 `RESULT: done｜partial｜blocked` 決定打不打勾，跑 sync.sh、回覆並關閉 Issue。安裝與移除用 `scripts/install-dispatch.sh`",
            "實測兩條路都通：Issue #8（開頭 `@mac-mini`，回報 partial，沒打勾，全程 63 秒）、Issue #9（沒寫機器，雲端 Claude 判斷轉派，回報 done，轉派器把 baton-13 打勾並推上 GitHub，全程 85 秒）。launchd 環境下 gh 與 claude 的鑰匙圈認證都正常",
            "沒測到的：執行逾時與失敗的回報路徑、機器離線後補做、在程式碼倉庫（非中樞資料夾）當工作目錄的實際執行、Cloudflare 代理模式下從網頁送出（邏輯上 body 原樣通過，沒實跑）；/flow/ 的流程圖 SVG 沒加轉派這條線，只改了文字說明",
            "改了：scripts/dispatch.py、scripts/install-dispatch.sh（新增）、.github/workflows/claude-task.yml、dashboard/projects/index.html（輸入列提示文字）、CLAUDE.md、baton/docs/architecture.md、dashboard/guide/index.html、dashboard/flow/index.html、baton/handoff.md、content-studio/handoff.md、baton/progress.md；本機另裝 ~/Library/LaunchAgents/tw.atticus.baton-dispatch.plist"
          ],
          "date": "2026-11-18",
          "time": "13:14",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-18 13:13 · mac-mini · claude CLI",
          "lines": [
            "baton-13 轉派第二次實測，來源是儀表板 Issue #9（指示開頭沒寫 `@mac-mini`，走第二條路：雲端 Claude 判斷後轉派）",
            "轉派器在 mac-mini 以 claude 無頭模式叫起本 session，工作目錄落在 baton 專案資料夾；照指示執行 `python3 scripts/dispatch.py --check`，exit 0，三項都 ok：gh ok、claude ok（2.1.321）、repo ok；另外回報 machine＝mac-mini、label＝run:mac-mini",
            "連同 Issue #8，兩條轉派路都實測通過；依指示回報 done，自動打勾由轉派器處理，結果待下次看交接單確認",
            "沒改任何程式、沒打勾、沒 commit",
            "改了：baton/progress.md"
          ],
          "date": "2026-11-18",
          "time": "13:13",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-18 13:11 · mac-mini · claude CLI",
          "lines": [
            "baton-13 轉派實測（第一條路：指示開頭指定 `@mac-mini`），來源是儀表板 Issue #8",
            "轉派器在 mac-mini 以 claude 無頭模式叫起本 session，工作目錄正確落在 baton 專案資料夾；照指示在本機執行 `hostname -s` 與 `sw_vers -productVersion`，兩者都正常回出輸出（macOS 26.6.2），證明指令確實跑在 mac-mini 上",
            "依指示沒改任何程式、沒打勾、沒 commit；這則待辦尚未完成（還要驗第二條路：雲端 Claude 自行判斷轉派，以及 done 時的自動打勾）",
            "改了：baton/progress.md"
          ],
          "date": "2026-11-18",
          "time": "13:11",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-18 12:50 · mac-mini · Claude App",
          "lines": [
            "baton-4 線上驗證：雙模式網頁（2026-11-18.1）已發布，`dashboard.yml` 的 publish 成功、cloudflare job 如預期略過；`/api/whoami` 在 GitHub Pages 回 404，網頁退回瀏覽器 token 模式",
            "在本機 Chrome 的線上頁面對 baton-8 勾選再取消，兩次都寫回成功（留下兩個儀表板 commit，內容已還原）",
            "副作用：切換前每次開專案頁，瀏覽器主控台會多一筆 `/api/whoami` 的 404，不影響功能"
          ],
          "date": "2026-11-18",
          "time": "12:50",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-18 12:48 · mac-mini · Claude App",
          "lines": [
            "baton-4 開工：本人拍板要搬到 Cloudflare Pages＋Access，先把不需要權限的部分做完",
            "新增 `cloudflare/`：`lib/access.js`（驗 Access 登入憑證，無套件）、`functions/_middleware.js`（全站先驗登入）、`functions/api/whoami.js`、`functions/api/gh/[[path]].js`（GitHub 代理，只放行 handoff.md 讀寫與開 claude 標籤的 Issue，寫入擋跨站偽造）",
            "`dashboard/projects/index.html` 改成雙模式（app-ver 2026-11-18.1）：有 `/api/whoami` 走代理，沒有就維持瀏覽器存 token，切換前後同一份網頁都能用",
            "`.github/workflows/dashboard.yml` 加 cloudflare job，repo variable `CF_PAGES_PROJECT` 沒設就不跑；`PUBLISH_GITHUB_PAGES=off` 才停公開倉庫那條路",
            "本機用 wrangler pages dev＋假的公鑰端點與假 GitHub 測過：伺服器端 41 項（2 項是預期寫錯，實際有擋下）、瀏覽器連勾兩項含 409 重試、輸入列送出。真的 Access 登入頁與過期轉址要等切換時線上驗",
            "卡在：本機的 Cloudflare token 沒有 Pages 與 Access 權限，新增 baton-12 請本人開權限；切換步驟與退回方法寫在 `baton/docs/cloudflare-migration.md`"
          ],
          "date": "2026-11-18",
          "time": "12:48",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 18:29 · mac-mini · Claude App",
          "lines": [
            "baton-4 盤點：手機開儀表板要重貼 token，原因是 token 存在各瀏覽器的 localStorage（`dashboard/projects/index.html` 的 `baton.gh.token`），不跨裝置",
            "現況確認：Baton 私有、baton-dashboard 公開；`baton.atticus.tw` 是 DNS only 的 CNAME 指到 GitHub Pages；本機 `~/.config/cloudflare/token` 看得到 atticus.tw 的 DNS，但 Pages、Access、Workers 三項都被拒（唯讀呼叫驗過）",
            "提出遷移設計（Cloudflare Pages＋Access＋Pages Function 代持 GitHub token），等本人決定要不要做；要做得先由本人開一把含 Pages 與 Access 權限的 Cloudflare token、啟用 Zero Trust",
            "沒改任何程式或設定"
          ],
          "date": "2026-11-17",
          "time": "18:29",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:50 · mac-mini · Claude App",
          "lines": [
            "使用者同意後，把 Air 的 content-studio 更新到 mac-mini 現用版本：從 mac-mini `git push air:Documents/content-studio shared-review-bot`（Air 當時簽出的是 main，推新分支不衝突）→ Air `git checkout shared-review-bot`（工作區原本乾淨）→ 再把 main 快轉推過去。核對兩邊 shared-review-bot 都是 6b0898c、main 都是 a9bed45；Air 的 CLAUDE.md 第一行已是中樞交接單的匯入，which-project 認得出來",
            "沒傳過去的：mac-mini 工作區 26 個未提交改動、被 git 忽略的檔案（.venv、資料庫、log、env）、另外兩個分支（teaching-kit、claude/…）",
            "之後的同步方式（Air 的 gh 登入修好之前）：只能由 mac-mini 主動，推用 `git push air:Documents/content-studio <分支>`，取回 Air 上的提交用 `git fetch air:Documents/content-studio <分支>`；Air 連不回 mac-mini",
            "projects.yaml 的 Air 路徑註解同步更正",
            "改了：projects.yaml、baton/progress.md、content-studio/progress.md"
          ],
          "date": "2026-11-17",
          "time": "16:50",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:48 · mac-mini · Claude App",
          "lines": [
            "baton-7、baton-11 完成：在 Grok Bot app 請「控制cluade cli」於 Groq bot 主機 pull 並重跑 `scripts/install.sh groq-bot`。bot 回報六步都 exit 0：`~/.claude/commands/` 有 baton.md、new-project.md、wrap.md 三個連結（16:46 建立）；`which-project.py` 在 /home/box/Project/Baton/baton 認出 baton、在家目錄回「認不出來」；git 狀態與 origin 一致，bot 沒改檔沒 commit",
            "至此 /baton 三台都裝好。驗證程度不同：mac-mini 實際呼叫過（status 與登記兩條路）；MacBook Air 與 Groq bot 主機只驗到指令連結與認專案腳本，沒有在那兩台實際叫過 /baton",
            "兩台機器在 projects.yaml 的登記現況：Air 只有 content-studio 一筆（舊 clone）；Groq bot 主機沒有任何專案的程式資料夾，它的 GitHub token 只能碰 Baton，所以在那台只有開在中樞專案資料夾底下的 session 認得出專案",
            "handoff：baton-7、baton-11 做完移走（41 行 → 39 行），現況第二條補上 /baton",
            "改了：baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-17",
          "time": "16:48",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:45 · mac-mini · Claude App",
          "lines": [
            "baton-11 補登記 Air 的專案路徑：使用者要求讓 Air 上開在別的資料夾的 session 也認得出專案。唯讀盤點 Air：~/Project 只有 Baton；`~/Documents/content-studio` 是 content-studio 的舊 clone（main、8/25、工作區乾淨、落後 origin/main 30 個 commit、落後 mac-mini 現用分支 111 個）；social-sync 與 skill-somecw 在 Air 上沒有資料夾",
            "改 `projects.yaml`：content-studio 的 path 加 `macbook-air: ~/Documents/content-studio`。同步後在 Air pull，`which-project.py` 在該資料夾與子資料夾都認出 content-studio，~/Documents 仍回「認不出來」",
            "沒做也不該自己做的：沒有更新 Air 那份程式碼（Air 的 gh token 已失效，拉不到；mac-mini 現用分支有 75 個 commit 沒上 GitHub，要不要 push 是 content-studio-2 等本人決定）；沒有替 social-sync 在 Air 建新副本（目前只在 mac-mini 跑，沒有第二台要用的需求）",
            "發現一個風險：Air 的家目錄本身是 git 倉庫（遠端指向另一個專案）。在家目錄底下任何「不是倉庫」的資料夾下 git 指令，都會作用到這個家目錄倉庫",
            "已在 Grok Bot app 請 bot 於 Groq bot 主機 pull 並重跑 install.sh（16:45 送出），結果另記",
            "改了：projects.yaml、baton/progress.md"
          ],
          "date": "2026-11-17",
          "time": "16:45",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:40 · mac-mini · Claude App",
          "lines": [
            "baton-11 MacBook Air 部分完成：使用者開機並同意後，從 mac-mini 經 `ssh air` 在 Air 上 pull（落後 3 個 commit → 最新）、重跑 `scripts/install.sh macbook-air`。結果：`~/.claude/commands/baton.md` 連結建立，hooks 新增 0 組，settings.json 與 CLAUDE.md 內容前後雜湊一致（沒變），origin 可連線",
            "驗證到的：指令連結存在；`which-project.py` 在 Air 上認得出中樞專案資料夾、家目錄回「認不出來」。沒驗到的：沒有在 Air 上實際叫 /baton——SSH 連線讀不到鑰匙圈，無頭 claude 會顯示未登入，要在 Air 本機的 session 才測得到",
            "Air 上留下兩個我建的備份檔 `~/.claude/settings.json.bak-20261117-*`、`CLAUDE.md.bak-20261117-*`（內容與原檔相同，沒刪，Air 上的東西刪除前要本人同意）。順便確認 Air 有裝 gh 2.96.0（`~/.local/bin/gh`），登入仍待本人在 Air 本機做",
            "剩 Groq bot 主機（跟 baton-7 同一次跑），baton-11 還不能打勾",
            "改了：baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-17",
          "time": "16:40",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:36 · mac-mini · Claude App",
          "lines": [
            "baton-11 mac-mini 部分完成：新增 `.claude/commands/baton.md`（/baton）與 `scripts/which-project.py`。起因：使用者在 content-studio 程式資料夾開的 session（例：Search Console 流量頁面關聯文案）完全沒進 Baton，因為根規則檔只在中樞底下的 session 才載入；每次貼一段指示太麻煩，改成任何資料夾都能叫的指令",
            "/baton 做的事：認專案（cwd 在中樞專案資料夾，或在 projects.yaml 該機器 path 底下）→ pull → 比對既有待辦，沒有才編號新增 → 行尾標 `〔進行中 · 機器 · 時間 起〕` → progress 記「<編號> 開工」→ sync；之後該 session 每個階段記一段、做完打勾拿掉記號。`/baton status` 只回報不改檔",
            "實測：(1) which-project 在 content-studio 根與子資料夾、social-sync、中樞專案資料夾都認對，~/Project 與中樞根目錄回「認不出來」並列清單；(2) 從 ~/Project/2026-content-studio 無頭跑 `/baton status`，正確列出 6 件待辦與最近三段進度、沒改檔；(3) 從 Baton/baton 無頭跑 `/baton <描述>`，它自己登記出 baton-11、標進行中、寫開工段、同步成功，並照規則回報 handoff 41 行沒有硬刪。重跑 install.sh 後，已在跑的 session 也馬上看得到這個指令",
            "文件同步：根 CLAUDE.md（/baton 用途、進行中記號格式）、README、architecture.md、wrap.md（收工時處理進行中記號）、教學頁一條、install.sh 註解",
            "沒做：Air 離線、Groq bot 主機要請 bot 代跑，兩台都還沒重跑 install.sh，所以 baton-11 沒打勾。儀表板還不會把進行中記號畫成標籤，目前是任務文字的一部分照字面顯示。baton/handoff.md 現在 41 行，超過上限一行，留給 /wrap",
            "改了：.claude/commands/baton.md、.claude/commands/wrap.md、scripts/which-project.py、scripts/install.sh、CLAUDE.md、README.md、baton/docs/architecture.md、dashboard/guide/index.html、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-17",
          "time": "16:36",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:35 · mac-mini · Claude App",
          "lines": [
            "baton-11 開工：做一個任何資料夾都能呼叫的 `/baton` 指令（登記待辦、標進行中、持續記進度）",
            "現況：指令檔 `.claude/commands/baton.md` 與 `scripts/which-project.py` 已在 16:33 進倉庫，這一段就是用 `/baton` 自己登記的第一次實跑",
            "改了：baton/handoff.md（新增 baton-11、seq 10→11）、baton/progress.md"
          ],
          "date": "2026-11-17",
          "time": "16:35",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:15 · mac-mini · Claude App",
          "lines": [
            "使用者回報「勾一次可以，連勾兩項都失敗」。這次改在真實環境重現：用 Claude in Chrome 在使用者的 Chrome 開 /projects/（頁面版本 2026-11-17.2，該瀏覽器已存 token，由頁面自己寫回，沒有讀 token），對 baton 專案實際勾選",
            "結果：(1) 相隔 3 秒連勾 baton-10、baton-8，兩次都 200，第二次讀到的就是第一次寫回後的新 sha；(2) 兩項同時點，其中一次 PUT 回 409（訊息是 is at … but expected …，分支被另一次寫回搶先），自動重讀後第二次成功。新版在循序與同時兩種連勾都正常",
            "推論：使用者失敗的那個分頁還是舊版頁面（沒有版本檢查功能，不會自己提示）。更正先前判斷：前兩次 409 也可能是「兩項點得很快、兩次寫回同時進行」造成，不一定是 60 秒快取；兩種原因新版都已處理",
            "測試留下的痕跡：baton/handoff.md 多了四個「打勾／取消打勾（儀表板）」commit，內容已還原，只有 `updated` 變成 16:14",
            "頁面左上「產生於…」後面加顯示頁面版本，app-ver 升到 2026-11-17.3",
            "改了：dashboard/projects/index.html、baton/progress.md"
          ],
          "date": "2026-11-17",
          "time": "16:15",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:03 · mac-mini · Claude App",
          "lines": [
            "使用者回報第二次 409（does not match 1bf51b9e…）。查證：1bf51b9e 是勾 14（16:00:03 成功）之前那一版，也就是又拿到舊 sha。在臨時分支實測 GitHub API「寫入後立刻讀」6 輪 18 次全部讀到新版（分支已刪），所以不是 GitHub 延遲；最可能是使用者的瀏覽器還開著 15:55 發布前載入的舊頁面，舊程式仍吃 60 秒快取。這一點是推論，沒辦法直接看到他的分頁",
            "加三道：(1) 頁面帶 `app-ver`，載入與切回分頁時比對線上版本，不同就在頂端出紅條提示重新載入（用帶版本參數的網址，繞過瀏覽器與 CDN 快取）；(2) 記住這一頁自己寫回後的 sha 與內容，之後若讀到的還是寫回前那一版，就用手上較新的那份；(3) 409 重試三次仍失敗時，錯誤訊息會註明已重試與頁面版本，下次回報能分辨是不是舊頁面",
            "驗證：本機預覽用模擬 fetch——讀取永遠回舊版的情況下連勾兩項，第二次 PUT 帶的是第一次寫回後的新 sha、內容兩項都是 [x]；模擬線上版本不同，紅條正確出現。沒有對真的 handoff.md 寫入",
            "baton/CLAUDE.md 專案規則加一條：改 projects/index.html 的程式要改 app-ver",
            "改了：dashboard/projects/index.html、baton/CLAUDE.md、baton/progress.md"
          ],
          "date": "2026-11-17",
          "time": "16:03",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 15:54 · mac-mini · Claude App",
          "lines": [
            "修儀表板勾選寫回的 409：使用者在 /projects/ 勾完 skill-somecw-13 後一分鐘內再勾下一項，出現「寫回失敗：409 … does not match f732fa76…」。根因：GitHub API 的 GET contents 回 `Cache-Control: max-age=60`，瀏覽器把第一次讀到的舊內容與舊 sha 快取住，第二次 PUT 帶的是打勾前那一版的 sha（比對 git 確認 f732fa76 就是 08d2d60 那版）",
            "改法：`gh()` 的 fetch 一律 `cache: \"no-store\"`，讀檔網址另加時間戳；`toggleTask` 遇 409 會重讀最新內容再套一次，最多三次；錯誤物件帶 `status`",
            "驗證：本機預覽用假 token 與模擬的 fetch 跑一次勾選，第一次 PUT 回 409 後自動重讀、第二次用新 sha 成功，寫出的內容該行為 [x]；另對公開倉庫實打一次確認 no-store 不影響跨網域請求。沒有對真的 handoff.md 做任何寫入；假 token 測完已從 localhost 移除",
            "沒勾成的那一項（截圖看是 13 之後的某一項）沒有代勾，等新版上線後由使用者自己再勾",
            "改了：dashboard/projects/index.html、baton/progress.md"
          ],
          "date": "2026-11-17",
          "time": "15:54",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-13 15:26 · mac-mini · Claude App",
          "lines": [
            "補 `.gitignore` 的密碼與憑證規則：`.env`、`.env.*`（保留 .env.example／sample／template）、`*.pem`、`*.p12`、SSH 私鑰檔名、`.netrc`、`.git-credentials`、`credentials.json`、`token.json`、`secrets.*` 等。原因：sync.sh 用 `git add -A`，之後小程式放進 `<專案>/src/` 時，密碼檔會被自動推上 GitHub。刻意不擋 `*.key`（Keynote 簡報副檔名）",
            "驗證：建假檔案用 `git check-ignore` 確認該擋的都擋到、.env.example 與一般程式檔仍會提交，假檔案已刪。另掃過現有追蹤檔：沒有檔名像密碼檔的，也沒有內容像金鑰的",
            "更正先前說法：all-invest 與 skill-somecw 的 `src/` 目前只有 .gitkeep，還沒有任何專案真的把程式放進 Baton",
            "沒做：sync.sh 沒有加「提交前掃描密碼」的防線，忽略規則只擋檔名，擋不了寫在一般程式檔裡的金鑰。Air 當時離線，沒查到它有沒有裝 gh",
            "改了：.gitignore、baton/progress.md"
          ],
          "date": "2026-11-13",
          "time": "15:26",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 10:06 · mac-mini · Claude App",
          "lines": [
            "跟使用者釐清設計：Baton 只同步進度控制檔，不同步專案本體。定出方向：程式與文字進各專案自己的 GitHub 倉庫，素材大檔進雲端硬碟，密碼／虛擬環境／log 不同步。因為會有其他協作者，素材不用 iCloud（對方要 Apple 帳號、沒有 Linux、沒有 API），改用 Google Drive",
            "盤點 Mac mini 的 ~/Project（唯讀）：content-studio 在 GitHub 只有 785 KB、git 追蹤 172 檔 5.6 MB，本機 740M 幾乎都是沒進 git 的素材（sitekit、cards 等）與 .venv，且 26 個改動自 9/29 起沒推；wechatbooks（766M）與會議主持人（1.1G）不是 git；Air 的 ~/Project 只有 Baton",
            "兩台 Mac 裝 Google Drive 電腦版 133.0：安裝檔從 dl.google.com 下載並驗過 Google LLC 簽章與公證，管理員密碼與 Google 登入由使用者本人完成。兩台是同一帳號、串流模式",
            "同步實測：mini 寫入一個小文字檔＋20MB 檔，約 2 分 25 秒後兩檔都出現在 Air，Air 讀取 20MB 花 3 秒，雜湊一致。測試檔已刪，雲端硬碟留下空的 `Baton-assets/` 當素材根目錄",
            "handoff 新增 baton-9（@本人，試用到 11/26 拍板留用或換 Dropbox）與 baton-10（projects.yaml 登記程式倉庫與素材資料夾、儀表板亮燈；等本人點頭才動工），放「把專案搬進來」階段末尾，seq 8→10，沒動其他任務順序。為守 40 行把三組陷阱各併成一條，內容沒丟",
            "沒做：自動 clone／收工自動推專案倉庫、素材搬家，都還沒動。Air 上的安裝程式視窗與 ~/Downloads/GoogleDrive.dmg 沒收（Air 上的東西要本人同意才刪）",
            "改了：baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-12",
          "time": "10:06",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-11 17:07 · macbook-air · Claude App",
          "lines": [
            "協同工作（owner 仍是 mac-mini，本機只改 baton-7 那一行與一條陷阱措辭）",
            "完成 baton-7 的 Air 部分：重跑 `scripts/install.sh macbook-air`。hooks 新增 0 組、~/.claude/CLAUDE.md 與 settings.json 跟執行前完全一樣、origin 可連線",
            "發現：`~/.claude/commands/wrap.md`、`new-project.md` 本來就是指向倉庫的 symlink（11/07 建），新版 /wrap（編號、@ 標籤規則）早已生效。重跑 install.sh 只有「新增指令檔」時才必要，改內容 pull 即可。據此把 baton-7 改成只剩 Groq bot 主機（標 @groq-bot），陷阱措辭同步更正",
            "改了：baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-11",
          "time": "17:07",
          "machine": "macbook-air",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-08 16:27 · mac-mini · Claude App",
          "lines": [
            "使用者新增待辦：儀表板每個待辦要標出對應的 Claude session，不同電腦的 session 與 Groq bot 主機的 session 都要標明。理清後編成 baton-8，放「儀表板改版」階段末尾、baton-6 之後，由 mac-mini 做（沒標 @）；seq 7→8。沒動其他任務順序",
            "為了守 handoff.md 40 行，把「驗 hooks」併進「在 Baton 根目錄開 session…」那條陷阱，內容沒丟",
            "改了：baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-08",
          "time": "16:27",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 22:00 · mac-mini · Claude App",
          "lines": [
            "完成：教學頁頂端的 Session 識別色帶改成公開版：固定用頁面的紅（#da291c）、只顯示「Baton · 2026-11-07」，不再顯示機器代號與 session 序號，分頁標題也不加前綴（VT_SESSION 多了 color 欄位，有 color 就走固定色與不改標題）",
            "改了：dashboard/guide/index.html、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "22:00",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 21:45 · mac-mini · Claude App",
          "lines": [
            "完成：使用者在 Claude app 內建瀏覽器開 /guide/ 用頁面留言功能留了 5 則，我從該分頁用頁面自己的 vtCollectComments() 讀出（刻意不讀整個 localStorage，同網域存著儀表板的 GitHub token）。照留言改：主標題「三個 AI，一本帳」→「Baton 接力棒 AI 管理工具」，01→「以 Git 為核心的做法」，02→「每次完成都會有接力的文件」，03→「GitHub 中樞倉庫」，04→「一天流程」；目錄、<title>、頁尾、dashboards.js 名稱同步改",
            "留言→AI 的正規路：頁面底部「複製給 AI」會把標題＋每則留言與引用原文放進剪貼簿，貼到對話即可；留言只存在該瀏覽器",
            "改了：dashboard/guide/index.html、dashboard/dashboards.js、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "21:45",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 21:42 · mac-mini · Claude App",
          "lines": [
            "實測：「新增待辦」走 Actions 的理清流程成功（Issue #4 → commit 462cc15，從開 Issue 到回覆約 3 分鐘）。Claude 把任務編成 baton-7、放進「機器互連與權限」階段末尾、標 @本人，回覆裡說明為什麼進「下一步」而非某天、為什麼不動其他任務、為什麼標本人；為了守 40 行把兩條 hooks 陷阱合併成一條，內容沒丟",
            "本機已 pull 到那筆 commit，data.js 重建後 seq 7、baton-7 位置正確（1,2,3,4,7,5,6）",
            "改了：baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "21:42",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 21:41 · cloud · GitHub Actions",
          "lines": [
            "來源：儀表板 Issue #4「新增待辦」。新增 baton-7（MacBook Air 與 Groq bot 主機各重跑 install.sh，拿到新版 /wrap），放在「機器互連與權限」階段末尾、baton-4 之後，標 @本人；seq 6→7",
            "為了維持 handoff.md 40 行以內，把兩條 hooks／install.sh 的陷阱合併成一條，內容不變",
            "改了：baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "21:41",
          "machine": "cloud",
          "tool": "GitHub Actions"
        },
        {
          "title": "2026-11-07 21:40 · mac-mini · Claude App",
          "lines": [
            "完成：任務編號 `<slug>-<N>`（front matter `seq`，只增不減）。baton 與 all-invest 的現有任務已套上 baton-1～6、all-invest-1～3；baton 已完成的「階段 1」任務依規則移走騰出一行",
            "完成：任務出生日期從 git 算（`build-dashboard.py` 的 `task_birthdays`，用編號與前 24 字各 `git log -S` 取較早者），儀表板三天內標「新」、十四天以上紅字。本機跑 0.3 秒；`dashboard.yml` checkout 改 `fetch-depth: 0`，否則 Actions 算出來全錯",
            "完成：專案頁「新增待辦」輸入列，開 Issue 指示以「新增待辦：」開頭；`claude-task.yml` prompt 加理清步驟（往不往 goal、哪個階段、排在誰後、誰做）與編號規則，回覆要說放在哪、為什麼。根目錄 CLAUDE.md、範本（seq 與 `__SLUG__-N`）、/wrap 同步加規則",
            "驗證：本機預覽 baton 與 all-invest 專案頁、等你，編號與「新」都正確顯示，無 console 錯誤。Actions 那條路（新增待辦 Issue）沒實測，等線上頁更新後請使用者試一次",
            "設計文件 `baton/docs/dashboard-redesign.md` 補第 8 節，含明確不做的清單",
            "改了：scripts/build-dashboard.py、dashboard/projects/index.html、.github/workflows/dashboard.yml、.github/workflows/claude-task.yml、CLAUDE.md、_templates/project/handoff.md、.claude/commands/wrap.md、baton/docs/dashboard-redesign.md、baton/handoff.md、all-invest/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "21:40",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 21:25 · mac-mini · Claude App",
          "lines": [
            "完成：Stop hook 直接驗到。CLI 重新登入後（到期 2026-12-06），在 baton/ 用無頭 session 跑一回合：SessionStart 與 Stop 各 1 筆 hook_started／hook_response、exit 0；",
            "事先留在 progress.md 的未提交段落被 Stop hook 的 sync.sh 自動 commit 成 7135ed2（訊息 `progress: mac-mini`，本機代號修正生效）並推上 GitHub。至此 /status、/hooks、/wrap 這條驗證線全部收尾",
            "卡住：無",
            "改了：baton/progress.md（handoff.md 沒動，現況已由其他 session 更新到位）"
          ],
          "date": "2026-11-07",
          "time": "21:25",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 21:24 · mac-mini · claude CLI",
          "lines": [
            "Stop hook 驗證：這一段由無頭 session 結束時的 Stop hook（sync.sh）負責 commit 與 push，不是手動跑的"
          ],
          "date": "2026-11-07",
          "time": "21:24",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-07 21:20 · mac-mini · Claude App",
          "lines": [
            "完成：三台機器全部進圈並驗過。Groq bot 主機（Grok Bot app「控制cluade cli」的雲端 Linux）由使用者貼 fine-grained token 進 bot 的加密欄位後，bot 自己 HTTPS clone、跑 install.sh groq-bot、SessionStart／Stop 兩個 hook 都觸發，並推上接力測試段落 e1d6158；mini 與 Air 都拉到。Air 的 Stop hook 由使用者在本機終端機跑無頭 CLI 驗過（結果檔 ~/baton-hook-check.jsonl：SessionStart、Stop 各一組）",
            "完成：教學手冊更新並發布。`baton/site/index.html` 搬到 `dashboard/guide/index.html`，改了：三台機器的接法（mini gh、Air 部署金鑰、Groq bot token、驗 hooks 指令）、儀表板現況（入口頁、完成路徑、兩條寫回）、handoff 的 goal 與現況條列、流水帳歸檔、邊界 06.2、「做到哪還剩什麼」；登錄進 dashboards.js，網址 https://baton.atticus.tw/guide/ 。本機預覽桌機與 375px 無溢出、無 console 錯誤",
            "失誤：本機預覽曾用 8765 埠，那是 book2skill 服務（LaunchAgent）的埠，我把它砍掉過一次，launchd KeepAlive 已自動重啟，服務正常；之後預覽改用 8799",
            "改了：dashboard/guide/index.html（從 baton/site/ 搬來並改寫）、dashboard/dashboards.js、baton/CLAUDE.md、baton/docs/architecture.md、README.md、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "21:20",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 21:11 · mac-mini · Claude App",
          "lines": [
            "完成：儀表板改版階段 1 上線到 `dashboard/projects/`。新視圖「等你」（所有 `@本人` 的未完成任務，跨專案；卡住專案的另標）與「接棒板」（泳道＝機器，WIP 1/1，三天沒動標停滯可接棒）；專案頁加 I-PASS 式狀態列（在跑／等本人／卡住／停滯／未啟動，全部由資料推導）；任務顯示 `@` 標籤；網址 # 改變會重畫（上一頁可用）。今天／即將／隨時／某天先留著，階段 2 再決定",
            "完成：`build-dashboard.py` 解析任務開頭 `@標籤`（`who`／`label`，`text` 保留原文讓寫回逐字比對不受影響），front matter 多讀 `blocked`／`appetite`／`started`，輸出 `machines` 給泳道用",
            "規則：CLAUDE.md、範本 handoff.md、/wrap 加 `@本人`／`@機器` 標籤慣例；baton 的 handoff 套用標籤；原型檔 `baton/site/dashboard-v2.html` 移除、提案文件改指向正式頁",
            "驗證：本機 http.server（埠 8791）桌機與 375px 都看過，等你／接棒板／專案頁正常、無溢出、無 console 錯誤。寫回與開 Issue 沒重測（邏輯沒動，只改顯示）",
            "撞到：同一台機器的另一個 session 在 21:02 改寫 baton/handoff.md，把我加的儀表板待辦蓋掉；以它的版本為準重新補回。寫進陷阱",
            "改了：scripts/build-dashboard.py、dashboard/projects/index.html、dashboard/dashboards.js、CLAUDE.md、_templates/project/handoff.md、.claude/commands/wrap.md、baton/docs/dashboard-redesign.md、baton/handoff.md、baton/progress.md；刪 baton/site/dashboard-v2.html"
          ],
          "date": "2026-11-07",
          "time": "21:11",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 21:05 · mac-mini · Claude App",
          "lines": [
            "完成：找到「Groq bot 主機」。它不是 Tailscale 或 Linode 上的任何機器，而是 Mac mini 上 Grok Bot app（Anysphere 的代理程式，每個 bot 對應一台雲端 Linux）裡「控制cluade cli」那台：使用者 box、家目錄 /home/box、持續存在、git 2.47、python 3.13、Claude CLI 已用 Max 登入、連得到 github.com",
            "卡住：那台主機的出口代理（198.18.0.1）擋掉所有 SSH（22 與 ssh.github.com:443 都被關），只放行 HTTPS。部署金鑰那條路不通，已把加好的 groq-bot 部署金鑰從 GitHub 刪掉；改走 HTTPS＋只給 Baton 的 fine-grained token，bot 已開加密欄位 BATON_GH_TOKEN 等使用者貼",
            "驗證方法：透過 computer-use 在背景操作 Grok Bot 視窗跟 bot 對話，它回報的公鑰用十六進位分行印、本機重建後指紋 SHA256:hE9UX…HWQ 完全吻合（雖然最後用不到）",
            "Air：使用者已 /login，但 SSH 工作階段讀不到 macOS 鑰匙圈（User interaction is not allowed），遠端無頭 CLI 仍回 Not logged in；Stop hook 要在 Air 本機終端機驗",
            "規則：CLAUDE.md、architecture.md、README 寫入「代理機器人參與規則」：經 claude CLI 就交給 hooks，自己改檔就開工 pull、收工 sync.sh；Groq bot 主機只能從 GitHub clone、不能從 Mac 複製",
            "待辦：教學手冊（baton/site/index.html 是 11/05 版、未發布）加進 handoff 下一步",
            "改了：CLAUDE.md、baton/docs/architecture.md、README.md、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "21:05",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 21:00 · mac-mini · Claude App",
          "lines": [
            "完成：儀表板設計提案 `baton/docs/dashboard-redesign.md`。比對 GTD、Things 視圖、Scrum、Kanban、Shape Up、I-PASS、Mission Control 類工具；結論是 Things 的日期驅動單人模型對不上「一個人指揮三台機器」，改成 GTD 骨架（情境＝機器、等待清單、每週檢視）＋ Kanban 泳道（泳道＝機器、WIP 1＝既有 owner 規則）＋ I-PASS 交接結構（補「嚴重度」一眼可見）",
            "完成：原型 `baton/site/dashboard-v2.html`，讀真實的 `dashboard/projects/data.js`，四個視圖：等你／接棒板／每週檢視／記錄簿＋專案頁。桌機與 375px 都驗過，無溢出、無 console 錯誤。本機預覽：`.claude/launch.json` 的 baton-static（埠 8791，8765 被 book2skill 佔著）",
            "提案的資料改動很小且向下相容：任務開頭 `@本人`／`@mac-mini` 標籤、選填 `blocked:`、`appetite:`；停滯與未啟動全自動推導。原型對舊資料用字面推測（標虛線框），正式版靠標籤",
            "原型順手照出一件事：all-invest 與 baton 的 owner 都是 mac-mini，接棒板顯示 Mac mini WIP 2/1，owner 規則在資料上已經破了",
            "改了：baton/docs/dashboard-redesign.md（新）、baton/site/dashboard-v2.html（新）、.claude/launch.json（新）、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "21:00",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 20:59 · groq-bot · Grok Bot",
          "lines": [
            "安裝完成",
            "GitHub 走 HTTPS token",
            "這段由 groq-bot 推上去做接力測試"
          ],
          "date": "2026-11-07",
          "time": "20:59",
          "machine": "groq-bot",
          "tool": "Grok Bot"
        },
        {
          "title": "2026-11-07 20:48 · mac-mini · Claude App",
          "lines": [
            "新增待辦：「專案儀表板設計」加進 handoff.md「下一步／儀表板」階段，排在教學手冊之前；範圍還沒定，等使用者說明",
            "改了：baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "20:48",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 18:20 · mac-mini · Claude App",
          "lines": [
            "完成：MacBook Air 進圈。它的 gh token 已失效、也沒有 GitHub 的 SSH 金鑰，改用 Baton 專用部署金鑰（Air 的 `~/.ssh/id_ed25519_baton`，ssh 別名 `github-baton`，GitHub 端 deploy key「macbook-air (Baton 專用)」可寫入）。clone 到 `~/Project/Baton`、`install.sh macbook-air` 跑完（settings.json 多了 SessionStart／Stop 兩組 hooks、CLAUDE.md 加本機區塊、/wrap /new-project 連結、原設定有備份 `.bak-20261107-*`）",
            "接力驗證：Air 用無頭 claude 看到 SessionStart hook 觸發；Air 追加一段 progress → sync.sh 推上 562d2af → mini pull 到。Stop hook 在 Air 驗不到，因為 claude CLI 回「Not logged in」，要本人 /login",
            "卡住：Groq bot 主機找不到。Tailscale 只有 mac-mini 與 Air 兩個節點；Air 的 ssh config 裡的 Linode（172.104.80.13）是 WordPress／退休金站，沒有 bot 也沒有 claude；km-line-bot 部署在 Cloud Run。等使用者指認",
            "完成：流水帳歸檔機制。新增 `scripts/roll-progress.py`：sync.sh 每次先跑它，把「上個月以前」的段落搬到 `<專案>/progress/YYYY-MM.md`（只追加、merge=union），progress.md 只留本月；確定性＋冪等，在 scratchpad 假裝 12/1 跑過：22 段搬走、再跑一次沒動作。build-dashboard.py 連歸檔檔一起讀，上限 8 段改 80 段",
            "完成：專案頁重排（使用者說「現況」是文字牆）。現況逐行變條列、「前綴：」加粗、`code` 與網址有樣式；陷阱收成「陷阱與注意事項 N 條」可展開；流水帳依日收合只展開最新一天、每段只露三點其餘收「還有 N 點」、上方一條 14 天活動量小圖；記錄簿視圖同樣依日收合。本機 http.server 預覽桌機與 375px 都正常、無 console 錯誤",
            "規則同步：CLAUDE.md、wrap.md、範本、README 都改成「現況用條列、最多三條」並說明歸檔；baton/handoff.md 現況改寫成三條",
            "改了：scripts/roll-progress.py（新）、scripts/sync.sh、scripts/build-dashboard.py、.gitattributes、dashboard/projects/index.html、CLAUDE.md、.claude/commands/wrap.md、_templates/project/handoff.md、README.md、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "18:20",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 18:02 · macbook-air · claude CLI",
          "lines": [
            "install.sh macbook-air 跑完：hooks 合併進 settings.json、/wrap 與 /new-project 連結好、本機代號寫入 ~/.config/baton/machine",
            "GitHub 走 Baton 專用部署金鑰（~/.ssh/id_ed25519_baton，ssh 別名 github-baton），因為 Air 的 gh token 已失效",
            "接力測試：這段由 Air 追加並用 sync.sh 推上去，Mac mini 隨後 pull",
            "claude CLI 尚未登入，Stop hook 要登入後才驗得到"
          ],
          "date": "2026-11-07",
          "time": "18:02",
          "machine": "macbook-air",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-07 16:49 · mac-mini · Claude App",
          "lines": [
            "更正：使用者要的「目標流程圖」是專案儀表板單一專案頁上、由資料動態產生的「做完哪些事就算完成」路徑圖，不是另一份靜態說明頁。/flow/ 那頁先留著，等使用者決定去留",
            "完成：專案頁（/projects/#p:slug）最上方加「完成路徑」圖。handoff.md「下一步」的勾選框依序排成一條路：已完成實心、目前這件紅圈標「現在」、未完成空心、終點黑方塊是 front matter 新欄位 `goal`（做到什麼算完成）；頂端有 N / M 與進度條；點節點會捲到那則待辦。手機改直排",
            "資料結構：build-dashboard.py 多讀 `goal`，「下一步」裡的 `### 階段名` 會變成任務的 phase，圖上標階段。範本 handoff.md、CLAUDE.md 規則同步補上；baton 的 handoff 加了 goal 並分三個階段（鋪好三台機器／把專案搬進來／儀表板），39 行",
            "順手修：手機寬度側欄與主欄被長字串撐開溢出 29px（單欄網格改 minmax(0,1fr)、長路徑可斷行）",
            "測試：playwright 本機渲染 1440 與 390，節點、階段、進度、點擊捲動都正確，無溢出、無 console 錯誤",
            "改了：scripts/build-dashboard.py、dashboard/projects/index.html、_templates/project/handoff.md、CLAUDE.md、baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "16:49",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 16:37 · mac-mini · Claude App",
          "lines": [
            "完成：用 html-visualizer 做「單一專案的目標流程」說明頁（explainer 骨架 A 七段）。核心模型是五道泳道 SVG：持棒的機器／GitHub main／GitHub Actions／儀表板／接棒的機器，8 格 11 線、掛探索層（點格子開說明窗、三個視角）；走一遍用 11/07 的真實 commit（6903803、ea2f6ed、71ba20e）當狀態演進。樣式照使用者指定的 build.atticus.tw/flow 與 /learn：深色首屏、藍色強調、Instrument Serif 加 DM Sans",
            "自檢：verify.py 15 項通過、0 未過（執行期、三寬度版面、字級覆蓋、可讀性）；svg-text-check 通過；實際看過 1440 與 390 截圖。過程修了兩件：.wrap 沒 border-box 造成手機溢出、兩個節點副標超過 150px 框",
            "發布：歸檔在 ~/Documents/claude-html/2026-11/baton-project-flow-2026-11-07.html；同一份複製到 dashboard/flow/index.html，入口頁 dashboards.js 登記第二個儀表板，網址 https://baton.atticus.tw/flow/",
            "工具：機器上原本沒有 playwright 套件（只有 chromium 快取），裝在這個 session 的暫存目錄；下次要跑 verify 的版面健檢得再裝一次或裝到固定位置",
            "改了：dashboard/flow/index.html（新）、dashboard/dashboards.js、baton/progress.md、baton/handoff.md"
          ],
          "date": "2026-11-07",
          "time": "16:37",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 16:17 · mac-mini · Claude App",
          "lines": [
            "完成：儀表板「勾選寫回」第一次由使用者在網頁上真實操作成功 → commit 71ba20e（`[ ]`→`[x]`、updated 改 16:16，作者 atticuswu）→ dashboard.yml 自動重建成功。至此儀表板兩條寫回路徑（勾選、交給 Claude）都已實戰驗證",
            "排錯過程：token 連續兩次 404。用 Chrome 在頁面上以存好的 token 打 API 診斷（只看狀態碼），發現它只看得到 6 個公開倉庫；再到 GitHub 設定頁看，那顆 fine-grained token「Baton」的 Repository access 與 Permissions 都是空的（使用者兩次修改都沒存成）。經使用者同意後在他的 Chrome 裡改好：Only select repositories → Baton，Contents 與 Issues 都 Read and write，Update。改完三個 API 都 200",
            "修：data.js 改成帶時間戳載入，避開 GitHub Pages 的 CDN 快取（cache-control 10 分鐘），寫回後重新整理就看得到；401/403/404 的錯誤提示改成直接說原因",
            "改了：dashboard/projects/index.html、baton/progress.md、baton/handoff.md"
          ],
          "date": "2026-11-07",
          "time": "16:17",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 15:55 · mac-mini · Claude App",
          "lines": [
            "完成：Claude 憑證就位。使用者在 CLI 重新登入後，`claude setup-token` 在 app 終端機分頁跑出 token，直接 `gh secret set CLAUDE_CODE_OAUTH_TOKEN`，本機不留副本（效期一年，到期再跑一次）",
            "真實管線兩次驗證：Issue #1（指示說不要改）→ Claude 讀檔後不動、留言關閉；Issue #2（打勾並記錄）→ commit ea2f6ed、回覆、關閉、儀表板重建。整條「輸入列 → Issue → Claude → commit/push → 各機器 pull」通了",
            "修：commit 訊息摘要原本用 `head -c 60` 按位元組截，中文被切壞；改成 python 按字元截 50 字",
            "剩下：瀏覽器端 fine-grained PAT 還沒放，勾選寫回與送 Issue 的 JS 仍未用真 token 跑過",
            "改了：.github/workflows/claude-task.yml、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "15:55",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 15:51 · mac-mini · Claude App",
          "lines": [
            "完成：儀表板→Claude 的完整流程驗證成功。Issue #2 → claude-task.yml 用 secret `CLAUDE_CODE_OAUTH_TOKEN` 跑 Claude → commit ea2f6ed（打勾、改現況與 next、progress 追加一段，handoff 維持 38 行）→ `gh workflow run dashboard.yml` 重建 → 線上 data.json 已顯示該則 done、updated 15:46",
            "修：commit 訊息用 `head -c 60` 截斷會切壞 UTF-8（ea2f6ed 的訊息尾巴出現「è」），改成 python 依字元截 60 字。這個改動被 Stop hook 的 sync.sh 以 5be4b73 推上去",
            "完成：Stop hook 直接驗證。本機 CLI 已重新登入，在 `baton/` 子資料夾用 `claude -p --include-hook-events` 開新 session：SessionStart 與 Stop 各一筆 hook_started／hook_response、exit 0、outcome success；Stop 的 sync.sh 真的 commit 並 push",
            "作廢：我開的 Issue #3 建立時 grep 抓到兩行、待辦欄寫壞，執行已取消（沒產生 commit）、移除標籤並關閉。#2 已做了同一件事",
            "改了：.github/workflows/claude-task.yml、baton/progress.md、baton/handoff.md"
          ],
          "date": "2026-11-07",
          "time": "15:51",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 15:46 · cloud · GitHub Actions",
          "lines": [
            "來源：儀表板 Issue #2。使用者回報 Actions 的 Claude 憑證已完成：Mac mini CLI 重新登入、跑 `claude setup-token`、存成 secret `CLAUDE_CODE_OAUTH_TOKEN`（15:45），Issue #1 重跑成功",
            "完成：把 handoff.md 該則待辦打勾，現況改成「只差瀏覽器 PAT」，next 同步調整，updated 改 15:46",
            "改了：baton/handoff.md、baton/progress.md"
          ],
          "date": "2026-11-07",
          "time": "15:46",
          "machine": "cloud",
          "tool": "GitHub Actions"
        },
        {
          "title": "2026-11-07 13:53 · mac-mini · Claude App",
          "lines": [
            "完成：儀表板第二階段。專案儀表板的每則待辦可以直接操作，token 存瀏覽器 localStorage（左下角「設定 token」）",
            "1. 勾選框：瀏覽器用 GitHub API 讀 `<slug>/handoff.md`，核對同一行文字後改 `[ ]`／`[x]`、更新 `updated`，PUT 回 main。build-dashboard.py 每則待辦多帶 `line` 與 `file`",
            "2. 輸入列：送出就在 Baton 開一個帶 `claude` 標籤的 Issue。新 workflow `.github/workflows/claude-task.yml`：解析 Issue → `claude -p` 依指示只改該專案資料夾（hooks 關掉、acceptEdits、工具白名單）→ commit、pull --rebase、push → 回覆並關閉 Issue → `gh workflow run dashboard.yml` 重建",
            "3. 其他機器靠 SessionStart 的 pull 拿到這些 commit，等於「丟回 git push 同步所有專案」",
            "選擇 GitHub Actions 當執行端而不是 Mac mini 本機排程：沒有一台機器保證醒著（Air 會睡、mini 的 CLI 登入過期），Actions 不用",
            "待使用者提供：瀏覽器用 fine-grained PAT（Baton 的 Contents＋Issues 讀寫）、Actions secret `CLAUDE_CODE_OAUTH_TOKEN` 或 `ANTHROPIC_API_KEY`。沒有 secret 時 workflow 會在 Issue 留言說缺什麼",
            "測試：Issue #1 走一次管線 → 解析正確、留言「缺 secret」、失敗回報都如預期，已關閉。發現帶標籤開 Issue 會同時觸發 opened 與 labeled 而跑兩次，改成只聽 labeled（重跑＝把標籤移除再加回去）",
            "線上頁面實測（強制重載）：7 則待辦各有輸入列、左下角有 token 設定、沒 token 時點勾選框會提示、無 console 錯誤。勾選寫回與 Issue 送出的完整流程要等使用者放 token 才能驗，這兩段 JS 尚未用真 token 跑過",
            "改了：scripts/build-dashboard.py、dashboard/projects/index.html、.github/workflows/claude-task.yml、README.md、CLAUDE.md、baton/progress.md、baton/handoff.md"
          ],
          "date": "2026-11-07",
          "time": "13:53",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 13:47 · mac-mini · Claude App",
          "lines": [
            "完成：儀表板綁自訂網域 https://baton.atticus.tw/ ，並改成「一個網址放多個儀表板」的結構",
            "`dashboard/` 整個資料夾就是站台：根目錄 `index.html` 是入口頁，讀 `dashboards.js` 登錄表列出所有儀表板；`CNAME` 寫 baton.atticus.tw",
            "專案儀表板搬到 `dashboard/projects/`（index.html、data.js、data.json），build-dashboard.py 輸出路徑跟著改；左上加「← 所有儀表板」",
            "workflow 本身不用改（本來就是整個 dashboard/ 原樣覆蓋推到 baton-dashboard）；只改了註解裡的網址",
            "DNS：用 ~/.config/cloudflare/token 在 atticus.tw zone 建 CNAME `baton` → atticuswu.github.io，DNS only（不走 Cloudflare proxy，GitHub 才簽得出憑證）",
            "GitHub Pages 從推上去的 CNAME 檔自動吃到自訂網域；HTTP 已驗證根目錄與 /projects/ 都是新版",
            "HTTPS：憑證幾分鐘內就簽好了，已 `https_enforced=true`；舊網址 atticuswu.github.io/baton-dashboard/ 會 301 轉到新網址。用瀏覽器實際開過入口頁與 /projects/，資料正常、無 console 錯誤",
            "卡住：無",
            "改了：dashboard/index.html（新入口）、dashboard/dashboards.js、dashboard/CNAME、dashboard/projects/*、scripts/build-dashboard.py、.github/workflows/dashboard.yml、CLAUDE.md、README.md、baton/progress.md、baton/handoff.md"
          ],
          "date": "2026-11-07",
          "time": "13:47",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 13:45 · mac-mini · Claude App",
          "lines": [
            "依 ~/Downloads/HANDOFF-mac-mini.md（11/05 版）核對：第 1–6、8 步前幾個 session 已做完，實際剩下的是合併 ~/Downloads/projects-hub.bundle 裡 11/07 13:28 從 2f6099a 分出的新 commit 58612dd",
            "完成：cherry-pick 58612dd 到 main。衝突五檔：README（兩邊各取一行）、install.sh（檔頭註解合成五項）、handoff.md（取 main 的 updated）、dashboard/data.js 與 data.json（取 main 後重產）。帶進來的東西：`/new-project` 指令、`baton/docs/new-project-flow.md`、install.sh 改成連結 `.claude/commands/` 全部 .md、待辦「機器互連」",
            "本機重跑 `install.sh mac-mini`：settings.json 與 ~/.claude/CLAUDE.md 零差異，`~/.claude/commands/new-project.md` 已連結",
            "macOS 相容性：沙盒副本跑 `sync.sh`（無改動安靜退出 exit 0）與 `new-project.sh zz-test`（資料夾、projects.yaml、handoff 日期都正確），BSD sed/date 沒問題，腳本不用改",
            "意外：合併結果被 Stop hook 的 sync.sh 搶先 commit 成 `24773e9 progress: mac-mini 2026-11-07T13:37` 並推上 origin，訊息是通用的但內容正確；不重寫歷史。原因是使用者層 Stop hook 對這台機器上「任何」Claude 工作階段都會觸發，別的回合一結束就會把 Baton 工作區當下的狀態全部 commit",
            "卡住：無。Stop hook 的直接驗證仍待使用者在終端機 /login",
            "改了：.claude/commands/new-project.md、baton/docs/new-project-flow.md、CLAUDE.md、README.md、scripts/install.sh、dashboard/data.js、dashboard/data.json、baton/progress.md、baton/handoff.md"
          ],
          "date": "2026-11-07",
          "time": "13:45",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 13:33 · mac-mini · Claude App",
          "lines": [
            "完成：修掉昨天驗 hooks 找到的兩個 sync.sh 問題",
            "1. 互斥鎖：用 `mkdir .git/baton-sync.lock` 當鎖，搶不到的那份直接退出；鎖超過 10 分鐘視為殘留會清掉重來。沙盒並行 5 輪：零 fatal 訊息、每輪都 commit＋push、工作區乾淨；殘留鎖會被清掉、新鮮鎖會讓第二份靜靜退出",
            "2. 本機代號：install.sh 多做一件事，把代號寫進 `~/.config/baton/machine`；sync.sh 與 new-project.sh 讀取順序改為 MACHINE_ID 環境變數 > 該檔 > hostname。沙盒 commit 訊息已變回 `progress: mac-mini`",
            "本機已重跑 `install.sh mac-mini`：冪等確認（settings.json 無差異、CLAUDE.md 其他區塊沒被動到），產生了代號檔",
            "卡住：無。Stop hook 的直接驗證仍要等使用者在終端機 /login",
            "改了：scripts/sync.sh、scripts/install.sh、scripts/new-project.sh、README.md、baton/progress.md、baton/handoff.md"
          ],
          "date": "2026-11-07",
          "time": "13:33",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-07 10:00 · cloud · 雲端 session",
          "lines": [
            "新增待辦「機器互連」：三台機器開 Remote Control 或 SSH，讓任何 session 都能在另一台建立資料",
            "寫新專案啟動流程 docs/new-project-flow.md（含搬既有專案、檢查清單），做成 /new-project 指令",
            "install.sh 改成連結 .claude/commands/ 底下所有指令"
          ],
          "date": "2026-11-07",
          "time": "10:00",
          "machine": "cloud",
          "tool": "雲端 session"
        },
        {
          "title": "2026-11-06 12:16 · mac-mini · Claude App",
          "lines": [
            "完成：驗證 hooks。Claude App 的 session 叫不出互動式的 /status、/hooks，改用無頭 CLI（`claude -p --include-hook-events --debug-file`）開真的新 session 抓事件：",
            "在 `baton/` 子資料夾啟動 → 使用者層設定有載入、SessionStart 跑 1 個 hook、exit 0、/wrap 指令有出現；本 session 啟動當下 `.git/FETCH_HEAD` 也同步更新，SessionStart 的 pull 確實有跑",
            "發現一：在 Baton 根目錄啟動時，使用者層與專案層的 hook 各跑一次（SessionStart 2 筆），Stop 時 sync.sh 會同時跑兩份。",
            "沙盒副本並行實測 5 輪：每輪都噴 `index.lock` 的 fatal 訊息，但最後都有 commit、有 push、工作區乾淨，屬於吵但沒壞；尚未修",
            "發現二：`MACHINE_ID` 沒有任何地方設定，sync.sh 退回 `hostname -s`，hook 產生的 commit 訊息標的是主機名而不是 `mac-mini`；尚未修",
            "卡住：Stop hook 沒能用無頭 CLI 驗到——這台終端機版 claude CLI 的登入已過期（OAuth refresh token 失效），模型呼叫失敗、回合沒正常結束，Stop 不會觸發。要使用者本人在終端機跑 `claude` 後 /login",
            "/wrap 本身：這一段就是 /wrap 寫的，接著跑 sync.sh 並到 GitHub 確認 commit",
            "改了：baton/progress.md、baton/handoff.md"
          ],
          "date": "2026-11-06",
          "time": "12:16",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-06 12:06 · mac-mini · Claude App",
          "lines": [
            "完成：儀表板上線，網址 https://atticuswu.github.io/baton-dashboard/ ，用瀏覽器實際開過，畫面與資料正常、無 console 錯誤",
            "做法：使用者決定另開公開倉庫。建了 `atticuswu/baton-dashboard`（公開），改寫 dashboard.yml：產生 dashboard/ 後用部署金鑰",
            "以單一 commit 覆蓋推過去（公開倉庫不留舊交接內容），再由那邊的 Pages 從 main 根目錄發布",
            "金鑰：ed25519 部署金鑰在本機產生後已刪除；私鑰只存在 Baton 的 Actions secret `DASHBOARD_DEPLOY_KEY`，公鑰登記為 baton-dashboard 的可寫入 Deploy key",
            "先前 workflow 每次 push 失敗的問題一併解決，第一次新版執行成功",
            "卡住：無。但儀表板網址沒有存取控制，權限設計仍待做",
            "改了：.github/workflows/dashboard.yml、README.md、baton/CLAUDE.md、baton/docs/architecture.md、baton/site/index.html、baton/progress.md、baton/handoff.md"
          ],
          "date": "2026-11-06",
          "time": "12:06",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-06 11:59 · mac-mini · Claude App",
          "lines": [
            "完成：照 HANDOFF-mac-mini.md 建私有倉庫 atticuswu/Baton、從 bundle 還原到 ~/Project/Baton 並推上去（remote 用 HTTPS，這台 SSH 連不到 GitHub）；",
            "跑 `install.sh mac-mini`，hooks 合併進 ~/.claude/settings.json、機器層區塊加進 ~/.claude/CLAUDE.md、/wrap 已連結，重跑確認冪等、原有設定沒被動到",
            "前置處理：這台 git 全域身分原本是空的，設成 Atticus Wu <atticus.wu@gmail.com>；gh token 原本沒有 `workflow` 權限，推 dashboard.yml 會被拒，已補上",
            "macOS 實跑三支腳本（bash 3.2、BSD sed／date、python 3.9）：install.sh、new-project.sh、sync.sh 都不用改；zz-test 測完已刪、projects.yaml 已還原",
            "修掉一個和平台無關的 bug：build-dashboard.py 每次都把當下時間寫進 `generated`，sync.sh 每輪都跑它，結果完全沒改動也會每分鐘產生一個 commit 並 push。",
            "改成專案內容沒變就不重寫 data.js／data.json。實測：舊版跨分鐘必有差異；新版無差異、sync.sh 安靜結束、HEAD 不動；專案檔有變時仍會重寫",
            "卡住：開 GitHub Pages 回 422「Your current plan does not support GitHub Pages for this repository」，Free 方案的私有倉庫不能開 Pages。",
            "連帶 dashboard workflow 每次 push 到 handoff／progress 都會在部署那步失敗。要使用者決定儀表板怎麼上線",
            "還沒做：使用者開新 session 驗證 /status、/hooks、/wrap",
            "改了：scripts/build-dashboard.py、baton/progress.md、baton/handoff.md；倉庫外：~/.claude/settings.json、~/.claude/CLAUDE.md、~/.claude/commands/wrap.md（改前備份為 *.pre-baton）、~/.gitconfig"
          ],
          "date": "2026-11-06",
          "time": "11:59",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-05 17:00 · cloud · 雲端 session",
          "lines": [
            "中樞路徑改成可配置：install.sh 把實際路徑代入 hooks 與機器層 CLAUDE.md，sync.sh 從自身位置推算根目錄",
            "文件全面改用 ~/Project/Baton 與 atticuswu/Baton；在自訂路徑下重測 install.sh 與 sync.sh 通過"
          ],
          "date": "2026-11-05",
          "time": "17:00",
          "machine": "cloud",
          "tool": "雲端 session"
        },
        {
          "title": "2026-11-05 16:50 · cloud · 雲端 session",
          "lines": [
            "專案正式命名 Baton（接力棒），資料夾 multi-machine-ops 改名 baton，所有引用同步更新"
          ],
          "date": "2026-11-05",
          "time": "16:50",
          "machine": "cloud",
          "tool": "雲端 session"
        },
        {
          "title": "2026-11-05 16:40 · cloud · 雲端 session",
          "lines": [
            "兩次嘗試 gh repo create：一次被自動權限判斷擋下，一次放行後撞到雲端憑證只能操作已綁定倉庫的硬限制",
            "決定交棒給 Mac mini 本機 session，寫了倉庫外的 HANDOFF-mac-mini.md 與 git bundle 一起交付"
          ],
          "date": "2026-11-05",
          "time": "16:40",
          "machine": "cloud",
          "tool": "雲端 session"
        },
        {
          "title": "2026-11-05 16:20 · cloud · 雲端 session",
          "lines": [
            "用假 HOME 與裸倉庫完整測試 install.sh、new-project.sh、sync.sh，六個情境全過",
            "發現並修掉三個漏洞：(1) 沒設 git 身分的機器 commit 與 rebase 會卡住，改用本機代號代替；",
            "(2) 兩台同時在 progress.md 結尾追加 git 一樣會報衝突，加 .gitattributes 設 merge=union 後兩邊都保留；",
            "(3) 衝突解完或上次 push 失敗後，本機領先遠端但沒新改動，舊版 sync.sh 永遠不會推，改成看「領先數」",
            "沒有追蹤分支時改成直接 push -u",
            "儀表板在桌機與手機截圖確認，無腳本錯誤"
          ],
          "date": "2026-11-05",
          "time": "16:20",
          "machine": "cloud",
          "tool": "雲端 session"
        },
        {
          "title": "2026-11-05 15:30 · cloud · 雲端 session",
          "lines": [
            "建中樞倉庫骨架：根層 CLAUDE.md、projects.yaml、.gitignore",
            "scripts/：sync.sh、install.sh（合併 hooks、寫機器層 CLAUDE.md、連結 /wrap）、new-project.sh、",
            "build-dashboard.py、hooks.json、machine-CLAUDE.md",
            ".claude/settings.json（雲端與根目錄啟動用）、.claude/commands/wrap.md",
            "_templates/project/ 範本；dashboard/index.html（Things 樣式唯讀）；.github/workflows/dashboard.yml",
            "兩個專案的控制檔：baton（本專案）、all-invest",
            "卡住：這個雲端 session 不一定能直接建 GitHub 倉庫，如果不行就留 bundle 給 Mac mini 推"
          ],
          "date": "2026-11-05",
          "time": "15:30",
          "machine": "cloud",
          "tool": "雲端 session"
        },
        {
          "title": "2026-11-05 · cloud · 雲端 session",
          "lines": [
            "釐清 iCloud 不能取代 git：Groq bot 掛不到、儀表板讀不到、衝突變副本",
            "用瑞士風格做了白話教學頁 `site/index.html`，html-visualizer 自檢 14 項全過",
            "查官方文件確認：專案層 .claude/settings.json 只讀啟動資料夾、不往上找；CLAUDE.md 才會往上找。",
            "因此 hooks 改放每台機器的 ~/.claude/settings.json，sync.sh 固定對 ~/Project/Baton 動作"
          ],
          "date": "2026-11-05",
          "time": "",
          "machine": "cloud",
          "tool": "雲端 session"
        },
        {
          "title": "2026-11-03 · cloud · 雲端 session",
          "lines": [
            "討論需求：三台機器、兩種 AI 服務、專案散落，要一個 dashboard 和統一的 progress.md 機制",
            "決定核心架構：一個 Git 中樞倉庫當唯一真相，session 開始 pull、結束 push，dashboard 是視圖不是資料",
            "查了 GitHub 現成方案：claude-handoff、kanban-md、claude-console 等，結論是零件可借、整套要自己組"
          ],
          "date": "2026-11-03",
          "time": "",
          "machine": "cloud",
          "tool": "雲端 session"
        }
      ],
      "machines": []
    },
    {
      "slug": "content-studio",
      "name": "Content Studio",
      "area": "內容事業",
      "status": "active",
      "owner": "mac-mini",
      "next": "11/18 兩站排程跑完後（失眠圖書館 07:50、策略拆解室 11:20）確認都有新稿，再把 content-studio-1 打勾",
      "due": "",
      "goal": "",
      "blocked": "",
      "appetite": "",
      "started": "",
      "updated": "2026-11-20T15:00+08:00",
      "now": "- 編輯台：兩個粉專平日自動產文、Telegram 審核後發 FB 並同步網站；11/17 雲端與本機健檢都回 ok，11/16 剛上線「台積電站封面改從照片庫挑圖」。\n- 新站工廠：失眠圖書館、策略拆解室空轉一個月的原因已修（書庫寫不出的題目卡在候選池最前面，現在會自動略過換下一題），11/17 手動各跑一次都有寫出稿並送審；三個新站仍沒有正式網址。\n- 程式碼：11/20 站內 tag 與麵包屑已提交並部署到雲端（七個站每篇 3–4 個 tag、首頁有 tag 區塊、文章頁三層麵包屑）；`shared-review-bot` 本機到 `fc5fc25`，比 GitHub 多 2 個 commit、還沒 push，main 也還沒跟上。工作區剩站群互連與兩包交接文件等其他 session 的未提交改動，另加一份刻意先不提交的正式站搬遷紀錄。",
      "file": "content-studio/handoff.md",
      "seq": "9",
      "tasks": [
        {
          "text": "content-studio-1 確認失眠圖書館、策略拆解室 11/18 的排程自己跑出新稿（修正已上、11/17 手動跑過；連兩天有稿才算好）",
          "id": "content-studio-1",
          "label": "確認失眠圖書館、策略拆解室 11/18 的排程自己跑出新稿（修正已上、11/17 手動跑過；連兩天有稿才算好）",
          "who": "",
          "done": true,
          "line": 19,
          "phase": "",
          "added": "2026-11-17",
          "done_on": "2026-11-18"
        },
        {
          "text": "content-studio-2 @本人 決定 `shared-review-bot` 要不要 push 上 GitHub、要不要併回 main（75 個 commit 目前只存在 mac-mini）",
          "id": "content-studio-2",
          "label": "決定 `shared-review-bot` 要不要 push 上 GitHub、要不要併回 main（75 個 commit 目前只存在 mac-mini）",
          "who": "本人",
          "done": true,
          "line": 20,
          "phase": "",
          "added": "2026-11-17",
          "done_on": "2026-11-18"
        },
        {
          "text": "content-studio-3 @本人 三個新站的首圖樣式拍板（每站前三名已評出），並決定要不要先修「判定字太小、站名太小、標題後半每篇一樣」",
          "id": "content-studio-3",
          "label": "三個新站的首圖樣式拍板（每站前三名已評出），並決定要不要先修「判定字太小、站名太小、標題後半每篇一樣」",
          "who": "本人",
          "done": true,
          "line": 21,
          "phase": "",
          "added": "2026-11-17",
          "done_on": "2026-11-18"
        },
        {
          "text": "content-studio-7 本人已拍板（content-studio-4）：把外國交易所照片移出台積電站封面通用池，並一併處理 FB 貼文每天同一張廠房照片（改成會輪替或依內容挑圖）；需動程式碼倉庫，改完跑 pytest、重啟服務驗證",
          "id": "content-studio-7",
          "label": "本人已拍板（content-studio-4）：把外國交易所照片移出台積電站封面通用池，並一併處理 FB 貼文每天同一張廠房照片（改成會輪替或依內容挑圖）；需動程式碼倉庫，改完跑 pytest、重啟服務驗證",
          "who": "",
          "done": true,
          "line": 22,
          "phase": "",
          "added": "2026-11-17",
          "done_on": "2026-11-18"
        },
        {
          "text": "content-studio-5 盤點程式碼倉庫的未提交改動與根目錄搬遷殘留，列清單給本人確認後再提交或清掉",
          "id": "content-studio-5",
          "label": "盤點程式碼倉庫的未提交改動與根目錄搬遷殘留，列清單給本人確認後再提交或清掉",
          "who": "",
          "done": true,
          "line": 23,
          "phase": "",
          "added": "2026-11-17",
          "done_on": "2026-11-19"
        },
        {
          "text": "content-studio-9 @本人 決定 `shared-review-bot` 要不要併回 main（分支 11/18 已 push；content-studio-2 的後半題，盤點完未提交改動再決定較乾淨）",
          "id": "content-studio-9",
          "label": "決定 `shared-review-bot` 要不要併回 main（分支 11/18 已 push；content-studio-2 的後半題，盤點完未提交改動再決定較乾淨）",
          "who": "本人",
          "done": true,
          "line": 24,
          "phase": "",
          "added": "2026-11-17",
          "done_on": "2026-11-19"
        },
        {
          "text": "content-studio-6 新站工廠的排程失敗時要發通知（現在只寫進錯誤日誌，這次兩站空轉一個月沒人發現）",
          "id": "content-studio-6",
          "label": "新站工廠的排程失敗時要發通知（現在只寫進錯誤日誌，這次兩站空轉一個月沒人發現）",
          "who": "",
          "done": true,
          "line": 25,
          "phase": "",
          "added": "2026-11-17",
          "done_on": "2026-11-19"
        },
        {
          "text": "content-studio-8 讓同事管的五個網域能經夥伴 API 自動接上新站工廠的站（先拿失眠圖書館接第一個網域驗收：網址換好、本人帳號拿到 Search Console 權限才算完成）〔進行中 · mac-mini · 11/18 12:43 起〕",
          "id": "content-studio-8",
          "label": "讓同事管的五個網域能經夥伴 API 自動接上新站工廠的站（先拿失眠圖書館接第一個網域驗收：網址換好、本人帳號拿到 Search Console 權限才算完成）〔進行中 · mac-mini · 11/18 12:43 起〕",
          "who": "",
          "done": false,
          "line": 26,
          "phase": "",
          "added": "2026-11-18"
        }
      ],
      "completed": [],
      "traps": "- 這個檔和 progress.md 會發佈到公開儀表板，不寫帳號、主機位址、金鑰位置；細節放 `docs/` 或程式碼倉庫的 `docs/`。\n- `shared-review-bot` 本機（`fc5fc25`）比 GitHub（`9ab3ec4`）多 2 個 commit、還沒 push，也沒併回 main；之後新 commit 落在哪個分支要留意，兩邊別分岔。雲端跑的是 `eb8ca0d` 的映像。排程失敗通知的事故經過寫在 commit 訊息與 `sitekit/pipeline.py` 的註解裡。\n- 儀表板待辦的輸入列：改交接單由雲端 Claude 做；要動程式碼倉庫（push、跑測試、重啟服務）就以 `@mac-mini` 開頭，會轉派到 mac-mini 在程式碼資料夾執行，整件完成才自動打勾（11/18 起；當天稍早送的「git psuh」沒有 push，分支是本人在 mac-mini session 確認後推的）。\n- 排程失敗通知（11/19）只涵蓋找題、寫稿、Threads token 續期三個排程拋錯或候選池沒題可寫；審核機器人沒綁定、Telegram 連不上、機器關機或排程沒觸發仍然不會通知，也沒有去重（同一原因每天一則）。還沒用真的失敗驗收過。\n- 被略過的題目沒有進冷卻期：同一個品項還在流行的話，隔天搜尋可能再入池、再被略過，只會多一行日誌，不會卡住。\n- 網站 tag 的規則（11/20）：只從各站固定清單選、每篇 3–4 個、不到 3 篇的 tag 頁不給搜尋引擎收錄；任何網站層級的更新都要涵蓋工廠的站＋台積電站、黑科技、職場圖書館。要加新詞得同時補英文網址代稱，位置寫在編輯手冊第八節。兩個 Ghost 站的佈景是手改的，升級後要照 `docs/ghost-theme/` 重套。\n- 踩過的坑（Cloud Run、Ghost 封面、Juksy、Gemini、潤稿保真）都在程式碼倉庫 `docs/HANDOFF.md`，動手前先讀；它的「系統現況」表多半停在 8 月，現況以這份為準。\n- 多個 session 共用同一個工作目錄與分支：提交用明確路徑 add，別用 `git add -A`，不然其他 session 寫到一半的改動會被帶進去。`sitekit/` 的 `__main__.py`、`factory.py`、`profile.py`、`sites/gout.json` 與 `docs/SITEKIT.md` 在 git 裡是不含站群互連的版本（那段屬於另一個 session 還沒提交的工作，工作區顯示為已修改是正常的）。`docs/ghost-prod-daily-seminews.md` 多的幾行含主機登入資訊，本人 11/19 決定先不提交，別順手帶進 commit。搬遷殘留五個檔 11/19 移到 mac-mini 垃圾桶、還沒清空；新站上線清單搬到 `docs/`，正本仍在 ghost-seo-tw skill 裡。\n- content-studio-8 已交辦給 mac-mini（11/18 起標進行中），目前等它回報；失眠圖書館網址換好、本人帳號拿到 Search Console 權限之前不要打勾，也不用重複轉派。\n- 其餘未結事項（三站正式網址、痛風站 Threads 憑證等）是從舊 session 整理的、還沒逐項驗證，列在 `docs/sessions.md`，要做之前先確認是否仍有效。",
      "progress": [
        {
          "title": "2026-11-20 15:00 · mac-mini · Claude App",
          "lines": [
            "站內 tag 與麵包屑收尾：本人回「要」，兩個程式碼倉庫都提交、雲端重新部署。這件事 11/19 起做了兩天（本人三次追加：tag 要從進站關鍵字選、每篇至少 3–4 個、首頁也要有 tag），之前都沒提交",
            "做到：七個站（工廠的四個站＋台積電站、黑科技、職場圖書館）每篇 3–4 個 tag、只從各站固定清單選；首頁有 tag 區塊；文章頁有三層麵包屑與對應的結構化資料；不到 3 篇的 tag 頁不給搜尋引擎收錄。新站工廠開新站時會自動套用，全面檢查多四項",
            "提交：content-studio `eb8ca0d`（32 個檔）與 `fc5fc25`（補 tag 腳本改成預設只動不合格的文章）；職場圖書館的倉庫 `e70e0eb`。都沒有 push",
            "共用檔案裡另一個 session 的站群互連改動沒有帶進去：五個混在一起的檔只挑出 tag 的段落暫存。提交前把「只含要提交內容」的副本匯出來跑測試，793 個全過；工作目錄 811 個全過；職場圖書館 41 個全過",
            "部署：雲端換成 `eb8ca0d` 的映像，新修訂版就緒、流量 100%，健檢回 ok，啟動日誌沒有錯誤。上次部署到這次之間影響雲端的程式只有這批 tag 改動",
            "驗證：用同一份程式替兩個粉專各試選一次，都回 4 個清單內的 tag。台積電站今天那篇是部署前發的、只掛到一個 tag，已補成 4 個；黑科技最新五篇都是 3–4 個",
            "還沒達標的：ETF 讀書會 3 篇只有 2 個、黑科技 2 篇（0 個與 1 個）、職場圖書館 1 篇只有 2 個——清單裡沒有貼切的詞，沒有硬湊",
            "沒做的：兩個倉庫都沒 push；黑科技舊的熱搜詞空 tag 沒刪（已不給收錄）；雲端新規則還沒經過一次真的排程發文，下週一的文章要回頭看一眼",
            "改了：程式碼倉庫如上；主機上各站的外掛與佈景是 11/19–11/20 已經上線的，這次沒有再動；中樞 content-studio/handoff.md（現況第三條、三條陷阱、updated）與本檔"
          ],
          "date": "2026-11-20",
          "time": "15:00",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-20 13:00 · mac-mini · Claude App",
          "lines": [
            "content-studio-8 做到：執行包上傳到本人的 Google Drive，新開一個資料夾放五個檔（給同事本人的一頁說明、給 AI 的規格、任務清單、腳本、整包 zip），檔案大小與本機一致。資料夾目前是私人的，還沒分享給同事",
            "卡在等本人：決定資料夾怎麼分享、把金鑰單獨交給同事",
            "改了：沒有動程式碼倉庫"
          ],
          "date": "2026-11-20",
          "time": "13:00",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-20 12:55 · mac-mini · Claude App",
          "lines": [
            "content-studio-8 做到：同事端仍未開始（再查一次，DNS、TXT、API 紀錄都沒變）。本人要再整理一次文件請同事去做，所以在執行包裡加了一份給同事本人看的一頁說明（要做的兩件事、手動步驟、五筆 TXT 值、需要他同意的權限範圍、卡住怎麼辦、做完回報什麼），原本給 AI 的規格不變",
            "卡在等本人把新版 zip 與金鑰交給同事",
            "改了：程式碼倉庫 `docs/handoff-partner-domains/` 新增 `README-Jay.md`、`AGENT.md` 檔案表加一列、zip 重新打包（皆未提交）"
          ],
          "date": "2026-11-20",
          "time": "12:55",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-20 11:56 · mac-mini · Claude App",
          "lines": [
            "content-studio-8 查同事端進度：還沒開始。失眠圖書館仍掛預覽網址、正式網址欄位是空的；要接的子網域在 DNS 查不到；五個網域的 Search Console TXT 都還沒加；夥伴 API 這三天的請求全是本機自己測的，沒有同事那把金鑰從外面進來的紀錄（連 ping 都沒有）",
            "卡在等同事動手；沒有改任何檔案或站台"
          ],
          "date": "2026-11-20",
          "time": "11:56",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-19 13:28 · mac-mini · Claude App",
          "lines": [
            "content-studio-5 收尾：本人回「照建議辦」（A 刪、B 搬、C／E／F 提交、D 採用新圖、G 先不提交）。A 在前一段已移進垃圾桶；這次在 `shared-review-bot` 上分五筆提交 B–F 並推上 GitHub，分支現在到 `9ab3ec4`，連同先前沒推的排程失敗通知那筆一起推了。待辦打勾",
            "B `094dcc1`：根目錄三份文件搬進 `docs/` 並提交；`docs/teaching/HANDOFF.md` 裡「在 repo 根目錄、未進 git」的說明改成新位置。新站上線清單與 ghost-seo-tw skill 裡的正本不同（這份不含聯絡資訊），兩份都是今天 12:22 被別的 session 改過，沒有合併、沒動 skill",
            "C `f636cf3`：ETF、失眠圖書館、策略拆解室三站的設定檔與六張圖示。設定檔提交的是拿掉 `tags` 區塊的版本：那段是今天另一個 session 的站內標籤工作寫進去的，對應程式還沒提交；工作區的檔案沒動，所以這三個檔仍顯示為已修改",
            "D `f56b009`：首圖樣式圖刪三張舊對照表、加三張新縮圖。E `43e294b`：教學模式三份 Threads 快照更新、補上兩份被程式讀取卻沒進版控的 json。F `9ab3ec4`：兩包交接文件（各自的 zip 不進版控，`.gitignore` 加了一條規則）",
            "提交前掃過這批文字檔：沒有密鑰樣式、沒有主機位址、沒有 email；唯一像手機號碼的是一個公開 Threads 帳號名稱",
            "測試：把已提交內容匯出成乾淨副本跑，769 個全過（確認提交的東西自己站得住）；工作目錄（含別的 session 未提交的程式）804 個全過",
            "沒做的：G 那份文件的 6 行照決定留在工作區不提交；main 沒有併，落後分支 6 個 commit；垃圾桶還沒清空；`docs/HANDOFF.md` 指向已移走的搬遷指南那句沒修（那份文件別的 session 正在改）；沒有重啟任何服務（這批只有文件、設定與資料入版控，工作目錄裡排程實際讀到的檔案內容沒變，只有三份文件換了位置）",
            "工作區剩 30 筆未提交：站群互連、站內標籤、Ghost 佈景、另一包交接文件（openline 首頁）等，都是其他 session 進行中的工作，沒碰",
            "改了：程式碼倉庫五筆 commit（上列）；中樞 content-studio/handoff.md（現況第三條、content-studio-5 打勾、兩條陷阱、updated）與本檔"
          ],
          "date": "2026-11-19",
          "time": "13:28",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-19 13:24 · mac-mini · Claude App",
          "lines": [
            "content-studio-5 的 A 組（搬遷殘留）：本人在對話裡說「執行A」，把程式碼倉庫根目錄的五個檔移進 mac-mini 的垃圾桶（同一個資料夾，名稱帶 content-studio 與日期），沒有直接永久刪除：`migrate-to-mini.tgz`、`content-studio.bundle`、舊 `HANDOFF.md`、`SETUP-MINI.md`、`action-prompt.txt`",
            "動手前核對：五個檔都是未追蹤、8/24–8/25 的舊檔；bundle 驗證完整，裡面唯一的 commit 已在遠端 main；程式與測試沒有引用這五個檔（只有 `.gcloudignore` 的排除清單列了其中兩個，留著無害）",
            "留下一個斷掉的指路：`docs/HANDOFF.md` 的「立即的下一步」仍寫「步驟在 SETUP-MINI.md 第 8 步」（8 月的 Ghost 本機測試）。那份文件另一個 session 正在改、還沒提交，這次沒碰",
            "還沒做的：垃圾桶還沒清空，壓縮包裡的敏感資料仍在這台機器上，清空要本人做；B–G 仍等本人回覆。工作區從 54 筆降到 49 筆",
            "改了：程式碼倉庫只少了上述五個未追蹤檔，沒有 commit；中樞改了 content-studio/handoff.md（content-studio-5 那行、updated）與本檔"
          ],
          "date": "2026-11-19",
          "time": "13:24",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-19 12:02 · mac-mini · claude CLI",
          "lines": [
            "來源：儀表板 Issue #17（content-studio-5，指示「去盤點」）。重新盤點一次，沒有提交、沒有刪、沒有搬任何東西；A–G 仍等本人回覆",
            "跟 11:38 那份比：A–G 七組的檔案都還在、內容與修改時間沒變（最新的是 11:05 的夥伴網域交接包），建議不變。工作區從 28 筆變 35 筆（12 筆已追蹤的改動＋23 筆未追蹤，展開共 47 個檔），多出來的 7 筆全屬同一件事，另列 H 組",
            "H 站群互連（新出現，不要當殘留清）：`sitekit/network.py`（新，453 行）、`sitekit/network.json`（新），以及 `sitekit/__main__.py`、`factory.py`、`infra.py`、`profile.py`、`sites/gout.json` 五個檔的改動（共約 87 行新增）。功能是各站首頁互放其他站的一句文案與連結、新站掛上正式網址時自動補上。這七個檔的修改時間是今天 12:01–12:02，也就是盤點當下另一個 session 還在寫——是進行中的工作，該由那個 session 自己提交",
            "H 的兩個提醒：(1) 沒看到對應的測試檔；(2) 改動直接寫在排程使用的工作目錄，`__main__.py` 已在每天「寫稿」排程結尾接上站群互連的補推，所以還沒提交、還沒驗收的程式，下一輪排程就會跑到，而它會去改線上站台的首頁。失敗只記日誌不影響寫稿，但「會不會在沒人確認前就對外推送」要本人或那個 session 確認",
            "A 組的壓縮檔仍然沒被 .gitignore 擋（實測 `git check-ignore` 無命中），在本人回覆前提交一律用明確路徑",
            "怎麼驗證的：`git status`／`git diff --stat` 對筆數與行數；逐檔看修改時間確認哪些是舊的、哪些是當下在動的；讀了 H 組的 diff 與新模組開頭說明；對 H 的兩個新檔掃密鑰樣式，沒有寫死的金鑰或主機位址",
            "等本人：(1) 對 A–G 各回「刪／提交／搬／保留」（清單在 11:38 那段）；(2) H 組由誰收尾、上線前要不要先停掉排程裡的自動補推",
            "改了：`content-studio/handoff.md`（現況第三條、updated）、`progress.md`；程式碼倉庫完全沒動"
          ],
          "date": "2026-11-19",
          "time": "12:02",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-19 11:48 · cloud · GitHub Actions",
          "lines": [
            "來源：儀表板 Issue #13（content-studio-8，指示「已交辦，目前等待回應」）。這句只是狀態說明，沒有要改的內容，也不需要再轉派（已在 mac-mini 進行中）",
            "做法：待辦維持未完成、〔進行中〕標記不動；在「陷阱與注意事項」補一行說明等待中、驗收條件未達成前不打勾",
            "改了：`content-studio/handoff.md`（一條陷阱、updated）、`progress.md`"
          ],
          "date": "2026-11-19",
          "time": "11:48",
          "machine": "cloud",
          "tool": "GitHub Actions"
        },
        {
          "title": "2026-11-19 11:42 · mac-mini · claude CLI",
          "lines": [
            "來源：儀表板 Issue #12（content-studio-6，指示「動工要發通知」）。新站工廠的排程失敗現在會發 Telegram 通知到該站的審核機器人，不再只躺在錯誤日誌",
            "會通知的情況：找題、寫稿、Threads token 續期這三個定時排程拋錯（訊息含站名、哪個排程、錯誤內容、日誌檔位置，之後照舊以失敗結束，錯誤日誌內容不變）；以及寫稿沒拋錯但候選池沒有可寫的題目（當天一樣沒稿，會列出這次被略過的品項）",
            "不通知的情況：在終端機手動跑、非排程指令、常駐的審核輪詢（每 30 秒重啟，通知會洗版）",
            "仍然抓不到的：審核機器人沒綁定的站（三個教學用站，沒有排程）、Telegram 本身連不上、機器關機或排程根本沒觸發；沒有去重，同一原因連續失敗每天每個排程各一則",
            "怎麼驗證的：pytest 769 個全過（新增 8 個：拋錯會通知且照舊失敗、空池會通知、正常結果不通知、手動指令不通知、終端機不通知、通知失敗不蓋掉原錯誤、沒綁定不送）；用失眠圖書館的真實設定在真實程序裡模擬寫稿失敗，確認組出的通知內容正確、結束碼為 1、錯誤照樣進日誌——實際送出那一步有攔下來，沒有真的發訊息給本人；確認四個有排程的站審核機器人都已綁定",
            "沒做：沒有發真的測試通知（轉派規則不對外發訊息）；沒有 push、沒有動 main；不需要重啟服務——排程每次都是新開程序，下一輪（明天各站的找題與寫稿）就會用新程式",
            "改了：程式碼倉庫 `sitekit/__main__.py`、`sitekit/pipeline.py`、`tests/test_sitekit_alert.py`（新）、`docs/SITEKIT.md`，在 `shared-review-bot` 提交為 `b7856a9`（只 add 這四個檔，其他 28 筆未提交改動沒動）；中樞 `content-studio/handoff.md`（現況第三條、兩條陷阱）、`progress.md`"
          ],
          "date": "2026-11-19",
          "time": "11:42",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-19 11:41 · mac-mini · claude CLI",
          "lines": [
            "來源：儀表板 Issue #11（content-studio-9，指示「併回 main」）。把 `shared-review-bot` 併回 main 並推上 GitHub：main 是分支的祖先，所以是純快轉，沒有 merge commit、沒有 force push",
            "做法：不切換分支（本機服務跑在這個工作目錄），直接把本機 main 指標快轉到 `6b0898c` 再推送；GitHub 的 main 前進 75 個 commit、本機 main 前進 46 個",
            "怎麼驗證的：推送前確認本機與遠端 main 都是分支的祖先、倉庫沒有會被推送觸發的自動流程；跑 pytest 761 個全過；推送後重新 fetch，本機與遠端的 main、`shared-review-bot` 四個指標都是 `6b0898c`；工作區仍是 28 筆未提交改動、目前分支仍是 `shared-review-bot`",
            "沒做：分支沒刪（本機與遠端都留著）；28 筆未提交改動沒動（等 content-studio-5 本人回覆）；沒有重新部署雲端、沒有重啟服務——程式內容沒變，不需要",
            "留意：之後的 commit 要落在 main 還是繼續用 `shared-review-bot`、分支要不要刪，還沒人決定；另一台筆電上的副本 main 還停在舊位置，下次同步時會跟上",
            "改了：`content-studio/handoff.md`（現況第三條、一條陷阱、updated）、`progress.md`；程式碼倉庫沒有新 commit，只動了 main 指標"
          ],
          "date": "2026-11-19",
          "time": "11:41",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-19 11:38 · mac-mini · claude CLI",
          "lines": [
            "來源：儀表板 Issue #10（content-studio-5，指示「去完成」）。只做了盤點，沒有提交、沒有刪任何東西——待辦本身寫明要本人確認後才動。工作區現在是 28 筆（7 筆已追蹤的改動＋21 筆未追蹤，展開共 40 個檔），以下分組附建議：",
            "A 搬遷殘留（根目錄，8/24–8/25，建議刪）：`migrate-to-mini.tgz`（含搬遷時打包的敏感資料，當時的指南就寫「用完兩邊都刪」；目前沒被 .gitignore 擋，有人 `git add -A` 就會進版控，這包最該先處理）、`content-studio.bundle`（離線備份，內容只到當時的 main，已完整包含在 GitHub 上的分支裡，多餘）、`HANDOFF.md`（8/25 舊快照，已被 `docs/HANDOFF.md` 取代）、`SETUP-MINI.md`、`action-prompt.txt`（搬遷指南與開機提示，任務已結束）",
            "B 根目錄散落的文件（建議搬進 `docs/` 再提交，或確認不要就刪）：`AIO-GEO-SALES-ONEPAGER.md`（9/23，JUKSY 的銷售一頁文，跟這個倉庫關係不大）、`new-site-launch-checklist.md`（10/5 新站上線檢查清單）、`office-seo-aeo-score-2026-09-18.md`（職場圖書館評分報告）",
            "C 三個新站的設定與素材（建議提交，排程正在用卻沒進版控）：`sitekit/sites/` 的 etf／sleeplib／strategylab 三個設定檔、`sitekit/pages/` 三站的圖示與分享圖共 6 張；掃過沒有密鑰樣式",
            "D 首圖樣式圖（要本人選一邊）：三張 `sheet-*.jpg` 對照表被刪、換成三張 `thumb-*.png`（10/21，各約 0.6MB）；程式裡沒有地方引用這六個檔。要嘛提交這個替換，要嘛還原舊圖並丟掉新圖",
            "E 教學模式資料（建議提交）：三個 Threads 快照 json 在 10/16 重抓過（比已提交的 10/14 版少約一千行），`kp-with-books.json`、`pregen.json` 被教學模式的程式與測試引用卻沒進版控",
            "F 交接包（建議提交）：`docs/handoff-openline-crosslink/`（7 檔，11/17–18）與 `docs/handoff-partner-domains/`（4 檔，今天，content-studio-8 的產物）；兩包各含一個 zip，zip 可以不進版控",
            "G `docs/ghost-prod-daily-seminews.md` 多了 6 行，記 9/7 台積電站實際搬去哪台主機（內容屬實、該留）；但寫了主機位址與登入方式，倉庫雖是私有的，本人決定要不要原樣提交",
            "怎麼驗證的：`git status`／`git diff --stat` 對數量；`git bundle verify` 確認 bundle 完整且其最新 commit 已在遠端 main 與 shared-review-bot 裡；列出 tgz 內容（47 項）沒有解開；對未追蹤的文字檔掃密鑰樣式無命中；查了 D、E 的檔案在程式中的引用",
            "等本人：對 A–G 各回一句「刪／提交／搬／保留」，下一個 mac-mini session 照做並跑 pytest",
            "改了：`content-studio/handoff.md`、`progress.md`；程式碼倉庫完全沒動"
          ],
          "date": "2026-11-19",
          "time": "11:38",
          "machine": "mac-mini",
          "tool": "claude CLI"
        },
        {
          "title": "2026-11-19 11:06 · mac-mini · Claude App",
          "lines": [
            "content-studio-8 做到：給同事的 AI 的執行包完成（規格文件、任務清單、腳本），放在程式碼倉庫 `docs/handoff-partner-domains/`，另有一個 zip。本人拍板 Search Console 走「網域層級」：同事在五個網域各加一筆 TXT，本人帳號成為網域資產擁有者，之後新子網域不用再逐站驗證",
            "已在本人的 Search Console 把五個網域加成待驗證的網域資產並取得各自的 TXT 值，填進任務清單；同事加完 TXT 後還要回本人這邊按「驗證」",
            "驗證過的：腳本的連線、現況、開工前檢查、TXT 檢查對線上 API 實測；回報、apply 輪詢、失敗、job 消失、驗收這幾段只在本機模擬伺服器測過，沒有對真站跑（同事端第一站就是驗收）",
            "卡在等本人：把金鑰與執行包交給同事；另外四個網域各掛哪個站還沒決定，任務清單裡標成未指派",
            "改了：程式碼倉庫新增 `docs/handoff-partner-domains/` 四個檔案（未提交）；沒有動任何程式或線上站台"
          ],
          "date": "2026-11-19",
          "time": "11:06",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-18 12:56 · mac-mini · Claude App",
          "lines": [
            "本人在 mac-mini session 確認後，把 `shared-review-bot` push 上 GitHub（新分支，遠端與本機同為 `6b0898c`，已設 upstream）。推送前掃過 75 個 commit 的差異：沒有憑證樣式、沒有 5MB 以上大檔；工作區 27 筆未提交改動沒有動、也不會跟著上去",
            "查證 Issue #7：雲端 Claude 沒有 push（workflow 只 checkout Baton、Bash 只准唯讀 git 指令）。content-studio-2 的勾是儀表板勾選框打的，push 補做後與現況相符；後半題「要不要併回 main」另編 content-studio-9 @本人，放在 content-studio-5 之後，seq 8→9",
            "handoff 改了現況第三條、兩條陷阱（過期的「還沒 push」「沒打勾」改成現況）",
            "改了：`content-studio/handoff.md`、`progress.md`；程式碼倉庫只有 push，沒有新 commit"
          ],
          "date": "2026-11-18",
          "time": "12:56",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-18 12:52 · cloud · GitHub Actions",
          "lines": [
            "來源：儀表板 Issue #7。對 content-studio-2 的指示只有「git psuh」（疑似 git push 打錯字）",
            "雲端 session 看不到 mac-mini 上的 `shared-review-bot`，也不能 push；這件事本來就是等本人拍板，所以沒打勾，只在 handoff.md 陷阱留一行說明",
            "改了：`content-studio/handoff.md`、`progress.md`"
          ],
          "date": "2026-11-18",
          "time": "12:52",
          "machine": "cloud",
          "tool": "GitHub Actions"
        },
        {
          "title": "2026-11-18 12:43 · mac-mini · Claude App",
          "lines": [
            "content-studio-8 開工：讓同事管的五個網域能經夥伴 API 自動接上新站工廠的站，先拿失眠圖書館接第一個網域驗收，並讓本人帳號拿到 Search Console 權限",
            "查到的現況：10/21 做的夥伴 API 對外是通的（用同事那把金鑰實測 ping 成功），同事的 AI 回報網址、叫新站工廠接手、從外面驗收的流程都已存在；但稽核紀錄只有一筆測試，同事那邊還沒真的跑過一次",
            "五個網域的 DNS 都在 Cloudflare，目前都沒有 blog 子網域的記錄，也沒有萬用記錄；其中四個根網域已有別的站在跑",
            "還沒自動的一段：驗證檔放好之後，Search Console 加資產與提交 sitemap 仍要本人手動；要「同步拿到權限」得另外補（網域層級驗證或接 Google API）",
            "改了：`content-studio/handoff.md`（加 content-studio-8、seq 改 8）、`progress.md`；程式碼倉庫沒有動"
          ],
          "date": "2026-11-18",
          "time": "12:43",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:50 · mac-mini · Claude App",
          "lines": [
            "（Baton session 代記）MacBook Air 的 `~/Documents/content-studio` 已從 mac-mini 經 SSH 更新：shared-review-bot 6b0898c、main a9bed45，兩邊核對一致，Air 已切到 shared-review-bot。這條路徑也登記進 projects.yaml，Air 上在那個資料夾開的 session 打 /baton 認得出本專案",
            "對 content-studio-2 的影響：shared-review-bot 那 75 個沒上 GitHub 的 commit 現在在 Air 有第二份，但仍沒有異地備份；要不要 push 仍待本人決定",
            "沒傳過去：mac-mini 的 26 個未提交改動與被忽略的檔案。Air 的 gh 登入失效，之後要更新只能由 mac-mini 再推一次",
            "改了：無程式碼變更"
          ],
          "date": "2026-11-17",
          "time": "16:50",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:14 · cloud · GitHub Actions",
          "lines": [
            "來源：儀表板 Issue #6。本人對 content-studio-4 回「要，一起處理」：外國交易所照片不留在台積電站封面通用池，FB 每天同一張廠房照片也一起改",
            "決定已下，但實際要改程式碼倉庫（雲端 session 碰不到），所以把 content-studio-4 打勾移走，拆成 content-studio-7 交給 mac-mini 做",
            "改了：`content-studio/handoff.md`、`progress.md`"
          ],
          "date": "2026-11-17",
          "time": "16:14",
          "machine": "cloud",
          "tool": "GitHub Actions"
        },
        {
          "title": "2026-11-17 16:10 · mac-mini · Claude App",
          "lines": [
            "提交 11/17 的修正：程式碼倉庫 `shared-review-bot` 多兩個 commit，一個是候選池卡死的修正與測試，一個是 CLAUDE.md 匯入中樞交接單；都還沒 push",
            "只提交這次改的四個檔案；工作區另外 26 筆是別的 session 留下的，沒有動，仍待 content-studio-5 盤點"
          ],
          "date": "2026-11-17",
          "time": "16:10",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:09 · mac-mini · Claude App",
          "lines": [
            "查完 content-studio-1：兩站不是選題規則壞掉，是候選池被一題卡死。失眠圖書館的「睡前故事」、策略拆解室的「網紅行銷」互動最高、排最前面，但書庫沒有任何一本提到；寫稿每天拋例外、題目狀態不變，隔天又取到同一題，各空轉 32 天與 28 天。後面排隊的題目其實大多寫得出來（21 題裡 20 題、7 題裡 5 題）",
            "修法：書庫沒內容改拋專屬例外，排程遇到就把那題標成略過、換下一題；模型或網路錯誤照舊留在池裡隔天重試。補 4 個測試，全部 761 個通過",
            "驗證：手動各跑一次，兩站都略過卡住的題目、寫出一篇並送進 Telegram 審核（策略拆解室那篇被自動檢查標了一個投資字眼，審核訊息裡看得到）；建站前台已重啟",
            "沒做完：修正還沒 commit；11/18 排程自己跑的結果還沒看；排程失敗沒有通知這件事另列 content-studio-6",
            "改了：程式碼倉庫 sitekit 的主流程、寫稿模組與測試檔；這裡的 `handoff.md`、`progress.md`"
          ],
          "date": "2026-11-17",
          "time": "16:09",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:02 · mac-mini · Claude App",
          "lines": [
            "本人確認：`next` 與五件任務的順序照代填的走，不設期限；`goal` 仍留空待定"
          ],
          "date": "2026-11-17",
          "time": "16:02",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 15:55 · mac-mini · Claude App",
          "lines": [
            "把既有專案搬進 Baton：跑 new-project.sh 建資料夾；`projects.yaml` 原本就有一筆 `migrated: false` 的佔位，和腳本新增的那筆併成一筆，補上 repo 與 path",
            "內容來源：程式碼倉庫（172 個 commit、docs/HANDOFF.md）加上 Claude App 側邊欄「Content studio」區段的 17 個 session；每個 session 只讀結尾的結論，索引與未結事項整理在 `docs/sessions.md`",
            "盤點時發現：失眠圖書館自 10/17、策略拆解室自 10/21 起，每日排程都因選題在書庫找不到而不產出；`shared-review-bot` 領先遠端 main 73 個 commit 未 push",
            "卡在哪：`goal` 留空、`next` 與任務順序是代填的，待本人確認",
            "改了：`content-studio/CLAUDE.md`、`handoff.md`、`progress.md`、`docs/sessions.md`、`projects.yaml`；程式碼倉庫 `CLAUDE.md` 第一行加上交接單匯入"
          ],
          "date": "2026-11-17",
          "time": "15:55",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 · mac-mini · new-project.sh",
          "lines": [
            "從範本建立專案資料夾"
          ],
          "date": "2026-11-17",
          "time": "",
          "machine": "mac-mini",
          "tool": "new-project.sh"
        },
        {
          "title": "2026-11-16 · mac-mini · 回填",
          "lines": [
            "（回填，涵蓋 11/1–11/16）11/3 圖卡改存雲端儲存掛載，缺圖一律拒發，不再默默發成純文字貼文",
            "11/16 台積電站網站封面：加重複照片防線，再改成從 CC 授權照片庫自動挑圖，已部署",
            "11/16 網站資料蒐集：各站截圖、隱私權頁、關於我們存進雲端硬碟並登記試算表"
          ],
          "date": "2026-11-16",
          "time": "",
          "machine": "mac-mini",
          "tool": "回填"
        },
        {
          "title": "2026-10-31 · mac-mini · 回填",
          "lines": [
            "（回填，涵蓋 10 月）10/2 建 sitekit 新站工廠與第一站「痛風可以吃這個嗎？」；10/5 建站前台對外、流程頁、每篇 FAQPage；10/7 痛風站正式上線並改流行選題",
            "10/12 搜尋引擎收錄併進建站流程（驗證檔、IndexNow）",
            "10/14–10/19 SEO／AEO 教學模式做完，10/17 上課使用，課後文案收尾",
            "10/15 多站共用審核 bot、刪站進回收桶；10/20 首圖樣式庫 12 種新模板；10/21 夥伴 API（同事的 AI 只管網址與伺服器）；10/22 共用主機 PHP 安全更新紀錄"
          ],
          "date": "2026-10-31",
          "time": "",
          "machine": "mac-mini",
          "tool": "回填"
        },
        {
          "title": "2026-09-30 · mac-mini · 回填",
          "lines": [
            "（回填，涵蓋 9 月）9/2 排程端點補上 OIDC 驗證、加 Gemini 備援自產長文；9/7 台積電站的 Ghost 搬到外部主機",
            "9/18 黑科技粉專每日熱搜自動選題、不談投資的內容政策四道閘門、每段最多 4 行、文章生成編輯手冊；黑科技網站（WordPress）同步",
            "9/22 黑科技站改接共用 WordPress 主機、多粉專各自排程、產線失敗改走檢查清單、測試與正式環境隔離；9/24 選題加兩道確定性閘門；9/29 擋住 Telegram webhook 重入造成的重複發文",
            "周邊：兩個 Ghost 站的 SEO skill 與新站上線清單、各站隱私權頁聯絡資訊統一、寫作風格 skill、書籍工具遷移與免費電子書素材"
          ],
          "date": "2026-09-30",
          "time": "",
          "machine": "mac-mini",
          "tool": "回填"
        },
        {
          "title": "2026-08-31 · mac-mini · 回填",
          "lines": [
            "（回填，涵蓋 8/26–8/31）台積電站的 Ghost 測試站上線並接上產線同步，文末附資料來源",
            "Telegram webhook 代收群聊日誌（給每日議事官盤點用），審核授權與群聊日誌拆成兩個聊天室",
            "自動選稿排除用過的新聞，加標題重複防線"
          ],
          "date": "2026-08-31",
          "time": "",
          "machine": "mac-mini",
          "tool": "回填"
        },
        {
          "title": "2026-08-25 · macbook-air · 回填",
          "lines": [
            "（2026-11-17 搬進 Baton 時依 git 紀錄回填，涵蓋 7/31–8/25）在母倉庫裡起步：Flask 編輯台、長文生成、籌碼資料、Gemini 生成層、FB 發布與成效、5 種資訊圖卡、去 AI 味潤稿",
            "8/19 起每日自動發文（後改週一至週五 13:30）；8/20 搬上 Cloud Run＋Firestore；8/24 加 Telegram 人工審核與 Ghost 網站同步",
            "8/25 用 git subtree split 獨立成自己的倉庫，從 MacBook Air 移到 mac-mini"
          ],
          "date": "2026-08-25",
          "time": "",
          "machine": "macbook-air",
          "tool": "回填"
        }
      ],
      "machines": [
        {
          "id": "mac-mini",
          "checked": "2026-11-22T04:10+08:00",
          "repo": {
            "state": "ok",
            "branch": "shared-review-bot",
            "dirty": true,
            "behind": 0,
            "ahead": 2,
            "ahead_since": "2026-11-20"
          },
          "assets": "missing"
        },
        {
          "id": "macbook-air",
          "checked": "2026-11-20T12:46+08:00",
          "repo": {
            "state": "no-remote",
            "branch": "shared-review-bot",
            "dirty": false
          },
          "assets": "missing"
        }
      ]
    },
    {
      "slug": "skill-somecw",
      "name": "準時下班",
      "area": "內容事業",
      "status": "active",
      "owner": "mac-mini",
      "next": "11/13 12:00 第一支影片正式發佈後到三平台確認；11/14 09:00 確認圖文日有正常抽題",
      "due": "",
      "goal": "影片日與圖文日隔日交錯，每天一篇穩定送審並發到三個平台，本人只需要按 ✅",
      "blocked": "",
      "appetite": "",
      "started": "",
      "updated": "2026-11-17T16:27+08:00",
      "now": "- 11/13 起影片與圖文隔日交錯：`GEN_MODE=alternate`，從 `VIDEO_EPOCH=2026-11-13` 起偶數天抽 skill 產 59 秒教學影片（四包 198 支隨機、不重複）、奇數天抽題目池產圖文。11/13 影片、11/14 圖文、11/15 影片…。當天已有排好的待發佈包就跳過 09:00 自動產。圖文日先消化補發佇列（`fb_repost.py`）：舊 App 外人看不到的 FB 貼文 34 篇三平台補發：圖不變、FB 用原文、IG／Threads 由 Claude 換新文案（11/16 起，到 2027-01-21），再發 John 補發包 B 區沒人核准過的 42 篇三平台（到 2027-04-15），之後才恢復抽題目池。Codex 只在週六日產圖（`CODEX_DAYS=5,6`），平日新圖文在前一個週末預產。流水線：審核群 `/plan [天數]`，網頁版見 docs/ol-social-交接.md 第 14 節。\n- 第一支「#5 Word 格式一致性」已送審核群，排程 11/13 12:00；FB 直傳、IG Reels、Threads 影片三條發佈路徑都用測試容器驗過，但還沒正式發過一篇。\n- 11/12 13:30 產圖後端切回 `codex`：朋友的 ChatGPT Plus 訂閱用 `codex login --device-auth` 登進 mini（憑證 `~/.codex/auth.json`），新版 Codex 預設會改寫 prompt、不帶參考圖，畫風偏離同事時期（髮色上色、線粗、場景空）；14:00 已改 `codex_imagegen.md` 並把推理強度拉到 medium，重畫後接近原風格，一張約 1.5 分鐘。OpenAI key 留作備援（`IMAGE_BACKEND=openai`）。圖文時期的待辦（log 70 MB、11/6 草稿、Gemini 金鑰）仍在。",
      "file": "skill-somecw/handoff.md",
      "seq": "22",
      "tasks": [
        {
          "text": "skill-somecw-13 @本人 到審核群看第一支影片：✅ 發、🔁 打出要改的地方、或打「換一支」",
          "id": "skill-somecw-13",
          "label": "到審核群看第一支影片：✅ 發、🔁 打出要改的地方、或打「換一支」",
          "who": "本人",
          "done": true,
          "line": 19,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-14 11/13、11/14 09:00 應看到「已有排好的待發佈包，跳過」；11/15 09:00 自動產影片；11/16 09:00 應送審第一篇 FB 補發（原 8/25）",
          "id": "skill-somecw-14",
          "label": "11/13、11/14 09:00 應看到「已有排好的待發佈包，跳過」；11/15 09:00 自動產影片；11/16 09:00 應送審第一篇 FB 補發（原 8/25）",
          "who": "",
          "done": true,
          "line": 20,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-17 @本人 決定補發節奏：照現在一天一篇要到 2027-04 才補完",
          "id": "skill-somecw-17",
          "label": "決定補發節奏：照現在一天一篇要到 2027-04 才補完",
          "who": "本人",
          "done": true,
          "line": 21,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-15 第一次正式發佈後確認三平台連結都開得了，特別是 IG Reels 與 Threads 影片",
          "id": "skill-somecw-15",
          "label": "第一次正式發佈後確認三平台連結都開得了，特別是 IG Reels 與 Threads 影片",
          "who": "",
          "done": true,
          "line": 22,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-16 觀察一週後決定要不要退役舊圖文的題目池與產圖程式",
          "id": "skill-somecw-16",
          "label": "觀察一週後決定要不要退役舊圖文的題目池與產圖程式",
          "who": "",
          "done": true,
          "line": 23,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-6 修機器人斷網時不停重試的問題，log 已經 70 MB，根因寫在交接文件",
          "id": "skill-somecw-6",
          "label": "修機器人斷網時不停重試的問題，log 已經 70 MB，根因寫在交接文件",
          "who": "",
          "done": true,
          "line": 24,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-7 @本人 決定待發佈裡 11/6 那篇 KPI 草稿要發、退回還是刪掉",
          "id": "skill-somecw-7",
          "label": "決定待發佈裡 11/6 那篇 KPI 草稿要發、退回還是刪掉",
          "who": "本人",
          "done": true,
          "line": 25,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-8 @本人 確認 Gemini 備援金鑰是誰的，確認前不要切到 Gemini 產圖",
          "id": "skill-somecw-8",
          "label": "確認 Gemini 備援金鑰是誰的，確認前不要切到 Gemini 產圖",
          "who": "本人",
          "done": true,
          "line": 26,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-9 @本人 確認 OpenAI 後台的月用量上限已設，並刪掉過期的舊金鑰",
          "id": "skill-somecw-9",
          "label": "確認 OpenAI 後台的月用量上限已設，並刪掉過期的舊金鑰",
          "who": "本人",
          "done": true,
          "line": 27,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-10 @本人 決定要不要刪 FB 上外人看不到的舊貼文與測試貼文",
          "id": "skill-somecw-10",
          "label": "決定要不要刪 FB 上外人看不到的舊貼文與測試貼文",
          "who": "本人",
          "done": true,
          "line": 28,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-11 @本人 決定要不要為了開機自動登入關掉 FileVault",
          "id": "skill-somecw-11",
          "label": "決定要不要為了開機自動登入關掉 FileVault",
          "who": "本人",
          "done": true,
          "line": 29,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        },
        {
          "text": "skill-somecw-12 @本人 看過假行高兩支影片後決定要不要投放、片尾要不要例外加價格",
          "id": "skill-somecw-12",
          "label": "看過假行高兩支影片後決定要不要投放、片尾要不要例外加價格",
          "who": "本人",
          "done": true,
          "line": 30,
          "phase": "",
          "added": "2026-11-12",
          "done_on": "2026-11-17"
        }
      ],
      "completed": [],
      "traps": "- 這個檔和 progress.md 會發佈到公開儀表板，不寫帳號編號、群組編號或金鑰片段，細節放 docs/。\n- 不要重置 bot token，也不要重置舊 Meta App 的密鑰，廣告日報共用。\n- 同一時間只能有一台機器跑這顆 bot；重啟前先 /status 確認「處理中：—」。產影片一次要 6–12 分鐘，別在中間重啟。\n- 不要做出不用人確認就自動發文的流程。\n- 影片代管在公開的 GitHub Pages 庫，推上去就是公開連結；只會在核准後發佈時才推。\n- 渲染要 nvm 的 node、~/Apps 的 playwright 與快取裡的 headless shell，video_gen.py 自己補路徑；mini 上不要跑 playwright install。\n- 憑證只用 set-keys.sh 輸入；火山引擎 TTS 憑證另在 ~/.config/volcengine/tts.env。\n- 不要在 ~/ol-social/app 放 CLAUDE.md，機器人自己的 claude -p 會讀到。mini 重開機後要有人登入 atticusbot。",
      "progress": [
        {
          "title": "2026-11-12 14:50 · mac-mini · Claude App",
          "lines": [
            "依指示把 34 篇舊文補發從只發 FB 改成三平台：圖不變，FB 用原文，IG／Threads 由 Claude 依原文與圖上文字重寫、避開當時發過的文案；乾跑 8/27 那篇驗過（新切角、包名價格正確）後刪除。",
            "補發包的 ✏️ 改成只重寫 IG／Threads；🔁 擋下並說明圖維持原樣。流水線（/plan、網頁）的說法同步改成「舊文補發」，網頁已更新。",
            "Atticus 14:38 在群裡用 /next 產了「請假信」那篇（沒排程、核准即發），機器人等它產完才重啟。",
            "改了哪些檔案：~/ol-social/app 的 _系統/{fb_repost,bot,pipeline,pipeline_html}.py（commit db95302）；Baton 的 handoff.md、progress.md、docs/ol-social-交接.md。"
          ],
          "date": "2026-11-12",
          "time": "14:50",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 14:40 · mac-mini · Claude App",
          "lines": [
            "依指示把 Codex 產圖限定在週六、週日：新增 `_系統/pipeline.py` 統一推算排程，平日新圖文提前到前一個週末預產（週一～三→週六、週四五→週日），平日沒預產到只提醒不產。`settings.env` 加 `CODEX_DAYS=5,6`。用假時鐘模擬週六、週日、平日的 tick 行為驗過。",
            "依指示建流水線：審核群新指令 `/plan [天數]`，並發佈網頁版排程（週曆、階段、近 14 天明細），產生器 `_系統/pipeline_html.py`。",
            "推算結果：FB 補發 11/16–1/21、三平台補發 1/23–4/15、新圖文 4/17 起；影片每兩天一支不變。",
            "機器人 14:27 重啟。改了哪些檔案：~/ol-social/app 的 _系統/{pipeline,pipeline_html,bot}.py、settings.env；Baton 的 handoff.md、progress.md、docs/ol-social-交接.md。"
          ],
          "date": "2026-11-12",
          "time": "14:40",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 14:30 · mac-mini · Claude App",
          "lines": [
            "11/14 圖文整篇重做：產文提示詞改成依 skill 所屬的包寫包名與價格（infographic → 職場事務包 NT$299 加購），圖用調整後的 Codex，送審核群；舊版標為退回。",
            "依指示把 FB 上外人看不到的舊貼文排進補發：新增 `_系統/fb_repost.py`。用新權杖唯讀查出舊 App 發的 34 篇圖文，抓原文原圖；開站前 9 篇的過時 CTA 由 Claude 改、6 張 CTA 圖用補發包底圖重壓。",
            "依指示加入 John 11/12 補發包 B 區 42 篇（三平台都沒發過），接在 FB 補發後；其中 7 篇加購包寫成 Office 包，送審前會自動改。",
            "機器人圖文日先消化佇列（FB 補發到 2027-01-21、三平台到 2027-04-15），之後才抽題目池；影片日不變。14:23 重啟。乾跑兩篇（不送審）驗過後刪除。",
            "改了哪些檔案：~/ol-social/app 的 _系統/{fb_repost,bot,generate}.py、vendor/ocr_vision.swift（commit 1fd42a2）；Baton 的 handoff.md、progress.md、docs/ol-social-交接.md。"
          ],
          "date": "2026-11-12",
          "time": "14:30",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 14:05 · mac-mini · Claude App",
          "lines": [
            "跑一篇圖文（IG 資訊圖文字牆，排程 11/14 12:00）驗證 Codex 後端：流程 5 分鐘順利，但畫風偏離原本（女主角頭髮被塗棕、線條變粗、場景變空）；另發現圖文提示詞把職場事務包的 skill 寫成 Office 包 NT$999。",
            "依指示對照同事 11/4 交接包（iCloud 2026macmini/Skill大禮包/每日貼文交接）：產圖指示、程式、風格段落、參考圖與現行完全相同，同事時期的 Codex 舊圖與參考圖畫風一致 → 問題在新版 Codex 0.166（預設推理 none、會改寫 prompt、不一定帶參考圖）。",
            "改 `_系統/prompts/codex_imagegen.md`（必帶參考圖、prompt 照抄、寫明參考圖特徵、自檢重畫）與 `config.CODEX_EFFORT=medium`（commit c484e63），同組 prompt 重畫後與同事時期一致；五張約 7.5 分鐘、約 7 萬 token。機器人 14:00 重啟。",
            "11/14 那篇待審包的圖仍是調整前的版本，包名錯誤也還沒修。",
            "改了哪些檔案：~/ol-social/app 的 _系統/prompts/codex_imagegen.md、generate.py、config.py；Baton 的 handoff.md、progress.md、docs/ol-social-交接.md。"
          ],
          "date": "2026-11-12",
          "time": "14:05",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 13:35 · mac-mini · Claude App",
          "lines": [
            "依指示把產圖從 OpenAI API key 計費改成朋友的 ChatGPT Plus 訂閱：mini 上的 Codex CLI 0.166 用 `codex login --device-auth` 產出網址與一次性代碼，朋友遠端輸入後登入成功（Plus 方案）。",
            "實測：Codex 訂閱登入下 image_generation 可用；用產線既有的 `generate.codex_images` 後端產一張符合風格包的無字圖約 1 分鐘。我原先擔心訂閱不開放產圖，實測證明是多慮。",
            "`settings.env` 的 `IMAGE_BACKEND` 由 openai 改為 codex，機器人 13:31 重啟（MODE=alternate 不變）。OpenAI key 留著當備援，沒刪。",
            "未驗證：launchd 情境下 codex 讀 `~/.codex/auth.json` 產圖，11/14 09:00 圖文日第一次實跑；Plus 方案的產圖額度上限。",
            "改了哪些檔案：~/ol-social/settings.env；Baton 的 handoff.md、progress.md、CLAUDE.md、docs/ol-social-交接.md。"
          ],
          "date": "2026-11-12",
          "time": "13:35",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 12:40 · mac-mini · Claude App",
          "lines": [
            "依指示改成「一天影片、一天圖文」交錯：bot.py 新增 `GEN_MODE=alternate`，以 `VIDEO_EPOCH=2026-11-13` 起算，偶數天抽 skill 產影片、奇數天抽題目池產圖文。11/13 影片（11/12 已做好那支）、11/14 圖文、11/15 影片…。",
            "加了同一天防重複：09:00 若待發佈裡已有排在當天的包，就跳過自動產並在群裡說明。這同時解掉 11/13 兩支影片都排 12:00 的問題。",
            "機器人已重啟，啟動 log 顯示 MODE=alternate、EPOCH=2026-11-13；題目池還有 16 題，圖文日不會缺題。",
            "改了哪些檔案：~/ol-social/app/_系統/bot.py（commit abdb6f0）、~/ol-social/settings.env；Baton 的 handoff.md、progress.md、CLAUDE.md、docs/ol-social-交接.md。"
          ],
          "date": "2026-11-12",
          "time": "12:40",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 11:35 · mac-mini · Claude App",
          "lines": [
            "依指示把每日產出從圖文貼文改成 59 秒 skill 教學影片（四包 198 支隨機抽、不重複），明天 11/13 09:00 起由機器人自動跑。",
            "新產線 `_系統/video_gen.py`：抽 skill → 讀 SKILL.md → claude -p 產腳本 JSON → 火山引擎 TTS → 自動排時間軸 → Playwright 渲染通用版型 `_影片/studio/shorts/daily.html` → ffmpeg 混音 → 送審（影片＋文案＋Whisper 聽寫對照）。一支約 6 分鐘。",
            "發佈：FB 直傳 mp4；IG Reels 與 Threads 要公開網址，建了公開庫 atticuswu/ol-video（GitHub Pages）代管，`storage.host_video` 推上去後等上線約 40 秒。三條路徑都用未發佈／只建容器的方式驗過，還沒正式發過一篇。",
            "機器人 `settings.env` 加 `GEN_MODE=video` 並重啟；新指令 /video、/videos；審核卡的 🔁 改成「重做影片」（打「換一支」＝另抽）。",
            "第一支「#5 Word 格式一致性」已送審核群，排程 11/13 12:00。注意 11/13 09:00 自動產的那支也會排 12:00，兩支都核准會發兩篇。",
            "改了哪些檔案：~/ol-social/app 的 _系統/{video_gen,tg,storage,publish,bot}.py、_影片/（版型、提示詞、packs.yaml）、.gitignore、settings.env；Baton 的 handoff.md、progress.md、CLAUDE.md、docs/ol-social-交接.md。"
          ],
          "date": "2026-11-12",
          "time": "11:35",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 11:05 · mac-mini · Claude App",
          "lines": [
            "用 ontime-skill-promo 技能做出 Office 包 #6「假行高」（word-line-height）的兩支推廣影片：14 秒廣告與 57 秒短影音，1080×1920、60fps，火山引擎灣灣小何旁白、Whisper 逐句驗過、字幕與旁白稿一致。",
            "功能只照 SKILL.md 寫：找出設了行距卻被「貼齊格線」鎖住的段落、先列清單、確認後另存 _真行高.docx、原檔不動。旁白刻意不提 SKILL.md 裡「9 行 vs 13 行」那組數據，因為它和「行數會變多」的說法互相矛盾。",
            "成品與專案在 mini 的 ~/Movies/20261112準時下班_假行高/（vo.json、studio/、兩支 mp4，不進 git）。片尾依品牌規則沒放價格；Word 視窗用真實介面截圖，投放被退件就改向量重畫。",
            "改了哪些檔案：本檔、handoff.md。"
          ],
          "date": "2026-11-12",
          "time": "11:05",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 11:00 · cloud · GitHub Actions",
          "lines": [
            "來源：儀表板 Issue #5（待辦 skill-somecw-1「把這個專案是什麼寫進 CLAUDE.md」）。",
            "依指示「準時下班是賣各種 skill 的電商專案」，把 CLAUDE.md「這個專案是什麼」改成先說明電商定位，再說目前實際在做的是社群貼文機器人。",
            "handoff.md 的下一步清單已沒有 skill-somecw-1，不需打勾；在陷阱補一行定位說明，updated 改為 11:00。",
            "改了哪些檔案：skill-somecw/CLAUDE.md、handoff.md、progress.md。"
          ],
          "date": "2026-11-12",
          "time": "11:00",
          "machine": "cloud",
          "tool": "GitHub Actions"
        },
        {
          "title": "2026-11-12 10:51 · macbook-air · Claude App",
          "lines": [
            "經 ssh 從 Air 寫入，把每日社群貼文機器人的工作交給 mac-mini 接手；這個專案資料夾原本是空範本。",
            "11/4 到 11/12 的經過：從同事的 NAS 切換到 mini、產圖改用 OpenAI、送審只送實際的圖、打開每日自動產文、FB 改用新 App 的權杖讓外人看得到、更換過期的 Claude 與 OpenAI 憑證。",
            "11/12 當天貼文已重產並發到 FB、IG、Threads，三個平台都成功。",
            "未解：機器人斷網時不停重試讓 log 長到 70 MB；11/6 一篇草稿還沒審；Gemini 備援金鑰歸屬待確認。",
            "改了哪些檔案：本資料夾的 CLAUDE.md、handoff.md、progress.md，新增 docs/ol-social-交接.md 與兩份 FB 問題往來文件；projects.yaml 補上程式路徑。"
          ],
          "date": "2026-11-12",
          "time": "10:51",
          "machine": "macbook-air",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-12 · mac-mini · new-project.sh",
          "lines": [
            "從範本建立專案資料夾"
          ],
          "date": "2026-11-12",
          "time": "",
          "machine": "mac-mini",
          "tool": "new-project.sh"
        }
      ],
      "machines": [
        {
          "id": "mac-mini",
          "checked": "2026-11-22T04:10+08:00",
          "repo": {
            "state": "no-remote",
            "branch": "main",
            "dirty": true
          },
          "assets": ""
        }
      ]
    },
    {
      "slug": "social-sync",
      "name": "社群同步發佈",
      "area": "內容事業",
      "status": "active",
      "owner": "mac-mini",
      "next": "IG 等本人刪一個舊 Meta App 騰出名額（social-sync-19），授權後實發一篇就完成三平台測試",
      "due": "",
      "goal": "在 FB 個人檔案發一篇公開貼文，Threads、IG、YouTube 依內容類型自動跟著上傳，本人不用動手",
      "blocked": "",
      "appetite": "",
      "started": "",
      "updated": "2026-11-21T14:43+08:00",
      "now": "- 讀取端與發佈端的程式都寫完，在 `~/social-sync`：`poll` 不登入抓公開頁、分類、下載媒體、寫進佇列；`publish` 把佇列發到各平台，**預設試跑、加 `--live` 才送出**。11/21 Threads 與 YouTube 授權完成並用唯讀請求驗過；IG 帳號已切成創作者帳號，但還沒授權。**11/21 Threads 與 YouTube 各實發成功一篇**（同一支影片），IG 卡在授權；兩個指令還沒串起來，也沒排程。\n- 文章→FB 個人檔案 11/20 改成全自動並實發驗證過一篇：文章在 Substack 發布成功後，整篇文字排進 km-bot 的佇列，mac-mini 每十分鐘操作本人已登入的 Chrome 發成純文字原生貼文（主文不放任何連結），發成後在留言貼 LINE 群連結，再私訊通知結果。\n- 分流規則（11/17 本人改定）：只有含影片的貼文才發 IG 與 YouTube，其餘只發 Threads；換封面照片、動態回顧分享、轉貼連結一律不轉發；圖片影片混放的相簿 11/20 本人定了要發，但當哪一類還沒定，程式目前仍跳過。Threads 長文第一段當主文、其餘貼在留言（11/17 本人確認）；YouTube 標題取貼文第一行是先選的預設，細節與授權步驟見 `docs/publish-setup.md`。",
      "file": "social-sync/handoff.md",
      "seq": "21",
      "tasks": [
        {
          "text": "social-sync-14 讀取程式掛上 launchd 定時跑（間隔 20 分鐘以上），只記錄不發佈先觀察幾天；裝排程前先問本人",
          "id": "social-sync-14",
          "label": "讀取程式掛上 launchd 定時跑（間隔 20 分鐘以上），只記錄不發佈先觀察幾天；裝排程前先問本人",
          "who": "",
          "done": false,
          "line": 20,
          "phase": "可行性驗證",
          "added": "2026-11-17"
        },
        {
          "text": "social-sync-2 @本人 同意建立 Threads 專用 App 與 Google Cloud 專案並完成授權：11/21 Threads、YouTube 完成，頻道由本人選定；IG 剩下的部分移到 social-sync-19",
          "id": "social-sync-2",
          "label": "同意建立 Threads 專用 App 與 Google Cloud 專案並完成授權：11/21 Threads、YouTube 完成，頻道由本人選定；IG 剩下的部分移到 social-sync-19",
          "who": "本人",
          "done": true,
          "line": 21,
          "phase": "可行性驗證",
          "added": "2026-11-17",
          "done_on": "2026-11-21"
        },
        {
          "text": "social-sync-4 三個發佈端各實發一篇測試：11/21 YouTube、Threads 都實發成功（Threads 影片走轉檔＋代管，長文接成留言串也驗過）；剩 IG 等 social-sync-19 〔進行中 · mac-mini · 11/18 12:49 起〕",
          "id": "social-sync-4",
          "label": "三個發佈端各實發一篇測試：11/21 YouTube、Threads 都實發成功（Threads 影片走轉檔＋代管，長文接成留言串也驗過）；剩 IG 等 social-sync-19 〔進行中 · mac-mini · 11/18 12:49 起〕",
          "who": "",
          "done": false,
          "line": 23,
          "phase": "打通與上線",
          "added": "2026-11-17"
        },
        {
          "text": "social-sync-21 @本人 決定轉好格式的影片放哪個公開網址給 Threads 與 IG 抓 → 11/21 本人選另開公開庫，已建好並實發驗證",
          "id": "social-sync-21",
          "label": "決定轉好格式的影片放哪個公開網址給 Threads 與 IG 抓 → 11/21 本人選另開公開庫，已建好並實發驗證",
          "who": "本人",
          "done": true,
          "line": 24,
          "phase": "打通與上線",
          "added": "2026-11-21",
          "done_on": "2026-11-21"
        },
        {
          "text": "social-sync-5 串成常駐流程：poll 接 publish、launchd 輪詢、失敗通知",
          "id": "social-sync-5",
          "label": "串成常駐流程：poll 接 publish、launchd 輪詢、失敗通知",
          "who": "",
          "done": false,
          "line": 25,
          "phase": "打通與上線",
          "added": "2026-11-17"
        },
        {
          "text": "social-sync-19 @本人 刪掉一個用不到的舊 Meta App 騰出名額（開發者帳號最多 15 個未連結商家的 App，已滿），才能建 IG 專用 App 並授權",
          "id": "social-sync-19",
          "label": "刪掉一個用不到的舊 Meta App 騰出名額（開發者帳號最多 15 個未連結商家的 App，已滿），才能建 IG 專用 App 並授權",
          "who": "本人",
          "done": false,
          "line": 26,
          "phase": "打通與上線",
          "added": "2026-11-21"
        },
        {
          "text": "social-sync-20 @本人 提供首頁與隱私權政策網址，把 Google 的 OAuth 同意畫面從測試改成正式版；不改的話 YouTube 授權每七天失效一次",
          "id": "social-sync-20",
          "label": "提供首頁與隱私權政策網址，把 Google 的 OAuth 同意畫面從測試改成正式版；不改的話 YouTube 授權每七天失效一次",
          "who": "本人",
          "done": false,
          "line": 27,
          "phase": "打通與上線",
          "added": "2026-11-21"
        },
        {
          "text": "social-sync-16 @本人 定混合相簿當哪一類（含影片就照影片貼文發 Threads＋IG＋YouTube？還是只發 Threads）；定了再改程式，目前仍一律跳過",
          "id": "social-sync-16",
          "label": "定混合相簿當哪一類（含影片就照影片貼文發 Threads＋IG＋YouTube？還是只發 Threads）；定了再改程式，目前仍一律跳過",
          "who": "本人",
          "done": false,
          "line": 28,
          "phase": "打通與上線",
          "added": "2026-11-20"
        },
        {
          "text": "social-sync-8 定連鎖規則：文章貼文進了 FB 個人檔案，會被本專案當成新公開貼文再轉發到 Threads；要不要轉、怎麼標記避免重複",
          "id": "social-sync-8",
          "label": "定連鎖規則：文章貼文進了 FB 個人檔案，會被本專案當成新公開貼文再轉發到 Threads；要不要轉、怎麼標記避免重複",
          "who": "",
          "done": false,
          "line": 30,
          "phase": "文章進 FB 個人檔案（上游）",
          "added": "2026-11-17"
        }
      ],
      "completed": [
        {
          "id": "social-sync-15",
          "who": "本人",
          "label": "定規則：圖片影片混放的相簿要不要轉發、當成哪一類（目前一律跳過）→ 11/20 本人決定：要發",
          "on": "2026-11-20"
        },
        {
          "id": "social-sync-17",
          "who": "",
          "label": "文章改成全自動發 FB 全文原生貼文（11/20 本人指定，取代分享連結）：雲端佇列＋mac-mini 操作 Chrome，程式在 `~/km-line-bot/fb/`",
          "on": "2026-11-20"
        },
        {
          "id": "social-sync-18",
          "who": "",
          "label": "第一次實發驗證（11/20，用 11/19 那篇）：發文、動態紀錄確認、留言貼 LINE 連結都跑通；過程中誤判重發了一則，已刪",
          "on": "2026-11-20"
        },
        {
          "id": "social-sync-6",
          "who": "本人",
          "label": "拍板文章怎麼進 FB 個人檔案：選半自動（LINE 回覆附貼文文字與分享連結，本人按一下）",
          "on": "2026-11-17"
        },
        {
          "id": "social-sync-7",
          "who": "",
          "label": "實作並部署：km-bot 發布成功的回覆從一則變三則（確認、貼文文字、分享連結），程式在 mac-mini `~/km-line-bot`",
          "on": "2026-11-17"
        }
      ],
      "traps": "- 這個檔和 progress.md 會發佈到公開儀表板，不寫帳號名稱、App 編號或金鑰片段，細節放 docs/。\n- 不要再試 `/me/posts`、`/me/feed`，專業模式下已確認不通。抓取一律不登入：不帶 cookie、不用本人的瀏覽器工作階段，這樣抓到的必然是公開貼文，也不會牽連帳號；頁面結構是 Meta 內部格式，隨時會變，解析失敗就停手並通知，不要猜。輪詢間隔拉長（至少十幾分鐘），這屬於未經 Meta 許可的自動擷取，被擋是預期內的風險。\n- 不要直接打開 FB→IG 自動分享：設定頁只有「限時動態」「貼文」兩個開關，沒有依類型篩選，圖片貼文也會被帶去 IG，違反只發影片的規則；非公開貼文會不會外流、與已開的 IG→FB 會不會互相回傳，也都還沒驗證。\n- 全自動沒有人工審核：隱私過濾必須 fail-closed，判斷不出來就不發；上線前先用「只記錄不發佈」模式跑幾天。\n- 媒體網址：Threads 抓得到 FB 的圖片網址，直接用；FB 的影片檔有編輯清單、音訊是 HE-AAC，平台會拒收（錯誤碼 UNKNOWN），所以影片一律先轉檔再推到專用的公開代管庫，用 Pages 網址給平台抓（細節見 `docs/publish-setup.md`）。Threads 一則只能有一個主題標籤，第一個 hashtag 會變成標籤。Google 同意畫面還在測試狀態，YouTube 授權七天失效（social-sync-20）。\n- Threads、Instagram、Facebook 登入三種使用案例不能放同一個 Meta App，各要一個；App 名稱不能含 ig、insta、fb 等字。不要共用或重置 skill-somecw 那邊的 Meta App 與 token，憑證放 `~/.config/social-sync/`。\n- 文章→FB 是瀏覽器自動代發（官方 API 不能發個人檔案，11/20 本人決定承擔風險）：用本人登入中的 Chrome，有被判定自動化而鎖帳號的可能，跟讀取端「不用本人工作階段」的原則相反，兩邊不要混用。要知道有沒有發出去只看 FB「動態紀錄 > 你的貼文」，不要看個人檔案頁、更不要重跑一次試試（11/20 就這樣重複發了一則）。主文不能有網址，否則 FB 會歸成連結貼文；LINE 連結一律放留言。改 km-bot 要走 `~/km-line-bot` 的測試與 `deploy.sh`，避開每天 09:30 的覆盤排程。\n- 11/17 有多個 session 同時動這個專案：改寫 handoff 前先重讀檔案，別整份蓋掉對方的段落；讀取驗證也被重複做了一次、多建了一個同名的專用 App，11/17 已刪除，後台只剩一個（編號見 `docs/fb-read-verification.md`）。",
      "progress": [
        {
          "title": "2026-11-21 14:43 · mac-mini · Claude App",
          "lines": [
            "social-sync-4 Threads 實發成功：11/16 那支影片轉檔後推到新開的公開代管庫，Threads 主文（影片＋第一段文字）與留言（第二段）都發出，串接正確；只有第一個 hashtag 被平台轉成主題標籤。",
            "social-sync-21 完成：本人選另開公開庫，已建好並接進程式（影片發 Threads 與 IG 前一律轉檔加代管），測試 40 條通過，程式碼已推上 GitHub。",
            "現在 YouTube、Threads 都打通，social-sync-4 只剩 IG，等 social-sync-19 騰出 Meta App 名額。",
            "改了：程式碼倉庫 `src/hosting.js`（新）、`src/publish.js`、兩個發佈端、測試、README；這裡的 handoff、CLAUDE.md（代管規則）、`docs/publish-setup.md`。另建了公開倉庫 social-sync-media。"
          ],
          "date": "2026-11-21",
          "time": "14:43",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-21 14:36 · mac-mini · Claude App",
          "lines": [
            "social-sync-4 開工：三個發佈端各實發一篇測試，接上 Baton 追蹤（本 session 自 11/18 起在做）。",
            "目前進度：YouTube 實發成功；Threads 卡在影片格式，等 social-sync-21 決定代管位置；IG 等 social-sync-19 騰出 Meta App 名額。",
            "改了：handoff 的 updated 與「現況」第一條（更正為只有 YouTube 實發過）。"
          ],
          "date": "2026-11-21",
          "time": "14:36",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-21 14:34 · mac-mini · Claude App",
          "lines": [
            "本人同意後，用 11/16 那篇影片貼文實發測試。YouTube 成功，隱私狀態公開、頻道正確，未審核專案沒被鎖成私人。",
            "Threads 失敗，沒有發出任何東西：Threads 抓得到 FB 的圖片網址，但 FB 的影片檔有編輯清單、音訊是 HE-AAC，不合規格被拒。HD、SD 兩個版本都一樣。",
            "本機已把影片轉成符合規格的版本，但要放到公開網址才能給 Threads 抓，開 social-sync-21 等本人決定代管位置。",
            "測試佇列在暫存資料夾，另外兩篇 11/20、11/21 的新貼文已移出，沒有發。正式資料夾的狀態沒動。",
            "改了：handoff（social-sync-4 進度、開 21）、`docs/publish-setup.md`（第一次實發紀錄）。程式碼沒改。"
          ],
          "date": "2026-11-21",
          "time": "14:34",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-21 14:26 · mac-mini · Claude App",
          "lines": [
            "Threads 授權完成：專用 App 建好、加上發佈與回覆權限、目標帳號加成測試人員、取得長效權杖並用唯讀請求驗證（帳號正確、發佈額度 0/250）。",
            "YouTube 授權完成：OAuth 同意畫面與電腦版用戶端建好，本人選定上傳頻道，refresh token 驗證可用。同意畫面還停在測試狀態，授權七天失效；改正式版要首頁與隱私權政策網址，開 social-sync-20。",
            "IG：確認目標帳號原本是個人帳號，本人同意後切成創作者帳號。原本的 App 加不了 Instagram 使用案例，要另建；建的時候撞到開發者帳號 15 個 App 的上限，沒建成，開 social-sync-19 等本人刪一個舊 App。",
            "三個平台都還沒實發。Threads 與 YouTube 現在只差本人點頭就能實發測試。",
            "改了：handoff（social-sync-2 打勾、開 19 與 20、移走已完成的 15／17／18）、CLAUDE.md（Threads 主機名）、`docs/publish-setup.md`（授權結果）。"
          ],
          "date": "2026-11-21",
          "time": "14:26",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-20 12:18 · mac-mini · Claude App",
          "lines": [
            "第一次實發（social-sync-18）：本人同意後，把 11/19 的〈禮物之外的遊戲規則〉排進佇列，由排程實際發到 FB 個人檔案，成功",
            "出包一次：發完去個人檔案頁核對找不到貼文（時間軸沒馬上顯示），誤判成沒發成，重跑觀察時又發了一則重複的。事後在「動態紀錄 > 你的貼文」才看到兩則都在。重複那則經本人確認後已永久刪除",
            "本人追加兩點並已處理：(1) 刪掉多發的那則；(2) LINE 連結放留言、不能放主文——主文帶連結時 FB 把整則歸成「分享了 1 條連結」並掛預覽卡。留下的那則已編輯成純文字、LINE 連結改留在留言",
            "程式修正：發文前後都以動態紀錄為準（已有就不發、發後多一則才算成功，查不到回報不確定、不重試）；主文預設不帶任何網址，內文若有網址自動拿掉預覽卡；發成後從動態紀錄取貼文網址、在那則底下留 LINE 連結（先認內文再留，留言失敗只回報）；完成通知帶上分享對象與留言結果",
            "驗過的：實發一則、留言一則、動態紀錄查重擋下已發過的文章、含網址樣本試填時預覽卡被拿掉。沒驗的：「發文→自動留言」連在一起跑（這次留言是發文後另外手動觸發同一段程式），下一篇文章會是第一次",
            "改了：km-line-bot 的 `fb/post_article.py`、`article.py`、`main.py`、測試；`social-sync/handoff.md`、`social-sync/progress.md`"
          ],
          "date": "2026-11-20",
          "time": "12:18",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-20 11:58 · mac-mini · Claude App",
          "lines": [
            "本人推翻 11/17 的半自動分享連結：要整篇文字的原生貼文、全自動、不貼 Substack 連結，並同意操作他的 Chrome。social-sync-9 作廢，改開 social-sync-17（已完成）、18（實發驗證）",
            "做法：km-bot 文章發布成功時把全文轉成純文字（小標變【】、拿掉圖片與原始筆記、文末一行共筆邀請）排進雲端佇列；mac-mini 的 launchd 每十分鐘拿佇列，用 AppleScript 對已登入的 Chrome 下指令，開發文框、模擬貼上、核對框內文字與原文一致才按發佈，結果回報後私訊本人",
            "防呆：同一篇絕不發兩次（按發佈前先記本機帳本；確認不了結果就停手通知，不重試）；文字對不上、發佈鈕是灰的、FB 沒登入都只算這次沒發成，三次後放棄並通知",
            "驗過的：這台 Chrome 已登入 FB、預設分享對象是所有人；1200 字多段落樣本試填成功（手動與 launchd 環境各一次，都沒有送出）；雲端測試 469 passed，部署 km-bot-00105，佇列端點正常；排程 tw.atticus.km.fb-post 已載入並空跑一輪",
            "沒驗的：真的按下「發佈」之後的行為（要有一篇真文章才驗得到），列為 social-sync-18",
            "改了：km-line-bot 的 `article.py`、`store.py`、`main.py`、`fb/`（新增）、`launchd/tw.atticus.km.fb-post.plist`、測試；`social-sync/handoff.md`、`social-sync/progress.md`"
          ],
          "date": "2026-11-20",
          "time": "11:58",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-20 11:47 · cloud · GitHub Actions",
          "lines": [
            "來源：儀表板 Issue #18。本人對 social-sync-15（圖片影片混放的相簿要不要轉發）回覆「要發」，已打勾。",
            "「當成哪一類」本人沒講，不替他決定；新開 social-sync-16 @本人 問這一點，定了才改程式，目前程式仍跳過混合相簿。",
            "handoff 現況的分流規則改成「混合相簿要發、分類待定」，seq 改 16。",
            "改了：`social-sync/handoff.md`、`social-sync/progress.md`。"
          ],
          "date": "2026-11-20",
          "time": "11:47",
          "machine": "cloud",
          "tool": "GitHub Actions"
        },
        {
          "title": "2026-11-18 12:53 · mac-mini · Claude App",
          "lines": [
            "本人同意開始授權。建立 Google Cloud 專案並啟用 YouTube Data API v3；OAuth 同意畫面填到最後一步。",
            "Threads 專用 Meta App 填到最後一步。",
            "卡在兩個只有本人能做的動作：Meta 的重新輸入密碼視窗要按提交；Google 的使用者資料政策要本人同意才能勾。",
            "另外發現這台 Chrome 登入的 IG 不是目標帳號，取 IG 權杖時要本人登入。",
            "改了：`docs/publish-setup.md`（加授權進度）。"
          ],
          "date": "2026-11-18",
          "time": "12:53",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 18:22 · mac-mini · Claude App",
          "lines": [
            "本人確認 Threads 與 IG 發到同一個同名帳號。",
            "寫完三個發佈端與 `publish` 指令（預設試跑，加 `--live` 才送出）：Threads 兩步驟發佈、長文切段接成回覆串、相簿用輪播；IG 發 Reels；YouTube 分段上傳。另有憑證檔權限檢查、權杖每週自動更新、YouTube 授權小工具。",
            "單元測試 36 條通過（發佈端用假的平台回應）。用近幾天的貼文試跑：計畫內容正確，沒授權時加 `--live` 也不會送出任何東西。**沒有真的發過一篇。**",
            "查官方文件的結果：YouTube 現在寫明未審核專案上傳不會被鎖成私人；Threads 的文字附件只能用在純文字貼文；IG 的 Instagram Login 版只收公開網址。",
            "抓到並修掉一個會出錯的情況：11/14 那篇相簿其實是 2 支影片加 1 張圖，原本會只發 1 張圖到 Threads；改成混合相簿一律跳過，開 social-sync-15 等本人定規則。",
            "媒體網址改用全球通用的 CDN 主機並記進佇列，Threads 與 IG 直接用它，不另架代管；對方伺服器抓不抓得到還沒驗。",
            "卡在：三個平台都還沒授權，要本人同意建 App／專案並在授權畫面按同意。",
            "改了：程式碼倉庫 `src/publish.js`、`src/publishers/`、`src/text.js`、`src/creds.js`、`src/util.js`、`src/auth/youtube.js`、`src/parse.js`、`src/media.js`、`src/main.js`、三個測試檔、README；這裡的 handoff、CLAUDE.md、`docs/publish-setup.md`。"
          ],
          "date": "2026-11-17",
          "time": "18:22",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 18:22 · mac-mini · Claude App",
          "lines": [
            "本人確認 Threads 長文的處理方式：超過上限的部分貼在留言。與現有實作（第一段當主文、其餘接成回覆串）一致，程式不用改。"
          ],
          "date": "2026-11-17",
          "time": "18:22",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 18:09 · mac-mini · Claude App",
          "lines": [
            "拿最新一篇公開貼文（11/16 的影片貼文）在暫存資料夾跑完整讀取流程：正確分類為影片、去向 Threads＋IG＋YouTube，文字全文與影片檔都拿到。正式資料夾同時跑一輪，沒有新貼文、沒有誤判。",
            "沒有做任何發佈，發佈端仍未實作。",
            "新發現兩件事，做發佈端時要處理：",
            "這篇文字 546 字，超過 Threads 單篇 500 字上限，需要決定截斷還是拆成串文。",
            "訪客拿到的影片是 720×1280、約 434 kbps，畫質低於原始上傳檔。",
            "YouTube 需要標題，FB 貼文沒有標題，要定一條產生規則。"
          ],
          "date": "2026-11-17",
          "time": "18:09",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:58 · mac-mini · Claude App",
          "lines": [
            "完成 social-sync-11：讀取程式第一版進程式碼倉庫（commit 43408eb、a9fb496）。未登入的無頭瀏覽器讀時間軸 → 解析 → 依分流規則分類 → 去重 → 下載媒體 → 寫待發佈佇列，只記錄不發佈",
            "實測：暫存資料夾把近六天當新貼文跑一輪，圖片貼文與影片貼文各一篇正確入列（影片 HD 3.8 MB、60 秒、有音軌），換封面照片那篇被正確跳過；正式資料夾已建基準線，重跑不會把舊貼文當新的",
            "中途修一個問題：訪客登入視窗會擋住捲動，每輪只讀到 3 篇，加上關閉視窗後讀到 9 篇",
            "發現時間軸的影片貼文本身就帶影片檔網址，不必另外讀 Reels 分頁",
            "沒做的：排程（開 social-sync-14，裝之前要問本人）、三個發佈端；沒驗的：純文字貼文、相簿是否給全部圖片、長期輪詢會不會被擋",
            "改了：`~/social-sync` 的 `src/`、`test/`、`config.json`、`run.sh`、`README.md`；`social-sync/CLAUDE.md`（技術與禁忌）、`social-sync/handoff.md`"
          ],
          "date": "2026-11-17",
          "time": "16:58",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:51 · mac-mini · Claude App",
          "lines": [
            "本人拍板 social-sync-13：換封面照片、動態回顧分享、轉貼連結都不轉發，寫進 CLAUDE.md 的分流規則；任務移走。多圖相簿沒在這次的問題裡，照一般圖片貼文處理",
            "連帶影響：文章經 km-bot 進 FB 的貼文是連結貼文，照這條規則不會再被轉到 Threads，social-sync-8 的問題等於有了答案，留給開那件任務的 session 收",
            "開工 social-sync-11（讀取程式），handoff 標進行中",
            "改了：`social-sync/CLAUDE.md`、`social-sync/handoff.md`"
          ],
          "date": "2026-11-17",
          "time": "16:51",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:46 · mac-mini · Claude App",
          "lines": [
            "回答本人「公開的圖片、文字貼文抓不抓得到」：抓得到。未登入的無頭瀏覽器往下捲拿到最近 15 篇，含文字全文、附件類型、圖片網址、隱私欄位；social-sync-12（找非影片貼文的路徑）完成移走",
            "沒驗到的：純文字貼文（這段期間剛好沒有）、相簿是否給全部圖片、長期輪詢會不會被擋",
            "新發現的待決：時間軸混著換封面照片、動態回顧分享、轉貼連結，開 social-sync-13 請本人決定哪些不轉發",
            "探針腳本存進程式碼倉庫 `probe/`（commit e0de24e）。改了：`social-sync/handoff.md`、`social-sync/docs/fb-read-verification.md`"
          ],
          "date": "2026-11-17",
          "time": "16:46",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:41 · mac-mini · Claude App",
          "lines": [
            "本人不接受方案 D（多一道手動），要求直接抓 FB。social-sync-3 定案走抓取，採「不登入抓公開頁」的做法；social-sync-10（第二次讀取實測）同時完成，兩件移走",
            "實測：未登入的 Reels 分頁拿得到最近 10 支影片的文案、時間、HD 網址，影片可直接下載（抽測一支 3.8 MB）；個人頁首頁未登入只給最新 1 篇",
            "影片線（→IG、YouTube、Threads）讀取可行；非影片貼文到 Threads 還沒有路徑，開 social-sync-12。新開 social-sync-11 寫影片線讀取程式",
            "還沒寫正式程式，測試腳本只在暫存區。改了：`social-sync/handoff.md`、`social-sync/docs/fb-read-verification.md`（追加一節）"
          ],
          "date": "2026-11-17",
          "time": "16:41",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:31 · mac-mini · Claude App",
          "lines": [
            "本人改分流規則：只有含影片的貼文才發 IG 與 YouTube；圖片、純文字、連結貼文只發 Threads（Threads 照舊收全部類型，這點是沿用原規則的理解，本人沒有另外講）",
            "連帶影響：方案 B（原生 FB→IG 分享）更不合用，設定頁沒有依貼文類型篩選的選項，圖片貼文也會被帶去 IG",
            "改了：`social-sync/CLAUDE.md`（分流規則）、`social-sync/handoff.md`（現況第三條、social-sync-3 一句、陷阱一條）"
          ],
          "date": "2026-11-17",
          "time": "16:31",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:30 · mac-mini · Claude App",
          "lines": [
            "刪掉重複的專用 Meta App（本人確認並輸入密碼）。刪除後回清單核對：只剩 docs 記載要保留的那一個，後台 App 總數從 19 回到 18",
            "刪除對話框只顯示名稱不顯示編號，兩個 App 同名，所以是靠「從哪張卡片的選單點進去」加事後核對來確認刪對",
            "改了：`social-sync/docs/fb-read-verification.md`（重複 App 的處置改為已刪除）、`social-sync/handoff.md`（陷阱最後一條、updated）"
          ],
          "date": "2026-11-17",
          "time": "16:30",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:17 · mac-mini · Claude App",
          "lines": [
            "完成「查原生跨平台分享」（原編號 social-sync-9，與另一個 session 開的同號任務撞號，這件做完移走，留下的 social-sync-9 是手機實測那件）。只看設定，沒改任何開關",
            "結果：FB 個人檔案→IG 的自動分享存在但兩個開關都關著；IG→FB 的自動分享已經開著；FB→Threads 在設定頁沒有可選的目的地，說明文字提到 Threads 但實際行為未驗證",
            "判斷：方案 B 只接得起圖片與影片貼文，純文字到 Threads 沒有確認的原生路徑，YouTube 仍要程式從 IG 讀。打開 FB→IG 前要先確認非公開貼文會不會外流、會不會和 IG→FB 互相回傳",
            "改了：`social-sync/docs/fb-read-verification.md`（追加一節）、`social-sync/handoff.md`（現況第三條、social-sync-3 補一句、陷阱一條、移除做完的任務）"
          ],
          "date": "2026-11-17",
          "time": "16:17",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:14 · mac-mini · Claude App",
          "lines": [
            "本人拍板走半自動（social-sync-6）。實作並部署 social-sync-7：km-bot 文章發布成功後，LINE 回覆從一則變三則——確認、可長按複製的貼文文字（標題／副標／文章連結）、FB 分享連結（帶 LINE 的外部瀏覽器參數）",
            "兩個保護：發布回傳只拿到後台編輯網址時不給分享連結；三則送不出去就退回原本的單則確認",
            "測試 460 passed（基線 454，新增 6 條）；km-line-bot commit 17b6901，Cloud Run 新版 km-bot-00103，健康檢查正常",
            "沒驗的：手機上的實際操作（LINE 開外部瀏覽器、FB 是否已登入、預覽長相）要等下一篇文章發布才看得到，開成 social-sync-9 等本人實測",
            "改了：km-line-bot 的 `article.py`、`main.py`、`tests/test_fb_share.py`（新增）與兩個既有測試；`social-sync/handoff.md`、`social-sync/progress.md`"
          ],
          "date": "2026-11-17",
          "time": "16:14",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:04 · mac-mini · Claude App",
          "lines": [
            "另一個 session 同時段也做了 social-sync-1，兩邊互不知情。這邊獨立建 App、授權 `user_posts`、查 `/me/posts` 與 `/me/feed`，得到同一個錯誤（subcode 2069030），結論一致：專業模式的個人檔案讀不到",
            "多確認一點：不帶任何 fields 也被擋，是端點本身的問題。沒測到的：舊版 API（測試工具強制用 v27.0）、`/me/photos` 與 `/me/videos` 旁路（測試工具還沒列出那兩個權限）",
            "副作用：開發者後台現在有兩個同名的專用 App，多的那個待本人確認後刪除；編號與處置寫在 docs",
            "改了：`social-sync/docs/fb-read-verification.md`（追加一節）、`social-sync/handoff.md`（陷阱一條、updated）"
          ],
          "date": "2026-11-17",
          "time": "16:04",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:00 · mac-mini · Claude App",
          "lines": [
            "加需求並理清：km-line-bot 發到 Substack 的文章也要同步發到 FB 個人檔案。這是本專案鏈條的上游（文章先進 FB，再由本專案往 Threads／IG／YouTube 送），在「下一步」另開一個階段，編號 social-sync-6～8，沒有動原本五個任務的順序",
            "查證：官方 Graph API 自 2018 年移除 publish_actions 後不能發文到個人檔案，2026 年的資料確認仍是如此，只能發粉專。所以「全自動發到個人帳號」沒有官方路徑，列了三個做法待本人拍板（social-sync-6）",
            "確認接點：km-bot 的文章發布在 Cloud Run 上跑（本人在 LINE 按「發布」後觸發），發布成功時手上有標題、副標、內文與公開網址，可在那一步接出去",
            "沒寫程式。改了：`social-sync/handoff.md`、`social-sync/progress.md`"
          ],
          "date": "2026-11-17",
          "time": "16:00",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 16:00 · mac-mini · Claude App",
          "lines": [
            "完成 social-sync-1，結論是不通：建了專用 Meta App（開發模式、Facebook 登入使用案例），加 `user_posts` 並由本人授權，在 Graph API 測試工具查 `/me/posts` 與 `/me/feed` 都回 code 200、subcode 2069030「新版粉絲專頁體驗不支援此端點」；`/me` 與權限清單正常",
            "推定原因：個人檔案開了專業模式（頁面有「主控板」與「數位創作者」）。屬推論，Meta 文件沒有明文，佐證是錯誤訊息與開發者社群一則無回覆的提問",
            "順帶查到：`user_posts` 的官方允許用途不含跨平台同步，App 審查不會過；Threads API 不能和 Facebook 登入放同一個 App",
            "卡在：讀取端要換路徑，五個替代方案等本人拍板",
            "改了：`social-sync/docs/fb-read-verification.md`（新增）、`social-sync/handoff.md`"
          ],
          "date": "2026-11-17",
          "time": "16:00",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 15:42 · mac-mini · Claude App",
          "lines": [
            "開案並定需求：來源是 FB 個人檔案（不是粉專）、全自動不審核、只同步公開貼文、照平台能力分流（影片三平台、圖片 Threads＋IG、純文字只發 Threads）",
            "用 gh 建私有程式碼倉庫 atticuswu/social-sync，clone 到 `~/social-sync`，放了匯入交接單的 CLAUDE.md 與 .gitignore；`projects.yaml` 登記 repo 與 path",
            "還沒寫程式。卡點是讀取端：`user_posts` 能否讀到個人檔案貼文未實測，列為第一個任務",
            "改了：`social-sync/CLAUDE.md`、`social-sync/handoff.md`、`projects.yaml`"
          ],
          "date": "2026-11-17",
          "time": "15:42",
          "machine": "mac-mini",
          "tool": "Claude App"
        },
        {
          "title": "2026-11-17 · mac-mini · new-project.sh",
          "lines": [
            "從範本建立專案資料夾"
          ],
          "date": "2026-11-17",
          "time": "",
          "machine": "mac-mini",
          "tool": "new-project.sh"
        }
      ],
      "machines": [
        {
          "id": "mac-mini",
          "checked": "2026-11-22T04:10+08:00",
          "repo": {
            "state": "ok",
            "branch": "main",
            "dirty": false,
            "behind": 0,
            "ahead": 0
          },
          "assets": ""
        }
      ]
    }
  ]
};
