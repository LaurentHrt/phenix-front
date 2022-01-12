import{s as c,u as re,j as l,a,L as V,d as be,c as A,b as De,B as J,e as R,R as T,T as I,f as Ne,g as oe,F as B,I as W,S as K,M as O,h as Se,i as we,k as $e,r as E,U as Pe,C as ie,l as ke,m as Le,n as se,o as Ge,W as Me,p as Ae,P as Oe,q as Ve,t as Re,v as F,w as Te,x as Fe}from"./vendor.22638920.js";const je=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}};je();const Ue=c.header`
  display: flex;
  padding: 30px 15px;
  align-items: center;
  justify-content: space-between;

  img {
    width: 10em;
  }
`,ze=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3em;
`;var Je="/assets/logo.0110d400.png",r;(function(e){e.VOID="void",e.PENDING="pending",e.UPDATING="updating",e.REJECTED="rejected",e.RESOLVED="resolved"})(r||(r={}));var S;(function(e){e.ALL="all",e.IMAGE="image",e.VIDEO="video",e.GIF="gif"})(S||(S={}));var k;(function(e){e.ALL="Tout",e.IMAGE="Image",e.VIDEO="Vid\xE9o",e.GIF="Gif"})(k||(k={}));var p;(function(e){e.LIKE="like",e.NAME="name",e.TITLE="title",e.PRICE="price",e.DATE="date",e.RANDOM="random"})(p||(p={}));var b;(function(e){e.LIKE="Popularit\xE9",e.NAME="Nom",e.TITLE="Titre",e.PRICE="Prix",e.DATE="Date",e.RANDOM="Al\xE9atoire"})(b||(b={}));const Be={status:r.VOID,data:[]},We={status:r.VOID},le=e=>e.authentication,de=e=>e.photographers,ce=e=>t=>{var o;return(o=t.photographer[e])!=null?o:{photographerId:Be}},ue=e=>t=>{var o;return(o=t.medias[e])!=null?o:{photographerId:We}},Ke=e=>e.postMedia;function qe(){var t;const e=((t=re(le))==null?void 0:t.token)!=null;return l(Ue,{children:[a(V,{to:"/",children:l(ze,{children:[a("img",{src:Je,alt:"Logo Phenix"}),a("h1",{children:"Phenix"})]})}),e?a(V,{to:"test",children:"Account"}):l(V,{to:"login",children:["Login",a(be,{color:"primary"})]})]})}const j={tablet:500,smallDesktop:768,desktop:1200,maxWidth:1500},x={tablet:`(min-width: ${j.tablet}px)`,smallDesktop:`(min-width: ${j.smallDesktop}px)`,desktop:`(min-width: ${j.desktop}px)`},He=c.main`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 20px;
  padding: 0 0 50px 0;
  @media ${x.smallDesktop} {
    padding: 0 35px 50px;
  }
