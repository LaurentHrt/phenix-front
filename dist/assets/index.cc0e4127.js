var Ge=Object.defineProperty,Ae=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var pe=(e,t,r)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))ce.call(t,r)&&pe(e,r,t[r]);if(T)for(var r of T(t))ue.call(t,r)&&pe(e,r,t[r]);return e},ge=(e,t)=>Ae(e,Oe(t));var me=(e,t)=>{var r={};for(var i in e)ce.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&T)for(var i of T(e))t.indexOf(i)<0&&ue.call(e,i)&&(r[i]=e[i]);return r};import{s as c,u as V,j as d,a as n,L as F,d as Re,c as A,b as Te,B as L,e as j,R as z,T as b,f as Ve,g as ye,h as fe,i as Fe,r as E,k as ve,l as je,m as W,n as ze,F as Ue,o as Je,p as H,I as Q,S as X,M as O,q as Be,t as qe,v as Ke,U as We,C as xe,w as He,x as Qe,y as Xe,W as Ze,z as _e,P as Ye,A as et,D as tt,E as U,G as nt,H as rt}from"./vendor.32fb875d.js";const at=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}};at();const ot=c.header`
  display: flex;
  padding: 30px 15px;
  align-items: center;
  justify-content: space-between;

  img {
    width: 10em;
  }
`,it=c.div`
  height: 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3em;
`;var st="/assets/logo.0110d400.png",a;(function(e){e.VOID="void",e.PENDING="pending",e.UPDATING="updating",e.REJECTED="rejected",e.RESOLVED="resolved"})(a||(a={}));var S;(function(e){e.ALL="all",e.IMAGE="image",e.VIDEO="video",e.GIF="gif"})(S||(S={}));var k;(function(e){e.ALL="Tout",e.IMAGE="Image",e.VIDEO="Vid\xE9o",e.GIF="Gif"})(k||(k={}));var h;(function(e){e.LIKE="like",e.NAME="name",e.TITLE="title",e.PRICE="price",e.DATE="date",e.RANDOM="random"})(h||(h={}));var D;(function(e){e.LIKE="Popularit\xE9",e.NAME="Nom",e.TITLE="Titre",e.PRICE="Prix",e.DATE="Date",e.RANDOM="Al\xE9atoire"})(D||(D={}));const lt={status:a.VOID,data:[]},dt={status:a.VOID},J=e=>e.authentication,Ie=e=>e.photographers,Ee=e=>t=>{var r;return(r=t.photographer[e])!=null?r:{photographerId:lt}},Ce=e=>t=>{var r;return(r=t.medias[e])!=null?r:{photographerId:dt}},ct=e=>e.postMedia;function ut(){var t;const e=((t=V(J))==null?void 0:t.token)!=null;return d(ot,{children:[n(F,{to:"/",children:d(it,{children:[n("img",{src:st,alt:"Logo Phenix"}),n("h1",{children:"Phenix"})]})}),e?n(F,{to:"test",children:"Account"}):d(F,{to:"login",children:["Login",n(Re,{color:"primary"})]})]})}const B={tablet:500,smallDesktop:768,desktop:1200,maxWidth:1500},C={tablet:`(min-width: ${B.tablet}px)`,smallDesktop:`(min-width: ${B.smallDesktop}px)`,desktop:`(min-width: ${B.desktop}px)`},pt=c.main`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 20px;
  padding: 0 0 50px 0;
  @media ${C.smallDesktop} {
    padding: 0 35px 50px;
  }
`,ht="http://192.168.10.20:3001/api/photographers/",gt={};function mt(e){return async(t,r)=>{const i=Ee(e)(r()).status;if(!(i===a.PENDING||i===a.UPDATING)){t(_.fetching(e));try{const o=await fetch(ht+e),s=await o.json();if(o.ok)t(_.resolved(e,s));else throw s.error}catch(o){t(_.rejected(e,o))}}}}function Z(e,t){e[t]===void 0&&(e[t]={status:a.VOID})}const{actions:_,reducer:yt}=A({name:"photographer",initialState:gt,reducers:{fetching:{prepare:e=>({payload:{photographerId:e}}),reducer:(e,t)=>{if(Z(e,t.payload.photographerId),e[t.payload.photographerId].status===a.VOID){e[t.payload.photographerId].status=a.PENDING;return}if(e[t.payload.photographerId].status===a.REJECTED){e[t.payload.photographerId].error=void 0,e[t.payload.photographerId].status=a.PENDING;return}if(e[t.payload.photographerId].status===a.RESOLVED){e[t.payload.photographerId].status=a.UPDATING;return}}},resolved:{prepare:(e,t)=>({payload:{photographerId:e,data:t}}),reducer:(e,t)=>{if(Z(e,t.payload.photographerId),e[t.payload.photographerId].status===a.PENDING||e[t.payload.photographerId].status===a.UPDATING){e[t.payload.photographerId].data=t.payload.data,e[t.payload.photographerId].status=a.RESOLVED;return}}},rejected:{prepare:(e,t)=>({payload:{photographerId:e,error:t}}),reducer:(e,t)=>{if(Z(e,t.payload.photographerId),e[t.payload.photographerId].status===a.PENDING||e[t.payload.photographerId].status===a.UPDATING){e[t.payload.photographerId].error=t.payload.error,e[t.payload.photographerId].data=void 0,e[t.payload.photographerId].status=a.REJECTED;return}}}}}),ft="http://192.168.10.20:3001/api/medias/",vt={};function xt(e){return async(t,r)=>{const i=Ce(e)(r()).status;if(!(i===a.PENDING||i===a.UPDATING)){t(ee.fetching(e));try{const o=await fetch(ft+e),s=await o.json();if(o.ok)t(ee.resolved(e,s));else throw s.error}catch(o){t(ee.rejected(e,o))}}}}function Y(e,t){e[t]===void 0&&(e[t]={status:a.VOID})}const{actions:ee,reducer:It}=A({name:"medias",initialState:vt,reducers:{fetching:{prepare:e=>({payload:{photographerId:e}}),reducer:(e,t)=>{if(Y(e,t.payload.photographerId),e[t.payload.photographerId].status===a.VOID){e[t.payload.photographerId].status=a.PENDING;return}if(e[t.payload.photographerId].status===a.REJECTED){e[t.payload.photographerId].error=void 0,e[t.payload.photographerId].status=a.PENDING;return}if(e[t.payload.photographerId].status===a.RESOLVED){e[t.payload.photographerId].status=a.UPDATING;return}}},resolved:{prepare:(e,t)=>({payload:{photographerId:e,data:t}}),reducer:(e,t)=>{if(Y(e,t.payload.photographerId),e[t.payload.photographerId].status===a.PENDING||e[t.payload.photographerId].status===a.UPDATING){e[t.payload.photographerId].data=t.payload.data,e[t.payload.photographerId].status=a.RESOLVED;return}}},rejected:{prepare:(e,t)=>({payload:{photographerId:e,error:t}}),reducer:(e,t)=>{if(Y(e,t.payload.photographerId),e[t.payload.photographerId].status===a.PENDING||e[t.payload.photographerId].status===a.UPDATING){e[t.payload.photographerId].error=t.payload.error,e[t.payload.photographerId].data=[],e[t.payload.photographerId].status=a.REJECTED;return}}}}}),w={primary:"#630A10",secondary:"#911F27",secondaryLight:"#911F27",tertiary:"#FACE7F",quadrary:"#fafafa",cinquary:"#FCF0C8"},Et=c.div`
  width: 60vw;
  height: 60vw;
  min-width: 100px;
  min-height: 100px;
  margin: 20px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 5px 15px 1px hsl(223deg 6% 66%);
  @media ${C.tablet} {
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    margin: 30px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ct=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${w.quadrary};
  padding-bottom: 20px;

  @media ${C.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`,bt=c.h1`
  color: ${w.secondary};
  font-size: 2.25em;
  padding-top: 10px;
  padding-bottom: 5px;
  @media ${C.smallDesktop} {
    font-size: 4em;
  }
`;c.div`
  color: ${w.primary};
  font-size: 0.8125em;
  padding-bottom: 5px;
  @media ${C.smallDesktop} {
    font-size: 1.5em;
  }
`;c.div`
  font-size: 0.625em;
  padding-bottom: 5px;
  @media ${C.smallDesktop} {
    font-size: 1.125em;
  }
`;function R(i){var o=i,{text:e,onClick:t}=o,r=me(o,["text","onClick"]);const s=Te(L)(({theme:l})=>({minWidth:"initial",color:l.palette.getContrastText(w.secondary),backgroundColor:w.secondary,"&:hover":{backgroundColor:w.secondaryLight}}));return n(s,ge(he({size:"large",variant:"contained",onClick:t},r),{children:e}))}const Nt=c.div`
  height: 100%;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
`,Dt=c.div`
  display: flex;
  justify-content: space-evenly;
`;function wt({handleCloseModal:e,isOpen:t}){const r=j({initialValues:{firstname:"",lastname:"",email:"",message:""},onSubmit:(i,{setSubmitting:o})=>{alert(JSON.stringify(i,null,2))}});return z.setAppElement("#root"),n(z,{isOpen:t,contentLabel:"Formulaire de contact",onRequestClose:e,shouldCloseOnOverlayClick:!0,children:d(Nt,{children:[n("h1",{children:"Contactez-moi"}),d("form",{onSubmit:r.handleSubmit,children:[n(b,{name:"firstname",label:"Firstname",variant:"outlined",onChange:r.handleChange,value:r.values.firstname}),n(b,{name:"lastname",label:"Lastname",variant:"outlined",onChange:r.handleChange,value:r.values.lastname}),n(b,{name:"email",label:"E-mail",variant:"outlined",onChange:r.handleChange,value:r.values.email,type:"email"}),n(b,{name:"message",label:"Message",variant:"outlined",onChange:r.handleChange,value:r.values.message,type:"text",multiline:!0,rows:10,maxRows:15}),d(Dt,{children:[n(L,{onClick:e,startIcon:n(Ve,{}),size:"large",variant:"contained",children:"Fermer"}),n(L,{type:"submit",endIcon:n(ye,{}),size:"large",variant:"contained",children:"Envoyer"})]})]})]})})}const St=c.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`,$t=c.div`
  height: 40vh;
  img {
    height: 100%;
    width: auto;
  }
