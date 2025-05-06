(()=>{var e={};e.id=98,e.ids=[98],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12781:e=>{"use strict";e.exports=require("stream")},42141:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>l});var n=t(51361),s=t(90392),i=t(45880),o=t.n(i),a=t(22038),d={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);t.d(r,d);let l=["",{children:["auth",{children:["signin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,93253)),"/Users/dohyeonkim/k2030-platform/apps/web/app/auth/signin/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,76172)),"/Users/dohyeonkim/k2030-platform/apps/web/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,62177,23)),"next/dist/client/components/not-found-error"]}],u=["/Users/dohyeonkim/k2030-platform/apps/web/app/auth/signin/page.tsx"],c="/auth/signin/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/auth/signin/page",pathname:"/auth/signin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},34106:(e,r,t)=>{Promise.resolve().then(t.bind(t,32893))},10534:(e,r,t)=>{Promise.resolve().then(t.bind(t,20194))},32691:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,75895,23)),Promise.resolve().then(t.t.bind(t,85666,23)),Promise.resolve().then(t.t.bind(t,39495,23)),Promise.resolve().then(t.t.bind(t,22492,23)),Promise.resolve().then(t.t.bind(t,27224,23)),Promise.resolve().then(t.t.bind(t,70801,23))},32893:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>h});var n=t(65234),s=t(5822),i=t(3438),o=t(52179),a=t(81339);let d=a.ZP.div`
  width: 100vw;
  height: 220px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`,l=a.ZP.div`
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 340px;
`,u=a.ZP.h1`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`,c=a.ZP.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 0.8rem;
  border: 1.5px solid #d1d5db;
  font-size: 1.05rem;
  background: #f9fafb;
  color: #222;
  margin-bottom: 0.7rem;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #2563eb;
    outline: none;
    background: #fff;
  }
`,p=a.ZP.button`
  width: 100%;
  padding: 0.9rem 0;
  border-radius: 0.8rem;
  background: #000;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #222;
  }
`,m=a.ZP.button`
  width: 100%;
  height: 50px;
  border-radius: 0.8rem;
  background: #fff;
  color: #3c4043;
  font-weight: 500;
  font-size: 1.1rem;
  border: 1.5px solid #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 1rem;
  box-shadow: 0 1px 2px rgba(60,64,67,.08);
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  &:hover {
    background: #f7f8fa;
    box-shadow: 0 2px 4px rgba(60,64,67,.13);
  }
`,g=a.ZP.img`
  width: 24px;
  height: 24px;
`,f=a.ZP.div`
  margin: 1.2rem 0 0.5rem 0;
  color: #aaa;
  font-size: 14px;
  text-align: center;
`;function h(){let{data:e,status:r}=(0,s.useSession)(),t=(0,i.useRouter)(),[a,h]=(0,o.useState)(""),[x,b]=(0,o.useState)("");return((0,o.useEffect)(()=>{"authenticated"===r&&t.replace("/")},[r,t]),"loading"===r)?null:(0,n.jsxs)("div",{style:{minHeight:"100vh",background:"#fff",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsx(d,{}),(0,n.jsxs)(l,{children:[n.jsx(u,{children:"2030 계정으로 로그인"}),n.jsx(c,{placeholder:"이메일 주소",value:a,onChange:e=>h(e.target.value),autoComplete:"username"}),n.jsx(c,{placeholder:"비밀번호",type:"password",value:x,onChange:e=>b(e.target.value),autoComplete:"current-password"}),n.jsx(p,{disabled:!0,children:"로그인"}),n.jsx(f,{children:"또는"}),(0,n.jsxs)(m,{onClick:()=>(0,s.signIn)("google",{prompt:"select_account",redirect:!0,callbackUrl:"/",force:!0}),children:[n.jsx(g,{src:"/google.svg",alt:"Google"}),"Google로 계속"]})]})]})}},20194:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var n=t(65234),s=t(5822),i=t(81339);let o={primary:"#4d8888",primaryLight:"#4d8888",primaryDark:"#234646",background:"#ffffff",accent:"#23b1c7",text:"#222",error:"#ef4444",success:"#23c77b",like:"#336666",neutral:"#b0b8c1",dislike:"#e57373",likeBg:"#e0f7fa",neutralBg:"#f3f4f6",dislikeBg:"#ffebee"};function a({children:e}){return n.jsx(s.SessionProvider,{children:n.jsx(i.f6,{theme:o,children:e})})}},3438:(e,r,t)=>{"use strict";var n=t(64276);t.o(n,"usePathname")&&t.d(r,{usePathname:function(){return n.usePathname}}),t.o(n,"useRouter")&&t.d(r,{useRouter:function(){return n.useRouter}}),t.o(n,"useSearchParams")&&t.d(r,{useSearchParams:function(){return n.useSearchParams}})},93253:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>s,default:()=>o});let n=(0,t(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/auth/signin/page.tsx`),{__esModule:s,$$typeof:i}=n,o=n.default},76172:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>c,metadata:()=>u});var n=t(76071),s=t(97340),i=t.n(s);t(64220);let o=(0,t(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/providers.tsx`),{__esModule:a,$$typeof:d}=o,l=o.default,u={title:"2030",description:"2030 세대를 위한 플랫폼"};function c({children:e}){return(0,n.jsxs)("html",{lang:"ko",suppressHydrationWarning:!0,children:[(0,n.jsxs)("head",{children:[n.jsx("meta",{charSet:"utf-8"}),n.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),n.jsx("meta",{name:"theme-color",content:"#ffffff"})]}),n.jsx("body",{className:i().className,suppressHydrationWarning:!0,children:n.jsx(l,{children:n.jsx("div",{suppressHydrationWarning:!0,children:e})})})]})}},64220:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[158,423],()=>t(42141));module.exports=n})();