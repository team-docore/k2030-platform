(()=>{var e={};e.id=743,e.ids=[743],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12781:e=>{"use strict";e.exports=require("stream")},51637:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>s.a,__next_app__:()=>m,originalPathname:()=>c,pages:()=>p,routeModule:()=>f,tree:()=>l});var i=t(51361),n=t(90392),a=t(45880),s=t.n(a),o=t(22038),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);t.d(r,d);let l=["",{children:["admin",{children:["user-management",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,18453)),"/Users/dohyeonkim/k2030-platform/apps/web/app/admin/user-management/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,39063)),"/Users/dohyeonkim/k2030-platform/apps/web/app/admin/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(t.bind(t,76172)),"/Users/dohyeonkim/k2030-platform/apps/web/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,62177,23)),"next/dist/client/components/not-found-error"]}],p=["/Users/dohyeonkim/k2030-platform/apps/web/app/admin/user-management/page.tsx"],c="/admin/user-management/page",m={require:t,loadChunk:()=>Promise.resolve()},f=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/admin/user-management/page",pathname:"/admin/user-management",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},74088:(e,r,t)=>{Promise.resolve().then(t.bind(t,1417))},79550:(e,r,t)=>{Promise.resolve().then(t.bind(t,55573))},10534:(e,r,t)=>{Promise.resolve().then(t.bind(t,20194))},32691:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,75895,23)),Promise.resolve().then(t.t.bind(t,85666,23)),Promise.resolve().then(t.t.bind(t,39495,23)),Promise.resolve().then(t.t.bind(t,22492,23)),Promise.resolve().then(t.t.bind(t,27224,23)),Promise.resolve().then(t.t.bind(t,70801,23))},1417:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var i=t(65234);t(52179);var n=t(81339),a=t(78222),s=t(3438);let o=n.ZP.div`
  display: flex;
  min-height: 100vh;
  background: #f6f8fa;
`,d=n.ZP.nav`
  width: 220px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  padding: 40px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,l=(0,n.ZP)(a.default)`
  display: block;
  width: 100%;
  padding: 16px 32px;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({$active:e})=>e?"#4d8888":"#222"};
  background: ${({$active:e})=>e?"#f0fdfa":"transparent"};
  border-left: 4px solid ${({$active:e})=>e?"#4d8888":"transparent"};
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  &:hover {
    background: #f0fdfa;
    color: #4d8888;
  }
`,p=n.ZP.div`
  flex: 1;
  padding: 48px 40px;