`,Pt=c("input")({display:"none"});var M;(function(e){e.IMAGE="image",e.VIDEO="video",e.GIF="gif"})(M||(M={}));const Lt="http://192.168.10.20:3001/api/medias/",kt={status:a.VOID,response:{},error:void 0};function Mt(e){return async(t,r)=>{if(ct(r()).status!==a.PENDING){t(te.posting(e));try{const o=new FormData;o.append("file",e.file),o.append("title",e.title),o.append("price",e.price.toString()),o.append("type",e.type),o.append("alt",e.description),o.append("photographerId",e.photographerId.toString()||"");const s=await fetch(Lt,{method:"POST",body:o}),l=await s.json();if(console.log("ici"),s.ok)console.log("repsonse OK"),t(te.resolved(l));else throw l.error}catch(o){t(te.rejected(o))}}}}const{actions:te,reducer:Gt}=A({name:"postMedia",initialState:kt,reducers:{posting:{prepare:e=>({payload:{mediaData:e}}),reducer:e=>{if(e.status===a.VOID){e.status=a.PENDING;return}if(e.status===a.REJECTED){e.error=void 0,e.status=a.PENDING;return}if(e.status===a.RESOLVED){e.status=a.PENDING;return}}},resolved:{prepare:e=>({payload:{response:e}}),reducer:(e,t)=>{if(console.log(t.payload),e.status===a.PENDING){e.response=t.payload.response,e.status=a.RESOLVED;return}}},rejected:{prepare:e=>({payload:{error:e}}),reducer:(e,t)=>{if(e.status===a.PENDING){e.error=t.payload.error,e.response={},e.status=a.REJECTED;return}}}}}),ne=()=>fe(),re=V;function be({helperText:e,label:t,name:r,onChange:i,value:o}){const[s,l]=Fe(r),[g,u]=E.exports.useState(!1),y=()=>u(!0),m=!!((!!g&&s.value.trim().length>2||l.touched)&&l.error);return n("div",{children:n(b,{label:t,onChange:i,value:o,name:r,variant:"outlined",onFocus:y,helperText:m?e:" ",error:m})})}function At({handleCloseModal:e,isOpen:t}){const r=ne(),i=ve(),o=parseInt(i.id||"0"),[s,l]=E.exports.useState(),g=je().shape({title:W().min(2,"Too short").required("Required"),description:W().min(2,"Too short").required("Required"),price:ze().required("Required").positive().integer(),file:W().required("Required")}),u=j({initialValues:{title:"",price:0,description:"",type:M.IMAGE,file:"",photographerId:0},onSubmit:async(y,{setSubmitting:m})=>r(Mt({file:y.file,title:y.title,price:y.price,type:y.type,description:y.description,photographerId:o})),validationSchema:g});return z.setAppElement("#root"),d(z,{isOpen:t,contentLabel:"Nouveau m\xE9dia",onRequestClose:e,shouldCloseOnOverlayClick:!0,children:[n("h1",{children:"Ajouter une nouvelle photo"}),n(St,{children:n(Ue,{value:u,children:d(Je,{children:[n(be,{label:"Titre",helperText:"Must be 2 characters minimum",name:"title",onChange:u.handleChange,value:u.values.title}),n(be,{label:"Description",helperText:"Must be 2 characters minimum",name:"description",onChange:u.handleChange,value:u.values.description}),d(H,{children:[n(Q,{id:"type",children:"Type"}),d(X,{name:"type",labelId:"type",id:"type",label:"Type",value:u.values.type,onChange:u.handleChange,children:[n(O,{value:M.IMAGE,children:"Image"}),n(O,{value:M.GIF,children:"Gif"}),n(O,{value:M.VIDEO,children:"Vid\xE9o"})]})]}),n(b,{name:"price",label:"Prix",variant:"outlined",onChange:u.handleChange,value:u.values.price,type:"number",inputProps:{inputMode:"numeric",pattern:"[0-9]*"}}),d("label",{children:[n(Pt,{accept:"image/*",name:"file",onChange:y=>{u.setFieldValue("file",y.currentTarget.files[0]),l(y.currentTarget.files[0])},type:"file"}),n(L,{variant:"contained",component:"span",endIcon:n(Be,{}),children:"Upload"})]}),n($t,{children:s&&n("img",{src:URL.createObjectURL(s),alt:"Preview"})}),d(qe,{direction:"row",spacing:2,children:[n(L,{variant:"outlined",startIcon:n(Ke,{}),onClick:e,children:"Annuler"}),n(L,{variant:"contained",endIcon:n(ye,{}),type:"submit",children:"Valider"})]})]})})})]})}function Ot({name:e,portrait:t,city:r,country:i,tagline:o}){const[s,l]=E.exports.useState(!1),[g,u]=E.exports.useState(!1),y=()=>{l(!0)},m=()=>{l(!1)},P=()=>{u(!0)};return d(Ct,{children:[n(wt,{isOpen:s,handleCloseModal:m}),n(At,{isOpen:g,handleCloseModal:()=>{u(!1)}}),n(Et,{children:n("img",{src:`http://192.168.10.20:3001/images/portraits/${t}`,alt:""})}),d("div",{children:[n(bt,{children:e}),d("div",{className:"city",children:[r,", ",i]}),n("div",{className:"tagline",children:o}),n(R,{onClick:y,text:"Contact"}),n(R,{onClick:P,text:"Nouveau m\xE9dia"})]})]})}const Rt=c.section`
  overflow: hidden;
  box-shadow: 0px 20px 20px 1px hsl(229deg 6% 66%);
  position: relative;
  border-radius: 20px;
  flex: auto;
  @media ${C.smallDesktop} {
    max-width: 40vw;
  }

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 300ms cubic-bezier(0.49, 0.19, 0.1, 0.99);
    @media ${C.smallDesktop} {
      max-height: 50vh;
    }
  }

  &:hover {
    & img,
    video {
      transform: scale(1.2);
    }
    & .slidingBanner {
      transform: translateY(-100px);
    }
  }
