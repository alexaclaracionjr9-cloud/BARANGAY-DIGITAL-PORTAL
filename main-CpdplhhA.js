import{q as f,c,d as p,o as m,a as g,l as v}from"./firebase-BtiyEPHd.js";function y(){const t=document.getElementById("particles");if(!t)return;const s=["rgba(211,47,47,0.4)","rgba(99,102,241,0.3)","rgba(255,255,255,0.15)"];function r(){const e=document.createElement("div");e.className="particle";const i=Math.random()*4+2;e.style.width=i+"px",e.style.height=i+"px",e.style.left=Math.random()*100+"%",e.style.bottom="-10px",e.style.background=s[Math.floor(Math.random()*s.length)],e.style.animationDuration=Math.random()*8+6+"s",e.style.animationDelay=Math.random()*4+"s",t.appendChild(e),setTimeout(()=>e.remove(),16e3)}for(let e=0;e<12;e++)setTimeout(r,e*400);setInterval(r,1200)}function l(t,s){const r=document.getElementById(t);r&&(r.textContent=s)}const u={yellow:{bg:"#FEF08A",border:"#FDE047",text:"#451A03",sub:"#78350F",badgeBg:"rgba(180,83,9,0.14)",badgeText:"#92400E",pin:"#DC2626",rot:"-2deg"},green:{bg:"#DCFCE7",border:"#BBF7D0",text:"#14532D",sub:"#166534",badgeBg:"rgba(21,128,61,0.14)",badgeText:"#15803D",pin:"#EA580C",rot:"1.8deg"},pink:{bg:"#FCE7F3",border:"#FBCFE8",text:"#831843",sub:"#9D174D",badgeBg:"rgba(190,24,93,0.14)",badgeText:"#BE185D",pin:"#2563EB",rot:"-1.5deg"},blue:{bg:"#E0F2FE",border:"#BAE6FD",text:"#0C4A6E",sub:"#075985",badgeBg:"rgba(3,105,161,0.14)",badgeText:"#0369A1",pin:"#DC2626",rot:"2deg"},purple:{bg:"#F3E8FF",border:"#E9D5FF",text:"#581C87",sub:"#6B21A8",badgeBg:"rgba(126,34,206,0.14)",badgeText:"#7E22CE",pin:"#16A34A",rot:"-2.2deg"},orange:{bg:"#FFEDD5",border:"#FED7AA",text:"#7C2D12",sub:"#9A3412",badgeBg:"rgba(194,65,12,0.14)",badgeText:"#C2410C",pin:"#3B82F6",rot:"1.5deg"}},h=["yellow","green","pink","blue","purple","orange"];function w(){try{const t=f(c(p,"feedbacks"),m("createdAt","desc"));g(t,s=>{const r=s.docs.map(n=>n.data()),e=r.filter(n=>n.published===!0);l("stat-feedbacks-live",e.length);const i=e.length?(e.reduce((n,a)=>n+(a.rating||5),0)/e.length).toFixed(1):"5.0";l("stat-rating-live",i+" / 5.0");const o=document.getElementById("feedbackCarousel");if(o){if(e.length===0){o.innerHTML=`
          <div class="col-span-full py-16 text-center bg-white/60 border border-dashed border-slate-300 rounded-3xl p-8 max-w-md mx-auto">
            <span class="text-3xl block mb-2">💬</span>
            <h4 class="font-display text-base font-800 text-primary mb-1">No Public Reviews Yet</h4>
            <p class="text-slate-400 text-xs">Citizen feedback and ratings will be showcased here once published by the Barangay office.</p>
          </div>`;return}o.innerHTML=e.map(n=>{const a=Array.from({length:5},(d,x)=>`<span style="color:${x<(n.rating||5)?"#F59E0B":"#E2E8F0"}; font-size:15px;">★</span>`).join(""),b=(n.name||"Citizen").split(" ").map(d=>d[0]).join("").slice(0,2).toUpperCase();return`
          <div class="flex flex-col justify-between p-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_24px_rgba(15,41,66,0.04)] hover:shadow-[0_16px_36px_rgba(15,41,66,0.08)] hover:-translate-y-1 transition-all duration-300">
            <div>
              <div class="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.62rem] font-800 uppercase tracking-wider bg-slate-100 text-primary border border-slate-200">
                  🏛️ ${n.service||"Barangay Service"}
                </span>
                <div class="flex items-center tracking-tight">${a}</div>
              </div>
              <p class="text-slate-700 text-sm leading-relaxed font-500 italic relative mb-6">“${n.message||""}”</p>
            </div>
            <div class="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-slate-800 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  ${b}
                </div>
                <div>
                  <p class="text-xs font-800 text-primary leading-tight">${n.name||"Verified Resident"}</p>
                  <p class="text-[0.6rem] text-emerald-600 font-700 flex items-center gap-1 mt-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified Citizen
                  </p>
                </div>
              </div>
              <span class="text-[0.62rem] text-slate-400 font-600">${n.date||""}</span>
            </div>
          </div>`}).join("")}},s=>console.warn("Feedbacks error",s))}catch(t){console.warn(t)}try{const t=f(c(p,"grievances"),m("createdAt","desc"));g(t,s=>{const r=s.docs.map(a=>a.data()),e=r.length,i=r.filter(a=>a.status==="Resolved").length,o=r.filter(a=>a.status==="In Progress").length,n=e>0?Math.round(i/e*100)+"%":"0%";l("stat-rate",n),l("stat-total",e),l("stat-done",i),l("stat-pending",o),l("stat-resolved",i),l("stat-rate-hero",n)},s=>console.warn("Grievances error",s))}catch(t){console.warn(t)}try{g(c(p,"users"),t=>{l("stat-residents",t.size)},t=>console.warn("Users error",t))}catch(t){console.warn(t)}try{const t=f(c(p,"announcements"),m("createdAt","desc"),v(6));g(t,s=>{const r=document.getElementById("announcementsContainer");if(r){if(s.empty){r.innerHTML=`
          <div class="col-span-full flex justify-center">
            <div class="sticky-note-card max-w-sm w-full" style="background:#FEF9C3; border:1px solid #FDE047; padding:28px 20px; border-radius:16px; text-align:center; box-shadow:0 12px 24px rgba(0,0,0,0.12); transform:rotate(-1deg); position:relative;">
              <div style="position:absolute; top:-14px; left:50%; transform:translateX(-50%);">
                <span style="font-size:26px; filter:drop-shadow(0 3px 3px rgba(0,0,0,0.3));">📌</span>
              </div>
              <h4 style="color:#854D0E; font-size:1.05rem; font-weight:800; margin:0 0 6px 0;">No Active Announcements</h4>
              <p style="color:#A16207; font-size:0.8rem; margin:0;">Check back soon for new community updates and official advisories.</p>
            </div>
          </div>`;return}r.innerHTML=s.docs.map((e,i)=>{const o=e.data(),n=o.noteColor||h[i%h.length],a=u[n]||u.yellow,b=o.date||"",d=o.message||o.body||"",x=o.office?`<span style="background:${a.badgeBg}; color:${a.badgeText}; font-size:0.65rem; font-weight:800; padding:3px 9px; border-radius:99px; white-space:nowrap; text-transform:uppercase; letter-spacing:0.04em;">🏛️ ${o.office}</span>`:"";return`
          <div class="sticky-note-card flex flex-col justify-between" style="background:${a.bg}; border:1px solid ${a.border}; border-radius:16px; padding:22px 20px 18px; position:relative; box-shadow:0 12px 24px -4px rgba(0,0,0,0.15), 0 4px 8px -2px rgba(0,0,0,0.08); transform:rotate(${a.rot}); min-height:200px;">
            <div style="position:absolute; top:-12px; left:50%; transform:translateX(-50%); z-index:10; filter:drop-shadow(0 3px 3px rgba(0,0,0,0.3)); pointer-events:none;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <ellipse cx="12" cy="19" rx="4.5" ry="1.8" fill="rgba(0,0,0,0.25)"/>
                <circle cx="12" cy="9" r="7.5" fill="${a.pin}"/>
                <circle cx="9.8" cy="7.2" r="2.5" fill="white" opacity="0.75"/>
                <path d="M12 9 L12 18" stroke="#334155" stroke-width="2.2" stroke-linecap="round"/>
              </svg>
            </div>
            <div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:10px; flex-wrap:wrap; padding-bottom:6px; border-bottom:1px dashed rgba(0,0,0,0.1);">
                <span style="font-size:0.68rem; color:${a.sub}; font-weight:800; text-transform:uppercase; letter-spacing:0.06em;">📅 ${b||"Notice"}</span>
                ${x}
              </div>
              <h3 style="color:${a.text}; font-weight:900; font-size:1.15rem; line-height:1.3; margin:0 0 8px 0; word-break:break-word;">
                ${o.title||""}
              </h3>
              ${d?`<p style="color:${a.sub}; font-size:0.85rem; line-height:1.55; margin:0; opacity:0.95; word-break:break-word;">${d}</p>`:""}
            </div>
            <div style="margin-top:14px; text-align:right; border-top:1px dashed rgba(0,0,0,0.08); padding-top:6px;">
              <span style="font-size:0.6rem; font-weight:700; color:${a.sub}; opacity:0.75;">OFFICIAL POST</span>
            </div>
          </div>`}).join("")}},s=>console.warn("Announcements error",s))}catch(t){console.warn(t)}}function E(){const t=document.querySelectorAll(".reveal");if(typeof IntersectionObserver>"u"){t.forEach(r=>r.classList.add("visible"));return}const s=new IntersectionObserver(r=>{r.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),s.unobserve(e.target))})},{threshold:.1,rootMargin:"0px 0px -20px 0px"});t.forEach(r=>s.observe(r))}document.addEventListener("DOMContentLoaded",()=>{y(),w(),E()});
