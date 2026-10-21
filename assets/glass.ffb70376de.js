(function(){if(document.getElementById("cctouchcss"))return;var s=document.createElement("style");s.id="cctouchcss";s.textContent="/* ===== v80 (20 October 2026, Charlie): What does it touch? pages (touch.js), a compact dashboard for each obligation ===== */\n#cctouch{position:fixed;inset:0;z-index:3000;overflow:auto;overscroll-behavior:contain;background:#fbf8ff;background:radial-gradient(circle at 10% 0%,rgba(236,228,255,.95),transparent 40%),radial-gradient(circle at 95% 6%,rgba(255,240,245,.95),transparent 38%),radial-gradient(circle at 60% 100%,rgba(230,251,243,.9),transparent 45%),#fbf8ff;opacity:0;transition:opacity .22s ease}\n#cctouch.on{opacity:1}\nhtml.calm #cctouch{transition:none}\n.tch-in{max-width:1320px;margin:0 auto;padding:0 24px 44px}\n.tch-top{position:sticky;top:0;z-index:2;display:flex;align-items:center;gap:12px;margin:0 -24px;padding:12px 24px 10px;background:rgba(251,248,255,.97);box-shadow:0 8px 18px -14px rgba(84,58,140,.45)}\n.tch-ht .k{font:800 11.5px 'Segoe UI',system-ui,sans-serif;letter-spacing:.9px;text-transform:uppercase;color:var(--plum)}\n.tch-back{display:inline-flex;align-items:center;gap:7px;border:1px solid var(--line);background:#fff;border-radius:999px;padding:7px 14px;font:700 13px 'Segoe UI',system-ui,sans-serif;color:var(--plum);cursor:pointer;box-shadow:0 4px 12px rgba(84,58,140,.1)}\n.tch-back:hover,.tch-back:focus-visible{background:var(--plum);color:#fff}\n.tch-crumb{font:700 11.5px 'Segoe UI',system-ui,sans-serif;letter-spacing:.9px;text-transform:uppercase;color:var(--ink2)}\n.tch-x{margin-left:auto;width:38px;height:38px;border-radius:50%;border:1px solid var(--line);background:#fff;font-size:22px;line-height:1;color:var(--plum);cursor:pointer}\n.tch-hero{display:flex;gap:18px;align-items:center;background:linear-gradient(135deg,#fff 35%,var(--lilac2));background:linear-gradient(135deg,#fff 35%,color-mix(in srgb,var(--tch) 34%,#fff));border:1px solid rgba(255,255,255,.95);border-radius:28px;padding:20px 24px;box-shadow:0 22px 44px -22px var(--tch),var(--shadow)}\n.tch-hi{width:76px;height:76px;flex:none;border-radius:24px;background:#fff;display:grid;place-items:center;box-shadow:0 12px 26px -8px var(--tch),inset 0 0 0 1px rgba(255,255,255,.9)}\n.tch-hi svg{width:56px;height:56px}\n.tch-ht{flex:1;min-width:0}\n.tch-ht h2{font-size:32px;line-height:1.15;margin:2px 0 6px}\n.tch-ht p{margin:0;color:var(--ink2);font-size:14.5px;line-height:1.55;max-width:780px}\n.tch-hc{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 18px;background:rgba(255,255,255,.88);border-radius:20px;min-width:160px;text-align:center;box-shadow:0 6px 16px rgba(84,58,140,.08)}\n.tch-hc b{font:700 44px/1 Georgia,serif;color:var(--ink)}\n.tch-hc>span{font-size:12.5px;color:#6b6385}\n.tch-hc .btn{font-size:12.5px;padding:6px 12px}\n.tch-sw{display:flex;gap:8px;overflow-x:auto;padding:16px 2px 8px;scrollbar-width:thin}\n.tch-swb{display:inline-flex;align-items:center;gap:7px;flex:none;border:1px solid var(--line);background:rgba(255,255,255,.9);border-radius:999px;padding:6px 7px 6px 12px;font:600 13px 'Segoe UI',system-ui,sans-serif;color:var(--ink);cursor:pointer;white-space:nowrap}\n.tch-swb i{width:10px;height:10px;border-radius:50%;flex:none}\n.tch-swb b{background:var(--lilac2);color:var(--plum);border-radius:999px;padding:1px 8px;font-size:12px}\n.tch-swb:hover{border-color:var(--plum)}\n.tch-swb.on{background:var(--plum);color:#fff;border-color:var(--plum)}\n.tch-swb.on b{background:rgba(255,255,255,.24);color:#fff}\n.tch-kpis{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;margin:12px 0 24px}\n.tch-kpi{display:flex;flex-direction:column;align-items:flex-start;gap:4px;border:1px solid rgba(122,79,196,.14);border-radius:20px;padding:13px 16px;background:#fff;cursor:pointer;box-shadow:0 8px 18px -10px rgba(84,58,140,.3);text-align:start;transition:transform .15s ease,box-shadow .15s ease}\n.tch-kpi:hover:not(:disabled){transform:translateY(-2px)}\n.tch-kpi b{font:700 32px/1 Georgia,serif}\n.tch-kpi span{font:800 11.5px 'Segoe UI',system-ui,sans-serif;letter-spacing:.7px;text-transform:uppercase}\n.tch-k-act{background:linear-gradient(160deg,#fff 30%,#ffe3ec)}.tch-k-act b,.tch-k-act span{color:#a3173f}\n.tch-k-plan{background:linear-gradient(160deg,#fff 30%,#ffead9)}.tch-k-plan b,.tch-k-plan span{color:#9a4a17}\n.tch-k-review{background:linear-gradient(160deg,#fff 30%,#fff3c4)}.tch-k-review b,.tch-k-review span{color:#7a5a07}\n.tch-k-know{background:linear-gradient(160deg,#fff 30%,#dcf5ec)}.tch-k-know b,.tch-k-know span{color:#1f6f5f}\n.tch-k-all{background:linear-gradient(160deg,#fff 30%,var(--lilac2))}.tch-k-all b,.tch-k-all span{color:var(--plum)}\n.tch-kpi.on{box-shadow:0 0 0 3px rgba(122,79,196,.55),0 10px 22px -8px rgba(84,58,140,.35)}\n.tch-kpi:disabled{opacity:.45;cursor:default}\n.tch-sec{margin:0 0 26px}\n.tch-sh h3{font-size:22px;margin:0;display:flex;align-items:center;gap:8px}\n.tch-sh p{margin:3px 0 12px;color:var(--ink2);font-size:13.5px;line-height:1.5}\n.tch-n{display:inline-grid;place-items:center;min-width:26px;height:24px;padding:0 8px;border-radius:999px;background:var(--lilac2);color:var(--plum);font:700 12.5px 'Segoe UI',system-ui,sans-serif}\n.tch-five{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:12px;align-items:stretch}\n.tch-wall{columns:3 300px;column-gap:14px}\n.tch-wall .tch-card{break-inside:avoid;margin:0 0 14px}\n.tch-card{position:relative;display:flex;flex-direction:column;gap:8px;min-width:0;background:#fff;border:1px solid rgba(122,79,196,.13);border-top:4px solid var(--suit,#7a4fc4);border-radius:18px;padding:13px 15px 14px;box-shadow:0 10px 22px -14px rgba(84,58,140,.4)}\n.tch-card[hidden]{display:none}\n.tch-top5{background:linear-gradient(170deg,#fff 45%,var(--lilac2));background:linear-gradient(170deg,#fff 45%,color-mix(in srgb,var(--tch) 24%,#fff));box-shadow:0 16px 30px -16px var(--tch),0 2px 6px rgba(84,58,140,.06)}\n.tch-ch{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.tch-rank{width:30px;height:30px;flex:none;border-radius:50%;display:grid;place-items:center;background:var(--plum);color:#fff;font:700 15px Georgia,serif;box-shadow:0 4px 10px rgba(122,79,196,.35)}\n.tch-ki{width:30px;height:30px;flex:none;border-radius:10px;background:#fff;display:grid;place-items:center;box-shadow:0 3px 8px rgba(84,58,140,.14)}\n.tch-ki svg{width:22px;height:22px}\n.tch-kind{font:800 10.5px 'Segoe UI',system-ui,sans-serif;letter-spacing:.7px;text-transform:uppercase;color:var(--suitt,#6a3fb4)}\n.tch-w{margin-left:auto;font:600 11px 'Segoe UI',system-ui,sans-serif;color:#6b6385;background:#f6f3fb;border-radius:999px;padding:2px 8px;white-space:nowrap}\n.tch-card h4{font:700 15px/1.3 'Segoe UI',system-ui,sans-serif;margin:0;color:var(--ink)}\n.tch-p{margin:0;font-size:13px;line-height:1.5;color:var(--ink2)}\n.tch-five .tch-p{display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}\n.tch-act{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.tch-when{font:700 12px 'Segoe UI',system-ui,sans-serif;color:var(--ink2)}\n.tch-do,.tch-who{margin:0;font-size:12.5px;line-height:1.45;color:var(--ink2)}\n.tch-do b,.tch-who b{display:block;font:800 10.5px 'Segoe UI',system-ui,sans-serif;letter-spacing:.6px;text-transform:uppercase;color:#6b6385;margin-bottom:1px}\n.tch-do{background:rgba(250,247,255,.9);border:1px solid rgba(122,79,196,.1);border-radius:12px;padding:7px 9px}\n.tch-cf{display:flex;align-items:flex-end;gap:8px;flex-wrap:wrap;margin-top:auto;padding-top:2px}\n.tch-also{display:flex;flex-wrap:wrap;gap:4px;align-items:center;flex:1;min-width:0}\n.tch-alk{font-size:11px;color:#6b6385;margin-right:2px}\n.tch-ab{border:1px solid var(--line);background:#fff;border-radius:999px;padding:2px 8px;font:600 11.5px 'Segoe UI',system-ui,sans-serif;color:var(--plum);cursor:pointer}\n.tch-ab:hover{border-color:var(--plum)}\n.tch-show{margin-left:auto;padding:5px 12px;font-size:12.5px}\n.tch-none{margin:0;font-size:13px;color:#6b6385}\n.tch-foot{display:grid;gap:8px;margin-top:8px;padding:16px 18px;background:rgba(255,255,255,.7);border:1px solid rgba(255,255,255,.95);border-radius:20px}\n.tch-foot p{margin:0;font-size:13px;line-height:1.5;color:var(--ink2)}\n.tch-foot p b{display:block;font:800 11px 'Segoe UI',system-ui,sans-serif;letter-spacing:.6px;text-transform:uppercase;color:var(--plum);margin-bottom:2px}\n@media (max-width:1250px){.tch-five{grid-template-columns:repeat(3,minmax(0,1fr))}}\n@media (max-width:860px){.tch-five{grid-template-columns:1fr 1fr}.tch-kpis{grid-template-columns:repeat(3,minmax(0,1fr))}.tch-hero{flex-wrap:wrap}.tch-hc{flex-direction:row;flex-wrap:wrap;width:100%;justify-content:flex-start}.tch-hc b{font-size:32px}}\n@media (max-width:560px){.tch-five{grid-template-columns:1fr}.tch-wall{columns:1}.tch-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}.tch-in{padding:0 12px 30px}.tch-top{margin:0 -12px;padding:10px 12px 8px}.tch-ht h2{font-size:24px}.tch-hi{width:56px;height:56px}.tch-hi svg{width:42px;height:42px}.tch-crumb{display:none}}\n@media print{#cctouch{display:none!important}}\n/* ===== v88 (Charlie, 20 Oct 2026): a page that explains itself: room under the top bar, icons on the count tiles, a line\n   that says what is showing, a top five for each action, and everything else grouped as tidy rows with filters ===== */\n.tch-hero{margin-top:18px}\n.tch-kpis{margin:12px 0 10px}\n.tch-kpi{flex-direction:row;align-items:center;gap:12px;padding:12px 14px}\n.tch-kpii{width:42px;height:42px;flex:none;border-radius:14px;background:#fff;display:grid;place-items:center;box-shadow:0 4px 12px -4px rgba(84,58,140,.35),inset 0 0 0 1px rgba(255,255,255,.9)}\n.tch-kpii svg{width:32px;height:32px}\n.tch-kpit{display:flex;flex-direction:column;gap:3px}\n.tch-lens{display:flex;align-items:center;gap:10px;margin:0 0 22px;padding:10px 14px;border-radius:16px;background:rgba(255,255,255,.85);border:1px solid rgba(122,79,196,.16);font-size:14px;line-height:1.45;color:var(--ink2)}\n.tch-lens b{color:var(--ink)}\n.tch-li{width:28px;height:28px;flex:none;display:inline-grid}.tch-li svg{width:28px;height:28px}\n.tch-lens.tch-l-act{background:#fff3f7;border-color:#f6c3d4}.tch-lens.tch-l-plan{background:#fff6ee;border-color:#f6d2b4}\n.tch-lens.tch-l-review{background:#fffbe8;border-color:#f1dd94}.tch-lens.tch-l-know{background:#effbf6;border-color:#b9e6d4}\n.tch-clear{margin-left:auto;flex:none;border:1px solid var(--line);background:#fff;border-radius:999px;padding:5px 12px;font:700 12.5px 'Segoe UI',system-ui,sans-serif;color:var(--plum);cursor:pointer}\n.tch-clear:hover{background:var(--plum);color:#fff}\n.tch-five{grid-template-columns:repeat(5,minmax(0,1fr))}\n.tch-five:has(> :nth-child(4):last-child){grid-template-columns:repeat(4,minmax(0,1fr))}\n.tch-tools{display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;margin:0 0 14px;padding:10px 12px;border-radius:16px;background:rgba(255,255,255,.78);border:1px solid rgba(122,79,196,.12)}\n.tch-chips{display:flex;flex-wrap:wrap;gap:6px}\n.tch-chip{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:#fff;border-radius:999px;padding:4px 11px;font:600 12.5px 'Segoe UI',system-ui,sans-serif;color:var(--ink);cursor:pointer}\n.tch-chip>span{width:18px;height:18px;display:inline-flex}.tch-chip>span svg{width:18px;height:18px}\n.tch-chip b{font-size:11.5px;color:var(--plum);background:var(--lilac2);border-radius:999px;padding:0 7px}\n.tch-chip:hover{border-color:var(--plum)}\n.tch-chip.on{background:var(--plum);border-color:var(--plum);color:#fff}.tch-chip.on b{background:rgba(255,255,255,.25);color:#fff}\n.tch-find{margin-left:auto;display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line);background:#fff;border-radius:999px;padding:3px 12px 3px 8px}\n.tch-find>span{width:20px;height:20px;display:inline-flex}.tch-find svg{width:20px;height:20px}\n.tch-find input{border:0;outline:0;background:none;font:14px 'Segoe UI',system-ui,sans-serif;color:var(--ink);width:180px}\n.tch-grp{margin:0 0 14px;border-radius:18px;background:rgba(255,255,255,.6);border:1px solid rgba(122,79,196,.12);padding:4px 12px 12px}\n.tch-grp>summary{display:flex;align-items:center;gap:10px;padding:8px 2px;cursor:pointer;list-style:none;flex-wrap:wrap}\n.tch-grp>summary::-webkit-details-marker{display:none}\n.tch-grp>summary b{font:700 17px Georgia,serif;color:var(--ink)}\n.tch-gi{width:30px;height:30px;display:inline-grid}.tch-gi svg{width:30px;height:30px}\n.tch-gp{font-size:13px;color:var(--ink2)}\n.tch-grp>summary::after{content:\"\\2212\";margin-left:auto;font:700 18px 'Segoe UI',system-ui,sans-serif;color:var(--plum)}\n.tch-grp:not([open])>summary::after{content:\"+\"}\n.tch-g-act{background:linear-gradient(170deg,rgba(255,255,255,.75),rgba(255,227,236,.55))}.tch-g-plan{background:linear-gradient(170deg,rgba(255,255,255,.75),rgba(255,234,217,.55))}\n.tch-g-review{background:linear-gradient(170deg,rgba(255,255,255,.75),rgba(255,243,196,.5))}.tch-g-know{background:linear-gradient(170deg,rgba(255,255,255,.75),rgba(220,245,236,.55))}\n.tch-rows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n.tch-row{flex-direction:row;align-items:flex-start;gap:12px;padding:11px 14px;border-top:0;border-left:4px solid var(--suit,#7a4fc4);border-radius:14px}\n.tch-row .tch-ki{margin-top:2px}\n.tch-rb{flex:1;min-width:0;display:flex;flex-direction:column;gap:5px}\n.tch-rm{display:flex;align-items:center;gap:8px;flex-wrap:wrap}\n.tch-row h4{font-size:14.5px}\n.tch-rdo{margin:0;font-size:12.8px;line-height:1.45;color:var(--ink2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.tch-rdo b{font:800 10.5px 'Segoe UI',system-ui,sans-serif;letter-spacing:.6px;text-transform:uppercase;color:#6b6385;margin-right:3px}\n.tch-rf{display:flex;align-items:center;gap:8px 12px;flex-wrap:wrap}\n.tch-rwho{font-size:12px;color:var(--ink2)}.tch-rwho b{font:800 10.5px 'Segoe UI',system-ui,sans-serif;letter-spacing:.6px;text-transform:uppercase;color:#6b6385;margin-right:3px}\n.tch-row .tch-also{flex:0 1 auto}\n.tch-row .tch-w{margin-left:0}\n@media (max-width:1100px){.tch-rows{grid-template-columns:1fr}.tch-five{grid-template-columns:repeat(2,minmax(0,1fr))}.tch-kpis{grid-template-columns:repeat(3,minmax(0,1fr))}}\n@media (max-width:640px){.tch-five,.tch-kpis{grid-template-columns:1fr}.tch-find{margin-left:0}.tch-find input{width:140px}}\n/* v92: share this page */\n.tch-share{display:inline-flex;gap:6px;margin-left:auto;margin-right:8px}\n.tch-sb{display:inline-flex;align-items:center;gap:6px;border:1px solid #d8cdf2;background:#fff;color:#4b2f86;border-radius:999px;padding:5px 12px 5px 8px;font:700 12.5px 'Segoe UI',system-ui,sans-serif;cursor:pointer}\n.tch-sb>span{width:18px;height:18px;display:inline-flex;align-items:center;justify-content:center}.tch-sb svg{width:18px;height:18px}\n.tch-sb:hover{background:#7a4fc4;color:#fff;border-color:#7a4fc4}\nhtml.ccdark .tch-sb{background:rgba(30,22,70,.8)!important;border-color:#c39bff!important;color:#f3ecff!important}\n@media (max-width:700px){.tch-share{display:none}}\n.tch-share+.tch-x{margin-left:0}\n";document.head.appendChild(s)})();
/* ===== v80 (20 October 2026, Charlie): What does it touch? pages. One page for each Queensland obligation, laid out as a
   compact dashboard: the headline five by impact, counts that filter by our suggested action, and every other item as a
   card with Act, Plan, Review or Just know, when, who and what to do. Show me opens the item's card right there, with
   Previous and Next through the page. Opened from Page beside each bar on What's new, the button at the top of its
   drawer, or #touch-privacy and so on. Data: ccAgency.touchData (agency.js). In the web edition this file is fetched the
   first time a page opens (window.CC_TOUCH_JS); the single-file edition carries it inside ===== */