`,Tt=c.div`
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: -100px;
  padding: 10px 25px;
  transition: all 200ms cubic-bezier(0.02, 0.89, 0.45, 1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgb(2,0,36);
  background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.8001401244091386) 20%, rgba(0,0,0,0.6012605725884104) 40%, rgba(0,0,0,0.39957990031950286) 60%, rgba(0,0,0,0.19789922805059523) 80%, rgba(0,0,0,0) 100%); 
  );
`;c.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: green;
`;function Vt({title:e,filename:t,type:r,price:i,likes:o,alt:s}){const l=r==="video",g=m=>m.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),u=m=>{console.log("loaded: ",m.target.currentSrc)},y=m=>{console.log("click: ",m.target.currentSrc)};return d(Rt,{onClick:m=>y(m),children:[l?n("video",{loop:!0,autoPlay:!0,children:n("source",{src:`http://192.168.10.20:3001/images/media/small/${t}`,type:"video/mp4"})}):n("img",{src:`http://192.168.10.20:3001/images/media/medium/${t}`,alt:s,onLoad:u}),d(Tt,{className:"slidingBanner",children:[n("div",{children:e}),d("div",{children:[g(i),"\u20AC"]})]})]})}const Ft=We`
	0% {
		opacity: 0;
		transform: translateY(15px);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
`,jt="500ms",zt="cubic-bezier(0.3, 0.12, 0.22, 0.98) both";function Ut(e){let t="";for(let r=0;r<e;r+=1)t+=`

    & *:nth-child(${r}) {
      animation-delay: ${.1*r}s;
    }
     `;return xe`
    ${t}
  `}function Ne(e=50){return xe`
    > * {
      animation: ${Ft} ${jt} ${zt};
    }
    ${Ut(e)};
  `}const Jt=c.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px;
  width: 100%;
  justify-content: space-evenly;
  ${Ne()};
