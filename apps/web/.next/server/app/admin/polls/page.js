(()=>{var e={};e.id=736,e.ids=[736],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},12781:e=>{"use strict";e.exports=require("stream")},33673:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>h,originalPathname:()=>c,pages:()=>p,routeModule:()=>x,tree:()=>l});var i=r(51361),n=r(90392),o=r(45880),s=r.n(o),a=r(22038),d={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);r.d(t,d);let l=["",{children:["admin",{children:["polls",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,77556)),"/Users/dohyeonkim/k2030-platform/apps/web/app/admin/polls/page.tsx"]}]},{error:[()=>Promise.resolve().then(r.bind(r,24689)),"/Users/dohyeonkim/k2030-platform/apps/web/app/admin/polls/error.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,9863)),"/Users/dohyeonkim/k2030-platform/apps/web/app/admin/polls/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,39063)),"/Users/dohyeonkim/k2030-platform/apps/web/app/admin/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,76172)),"/Users/dohyeonkim/k2030-platform/apps/web/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,62177,23)),"next/dist/client/components/not-found-error"]}],p=["/Users/dohyeonkim/k2030-platform/apps/web/app/admin/polls/page.tsx"],c="/admin/polls/page",h={require:r,loadChunk:()=>Promise.resolve()},x=new i.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/admin/polls/page",pathname:"/admin/polls",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},74088:(e,t,r)=>{Promise.resolve().then(r.bind(r,1417))},81830:(e,t,r)=>{Promise.resolve().then(r.bind(r,8902))},33686:(e,t,r)=>{Promise.resolve().then(r.bind(r,63315))},63812:(e,t,r)=>{Promise.resolve().then(r.bind(r,7345))},10534:(e,t,r)=>{Promise.resolve().then(r.bind(r,20194))},32691:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,75895,23)),Promise.resolve().then(r.t.bind(r,85666,23)),Promise.resolve().then(r.t.bind(r,39495,23)),Promise.resolve().then(r.t.bind(r,22492,23)),Promise.resolve().then(r.t.bind(r,27224,23)),Promise.resolve().then(r.t.bind(r,70801,23))},1417:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var i=r(65234);r(52179);var n=r(81339),o=r(78222),s=r(3438);let a=n.ZP.div`
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
`,l=(0,n.ZP)(o.default)`
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
`;function c({children:e}){let t=(0,s.usePathname)();return(0,i.jsxs)(a,{children:[(0,i.jsxs)(d,{children:[i.jsx(l,{href:"/admin/user-management",$active:(t??"").startsWith("/admin/user-management"),children:"회원관리"}),i.jsx(l,{href:"/admin/polls",$active:(t??"").startsWith("/admin/polls"),children:"투표관리"})]}),i.jsx(p,{children:e})]})}},8902:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(65234);function n({error:e,reset:t}){return(0,i.jsxs)("div",{style:{textAlign:"center",marginTop:40},children:[i.jsx("h2",{style:{color:"red",marginBottom:16},children:"오류가 발생했습니다"}),i.jsx("button",{onClick:t,style:{padding:"10px 24px",background:"#4d8888",color:"white",border:"none",borderRadius:8,cursor:"pointer"},children:"다시 시도"})]})}r(52179)},63315:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var i=r(65234),n=r(17232);function o(){return i.jsx(n.Z,{})}},7345:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var i=r(65234),n=r(52179),o=r(57367),s=r(36796),a=r(45197);function d({initial:e,categories:t,onSubmit:r,onCancel:d}){let[l,p]=(0,n.useState)(e?.question||""),[c,h]=(0,n.useState)(e?.categories?.id||t[0]?.id||1),[x,m]=(0,n.useState)(e?.options?.map(e=>e.text)||["좋아요","몰라요","싫어요"]),u=(e,t)=>{m(r=>r.map((r,i)=>i===e?t:r))};return i.jsx(o.Z,{marginBottom:"1.5rem",children:(0,i.jsxs)("form",{onSubmit:e=>(e.preventDefault(),l.trim())?c?x.some(e=>!e.trim())?alert("모든 옵션을 입력하세요"):void r({question:l,categoryId:c,options:x}):alert("카테고리를 선택하세요"):alert("질문을 입력하세요"),children:[i.jsx(a.DK,{style:{marginBottom:16},children:e?"질문 수정":"질문 등록"}),i.jsx("div",{style:{marginBottom:12},children:(0,i.jsxs)("label",{children:["질문",i.jsx("br",{}),i.jsx("input",{value:l,onChange:e=>p(e.target.value),style:{width:"100%",padding:"0.7rem",borderRadius:8,border:"1px solid #e5e7eb",marginTop:4}})]})}),i.jsx("div",{style:{marginBottom:12},children:(0,i.jsxs)("label",{children:["카테고리",i.jsx("br",{}),i.jsx("select",{value:c,onChange:e=>h(Number(e.target.value)),style:{width:"100%",padding:"0.7rem",borderRadius:8,border:"1px solid #e5e7eb",marginTop:4},children:t.map(e=>i.jsx("option",{value:e.id,children:e.name},e.id))})]})}),(0,i.jsxs)("div",{style:{marginBottom:16},children:["옵션",i.jsx("br",{}),i.jsx("div",{style:{display:"flex",gap:8,marginTop:4},children:x.map((e,t)=>i.jsx("input",{value:e,onChange:e=>u(t,e.target.value),style:{flex:1,padding:"0.7rem",borderRadius:8,border:"1px solid #e5e7eb"}},t))})]}),(0,i.jsxs)("div",{style:{display:"flex",gap:8,marginTop:8},children:[i.jsx(s.KM,{type:"submit",style:{flex:1},children:e?"수정 완료":"등록"}),i.jsx(s.KM,{type:"button",onClick:d,style:{flex:1,background:"#e5e7eb",color:"#222"},children:"취소"})]})]})})}function l(){let[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)(!0),[l,p]=(0,n.useState)(null),[c,h]=(0,n.useState)([]),[x,m]=(0,n.useState)(!1),[u,f]=(0,n.useState)(null),[g,y]=(0,n.useState)(null),[b,j]=(0,n.useState)(null),v=async()=>{try{o(!0),p(null);let e=await fetch("/api/polls");if(!e.ok)throw Error("투표 목록 불러오기 실패");let r=await e.json();t(r)}catch(e){p(e instanceof Error?e.message:"알 수 없는 오류")}finally{o(!1)}},k=async()=>{try{let e=await fetch("/api/categories");if(!e.ok)throw Error("카테고리 목록 불러오기 실패");let t=await e.json();h(t)}catch(e){h([])}};(0,n.useEffect)(()=>{v(),k()},[]);let w=async r=>{if(window.confirm("정말 삭제하시겠습니까?"))try{if(!(await fetch(`/api/polls/${r}`,{method:"DELETE"})).ok)throw Error("삭제 실패");t(e.filter(e=>e.id!==r))}catch(e){alert(e instanceof Error?e.message:"알 수 없는 오류")}},P=e=>{f(e),m(!0)},$=async e=>{try{if(u){if(!(await fetch(`/api/polls/${u.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:e.question,category_id:e.categoryId,options:e.options})})).ok)throw Error("수정 실패")}else if(!(await fetch("/api/polls",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:e.question,category_id:e.categoryId,options:e.options})})).ok)throw Error("등록 실패");m(!1),f(null),await v()}catch(e){alert(e instanceof Error?e.message:"알 수 없는 오류")}},S=async e=>{if(g===e.id){y(null),j(null);return}try{let t=await fetch(`/api/polls/${e.id}`);if(!t.ok)throw Error("상세 정보 불러오기 실패");let r=await t.json();y(e.id),j(r)}catch{y(e.id),j(e)}};return r?i.jsx("div",{children:"로딩 중..."}):l?i.jsx("div",{style:{color:"red"},children:l}):i.jsx("div",{style:{width:"100%"},children:(0,i.jsxs)("div",{style:{marginTop:16,color:"#666"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:0},children:[i.jsx(a.DK,{children:"투표 목록"}),i.jsx(s.KM,{style:{maxWidth:150,padding:"0.3rem 1.2rem",fontSize:14},onClick:()=>{f(null),m(!0)},children:"+ 질문 등록"})]}),x&&i.jsx(d,{initial:u||void 0,categories:c,onSubmit:$,onCancel:()=>{m(!1),f(null)}}),i.jsx("div",{style:{overflowX:"auto"},children:(0,i.jsxs)("table",{style:{width:"100%",marginTop:16,borderCollapse:"collapse"},children:[i.jsx("thead",{children:(0,i.jsxs)("tr",{style:{background:"#f8fafc",color:"#222",fontWeight:700},children:[i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"질문"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"카테고리"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"투표내용"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"총투표수"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"생성일"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"수정"}),i.jsx("th",{style:{padding:"10px 8px",textAlign:"left"},children:"삭제"})]})}),i.jsx("tbody",{children:e.map((e,t)=>[(0,i.jsxs)("tr",{style:{borderBottom:"1px solid #eee",cursor:"pointer"},onClick:()=>S(e),children:[i.jsx("td",{style:{padding:"10px 8px",fontWeight:600},children:e.question}),i.jsx("td",{style:{padding:"10px 8px"},children:i.jsx(a.WD,{children:e.categories?.name||"-"})}),i.jsx("td",{style:{padding:"10px 8px"},children:Array.isArray(e.options)?e.options.map(e=>"string"==typeof e?e:e.text).join(", "):"-"}),i.jsx("td",{style:{padding:"10px 8px",fontWeight:600},children:e.totalVotes??0}),i.jsx("td",{style:{padding:"10px 8px"},children:i.jsx(a.vb,{children:function(e){if(!e)return"-";let t=new Date(e);return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")} ${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`}(e.createdAt)})}),i.jsx("td",{style:{padding:"10px 8px"},children:i.jsx(s.KM,{style:{padding:"0.3rem 1.2rem",fontSize:14},onClick:t=>{t.stopPropagation(),P(e)},children:"수정"})}),i.jsx("td",{style:{padding:"10px 8px"},children:i.jsx(s.KM,{style:{padding:"0.3rem 1.2rem",fontSize:14,background:"#e5e7eb",color:"#222"},onClick:t=>{t.stopPropagation(),w(e.id)},children:"삭제"})})]},e.id),g===e.id&&b&&i.jsx("tr",{children:(0,i.jsxs)("td",{colSpan:7,style:{background:"#f8fafc",padding:20},children:[(0,i.jsxs)("div",{style:{marginBottom:10,fontWeight:700,color:"#222"},children:["총 투표수: ",b.totalVotes??0,"명"]}),i.jsx("div",{style:{maxWidth:480},children:Array.isArray(b.options)&&b.options.length>0?b.options.map((e,t)=>{let r=e.votes??0,n=b.totalVotes??0,o=n>0?r/n*100:0;return(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",marginBottom:8},children:[i.jsx("span",{style:{width:80,fontWeight:600},children:e.text}),i.jsx("div",{style:{flex:1,background:"#e5e7eb",borderRadius:8,height:18,margin:"0 8px",position:"relative"},children:i.jsx("div",{style:{width:`${o}%`,background:"#4d8888",height:"100%",borderRadius:8,transition:"width 0.3s"}})}),(0,i.jsxs)("span",{style:{minWidth:40,textAlign:"right",fontWeight:600},children:[r,"명"]})]},e.id||t)}):i.jsx("span",{children:"옵션 없음"})})]})},e.id+"-stats")])})]})})]})})}var p=r(5822);function c(){let{data:e}=(0,p.useSession)();return e?.user?e.user?.isAdmin?(0,i.jsxs)(o.Z,{children:[i.jsx("div",{style:{display:"flex",alignItems:"center",marginBottom:0},children:i.jsx(a.Dx,{children:"투표관리"})}),i.jsx("div",{style:{marginTop:16},children:i.jsx(l,{})})]}):(0,i.jsxs)("div",{style:{color:"red",fontWeight:700,textAlign:"center",marginTop:40},children:["접근 권한 없음 (관리자만 접근 가능)",i.jsx("br",{}),i.jsx("button",{style:{marginTop:24,padding:"10px 24px",fontWeight:600,borderRadius:8,background:"#4d8888",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>{window.location.href="/"},children:"일반회원 페이지로 이동"})]}):(0,i.jsxs)("div",{style:{color:"red",fontWeight:700,textAlign:"center",marginTop:40},children:["로그인이 필요합니다",i.jsx("br",{}),i.jsx("button",{style:{marginTop:24,padding:"10px 24px",fontWeight:600,borderRadius:8,background:"#4d8888",color:"#fff",border:"none",cursor:"pointer"},onClick:()=>{window.location.href="/auth/signin"},children:"로그인 페이지로 이동"})]})}},20194:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(65234),n=r(5822),o=r(81339);let s={primary:"#4d8888",primaryLight:"#4d8888",primaryDark:"#234646",background:"#ffffff",accent:"#23b1c7",text:"#222",error:"#ef4444",success:"#23c77b",like:"#336666",neutral:"#b0b8c1",dislike:"#e57373",likeBg:"#e0f7fa",neutralBg:"#f3f4f6",dislikeBg:"#ffebee"};function a({children:e}){return i.jsx(n.SessionProvider,{children:i.jsx(o.f6,{theme:s,children:e})})}},17232:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var i=r(65234),n=r(81339);let o=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100vw;
  max-width: none;
  background: #f6f8fa;
`,s=n.ZP.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
`,a=n.ZP.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #3b82f6;
  animation: bounce 1.4s infinite ease-in-out;

  &:nth-child(1) { animation-delay: -0.32s; }
  &:nth-child(2) { animation-delay: -0.16s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
`;function d(){return i.jsx(o,{children:(0,i.jsxs)(s,{children:[i.jsx(a,{}),i.jsx(a,{}),i.jsx(a,{})]})})}},36796:(e,t,r)=>{"use strict";r.d(t,{$m:()=>o,KM:()=>n,TX:()=>s,yw:()=>a});var i=r(81339);let n=i.ZP.button`
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
`,o=(0,i.ZP)(n)`
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
`,a=i.ZP.button`
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
  color: ${({theme:e,$type:t,$selected:r})=>r?"#000":"like"===t?e.primary:"neutral"===t?e.neutral:e.dislike};
  background: ${({theme:e,$type:t,$selected:r})=>r?"like"===t?e.primary:"neutral"===t?e.neutral:e.dislike:e.background};
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
`},57367:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var i=r(81339);let n=i.ZP.div`
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: none;
  padding: 2rem 1.5rem;
  margin-bottom: ${({marginBottom:e})=>e||"2rem"};
  border: none;
`},45197:(e,t,r)=>{"use strict";r.d(t,{DK:()=>o,Dx:()=>n,FN:()=>a,HN:()=>l,IK:()=>m,J7:()=>d,KH:()=>u,WD:()=>p,_1:()=>h,h4:()=>x,u6:()=>f,vb:()=>c,vx:()=>s,y:()=>g});var i=r(81339);let n=i.ZP.h1`
  font-size: 2rem;
  color: ${({theme:e})=>e.primary};
  font-weight: 900;
`,o=i.ZP.h2`
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
`,a=i.ZP.img`
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
`,h=i.ZP.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 1rem;
  background: #dbeafe;
  color: #2563eb;
`,x=i.ZP.span`
  display: inline-block;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 1rem;
  background: ${({$closed:e})=>e?"#fee2e2":"#dcfce7"};
  color: ${({$closed:e})=>e?"#dc2626":"#16a34a"};
`,m=i.ZP.span`
  color: #888;
  font-size: 0.95rem;
`,u=i.ZP.span`
  color: #a3a3a3;
  font-size: 0.95rem;
`,f=i.ZP.span`
  color: #e5e7eb;
  margin: 0 0.3rem;
`,g=i.ZP.div`
  color: #ef4444;
  margin-top: 8px;
  font-size: 13px;
`},39063:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>s});let i=(0,r(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/admin/layout.tsx`),{__esModule:n,$$typeof:o}=i,s=i.default},24689:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>s});let i=(0,r(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/admin/polls/error.tsx`),{__esModule:n,$$typeof:o}=i,s=i.default},9863:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>s});let i=(0,r(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/admin/polls/loading.tsx`),{__esModule:n,$$typeof:o}=i,s=i.default},77556:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>s});let i=(0,r(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/admin/polls/page.tsx`),{__esModule:n,$$typeof:o}=i,s=i.default},76172:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>p});var i=r(76071),n=r(97340),o=r.n(n);r(64220);let s=(0,r(90972).createProxy)(String.raw`/Users/dohyeonkim/k2030-platform/apps/web/app/providers.tsx`),{__esModule:a,$$typeof:d}=s,l=s.default,p={title:"2030",description:"2030 세대를 위한 플랫폼"};function c({children:e}){return(0,i.jsxs)("html",{lang:"ko",suppressHydrationWarning:!0,children:[(0,i.jsxs)("head",{children:[i.jsx("meta",{charSet:"utf-8"}),i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.jsx("meta",{name:"theme-color",content:"#ffffff"})]}),i.jsx("body",{className:o().className,suppressHydrationWarning:!0,children:i.jsx(l,{children:i.jsx("div",{suppressHydrationWarning:!0,children:e})})})]})}},64220:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[158,423,670],()=>r(33673));module.exports=i})();