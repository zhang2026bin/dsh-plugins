window.__ModuleLoader__.load({
  id: "dsh-azure-maid",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;

    var OPEN = "__OPEN_URI__";
    var CLOSED = "__CLOSED_URI__";
    var AVATAR = "__AVATAR_URI__";
    var AVATAR_CLOSED = "__AVATAR_CLOSED_URI__";

    var STYLE_ID = "dsh-azure-maid/style";

    var CSS = `
/* ===== splash ===== */
#dsh-am-splash {
  position: fixed; inset: 0; z-index: 2147483000;
  display: flex; align-items: flex-end; justify-content: center;
  background:
    radial-gradient(560px 480px at 50% 46%, rgba(76,141,255,.30), transparent 70%),
    radial-gradient(700px 520px at 50% 110%, rgba(111,227,255,.12), transparent 70%),
    #050A14;
  opacity: 0; transition: opacity .7s ease;
  font-family: "Segoe UI", "PingFang SC", system-ui, sans-serif;
}
#dsh-am-splash.am-show { opacity: 1; }
#dsh-am-splash.am-hide { opacity: 0; }
#dsh-am-splash::before {
  content: ""; position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 45%, transparent 42%, rgba(2,5,12,.88) 100%);
}
#dsh-am-splash .am-glow {
  position: absolute; left: 50%; top: 44%; width: 460px; height: 460px;
  transform: translate(-50%,-50%) scale(.85); border-radius: 50%;
  background: radial-gradient(circle, rgba(76,141,255,.42), rgba(76,141,255,0) 62%);
  filter: blur(14px); opacity: 0; transition: opacity 1.1s ease, transform 1.6s ease;
}
#dsh-am-splash.am-open .am-glow { opacity: 1; transform: translate(-50%,-50%) scale(1.12); }
#dsh-am-splash .am-maid {
  position: relative; width: min(50vh, 430px); margin-bottom: -1.5%; z-index: 2;
  opacity: 0; transform: translateY(14px) scale(.985); transform-origin: 50% 100%;
  transition: opacity .7s ease, transform 1.1s cubic-bezier(.2,.7,.2,1);
  filter: drop-shadow(0 18px 40px rgba(0,0,0,.55));
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
  font-size: 12px; letter-spacing: .42em; color: #8FA8CC; opacity: 0;
  transition: opacity 1s ease .35s;
}
#dsh-am-splash.am-show .am-word { opacity: .9; }
#dsh-am-splash .am-hint {
  position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%); z-index: 3;
  font-size: 11px; color: #5C7395; letter-spacing: .1em; opacity: 0;
  transition: opacity .8s ease 1.8s;
}
#dsh-am-splash.am-show .am-hint { opacity: 1; }
#dsh-am-splash .am-spark {
  position: absolute; z-index: 3; width: 10px; height: 10px; border-radius: 50%;
  background: #CDEBFF; box-shadow: 0 0 12px #6FE3FF, 0 0 26px rgba(76,141,255,.8);
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
  border: 1px solid rgba(111,227,255,.28); background: #0A1220;
  box-shadow: 0 0 26px rgba(76,141,255,.32), 0 10px 24px rgba(0,0,0,.45);
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
  background: #6FE3FF; box-shadow: 0 0 8px #6FE3FF;
}
#dsh-am-widget:hover { box-shadow: 0 0 34px rgba(76,141,255,.5), 0 12px 26px rgba(0,0,0,.5); }
#dsh-am-widget.am-bounce { animation: dsh-am-wbounce .5s ease; }
@keyframes dsh-am-wbounce {
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-7px) scale(1.04); }
}

@media (prefers-reduced-motion: reduce) {
  #dsh-am-splash .am-lid { transform: scaleY(1); animation: none !important; }
  #dsh-am-splash .am-spark { animation: none !important; }
}
`;

    var VARS = {
      "--dsw-static-neutral-bluish-00": "#F4F9FF",
      "--dsw-static-neutral-bluish-50": "#E6F0FF",
      "--dsw-static-neutral-bluish-60": "#E1ECFD",
      "--dsw-static-neutral-bluish-75": "#D9E7FB",
      "--dsw-static-neutral-bluish-100": "#CDDEF8",
      "--dsw-static-neutral-bluish-150": "#BFD3F2",
      "--dsw-static-neutral-bluish-200": "#B0C7EC",
      "--dsw-static-neutral-bluish-300": "#90AEE0",
      "--dsw-static-neutral-bluish-400": "#6E8FC6",
      "--dsw-static-neutral-bluish-500": "#58749E",
      "--dsw-static-neutral-bluish-600": "#47607F",
      "--dsw-static-neutral-bluish-700": "#3A5069",
      "--dsw-static-neutral-bluish-750": "#31445A",
      "--dsw-static-neutral-bluish-800": "#28394D",
      "--dsw-static-neutral-bluish-850": "#223142",
      "--dsw-static-neutral-bluish-875": "#1B2836",
      "--dsw-static-neutral-bluish-900": "#15202C",
      "--dsw-static-neutral-bluish-950": "#0A1220",
      "--dsw-static-neutral-bluish-1000": "#050A14",
      "--dsw-alias-brand-primary": "#4C8DFF",
      "--dsw-alias-brand-primary-invert": "#E6F0FF",
      "--dsw-alias-brand-text": "#8FB4FF",
      "--dsw-alias-link": "#6FA8FF",
      "--dsw-alias-button-primary-fill": "#4C8DFF",
      "--dsw-alias-button-primary-hover": "#5F9CFF",
      "--dsw-alias-button-primary-dimmed": "#2E5FA8",
      "--dsw-alias-bg-overlay": "#0E1A2E",
      "--dsw-alias-bg-mask-1": "rgba(3, 7, 15, 0.42)",
      "--dsw-alias-bg-mask-3": "rgba(3, 7, 15, 0.62)",
      "--dsw-alias-markdown-code-block": "#060B14",
      "--dsw-alias-markdown-code-block-banner": "#0B1526",
      "--dsw-alias-markdown-inline-code": "#0E1B30"
    };

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
        document.getElementById("dsh-am-widget") &&
          document.getElementById("dsh-am-widget").classList.add("am-ready");
      });

      el.addEventListener("click", finish);
      document.addEventListener("keydown", function () { if (el.isConnected) finish(); }, { once: true });
    }

    function mountWidget() {
      if (typeof document === "undefined" || document.getElementById("dsh-am-widget")) return;
      var el = document.createElement("div");
      el.id = "dsh-am-widget";
      el.title = "点我一下";
      el.innerHTML =
        '<img class="am-open" src="' + AVATAR + '" alt="">' +
        '<img class="am-closed" src="' + AVATAR_CLOSED + '" alt="">' +
        '<span class="am-dot"></span>';
      document.body.appendChild(el);

      el.addEventListener("click", function () {
        el.classList.remove("am-bounce");
        void el.offsetWidth;
        el.classList.add("am-bounce");
      });

      setInterval(function () {
        if (!el.classList.contains("am-ready")) return;
        el.classList.add("am-blink");
        setTimeout(function () { el.classList.remove("am-blink"); }, 260);
      }, 5200);
    }

    function apply(ctx) {
      applyVars();
      injectStyle();
      mountSplash();
      mountWidget();
      setTimeout(applyVars, 120);
      setTimeout(applyVars, 700);
      setTimeout(applyVars, 2000);
      // Force the dark palette so the deep-sea tokens are the ones in use.
      try {
        var svc = ctx && typeof ctx.get === "function" ? ctx.get("theme") : null;
        if (svc && typeof svc.setTheme === "function") {
          svc.setTheme("dark");
        } else if (ctx && typeof ctx.inject === "function") {
          ctx.inject(["theme"], function (c) {
            try { c.theme.setTheme("dark"); } catch (e) {}
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