`;function Bt({medias:e}){const t=e;return t.length<=0?n("p",{children:"Pas de m\xE9dia displonible..."}):n(Jt,{children:t.map(i=>n(Vt,{title:i.title,filename:i.filename,type:i.type,price:i.price,likes:i.likes,alt:i.alt},i.id))})}function qt({value:e,onChange:t,items:r}){return d(H,{fullWidth:!0,children:[n(Q,{id:"filter",children:"Filtre"}),n(X,{labelId:"filter",id:"filter",value:e,label:"Filtre",onChange:o=>{t(o.target.value)},children:r.map(o=>n(O,{value:o.value,children:o.display},o.value))})]})}function Kt({value:e,onChange:t}){return n(b,{fullWidth:!0,InputProps:{startAdornment:n(He,{position:"start",children:n(Qe,{})})},name:"searchbar",label:"Rechercher",variant:"outlined",value:e,onChange:i=>{t(i.target.value)}})}function Wt({value:e,onChange:t,items:r}){return d(H,{fullWidth:!0,children:[n(Q,{id:"sort",children:"Trier par"}),n(X,{labelId:"sort",id:"sort",value:e,label:"Trier par",onChange:o=>{t(o.target.value)},children:r.map(o=>n(O,{value:o.value,children:o.display},o.value))})]})}const Ht=c.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  @media ${C.smallDesktop} {
    flex-direction: row;
  }
  z-index: 0;
`;function De({sort:e,filter:t,search:r,handleClickReset:i}){return d(Ht,{children:[e&&n(Wt,{onChange:e.handleChange,value:e.value,items:e.items}),t&&n(qt,{onChange:t.handleChange,value:t.value,items:t.items}),r&&n(Kt,{onChange:r==null?void 0:r.handleChange,value:r==null?void 0:r.value}),i&&n(R,{text:"R\xE9initialiser",onClick:i})]})}const Qt=c.div`
  display: flex;
  justify-content: center;
  margin-top: 5em;
`,Xt=c.span`
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 3px solid;
    border-color: #ff3d00 transparent;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;function ae(){return n(Qt,{children:n(Xt,{})})}function Zt(){var le,de;const e=ve(),t=e.id?parseInt(e.id):0,r=ne(),[i,o]=E.exports.useState(h.LIKE),[s,l]=E.exports.useState(S.ALL),[g,u]=E.exports.useState(""),[y,m]=E.exports.useState(!1);E.exports.useEffect(()=>{r(mt(t)),r(xt(t))},[r,t]);const P=re(Ee(t)),f=P.data,G=re(Ce(t)),q=(de=(le=G.data)==null?void 0:le.filter(Le(s)).filter(ke(g)).sort(Pe(i)).slice())!=null?de:[];y&&setTimeout(()=>m(!1),500);const K=async I=>{m(!0),o(I)},p=I=>{m(!0),l(I)},x=I=>{m(!0),u(I)},$=()=>{m(!0),o(h.LIKE),l(S.ALL),u("")},Se=[{value:S.ALL,display:k.ALL},{value:S.IMAGE,display:k.IMAGE},{value:S.GIF,display:k.GIF},{value:S.VIDEO,display:k.VIDEO}],$e=[{value:h.TITLE,display:D.TITLE},{value:h.DATE,display:D.DATE},{value:h.LIKE,display:D.LIKE},{value:h.PRICE,display:D.PRICE},{value:h.RANDOM,display:D.RANDOM}];function Pe(I){switch(I){case h.LIKE:return(v,N)=>N.likes-v.likes;case h.TITLE:return(v,N)=>v.title<N.title?-1:1;case h.DATE:return(v,N)=>new Date(v.date)>new Date(N.date)?-1:1;case h.PRICE:return(v,N)=>v.price-N.price;case h.RANDOM:return(v,N)=>.5-Math.random();default:return(v,N)=>v.likes-N.likes}}function Le(I){return I===S.ALL?()=>!0:v=>v.type===I}function ke(I){return v=>v.title.toLowerCase().includes(I.toLowerCase())||v.price.toString().includes(I.toLowerCase())||v.alt.toLowerCase().includes(I.toLowerCase())}if(P.status===a.REJECTED||G.status===a.REJECTED)return n("span",{children:"Il y a un probl\xE8me de serveur"});const Me=y||G.status===a.PENDING;return d(pt,{children:[n(Ot,{name:f==null?void 0:f.name,city:f==null?void 0:f.city,country:f==null?void 0:f.country,tagline:f==null?void 0:f.tagline,portrait:f==null?void 0:f.portrait}),n(De,{sort:{value:i,handleChange:K,items:$e},filter:{value:s,handleChange:p,items:Se},search:{value:g,handleChange:x},handleClickReset:$}),Me?n(ae,{}):n(Bt,{medias:q})]})}const _t=c.section`
  box-shadow: 0px 0px 10px 2px hsl(229deg 6% 66%);
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.34, 0.07, 0.26, 1);
  &:hover {
    transform: scale(1.05);
    img {
      transform: scale(1.1);
    }
  }
