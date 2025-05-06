(()=>{var e={};e.id=590,e.ids=[590],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12781:e=>{"use strict";e.exports=require("stream")},1659:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l});var n=t(51361),o=t(90392),i=t(45880),a=t.n(i),s=t(22038),d={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>s[e]);t.d(r,d);let l=["",{children:["auth",{children:["error",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,60305)),"/Users/dohyeonkim/k2030-platform/apps/web/app/auth/error/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,76172)),"/Users/dohyeonkim/k2030-platform/apps/web/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,62177,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/dohyeonkim/k2030-platform/apps/web/app/auth/error/page.tsx"],u="/auth/error/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/auth/error/page",pathname:"/auth/error",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},89733:(e,r,t)=>{Promise.resolve().then(t.bind(t,55270))},10534:(e,r,t)=>{Promise.resolve().then(t.bind(t,20194))},32691:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,75895,23)),Promise.resolve().then(t.t.bind(t,85666,23)),Promise.resolve().then(t.t.bind(t,39495,23)),Promise.resolve().then(t.t.bind(t,22492,23)),Promise.resolve().then(t.t.bind(t,27224,23)),Promise.resolve().then(t.t.bind(t,70801,23))},55270:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c});var n=t(65234),o=t(3438),i=t(57367),a=t(45197),s=t(36796),d=t(52179);function l(){let e=(0,o.useRouter)(),r=(0,o.useSearchParams)(),t=decodeURIComponent(r?.get("error")||""),d="알 수 없는 오류가 발생했습니다.";return t.includes("정지")?d="회원님은 계정이 정지되었습니다.\n관리자에게 문의해 주세요.":t.includes("탈퇴")?d="탈퇴된 계정입니다. 동일 이메일로 재가입이 불가합니다.":t&&(d=t),n.jsx("div",{style:{minHeight:"80vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#f8fafc"},children:(0,n.jsxs)(i.Z,{style:{minWidth:340,padding:"2.5rem 2rem",textAlign:"center"},children:[n.jsx(a.Dx,{children:"로그인 불가"}),n.jsx("div",{style:{margin:"1.5rem 0",color:"#d32f2f",whiteSpace:"pre-line",fontWeight:500,fontSize:18},children:d}),n.jsx(s.KM,{style:{width:"100%",fontSize:16},onClick:()=>e.push("/"),children:"메인으로 이동"})]})})}function c(){return n.jsx(d.Suspense,{fallback:n.jsx("div",{children:"Loading..."}),children:n.jsx(l,{})})}},20194:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var n=t(65234),o=t(5822),i=t(81339);let a={primary:"#4d8888",primaryLight:"#4d8888",primaryDark:"#234646",background:"#ffffff",accent:"#23b1c7",text:"#222",error:"#ef4444",success:"#23c77b",like:"#336666",neutral:"#b0b8c1",dislike:"#e57373",likeBg:"#e0f7fa",neutralBg:"#f3f4f6",dislikeBg:"#ffebee"};function s({children:e}){return n.jsx(o.SessionProvider,{children:n.jsx(i.f6,{theme:a,children:e})})}},36796:(e,r,t)=>{"use strict";t.d(r,{$m:()=>i,KM:()=>o,TX:()=>a,yw:()=>s});var n=t(81339);let o=n.ZP.button`
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
`,i=(0,n.ZP)(o)`
  background: ${({theme:e})=>e.error};
  color: #fff;
  &:hover {
    background: ${({theme:e})=>e.primaryDark};
  }
`,a=(0,n.ZP)(o)`
  background: ${({theme:e})=>e.primary};
  &:hover {
    background: ${({theme:e})=>e.primaryDark};
  }
`,s=n.ZP.button`
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
`;n.ZP.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  justify-content: space-between;
  align-items: stretch;
`},57367:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var n=t(81339);let o=n.ZP.div`
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: none;
  padding: 2rem 1.5rem;
  margin-bottom: ${({marginBottom:e})=>e||"2rem"};
  border: none;
`},45197:(e,r,t)=>{"use strict";t.d(r,{DK:()=>i,Dx:()=>o,FN:()=>s,HN:()=>l,IK:()=>f,J7:()=>d,KH:()=>h,WD:()=>c,_1:()=>p,h4:()=>m,u6:()=>g,vb:()=>u,vx:()=>a,y:()=>x});var n=t(81339);let o=n.ZP.h1`
  font-size: 2rem;
  color: ${({theme:e})=>e.primary};
  font-weight: 900;
`,i=n.ZP.h2`
  font-size: 1.1rem;
  color: ${({theme:e})=>e.primary};
  font-weight: 600;
`,a=n.ZP.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({theme:e})=>e.text};
  background: ${({theme:e})=>e.background};
  padding: 0.5rem 1.4rem;
  border-radius: 1.2rem;
  min-width: 120px; // ← 원하는 값으로 추가
  display: inline-block; // width 적용을 위해
`,s=n.ZP.img`
  height: 100px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  @media (max-width: 600px) {
    height: 48px;
  }
`,d=n.ZP.div`
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #222;
  opacity: 0.9;
`,l=n.ZP.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #222;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`,c=n.ZP.span`
  font-size: 0.9rem;
  color: #3b82f6;
  font-weight: 600;
`,u=n.ZP.span`
  font-size: 0.9rem;
  color: #a3a3a3;
`,p=n.ZP.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 1rem;
  background: #dbeafe;
  color: #2563eb;
`,m=n.ZP.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 1rem;
  background: ${({$closed:e})=>e?"#fee2e2":"#dcfce7"};
  color: ${({$closed:e})=>e?"#dc2626":"#16a34a"};
`,f=n.ZP.span`
  color: #888;
  font-size: 0.95rem;
`,h=n.ZP.span`
  color: #a3a3a3;
  font-size: 0.95rem;
`,g=n.ZP.span`
  color: #e5e7eb;
  margin: 0 0.3rem;
`,x=n.ZP.div`
  color: #ef4444;
  margin-top: 8px;
  font-size: 13px;
`},3438:(e,r,t)=>{"use strict";var n=t(64276);t.o(n,"usePathname")&&t.d(r,{usePathname:function(){return n.usePathname}}),t.o(n,"useRouter")&&t.d(r,{useRouter:function(){return n.useRouter}}),t.o(n,"useSearchParams")&&t.d(r,{useSearchParams:function(){return n.useSearchParams}})},60305:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>o,default:()=>a});let n=(0,t(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/auth/error/page.tsx`),{__esModule:o,$$typeof:i}=n,a=n.default},76172:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>u,metadata:()=>c});var n=t(76071),o=t(97340),i=t.n(o);t(64220);let a=(0,t(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/providers.tsx`),{__esModule:s,$$typeof:d}=a,l=a.default,c={title:"2030",description:"2030 세대를 위한 플랫폼"};function u({children:e}){return(0,n.jsxs)("html",{lang:"ko",suppressHydrationWarning:!0,children:[(0,n.jsxs)("head",{children:[n.jsx("meta",{charSet:"utf-8"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.jsx("meta",{name:"theme-color",content:"#ffffff"})]}),n.jsx("body",{className:i().className,suppressHydrationWarning:!0,children:n.jsx(l,{children:n.jsx("div",{suppressHydrationWarning:!0,children:e})})})]})}},64220:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[158,423],()=>t(1659));module.exports=n})();