`;function c({children:e}){let r=(0,s.usePathname)();return(0,i.jsxs)(o,{children:[(0,i.jsxs)(d,{children:[i.jsx(l,{href:"/admin/user-management",$active:(r??"").startsWith("/admin/user-management"),children:"회원관리"}),i.jsx(l,{href:"/admin/polls",$active:(r??"").startsWith("/admin/polls"),children:"투표관리"})]}),i.jsx(p,{children:e})]})}},55573:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>l});var i=t(65234),n=t(52179),a=t(57367),s=t(45197),o=t(36796),d=t(5822);function l(){let[e,r]=(0,n.useState)([]),[t,l]=(0,n.useState)(!0),[p,c]=(0,n.useState)(null),[m,f]=(0,n.useState)(null),{data:u}=(0,d.useSession)(),x=async()=>{l(!0),c(null);try{let e=await fetch("/api/admin/users"),t=await e.json();if(t.error)throw Error(t.error);r(t)}catch(e){c(e.message)}finally{l(!1)}};(0,n.useEffect)(()=>{x()},[]);let h=async(e,t)=>{f(e);try{let i=await fetch(`/api/admin/users/${e}/status`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:t})}),n=await i.json();if(n.error)throw Error(n.error);r(r=>r.map(r=>r.id===e?{...r,status:n.status}:r))}catch(e){alert(e.message)}finally{f(null)}},g=e=>u?.user?.email===e.email,b={background:"#e5e7eb",color:"#fff",opacity:.5,cursor:"not-allowed"};return(0,i.jsxs)(a.Z,{children:[i.jsx(s.Dx,{children:"회원관리"}),(0,i.jsxs)("div",{style:{marginTop:24,color:"#666"},children:[i.jsx(s.DK,{children:"회원 목록"}),t?i.jsx("div",{children:"로딩 중..."}):p?i.jsx("div",{style:{color:"red"},children:p}):(0,i.jsxs)("table",{style:{width:"100%",marginTop:16,borderCollapse:"collapse"},children:[i.jsx("thead",{children:(0,i.jsxs)("tr",{style:{background:"#f8fafc",color:"#222",fontWeight:700},children:[i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"이메일"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"이름"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"권한"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"가입일"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"상태"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"관리"})]})}),i.jsx("tbody",{children:e.map(e=>{let t=g(e);return(0,i.jsxs)("tr",{style:{borderBottom:"1px solid #eee"},children:[i.jsx("td",{style:{padding:"10px 8px"},children:e.email}),i.jsx("td",{style:{padding:"10px 8px"},children:e.name||"-"}),i.jsx("td",{style:{padding:"10px 8px"},children:e.is_admin?"관리자":"일반"}),i.jsx("td",{style:{padding:"10px 8px"},children:e.created_at?.slice(0,10)}),i.jsx("td",{style:{padding:"10px 8px",fontWeight:600},children:e.status}),(0,i.jsxs)("td",{style:{padding:"10px 8px",display:"flex",gap:8},children:["정상"===e.status&&i.jsx(o.KM,{style:t?{padding:"0.3rem 1.2rem",fontSize:14,...b}:{padding:"0.3rem 1.2rem",fontSize:14},disabled:m===e.id||t,onClick:()=>h(e.id,"정지"),children:"정지"}),"정지"===e.status&&i.jsx(o.KM,{style:t?{padding:"0.3rem 1.2rem",fontSize:14,...b}:{padding:"0.3rem 1.2rem",fontSize:14},disabled:m===e.id||t,onClick:()=>h(e.id,"정상"),children:"복귀"}),"탈퇴"!==e.status&&i.jsx(o.KM,{style:t?{padding:"0.3rem 1.2rem",fontSize:14,...b}:{padding:"0.3rem 1.2rem",fontSize:14,background:"#e5e7eb",color:"#222"},disabled:m===e.id||t,onClick:()=>h(e.id,"탈퇴"),children:"탈퇴"}),i.jsx(o.KM,{style:t?{padding:"0.3rem 1.2rem",fontSize:14,...b}:{padding:"0.3rem 1.2rem",fontSize:14,background:e.is_admin?"#e5e7eb":"#4d8888",color:e.is_admin?"#222":"#fff"},disabled:m===e.id||t,onClick:async()=>{if(!t){f(e.id);try{let t=await fetch(`/api/admin/users/${e.id}/status`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({is_admin:!e.is_admin})}),i=await t.json();if(i.error)throw Error(i.error);r(r=>r.map(r=>r.id===e.id?{...r,is_admin:i.is_admin}:r))}catch(e){alert(e.message)}finally{f(null)}}},children:e.is_admin?"관리자해제":"관리자부여"})]})]},e.id)})})]})]})]})}},20194:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var i=t(65234),n=t(5822),a=t(81339);let s={primary:"#4d8888",primaryLight:"#4d8888",primaryDark:"#234646",background:"#ffffff",accent:"#23b1c7",text:"#222",error:"#ef4444",success:"#23c77b",like:"#336666",neutral:"#b0b8c1",dislike:"#e57373",likeBg:"#e0f7fa",neutralBg:"#f3f4f6",dislikeBg:"#ffebee"};function o({children:e}){return i.jsx(n.SessionProvider,{children:i.jsx(a.f6,{theme:s,children:e})})}},36796:(e,r,t)=>{"use strict";t.d(r,{$m:()=>a,KM:()=>n,TX:()=>s,yw:()=>o});var i=t(81339);let n=i.ZP.button`
  padding: 0.9rem 0;
  width: 100%;
  background: ${({theme:e})=>e.primary};
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  border-radius: 1rem;
  border: none;
  box-shadow: 0 2px 8px rgba(40, 96, 96, 0.08);
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  &:hover {
    background: ${({theme:e})=>e.primaryDark};
    color: ${({theme:e})=>e.primaryLight};
  }
  &:disabled {
    background: #e5e7eb;
    color: #fff;
    opacity: 0.5;
    cursor: not-allowed;
  }
`,a=(0,i.ZP)(n)`
  background: ${({theme:e})=>e.error};
  color: #fff;
  &:hover {
    background: ${({theme:e})=>e.primaryDark};
  }