`,Yt=c.div`
  img {
    transform-origin: top;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    transition: all 300ms cubic-bezier(0.49, 0.19, 0.1, 0.99);
  }
`,en=c.div`
  color: ${w.secondary};
  font-size: 2.25em;
  padding-top: 20px;
  padding-bottom: 5px;
`,tn=c.div`
  color: ${w.primary};
  padding-bottom: 5px;
`,nn=c.div`
  color: #757575;
  font-size: 0.8em;
  padding-bottom: 5px;
`,rn=c.div`
  padding-bottom: 10px;
  color: #757575;
  font-size: 0.7em;
`;function an({id:e,name:t,city:r,country:i,tagline:o,price:s,portrait:l}){return n(F,{to:`/profile/${e}`,children:d(_t,{children:[n(Yt,{children:n("img",{src:l,alt:""})}),n(en,{children:t}),d(tn,{children:[r,", ",i]}),n(nn,{children:o}),n(rn,{children:s})]})})}const on="http://192.168.10.20:3001/api/photographers",sn={status:a.VOID,data:[],error:void 0};async function ln(e,t){const r=Ie(t()).status;if(!(r===a.PENDING||r===a.UPDATING)){e(oe.fetching());try{const i=await fetch(on),o=await i.json();if(i.ok)e(oe.resolved(o));else throw o.error}catch(i){e(oe.rejected(i))}}}const{actions:oe,reducer:dn}=A({name:"photographers",initialState:sn,reducers:{fetching:e=>{if(e.status===a.VOID){e.status=a.PENDING;return}if(e.status===a.REJECTED){e.error=void 0,e.status=a.PENDING;return}if(e.status===a.RESOLVED){e.status=a.UPDATING;return}},resolved:(e,t)=>{if(e.status===a.PENDING||e.status===a.UPDATING){e.data=t.payload,e.status=a.RESOLVED;return}},rejected:(e,t)=>{if(e.status===a.PENDING||e.status===a.UPDATING){e.status=a.REJECTED,e.error=t.payload,e.data=[];return}}}}),cn=c.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  row-gap: 40px;
  margin: 20px 0px;
  ${Ne()};

  @media ${C.smallDesktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${C.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;function un(){const e=ne(),[t,r]=E.exports.useState(h.NAME),[i,o]=E.exports.useState(""),[s,l]=E.exports.useState(!1);E.exports.useEffect(()=>{e(ln)},[e]);const g=re(Ie),u=g.data.filter(q(i)).sort(G(t)).slice();s&&setTimeout(()=>l(!1),500);const y=p=>{l(!0),r(p)},m=p=>{l(!0),o(p)},P=()=>{l(!0),r(h.NAME),o("")},f=[{value:h.NAME,display:D.NAME},{value:h.PRICE,display:D.PRICE},{value:h.RANDOM,display:D.RANDOM}];function G(p){switch(p){case h.NAME:return(x,$)=>x.name<$.name?-1:1;case h.PRICE:return(x,$)=>x.price-$.price;case h.RANDOM:return(x,$)=>.5-Math.random();default:return(x,$)=>x.name<$.name?-1:1}}function q(p){return x=>x.name.toLowerCase().includes(p.toLowerCase())||x.country.toLowerCase().includes(p.toLowerCase())||x.city.toLowerCase().includes(p.toLowerCase())||x.price.toString().includes(p.toLowerCase())||x.tagline.toLowerCase().includes(p.toLowerCase())}if(g.status===a.REJECTED)return n("span",{children:"Il y a un probl\xE8me de serveur"});const K=s||g.status===a.PENDING;return d(Xe,{children:[n(De,{sort:{value:t,items:f,handleChange:y},search:{value:i,handleChange:m},handleClickReset:P}),K?n(ae,{}):n(cn,{children:u==null?void 0:u.map(p=>n(an,{id:p.id,name:p.name,city:p.city,country:p.country,tagline:p.tagline,price:p.price,portrait:`http://192.168.10.20:3001/images/portraits/${p.portrait}`},p.id))})]})}const pn=Ze`
