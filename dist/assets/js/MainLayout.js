import{p as Y,i as G,c as v,r as B,a as L,g as ue,o as re,b as I,d as Ie,e as ce,f as we,h as Be,j as Te,k as Ce,l as W,m as l,n as de,t as K,q as ve,s as ke,u as Re,v as Pe,w as me,x as J,y as fe,z as Q,A as ee,B as x,C as pe,D as ye,E as U,F as Ae,G as Le,H as ze}from"./index.js";import{u as He,m as te,a as T,b as Ne,c as Me,d as De,e as Ee,f as Fe,g as Oe,h as je,V as q,i as ge,j as Ze,k as qe,_ as Ke,l as Ue,n as Xe}from"./_plugin-vue_export-helper.js";const E=Symbol.for("vuetify:layout"),be=Symbol.for("vuetify:layout-item"),ne=1e3,Ye=Y({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ge=Y({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function We(){const e=G(E);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Je(e){var c;const a=G(E);if(!a)throw new Error("[Vuetify] Could not find injected layout");const o=(c=e.id)!=null?c:`layout-item-${Ie()}`,t=ue("useLayoutItem");ce(be,{id:o});const n=B(!1);we(()=>n.value=!0),Be(()=>n.value=!1);const{layoutItemStyles:i,layoutItemScrimStyles:u}=a.register(t,{...e,active:v(()=>n.value?!1:e.active.value),id:o});return Te(()=>a.unregister(o)),{layoutItemStyles:i,layoutRect:a.layoutRect,layoutItemScrimStyles:u}}const Qe=(e,a,o,t)=>{let n={top:0,left:0,right:0,bottom:0};const i=[{id:"",layer:{...n}}];for(const u of e){const c=a.get(u),f=o.get(u),b=t.get(u);if(!c||!f||!b)continue;const m={...n,[c.value]:parseInt(n[c.value],10)+(b.value?parseInt(f.value,10):0)};i.push({id:u,layer:m}),n=m}return i};function et(e){const a=G(E,null),o=v(()=>a?a.rootZIndex.value-100:ne),t=B([]),n=L(new Map),i=L(new Map),u=L(new Map),c=L(new Map),f=L(new Map),{resizeRef:b,contentRect:m}=He(),V=v(()=>{var s;const r=new Map,y=(s=e.overlaps)!=null?s:[];for(const _ of y.filter(d=>d.includes(":"))){const[d,g]=_.split(":");if(!t.value.includes(d)||!t.value.includes(g))continue;const w=n.get(d),R=n.get(g),P=i.get(d),D=i.get(g);!w||!R||!P||!D||(r.set(g,{position:w.value,amount:parseInt(P.value,10)}),r.set(d,{position:R.value,amount:-parseInt(D.value,10)}))}return r}),p=v(()=>{const r=[...new Set([...u.values()].map(s=>s.value))].sort((s,_)=>s-_),y=[];for(const s of r){const _=t.value.filter(d=>{var g;return((g=u.get(d))==null?void 0:g.value)===s});y.push(..._)}return Qe(y,n,i,c)}),C=v(()=>!Array.from(f.values()).some(r=>r.value)),S=v(()=>p.value[p.value.length-1].layer),z=v(()=>({"--v-layout-left":I(S.value.left),"--v-layout-right":I(S.value.right),"--v-layout-top":I(S.value.top),"--v-layout-bottom":I(S.value.bottom),...C.value?void 0:{transition:"none"}})),$=v(()=>p.value.slice(1).map((r,y)=>{let{id:s}=r;const{layer:_}=p.value[y],d=i.get(s),g=n.get(s);return{id:s,..._,size:Number(d.value),position:g.value}})),k=r=>$.value.find(y=>y.id===r),H=ue("createLayout"),N=B(!1);re(()=>{N.value=!0}),ce(E,{register:(r,y)=>{let{id:s,order:_,position:d,layoutSize:g,elementSize:w,active:R,disableTransitions:P,absolute:D}=y;u.set(s,_),n.set(s,d),i.set(s,g),c.set(s,R),P&&f.set(s,P);const oe=Ce(be,H==null?void 0:H.vnode).indexOf(r);oe>-1?t.value.splice(oe,0,s):t.value.push(s);const ae=v(()=>$.value.findIndex(A=>A.id===s)),O=v(()=>o.value+p.value.length*2-ae.value*2),Ve=v(()=>{const A=d.value==="left"||d.value==="right",j=d.value==="right",$e=d.value==="bottom",le={[d.value]:0,zIndex:O.value,transform:`translate${A?"X":"Y"}(${(R.value?0:-110)*(j||$e?-1:1)}%)`,position:D.value||o.value!==ne?"absolute":"fixed",...C.value?void 0:{transition:"none"}};if(!N.value)return le;const h=$.value[ae.value];if(!h)throw new Error(`[Vuetify] Could not find layout item "${s}"`);const Z=V.value.get(s);return Z&&(h[Z.position]+=Z.amount),{...le,height:A?`calc(100% - ${h.top}px - ${h.bottom}px)`:w.value?`${w.value}px`:void 0,left:j?void 0:`${h.left}px`,right:j?`${h.right}px`:void 0,top:d.value!=="bottom"?`${h.top}px`:void 0,bottom:d.value!=="top"?`${h.bottom}px`:void 0,width:A?w.value?`${w.value}px`:void 0:`calc(100% - ${h.left}px - ${h.right}px)`}}),Se=v(()=>({zIndex:O.value-1}));return{layoutItemStyles:Ve,layoutItemScrimStyles:Se,zIndex:O}},unregister:r=>{u.delete(r),n.delete(r),i.delete(r),c.delete(r),f.delete(r),t.value=t.value.filter(y=>y!==r)},mainRect:S,mainStyles:z,getLayoutItem:k,items:$,layoutRect:m,rootZIndex:o});const M=v(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),xe=v(()=>({zIndex:o.value,position:a?"relative":void 0,overflow:a?"hidden":void 0}));return{layoutClasses:M,layoutStyles:xe,getLayoutItem:k,items:$,layoutRect:m,layoutRef:b}}const tt="/firmas-autonort/assets/images/logo-autonort-white.png";const F=W()({name:"VToolbarTitle",props:{text:String,...te()},setup(e,a){let{slots:o}=a;return T(()=>{var t;const n=!!(o.default||o.text||e.text);return l(e.tag,{class:"v-toolbar-title"},{default:()=>[n&&l("div",{class:"v-toolbar-title__placeholder"},[o.text?o.text():e.text,(t=o.default)==null?void 0:t.call(o)])]})}),{}}}),ot=[null,"prominent","default","comfortable","compact"],he=Y({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ot.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ne(),...Me(),...De(),...te({tag:"header"}),...de()},"v-toolbar"),X=W()({name:"VToolbar",props:he(),setup(e,a){var o;let{slots:t}=a;const{backgroundColorClasses:n,backgroundColorStyles:i}=Ee(K(e,"color")),{borderClasses:u}=Fe(e),{elevationClasses:c}=Oe(e),{roundedClasses:f}=je(e),{themeClasses:b}=ve(e),m=B(!!(e.extended||(o=t.extension)!=null&&o.call(t))),V=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),p=v(()=>m.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ke({VBtn:{variant:"text"}}),T(()=>{var C,S,z,$,k;const H=!!(e.title||t.title),N=!!(t.image||e.image),M=(C=t.extension)==null?void 0:C.call(t);return m.value=!!(e.extended||M),l(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},n.value,u.value,c.value,f.value,b.value],style:[i.value]},{default:()=>[N&&l("div",{key:"image",class:"v-toolbar__image"},[l(q,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[t.image?(S=t.image)==null?void 0:S.call(t):l(ge,null,null)]})]),l(q,{defaults:{VTabs:{height:I(V.value)}}},{default:()=>[l("div",{class:"v-toolbar__content",style:{height:I(V.value)}},[t.prepend&&l("div",{class:"v-toolbar__prepend"},[(z=t.prepend)==null?void 0:z.call(t)]),H&&l(F,{key:"title",text:e.title},{text:t.title}),($=t.default)==null?void 0:$.call(t),t.append&&l("div",{class:"v-toolbar__append"},[(k=t.append)==null?void 0:k.call(t)])])]}),l(q,{defaults:{VTabs:{height:I(p.value)}}},{default:()=>[l(Ze,null,{default:()=>[m.value&&l("div",{class:"v-toolbar__extension",style:{height:I(p.value)}},[M])]})]})]})}),{contentHeight:V,extensionHeight:p}}});function at(e){var a;return Re(e,Object.keys((a=X==null?void 0:X.props)!=null?a:{}))}const _e=W()({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...he(),...Ge(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:o}=a;const t=B(),n=Pe(e,"modelValue"),i=v(()=>{var V,p;var c,f;const b=(V=(c=t.value)==null?void 0:c.contentHeight)!=null?V:0,m=(p=(f=t.value)==null?void 0:f.extensionHeight)!=null?p:0;return b+m}),{layoutItemStyles:u}=Je({id:e.name,order:v(()=>parseInt(e.order,10)),position:K(e,"location"),layoutSize:i,elementSize:i,active:n,absolute:K(e,"absolute")});return T(()=>{const[c]=at(e);return l(X,me({ref:t,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"}],style:{...u.value,height:void 0}},c),o)}),{}}}),lt=J({name:"VAppBarTitle",props:{...F.props},setup(e,a){let{slots:o}=a;return T(()=>l(F,me(e,{class:"v-app-bar-title"}),o)),{}}}),nt=qe("flex-grow-1","div","VSpacer"),se={__name:"HeaderPage",setup(e){const a=B("eFirmas Autonort");return(o,t)=>{const n=fe("router-link");return Q(),ee(_e,{bar:"",dark:"",flat:"",color:"primary"},{default:x(()=>[l(lt,null,{default:x(()=>[l(n,{to:"/"},{default:x(()=>[l(ge,{width:100,src:tt})]),_:1})]),_:1}),l(nt),l(F,{class:"text-uppercase font-weight-bold text-center"},{default:x(()=>[pe(ye(a.value),1)]),_:1})]),_:1})}}},st={},it={class:"text-center"},ut=U("div",{class:"text-center"}," Dise\xF1ado por Ziphonex ",-1);function rt(e,a){return Q(),ee(_e,{location:"bottom",class:"bg-primary"},{default:x(()=>[l(Ue,null,{default:x(()=>[l(Xe,{class:"text-center",cols:12},{default:x(()=>[U("div",it,[pe(" Firmas Digitales v1.0.0 \xA9 "),U("strong",null,ye(new Date().getFullYear()),1)]),ut]),_:1})]),_:1})]),_:1})}const ie=Ke(st,[["render",rt]]);const ct=J({name:"VApp",props:{...Ye({fullHeight:!0}),...de()},setup(e,a){let{slots:o}=a;const t=ve(e),{layoutClasses:n,layoutStyles:i,getLayoutItem:u,items:c,layoutRef:f}=et(e),{rtlClasses:b}=Ae();return T(()=>{var m;return l("div",{ref:f,class:["v-application",t.themeClasses.value,n.value,b.value],style:i.value},[l("div",{class:"v-application__wrap"},[(m=o.default)==null?void 0:m.call(o)])])}),{getLayoutItem:u,items:c,theme:t}}});function dt(){const e=B(!1);return re(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:v(()=>e.value?void 0:{transition:"none !important"}),isBooted:Le(e)}}const vt=J({name:"VMain",props:{scrollable:Boolean,...te({tag:"main"})},setup(e,a){let{slots:o}=a;const{mainStyles:t}=We(),{ssrBootStyles:n}=dt();return T(()=>{var i,u;return l(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[t.value,n.value]},{default:()=>[e.scrollable?l("div",{class:"v-main__scroller"},[(i=o.default)==null?void 0:i.call(o)]):(u=o.default)==null?void 0:u.call(o)]})}),{}}}),yt={__name:"MainLayout",setup(e){return ze({HeaderPage:se,FooterPage:ie}),(a,o)=>{const t=fe("router-view");return Q(),ee(ct,null,{default:x(()=>[l(se),l(vt,null,{default:x(()=>[l(t)]),_:1}),l(ie)]),_:1})}}};export{yt as default};