`,s=(0,i.ZP)(n)`
  background: ${({theme:e})=>e.primary};
  &:hover {
    background: ${({theme:e})=>e.primaryDark};
  }
`,o=i.ZP.button`
  flex: 1 1 0;
  min-width: 0;
  max-width: none;
  border-radius: 0.5rem;
  padding: 1.2rem 0;
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0 4px;
  border: none;
  box-shadow: none;
  color: ${({theme:e,$type:r,$selected:t})=>t?"#000":"like"===r?e.primary:"neutral"===r?e.neutral:e.dislike};
  background: ${({theme:e,$type:r,$selected:t})=>t?"like"===r?e.primary:"neutral"===r?e.neutral:e.dislike:e.background};
  transition: all 0.2s;
  &:hover {
    opacity: 0.92;
    box-shadow: none;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;i.ZP.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
`},57367:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var i=t(81339);let n=i.ZP.div`
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: none;
  padding: 2rem 1.5rem;
  margin-bottom: ${({marginBottom:e})=>e||"2rem"};
  border: none;
`},45197:(e,r,t)=>{"use strict";t.d(r,{DK:()=>a,Dx:()=>n,FN:()=>o,HN:()=>l,IK:()=>u,J7:()=>d,KH:()=>x,WD:()=>p,_1:()=>m,h4:()=>f,u6:()=>h,vb:()=>c,vx:()=>s,y:()=>g});var i=t(81339);let n=i.ZP.h1`
  font-size: 2rem;
  color: ${({theme:e})=>e.primary};
  font-weight: 900;
`,a=i.ZP.h2`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.primary};
  font-weight: 600;
`,s=i.ZP.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text};
  background: ${({theme:e})=>e.background};
  padding: 0.5rem 1.4rem;
  border-radius: 1.2rem;
  min-width: 120px; // ← 원하는 값으로 추가
  display: inline-block; // width 적용을 위해
`,o=i.ZP.img`
  height: 100px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  @media (max-width: 600px) {
    height: 48px;
  }
`,d=i.ZP.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #222;
  opacity: 0.9;
`,l=i.ZP.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #222;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,p=i.ZP.span`
  font-size: 0.9rem;
  color: #3b82f6;
  font-weight: 600;
`,c=i.ZP.span`
  font-size: 0.9rem;
  color: #a3a3a3;
`,m=i.ZP.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 1rem;
  background: #dbeafe;
  color: #2563eb;
`,f=i.ZP.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 1rem;
  background: ${({$closed:e})=>e?"#fee2e2":"#dcfce7"};
  color: ${({$closed:e})=>e?"#dc2626":"#16a34a"};
`,u=i.ZP.span`
  color: #888;
  font-size: 0.95rem;
`,x=i.ZP.span`
  color: #a3a3a3;
  font-size: 0.95rem;
`,h=i.ZP.span`
  color: #e5e7eb;
  margin: 0 0.3rem;
`,g=i.ZP.div`
  color: #ef4444;
  margin-top: 8px;
  font-size: 13px;
`},39063:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>n,default:()=>s});let i=(0,t(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/admin/layout.tsx`),{__esModule:n,$$typeof:a}=i,s=i.default},18453:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>a,__esModule:()=>n,default:()=>s});let i=(0,t(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/admin/user-management/page.tsx`),{__esModule:n,$$typeof:a}=i,s=i.default},76172:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c,metadata:()=>p});var i=t(76071),n=t(97340),a=t.n(n);t(64220);let s=(0,t(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/providers.tsx`),{__esModule:o,$$typeof:d}=s,l=s.default,p={title:"2030",description:"2030 세대를 위한 플랫폼"};function c({children:e}){return(0,i.jsxs)("html",{lang:"ko",suppressHydrationWarning:!0,children:[(0,i.jsxs)("head",{children:[i.jsx("meta",{charSet:"utf-8"}),i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.jsx("meta",{name:"theme-color",content:"#ffffff"})]}),i.jsx("body",{className:a().className,suppressHydrationWarning:!0,children:i.jsx(l,{children:i.jsx("div",{suppressHydrationWarning:!0,children:e})})})]})}},64220:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),i=r.X(0,[158,423,670],()=>t(51637));module.exports=i})();