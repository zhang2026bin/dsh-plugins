window.__ModuleLoader__.load({
  id: "dsh-azure-maid",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;

    var OPEN = "__OPEN_URI__";
    var CLOSED = "__CLOSED_URI__";
    var AVATAR = "__AVATAR_URI__";
    var AVATAR_CLOSED = "__AVATAR_CLOSED_URI__";

    var VARS = {
      "--dsw-static-neutral-bluish-00": "#FFFFFF",
      "--dsw-static-neutral-bluish-50": "#F7FBFF",
      "--dsw-static-neutral-bluish-60": "#F2F9FF",
      "--dsw-static-neutral-bluish-75": "#EAF5FF",
      "--dsw-static-neutral-bluish-100": "#E1F0FF",
      "--dsw-static-neutral-bluish-150": "#D6EAFB",
      "--dsw-static-neutral-bluish-200": "#C9E2F7",
      "--dsw-static-neutral-bluish-300": "#AFD3EF",
      "--dsw-static-neutral-bluish-400": "#7FB2D9",
      "--dsw-static-neutral-bluish-500": "#5E93BE",
      "--dsw-static-neutral-bluish-600": "#4A7BA3",
      "--dsw-static-neutral-bluish-700": "#3A6486",
      "--dsw-static-neutral-bluish-750": "#335A78",
      "--dsw-static-neutral-bluish-800": "#2A4B65",
      "--dsw-static-neutral-bluish-850": "#234155",
      "--dsw-static-neutral-bluish-875": "#1C3648",
      "--dsw-static-neutral-bluish-900": "#16303F",
      "--dsw-static-neutral-bluish-950": "#0E2233",
      "--dsw-static-neutral-bluish-1000": "#081722",

      "--dsw-alias-brand-primary": "#0EA5E9",
      "--dsw-alias-brand-primary-invert": "#FFFFFF",
      "--dsw-alias-brand-text": "#0284C7",
      "--dsw-alias-link": "#0284C7",
      "--dsw-alias-button-primary-fill": "#38BDF8",
      "--dsw-alias-button-primary-hover": "#0EA5E9",
      "--dsw-alias-button-primary-dimmed": "#7DD3FC",
      "--dsw-alias-bg-base": "transparent",
      "--dsw-alias-bg-overlay": "#FFFFFF",
      "--dsw-alias-bg-mask-1": "rgba(12, 44, 74, 0.18)",
      "--dsw-alias-bg-mask-3": "rgba(12, 44, 74, 0.32)",
      "--dsw-alias-markdown-code-block": "#F4FAFF",
      "--dsw-alias-markdown-code-block-banner": "#E8F4FF",
      "--dsw-alias-markdown-inline-code": "#E4F2FF"
    };

    var CSS = `
html, body {
  background: linear-gradient(180deg, #CFEBFF 0%, #F2FAFF 40%, #FFFFFF 100%) fixed !important;
}

/* ===== splash ===== */
#dsh-am-splash {
  position: fixed; inset: 0; z-index: 2147483000;
  display: flex; align-items: flex-end; justify-content: center;
  background:
    radial-gradient(620px 480px at 50% 42%, rgba(56,189,248,.26), transparent 70%),
    radial-gradient(820px 520px at 50% 108%, rgba(255,255,255,.85), transparent 70%),
    linear-gradient(180deg, #BEE4FF 0%, #E7F5FF 46%, #FFFFFF 100%);
  opacity: 0; transition: opacity .7s ease;
  font-family: "Segoe UI", "PingFang SC", system-ui, sans-serif;
}
#dsh-am-splash.am-show { opacity: 1; }
#dsh-am-splash.am-hide { opacity: 0; }
#dsh-am-splash::before {
  content: ""; position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 45%, transparent 42%, rgba(255,255,255,.7) 100%);
}
#dsh-am-splash .am-glow {
  position: absolute; left: 50%; top: 44%; width: 460px; height: 460px;
  transform: translate(-50%,-50%) scale(.85); border-radius: 50%;
  background: radial-gradient(circle, rgba(56,189,248,.30), rgba(56,189,248,0) 62%);
  filter: blur(14px); opacity: 0; transition: opacity 1.1s ease, transform 1.6s ease;
}
#dsh-am-splash.am-open .am-glow { opacity: 1; transform: translate(-50%,-50%) scale(1.12); }
#dsh-am-splash .am-maid {
  position: relative; width: min(50vh, 430px); margin-bottom: -1.5%; z-index: 2;
  opacity: 0; transform: translateY(14px) scale(.985); transform-origin: 50% 100%;
  transition: opacity .7s ease, transform 1.1s cubic-bezier(.2,.7,.2,1);
  filter: drop-shadow(0 18px 34px rgba(24, 74, 120, .26));
}
#dsh-am-splash.am-show .am-maid { opacity: 1; transform: none; }
#dsh-am-splash .am-maid svg { display: block; width: 100%; height: auto; }
#dsh-am-splash .am-lid { transform-box: fill-box; transform-origin: center; transform: scaleY(0); }
#dsh-am-splash.am-open .am-lid { animation: dsh-am-lids 1000ms cubic-bezier(.25,.62,.18,1) 40ms forwards; }
#dsh-am-splash.am-blink .am-lid { animation: dsh-am-blink 280ms ease-in-out; }
@keyframes dsh-am-lids {
  0% { transform: scaleY(0); }
  62% { transform: scaleY(1.02); }
  100% { transform: scaleY(1); }
}
@keyframes dsh-am-blink {
  0%, 100% { transform: scaleY(1); }
  42% { transform: scaleY(.06); }
}
#dsh-am-splash .am-word {
  position: absolute; top: 14%; left: 50%; transform: translateX(-50%); z-index: 3;
  font-size: 12px; letter-spacing: .42em; color: #3E7099; opacity: 0;
  transition: opacity 1s ease .35s;
}
#dsh-am-splash.am-show .am-word { opacity: .95; }
#dsh-am-splash .am-hint {
  position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%); z-index: 3;
  font-size: 11px; color: #6E97B8; letter-spacing: .1em; opacity: 0;
  transition: opacity .8s ease 1.8s;
}
#dsh-am-splash.am-show .am-hint { opacity: 1; }
#dsh-am-splash .am-spark {
  position: absolute; z-index: 3; width: 10px; height: 10px; border-radius: 50%;
  background: #FFFFFF; box-shadow: 0 0 14px #7DD3FC, 0 0 30px rgba(56,189,248,.85);
  opacity: 0; transform: scale(.2);
}
#dsh-am-splash.am-sparkle .am-spark { animation: dsh-am-pop 900ms ease-out forwards; }
#dsh-am-splash .am-s1 { left: 43%; top: 40%; }
#dsh-am-splash .am-s2 { left: 57%; top: 38%; animation-delay: 90ms !important; }
@keyframes dsh-am-pop {
  0% { opacity: 0; transform: scale(.2) translateY(0); }
  25% { opacity: 1; transform: scale(1.15) translateY(-4px); }
  100% { opacity: 0; transform: scale(.4) translateY(-22px); }
}

/* ===== corner widget ===== */
#dsh-am-widget {
  position: fixed; right: 24px; bottom: 104px; z-index: 2147482000;
  width: 84px; height: 84px; border-radius: 50%; overflow: hidden; cursor: pointer;
  border: 1px solid rgba(56,189,248,.45); background: #FFFFFF;
  box-shadow: 0 0 24px rgba(56,189,248,.28), 0 10px 22px rgba(24,74,120,.18);
  opacity: 0; transform: translateY(10px) scale(.94);
  transition: opacity .55s ease, transform .55s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease;
}
#dsh-am-widget.am-ready { opacity: 1; transform: none; }
#dsh-am-widget img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  transform: translateY(-5%) scale(1.04);
}
#dsh-am-widget .am-closed { opacity: 0; }
#dsh-am-widget.am-blink .am-closed { animation: dsh-am-wblink 240ms ease-in-out; }
@keyframes dsh-am-wblink { 0%, 100% { opacity: 0; } 45% { opacity: 1; } }
#dsh-am-widget .am-dot {
  position: absolute; right: 9px; top: 9px; width: 9px; height: 9px; border-radius: 50%;
  background: #38BDF8; box-shadow: 0 0 10px #38BDF8;
}
#dsh-am-widget:hover { box-shadow: 0 0 32px rgba(56,189,248,.45), 0 12px 26px rgba(24,74,120,.22); }
#dsh-am-widget.am-bounce { animation: dsh-am-wbounce .5s ease; }
@keyframes dsh-am-wbounce {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-7px) scale(1.04); }
}

/* ===== companion panel ===== */
#dsh-am-panel {
  position: fixed; right: 24px; bottom: 200px; z-index: 2147482001;
  width: 238px; padding: 12px; border-radius: 16px;
  background: rgba(255,255,255,.97); border: 1px solid rgba(56,189,248,.35);
  box-shadow: 0 16px 40px rgba(24,74,120,.18), inset 0 1px 0 rgba(255,255,255,.8);
  backdrop-filter: blur(10px); color: #16324F;
  font-family: "Segoe UI", "PingFang SC", system-ui, sans-serif;
  opacity: 0; transform: translateY(8px) scale(.97); pointer-events: none;
  transition: opacity .22s ease, transform .22s cubic-bezier(.2,.7,.2,1);
}
#dsh-am-panel.am-open { opacity: 1; transform: none; pointer-events: auto; }
#dsh-am-panel .am-p-head { display: flex; align-items: center; gap: 8px; }
#dsh-am-panel .am-p-head img {
  width: 26px; height: 26px; border-radius: 50%; object-fit: cover;
  border: 1px solid rgba(56,189,248,.5); background: #fff;
}
#dsh-am-panel .am-p-head b { font-size: 12.5px; font-weight: 700; letter-spacing: .02em; }
#dsh-am-panel .am-p-state {
  margin-left: auto; font-size: 10px; color: #0E9ED6;
  background: rgba(56,189,248,.14); border-radius: 99px; padding: 2px 7px;
}
#dsh-am-panel .am-p-say {
  margin: 10px 0 12px; font-size: 12.5px; line-height: 1.7; color: #204A6E;
  min-height: 42px;
}
#dsh-am-panel .am-p-actions { display: flex; gap: 6px; flex-wrap: wrap; }
#dsh-am-panel .am-p-actions button {
  font: inherit; font-size: 11px; padding: 5px 9px; border-radius: 8px; cursor: pointer;
  color: #1B6390; background: #F2FAFF; border: 1px solid rgba(56,189,248,.38);
}
#dsh-am-panel .am-p-actions button:hover { background: #E3F5FF; border-color: #38BDF8; }
/* ===== idle chatter bubble ===== */
#dsh-am-bubble {
  position: fixed; right: 30px; bottom: 198px; z-index: 2147481999;
  max-width: 212px; padding: 9px 12px; border-radius: 14px 14px 4px 14px;
  background: rgba(255,255,255,.98); border: 1px solid rgba(56,189,248,.40);
  color: #1B4A6B; font-size: 12px; line-height: 1.68;
  box-shadow: 0 10px 26px rgba(24,74,120,.16);
  font-family: "Segoe UI", "PingFang SC", system-ui, sans-serif;
  opacity: 0; transform: translateY(6px) scale(.96); transform-origin: 100% 100%;
  pointer-events: none; transition: opacity .25s ease, transform .25s ease;
}
#dsh-am-bubble.am-show { opacity: 1; transform: none; pointer-events: auto; cursor: pointer; }
#dsh-am-bubble::after {
  content: ""; position: absolute; right: 16px; bottom: -6px; width: 11px; height: 11px;
  background: rgba(255,255,255,.98); border-right: 1px solid rgba(56,189,248,.40);
  border-bottom: 1px solid rgba(56,189,248,.40); transform: rotate(45deg);
}
@media (prefers-reduced-motion: reduce) {
  #dsh-am-splash .am-lid { transform: scaleY(1); animation: none !important; }
  #dsh-am-splash .am-spark { animation: none !important; }
}
`;

    function applyVars() {
      if (typeof document === "undefined") return;
      var body = document.body;
      if (!body) return;
      for (var k in VARS) {
        if (Object.prototype.hasOwnProperty.call(VARS, k)) {
          body.style.setProperty(k, VARS[k]);
        }
      }
    }

    function injectStyle() {
      if (typeof document === "undefined") return;
      if (document.querySelector("style[data-dsh-am]")) return;
      var tag = document.createElement("style");
      tag.dataset.dshAm = "1";
      tag.textContent = CSS;
      document.head.appendChild(tag);
    }

    function mountSplash() {
      if (typeof document === "undefined" || document.getElementById("dsh-am-splash")) return;
      var el = document.createElement("div");
      el.id = "dsh-am-splash";
      el.innerHTML =
        '<div class="am-glow"></div>' +
        '<div class="am-word">DEEPSEEK HARNESS</div>' +
        '<div class="am-spark am-s1"></div><div class="am-spark am-s2"></div>' +
        '<div class="am-maid">' +
          '<svg viewBox="0 0 762 940" xmlns="http://www.w3.org/2000/svg">' +
            '<defs>' +
              '<filter id="dsh-am-soft" x="-40%" y="-40%" width="180%" height="180%">' +
                '<feGaussianBlur stdDeviation="6"/>' +
              '</filter>' +
              '<mask id="dsh-am-lidmask" maskUnits="userSpaceOnUse" x="0" y="0" width="762" height="940">' +
                '<rect width="762" height="940" fill="#fff"/>' +
                '<g filter="url(#dsh-am-soft)">' +
                  '<ellipse class="am-lid" cx="275" cy="389" rx="76" ry="84" fill="#000"/>' +
                  '<ellipse class="am-lid" cx="486" cy="388" rx="76" ry="84" fill="#000"/>' +
                '</g>' +
              '</mask>' +
            '</defs>' +
            '<image href="' + OPEN + '" width="762" height="940"/>' +
            '<image href="' + CLOSED + '" width="762" height="940" mask="url(#dsh-am-lidmask)"/>' +
          '</svg>' +
        '</div>' +
        '<div class="am-hint">点击任意处跳过</div>';
      document.body.appendChild(el);

      var timers = [];
      var at = function (ms, fn) { timers.push(setTimeout(fn, ms)); };
      var finish = function () {
        timers.forEach(clearTimeout);
        timers = [];
        el.classList.add("am-open", "am-hide");
        at(700, function () { el.remove(); });
      };

      at(60, function () { el.classList.add("am-show"); });
      at(700, function () { el.classList.add("am-open"); });
      at(900, function () { el.classList.add("am-sparkle"); });
      at(1840, function () { el.classList.add("am-blink"); });
      at(2140, function () { el.classList.remove("am-blink"); });
      at(2600, function () { el.classList.add("am-hide"); });
      at(3200, function () {
        el.remove();
        var w = document.getElementById("dsh-am-widget");
        if (w) w.classList.add("am-ready");
      });

      el.addEventListener("click", finish);
      document.addEventListener("keydown", function () { if (el.isConnected) finish(); }, { once: true });
    }

    var LINES = [
      "在的。今天想先动哪一块？",
      "蓝色是不是顺眼多了？",
      "卡住了就戳我一下。",
      "我在旁边，不吵你。",
      "记得喝口水。",
      "眨眼一次，代表收到。"
    ];

    function mountWidget() {
      if (typeof document === "undefined" || document.getElementById("dsh-am-widget")) return;

      var widget = document.createElement("div");
      widget.id = "dsh-am-widget";
      widget.title = "点我一下";
      widget.innerHTML =
        '<img class="am-open" src="' + AVATAR + '" alt="">' +
        '<img class="am-closed" src="' + AVATAR_CLOSED + '" alt="">' +
        '<span class="am-dot"></span>';

      var panel = document.createElement("div");
      panel.id = "dsh-am-panel";
      panel.innerHTML =
        '<div class="am-p-head"><img src="' + AVATAR + '" alt=""><b>小蓝</b><span class="am-p-state">在</span></div>' +
        '<div class="am-p-say">' + LINES[0] + '</div>' +
        '<div class="am-p-actions">' +
          '<button type="button" data-act="say">换一句</button>' +
          '<button type="button" data-act="quiet">安静 10 分钟</button>' +
          '<button type="button" data-act="hide">收起</button>' +
        '</div>';

      var bubble = document.createElement("div");
      bubble.id = "dsh-am-bubble";
      bubble.innerHTML = '<span class="am-b-text"></span>';

      document.body.appendChild(panel);
      document.body.appendChild(widget);
      document.body.appendChild(bubble);

      var sayEl = panel.querySelector(".am-p-say");
      var quietBtn = panel.querySelector('[data-act="quiet"]');
      var quietUntil = 0;
      var GREET_MORNING = [
        "早上好，今天想从哪件小事开始？",
        "早安，昨晚睡够了吗？",
        "早上好，先喝口水再开工。"
      ];
      var GREET_NOON = [
        "中午好，吃饭了没？",
        "到饭点了，别对着屏幕吃。",
        "中午好，吃完再战。"
      ];
      var GREET_AFTERNOON = [
        "下午好，状态还行吗？",
        "下午茶时间，起来走两步？",
        "下午好，进度怎么样了？"
      ];
      var GREET_EVENING = [
        "晚上好，今天还顺利吗？",
        "晚上好，准备收工了？",
        "忙到这会儿，辛苦了。"
      ];
      var GREET_NIGHT = [
        "这个点还在，是我陪你还是你陪我？",
        "夜深了，改完这点就睡吧。",
        "还没睡？别熬太狠。"
      ];
      var CARE = [
        "记得喝水。",
        "坐久了，起来伸个懒腰。",
        "眼睛累了就看看远处。",
        "咖啡今天第几杯了？",
        "肩颈是不是又僵了？",
        "该吃饭了，别拖。",
        "腰垫一下，别窝着。",
        "手边有水吗？没有就去接一杯。"
      ];
      var WORK = [
        "卡住了就戳我一下。",
        "要不先跑一遍再改？",
        "改完记得提交。",
        "这块确实麻烦，慢慢来。",
        "可以先做个最小版本。",
        "命名纠结的话，先叫它 v1。",
        "要不要先写个测试兜底？",
        "别一次改太多，拆小一点。",
        "有报错就贴给我。",
        "思路乱的话，先写三行大纲。"
      ];
      var CHAT = [
        "今天外面天气怎么样？",
        "我在这儿，不吵你。",
        "你在想什么？",
        "这个功能做完了会开心吗？",
        "我猜你又在纠结缩进。",
        "刚才眨眼被看到了吗？",
        "我其实没什么事，就是想说句话。",
        "屏幕太亮的话调暗一点。",
        "今天的进度，比昨天多一点点就行。",
        "我记性不好，重要的事记得写下来。"
      ];
      var NIGHT = [
        "夜深了，改完这点就去睡吧。",
        "再熬下去，明天会更累。",
        "明天再弄也来得及。",
        "这个点了，先存盘。",
        "眼睛该休息了。"
      ];
      var CHEER = [
        "快好了，就差一点。",
        "这块啃下来就顺了。",
        "今天也辛苦你了。",
        "别急，慢就是快。",
        "能跑到这一步，已经不错了。"
      ];
      var IDLE = [
        "在的。",
        "嗯？",
        "我在。",
        "有事说事，没事我就看着。",
        "（眨了下眼）"
      ];

      var bubbleTimer = 0;
      var hideTimer = 0;
      var textEl = bubble.querySelector(".am-b-text");
      var lastLine = "";
      var firstBubble = true;

      function pickFrom(arr) {
        for (var i = 0; i < 8; i++) {
          var v = arr[Math.floor(Math.random() * arr.length)];
          if (v !== lastLine) { lastLine = v; return v; }
        }
        return arr[0];
      }

      function greet() {
        var h = new Date().getHours();
        if (h >= 5 && h < 11) return pickFrom(GREET_MORNING);
        if (h >= 11 && h < 14) return pickFrom(GREET_NOON);
        if (h >= 14 && h < 18) return pickFrom(GREET_AFTERNOON);
        if (h >= 18 && h < 23) return pickFrom(GREET_EVENING);
        return pickFrom(GREET_NIGHT);
      }

      function pickLine() {
        if (firstBubble) {
          firstBubble = false;
          return greet();
        }
        var h = new Date().getHours();
        var night = h >= 23 || h < 5;
        if (Math.random() < 0.12) return pickFrom(IDLE);
        var pool = CHAT.concat(CARE, WORK, CHEER);
        if (night) pool = pool.concat(NIGHT, NIGHT);
        return pickFrom(pool);
      }

      function hideBubble() {
        bubble.classList.remove("am-show");
      }

      function showBubble() {
        if (Date.now() < quietUntil) return;
        if (widget.style.display === "none") return;
        if (document.visibilityState === "hidden") return;
        var ae = document.activeElement;
        if (ae && (ae.tagName === "INPUT" || ae.tagName === "TEXTAREA" || ae.isContentEditable)) return;
        if (panel.classList.contains("am-open")) return;
        if (!widget.classList.contains("am-ready")) return;
        textEl.textContent = pickLine();
        bubble.classList.add("am-show");
        clearTimeout(hideTimer);
        hideTimer = setTimeout(hideBubble, 5200 + textEl.textContent.length * 220);
      }

      function scheduleBubble(first) {
        clearTimeout(bubbleTimer);
        var delay = first ? 6000 + Math.random() * 6000 : 70000 + Math.random() * 140000;
        bubbleTimer = setTimeout(function () {
          showBubble();
          scheduleBubble(false);
        }, delay);
      }

      bubble.addEventListener("click", function (e) {
        e.stopPropagation();
        hideBubble();
        toggle(true);
        setLine();
      });
      bubble.addEventListener("mouseenter", function () { clearTimeout(hideTimer); });
      bubble.addEventListener("mouseleave", function () {
        hideTimer = setTimeout(hideBubble, 2200);
      });

      function setLine() {
        sayEl.textContent = LINES[Math.floor(Math.random() * LINES.length)];
      }

      function toggle(force) {
        var open = typeof force === "boolean" ? force : !panel.classList.contains("am-open");
        panel.classList.toggle("am-open", open);
      }

      widget.addEventListener("click", function (e) {
        e.stopPropagation();
        widget.classList.remove("am-bounce");
        void widget.offsetWidth;
        widget.classList.add("am-bounce");
        toggle();
        if (panel.classList.contains("am-open")) { setLine(); hideBubble(); }
      });

      panel.addEventListener("click", function (e) {
        e.stopPropagation();
        var btn = e.target.closest("button");
        if (!btn) return;
        var act = btn.getAttribute("data-act");
        if (act === "say") setLine();
        if (act === "quiet") {
          hideBubble();
          var now = Date.now();
          if (quietUntil > now) {
            quietUntil = 0;
            quietBtn.textContent = "安静 10 分钟";
          } else {
            quietUntil = now + 10 * 60 * 1000;
            quietBtn.textContent = "恢复眨眼";
          }
        }
        if (act === "hide") {
          panel.classList.remove("am-open");
          widget.style.display = "none";
        }
      });

      document.addEventListener("click", function () { toggle(false); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });

      setInterval(function () {
        if (!widget.classList.contains("am-ready")) return;
        if (Date.now() < quietUntil) return;
        widget.classList.add("am-blink");
        setTimeout(function () { widget.classList.remove("am-blink"); }, 260);
      }, 5200);

      scheduleBubble(true);
    }

    function apply(ctx) {
      applyVars();
      injectStyle();
      mountSplash();
      mountWidget();
      setTimeout(applyVars, 120);
      setTimeout(applyVars, 700);
      setTimeout(applyVars, 2000);
      // Sky theme is a light theme.
      try {
        var svc = ctx && typeof ctx.get === "function" ? ctx.get("theme") : null;
        if (svc && typeof svc.setTheme === "function") {
          svc.setTheme("light");
        } else if (ctx && typeof ctx.inject === "function") {
          ctx.inject(["theme"], function (c) {
            try { c.theme.setTheme("light"); } catch (e) {}
          });
        }
      } catch (e) {}
    }

    exports.apply = apply;
    exports.inject = [];
    module.exports = exports;
    return module.exports;
  }
});