`,Qe="http://192.168.10.20:3001/api/photographers/",Xe={};function Ze(e){return async(t,o)=>{const i=ce(e)(o()).status;if(!(i===r.PENDING||i===r.UPDATING)){t(H.fetching(e));try{const n=await fetch(Qe+e),s=await n.json();if(n.ok)t(H.resolved(e,s));else throw s.error}catch(n){t(H.rejected(e,n))}}}}function q(e,t){e[t]===void 0&&(e[t]={status:r.VOID})}const{actions:H,reducer:_e}=A({name:"photographer",initialState:Xe,reducers:{fetching:{prepare:e=>({payload:{photographerId:e}}),reducer:(e,t)=>{if(q(e,t.payload.photographerId),e[t.payload.photographerId].status===r.VOID){e[t.payload.photographerId].status=r.PENDING;return}if(e[t.payload.photographerId].status===r.REJECTED){e[t.payload.photographerId].error=void 0,e[t.payload.photographerId].status=r.PENDING;return}if(e[t.payload.photographerId].status===r.RESOLVED){e[t.payload.photographerId].status=r.UPDATING;return}}},resolved:{prepare:(e,t)=>({payload:{photographerId:e,data:t}}),reducer:(e,t)=>{if(q(e,t.payload.photographerId),e[t.payload.photographerId].status===r.PENDING||e[t.payload.photographerId].status===r.UPDATING){e[t.payload.photographerId].data=t.payload.data,e[t.payload.photographerId].status=r.RESOLVED;return}}},rejected:{prepare:(e,t)=>({payload:{photographerId:e,error:t}}),reducer:(e,t)=>{if(q(e,t.payload.photographerId),e[t.payload.photographerId].status===r.PENDING||e[t.payload.photographerId].status===r.UPDATING){e[t.payload.photographerId].error=t.payload.error,e[t.payload.photographerId].data=void 0,e[t.payload.photographerId].status=r.REJECTED;return}}}}}),Ye="http://192.168.10.20:3001/api/medias/",et={};function tt(e){return async(t,o)=>{const i=ue(e)(o()).status;if(!(i===r.PENDING||i===r.UPDATING)){t(X.fetching(e));try{const n=await fetch(Ye+e),s=await n.json();if(n.ok)t(X.resolved(e,s));else throw s.error}catch(n){t(X.rejected(e,n))}}}}function Q(e,t){e[t]===void 0&&(e[t]={status:r.VOID})}const{actions:X,reducer:at}=A({name:"medias",initialState:et,reducers:{fetching:{prepare:e=>({payload:{photographerId:e}}),reducer:(e,t)=>{if(Q(e,t.payload.photographerId),e[t.payload.photographerId].status===r.VOID){e[t.payload.photographerId].status=r.PENDING;return}if(e[t.payload.photographerId].status===r.REJECTED){e[t.payload.photographerId].error=void 0,e[t.payload.photographerId].status=r.PENDING;return}if(e[t.payload.photographerId].status===r.RESOLVED){e[t.payload.photographerId].status=r.UPDATING;return}}},resolved:{prepare:(e,t)=>({payload:{photographerId:e,data:t}}),reducer:(e,t)=>{if(Q(e,t.payload.photographerId),e[t.payload.photographerId].status===r.PENDING||e[t.payload.photographerId].status===r.UPDATING){e[t.payload.photographerId].data=t.payload.data,e[t.payload.photographerId].status=r.RESOLVED;return}}},rejected:{prepare:(e,t)=>({payload:{photographerId:e,error:t}}),reducer:(e,t)=>{if(Q(e,t.payload.photographerId),e[t.payload.photographerId].status===r.PENDING||e[t.payload.photographerId].status===r.UPDATING){e[t.payload.photographerId].error=t.payload.error,e[t.payload.photographerId].data=[],e[t.payload.photographerId].status=r.REJECTED;return}}}}}),D={primary:"#630A10",secondary:"#911F27",secondaryLight:"#911F27",tertiary:"#FACE7F",quadrary:"#fafafa",cinquary:"#FCF0C8"},nt=c.div`
  width: 60vw;
  height: 60vw;
  min-width: 100px;
  min-height: 100px;
  margin: 20px;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 5px 15px 1px hsl(223deg 6% 66%);
  @media ${x.tablet} {
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
`,rt=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${D.quadrary};
  padding-bottom: 20px;

  @media ${x.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`,ot=c.h1`
  color: ${D.secondary};
  font-size: 2.25em;
  padding-top: 10px;
  padding-bottom: 5px;
  @media ${x.smallDesktop} {
    font-size: 4em;
  }
`;c.div`
  color: ${D.primary};
  font-size: 0.8125em;
  padding-bottom: 5px;
  @media ${x.smallDesktop} {
    font-size: 1.5em;
  }
`;c.div`
  font-size: 0.625em;
  padding-bottom: 5px;
  @media ${x.smallDesktop} {
    font-size: 1.125em;
  }
`;function L({text:e,onClick:t}){const o=De(J)(({theme:i})=>({minWidth:"initial",color:i.palette.getContrastText(D.secondary),backgroundColor:D.secondary,"&:hover":{backgroundColor:D.secondaryLight}}));return a(o,{size:"large",variant:"contained",onClick:t,children:e})}const it=c.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;function st({handleCloseModal:e,isOpen:t}){const o=R({initialValues:{firstname:"",lastname:"",email:"",message:""},onSubmit:(i,{setSubmitting:n})=>{alert(JSON.stringify(i,null,2))}});return T.setAppElement("#root"),a(T,{isOpen:t,contentLabel:"Formulaire de contact",onRequestClose:e,shouldCloseOnOverlayClick:!0,children:l(it,{children:[a("button",{onClick:e,children:"Fermer"}),l("form",{onSubmit:o.handleSubmit,children:[a(I,{name:"firstname",label:"Firstname",variant:"outlined",onChange:o.handleChange,value:o.values.firstname}),a(I,{name:"lastname",label:"Lastname",variant:"outlined",onChange:o.handleChange,value:o.values.lastname}),a(I,{name:"email",label:"E-mail",variant:"outlined",onChange:o.handleChange,value:o.values.email,type:"email"}),a(I,{name:"message",label:"Message",variant:"outlined",onChange:o.handleChange,value:o.values.message,type:"text"}),a(L,{onClick:o.handleSubmit,text:"Envoyer"})]})]})})}const lt=c.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;var G;(function(e){e.IMAGE="image",e.VIDEO="video",e.GIF="gif"})(G||(G={}));const dt="http://192.168.10.20:3001/api/medias/",ct={status:r.VOID,response:{},error:void 0};function ut(e){return async(t,o)=>{if(Ke(o()).status===r.PENDING)return;const n=new FormData;n.append("file",e.file),n.append("title",e.title),n.append("price",e.price.toString()),n.append("type",e.type),n.append("alt",e.description),n.append("photographerId",e.photographerId.toString()||""),t(Z.posting(n));try{const s=await Ne.post(dt,n),d=await s.data;if(s)t(Z.resolved);else throw d.error}catch(s){t(Z.rejected(s))}}}const{actions:Z,reducer:pt}=A({name:"postMedia",initialState:ct,reducers:{posting:{prepare:e=>({payload:{data:e}}),reducer:(e,t)=>{if(e.status===r.VOID){e.status=r.PENDING;return}if(e.status===r.REJECTED){e.error=void 0,e.status=r.PENDING;return}if(e.status===r.RESOLVED){e.status=r.PENDING;return}}},resolved:{prepare:e=>({payload:{response:e}}),reducer:(e,t)=>{if(e.status===r.PENDING){e.response=t.payload.response,e.status=r.RESOLVED;return}}},rejected:{prepare:e=>({payload:{error:e}}),reducer:(e,t)=>{if(e.status===r.PENDING){e.error=t.payload.error,e.response={},e.status=r.REJECTED;return}}}}});function ht({handleCloseModal:e,isOpen:t}){const o=oe(),i=parseInt(o.id||"0"),n=R({initialValues:{title:"",price:0,description:"",type:G.IMAGE,file:"",photographerId:0},onSubmit:async(s,{setSubmitting:d})=>{ut({file:s.file,title:s.title,price:s.price,type:s.type,description:s.description,photographerId:i})}});return T.setAppElement("#root"),l(T,{isOpen:t,contentLabel:"Nouveau m\xE9dia",onRequestClose:e,shouldCloseOnOverlayClick:!0,children:[a("h1",{children:"Ajouter une nouvelle photo"}),a(lt,{children:l("form",{onSubmit:n.handleSubmit,children:[a(I,{name:"title",label:"Titre",variant:"outlined",onChange:n.handleChange,value:n.values.title}),a(I,{name:"description",label:"Description",variant:"outlined",onChange:n.handleChange,value:n.values.description}),l(B,{children:[a(W,{id:"type",children:"Type"}),l(K,{name:"type",labelId:"type",id:"type",label:"Type",value:n.values.type,onChange:n.handleChange,children:[a(O,{value:G.IMAGE,children:"Image"}),a(O,{value:G.GIF,children:"Gif"}),a(O,{value:G.VIDEO,children:"Vid\xE9o"})]})]}),a(I,{name:"price",label:"Prix",variant:"outlined",onChange:n.handleChange,value:n.values.price}),a("input",{name:"file",onChange:s=>{n.setFieldValue("file",s.currentTarget.files[0])},type:"file"}),l(Se,{direction:"row",spacing:2,children:[a(J,{variant:"outlined",startIcon:a(we,{}),onClick:e,children:"Annuler"}),a(J,{variant:"contained",endIcon:a($e,{}),onClick:()=>n.handleSubmit(),children:"Valider"})]})]})})]})}function gt({name:e,portrait:t,city:o,country:i,tagline:n}){const[s,d]=E.exports.useState(!1),[h,v]=E.exports.useState(!1),w=()=>{d(!0)},g=()=>{d(!1)},P=()=>{v(!0)};return l(rt,{children:[a(st,{isOpen:s,handleCloseModal:g}),a(ht,{isOpen:h,handleCloseModal:()=>{v(!1)}}),a(nt,{children:a("img",{src:`http://192.168.10.20:3001/images/portraits/${t}`,alt:""})}),l("div",{children:[a(ot,{children:e}),l("div",{className:"city",children:[o,", ",i]}),a("div",{className:"tagline",children:n}),a(L,{onClick:w,text:"Contact"}),a(L,{onClick:P,text:"Nouveau m\xE9dia"})]})]})}const mt=c.section`
  overflow: hidden;
  box-shadow: 0px 20px 20px 1px hsl(229deg 6% 66%);
  position: relative;
  border-radius: 20px;
  flex: auto;
  @media ${x.smallDesktop} {
    max-width: 40vw;
  }

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 300ms cubic-bezier(0.49, 0.19, 0.1, 0.99);
    @media ${x.smallDesktop} {
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
`,yt=c.div`
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
`;function ft({title:e,filename:t,type:o,price:i,likes:n,alt:s}){const d=o==="video",h=g=>g.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "),v=g=>{console.log("loaded: ",g.target.currentSrc)},w=g=>{console.log("click: ",g.target.currentSrc)};return l(mt,{onClick:g=>w(g),children:[d?a("video",{loop:!0,autoPlay:!0,children:a("source",{src:`http://192.168.10.20:3001/images/media/small/${t}`,type:"video/mp4"})}):a("img",{src:`http://192.168.10.20:3001/images/media/medium/${t}`,alt:s,onLoad:v}),l(yt,{className:"slidingBanner",children:[a("div",{children:e}),l("div",{children:[h(i),"\u20AC"]})]})]})}const vt=Pe`
	0% {
		opacity: 0;
		transform: translateY(15px);
	}
	100% {
		opacity: 1;
		transform: translateY(0px);
	}
`,It="500ms",xt="cubic-bezier(0.3, 0.12, 0.22, 0.98) both";function Et(e){let t="";for(let o=0;o<e;o+=1)t+=`

    & *:nth-child(${o}) {
      animation-delay: ${.1*o}s;
    }
     `;return ie`
    ${t}
  `}function pe(e=50){return ie`
    > * {
      animation: ${vt} ${It} ${xt};
    }
    ${Et(e)};
  `}const Ct=c.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px;
  width: 100%;
  justify-content: space-evenly;
  ${pe()};
`;function bt({medias:e}){const t=e;return t.length<=0?a("p",{children:"Pas de m\xE9dia displonible..."}):a(Ct,{children:t.map(i=>a(ft,{title:i.title,filename:i.filename,type:i.type,price:i.price,likes:i.likes,alt:i.alt},i.id))})}function Dt({value:e,onChange:t,items:o}){return l(B,{fullWidth:!0,children:[a(W,{id:"filter",children:"Filtre"}),a(K,{labelId:"filter",id:"filter",value:e,label:"Filtre",onChange:n=>{t(n.target.value)},children:o.map(n=>a(O,{value:n.value,children:n.display},n.value))})]})}function Nt({value:e,onChange:t}){return a(I,{fullWidth:!0,InputProps:{startAdornment:a(ke,{position:"start",children:a(Le,{})})},name:"searchbar",label:"Rechercher",variant:"outlined",value:e,onChange:i=>{t(i.target.value)}})}function St({value:e,onChange:t,items:o}){return l(B,{fullWidth:!0,children:[a(W,{id:"sort",children:"Trier par"}),a(K,{labelId:"sort",id:"sort",value:e,label:"Trier par",onChange:n=>{t(n.target.value)},children:o.map(n=>a(O,{value:n.value,children:n.display},n.value))})]})}const wt=c.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
  @media ${x.smallDesktop} {
    flex-direction: row;
  }
  z-index: 0;
`;function he({sort:e,filter:t,search:o,handleClickReset:i}){return l(wt,{children:[e&&a(St,{onChange:e.handleChange,value:e.value,items:e.items}),t&&a(Dt,{onChange:t.handleChange,value:t.value,items:t.items}),o&&a(Nt,{onChange:o==null?void 0:o.handleChange,value:o==null?void 0:o.value}),i&&a(L,{text:"R\xE9initialiser",onClick:i})]})}const $t=c.div`
  display: flex;
  justify-content: center;
  margin-top: 5em;
`,Pt=c.span`
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
`;function ge(){return a($t,{children:a(Pt,{})})}const me=()=>se(),_=re;function kt(){var ae,ne;const e=oe(),t=e.id?parseInt(e.id):0,o=me(),[i,n]=E.exports.useState(p.LIKE),[s,d]=E.exports.useState(S.ALL),[h,v]=E.exports.useState(""),[w,g]=E.exports.useState(!1);E.exports.useEffect(()=>{o(Ze(t)),o(tt(t))},[o,t]);const P=_(ce(t)),N=P.data,M=_(ue(t)),U=(ne=(ae=M.data)==null?void 0:ae.filter(xe(s)).filter(Ee(h)).sort(Ie(i)).slice())!=null?ne:[];w&&setTimeout(()=>g(!1),500);const z=async f=>{g(!0),n(f)},u=f=>{g(!0),d(f)},y=f=>{g(!0),v(f)},$=()=>{g(!0),n(p.LIKE),d(S.ALL),v("")},fe=[{value:S.ALL,display:k.ALL},{value:S.IMAGE,display:k.IMAGE},{value:S.GIF,display:k.GIF},{value:S.VIDEO,display:k.VIDEO}],ve=[{value:p.TITLE,display:b.TITLE},{value:p.DATE,display:b.DATE},{value:p.LIKE,display:b.LIKE},{value:p.PRICE,display:b.PRICE},{value:p.RANDOM,display:b.RANDOM}];function Ie(f){switch(f){case p.LIKE:return(m,C)=>C.likes-m.likes;case p.TITLE:return(m,C)=>m.title<C.title?-1:1;case p.DATE:return(m,C)=>new Date(m.date)>new Date(C.date)?-1:1;case p.PRICE:return(m,C)=>m.price-C.price;case p.RANDOM:return(m,C)=>.5-Math.random();default:return(m,C)=>m.likes-C.likes}}function xe(f){return f===S.ALL?()=>!0:m=>m.type===f}function Ee(f){return m=>m.title.toLowerCase().includes(f.toLowerCase())||m.price.toString().includes(f.toLowerCase())||m.alt.toLowerCase().includes(f.toLowerCase())}if(P.status===r.REJECTED||M.status===r.REJECTED)return a("span",{children:"Il y a un probl\xE8me de serveur"});const Ce=w||M.status===r.PENDING;return l(He,{children:[N&&a(gt,{name:N.name,city:N.city,country:N.country,tagline:N.tagline,portrait:N.portrait}),a(he,{sort:{value:i,handleChange:z,items:ve},filter:{value:s,handleChange:u,items:fe},search:{value:h,handleChange:y},handleClickReset:$}),Ce?a(ge,{}):a(bt,{medias:U})]})}const Lt=c.section`
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
`,Gt=c.div`
  img {
    transform-origin: top;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    transition: all 300ms cubic-bezier(0.49, 0.19, 0.1, 0.99);
  }
`,Mt=c.div`
  color: ${D.secondary};
  font-size: 2.25em;
  padding-top: 20px;
  padding-bottom: 5px;
`,At=c.div`
  color: ${D.primary};
  padding-bottom: 5px;
`,Ot=c.div`
  color: #757575;
  font-size: 0.8em;
  padding-bottom: 5px;
`,Vt=c.div`
  padding-bottom: 10px;
  color: #757575;
  font-size: 0.7em;
`;function Rt({id:e,name:t,city:o,country:i,tagline:n,price:s,portrait:d}){return a(V,{to:`/profile/${e}`,children:l(Lt,{children:[a(Gt,{children:a("img",{src:d,alt:""})}),a(Mt,{children:t}),l(At,{children:[o,", ",i]}),a(Ot,{children:n}),a(Vt,{children:s})]})})}const Tt="http://192.168.10.20:3001/api/photographers",Ft={status:r.VOID,data:[],error:void 0};async function jt(e,t){const o=de(t()).status;if(!(o===r.PENDING||o===r.UPDATING)){e(Y.fetching());try{const i=await fetch(Tt),n=await i.json();if(i.ok)e(Y.resolved(n));else throw n.error}catch(i){e(Y.rejected(i))}}}const{actions:Y,reducer:Ut}=A({name:"photographers",initialState:Ft,reducers:{fetching:e=>{if(e.status===r.VOID){e.status=r.PENDING;return}if(e.status===r.REJECTED){e.error=void 0,e.status=r.PENDING;return}if(e.status===r.RESOLVED){e.status=r.UPDATING;return}},resolved:(e,t)=>{if(e.status===r.PENDING||e.status===r.UPDATING){e.data=t.payload,e.status=r.RESOLVED;return}},rejected:(e,t)=>{if(e.status===r.PENDING||e.status===r.UPDATING){e.status=r.REJECTED,e.error=t.payload,e.data=[];return}}}}),zt=c.section`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 40px;
  row-gap: 40px;
  margin: 20px 0px;
  ${pe()};

  @media ${x.smallDesktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${x.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;function Jt(){const e=me(),[t,o]=E.exports.useState(p.NAME),[i,n]=E.exports.useState(""),[s,d]=E.exports.useState(!1);E.exports.useEffect(()=>{e(jt)},[e]);const h=_(de),v=h.data.filter(U(i)).sort(M(t)).slice();s&&setTimeout(()=>d(!1),500);const w=u=>{d(!0),o(u)},g=u=>{d(!0),n(u)},P=()=>{d(!0),o(p.NAME),n("")},N=[{value:p.NAME,display:b.NAME},{value:p.PRICE,display:b.PRICE},{value:p.RANDOM,display:b.RANDOM}];function M(u){switch(u){case p.NAME:return(y,$)=>y.name<$.name?-1:1;case p.PRICE:return(y,$)=>y.price-$.price;case p.RANDOM:return(y,$)=>.5-Math.random();default:return(y,$)=>y.name<$.name?-1:1}}function U(u){return y=>y.name.toLowerCase().includes(u.toLowerCase())||y.country.toLowerCase().includes(u.toLowerCase())||y.city.toLowerCase().includes(u.toLowerCase())||y.price.toString().includes(u.toLowerCase())||y.tagline.toLowerCase().includes(u.toLowerCase())}if(h.status===r.REJECTED)return a("span",{children:"Il y a un probl\xE8me de serveur"});const z=s||h.status===r.PENDING;return l(Ge,{children:[a(he,{sort:{value:t,items:N,handleChange:w},search:{value:i,handleChange:g},handleClickReset:P}),z?a(ge,{}):a(zt,{children:v==null?void 0:v.map(u=>a(Rt,{id:u.id,name:u.name,city:u.city,country:u.country,tagline:u.tagline,price:u.price,portrait:`http://192.168.10.20:3001/images/portraits/${u.portrait}`},u.id))})]})}const Bt=Me`
#root {
  max-width: ${j.maxWidth}px;
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
    color: ${D.primary};
    margin: 0;
    font-weight: 400;
  }
  
  nav {
    color: ${D.primary};
    grid-column: 1/3;
    grid-row: 2;
    justify-content: center;
  
    @media ${x.desktop} {
      grid-column: auto;
      grid-row: auto;
    }
  }

`,Wt="http://192.168.10.20:3001/api/auth/login",ye={status:r.VOID,token:"",error:void 0},Kt=JSON.parse(sessionStorage.getItem("authenticationState")||"{}");function qt(e,t){return async(o,i)=>{const n=le(i()).status;if(!(n===r.PENDING||n===r.UPDATING)){o(ee.fetching(e,t));try{const s=JSON.stringify({email:e,password:t}),d=await fetch(Wt,{method:"POST",headers:{"Content-type":"application/json"},body:s}),h=await d.json();if(d.ok)o(ee.resolved(h.token));else throw h.error}catch(s){o(ee.rejected(s))}}}}const{actions:ee,reducer:Ht}=A({name:"authentication",initialState:Kt||ye,reducers:{fetching:{prepare:(e,t)=>({payload:{username:e,password:t}}),reducer:e=>{if(e.status===r.VOID){e.status=r.PENDING;return}if(e.status===r.REJECTED){e.error=null,e.status=r.PENDING;return}if(e.status===r.RESOLVED){e.status=r.UPDATING;return}}},logout:()=>(sessionStorage.clear(),ye),resolved:{prepare:e=>({payload:e}),reducer:(e,t)=>{if(e.status===r.PENDING||e.status===r.UPDATING){e.token=t.payload,e.status=r.RESOLVED;return}}},rejected:{prepare:e=>({payload:e}),reducer:(e,t)=>{if(e.status=r.PENDING||e.status===r.UPDATING){e.error=t.payload,e.token=null,e.status=r.REJECTED;return}}}}}),Qt={email:"",password:""},Xt={name:"",email:"",password:""};function Zt(){const e=se(),t=(h,{setSubmitting:v})=>{e(qt(h.email,h.password))},o=(h,{setSubmitting:v})=>{alert("login")},i=R({initialValues:Qt,onSubmit:t}),n=R({initialValues:Xt,onSubmit:o});return l("div",{children:[a(()=>l("div",{children:[a("h1",{children:"Login"}),l("form",{onSubmit:i.handleSubmit,children:[a(I,{name:"email",label:"E-mail",variant:"outlined",onChange:i.handleChange,value:i.values.email,type:"email"}),a(I,{name:"password",label:"password",variant:"outlined",onChange:i.handleChange,value:i.values.password}),a(L,{onClick:i.handleSubmit,text:"Login"})]})]}),{}),a(()=>l("div",{children:[a("h1",{children:"Signin"}),l("form",{onSubmit:n.handleSubmit,children:[a(I,{name:"name",label:"Nom",variant:"outlined",onChange:n.handleChange,value:n.values.name}),a(I,{name:"email",label:"E-mail",variant:"outlined",onChange:n.handleChange,value:n.values.email,type:"email"}),a(I,{name:"password",label:"password",variant:"outlined",onChange:n.handleChange,value:n.values.password,type:"password"}),a(L,{onClick:n.handleSubmit,text:"Signin"})]})]}),{})]})}function _t(){return a("div",{children:"404 not found"})}const te=Ae({reducer:{photographers:Ut,photographer:_e,medias:at,postMedia:pt,authentication:Ht}});te.subscribe(()=>{sessionStorage.setItem("authenticationState",JSON.stringify(te.getState().authentication))});function Yt(){return a(Oe,{store:te,children:l(Ve,{children:[a(Bt,{}),a(qe,{}),l(Re,{children:[a(F,{path:"/",element:a(Jt,{})}),a(F,{path:"/login",element:a(Zt,{})}),a(F,{path:"/profile/:id",element:a(kt,{})}),a(F,{path:"*",element:a(_t,{})})]})]})})}Te.render(a(Fe.StrictMode,{children:a(Yt,{})}),document.getElementById("root"));