(function(){
if(window.ccTouchRender)return;
const R=document.documentElement,$=(s,r)=>(r||document).querySelector(s),$$=(s,r)=>[...(r||document).querySelectorAll(s)];
const xe=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const ic=n=>typeof icon==='function'?icon(n):'';
const ISS=typeof ISSUE!=='undefined'?ISSUE:{no:''};
const NAME={act:'Act',plan:'Plan',review:'Review',know:'Just know'},ORD=['act','plan','review','know'];
const GO='<span aria-hidden="true">&rarr;</span>';
/* the suits' colours, a shade darker for small words on white */
const INK={'#e0457b':'#b0285a','#2f7fc4':'#245f96','#1d8a64':'#176e50','#7a4fc4':'#6a3fb4'};
let el=null,cur=null,filt='',opener=null,prevHash='',list=[];
function card(x,rank){
 return `<article class="tch-card tch-a-${x.a}${rank?' tch-top5':''}" data-a="${x.a}" style="--suit:${x.suit[2]};--suitt:${INK[x.suit[2]]||x.suit[2]}">
 <div class="tch-ch">${rank?`<span class="tch-rank" aria-label="Number ${rank}">${rank}</span>`:''}<span class="tch-ki" aria-hidden="true">${ic(x.ic)}</span><span class="tch-kind">${xe(x.kind)}</span>${x.weight?`<span class="tch-w">${xe(x.weight)}</span>`:''}</div>
 <h4>${xe(x.t)}</h4>${x.p?`<p class="tch-p">${xe(x.p)}</p>`:''}
 <div class="tch-act">${x.chip||''}${x.when?`<span class="tch-when">${xe(x.when)}</span>`:''}</div>
 ${x.do?`<p class="tch-do"><b>What to do</b>${xe(x.do)}</p>`:''}${x.who?`<p class="tch-who"><b>Who</b>${xe(x.who)}</p>`:''}
 <div class="tch-cf">${x.also.length?`<span class="tch-also"><span class="tch-alk">Also touches</span>${x.also.map(o=>`<button type="button" class="tch-ab" data-tchgo="${o.c}">${xe(o.lab)}</button>`).join('')}</span>`:''}<button type="button" class="btn tch-show" data-tchshow="${x.j}">Show me ${GO}</button></div></article>`}
/* v88 (Charlie, 20 Oct 2026): the page explains itself. Each count tile says what it means and shows those items; the headline
   five becomes the top five for that action instead of disappearing; everything else is grouped (by action, or by kind once an
   action is chosen) as tidy rows, and can be narrowed by kind, by when, or by a word */
const AIC={act:'bell',plan:'scroll',review:'research',know:'teacup',all:'pcards'};
const RULE=a=>(typeof ACT!=='undefined'&&ACT.rules&&ACT.rules[a])||'';
const TOPH={'':'The headline five',act:'The top five to act on',plan:'The top five to plan for',review:'The top five to review',know:'The top five to know about'};
const LENS={'':n=>`All <b>${n}</b> items in this issue that touch this obligation. Choose a tile to see one kind of action.`,
 act:n=>`<b>${n} to act on.</b> ${xe(RULE('act'))}`,plan:n=>`<b>${n} to plan for.</b> ${xe(RULE('plan'))}`,
 review:n=>`<b>${n} to review.</b> ${xe(RULE('review'))}`,know:n=>`<b>${n} just to know.</b> ${xe(RULE('know'))}`};
const WHEN=[['','Any time'],['now','Now'],['date','With a date'],['later','Later']];
let all=[],kf='',wf='',q='';
const n0=a=>a&&NAME[a]?a:'';
const byScore=(a,b)=>b.score-a.score||a.i-b.i;
function row(x){
 return `<article class="tch-card tch-row tch-a-${x.a}" data-a="${x.a}" style="--suit:${x.suit[2]};--suitt:${INK[x.suit[2]]||x.suit[2]}">
 <span class="tch-ki" aria-hidden="true">${ic(x.ic)}</span><div class="tch-rb"><div class="tch-rm"><span class="tch-kind">${xe(x.kind)}</span>${x.chip||''}${x.when?`<span class="tch-when">${xe(x.when)}</span>`:''}${x.weight?`<span class="tch-w">${xe(x.weight)}</span>`:''}</div>
 <h4>${xe(x.t)}</h4>${x.do?`<p class="tch-rdo"><b>What to do</b> ${xe(x.do)}</p>`:x.p?`<p class="tch-rdo">${xe(x.p)}</p>`:''}
 <div class="tch-rf">${x.who?`<span class="tch-rwho"><b>Who</b> ${xe(x.who)}</span>`:''}${x.also.length?`<span class="tch-also"><span class="tch-alk">Also</span>${x.also.map(o=>`<button type="button" class="tch-ab" data-tchgo="${o.c}">${xe(o.lab)}</button>`).join('')}</span>`:''}<button type="button" class="btn tch-show" data-tchshow="${x.j}">Show me ${GO}</button></div></div></article>`}
function render(c){const A=window.ccAgency,D=A&&A.touchData(c);if(!D)return false;cur=D;
 all=D.items.map((x,i)=>Object.assign({i},x));all.forEach((x,j)=>{x.j=j});list=all;
 const n={act:0,plan:0,review:0,know:0};all.forEach(x=>{n[x.a]=(n[x.a]||0)+1});
 el.style.setProperty('--tch',D.col);
 el.innerHTML=`<div class="tch-in">
 <header class="tch-top"><button type="button" class="tch-back" data-tchx="1"><span aria-hidden="true">&larr;</span> Back to the issue</button><span class="tch-crumb">What does it touch?</span><span class="tch-share"><button type="button" class="tch-sb" data-tchshare="copy" title="Copy a link straight to this page"><span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.2 1.2M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.2-1.2" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></span>Copy the link</button><button type="button" class="tch-sb" data-tchshare="mail" title="A ready-made email with the link to this page"><span aria-hidden="true">${ic('mail')}</span>Send to a colleague</button></span><button type="button" class="tch-x" data-tchx="1" aria-label="Close this page">&times;</button></header>
 <section class="tch-hero"><span class="tch-hi" aria-hidden="true">${ic('dodo')}</span><div class="tch-ht"><div class="k">What does it touch? &middot; Issue ${xe(ISS.no)}</div><h2 id="tchH">${xe(D.lab)}</h2><p>${xe(D.what)}</p></div><div class="tch-hc"><b>${all.length}</b><span>${all.length===1?'item':'items'} in this issue</span><button type="button" class="btn" data-agt="${D.c}">What to check ${GO}</button></div></section>
 <nav class="tch-sw" aria-label="Every obligation">${D.all.map(o=>`<button type="button" class="tch-swb${o.c===D.c?' on':''}" data-tchgo="${o.c}"${o.c===D.c?' aria-current="page"':''}><i style="background:${o.col}" aria-hidden="true"></i>${xe(o.lab)}<b>${o.n}</b></button>`).join('')}</nav>
 <div class="tch-kpis" role="group" aria-label="Show by our suggested action">${ORD.map(a=>`<button type="button" class="tch-kpi tch-k-${a}" data-tchf="${a}" aria-pressed="false"${n[a]?'':' disabled'}><span class="tch-kpii" aria-hidden="true">${ic(AIC[a])}</span><span class="tch-kpit"><b>${n[a]||0}</b><span>${NAME[a]}</span></span></button>`).join('')}<button type="button" class="tch-kpi tch-k-all" data-tchf="" aria-pressed="true"><span class="tch-kpii" aria-hidden="true">${ic(AIC.all)}</span><span class="tch-kpit"><b>${all.length}</b><span>Everything</span></span></button></div>
 <p class="tch-lens" id="tchLens" aria-live="polite"></p>
 <section class="tch-sec" id="tch-five"><div class="tch-sh"><h3 id="tchFiveH"></h3><p id="tchFiveP"></p></div><div class="tch-five" id="tchFive"></div></section>
 <section class="tch-sec" id="tch-rest"><div class="tch-sh"><h3>Everything else <span class="tch-n" id="tchRestN"></span></h3><p id="tchRestP"></p></div>
  <div class="tch-tools" role="group" aria-label="Narrow the list"><div class="tch-chips" id="tchKinds"></div><div class="tch-chips" id="tchWhen">${WHEN.map(([k,l])=>`<button type="button" class="tch-chip" data-tchw="${k}">${l}</button>`).join('')}</div><label class="tch-find"><span aria-hidden="true">${ic('research')}</span><input type="search" id="tchQ" placeholder="Find an item" aria-label="Find an item on this page"></label></div>
  <div id="tchGroups"></div></section>
 <footer class="tch-foot">${D.law?`<p><b>The law and policy behind it</b>${xe(D.law)}</p>`:''}${D.check?`<p><b>What to check</b>${xe(D.check)}</p>`:''}<p class="agnote">Our view of what each item touches, from its public sources. A prompt to check, not legal advice.</p></footer></div>`;
 const qi=$('#tchQ',el);if(qi){qi.value=q;qi.addEventListener('input',()=>{q=qi.value;drawRest()})}
 filter(filt);return true}
function drawFive(){const L=all.filter(x=>!filt||x.a===filt).sort(byScore).slice(0,5);
 $('#tchFiveH',el).textContent=TOPH[filt]||TOPH[''];
 $('#tchFiveP',el).textContent=filt?`The ${L.length===1?'one':L.length} with the most impact among the items marked ${NAME[filt]}: they apply now or are due soonest.`:'The items with the most impact: Act first, then Plan and Review, then the ones that apply now and are due soonest.';
 $('#tchFive',el).innerHTML=L.map((x,k)=>card(x,k+1)).join('');return new Set(L)}
function drawRest(){const top=el._top||new Set(),base=all.filter(x=>(!filt||x.a===filt)&&!top.has(x));
 /* the kind chips count what the action tile leaves */
 const kinds=[];base.forEach(x=>{if(!kinds.find(k=>k[0]===x.kind))kinds.push([x.kind,x.ic])});if(kf&&!kinds.find(k=>k[0]===kf))kf='';
 $('#tchKinds',el).innerHTML=`<button type="button" class="tch-chip${kf?'':' on'}" data-tchk="">Every kind <b>${base.length}</b></button>`+kinds.map(([k,i])=>`<button type="button" class="tch-chip${kf===k?' on':''}" data-tchk="${xe(k)}"><span aria-hidden="true">${ic(i)}</span>${xe(k)} <b>${base.filter(x=>x.kind===k).length}</b></button>`).join('');
 $$('[data-tchw]',el).forEach(b=>b.classList.toggle('on',b.dataset.tchw===wf));
 const ql=q.trim().toLowerCase(),L=base.filter(x=>(!kf||x.kind===kf)&&(!wf||x.wk===wf||(wf==='date'&&x.wk==='past'))&&(!ql||[x.t,x.p,x.do,x.who,x.kind].join(' ').toLowerCase().includes(ql))).sort(byScore);
 $('#tchRestN',el).textContent=L.length;
 $('#tchRestP',el).textContent=filt?`More items marked ${NAME[filt]}, grouped by where they come from in the issue. Show me opens each one right here.`:'Grouped by our suggested action, most urgent first. Show me opens each one right here, with Previous and Next.';
 const groups=filt?kinds.filter(([k])=>!kf||k===kf).map(([k,i])=>({h:k,ic:i,p:'',L:L.filter(x=>x.kind===k)})):ORD.map(a=>({h:NAME[a],ic:AIC[a],a,p:RULE(a),L:L.filter(x=>x.a===a)}));
 const G=groups.filter(g=>g.L.length);
 $('#tchGroups',el).innerHTML=G.length?G.map(g=>`<details class="tch-grp${g.a?' tch-g-'+g.a:''}" open><summary><span class="tch-gi" aria-hidden="true">${ic(g.ic)}</span><b>${xe(g.h)}</b><span class="tch-n">${g.L.length}</span>${g.p?`<span class="tch-gp">${xe(g.p)}</span>`:''}</summary><div class="tch-rows">${g.L.map(row).join('')}</div></details>`).join(''):`<p class="tch-none">Nothing matches. Try another kind, another time, or clear the words.</p>`}
function filter(a){filt=n0(a);$$('.tch-kpi',el).forEach(b=>{const on=b.dataset.tchf===filt;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false')});
 const n=filt?all.filter(x=>x.a===filt).length:all.length;
 $('#tchLens',el).innerHTML=`<span class="tch-li" aria-hidden="true">${ic(AIC[filt||'all'])}</span><span>${(LENS[filt]||LENS[''])(n)}</span>${filt?'<button type="button" class="tch-clear" data-tchf="">Show everything</button>':''}`;
 $('#tchLens',el).className='tch-lens tch-l-'+(filt||'all');
 el._top=drawFive();drawRest();
 /* Previous and Next follow what is on the page: the five, then the rows */
 }
/* v92 (Charlie): each page has its own link (#touch-privacy and so on) to send to a colleague. It always opens the newest issue */
const HOME=(()=>{try{if(/^https?:$/.test(location.protocol))return location.origin+location.pathname.replace(/[^\/]*$/,'')}catch(e){}return typeof SITE_URL!=='undefined'?SITE_URL:''})();
function share(how){if(!cur)return;const A=window.ccAgency,u=HOME+'#touch-'+(A&&A.touchSlug?A.touchSlug(cur.c):String(cur.c).toLowerCase()),toast=h=>window.ccToast&&window.ccToast(h,5200);
 if(how==='copy'){const ok=()=>toast(`<span class="tsti">${ic('mail')}</span><span>Link copied. It opens <b>${xe(cur.lab)}</b> in the newest issue.</span>`);
  const fb=()=>{const x=document.createElement('textarea');x.value=u;x.style.cssText='position:fixed;opacity:0';document.body.appendChild(x);x.select();try{document.execCommand('copy');ok()}catch(e){toast('Copy this link: '+xe(u))}x.remove()};
  if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(u).then(ok,fb);else fb();return}
 const n=(cur.items||[]).length,s=`What does it touch? ${cur.lab}`,b=['Hi,','',`This page from Curiouser and Curiouser shows what this issue's Microsoft AI updates mean for ${cur.lab}: ${n} item${n===1?'':'s'}, each with what to do and its public source.`,'','Open it here:',u,'',window.ccRibbonText||''].join('\n');
 const a=document.createElement('a');a.href='mailto:?subject='+encodeURIComponent(s)+'&body='+encodeURIComponent(b);document.body.appendChild(a);a.click();setTimeout(()=>a.remove(),500)}
function onClick(e){const t=e.target;
 if(t.closest('[data-tchx]')){close(true);return}
 const sh=t.closest('[data-tchshare]');if(sh){share(sh.dataset.tchshare);return}
 const g=t.closest('[data-tchgo]');if(g){open(g.dataset.tchgo);return}
 const f=t.closest('[data-tchf]');if(f){filter(f.dataset.tchf===filt?'':f.dataset.tchf);return}
 const kc=t.closest('[data-tchk]');if(kc){kf=kc.dataset.tchk;drawRest();return}
 const wc=t.closest('[data-tchw]');if(wc){wf=wc.dataset.tchw;drawRest();return}
 const s=t.closest('[data-tchshow]');if(s&&window.ccAgency){const vis=$$('[data-tchshow]',el).filter(b=>!b.closest('[hidden]')).map(b=>all[+b.dataset.tchshow]).filter(Boolean),k=vis.findIndex(x=>x.j===+s.dataset.tchshow);
  window.ccAgency.showAt(vis.map(x=>({k:x.k,key:x.key})),Math.max(0,k),cur?cur.chip:'',s)}}
function shell(){if(el)return el;el=document.createElement('div');el.id='cctouch';el.className='tch-page';el.hidden=true;el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.setAttribute('aria-labelledby','tchH');
 document.body.appendChild(el);el.addEventListener('click',onClick);
 el.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();close(true);return}
  if(e.key==='Tab'){const F=$$('button:not([disabled]),a[href]',el).filter(x=>x.offsetParent!==null&&!x.closest('[hidden]'));if(!F.length)return;const k=F.indexOf(document.activeElement);if(e.shiftKey&&k<=0){e.preventDefault();F[F.length-1].focus()}else if(!e.shiftKey&&k===F.length-1){e.preventDefault();F[0].focus()}}});
 return el}
function open(c){shell();const first=el.hidden;if(first){opener=document.activeElement;prevHash=/^#touch-/.test(location.hash)?'':location.hash;filt=''}kf='';wf='';q='';
 if(!render(c))return;el.hidden=false;el.scrollTop=0;R.classList.add('tchopen');document.body.classList.add('ccmodal');
 if(first){void el.offsetWidth;el.classList.add('on')}
 const s=window.ccAgency.touchSlug(c);if(location.hash!=='#touch-'+s){try{history.replaceState(null,'','#touch-'+s)}catch(x){}}
 setTimeout(()=>{const b=el.querySelector('.tch-back');if(b)b.focus({preventScroll:true})},60)}
function close(back){if(!el||el.hidden)return;el.classList.remove('on');el.hidden=true;R.classList.remove('tchopen');if(!document.querySelector('#cccat.on,.sd-intro'))document.body.classList.remove('ccmodal');
 if(/^#touch-/.test(location.hash)){try{history.replaceState(null,'',prevHash||(location.pathname+location.search))}catch(x){}}
 if(back&&opener&&document.contains(opener)){try{opener.focus({preventScroll:true})}catch(x){}}}
window.ccTouchRender=open;window.ccTouchClose=close;
})();

/* ---------- Down the Rabbit Hole: where does my data actually go? ----------
   One place for every fact on the Rabbit hole tab, so journeys can be added or corrected without touching the design.
   Rules (Charlie's content governance): every product, residency, contractual or availability claim links to an official
   Microsoft page (or a Queensland Government page for Queensland obligations). Third-party sites are inspiration only.
   If something can't be confirmed on an official page, it becomes a question, not a claim.
   Each issue: re-read the sources below, update anything that changed, and set reviewed to the check date.
   To add a scenario: copy one object in scenarios, give it a new id and icon, write all six stages, the room rows and
   the crossings, and cite sources by key. The page builds itself from this file. */
window.HOLE={
reviewed:"15 October 2026",
src:{
 privacy:{s:"Copilot privacy",n:"Data, Privacy, and Security for Microsoft Copilot",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy"},
 arch:{s:"How Copilot works",n:"How does Microsoft Copilot work?",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture"},
 semantic:{s:"Semantic index",n:"Semantic indexing for Microsoft Copilot",u:"https://learn.microsoft.com/en-us/microsoftsearch/semantic-index-for-copilot"},
 purview:{s:"Purview for Copilot",n:"Use Microsoft Purview to manage data security & compliance for Microsoft 365 Copilot & Microsoft 365 Copilot Chat",u:"https://learn.microsoft.com/en-us/purview/ai-m365-copilot"},
 purviewcons:{s:"Purview considerations",n:"Considerations for Microsoft Purview to manage Microsoft 365 Copilot and Channel Agent in Teams for security and compliance",u:"https://learn.microsoft.com/en-us/purview/ai-m365-copilot-considerations"},
 dlp:{s:"DLP for Copilot",n:"Learn about using Microsoft Purview Data Loss Prevention to protect interactions with Microsoft 365 Copilot, Copilot Chat, and Cowork",u:"https://learn.microsoft.com/en-us/purview/dlp-microsoft365-copilot-location-learn-about"},
 rcd:{s:"Restricted Content Discovery",n:"Restrict discovery of SharePoint sites and content",u:"https://learn.microsoft.com/en-us/sharepoint/restricted-content-discovery"},
 secure:{s:"Secure and govern Copilot",n:"Secure and govern Microsoft Copilot",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/secure-govern-copilot-foundational-deployment-guidance"},
 edp:{s:"Enterprise Data Protection",n:"Enterprise data protection in Microsoft Copilot and Microsoft Copilot Chat",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection"},
 web:{s:"Web search privacy",n:"Data, privacy, and security for web search in Microsoft Copilot and Microsoft Copilot Chat",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access"},
 residency:{s:"Copilot data residency",n:"Data Residency for Microsoft 365 Copilot Offerings",u:"https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-service-copilot-offerings?view=o365-worldwide"},
 incountry:{s:"In-country processing",n:"Microsoft offers in-country data processing to 15 countries (updated 3 April 2026)",u:"https://www.microsoft.com/en-us/copilot/blog/2025/11/04/microsoft-offers-in-country-data-processing-to-15-countries-to-strengthen-sovereign-controls-for-microsoft-365-copilot/"},
 retention:{s:"Copilot retention",n:"Learn about retention for Copilot and AI apps",u:"https://learn.microsoft.com/en-us/purview/retention-policies-copilot"},
 audit:{s:"Copilot audit logs",n:"Audit logs for Copilot and AI applications",u:"https://learn.microsoft.com/en-us/purview/audit-copilot"},
 researcher:{s:"Researcher FAQ",n:"Microsoft Copilot Researcher agent frequently asked questions",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/faq-researcher"},
 agents:{s:"Agent types",n:"Compare declarative and custom engine agents",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agents-overview"},
 manageagents:{s:"Managing agents",n:"Manage agents in the Microsoft 365 admin center",u:"https://learn.microsoft.com/en-us/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps?view=o365-worldwide"},
 knowledge:{s:"Agent knowledge sources",n:"Knowledge sources summary (Copilot Studio)",u:"https://learn.microsoft.com/en-us/microsoft-copilot-studio/knowledge-copilot-studio"},
 toolauth:{s:"Agent tool sign-in",n:"Configure user authentication for tools (Copilot Studio)",u:"https://learn.microsoft.com/en-us/microsoft-copilot-studio/configure-enduser-authentication"},
 mcp:{s:"MCP in Copilot Studio",n:"Extend your agent with Model Context Protocol (Copilot Studio)",u:"https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp"},
 agentdlp:{s:"Agent data policies",n:"Configure data policies for agents (Copilot Studio)",u:"https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention"},
 studioloc:{s:"Copilot Studio data locations",n:"Data locations in Copilot Studio",u:"https://learn.microsoft.com/en-us/microsoft-copilot-studio/data-location"},
 anthropic:{s:"Anthropic models",n:"Anthropic models in Microsoft Online Services",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/connect-to-ai-subprocessor"},
 anthapps:{s:"Claude in Word, Excel, PowerPoint",n:"Copilot in Microsoft 365 apps with Anthropic models",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-anthropic-apps"},
 coworkmodels:{s:"Cowork models",n:"Choose a model for Copilot Cowork",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/cowork/cowork-models"},
 openai:{s:"OpenAI subprocessor",n:"OpenAI as a subprocessor in Microsoft Online Services",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/openai-subprocessor"},
 models:{s:"AI models and providers",n:"Understanding AI functionality and models in Microsoft Online Services",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/ai-models-overview"},
 subproc:{s:"AI subprocessors",n:"Overview of AI Subprocessors",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-subprocessor-overview"},
 connectors:{s:"Copilot connectors",n:"Microsoft 365 Copilot connectors overview",u:"https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/overview-copilot-connector"},
 dataaccess:{s:"Subprocessor list",n:"Microsoft Data Access: subprocessors (Microsoft Trust Center)",u:"https://www.microsoft.com/en-us/trust-center/privacy/data-access"},
 anz:{s:"ANZ Copilot planning guide",n:"Microsoft Copilot configuration planning guide (Australia and New Zealand)",u:"https://learn.microsoft.com/en-us/compliance/anz/blueprint-copilot-overview"},
 agent365:{s:"Agent 365",n:"Microsoft Agent 365, now generally available (Microsoft Security blog)",u:"https://www.microsoft.com/en-us/security/blog/2026/05/01/microsoft-agent-365-now-generally-available-expands-capabilities-and-integrations/"},
 agentid:{s:"Entra Agent ID",n:"Microsoft Entra Agent ID documentation",u:"https://learn.microsoft.com/en-us/entra/agent-id/"},
 qldai:{s:"Qld AI governance policy",n:"Artificial intelligence governance policy (Queensland Government)",u:"https://www.forgov.qld.gov.au/information-technology/queensland-government-enterprise-architecture-qgea/qgea-directions-and-guidance/qgea-policies-standards-and-guidelines/artificial-intelligence-governance-policy"},
 qpp:{s:"Queensland Privacy Principles",n:"The Queensland Privacy Principles (Office of the Information Commissioner Queensland)",u:"https://www.oic.qld.gov.au/government/privacy/queensland-privacy-principles"},
 ipact:{s:"Information Privacy Act 2009",n:"Information Privacy Act 2009 (Queensland Legislation)",u:"https://www.legislation.qld.gov.au/view/html/inforce/current/act-2009-014"},
 pra:{s:"Public Records Act",n:"Public Records Act (Queensland Government, For government)",u:"https://www.forgov.qld.gov.au/information-technology/recordkeeping-and-information-management/recordkeeping/public-records-act"},
 ptprivacy:{s:"Product Terms: data at rest",n:"Microsoft Product Terms: Privacy and Security Terms (Location of Customer Data at Rest)",u:"https://www.microsoft.com/licensing/terms/product/PrivacyandSecurityTerms/all"},
 ptonline:{s:"Product Terms: AI training",n:"Microsoft Product Terms: Universal terms for Online Services (Microsoft Generative AI Services)",u:"https://www.microsoft.com/licensing/terms/product/ForOnlineServices/all"},
 dpa:{s:"Data Protection Addendum",n:"Microsoft Products and Services Data Protection Addendum (DPA)",u:"https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA"},
 asd:{s:"ASD Blueprint",n:"ASD's Blueprint for Secure Cloud: Copilot data access settings (Australian Signals Directorate)",u:"https://blueprint.asd.gov.au/configuration/microsoft-365/copilot/settings/data-access/"},
 qgiscf:{s:"QGISCF",n:"Information security classification framework (QGISCF)",u:"https://www.forgov.qld.gov.au/information-technology/queensland-government-enterprise-architecture-qgea/qgea-directions-and-guidance/qgea-policies-standards-and-guidelines/information-security-classification-framework-qgiscf"}
},
/* the six stops on every journey: the storybook name, the real technology, and the question each stop answers */
stages:[
 {id:"alice",w:"Alice",tech:"Your prompt",q:"You ask Copilot something",ic:"alice"},
 {id:"key",w:"The Golden Key",tech:"Identity and sign-in",q:"Who are you?",ic:"key"},
 {id:"library",w:"The Library",tech:"Microsoft Graph, grounding and your permissions",q:"What are you allowed to open?",ic:"library"},
 {id:"hole",w:"The Rabbit Hole",tech:"Orchestration and the AI model",q:"What is needed to answer?",ic:"hole"},
 {id:"glass",w:"The Looking Glass",tech:"Processing boundaries",q:"Does anything cross another boundary?",ic:"mirror"},
 {id:"back",w:"Back to Alice",tech:"The response, stored and governed",q:"Copilot returns the response",ic:"back"}
],
/* boundary markers describe the journey, never a risk rating. m: Microsoft 365, x: external information, p: another processor.
   "on" means always part of this journey; "maybe" means it depends on settings or on how something was built */
chips:{m:"Microsoft 365",x:"External information involved",p:"Microsoft subprocessor",o:"Other provider's terms"},
/* shared technical lines, reused by several journeys */
common:{
 key:{tech:"You sign in with Microsoft Entra ID. Copilot works in the security context of the person who sends the prompt, so access is always scoped to your permissions, and Conditional Access and multifactor authentication still apply.",src:["arch","dlp"]},
 storage:{tech:"Your prompt and Copilot's response are kept as your Copilot activity history, in a hidden folder in your own Exchange mailbox, encrypted at rest. Microsoft's data residency commitments cover Copilot, including for organisations that signed up in Australia. Admins can apply Purview retention (the Microsoft Copilot experiences location), audit and eDiscovery.",src:["privacy","retention","residency","audit"]},
 models:{tech:"Copilot can use models Microsoft hosts and runs itself, such as Azure OpenAI, where data doesn't leave Microsoft. It can also use models run for Microsoft by AI subprocessors, but only if your admin allows them and only in features that offer them: OpenAI, on for eligible commercial customers since 24 July 2026, and Anthropic, on by default for most commercial customers outside the EU, EFTA and UK. Subprocessors work under the Product Terms, the Data Protection Addendum and Enterprise Data Protection, and may use your data only to provide the service. They're currently excluded from in-country processing commitments. Admins can switch either off, and the audit log records which provider handled a request.",src:["models","openai","anthropic","subproc","audit"]}
},
scenarios:[
{id:"email",t:"Summarise an email",q:"Where does my email go?",ic:"mail",chips:{m:"on",p:"maybe"},
 cover:{lvl:"full",t:"Covered by Enterprise Data Protection"},
 ex:"You open a long thread about a community grants round in Outlook and ask Copilot: “Summarise this and list the decisions.”",
 passed:"Your prompt and the email you have open",
 auth:"Microsoft Entra ID, your work account",
 safe:[{t:"Only what you can open",d:"Copilot reads the thread because you can. Mailboxes you can't open stay closed to it.",src:["privacy"]},
  {t:"Not used for training",d:"Your prompt, the email and the summary aren't used to train foundation models.",src:["privacy", "ptonline"]},
  {t:"Kept in Australia, encrypted",d:"The conversation is saved in your own mailbox, at rest in Australia for organisations that signed up there, and encrypted at rest and in transit.",src:["ptprivacy", "edp"]}],
 lead:"You sign in with your work account, and Copilot reads the email you have open using your permissions. An AI model writes the summary, and the conversation is saved in your own mailbox. Whichever company runs that model, Microsoft or one of its subprocessors, Enterprise Data Protection covers the whole journey.",
 content:"The email",
 steps:{
  alice:{s:"You open a long email thread in Outlook and ask Copilot to summarise it.",tech:"Your prompt goes to Copilot from inside Outlook, and the message you have open becomes part of the context for the answer.",src:["arch"]},
  key:{s:"Copilot works as you. You signed in with your work account, so it can only do what you can do."},
  library:{s:"It reads the thread you are looking at. Mailboxes you can't open stay closed to it.",tech:"Copilot reaches content through Microsoft Graph and only surfaces organisational data you have at least view permission to. If the email is encrypted with a sensitivity label, you need both the VIEW and EXTRACT usage rights for Copilot to use it.",src:["privacy","purview"]},
  hole:{s:"Copilot combines your request with the email and asks an AI model to write the summary.",tech:"Copilot grounds your prompt with the email, sends the grounded prompt to a large language model, and returns the result to Outlook. Prompts, responses and data accessed through Microsoft Graph aren't used to train foundation models.",src:["arch","privacy"]},
  glass:{s:"The email itself stays in Microsoft 365. The model that writes the summary is run by Microsoft, or by OpenAI or Anthropic as Microsoft subprocessors if your organisation allows them. Either way, Enterprise Data Protection covers it.",common:"models"},
  back:{s:"The summary appears in Outlook. Your prompt and Copilot's reply are saved in your mailbox, where your organisation's retention and eDiscovery rules apply.",common:"storage"}},
 cross:[],
 room:{
  prompt:["in","Stays in Microsoft 365","Saved with your Copilot activity history in your own mailbox."],
  content:["used","Used, with your permissions","The email you have open, read through Microsoft Graph only because you can open it."],
  web:["cond","Only if needed and allowed","Copilot only searches the web if it decides the web would improve the answer and your organisation allows web search."],
  ext:["cond","Only through web search","No outside information unless a web search is made."],
  model:["sub","Microsoft, or a subprocessor if allowed","A large language model writes the summary: one Microsoft operates, or one run for Microsoft by OpenAI or Anthropic."],
  boundary:["sub","Covered by your contract either way","Microsoft-operated models keep data within Microsoft. Subprocessor models process it for Microsoft under the same contract, outside in-country processing commitments."],
  response:["in","Returned to you","Shown in Outlook and kept in your mailbox."],
  controls:["ctl","Labels, DLP, retention, model settings","Sensitivity labels and encryption, Purview DLP, retention and audit, and the AI providers operating as Microsoft subprocessors setting."]},
 queen:"Should subprocessor models be switched on for staff who handle personal or highly classified information?",
 pv:{lab:"Grounded prompt",back:"Summary",o:{on:"The GPT model writing the summary can be run by OpenAI for Microsoft, instead of only by Microsoft. It stays under your contract and Enterprise Data Protection, but outside in-country processing commitments.",off:"GPT models run only in Microsoft's own Azure OpenAI service, so the summary is written without your data leaving Microsoft.",lane:"Can run the GPT model writing the summary",src:["openai","models"]},a:{on:"Microsoft names Word, Excel and PowerPoint as the apps where Copilot can use Claude, along with Researcher, Cowork, Copilot Studio and the Copilot app, which labels Claude whenever it's in use. Outlook isn't one of them, so this journey shows no Claude step.",off:"Nobody can use Claude, so nothing goes to Anthropic.",lane:"",src:["anthapps","anthropic","subproc"]},v:{n:{lead:"You sign in with your work account, and Copilot reads the email you have open using your permissions. A model Microsoft runs itself writes the summary, and the conversation is saved in your own mailbox. Nothing leaves Microsoft, and Enterprise Data Protection covers the whole journey.",steps:{glass:"The email stays in Microsoft 365, and a model Microsoft runs itself writes the summary. Nothing crosses the glass."},model:["in","Run by Microsoft","A model Microsoft hosts and runs itself writes the summary. Data doesn't leave Microsoft."],boundary:["in","Nothing crossed the glass","The email, your prompt and the summary all stayed with Microsoft."]},o:{lead:"You sign in with your work account, and Copilot reads the email you have open using your permissions. A GPT model writes the summary, run by Microsoft or, with OpenAI switched on, by OpenAI for Microsoft. Either way, Enterprise Data Protection covers the whole journey, and the conversation is saved in your own mailbox.",steps:{glass:"The email stays in Microsoft 365. With OpenAI switched on, the GPT model writing the summary can be run by OpenAI for Microsoft: through the glass, but still under your contract and Enterprise Data Protection."},model:["sub","Microsoft, or OpenAI for Microsoft","A GPT model writes the summary, run by Microsoft or by OpenAI as a Microsoft subprocessor."],boundary:["sub","Covered by your contract either way","GPT models run by OpenAI process data for Microsoft under the same contract, outside in-country processing commitments."]}}}},

{id:"files",t:"Draft something from my files",q:"What can Copilot actually see?",ic:"files",chips:{m:"on",p:"maybe"},
 cover:{lvl:"full",t:"Covered by Enterprise Data Protection"},
 ex:"In Word you ask Copilot: “Draft a briefing note from the flood recovery update and the budget estimates.”",
 passed:"Your prompt and the two files you named",
 auth:"Microsoft Entra ID, your work account",
 safe:[{t:"Your permissions, your labels",d:"Copilot can't open files you can't, needs your VIEW and EXTRACT rights for encrypted ones, and the draft takes the highest-priority sensitivity label of its sources.",src:["privacy", "purview"]},
  {t:"Not used for training",d:"Your files, prompts and drafts aren't used to train foundation models.",src:["privacy", "ptonline"]},
  {t:"Covered by your contract",d:"The Product Terms and the Data Protection Addendum apply, with Microsoft as your data processor.",src:["edp", "dpa"]}],
 lead:"Copilot drafts from the files you point it to, but only files you're allowed to open, and the draft can inherit their sensitivity label. Whichever model writes it, Enterprise Data Protection covers the whole journey.",
 content:"Your files",
 steps:{
  alice:{s:"In Word, you ask Copilot to draft a briefing note using two of your files.",tech:"You can reference specific files in your prompt. Copilot uses them as grounding for the draft.",src:["arch"]},
  key:{s:"Copilot checks it's you, and works only with your access."},
  library:{s:"It opens the files you named, and only if you can open them. Encrypted files stay shut unless you hold the right usage rights.",tech:"Content is found through Microsoft Graph and the semantic index, which honours your identity-based access boundary. For encrypted content you need VIEW and EXTRACT usage rights, and Copilot can't use content protected with Double Key Encryption.",src:["privacy","semantic","purview","purviewcons"]},
  hole:{s:"Copilot combines your instructions with the files and asks the model for a first draft.",tech:"The grounded prompt goes to a large language model and the draft comes back to Word. None of it is used to train foundation models.",src:["arch","privacy"]},
  glass:{s:"Your files stay in Microsoft 365. The model writing the draft is run by Microsoft, or by OpenAI or Anthropic as Microsoft subprocessors if your organisation allows them. Either way, Enterprise Data Protection covers it.",common:"models"},
  back:{s:"The draft lands in Word for you to check. If a source file was labelled, the draft can take the highest-priority label.",tech:"Copilot in Word, PowerPoint and Outlook carries sensitivity labels onto new content; with several labelled sources, the highest-priority label is used. Labels aren't inherited when encryption uses user-defined permissions.",src:["purview","purviewcons"]}},
 cross:[],
 room:{
  prompt:["in","Stays in Microsoft 365","Saved with your Copilot activity history in your mailbox."],
  content:["used","Used, with your permissions","The files you named, and only because you can open them."],
  web:["cond","Only if needed and allowed","If Copilot searches the web, the query can be shaped by an open document, but the document itself is never sent."],
  ext:["cond","Only through web search","No outside information unless a web search is made."],
  model:["sub","Microsoft, or a subprocessor if allowed","A large language model writes the draft: one Microsoft operates, or one run for Microsoft by OpenAI or Anthropic."],
  boundary:["sub","Covered by your contract either way","Microsoft-operated models keep data within Microsoft. Subprocessor models process it for Microsoft under the same contract, outside in-country processing commitments."],
  response:["in","Returned to you","A draft in Word, carrying the label of its most sensitive source."],
  controls:["ctl","Labels, DLP, oversharing tools","Sensitivity labels and encryption, Purview DLP to keep labelled files out of answers, and SharePoint Advanced Management for oversharing."]},
 queen:"Do your sensitivity labels carry through to AI drafts the way your classification rules expect?",
 pv:{lab:"Grounded prompt",back:"Draft",o:{on:"The GPT model writing the draft can be run by OpenAI for Microsoft, under your contract but outside in-country processing commitments.",off:"GPT models run only in Microsoft's own Azure OpenAI service, where data doesn't leave Microsoft.",lane:"Can run the GPT model writing the draft",src:["openai","models"]},a:{on:"Copilot in Word can use Claude when it writes or refines content, and you can pick Claude in Edit with Copilot. Anthropic processes it for Microsoft, outside Australia, under your contract.",off:"Word uses GPT models instead, and nobody can pick Claude.",lane:"Can write or refine the draft in Word",src:["anthapps","anthropic"]},v:{n:{lead:"Copilot drafts from the files you point it to, but only files you're allowed to open, and the draft can inherit their sensitivity label. A model Microsoft runs itself writes it, so nothing leaves Microsoft.",steps:{glass:"Your files stay in Microsoft 365, and a model Microsoft runs itself writes the draft. Nothing crosses the glass."},model:["in","Run by Microsoft","A model Microsoft hosts and runs itself writes the draft. Data doesn't leave Microsoft."],boundary:["in","Nothing crossed the glass","Your files, your prompt and the draft all stayed with Microsoft."]},o:{steps:{glass:"Your files stay in Microsoft 365. With OpenAI switched on, the GPT model writing the draft can be run by OpenAI for Microsoft, still under your contract and Enterprise Data Protection."},model:["sub","Microsoft, or OpenAI for Microsoft","A GPT model writes the draft, run by Microsoft or by OpenAI as a Microsoft subprocessor."]},a:{steps:{glass:"Your files stay in Microsoft 365. With Anthropic switched on, Copilot in Word can use Claude to write or refine the draft. Anthropic processes it for Microsoft, outside Australia, still under your contract and Enterprise Data Protection."},model:["sub","Microsoft, or Claude in Word","A model Microsoft runs, or Claude when Copilot in Word uses it or you pick it."]},ao:{steps:{glass:"Your files stay in Microsoft 365. The draft can be written by a model Microsoft runs, by a GPT model OpenAI runs for Microsoft, or in Word by Anthropic's Claude. All of them work under your contract and Enterprise Data Protection."},model:["sub","Microsoft, OpenAI or Anthropic","A GPT model run by Microsoft or OpenAI, or Claude when Copilot in Word uses it or you pick it."]}}}},

{id:"web",t:"Search the web",q:"What leaves Microsoft 365?",ic:"websearch",chips:{m:"on",x:"on"},
 cover:{lvl:"split",t:"Prompt and answer: Enterprise Data Protection. Search words: Product Terms commitments"},
 ex:"You ask Copilot: “What has the Queensland Government announced about AI this month?”",
 passed:"Your prompt stays with Copilot. Bing only gets a few search words.",
 auth:"Microsoft Entra ID, your work account",
 bing:"Queensland Government AI announcements",
 safe:[{t:"Your full prompt",d:"Bing gets a few search words that Copilot writes from your prompt, never the prompt itself. Only a very short prompt, such as ‘local weather’, might be used as it is.",src:["web"]},
  {t:"Your documents, emails or chats",d:"No files, emails or other organisational data go to Bing. An open document can shape the search words, but it's never sent.",src:["web"]},
  {t:"Who you are",d:"Your name, email address, domain and tenant ID are removed, and the search words travel over a secure connection.",src:["web", "edp"]},
  {t:"No reuse by Bing",d:"Microsoft's Product Terms commit that they aren't used to improve Bing, build advertising profiles or train AI models, and that they're treated as your confidential information.",src:["web"]}],
 lead:"You sign in with your work account, and Copilot works on your question inside Microsoft 365. When the web would help, it writes a few search words of its own, not your prompt, and sends them to Bing with your name and organisation removed. The results come back to Copilot, which writes the answer alongside your question.",
 content:"Work content, if needed",
 steps:{
  alice:{s:"You ask Copilot about something on the public web.",tech:"With web search allowed, Copilot reads your prompt and picks out the terms where information from the web would improve the answer.",src:["web"]},
  key:{s:"Copilot works as you, signed in with your work account, so any work content it adds still respects your access."},
  library:{s:"If your question also needs work content, Copilot looks only where you're allowed to look. That content stays in Microsoft 365.",tech:"Copilot can combine web results with Microsoft 365 content you can view, and show the two side by side.",src:["web","privacy"]},
  hole:{s:"Copilot writes a few search words from your question. That's all it sends.",tech:"The generated search query is different from your prompt: a few words informed by it. It never includes whole files or emails, files you uploaded, or your user name, domain or tenant ID. Only a very short prompt, such as 'local weather', might be sent as it is.",src:["web"]},
  glass:{s:"The search words pass through the glass to Bing, Microsoft's search service, with your identity removed. Web results come back.",tech:"Bing runs separately from Microsoft 365. The search words travel over a secure connection with user and tenant identifiers removed, and the Product Terms commit that they aren't used to improve Bing, for advertising or to train foundation models, and are treated as your confidential information. Because Microsoft acts as data controller for these search words, the Data Protection Addendum, the EU Data Boundary and HIPAA don't apply to them. Your prompt and Copilot's answer stay covered by Enterprise Data Protection.",src:["web","edp","ptprivacy"]},
  back:{s:"Copilot writes the answer from the results, and any work content, and shows you where it came from.",tech:"In Copilot Chat, citations show the exact search queries for 24 hours. Admins can audit, search and eDiscover the queries and see them in Purview DSPM for AI; audit records show BingWebSearch when the web was used.",src:["web","audit"]}},
 cross:[{lane:"other",k:"query",lab:"A few search words",who:"Bing search service",back:"Web results",maybe:false,note:"Identity removed. Product Terms commitments"}],
 room:{
  prompt:["in","Stays in Microsoft 365","Covered by Enterprise Data Protection and saved in your mailbox. Only a few search words, written by Copilot, go to Bing."],
  content:["used","Used only if needed","Never sent to Bing. An open document can shape the search words, but it isn't included."],
  web:["out","Yes, a few search words","Written by Copilot from your prompt, with your name, email address, domain and tenant ID removed."],
  ext:["out","Yes, public web results","Bing returns results, which Copilot uses to write the answer."],
  model:["sub","Microsoft, or a subprocessor if allowed","The same models as any Copilot answer, depending on your settings."],
  boundary:["out","Bing, under Product Terms commitments","Bing runs separately from Microsoft 365. The search words can't be used to improve Bing, for advertising or for training."],
  response:["in","Returned with sources","Citations show where the answer came from."],
  controls:["ctl","Web search policy and toggle","The Allow web search in Copilot policy, each person's Web content toggle, Purview DLP, and audit and eDiscovery of the search words."]},
 queen:"Is web search set the way you want for teams that handle sensitive information?",
 pv:{lab:"Prompt and results",back:"Answer",o:{on:"The GPT model writing the answer can be run by OpenAI for Microsoft. Bing still gets only the search words.",off:"The answer is written by a model Microsoft runs itself. Bing still gets only the search words.",lane:"Can run the GPT model writing the answer",src:["openai","models"]},a:{on:"In the Copilot app, Claude can write the answer when your organisation allows it, and a label shows whenever a Claude model is in use.",off:"Claude isn't offered in the Copilot app.",lane:"Can write the answer, with a label to show it",src:["anthropic"]},v:{n:{steps:{glass:"The search words pass through the glass to Bing, Microsoft's search service, with your identity removed. Web results come back. The answer itself is written by a model Microsoft runs."},model:["in","Run by Microsoft","A model Microsoft runs writes the answer."]},o:{steps:{glass:"The search words pass through the glass to Bing, Microsoft's search service, with your identity removed. Web results come back. The GPT model writing the answer can be run by OpenAI for Microsoft, under your contract."},model:["sub","Microsoft, or OpenAI for Microsoft","A GPT model run by Microsoft, or by OpenAI as a Microsoft subprocessor."],boundary:["out","Bing, and a subprocessor if used","Search words go to Bing under Product Terms commitments. A subprocessor model, if used, works for Microsoft under your contract, outside in-country processing commitments."]},a:{steps:{glass:"The search words pass through the glass to Bing, Microsoft's search service, with your identity removed. Web results come back. In the Copilot app, Claude can write the answer, and a label shows when it does."},model:["sub","Microsoft, or Claude","A model Microsoft runs, or Claude, which the Copilot app labels when it's in use."],boundary:["out","Bing, and a subprocessor if used","Search words go to Bing under Product Terms commitments. A subprocessor model, if used, works for Microsoft under your contract, outside in-country processing commitments."]},ao:{steps:{glass:"The search words pass through the glass to Bing, Microsoft's search service, with your identity removed. Web results come back. The answer can be written by a model Microsoft runs, by OpenAI or by Claude, all for Microsoft under your contract."},model:["sub","Microsoft, OpenAI or Anthropic","Depends on your settings and the model in use. The Copilot app labels Claude when it's in use."],boundary:["out","Bing, and a subprocessor if used","Search words go to Bing under Product Terms commitments. A subprocessor model, if used, works for Microsoft under your contract, outside in-country processing commitments."]}}}},
{id:"research",t:"Research a topic",q:"What happens when external information is needed?",ic:"research",chips:{m:"on",x:"on",p:"maybe"},
 cover:{lvl:"split",t:"Enterprise Data Protection, Claude included. Search words: Product Terms commitments"},
 ex:"You ask Researcher: “How are other Australian governments approaching AI assurance? Cite your sources.”",
 passed:"Your prompt, plus work content and connectors you can access. Bing gets only short search words.",
 auth:"Microsoft Entra ID, your work account",
 safe:[{t:"Your work content stays with Researcher",d:"It searches only what you can access, and sends Bing just short search words with your identity removed.",src:["researcher", "web"]},
  {t:"Subprocessors stay under contract",d:"If you choose Claude, Anthropic processes the research for Microsoft as a subprocessor, under the Product Terms, the Data Protection Addendum and Enterprise Data Protection. Researcher doesn't send file attachments or customer content to OpenAI.",src:["anthropic","researcher","subproc"]},
  {t:"Not used for training",d:"Researcher isn't trained on your organisation's data, and subprocessors may use data only to provide the service.",src:["researcher", "subproc"]}],
 lead:"Researcher runs many searches across your work content, connectors and, if allowed, the web, then writes a cited report. Only short search words go to Bing, with your identity removed. If you choose Claude, Anthropic processes the research for Microsoft as a subprocessor, still under Enterprise Data Protection.",
 content:"Work content and connectors",
 steps:{
  alice:{s:"You ask Researcher for a cited briefing, such as how other governments are regulating AI.",tech:"Researcher is a Microsoft agent for deep, multi-step research, included for licensed Microsoft Copilot users, with a limit of 25 queries per person per month.",src:["researcher"]},
  key:{s:"Researcher works as you, with your access and nobody else's."},
  library:{s:"It searches the emails, files, meetings and chats you can access, plus any connectors your organisation has set up.",tech:"Researcher uses Microsoft Graph, connectors and the Bing index, and follows the same DLP policies as Copilot.",src:["researcher"]},
  hole:{s:"It plans the research, runs many searches, reads what it finds and writes a report with citations.",tech:"Researcher is built for deep, multi-step tasks, and complex reports can take 10 to 45 minutes. You choose the model and mode in its model picker.",src:["researcher"]},
  glass:{s:"Web searches go to Bing as short search words. If you choose Claude, Anthropic processes the research for Microsoft, under your Microsoft contract.",tech:"Microsoft describes Researcher as operating within the Microsoft 365 commercial data processing boundary. If web search is off for your organisation it uses no web data, and there is no setting to allow or block particular websites. Anthropic models are on by default for most commercial customers outside the EU, EFTA and UK, and are excluded from in-country processing commitments.",src:["researcher","anthropic","web"]},
  back:{s:"You get a cited report. Worth knowing: by default, admins and compliance tools can't see what was in a Researcher session.",tech:"Microsoft's Researcher FAQ says admins can see usage metrics but not the conversation content, unless a person submits it as feedback. Test what eDiscovery and retention can find in your own tenant.",src:["researcher"]}},
 cross:[{lane:"other",k:"query",lab:"Many short searches",who:"Bing search service",back:"Web results",maybe:false,note:"If web search is allowed"}],
 room:{
  prompt:["sub","Stays under your contract","If you pick Claude, Anthropic processes it as a Microsoft subprocessor. Otherwise it stays with the models Microsoft runs."],
  content:["used","Used, with your permissions","Emails, files, meetings, chats and connector content you can access."],
  web:["out","Yes, if allowed","Many short queries to Bing, with identifiers removed."],
  ext:["out","Yes, public web results","Used to build the report, with citations."],
  model:["sub","Your choice in the model picker","GPT models run by Microsoft, or Claude run by Anthropic, depending on what your organisation allows. Researcher doesn't send customer content to OpenAI."],
  boundary:["out","Bing, and Anthropic if chosen","Search words go to Bing under Product Terms commitments. Claude runs as a Microsoft subprocessor under your contract, outside in-country processing commitments."],
  response:["in","A cited report","Session content isn't visible to compliance tools by default."],
  controls:["ctl","Web search, AI providers, agent settings","The web search policy, the AI providers setting, blocking Researcher in the admin center, and DLP."]},
 queen:"If research informs a decision, how will you keep a record of it?",
 pv:{lab:"Your research request",back:"Report",o:{on:"No change for Researcher. Its FAQ says Researcher doesn't send file attachments or customer content to OpenAI, and it complies with the Microsoft 365 data boundary.",off:"Researcher's GPT models run only in Microsoft's own service.",lane:"",src:["researcher"]},a:{on:"You can choose Claude in Researcher, and Researcher can use a second model for an extra reasoning pass on a report. Anthropic processes the research for Microsoft, outside Australia, under your contract.",off:"Claude isn't offered in Researcher.",lane:"When you choose Claude in Researcher",src:["anthropic","subproc"]},v:{n:{lead:"Researcher runs many searches across your work content, connectors and, if allowed, the web, then writes a cited report. Only short search words go to Bing, with your identity removed. Its models are run by Microsoft.",cover:{lvl:"split",t:"Report: Enterprise Data Protection. Search words: Product Terms commitments"},steps:{glass:"Web searches go to Bing as short search words. Researcher's models are run by Microsoft, so nothing else crosses the glass."},model:["in","Run by Microsoft","Researcher's models are run by Microsoft."],boundary:["out","Bing only","Search words go to Bing under Product Terms commitments. Nothing goes to a subprocessor."]},a:{model:["sub","Your choice in the model picker","A model Microsoft runs, or Claude if you choose it."]}}}},

{id:"agent",t:"Ask an agent",q:"What can the agent see and do?",ic:"agent",chips:{m:"on",x:"maybe",o:"maybe"},
 cover:{lvl:"split",t:"Agents your organisation builds: your Microsoft contract. Partner agents: their own terms"},
 ex:"You ask your department’s HR policy agent: “How much long service leave can I take at half pay?”",
 passed:"A query based on your prompt, sent to the agent",
 auth:"Microsoft Entra ID, your work account",
 safe:[{t:"It sees only what it was given",d:"An agent reads only its knowledge sources, and SharePoint, Dataverse and connector sources respect your access.",src:["knowledge"]},
  {t:"Your admins decide",d:"Admins choose which agents staff can use, and can check each agent's permissions, data access, terms and privacy statement first.",src:["manageagents", "privacy"]},
  {t:"Built here, covered here",d:"Agents built with Agent Builder or Copilot Studio run under your Microsoft contract, unless a maker connects an outside model or service with its own terms. Partner agents run on their publisher's terms.",src:["agents", "models", "edp"]}],
 lead:"It depends on how the agent was built. An agent can only use the knowledge, tools and credentials it was given, so ask three things: what can it read, what can it do, and as whom?",
 content:"Its knowledge sources",
 steps:{
  alice:{s:"You ask an agent, such as an HR policy helper, a question in Copilot.",tech:"Agents include declarative agents built with Agent Builder or Copilot Studio, custom engine agents, and partner agents from other organisations.",src:["agents","manageagents"]},
  key:{s:"The agent signs in as you, or uses credentials its maker set up. That choice matters.",tech:"Each tool an agent uses signs in either with the user's own credentials or with credentials the author supplies for the agent to use on the user's behalf.",src:["toolauth"]},
  library:{s:"It looks only where its maker pointed it: some SharePoint sites, a public website, a database.",tech:"Knowledge sources can include public websites (through Bing), files, SharePoint, Dataverse and connectors. SharePoint, Dataverse and connectors use your Entra ID, so the agent only surfaces content you can access.",src:["knowledge"]},
  hole:{s:"The agent decides what to look up and which of its tools to use. Some agents take actions, like logging a request.",tech:"Declarative agents use Copilot's infrastructure, model and orchestrator. Custom engine agents bring their own, and their builders must ensure their own compliance, responsible AI and security measures. Tools can include connectors, Power Automate flows, HTTP requests and MCP servers.",src:["agents","mcp"]},
  glass:{s:"If the agent calls other systems or a partner's service, your request goes to them, on their terms.",tech:"Microsoft advises checking an agent's privacy statement and terms of use to see how it handles your organisation's data. Admins can see an agent's permissions, data access, terms and privacy statement in the Microsoft 365 admin center.",src:["privacy","manageagents"]},
  back:{s:"The agent answers, or tells you what it did.",tech:"Agent interactions appear in Purview audit records, including the agent's ID and name.",src:["audit"]}},
 cross:[{lane:"other",k:"query",lab:"Calls to its tools",who:"Systems and services the agent connects to",back:"Results",maybe:true,note:"Depends on the agent's tools and publisher"}],
 room:{
  prompt:["cond","Goes to the agent","Copilot may send the agent a query based on your prompt, your activity and data you can access."],
  content:["used","Only its knowledge sources","With your permissions, or the maker's credentials for some tools."],
  web:["cond","Only if it uses public websites","Public website knowledge is searched through Bing."],
  ext:["cond","Possibly","From the systems and services it connects to."],
  model:["cond","Depends how it was built","Copilot's model for declarative agents; its own for custom engine agents."],
  boundary:["cond","Depends on its tools and publisher","Read the agent's terms and privacy statement before switching it on."],
  response:["in","An answer, or an action","Agent activity is recorded in audit."],
  controls:["ctl","Agent management and data policies","Allow, block or remove agents in the Microsoft 365 admin center, Power Platform data policies, and Agent 365 with Entra Agent ID."]},
 queen:"Has someone checked this agent's knowledge, tools, credentials and terms before it reached staff?",
 pv:{lab:"Prompt for its model",back:"Answer",o:{on:"A maker can build an agent on a GPT model run by OpenAI. In Copilot Studio the maker picks the model, and Power Platform admins have a second switch.",off:"Agents that rely on GPT models run by OpenAI can't be used.",lane:"Only if the maker chose a GPT model run by OpenAI",src:["openai"]},a:{on:"A maker can build an agent on Claude. In Copilot Studio the maker picks the model, and Power Platform admins have a second switch.",off:"Agents built on Claude can't be used.",lane:"Only if the maker chose Claude",src:["anthropic"]},v:{n:{steps:{glass:"If the agent calls other systems or a partner's service, your request goes to them, on their terms. Makers can't build on Claude or on GPT models run by OpenAI while both are off."},model:["cond","Depends how it was built","Copilot's model for declarative agents; its own for custom engine agents. Makers can't choose Claude or GPT models run by OpenAI."]},o:{steps:{glass:"If the agent calls other systems or a partner's service, your request goes to them, on their terms. A maker can build it on a GPT model run by OpenAI, which works for Microsoft under your contract."},model:["cond","Depends how it was built","Copilot's model for declarative agents; its own for custom engine agents. Makers can also choose GPT models run by OpenAI."]},a:{steps:{glass:"If the agent calls other systems or a partner's service, your request goes to them, on their terms. A maker can build it on Claude, which Anthropic runs for Microsoft under your contract."},model:["cond","Depends how it was built","Copilot's model for declarative agents; its own for custom engine agents. Makers can also choose Claude."]},ao:{steps:{glass:"If the agent calls other systems or a partner's service, your request goes to them, on their terms. A maker can build it on Claude or on a GPT model run by OpenAI, both for Microsoft under your contract."},model:["cond","Depends how it was built","Copilot's model for declarative agents; its own for custom engine agents. Makers can also choose Claude or GPT models run by OpenAI."]}}}},

{id:"model",t:"Use another AI model",q:"Does my data go somewhere different?",ic:"models",chips:{m:"on",p:"on"},
 cover:{lvl:"full",t:"Covered by Enterprise Data Protection, as a Microsoft subprocessor"},
 ex:"You ask Copilot Cowork to turn this week’s project emails into a briefing, with Claude picked in its model menu. Or you use a Copilot Studio agent your team built on Claude.",
 passed:"Your prompt and the work content Copilot found for you",
 auth:"Microsoft Entra ID, your work account",
 safe:[{t:"Anthropic can't train on it",d:"Microsoft's Product Terms rule out training foundation models on your data, and subprocessors may use it only to provide the service Microsoft engaged them for.",src:["ptonline", "subproc"]},
  {t:"Encrypted in transit",d:"Enterprise Data Protection includes encryption at rest and in transit, and it applies to Anthropic as a Microsoft subprocessor.",src:["edp", "anthropic"]},
  {t:"Not kept by Anthropic",d:"Anthropic processes the request and returns the answer. Your Copilot history stays in your own mailbox, at rest in Australia. Only models labelled ‘Anthropic models with Data Retention’ differ: they're off unless an admin opts in, and Anthropic's own terms apply.",src:["anthropic", "ptprivacy"]}],
 lead:"You sign in with your work account, and Copilot gathers the work content you're allowed to see, inside Microsoft. When the task runs on Claude, Copilot passes that grounded request to Anthropic, which processes it for Microsoft as a subprocessor, outside Australia, and sends the answer back through Copilot. The request leaves Microsoft's own systems but stays under your organisation's Microsoft contract: Enterprise Data Protection, the Product Terms and the Data Protection Addendum.",
 content:"Content you can open",
 steps:{
  alice:{s:"You ask Cowork to do a task, or you use an agent your team built on Claude.",tech:"Copilot Cowork uses Anthropic models to carry out tasks across Microsoft 365. In Copilot Studio, makers choose each agent's model; in Researcher and Edit with Copilot, people can select Claude, and Copilot shows when Claude is in use.",src:["subproc","anthropic"]},
  key:{s:"Same as always: Copilot works as you, signed in with your work account."},
  library:{s:"Copilot gathers content you're allowed to see, inside Microsoft. Choosing Claude doesn't widen what it can open.",tech:"Copilot only surfaces organisational data you have at least view permission to, whichever model writes the answer.",src:["privacy"]},
  hole:{s:"Copilot grounds your request inside Microsoft, then hands the grounded request to Claude.",tech:"Copilot grounds your prompt with the Microsoft Graph content you can access, then sends the grounded prompt to the selected model.",src:["arch"]},
  glass:{s:"The grounded request crosses to Anthropic, which processes it for Microsoft, outside Australia. It's still covered by your Microsoft contract.",tech:"As a subprocessor, Anthropic works under Microsoft's oversight and contractual safeguards. The Product Terms, the Data Protection Addendum and Enterprise Data Protection apply, and so does the Customer Copyright Commitment. Anthropic models are on by default for most commercial customers outside the EU, EFTA and UK, and are currently excluded from the EU Data Boundary and in-country processing commitments. OpenAI-operated models work the same way and are also excluded from in-country processing. The exception is models labelled 'Anthropic models with Data Retention': off by default, switched on only if an admin opts in, and run under Anthropic's own terms.",src:["anthropic","subproc","openai","models"]},
  back:{s:"Claude's answer comes back through Copilot to you. Your history stays in your own mailbox. For now, Cowork's audit records don't show which provider answered.",tech:"Stored Copilot interactions are kept at rest in Australia for organisations that signed up there. Audit logs for Copilot and Copilot Chat include the model provider and model name when a request is processed, though not always when Auto is selected. Microsoft says Cowork currently doesn't show provider details.",src:["ptprivacy","audit"]}},
 cross:[{lane:"other",need:"a",lab:"Prompt and response",who:"Anthropic models with Data Retention",back:"Answer",maybe:true,note:"Only if an admin opts in. Anthropic's own terms"}],
 room:{
  prompt:["sub","Processed by Anthropic, for Microsoft","Sent with the work content Copilot found, processed by Anthropic as a Microsoft subprocessor, and returned. Your history stays in Microsoft 365."],
  content:["sub","Travels with the request, under contract","Only the content Copilot found for you, through your permissions. It isn't kept by Anthropic."],
  web:["cond","Only if needed and allowed","Web search works the same way whichever model you choose."],
  ext:["cond","Only through web search","No outside information unless a web search is made."],
  model:["sub","Anthropic (Claude)","A third-party model working for Microsoft, under Microsoft's contract with your organisation."],
  boundary:["sub","Outside Microsoft's systems, inside your contract","Processed outside Australia under the Product Terms, the Data Protection Addendum and Enterprise Data Protection. Currently excluded from in-country processing commitments."],
  response:["in","Returned through Copilot","Kept in your own mailbox, at rest in Australia. For now, Cowork's audit records don't show which provider answered."],
  controls:["ctl","AI providers setting","AI providers operating as Microsoft subprocessors, in the Microsoft 365 admin center, for everyone or chosen groups, plus Power Platform controls for Copilot Studio."]},
 queen:"Has your agency done the suitability evaluation ASD recommends, and does your Microsoft 365 risk acceptance cover subprocessors?",
 pv:{lab:"Grounded request",back:"Answer",a:{on:"Cowork can use Claude when you pick it or when Auto chooses it, and a badge shows which model produced each response. Anthropic processes it for Microsoft, outside Australia, under your contract.",off:"Cowork keeps working with the other models your organisation allows, and Auto chooses from those. Agents built on Claude can't be used.",lane:"When you or Auto pick a Claude model",src:["coworkmodels","anthropic"]},o:{on:"Some of Cowork's GPT models are provided by OpenAI as a subprocessor, under your contract but outside in-country processing commitments.",off:"Cowork's GPT models provided by OpenAI aren't offered.",lane:"When a GPT model provided by OpenAI is picked",src:["coworkmodels","openai"]},v:{n:{lead:"With Anthropic switched off, Claude isn't available: Cowork works with the other models your organisation allows, and agents built on Claude can't be used. With OpenAI off too, those are models Microsoft hosts itself, where data doesn't leave Microsoft.",cover:{lvl:"full",t:"Covered by Enterprise Data Protection"},safe:[{t:"Claude isn't available",d:"With Anthropic switched off, nobody can use Claude models, in Cowork or in agents.",src:["anthropic","coworkmodels"]},{t:"Cowork keeps working",d:"Switching Anthropic off doesn't change who can use Cowork. It works with the other models your organisation allows.",src:["coworkmodels"]},{t:"Data stays with Microsoft",d:"Models Microsoft hosts itself are covered by the same contract, and data doesn't leave Microsoft.",src:["models","coworkmodels"]}],steps:{hole:"Copilot grounds your request inside Microsoft, then hands it to a model Microsoft hosts itself.",glass:"Both providers are off, so the request stays with models Microsoft hosts itself. Nothing crosses the glass.",back:"The answer comes back through Copilot to you. Your history stays in your own mailbox."},model:["in","Models Microsoft hosts","With both providers off, only models Microsoft hosts itself can be used."],boundary:["in","Nothing crossed the glass","The request stayed with Microsoft."]},o:{lead:"With Anthropic switched off, Claude isn't available: Cowork works with the other models your organisation allows, and Auto chooses from those. Some of its GPT models are provided by OpenAI as a subprocessor, so a request can cross the glass to OpenAI, still under your Microsoft contract. Agents built on Claude can't be used.",safe:[{t:"Claude isn't available",d:"With Anthropic switched off, nobody can use Claude models, in Cowork or in agents.",src:["anthropic","coworkmodels"]},{t:"Cowork keeps working",d:"Switching Anthropic off doesn't change who can use Cowork. It works with the other models your organisation allows.",src:["coworkmodels"]},{t:"OpenAI works under contract",d:"GPT models provided by OpenAI work for Microsoft under the Product Terms, the Data Protection Addendum and Enterprise Data Protection.",src:["openai"]}],steps:{hole:"Copilot grounds your request inside Microsoft, then hands it to the model Cowork picked from the ones your organisation allows.",glass:"Anthropic is off, so nothing goes to Claude. When Cowork uses a GPT model provided by OpenAI, the request crosses to OpenAI, which processes it for Microsoft under your contract.",back:"The answer comes back through Copilot to you. Your history stays in your own mailbox. For now, Cowork's audit records don't show which provider answered."},model:["sub","The other models you allow","With Anthropic off, Cowork uses other models, including GPT models provided by OpenAI."],boundary:["sub","Outside Microsoft's systems, inside your contract","OpenAI processes it under the Product Terms, the Data Protection Addendum and Enterprise Data Protection, outside in-country processing commitments."]},a:{model:["sub","Claude, or another model you allow","Claude when you or Auto pick it. A badge in Cowork shows which model answered."]},ao:{steps:{glass:"When Claude is used, the grounded request crosses to Anthropic, which processes it for Microsoft, outside Australia. GPT models provided by OpenAI cross the same way. Both stay covered by your Microsoft contract."},model:["sub","Claude, or another model you allow","Claude when you or Auto pick it. A badge in Cowork shows which model answered."]}}}}
],
prov:{k:"Your admin's switches",h:"Which doors in the glass are open?",sub:"Set in the Microsoft 365 admin centre: Copilot, Settings, AI providers operating as Microsoft subprocessors. Flip a switch to see what changes in this journey.",a:{t:"Anthropic",m:"Claude models"},o:{t:"OpenAI",m:"GPT models run by OpenAI"},dflt:"Out of the box in Australia, both start switched on: Anthropic for most commercial organisations outside the EU, EFTA and UK, and OpenAI for eligible commercial customers since 24 July 2026. Your admin may have changed either.",dsrc:["anthropic","openai"],none:"With both switched off, nobody can use Claude or GPT models run by OpenAI. Copilot uses models Microsoft hosts and runs itself, such as Azure OpenAI, where data doesn't leave Microsoft, unless your admin has switched on another AI provider.",nsrc:["models","anthropic","openai"],note:"Switched on, a provider is used only where a feature offers it, and admins can limit it to chosen people. Switched off, nobody can use its models, and some newer models and features need it on.",notesrc:["subproc","anthropic","openai"]},
thread:{k:"The golden thread",h:"Your contract goes wherever your data goes",
 sub:"For Queensland Government agencies, as for every organisation, these commitments apply whenever staff use Copilot or Copilot Chat signed in with their work account.",
 items:[
  {t:"Enterprise Data Protection",d:"Copilot and Copilot Chat are covered by the Product Terms and the Data Protection Addendum, with Microsoft as your data processor.",ic:"shield",src:["edp","dpa"]},
  {t:"Never used for training",d:"Microsoft's Product Terms rule out training foundation models on your data. AI subprocessors may use it only to provide the service.",ic:"learn",src:["ptonline","subproc"]},
  {t:"Stored in Australia",d:"Stored Copilot and Copilot Chat interactions stay at rest in Australia for organisations that signed up there, whichever model answers.",ic:"cal",src:["ptprivacy","residency"]},
  {t:"Subprocessors included",d:"When your admin allows them, Anthropic and OpenAI work for Microsoft under the same Product Terms, Data Protection Addendum and Enterprise Data Protection.",ic:"models",src:["anthropic","openai","subproc"]}],
 note:"Two things sit beside the contract rather than inside it: the few search words sent to Bing, which have their own commitments in the Product Terms, and partner agents or opt-in ‘Data Retention’ models, which run on their providers’ terms."},
room:[
 {k:"prompt",l:"Your prompt",q:"What happened to it?",ic:"chat"},
 {k:"content",l:"Your Microsoft 365 content",q:"Was it used, and where?",ic:"files"},
 {k:"web",l:"Web query",q:"Was one generated?",ic:"websearch"},
 {k:"ext",l:"External information",q:"Was any retrieved?",ic:"globe"},
 {k:"model",l:"AI model or provider",q:"Who did the processing?",ic:"models"},
 {k:"boundary",l:"Processing boundary",q:"Did it cross one?",ic:"mirror"},
 {k:"response",l:"Response",q:"How did the answer return?",ic:"mail"},
 {k:"controls",l:"Controls",q:"What can your admins set?",ic:"shield"}
],
/* The Golden Key: open doors, locked doors, and the one left ajar */
doors:[
 {st:"open",t:"Your own mail, calendar and OneDrive",d:"Yours, so Copilot can use them when they help answer you.",ic:"mail"},
 {st:"open",t:"Files and sites shared with you",d:"If you can open it, Copilot can use it to answer you, and only you.",ic:"files"},
 {st:"open",t:"Chats and meetings you're part of",d:"Teams chats, channels and meetings you already have access to.",ic:"chat"},
 {st:"locked",t:"A colleague's private files",d:"Not shared with you, so the key doesn't turn.",ic:"lock"},
 {st:"locked",t:"Encrypted files without the right rights",d:"A sensitivity label can keep Copilot out unless you hold the VIEW and EXTRACT usage rights.",ic:"shield"},
 {st:"ajar",t:"Anything shared with everyone",d:"Overshared sites open for everyone, Copilot included. Copilot follows permissions; it doesn't fix them.",ic:"sp"}
],
keyTech:[
 {t:"Copilot only surfaces organisational data that each person has at least view permission to, using the same access controls as other Microsoft 365 services. That includes access you give people outside your organisation, such as Teams shared channels.",src:["privacy"]},
 {t:"The semantic index honours each person's identity-based access boundary, and indexing doesn't change anyone's permissions.",src:["privacy","semantic"]},
 {t:"For encrypted content, Copilot needs the person to hold both VIEW and EXTRACT usage rights, and it can't use content protected with Double Key Encryption.",src:["purview","purviewcons"]},
 {t:"To reduce oversharing before and after rollout, Microsoft documents SharePoint Advanced Management, Restricted Content Discovery for SharePoint sites, oversharing assessments in Purview DSPM for AI, and Purview DLP for Copilot, which can keep labelled files out of Copilot's answers.",src:["secure","rcd","purview","dlp"]}
],
/* Through the Looking Glass: this side, Microsoft's subprocessors, and other terms */
glass:{
 here:[
  {t:"Your Microsoft 365 content",d:"Mail, files, chats and meetings, reached through Microsoft Graph with your permissions.",x:"Copilot accesses content and context through Microsoft Graph and only surfaces data you have at least view permission to.",ic:"files",src:["privacy"],r:"rcs"},
  {t:"Copilot's orchestration",d:"Grounding, the semantic index and Copilot's safety checks run in Microsoft 365.",x:"Copilot grounds each prompt through Microsoft Graph and the semantic index before the model sees it, and uses protections such as harmful content filters and prompt injection classifiers.",ic:"auto",src:["arch","privacy"],r:"cs"},
  {t:"Models Microsoft operates",d:"Such as Azure OpenAI, under Microsoft's contract. Data doesn't leave Microsoft.",x:"Models hosted and operated by Microsoft are offered under Microsoft's Data Protection Addendum, Product Terms and enterprise safeguards. Calls go to the closest datacentres in the region but can use other regions at busy times, and customers outside the EU may have queries processed in the US, EU or other regions.",ic:"model",src:["models","privacy"],r:"cs"},
  {t:"Your Copilot history",d:"Stored in your own mailbox, covered by Microsoft 365 data residency, including in Australia.",x:"Prompts and responses are stored in a hidden folder in each person's Exchange mailbox, encrypted at rest. Copilot has been covered by the data residency commitments in the Product Terms since 1 March 2024.",ic:"cal",src:["privacy","retention","residency"],r:"rs"}],
 sub:[
  {pv:"a",t:"Anthropic (Claude)",d:"On by default for most commercial customers outside the EU, EFTA and UK. Covered by your Microsoft contract.",x:"Anthropic is a Microsoft subprocessor: the Product Terms, the Data Protection Addendum and Enterprise Data Protection apply, it can't use your data to train models, and it doesn't keep your data. Processing happens outside Australia, because Anthropic models are currently excluded from the EU Data Boundary and in-country processing commitments. Admins can switch it off, or limit it to chosen users and groups.",ic:"models",src:["anthropic","subproc","ptonline"],r:"cs"},
  {pv:"o",t:"OpenAI-operated models",d:"On for eligible commercial customers since 24 July 2026. Covered by your Microsoft contract.",x:"OpenAI was added to Microsoft's subprocessor list on 23 June 2026. Its models serve the same GPT-based Copilot experiences, are covered by the Product Terms and Data Protection Addendum, and are currently excluded from in-country processing commitments.",ic:"model",src:["openai"],r:"cs"}],
 other:[
  {t:"Bing web search",d:"A few search words with your identity removed, under their own Product Terms commitments.",x:"Copilot sends Bing only a few search words, over a secure connection, with user and tenant identifiers removed. Microsoft acts as data controller for them, so the Data Protection Addendum doesn't apply, but the Product Terms commit that they aren't used to improve Bing, for advertising or to train foundation models, and are treated as your confidential information. Your prompt and Copilot's answer stay under Enterprise Data Protection.",ic:"websearch",src:["web"],r:"sr"},
  {t:"Independent AI processors",d:"Only if an admin turns them on, under the provider's own terms.",x:"An AI independent processor handles data under its own terms, outside Microsoft's Data Protection Addendum and Product Terms. Anthropic models with Data Retention are one example, and are off by default.",ic:"models",src:["models","anthropic"],r:"sc"},
  {t:"Partner agents and agent tools",d:"Other organisations' agents, and the systems agents call.",x:"Check each agent's privacy statement and terms of use. For MCP servers an agent connects to, the maker is responsible for the tools and resources it accesses.",ic:"agent",src:["privacy","mcp"],r:"cs"}],
 inbound:{t:"Coming in through the glass: Copilot connectors",d:"Connectors bring outside content in for Copilot to use, with permissions.",x:"Synced connectors index external content into Microsoft Graph; federated connectors fetch content in real time using MCP. Copilot only returns connector content a person has permission to see, but a deployed connector is tenant-wide unless its item security is restricted.",ic:"plug",src:["connectors","privacy"],r:"rc"}
},
/* Tweedledum and Tweedledee: eight ideas that are easy to mix up */
twins:[
 {t:"Storage",k:"Data at rest",q:"Where is it kept?",not:"Processing",ic:"cal",d:"Your Copilot prompts and responses are stored in your own mailbox, at rest in Australia for organisations that signed up there, whichever model answered. Where it's stored says nothing about where it's processed.",src:["ptprivacy","residency"]},
 {t:"Processing",k:"Inference",q:"Where is it worked on?",not:"Storage",ic:"model",d:"Inference is the step where a model runs the prompt to produce an answer. It can happen outside Australia: Microsoft's models use the closest datacentres but can use other regions at busy times, and subprocessor models run elsewhere, all under your contract. Microsoft expects in-country processing for Copilot interactions in Australia by the end of 2026.",src:["privacy","incountry","anthropic"]},
 {t:"Grounding",k:"Context for one answer",q:"What is used to answer?",not:"Training",ic:"library",d:"The content Copilot pulls in to answer this prompt: your emails, files, chats, connectors or web results. It shapes one answer; it doesn't teach the model.",src:["privacy"]},
 {t:"Training",k:"Teaching the model",q:"Does the model learn from us?",not:"Grounding",ic:"learn",d:"Microsoft says prompts, responses and data accessed through Microsoft Graph aren't used to train foundation models, and neither are generated web queries. Subprocessors may only use data to provide the service.",src:["privacy","web","subproc"]},
 {t:"Permissions",k:"Who can open what",q:"What can Copilot reach?",not:"Retention",ic:"key",d:"Copilot follows each person's existing access. It doesn't grant new access, and it doesn't fix oversharing.",src:["privacy"]},
 {t:"Retention",k:"How long it's kept",q:"When is it deleted?",not:"Permissions",ic:"watch",d:"Purview retention policies can keep or delete Copilot interactions, using the Microsoft Copilot experiences location, and eDiscovery can find them. People can also delete their own Copilot activity history.",src:["retention","privacy"]},
 {t:"Web grounding",k:"Answers from the web",q:"What does the web see?",not:"Connectors",ic:"websearch",d:"A few search words, written by Copilot, sent to Bing with user and tenant identifiers removed. Never your files or your whole prompt.",src:["web"]},
 {t:"Agents",k:"Knowledge, tools, credentials",q:"What can it reach and do?",not:"Copilot itself",ic:"agent",d:"An agent adds its own knowledge sources, tools, credentials and sometimes its own model. Each one is a separate question to answer before it reaches staff.",src:["agents","knowledge","toolauth"]}
],
/* The Queen's Questions: questions to ask, never verdicts. r: role lens letters */
queen:[
 {c:"Information classification",q:"What information is involved?",ask:["What is the highest classification of information people will use with Copilot?","Do your sensitivity labels line up with your QGISCF business impact levels?","Which features and providers you plan to use are within the scope of Microsoft's IRAP assessment?","The QGISCF says high business impact information is stored or processed only in Australia unless the accountable officer accepts the offshoring risk. Does your existing sign-off for Microsoft 365 cover Copilot, including subprocessor models?"],look:["qgiscf","anz"],r:"sr"},
 {c:"Privacy",q:"Does it involve personal or sensitive information?",ask:["Which teams handle personal information, and which Copilot features should they use?","Have you done a privacy impact assessment for this use?","Section 33 of Queensland's Information Privacy Act 2009 deals with disclosing personal information outside Australia. How does it apply to the providers you enable?"],look:["qpp","ipact"],r:"s"},
 {c:"Data location",q:"Where is the data stored?",ic:"cal",ask:["Does your tenant's data residency match what you expect?","Where do the systems your agents connect to keep their data?"],look:["residency","studioloc"],r:"cs"},
 {c:"Processing",q:"Where can AI processing happen, and by whom?",ask:["Which model providers are switched on, and for whom?","ASD's Blueprint for Secure Cloud advises enabling Anthropic models only after a formal suitability evaluation. Has yours been done?","Microsoft expects in-country processing for Australia by the end of 2026, and subprocessor models are excluded from it. How does that fit your assessment?"],look:["incountry","anthropic","asd"],r:"sc"},
 {c:"Records",q:"What must be kept, found and managed?",ask:["Does a retention policy cover Copilot interactions in line with your obligations?","Researcher session content isn't visible to compliance tools by default. What does that mean for your records?","Who is accountable for an AI-assisted draft once it's sent?"],look:["pra","retention","researcher"],r:"r"},
 {c:"Permissions",q:"Could existing access expose more than you intended?",ask:["Which sites are shared with everyone or very large groups?","Have you run an oversharing assessment before widening access?"],look:["secure","rcd"],r:"rs"},
 {c:"Agents",q:"What can each agent reach, do and decide, and as whom?",ask:["What knowledge sources, tools and credentials does it use?","Does it act with the user's credentials or the maker's?","Who owns it, and how is it switched off?"],look:["manageagents","agentdlp","agentid"],r:"cs"},
 {c:"Governance",q:"Which controls and policies apply, and who decides?",ask:["Who signs off model providers, web search and agents?","Is there a FAIRA or FAIRA LITE for this use?","How will you keep up as Microsoft changes the service?"],look:["qldai","models"],r:"c"}
]
};

/* ---------- Down the Rabbit Hole: where does my data actually go? ----------
   Everything on this tab is built from window.HOLE (hole_data.js). The journey keeps one source of truth, the current stop,
   so the picture, the words and the Play button always move together. */
(function(){
const H=window.HOLE,root=document.getElementById('hxh');if(!H||!root)return;
const $=(s,r)=>(r||document).querySelector(s),$$=(s,r)=>[...(r||document).querySelectorAll(s)];
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ic=n=>typeof icon==='function'?icon(n):'';
const MO=()=>window.ccMotionOff?window.ccMotionOff():(matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.classList.contains('calm'));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const ARW='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const host=u=>{try{return new URL(u).hostname.replace(/^www\./,'')}catch(e){return ''}};
const srcKind=u=>/licensing\/docs/.test(u)?'DPA':/licensing\/terms/.test(u)?'Product Terms':/learn\.microsoft\.com/.test(u)?'Microsoft Learn':/asd\.gov\.au/.test(u)?'ASD':/qld\.gov\.au/.test(u)?'Qld Government':'Microsoft';
const srcInline=keys=>keys&&keys.length?`<span class="hx-si">${keys.map(k=>H.src[k]).filter(Boolean).map(s=>`<a href="${s.u}" target="_blank" rel="noopener" title="${esc(s.n)}">${esc(s.s||srcKind(s.u))}</a>`).join('')}</span>`:'';
const SHIELD='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5l7.5 3v6c0 5-3.3 8.4-7.5 10-4.2-1.6-7.5-5-7.5-10v-6z" fill="#fff3c4" stroke="#b8892f" stroke-width="1.6"/><path d="M8.2 12.2l2.6 2.6 5-5.4" fill="none" stroke="#2f7f6e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const covOf=s=>{const c=coverOf(s);return c?`<span class="hx-cov ${c.lvl||''}">${SHIELD}<span>${esc(c.t)}</span></span>`:''};
const srcLinks=(keys,lab)=>keys&&keys.length?`<div class="hx-srcs"><span class="hx-sl">${lab||'Show me the source'}</span>${keys.map(k=>H.src[k]).filter(Boolean).map(s=>`<a href="${s.u}" target="_blank" rel="noopener">${esc(s.n)}<span class="hx-host">${esc(host(s.u))}</span>${ARW}</a>`).join('')}</div>`:'';
let view='simple';try{view=localStorage.getItem('cc-hole-view')||'simple'}catch(e){}
let sc=0,cur=0,playing=false,V=0,started=false;

/* ---------- v35: the admin's AI provider switches. They start at Microsoft's out-of-the-box setting for Australia (both on),
   and every journey reads them: the lanes, the short answer, the Looking Glass stop, the shield line and the Cheshire Cat's rows ---------- */
let PV={a:true,o:true},touched=false;try{const j=JSON.parse(localStorage.getItem('cc-hole-prov')||'null');if(j&&typeof j.a==='boolean'&&typeof j.o==='boolean')PV={a:j.a,o:j.o}}catch(e){}
const rel=(s,k)=>!!(s.pv&&s.pv[k]&&s.pv[k].lane);
const keyOf=s=>{const a=PV.a&&rel(s,'a'),o=PV.o&&rel(s,'o');return a&&o?'ao':a?'a':o?'o':'n'};
const vv=(s,f)=>{const v=s.pv&&s.pv.v&&s.pv.v[keyOf(s)];return v&&v[f]!=null?v[f]:null};
const PVN={a:'Anthropic (Claude)',o:'OpenAI (GPT models)'};
function crossOf(s){const base=(s.cross||[]).filter(c=>!c.need||PV[c.need]);if(!s.pv)return base;
 return ['o','a'].filter(k=>PV[k]&&rel(s,k)).map(k=>({lane:'sub',lab:s.pv.lab||'Grounded prompt',who:PVN[k],back:s.pv.back||'Answer',maybe:!s.pv[k].sure,note:s.pv[k].lane,prov:k})).concat(base)}
const leadOf=s=>vv(s,'lead')||s.lead;
const coverOf=s=>vv(s,'cover')||s.cover;
const safeOf=s=>vv(s,'safe')||s.safe;
const roomOf=(s,k)=>((k==='model'||k==='boundary')&&vv(s,k))||s.room[k];
const stepOf=(s,id)=>{const o=vv(s,'steps');return (o&&o[id])||((s.steps[id]||{}).s)||''};
function provPanel(){const P=H.prov;if(!P)return '';
 const sw=k=>`<button type="button" class="hx-sw${PV[k]?' on':''}" role="switch" aria-checked="${PV[k]}" data-p="${k}"><span class="hx-swt" aria-hidden="true"><i></i></span><span class="hx-swl"><b>${esc(P[k].t)}</b><small>${esc(P[k].m)}</small></span><span class="hx-swd">${PV[k]?'On':'Off'}</span></button>`;
 return `<div class="hx-prov" id="hxprov" role="group" aria-labelledby="hxprovh">
 <div class="hx-pvh"><span class="hx-pvi">${ic('door')}</span><div><div class="k">${esc(P.k)}</div><b id="hxprovh">${esc(P.h)}</b><small>${esc(P.sub)}</small></div></div>
 <div class="hx-pvc"><div class="hx-sws">${sw('a')}${sw('o')}</div><div class="hx-pvp"><button type="button" class="hx-pre" data-pre="def">Microsoft's default: both on</button><button type="button" class="hx-pre" data-pre="off">Microsoft-run models only</button></div></div>
 <div class="hx-pvx" id="hxpvx" aria-live="polite"></div>
 <p class="hx-pvd">${esc(P.dflt)}${srcInline(P.dsrc)}</p></div>`}

/* ---------- the six stops on the map (viewBox 1000 x 560) ---------- */
const STA=[[85,150],[245,106],[415,168],[585,236],[760,300],[210,442]];
const REQ=[[85,150],[165,114],[245,106],[330,126],[415,168],[500,204],[585,236],[672,268],[760,300]];
const RESP=[[760,300],[712,386],[610,440],[480,460],[345,456],[210,442]];
const XL={sub:[[760,300],[784,232],[806,178]],other:[[760,300],[784,362],[806,414]]};
const r1=n=>Math.round(n*10)/10;
function curve(p){let d=`M${p[0][0]},${p[0][1]}`;for(let i=0;i<p.length-1;i++){const a=p[i-1]||p[i],b=p[i],c=p[i+1],e=p[i+2]||c;d+=` C${r1(b[0]+(c[0]-a[0])/6)},${r1(b[1]+(c[1]-a[1])/6)} ${r1(c[0]-(e[0]-b[0])/6)},${r1(c[1]-(e[1]-b[1])/6)} ${c[0]},${c[1]}`}return d}
const TOK={
 prompt:`<svg viewBox="0 0 64 46"><rect x="2" y="4" width="60" height="38" rx="5" fill="#fbf7ff" stroke="#9b7fd6" stroke-width="2.4"/><path d="M3 41l21-16M61 41L40 25" stroke="#c6b3ee" stroke-width="1.8"/><path d="M3 6l29 21L61 6" fill="none" stroke="#9b7fd6" stroke-width="2.4" stroke-linejoin="round"/><circle cx="32" cy="27" r="6" fill="#e0567c"/><path d="M32 24.6c-1.3-1.8-4-.4-2.3 1.5l2.3 2.3 2.3-2.3c1.7-1.9-1-3.3-2.3-1.5z" fill="#fff"/></svg>`,
 content:`<svg viewBox="0 0 56 50"><rect x="4" y="8" width="30" height="38" rx="3" fill="#e6fbf3" stroke="#2f9c8a" stroke-width="2"/><rect x="20" y="3" width="31" height="40" rx="3" fill="#fff" stroke="#2f9c8a" stroke-width="2"/><path d="M25 13h20M25 19h16M25 25h18M25 31h12" stroke="#9fe0c8" stroke-width="2.4" stroke-linecap="round"/></svg>`,
 grounded:`<svg viewBox="0 0 64 54"><rect x="20" y="2" width="28" height="30" rx="3" fill="#fff" stroke="#2f9c8a" stroke-width="2"/><path d="M25 10h18M25 16h14" stroke="#9fe0c8" stroke-width="2.4" stroke-linecap="round"/><rect x="2" y="12" width="60" height="38" rx="5" fill="#fbf7ff" stroke="#9b7fd6" stroke-width="2.4"/><path d="M3 14l29 21 29-21" fill="none" stroke="#9b7fd6" stroke-width="2.4" stroke-linejoin="round"/><circle cx="32" cy="35" r="6" fill="#e0567c"/></svg>`,
 query:`<svg viewBox="0 0 44 32"><path d="M3 6l19-3 19 3v20l-19 3-19-3z" fill="#fffdf6" stroke="#5f9fd6" stroke-width="2" stroke-linejoin="round"/><path d="M22 3v26" stroke="#bcd6ef" stroke-width="1.6"/><path d="M7 12h10M7 17h8M27 12h10M27 17h7" stroke="#8fb8e0" stroke-width="1.8" stroke-linecap="round"/></svg>`,
 results:`<svg viewBox="0 0 34 42"><rect x="2" y="2" width="30" height="38" rx="3" fill="#f2f9ff" stroke="#5f9fd6" stroke-width="2"/><circle cx="10" cy="11" r="3.4" fill="none" stroke="#5f9fd6" stroke-width="1.8"/><path d="M12.6 13.6l3 3M19 10h8M8 22h18M8 28h18M8 34h12" stroke="#8fb8e0" stroke-width="1.8" stroke-linecap="round"/></svg>`,
 response:`<svg viewBox="0 0 64 46"><rect x="2" y="4" width="60" height="38" rx="5" fill="#fff6d6" stroke="#b8892f" stroke-width="2.4"/><path d="M3 41l21-16M61 41L40 25" stroke="#e2bd62" stroke-width="1.8"/><path d="M3 6l29 21L61 6" fill="none" stroke="#b8892f" stroke-width="2.4" stroke-linejoin="round"/><circle cx="32" cy="27" r="6" fill="#f1cf72" stroke="#b8892f" stroke-width="1.4"/><path d="M32 22.6l1.3 2.8 3 .4-2.2 2 .6 3-2.7-1.5-2.7 1.5.6-3-2.2-2 3-.4z" fill="#b8892f"/></svg>`};

/* ---------- markup ---------- */
const chipsOf=s=>{const ch=Object.assign({},s.chips);if(s.pv){if(!crossOf(s).some(c=>c.lane==='sub'))delete ch.p;else ch.p=(PV.a&&rel(s,'a')&&s.chips.p==='on')?'on':'maybe'}
 return Object.keys(H.chips).filter(k=>ch[k]).map(k=>`<i class="hx-chip c-${k}${ch[k]==='maybe'?' maybe':''}">${esc(H.chips[k])}${ch[k]==='maybe'?'<em>depends</em>':''}</i>`).join('')};
const HA=window.HOLEART||{};
const sceneArt=`<div class="hx-vig" role="img" aria-label="Alice peers into the rabbit hole at the foot of a gum tree as the White Rabbit hurries past and disappears down it">
 <img class="hx-bg" data-src="${HA.vig||''}"${HA.vign?` data-nsrc="${HA.vign}"`:''} alt="">
 <div class="hx-tw1" aria-hidden="true"><i style="left:44%;top:22%"></i><i style="left:61%;top:12%;--d:1.3s"></i><i style="left:84%;top:30%;--d:2.4s"></i></div>
 <div class="hx-pit" aria-hidden="true"><img class="hx-peek" data-src="${HA.peek||''}" alt=""></div>
 <div class="hx-run" aria-hidden="true"><div class="hx-rsc"><img class="a" data-src="${HA.leap||''}" alt=""><img class="b" data-src="${HA.land||''}" alt=""></div></div>
 <i class="hx-puff" aria-hidden="true"></i></div>`;

const S0=H.scenarios[0];
const QB=[{id:'hxthread',t:'Your contract',ic:'shield'},{id:'hxpick',t:'Choose a scenario',ic:'hole'},{id:'hxj',t:'Follow the request',ic:'swirl'},{id:'hxroom',t:'What left the room',ic:'cat'},{id:'hxkey',t:'What Copilot can see',ic:'door'},{id:'hxlg',t:'Crossing the glass',ic:'mirror'},{id:'hxtw',t:'Ideas that sound alike',ic:'twins'},{id:'hxqq',t:"The Queen's Questions",ic:'crownq'},{id:'hxsrc',t:'Sources',ic:'scroll'}];
/* v42 small screens: a one-line summary for each chapter, counted from this issue's data */
const lc1=t=>t.charAt(0).toLowerCase()+t.slice(1);const NW=n=>['no','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve'][n]||String(n),NWC=n=>{const w=NW(n);return w.charAt(0).toUpperCase()+w.slice(1)};
const CHL={hxthread:`${NWC(H.thread.items.length)} commitments that apply whenever staff sign in with a work account.`,
 hxpick:`${NWC(H.scenarios.length)} everyday requests, from ${lc1(H.scenarios[0].t)} to ${lc1(H.scenarios[H.scenarios.length-1].t)}.`,
 hxj:`Follow one request through ${NW(H.stages.length)} stops, one stop at a time.`,
 hxroom:"The Cheshire Cat's summary of what crossed a boundary, and what didn't.",
 hxkey:`${NWC(H.doors.length)} doors that show why Copilot only opens what you already can.`,
 hxlg:'When information crosses a boundary, and whose terms apply.',
 hxtw:`${NWC(H.twins.length)} ideas that sound alike but aren't the same thing.`,
 hxqq:`${NWC(H.queen.length)} questions for government and regulated organisations.`,
 hxsrc:`All ${Object.keys(H.src).length} official pages behind this tab, grouped.`};
/* v43d: one introduction instead of two (Charlie, 12 Oct 2026). The tab's header is folded into the hero; its words still come from the page */
const PH=document.querySelector('#p-hole>.phead'),phx=q=>PH?((PH.querySelector(q)||{}).textContent||'').trim():'';
root.innerHTML=`
<div class="hx-hero glass reveal">
 <div class="hx-hl">
  <div class="hx-ph"><span class="hx-phi" aria-hidden="true"></span><div><div class="k">${esc(phx('.k')||'Down the Rabbit Hole')}</div><h2 class="hx-pht">${esc(phx('h2')||'Where does my data actually go?')}</h2></div></div>
  <div class="hx-motto"><span>Follow the data.</span><span>Understand the boundary.</span><span>Ask better questions.</span></div>
  <p class="hx-lede">${esc(phx('p')||"AI can feel mysterious. It doesn't need to.")} Every claim on this page links to Microsoft's own documentation: the storybook names are the simple layer, and the real technology is always one click underneath.</p>
  <div class="hx-ctas"><button class="btn p hx-go" type="button">Choose a scenario <span aria-hidden="true">&darr;</span></button>
   <div class="hx-view" role="group" aria-label="View"><span class="hx-vl">View</span><button type="button" class="chip" data-v="simple" aria-pressed="false">Simple view</button><button type="button" class="chip" data-v="gov" aria-pressed="false">Government &amp; regulated organisations</button></div></div>
  <div class="hx-meta"><span class="hx-rev">${ic('watch')}Last reviewed <b>${esc(H.reviewed)}</b></span><span class="hx-name">Microsoft 365 Copilot is now called Microsoft Copilot. Microsoft says nothing changes for security, compliance or privacy.</span></div>
 </div>
 <div class="hx-scene">${sceneArt}<p>Alice follows the White Rabbit. You follow your data.</p></div>
</div>

${qbBar()}
<section class="hx-thread glass reveal" id="hxthread">
 <svg class="hx-gold" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 22 C120 2 220 38 340 20 S560 2 680 20 S880 36 1000 16" fill="none" stroke="#e3b950" stroke-width="3" stroke-linecap="round" stroke-dasharray="6 9"/></svg>
 <div class="hx-h"><span class="hx-hi">${ic('shield')}</span><div><div class="k">${esc(H.thread.k)}</div><h3>${esc(H.thread.h)}</h3><p class="sub">${esc(H.thread.sub)}</p></div></div>
 <div class="hx-thg">${H.thread.items.map((t,i)=>`<div class="hx-tht" style="--d:${(i*.08).toFixed(2)}s"><span class="hx-thi">${ic(t.ic)}</span><div><b>${esc(t.t)}</b><p>${esc(t.d)}</p>${srcInline(t.src)}</div></div>`).join('')}</div>
 <p class="hx-thn">${SHIELD}<span>${esc(H.thread.note)}</span></p>
</section>

<section class="hx-sec" id="hxpick">
 <div class="hx-h"><span class="hx-hi">${ic('hole')}</span><div><div class="k">Choose a scenario</div><h3>What would you like Copilot to do?</h3><p class="sub">Each one follows its own path down the rabbit hole. Pick one and the journey below plays it.</p></div></div>

 <div class="hx-cards" role="group" aria-label="Scenarios">${(window.CHESHIRE||{}).cat?`<div class="hx-lie" aria-hidden="true"><div class="hx-liebub">Which way would you like to go?</div><img data-src="${window.CHESHIRE.cat_s||window.CHESHIRE.cat}" alt="" decoding="async"></div>`:''}${H.scenarios.map((s,i)=>`<button type="button" class="hx-card glass reveal" aria-pressed="false" data-s="${i}" style="--d:${(i*.07).toFixed(2)}s"><span class="hx-ci">${ic(s.ic)}</span><b>${esc(s.t)}</b><span class="hx-cq">${esc(s.q)}</span><span class="hx-chips">${chipsOf(s)}</span>${covOf(s)}<span class="hx-cgo" aria-hidden="true">Follow it &rarr;</span></button>`).join('')}</div>
 <p class="hx-legend"><i class="hx-chip c-m">Solid</i> part of this journey <i class="hx-chip c-p maybe">Dashed<em>depends</em></i> depends on your settings or how it was built. These markers describe the path a request takes. They are not a risk rating: risk depends on your organisation, the information involved and your policies. The shield line says which contract terms cover each journey.</p>
</section>

<div class="hx-journey glass reveal" id="hxj">
 <div class="hx-jtop">
  <div class="hx-h sm"><span class="hx-hi">${ic('swirl')}</span><div><div class="k">Follow the request</div><h3 id="hxjt">${esc(S0.t)}</h3><p class="sub" id="hxjq">${esc(S0.q)}</p></div></div>
  <div class="hx-short"><b>The short answer</b><p id="hxlead">${esc(leadOf(S0))}</p></div>
  <div class="hx-facts" id="hxfacts"></div>
 </div>
 ${provPanel()}
 <div class="hx-jbody">
  <div class="hx-map" id="hxmap" role="group" aria-label="The journey, six stops">
   <svg class="hx-msvg" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true"><defs>
    <linearGradient id="hxwarm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fffaf3"/><stop offset=".6" stop-color="#fff1e6"/><stop offset="1" stop-color="#fbeaf3"/></linearGradient>
    <pattern id="hxchessA" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#f6f0ff"/><rect width="20" height="20" fill="#ece2ff"/><rect x="20" y="20" width="20" height="20" fill="#ece2ff"/></pattern>
    <pattern id="hxchessB" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#f1f8ff"/><rect width="20" height="20" fill="#e2f0fd"/><rect x="20" y="20" width="20" height="20" fill="#e2f0fd"/></pattern>
    <linearGradient id="hxgold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff1b8"/><stop offset=".5" stop-color="#d9a842"/><stop offset="1" stop-color="#b3812c"/></linearGradient>
    <linearGradient id="hxglassf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".45" stop-color="#e7f1ff"/><stop offset="1" stop-color="#efe6ff"/></linearGradient></defs>
    <rect x="0" y="0" width="760" height="560" fill="url(#hxwarm)"/>
    <rect x="760" y="0" width="240" height="280" fill="url(#hxchessA)"/><rect x="760" y="280" width="240" height="280" fill="url(#hxchessB)"/>
    <path d="M760 280H1000" stroke="#fff" stroke-width="4"/>
    <path class="hx-pth" id="hxreq" d="${curve(REQ)}"/><path class="hx-pth gold" id="hxresp" d="${curve(RESP)}"/>
    <path class="hx-pth x" id="hxxsub" d="${curve(XL.sub)}"/><path class="hx-pth x" id="hxxother" d="${curve(XL.other)}"/>
    <g class="hx-mirror"><rect x="741" y="46" width="38" height="468" rx="19" fill="url(#hxglassf)" stroke="url(#hxgold)" stroke-width="7"/><rect class="hx-sheen" x="748" y="60" width="9" height="440" rx="4.5" fill="#fff" opacity=".8"/><path d="M746 46l14-22 14 22z" fill="url(#hxgold)"/><circle cx="760" cy="20" r="6" fill="#e0567c" stroke="#b3812c" stroke-width="2"/><rect x="732" y="510" width="56" height="12" rx="6" fill="url(#hxgold)"/></g>
   </svg>
   <div class="hx-zl">This side of the glass<small>Microsoft 365 and the services Microsoft operates</small></div>
   <div class="hx-stas">${H.stages.map((s,i)=>`<button type="button" class="hx-sta s-${s.id}" data-i="${i}" style="left:${STA[i][0]/10}%;top:${STA[i][1]/5.6}%" aria-label="Stop ${i+1}: ${esc(s.w)}, ${esc(s.tech)}"><span class="hx-med">${ic(s.ic)}<i class="hx-n">${i+1}</i></span><b>${esc(s.w)}</b><small>${esc(s.tech)}</small><span class="hx-badge"></span></button>`).join('')}</div>
   <div class="hx-lanes"><div class="hx-lane2 sub"><div class="hx-ll">Microsoft subprocessors<small>Processing for Microsoft, under your Microsoft contract</small></div><div class="hx-lcs" data-lane="sub"></div></div><div class="hx-lane2 other"><div class="hx-ll">Separate commitments<small>Bing's own Product Terms commitments, or a provider's own terms</small></div><div class="hx-lcs" data-lane="other"></div></div></div>
   <div class="hx-toks" id="hxtoks" aria-hidden="true"></div>
  </div>
  <div class="hx-detail" id="hxdet"></div>
 </div>
</div>

<div class="hx-room glass reveal" id="hxroom">
 <svg class="hx-cat" viewBox="0 0 220 120" aria-hidden="true"><g class="hx-eyes"><ellipse cx="72" cy="38" rx="17" ry="13" fill="#c9f2a8" stroke="#5b4a86" stroke-width="2.4"/><ellipse class="hx-pu" cx="72" cy="38" rx="3.4" ry="11" fill="#2b2340"/><ellipse cx="148" cy="38" rx="17" ry="13" fill="#c9f2a8" stroke="#5b4a86" stroke-width="2.4"/><ellipse class="hx-pu" cx="148" cy="38" rx="3.4" ry="11" fill="#2b2340"/></g><path class="hx-grin" d="M34 70c26 34 126 34 152 0c-22 12-130 12-152 0z" fill="#fff" stroke="#5b4a86" stroke-width="2.6" stroke-linejoin="round"/><path class="hx-grin" d="M52 76v9M70 80v10M88 82v10M106 83v10M124 82v10M142 80v10M160 77v9" stroke="#c9b6f2" stroke-width="2"/></svg>
 <div class="hx-h"><span class="hx-hi">${ic('cat')}</span><div><div class="k">The Cheshire Cat's summary</div><h3>So... what actually left the room?</h3><p class="sub" id="hxroomsub"></p></div></div>
 <div class="hx-safe" id="hxsafe"></div>
 <div class="hx-rows" id="hxrows"></div>
 <div class="hx-gq gov-only" id="hxgq"></div>
</div>

<div class="hx-duo">
 <div class="hx-key glass reveal" id="hxkey">
  <div class="hx-h"><span class="hx-hi">${ic('door')}</span><div><div class="k">The Golden Key</div><h3>What can Copilot actually see?</h3><p class="sub">The key doesn't open every door. Copilot works within each person's existing access; it doesn't get the run of the house just because it exists.</p></div></div>
  <div class="hx-doors">${H.doors.map((d,i)=>`<button type="button" class="hx-dr s-${d.st}" data-d="${i}" aria-describedby="hxdcap"><span class="hx-arch"><span class="hx-in">${ic(d.ic)}</span><span class="hx-leaf"><i class="hx-kh"></i><i class="hx-lk">${d.st==='locked'?ic('lock'):''}</i></span></span><b>${esc(d.t)}</b><span class="hx-dst">${d.st==='open'?'Open to you':d.st==='locked'?'Locked':'Left ajar'}</span></button>`).join('')}</div>
  <div class="hx-dcap" id="hxdcap" aria-live="polite">Hover over, tap or tab to a door to see why it opens, or doesn't.</div>
  <details class="hx-more"><summary>Show me the technical explanation</summary><ul class="hx-tl">${H.keyTech.map(k=>`<li><p>${esc(k.t)}</p>${srcLinks(k.src)}</li>`).join('')}</ul></details>
 </div>
 <div class="hx-lg glass reveal" id="hxlg">
  <div class="hx-h"><span class="hx-hi">${ic('mirror')}</span><div><div class="k">Through the Looking Glass</div><h3>When does information cross a boundary?</h3><p class="sub">"Copilot" isn't one single journey. Know what's happening so your organisation can assess it properly. Tap anything for the detail and the source.</p></div></div>
  <div class="hx-lgrid">
   <div class="hx-side here"><div class="hx-sh">This side of the glass<small>Microsoft 365 and the services Microsoft operates</small></div>${H.glass.here.map((g,i)=>item('here',g,i)).join('')}</div>
   <div class="hx-frame" aria-hidden="true"><i></i></div>
   <div class="hx-side through"><div class="hx-sh">Through the glass<small>When a feature, model or agent needs it</small></div>
    <div class="hx-lane sub"><div class="hx-lh">Microsoft subprocessors<small>Processing for Microsoft, under your Microsoft contract and Enterprise Data Protection</small></div>${H.glass.sub.map((g,i)=>item('sub',g,i)).join('')}</div>
    <div class="hx-lane other"><div class="hx-lh">Separate commitments<small>Bing's own Product Terms commitments, or a provider's own terms</small></div>${H.glass.other.map((g,i)=>item('other',g,i)).join('')}</div></div>
  </div>
  <button type="button" class="hx-inb" data-g="inbound:0" data-roles="${H.glass.inbound.r}" data-key="hole:inbound"><span class="hx-arrow" aria-hidden="true">&larr;</span><span class="hx-ii">${ic(H.glass.inbound.ic)}</span><span><b>${esc(H.glass.inbound.t)}</b><small>${esc(H.glass.inbound.d)}</small></span></button>
  <p class="hx-fine">Crossing the glass isn't good or bad. It's a fact your organisation can weigh against its own obligations.</p>
 </div>
</div>

<div class="hx-tw glass reveal" id="hxtw">
 <div class="hx-h"><span class="hx-hi">${ic('twins')}</span><div><div class="k">Tweedledum and Tweedledee</div><h3>Eight ideas that sound alike but aren't</h3><p class="sub">Public sector conversations go wrong when these get merged. Click or tap a card to turn it over.</p></div></div>
 <div class="hx-twg">${H.twins.map((t,i)=>`<div class="flip hx-tf" tabindex="0" role="button" aria-pressed="false" data-t="${i}"><div class="in"><div class="fc"><span class="hx-ti">${ic(t.ic)}</span><div class="why">${esc(t.k)}</div><h4>${esc(t.t)}</h4><p class="hx-tq">${esc(t.q)}</p><div class="meta"><span>Not the same as <b>${esc(t.not)}</b></span><span class="hx-turn">${ic('flipi')}</span></div></div><div class="bc"><div class="why">${esc(t.t)}</div><p>${esc(t.d)}</p>${srcLinks(t.src,'Source')}</div></div></div>`).join('')}</div>
</div>

<div class="hx-qq glass reveal gov-only" id="hxqq">
 <div class="hx-h"><span class="hx-hi">${ic('crownq')}</span><div><div class="k">The Queen's Questions</div><h3>What should your organisation consider?</h3><p class="sub">Questions to ask, not verdicts. Every agency's obligations are its own, and nothing here is legal, privacy or security advice. The facts above don't change in this view; only the questions are added.</p></div></div>
 <div class="hx-qg">${H.queen.map((q,i)=>`<div class="hx-qc" data-roles="${q.r}" data-key="hole:q${i}"><div class="k">${esc(q.c)}</div><h4>${esc(q.q)}</h4><ul>${q.ask.map(a=>`<li>${esc(a)}</li>`).join('')}</ul>${srcLinks(q.look,'Where to look')}</div>`).join('')}</div>
</div>
<div class="hx-qt glass reveal simple-only" id="hxqt"><span class="hx-hi">${ic('crownq')}</span><div><b>The Queen has eight questions for government and regulated organisations.</b><span>Classification, privacy, data location, processing, records, permissions, agents and governance.</span></div><button type="button" class="btn p" data-v2="gov">Show the Queen's Questions</button></div>

<div class="hx-src glass reveal" id="hxsrc">
 <div class="hx-h"><span class="hx-hi">${ic('scroll')}</span><div><div class="k">Show me the source</div><h3>Where all of this comes from</h3><p class="sub">Last reviewed ${esc(H.reviewed)}. Things change in Wonderland. Always check the latest official documentation for current service behaviour and commitments.</p></div></div>
 <div class="hx-start"><div class="dlabel">Good places to start</div><div class="srccards">${['privacy','web','models','incountry','qldai'].map(k=>H.src[k]).map(s=>typeof srcCard==='function'?srcCard(s):'').join('')}</div></div>
 <details class="hx-more hx-allsrc"><summary>All ${Object.keys(H.src).length} sources on this page, grouped</summary><div class="hx-sgrid">${srcGroups()}</div></details>
 <p class="note">The idea of mapping a Copilot data journey was inspired by the <a href="https://www.aguidetocloud.com/copilot-data-flow/" target="_blank" rel="noopener">Copilot Data Flow Map</a> by Susanth Sutheesh (A Guide to Cloud &amp; AI). Every fact on this page was checked against official Microsoft and Queensland Government pages, and none of that page's wording is used.</p>
 <div class="hx-next"><span>Keep exploring</span><button type="button" class="btn" data-go="party">${ic('teacup')}How the stack fits together</button><button type="button" class="btn" data-go="glass">${ic('key')}How AI is paid for</button><button type="button" class="btn" data-go="race">${ic('thimble')}What governments are doing</button><button type="button" class="btn" data-go="court">${ic('crown')}Actions for your teams</button></div>
</div>`;

{const ico=PH&&PH.querySelector('.ico'),slot=$('.hx-phi',root);if(ico&&slot){slot.appendChild(ico);document.getElementById('p-hole').classList.add('hx-merged')}}
/* v37: quick browse. The tab is long, so signposts at the top jump straight to each section, and each section ends with Back to the top */
function qbBar(){return `<nav class="hx-qb glass reveal" id="hxqb" aria-label="Quick browse: jump to a section of this page">
 <div class="hx-qbh"><span class="hx-qbi">${ic('cat')}</span><div><div class="k">Quick browse</div><b>Which way would you like to go?</b><small>&ldquo;That depends a good deal on where you want to get to,&rdquo; said the Cat.</small></div></div>
 <p class="hx-qbcm">${QB.length} short chapters. Pick one to read it; each ends with the next.</p>
 <div class="hx-qbl">${QB.map((q,i)=>`<button type="button" class="hx-qbb" data-qb="${q.id}"><i class="hx-qbn" aria-hidden="true">${i+1}</i><span class="hx-qbbi">${ic(q.ic)}</span><span class="hx-qbt"><span>${esc(q.t)}</span><small class="hx-qbd">${esc(CHL[q.id]||'')}</small></span></button>`).join('')}</div></nav>`}
function item(z,g,i){return `<button type="button" class="hx-it" data-g="${z}:${i}" data-roles="${g.r||''}" data-key="hole:${z}${i}"${g.pv?` data-pv="${g.pv}"`:''}><span class="hx-ii">${ic(g.ic)}</span><span><b>${esc(g.t)}</b><small>${esc(g.d)}</small></span><span class="hx-plus" aria-hidden="true">+</span></button>`}
function srcGroups(){const g={"Microsoft documentation":[],"Microsoft announcements":[],"Queensland Government":[]};
 Object.values(H.src).forEach(s=>{const h=host(s.u);(/qld\.gov\.au/.test(h)?g["Queensland Government"]:/learn\.microsoft\.com/.test(h)?g["Microsoft documentation"]:g["Microsoft announcements"]).push(s)});
 return Object.entries(g).filter(([k,v])=>v.length).map(([k,v])=>`<div class="hx-sgp"><div class="dlabel">${k}</div><ul>${v.map(s=>`<li><a href="${s.u}" target="_blank" rel="noopener">${esc(s.n)}${ARW}</a><span>${esc(host(s.u))}</span></li>`).join('')}</ul></div>`).join('')}

QB.forEach(q=>{const s=$('#'+q.id,root);if(s)s.insertAdjacentHTML('beforeend',`<div class="hx-topw"><button type="button" class="hx-top" data-qb="hxqb">Back to the top <span aria-hidden="true">&uarr;</span></button></div>`)});
/* v42 small screens: the Rabbit hole reads one chapter at a time. A numbered chapter list at the top, one chapter showing,
   and each chapter ends with All chapters and the next one. Computers keep the long page. */
const QBX=QB.map(q=>q.id);let chap=QBX[0],chapOn=false;
const chEls=id=>(id==='hxqq'?['hxqq','hxqt']:[id]).map(x=>$('#'+x,root)).filter(Boolean);
const chapOf=el=>{if(!el)return null;for(const id of QBX){if(chEls(id).some(c=>c===el||c.contains(el)))return id}return null};
QB.forEach((q,i)=>{const nx=QB[i+1];const nav=`<div class="hx-chn"><button type="button" class="hx-chall" data-qb="hxqb"><span aria-hidden="true">&uarr;</span> All chapters</button>${nx?`<button type="button" class="hx-chnx" data-qb="${nx.id}"><span><small>Next chapter</small><b>${i+2}. ${esc(nx.t)}</b></span><span aria-hidden="true">&rarr;</span></button>`:''}</div>`;
 chEls(q.id).forEach((el,k)=>{el.insertAdjacentHTML('beforeend',nav);if(k===0)el.insertAdjacentHTML('afterbegin',`<div class="hx-chk">Chapter ${i+1} of ${QB.length}</div>`)})});
[['.hx-twg',H.twins.length,'ideas'],['.hx-qg',H.queen.length,'questions']].forEach(([sel,n,w])=>{const g=$(sel,root);if(g&&n>3)g.insertAdjacentHTML('afterend',`<button type="button" class="hx-moreall" data-all="${sel}">Show all ${n} ${w} <span aria-hidden="true">&darr;</span></button>`)});
root.addEventListener('click',e=>{const b=e.target.closest('.hx-moreall');if(!b)return;const g=$(b.dataset.all,root);if(g)g.classList.add('all');b.remove()});
function chapSet(id){if(!QBX.includes(id))return;chap=id;QBX.forEach(x=>chEls(x).forEach(el=>el.classList.toggle('hx-cur',x===id)));
 $$('.hx-qbb',root).forEach(b=>{const on=chapOn&&b.dataset.qb===id;b.classList.toggle('on',on);if(on)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current')});
 chEls(id).forEach(el=>{el.classList.add('in');$$('.reveal',el).forEach(r=>r.classList.add('in'))})}
function chapMode(){chapOn=!!(window.ccSm&&window.ccSm());root.classList.toggle('hx-chap',chapOn);chapSet(chap)}
window.ccHoleChap={get:()=>chapOn?chap:null,set:id=>{if(chapOn)chapSet(id)}};
window.ccReveal=el=>{if(!chapOn||!el||!root.contains(el))return;const c=chapOf(el);if(c&&c!==chap)chapSet(c)};
addEventListener('cc-sm',chapMode);chapMode();
function qbGo(id){if(chapOn&&id!=='hxqb'){const c=QBX.includes(id)?id:chapOf($('#'+id));window.ccBackPush&&window.ccBackPush();if(c)chapSet(c);qbTo(id);return}window.ccBackPush&&window.ccBackPush();qbTo(id)}
function qbTo(id){if(id==='hxqq'&&view!=='gov')id='hxqt';const el=$('#'+id);if(!el)return;touched=true;el.classList.add('in');
 const want=()=>{const nav=document.querySelector('.nav'),nh=nav?nav.getBoundingClientRect().height:64;return (window.ccDocTop?window.ccDocTop(el):scrollY+el.getBoundingClientRect().top)-nh-14};if(window.ccScrollTo)window.ccScrollTo(want);else window.scrollTo({top:Math.max(0,want()),behavior:'instant'});
 if(id!=='hxqb'&&!MO()){el.classList.remove('hx-land');void el.offsetWidth;el.classList.add('hx-land')}
 el.setAttribute('tabindex','-1');setTimeout(()=>{try{el.focus({preventScroll:true})}catch(e){}},MO()?0:600)}
root.addEventListener('click',e=>{const b=e.target.closest('[data-qb]');if(b){e.preventDefault();qbGo(b.dataset.qb)}});

/* ---------- view: simple, or government and regulated ---------- */
function setView(v,save){view=v==='gov'?'gov':'simple';root.classList.toggle('hx-gov',view==='gov');
 $$('.hx-view .chip',root).forEach(c=>{const on=c.dataset.v===view;c.classList.toggle('on',on);c.setAttribute('aria-pressed',on)});
 if(save){try{localStorage.setItem('cc-hole-view',view)}catch(e){}}}
root.addEventListener('click',e=>{const c=e.target.closest('.hx-view .chip,[data-v2]');if(!c)return;setView(c.dataset.v||c.dataset.v2,true);
 if(c.dataset.v2){const q=$('#hxqq');if(q){q.classList.add('in');setTimeout(()=>q.scrollIntoView({behavior:MO()?'auto':'smooth',block:'start'}),60)}}});
setView(view,false);

/* ---------- scenario cards ---------- */
$('.hx-go',root).addEventListener('click',()=>{if(chapOn){qbGo('hxpick');return}window.ccBackPush&&window.ccBackPush();const t=$('#hxpick');if(t)t.scrollIntoView({behavior:MO()?'auto':'smooth',block:'start'})});
$('.hx-cards',root).addEventListener('click',e=>{const b=e.target.closest('.hx-card');if(!b)return;pick(+b.dataset.s,true)});
function pick(i,user){if(user&&window.ccBackPush)window.ccBackPush();sc=i;const s=H.scenarios[i];
 $$('.hx-card',root).forEach(c=>{const on=+c.dataset.s===i;c.classList.toggle('on',on);c.setAttribute('aria-pressed',on)});
 $('#hxjt').textContent=s.t;$('#hxjq').textContent=s.q;$('#hxlead').textContent=leadOf(s);
 renderLanes(s);renderRoom();renderProv();stop();go(0,false);
 if(user&&chapOn){chapSet('hxj');qbTo('hxj');return}
 if(user){const j=$('#hxj');if(j){j.classList.add('in');j.scrollIntoView({behavior:MO()?'auto':'smooth',block:'start'})}setTimeout(()=>{if(sc===i)play()},MO()?0:700)}}

/* ---------- the Cheshire Cat's summary ---------- */
const PILL={in:'Stayed inside',used:'Used inside',none:'Not needed',cond:'Only if',out:'Crossed the glass',sub:'Subprocessor',ctl:'Admin controls'};
function renderFacts(s){const f=$('#hxfacts');if(!f)return;
 f.innerHTML=`<div class="hx-fact"><b>For example</b><span>${esc(s.ex||'')}</span></div>`+(s.bing?`<div class="hx-fact bing"><b>Bing might see only</b><span class="hx-q">${esc(s.bing)}</span></div>`:'')+`<div class="hx-fact"><b>What's passed</b><span>${esc(s.passed||'')}</span></div><div class="hx-fact"><b>Signed in with</b><span>${esc(s.auth||'')}</span></div>`}
function renderRoom(){const s=H.scenarios[sc];$('#hxroomsub').textContent='For: '+s.t;renderFacts(s);
 const sf=$('#hxsafe'),sl=safeOf(s);if(sf)sf.innerHTML=sl?`<div class="hx-sfh">${SHIELD}<b>${s.id==='web'?'What Bing never sees':'What stays protected'}</b>${covOf(s)}</div><ul>${sl.map(x=>`<li><b>${esc(x.t)}</b><span>${esc(x.d)}</span>${srcInline(x.src)}</li>`).join('')}</ul>`:'';
 $('#hxrows').innerHTML=H.room.map((r,i)=>{const v=roomOf(s,r.k)||['none','',''];return `<div class="hx-row t-${v[0]}" style="--d:${(i*.06).toFixed(2)}s"><span class="hx-ri">${ic(r.ic)}</span><div class="hx-rb"><div class="hx-rl"><b>${esc(r.l)}</b><small>${esc(r.q)}</small></div><span class="hx-pill p-${v[0]}">${esc(v[1])}</span><p>${esc(v[2])}</p></div></div>`}).join('');
 $('#hxgq').innerHTML=`<span class="hx-hi">${ic('crownq')}</span><div><b>The Queen asks</b><p>${esc(s.queen)}</p></div>`;
 const rm=$('#hxroom');if(rm&&!MO()){rm.classList.remove('flash');void rm.offsetWidth;rm.classList.add('flash')}}

/* ---------- v35: lanes, the switch explainer and the cards ---------- */
function renderLanes(s){const cr=crossOf(s),mp=$('#hxmap');if(mp){mp.classList.toggle('nosub',!cr.some(c=>c.lane==='sub'));mp.classList.toggle('noother',!cr.some(c=>c.lane==='other'))}$$('.hx-lcs',root).forEach(l=>{const its=cr.filter(c=>c.lane===l.dataset.lane);
 l.innerHTML=its.length?its.map(c=>`<div class="hx-lc${c.maybe?' maybe':''}${c.prov?' pv-'+c.prov:''}" data-c="${cr.indexOf(c)}"><b>${esc(c.who)}</b><small>${esc(c.note)}</small></div>`).join(''):`<div class="hx-lc none"><small>${l.dataset.lane==='sub'&&!PV.a&&!PV.o?'Both switched off: nothing goes here':'Nothing goes here in this journey'}</small></div>`})}
function renderProv(){const s=H.scenarios[sc],P=H.prov,x=$('#hxpvx');if(!P)return;
 if(x&&s.pv){const row=k=>{const on=PV[k],t=on?s.pv[k].on:s.pv[k].off;return `<div class="hx-pvr ${k} ${on?'on':'off'}"><span class="hx-pvb"><i></i>${esc(P[k].t)}: ${on?'on':'off'}</span><p>${esc(t)}</p>${srcInline(s.pv[k].src)}</div>`};
  x.innerHTML=`<div class="hx-pvk">In this journey: ${esc(s.t)}</div>${row('a')}${row('o')}`+(!PV.a&&!PV.o?`<p class="hx-pvn">${esc(P.none)}${srcInline(P.nsrc)}</p>`:`<p class="hx-pvn soft">${esc(P.note)}${srcInline(P.notesrc)}</p>`)}
 $$('.hx-sw',root).forEach(b=>{const k=b.dataset.p;b.setAttribute('aria-checked',PV[k]);b.classList.toggle('on',PV[k]);const d=$('.hx-swd',b);if(d)d.textContent=PV[k]?'On':'Off'});
 $$('.hx-pre',root).forEach(b=>b.classList.toggle('sel',b.dataset.pre==='def'?(PV.a&&PV.o):(!PV.a&&!PV.o)));
 const ln=$('.hx-lanes',root);if(ln)ln.classList.toggle('pv-off',!PV.a&&!PV.o);
 $$('.hx-it[data-pv]',root).forEach(b=>b.classList.toggle('pv-off',!PV[b.dataset.pv]))}
function renderCards(){$$('.hx-card',root).forEach(c=>{const s=H.scenarios[+c.dataset.s],ch=$('.hx-chips',c),cv=$('.hx-cov',c),nc=covOf(s);if(ch)ch.innerHTML=chipsOf(s);if(cv&&nc)cv.outerHTML=nc})}
function applyProv(show){const s=H.scenarios[sc];renderCards();$('#hxlead').textContent=leadOf(s);renderLanes(s);renderRoom();renderProv();
 const ln=$('.hx-lanes',root);if(ln&&!MO()){ln.classList.remove('pvflash');void ln.offsetWidth;ln.classList.add('pvflash')}
 if(show){stop();if(MO())go(4,false);else{cur=3;go(4,true)}}}
root.addEventListener('click',e=>{const b=e.target.closest('.hx-sw,.hx-pre');if(!b)return;
 if(b.classList.contains('hx-sw')){const k=b.dataset.p;PV[k]=!PV[k]}else{const on=b.dataset.pre==='def';PV={a:on,o:on}}
 try{localStorage.setItem('cc-hole-prov',JSON.stringify(PV))}catch(e){}
 touched=true;applyProv(true)});

/* ---------- the journey ---------- */
const map=$('#hxmap'),toks=$('#hxtoks'),det=$('#hxdet');
const P={req:$('#hxreq'),resp:$('#hxresp'),sub:$('#hxxsub'),other:$('#hxxother')};
let LEN=null;
function lens(){if(LEN)return LEN;const L=P.req.getTotalLength();/* v39: coarse then fine search (about eight times fewer path measurements, so the page starts faster on modest computers) */const at=([x,y])=>{const D=l=>{const p=P.req.getPointAtLength(l);return (p.x-x)**2+(p.y-y)**2};let b=0,bd=1e9;for(let l=0;l<=L;l+=24){const d=D(l);if(d<bd){bd=d;b=l}}const lo=Math.max(0,b-24),hi=Math.min(L,b+24);for(let l=lo;l<=hi;l++){const d=D(l);if(d<bd){bd=d;b=l}}return b};
 LEN={req:STA.slice(0,5).map(at),reqT:L,resp:P.resp.getTotalLength(),sub:P.sub.getTotalLength(),other:P.other.getTotalLength()};return LEN}
const put=(el,p)=>{el.style.left=(p.x/10)+'%';el.style.top=(p.y/5.6)+'%'};
const ptOf=(i)=>({x:STA[i][0],y:STA[i][1]});
function tok(kind,label,cls){const t=document.createElement('div');t.className='hx-tok k-'+kind+(cls?' '+cls:'');t.innerHTML=TOK[kind]+(label?`<span>${esc(label)}</span>`:'');toks.appendChild(t);return t}
function fly(el,path,a,b,dur,v){return new Promise(res=>{if(MO()||!dur){put(el,path.getPointAtLength(b));res();return}
 const t0=performance.now();const step=now=>{if(v!==V){res();return}let k=Math.min(1,(now-t0)/dur);const e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;put(el,path.getPointAtLength(a+(b-a)*e));if(k<1)requestAnimationFrame(step);else res()};requestAnimationFrame(step)})}
const pop=(el,v)=>{if(!el)return;el.classList.remove('pop');void el.offsetWidth;el.classList.add('pop')};
const wait=(ms,v)=>new Promise(r=>setTimeout(r,MO()?0:ms));

function stationState(i){$$('.hx-sta',map).forEach((b,k)=>{b.classList.toggle('on',k===i);b.classList.toggle('done',k<i);b.setAttribute('aria-current',k===i?'step':'false');const bd=$('.hx-badge',b);bd.textContent='';b.classList.remove('turn','spin','glow')});
 map.classList.toggle('crossing',i===4);map.dataset.stop=i}
function badge(i,txt){const b=$$('.hx-sta',map)[i];if(!b)return;const bd=$('.hx-badge',b);bd.textContent=txt;pop(bd)}

/* the canonical picture for each stop, so jumping straight to any stop always looks right */
function scene(i){const s=H.scenarios[sc],L=lens();toks.innerHTML='';$$('.hx-lc',map).forEach(c=>c.classList.remove('hit'));
 if(i<=1){const t=tok('prompt','Your prompt');put(t,ptOf(i));if(i===1)badge(1,'Signed in as you')}
 else if(i===2){const t=tok('prompt','Your prompt');put(t,ptOf(2));const c=tok('content',s.content,'side');put(c,ptOf(2))}
 else if(i===3){const t=tok('grounded','Prompt and context');put(t,ptOf(3));if(s.id==='web'||s.id==='research'){const q=tok('query','Search words','side');put(q,ptOf(3))}}
 else if(i===4){const t=tok('grounded','Prompt and context');put(t,ptOf(4));crossOf(s).forEach((c,k)=>{const q=tok('results',c.back,(c.maybe?'maybe ':'')+'lane');put(q,P[c.lane].getPointAtLength(L[c.lane]));const lc=$(`.hx-lc[data-c="${k}"]`,map);if(lc)lc.classList.add('hit')})}
 else {const t=tok('response','Response');put(t,ptOf(5));badge(5,'Kept in your Copilot history')}}

async function animate(i,v){const s=H.scenarios[sc],L=lens();toks.innerHTML='';
 if(i===0){const t=tok('prompt','Your prompt','born');put(t,ptOf(0));return}
 if(i===1){const t=tok('prompt','Your prompt');put(t,ptOf(0));await fly(t,P.req,L.req[0],L.req[1],1000,v);if(v!==V)return;const b=$$('.hx-sta',map)[1];b.classList.add('turn');badge(1,'Signed in as you');return}
 if(i===2){const t=tok('prompt','Your prompt');put(t,ptOf(1));await fly(t,P.req,L.req[1],L.req[2],1000,v);if(v!==V)return;$$('.hx-sta',map)[2].classList.add('glow');const c=tok('content',s.content,'side born');put(c,ptOf(2));return}
 if(i===3){const t=tok('prompt','Your prompt');put(t,ptOf(2));const c=tok('content',s.content,'side');put(c,ptOf(2));
  await Promise.all([fly(t,P.req,L.req[2],L.req[3],1100,v),fly(c,P.req,L.req[2],L.req[3],1180,v)]);if(v!==V)return;
  $$('.hx-sta',map)[3].classList.add('spin');c.classList.add('merge');t.classList.add('merge');await wait(420,v);if(v!==V)return;
  toks.innerHTML='';const g=tok('grounded','Prompt and context','born');put(g,ptOf(3));
  if(s.id==='web'||s.id==='research'){await wait(260,v);if(v!==V)return;const q=tok('query','Search words','side born');put(q,ptOf(3))}return}
 if(i===4){const g=tok('grounded','Prompt and context');put(g,ptOf(3));await fly(g,P.req,L.req[3],L.req[4],1100,v);if(v!==V)return;
  $$('.hx-sta',map)[4].classList.add('glow');
  const cr=crossOf(s);for(let k=0;k<cr.length;k++){const c=cr[k],path=P[c.lane],lc=$(`.hx-lc[data-c="${k}"]`,map);
   const out=tok(c.k||'grounded',c.lab,(c.maybe?'maybe ':'')+'lane');put(out,ptOf(4));await fly(out,path,0,L[c.lane],900,v);if(v!==V)return;
   if(lc)lc.classList.add('hit');out.remove();const back=tok('results',c.back,(c.maybe?'maybe ':'')+'lane born');put(back,path.getPointAtLength(L[c.lane]));
   await wait(380,v);if(v!==V)return;await fly(back,path,L[c.lane],0,900,v);if(v!==V)return;back.classList.add('merge');await wait(260,v);if(v!==V)return;back.remove()}
  return}
 if(i===5){const r=tok('response','Response','born');put(r,ptOf(4));await wait(300,v);if(v!==V)return;await fly(r,P.resp,0,L.resp,1300,v);if(v!==V)return;const b=$$('.hx-sta',map)[5];b.classList.add('glow');badge(5,'Kept in your Copilot history')}}

function detail(i){const s=H.scenarios[sc],st=H.stages[i],x=s.steps[st.id]||{};const c=x.common?H.common[x.common]:(st.id==='key'&&!x.tech?H.common.key:null);
 const tech=x.tech||(c&&c.tech)||'',src=x.src||(c&&c.src)||[];
 det.innerHTML=`<div class="hx-dots" role="group" aria-label="Stops">${H.stages.map((g,k)=>`<button type="button" class="hx-dot${k===i?' on':''}${k<i?' done':''}" data-i="${k}"${k===i?' aria-current="step"':''} aria-label="Stop ${k+1}: ${esc(g.w)}"><i>${k+1}</i></button>`).join('')}</div>
 <div class="hx-dk">Stop ${i+1} of ${H.stages.length}</div>
 <h4 class="hx-dw"><span class="hx-dwi">${ic(st.ic)}</span>${esc(st.w)}</h4>
 <div class="hx-dt">${esc(st.tech)}</div>
 <div class="hx-dq">&ldquo;${esc(st.q)}&rdquo;</div>
 <p class="hx-ds">${esc(stepOf(s,st.id))}</p>
 ${tech?`<details class="hx-more"><summary>Show me what's happening technically</summary><p>${esc(tech)}</p>${srcLinks(src)}</details>`:''}
 <div class="hx-ctl"><button type="button" class="btn" data-a="prev"${i===0?' disabled':''}>&larr; Back</button><button type="button" class="btn p" data-a="play">${playing?'Pause':(i===H.stages.length-1?'Play again':'Play')}</button><button type="button" class="btn" data-a="next"${i===H.stages.length-1?' disabled':''}>Next &rarr;</button></div>
 ${i===H.stages.length-1?`<button type="button" class="hx-toroom" data-a="room">${ic('cat')}So... what actually left the room? <span aria-hidden="true">&darr;</span></button>`:''}`;
 pop(det)}

function go(i,anim){i=Math.max(0,Math.min(H.stages.length-1,i));const from=cur;cur=i;V++;const v=V;stationState(i);detail(i);
 if(anim&&i===from+1&&!MO())return animate(i,v);scene(i);return Promise.resolve()}
const READ=[2600,3200,3600,3600,3800,3000];
async function play(){if(playing)return;playing=true;started=true;if(cur>=H.stages.length-1||cur<=0)cur=-1;
 updPlay();
 while(playing){const nx=cur+1;if(nx>H.stages.length-1)break;
  const v0=V+1;await go(nx,true);if(!playing||V!==v0)break;
  await new Promise(r=>{const t=setTimeout(r,MO()?READ[nx]+1400:READ[nx]);stopT=()=>{clearTimeout(t);r()}});stopT=null;if(!playing||V!==v0)break}
 playing=false;updPlay()}
let stopT=null;
function stop(){playing=false;if(stopT){stopT();stopT=null}updPlay()}
function updPlay(){const b=$('[data-a="play"]',det);if(b)b.textContent=playing?'Pause':(cur===H.stages.length-1?'Play again':'Play')}
det.addEventListener('click',e=>{const b=e.target.closest('[data-a],.hx-dot');if(!b)return;
 if(b.classList.contains('hx-dot')){stop();go(+b.dataset.i,false);return}
 const a=b.dataset.a;if(a==='play'){if(playing)stop();else play()}
 else if(a==='next'){stop();go(cur+1,true)}else if(a==='prev'){stop();go(cur-1,false)}
 else if(a==='room'&&chapOn){qbGo('hxroom')}
 else if(a==='room'){window.ccBackPush&&window.ccBackPush();const r=$('#hxroom');if(r){r.classList.add('in');r.scrollIntoView({behavior:MO()?'auto':'smooth',block:'start'})}}});
map.addEventListener('click',e=>{const b=e.target.closest('.hx-sta');if(!b)return;stop();const i=+b.dataset.i;go(i,i===cur+1)});

/* ---------- the Golden Key doors ---------- */
const cap=$('#hxdcap');
function door(i){const d=H.doors[i];cap.innerHTML=`<b>${esc(d.t)}</b> ${esc(d.d)}`;cap.className='hx-dcap s-'+d.st;$$('.hx-dr',root).forEach((x,k)=>x.classList.toggle('sel',k===i))}
$$('.hx-dr',root).forEach(b=>{['mouseenter','focus','click'].forEach(ev=>b.addEventListener(ev,()=>door(+b.dataset.d)))});

/* ---------- the looking glass items open a drawer with the detail and the sources ---------- */
root.addEventListener('click',e=>{const b=e.target.closest('[data-g]');if(!b)return;const [z,i]=b.dataset.g.split(':');const g=z==='inbound'?H.glass.inbound:H.glass[z][+i];if(!g)return;
 const pre={here:'This side of the glass',sub:'Through the glass: a Microsoft subprocessor',other:'Through the glass: other terms',inbound:'Coming in through the glass'}[z];
 const body=`<div class="dlabel">In short</div><p>${esc(g.d)}</p><div class="dlabel">The detail</div><p>${esc(g.x)}</p><div class="dlabel">Sources</div><div class="srccards one">${(g.src||[]).map(k=>H.src[k]).filter(Boolean).map(s=>typeof srcCard==='function'?srcCard(s):`<a href="${s.u}">${esc(s.n)}</a>`).join('')}</div>`;
 if(window.ccOpenDrawer)window.ccOpenDrawer({ico:ic(g.ic),pre,title:g.t,pill:'',body})});

/* ---------- Tweedledum and Tweedledee flip cards ---------- */
const flipT=f=>{f.classList.toggle('f');f.setAttribute('aria-pressed',f.classList.contains('f'))};
$('.hx-twg',root).addEventListener('click',e=>{if(e.target.closest('a'))return;const f=e.target.closest('.hx-tf');if(f)flipT(f)});
$('.hx-twg',root).addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const f=e.target.closest('.hx-tf');if(f&&e.target===f){e.preventDefault();flipT(f)}});

/* ---------- start ---------- */
pick(0,false);
window.HOLE_HOOKS={hole:()=>{if(!started){stop();go(0,false)}},leave_hole:()=>stop()};
/* v39: no automatic scroll or play after the Rabbit hole banner rolls up; readers choose where to go (Charlie, 12 Oct 2026) */
window.HOLE_AUTO={};
window.ccHole={pick,go,play,stop,state:()=>({sc,cur,playing,view})};
/* v90: fetched after the page started (web edition): join the tab hooks now */
if(window.ccAddHooks)window.ccAddHooks(window.HOLE_HOOKS);
})();