#root {
  max-width: ${B.maxWidth}px;
  margin: auto;
}

  body {
    font-family: 'DM Sans', sans-serif;
    margin: 8px 20px;
  }

  a,
  a:visited {
    text-decoration: none;
    /* display: contents; */
    color: inital;
  }

  h1 {
    color: ${w.primary};
    margin: 0;
    font-weight: 400;
  }
  
  nav {
    color: ${w.primary};
    grid-column: 1/3;
    grid-row: 2;
    justify-content: center;
  
    @media ${C.desktop} {
      grid-column: auto;
      grid-row: auto;
    }
  }

`,hn="http://192.168.10.20:3001/api/auth/login",we={status:a.VOID,token:"",error:void 0},gn=JSON.parse(sessionStorage.getItem("authenticationState")||"{}");function mn(e,t){return async(r,i)=>{const o=J(i()).status;if(!(o===a.PENDING||o===a.UPDATING)){r(ie.fetching(e,t));try{const s=JSON.stringify({email:e,password:t}),l=await fetch(hn,{method:"POST",headers:{"Content-type":"application/json"},body:s}),g=await l.json();if(l.ok)r(ie.resolved(g.token));else throw g.error}catch(s){r(ie.rejected(s))}}}}const{actions:ie,reducer:yn}=A({name:"authentication",initialState:gn||we,reducers:{fetching:{prepare:(e,t)=>({payload:{username:e,password:t}}),reducer:e=>{if(e.status===a.VOID){e.status=a.PENDING;return}if(e.status===a.REJECTED){e.error=null,e.status=a.PENDING;return}if(e.status===a.RESOLVED){e.status=a.UPDATING;return}}},logout:()=>(sessionStorage.clear(),we),resolved:{prepare:e=>({payload:e}),reducer:(e,t)=>{if(e.status===a.PENDING||e.status===a.UPDATING){e.token=t.payload,e.status=a.RESOLVED;return}}},rejected:{prepare:e=>({payload:e}),reducer:(e,t)=>{if(e.status=a.PENDING||e.status===a.UPDATING){e.error=t.payload,e.token=null,e.status=a.REJECTED;return}}}}}),fn=c.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 4em;

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  h1 {
    text-align: center;
    margin-bottom: 1em;
  }

  @media ${C.smallDesktop} {
    flex-direction: row;
  }
`,vn=c.div``,xn=c.div``,In={email:"",password:""},En={name:"",email:"",password:""};function Cn(){const e=fe(),t=V(J).status,r=V(J).error,i=(g,{setSubmitting:u})=>{e(mn(g.email,g.password))},o=(g,{setSubmitting:u})=>{alert("login")},s=j({initialValues:In,onSubmit:i}),l=j({initialValues:En,onSubmit:o});return d(fn,{children:[d(vn,{children:[n("h1",{children:"Login"}),d("form",{onSubmit:s.handleSubmit,children:[n(b,{name:"email",label:"E-mail",variant:"outlined",onChange:s.handleChange,value:s.values.email,type:"email"}),n(b,{name:"password",label:"password",variant:"outlined",onChange:s.handleChange,value:s.values.password}),n(R,{onClick:s.handleSubmit,text:"Login"})]}),t===a.PENDING&&n(ae,{}),t===a.REJECTED&&n("div",{children:r})]}),d(xn,{children:[n("h1",{children:"Signin"}),d("form",{onSubmit:l.handleSubmit,children:[n(b,{name:"name",label:"Nom",variant:"outlined",onChange:l.handleChange,value:l.values.name}),n(b,{name:"email",label:"E-mail",variant:"outlined",onChange:l.handleChange,value:l.values.email,type:"email"}),n(b,{name:"password",label:"password",variant:"outlined",onChange:l.handleChange,value:l.values.password,type:"password"}),n(R,{onClick:l.handleSubmit,text:"Signin"})]})]})]})}function bn(){return n("div",{children:"404 not found"})}const se=_e({reducer:{photographers:dn,photographer:yt,medias:It,postMedia:Gt,authentication:yn}});se.subscribe(()=>{sessionStorage.setItem("authenticationState",JSON.stringify(se.getState().authentication))});function Nn(){return n(Ye,{store:se,children:d(et,{children:[n(pn,{}),n(ut,{}),d(tt,{children:[n(U,{path:"/",element:n(un,{})}),n(U,{path:"/login",element:n(Cn,{})}),n(U,{path:"/profile/:id",element:n(Zt,{})}),n(U,{path:"*",element:n(bn,{})})]})]})})}nt.render(n(rt.StrictMode,{children:n(Nn,{})}),document.getElementById("root"));
