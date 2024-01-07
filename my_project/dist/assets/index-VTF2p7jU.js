import{u as U,r as d,a as w,j as e,L as Q,M as L,O as q,b as E,c as z,i as v,F as i,d as S,I as c,B as C,T as F,e as D,m as j,S as N,f as J,R as V,g as y,h as T,C as Y}from"./vendor-GH2pZ7JA.js";(function(){const x=document.createElement("link").relList;if(!(x&&x.supports&&x.supports("modulepreload"))){for(const u of document.querySelectorAll('link[rel="modulepreload"]'))l(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const o of m.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0})}function l(u){if(u.ep)return;u.ep=!0;const m=function(o){const p={};return o.integrity&&(p.integrity=o.integrity),o.referrerPolicy&&(p.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?p.credentials="include":o.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}(u);fetch(u.href,m)}})();const O="/",M="/dashboard",H="/manager",P="/account",X="/login",Z="data:image/png;base64,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",_="data:image/png;base64,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",$="data:image/png;base64,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",ee="/assets/糖果-Jqq2ogCA.png",{Content:te,Sider:se}=Q;function R(x,l,u,m){return{key:l,icon:u,children:m,label:x}}function ie(){const x=U(),[l,u]=d.useState(!1),m=w();d.useEffect(()=>{sessionStorage.getItem("user")!==null&&sessionStorage.getItem("user")!==void 0||m("/login")},[]);const[o,p]=d.useState({});d.useEffect(()=>{p(JSON.parse(sessionStorage.getItem("user")))},[]);const A=[R(e.jsx(E,{to:"/dashboard",children:"Dashboard"}),"/dashboard",e.jsx("img",{src:Z,alt:"",width:20})),R(e.jsx(E,{to:"/manager",children:"Manager"}),"/manager",e.jsx("img",{src:_,alt:"",width:20})),(o==null?void 0:o.role)==="admin"?R(e.jsx(E,{to:"/account",children:"Admin"}),"/account",e.jsx("img",{src:$,alt:"",width:20})):void 0];return e.jsxs(Q,{style:{minHeight:"100vh",overflow:"hidden"},hasSider:!0,children:[e.jsxs(se,{collapsible:!0,collapsed:l,onCollapse:s=>u(s),theme:"light",children:[e.jsx("div",{style:{textAlign:"center",fontSize:"2rem",padding:"10px 0",textShadow:"0 3px 0 rgba(0, 0, 0, 0.1)",backgroundImage:`url(${ee})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",textWrap:"nowrap"},children:l?"P":"Plant Admin"}),e.jsx(L,{defaultSelectedKeys:"/dashboard",selectedKeys:[x.pathname],mode:"inline",items:A,onClick:({item:s,key:r,keyPath:h,domEvent:n})=>{m(r)}})]}),e.jsx(Q,{children:e.jsx(te,{style:{margin:"0 16px",overflow:"scroll"},children:e.jsx("div",{style:{border:"1px solid #000000",padding:"24px 0",height:"100%"},children:e.jsx(q,{})})})})]})}const f=z.create({baseURL:"http://127.0.0.1:5000"});function K(){return f.get("/plants")}function G(){return f.get("/users")}function W(x){return f.post("/adduser",x)}function ae(x){const l=d.useRef(),u=d.useRef(),m=d.useRef(),o=d.useRef();function p(A,s,r,h,n){r.current=v(s,void 0,{autoResize:!0});const a={title:{text:n,left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:h,data:A}]};r.current.setOption(a)}return d.useEffect(()=>(K().then(A=>{if(A.status===200){const s={},r={},h={},n={},a={};A.data.forEach(t=>{t.category in s?s[t.category]+=1:s[t.category]=1,t.chinese_family_name in r?r[t.chinese_family_name]+=1:r[t.chinese_family_name]=1,t.chinese_genus_name in h?h[t.chinese_genus_name]+=1:h[t.chinese_genus_name]=1,t.chinese_species_name in n?n[t.chinese_species_name]+=1:n[t.chinese_species_name]=1,t.county_city_distribution in a?a[t.county_city_distribution]+=1:a[t.county_city_distribution]=1}),p(Object.keys(s).map(t=>({name:t,value:s[t]})),document.querySelector(".charts_1"),l,["50%"],"Category of plants"),p(Object.keys(r).map(t=>({name:t,value:r[t]})),document.querySelector(".charts_2"),u,["40%","70%"],"Family of plants"),function(t,g,I,k){I.current=v(g,void 0,{autoResize:!0});const b={title:{text:k,left:"center"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:t.map(B=>B.name)},yAxis:{type:"value"},series:[{data:t.map(B=>B.value),type:"bar"}]};I.current.setOption(b)}(Object.keys(a).map(t=>({name:t,value:a[t]})),document.querySelector(".charts_3"),m,"City of plants"),p(Object.keys(n).map(t=>({name:t,value:n[t]})),document.querySelector(".charts_4"),o,["40%","70%"],"Species of plants")}}),()=>{var A,s,r,h;(A=l.current)==null||A.dispose(),(s=u.current)==null||s.dispose(),(r=m.current)==null||r.dispose(),(h=o.current)==null||h.dispose()}),[]),e.jsx("div",{style:{height:"100%"},children:e.jsxs("div",{style:{width:"100%",height:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:"24px"},children:[e.jsx("div",{style:{backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},className:"charts_1"}),e.jsx("div",{style:{backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},className:"charts_2"}),e.jsx("div",{style:{backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},className:"charts_3"}),e.jsx("div",{style:{backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},className:"charts_4"})]})})}function ne(){const[x,l]=d.useState(!1),[u,m]=d.useState([]),[o,p]=d.useState(),A=d.useRef(""),[s]=i.useForm(),[r]=i.useForm();return d.useEffect(()=>{h()},[]),e.jsxs("div",{children:[e.jsx(i,{form:r,children:e.jsxs(S,{gap:"middle",children:[e.jsx(i.Item,{noStyle:!0,name:"category",label:"category",children:e.jsx(c,{placeholder:"Category",size:"large",style:{width:"200px"}})}),e.jsx(i.Item,{noStyle:!0,name:"chinese_family_name",children:e.jsx(c,{placeholder:"Chinese Family Name",size:"large",style:{width:"200px"}})}),e.jsx(i.Item,{noStyle:!0,name:"chinese_genus_name",children:e.jsx(c,{placeholder:"Chinese Genus Name",size:"large",style:{width:"200px"}})}),e.jsx(i.Item,{noStyle:!0,name:"chinese_species_name",children:e.jsx(c,{placeholder:"Chinese Species Name",size:"large",style:{width:"200px"}})}),e.jsx(C,{size:"large",onClick:()=>{var n;(n={category:r.getFieldValue("category")||"",chinese_family_name:r.getFieldValue("chinese_family_name")||"",chinese_genus_name:r.getFieldValue("chinese_genus_name")||"",chinese_species_name:r.getFieldValue("chinese_species_name")||""},f.post("/plants/search",n)).then(a=>{a.status===200&&m(a.data)})},children:"Search"}),e.jsx(C,{size:"large",onClick:()=>{A.current="Create",l(!0)},children:"Create"})]})}),e.jsx("div",{style:{height:"24px"}}),e.jsx("div",{style:{height:"calc(100vh - 120px)",overflow:"scroll"},children:e.jsx(F,{size:"small",rowKey:(n,a)=>n.id,dataSource:u,columns:[{title:"Category",dataIndex:"category"},{title:"Family Serial Number",dataIndex:"family_serial_number"},{title:"Chinese Family Name",dataIndex:"chinese_family_name"},{title:"Latin Family Name",dataIndex:"latin_family_name"},{title:"Chinese Genus Name",dataIndex:"chinese_genus_name"},{title:"Latin Genus Name",dataIndex:"latin_genus_name"},{title:"Chinese Species Name",dataIndex:"chinese_species_name"},{title:"Latin Species Name",dataIndex:"latin_species_name"},{title:"Chinese Species Name",dataIndex:"chinese_species_name"},{title:"Latin Species Name",dataIndex:"latin_species_name"},{title:"Author of the Species",dataIndex:"author_of_the_species"},{title:"Rank Indicator",dataIndex:"rank_indicator"},{title:"Status",dataIndex:"status"},{title:"County/City Distribution",dataIndex:"county_city_distribution"},{title:"Remarks",dataIndex:"remarks"},{title:"action",render:(n,a,t)=>e.jsxs(S,{gap:"small",children:[e.jsx(C,{onClick:()=>{p(a),s.setFieldsValue(a),A.current="Edit",l(!0)},children:"edit"}),e.jsx(C,{danger:!0,onClick:()=>{(function(g){return f.delete(`/plants/delete/${g}`)})(a.id).then(g=>{g.status===200&&(j.success("Delete success"),h())})},children:"delete"})]})}]})}),e.jsx("div",{children:e.jsx(D,{width:"1000px",title:A.current,open:x,afterOpenChange:()=>{if(x&&A.current==="Create"){const n={category:"",family_serial_number:"",chinese_family_name:"",latin_family_name:"",chinese_genus_name:"",latin_genus_name:"",chinese_species_name:"",latin_species_name:"",author_of_the_species:"",rank_indicator:"",status:"",county_city_distribution:"",remarks:""};s.setFieldsValue(n)}},afterClose:()=>{s.resetFields()},onCancel:()=>{l(!1)},onOk:()=>{(function(){const n=s.getFieldsValue();let a=!0;for(let t in n)n[t]!==""||n[t]!==null||n[t]!==void 0?a=!1:n[t]="";a?j.error("Please fill in all the fields"):(A.current==="Create"&&function(t){(g=t,f.post("/plants/add",g)).then(I=>{I.status===200&&(j.success("Create success"),h(),l(!1))});var g}(n),A.current==="Edit"&&function(t){(function(g,I){return f.put(`/plants/update/${g}`,I)})(o.id,{...t}).then(g=>{g.status===200&&(j.success("Edit success"),h(),l(!1))})}(n))})()},children:e.jsxs(i,{form:s,labelAlign:"right",labelCol:{span:6},children:[e.jsx(i.Item,{label:"Category",name:"category",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Family Serial Number",name:"family_serial_number",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Chinese Family Name",name:"chinese_family_name",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Latin Family Name",name:"latin_family_name",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Chinese Genus Name",name:"chinese_genus_name",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Latin Genus Name",name:"latin_genus_name",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Chinese Species Name",name:"chinese_species_name",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Latin Species Name",name:"latin_species_name",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Author of the Species",name:"author_of_the_species",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Rank Indicator",name:"rank_indicator",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Status",name:"status",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"County/City Distribution",name:"county_city_distribution",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Remarks",name:"remarks",children:e.jsx(c,{})})]})})})]});function h(){K().then(n=>{n.status===200&&m(n.data)})}}function re(){const[x,l]=d.useState(!1),[u,m]=d.useState([]),[o,p]=d.useState(),A=d.useRef(""),[s]=i.useForm(),[r]=i.useForm(),h=w();return d.useEffect(()=>{n()},[]),d.useEffect(()=>{JSON.parse(sessionStorage.getItem("user")).role!=="admin"&&h("/")},[h]),e.jsxs("div",{children:[e.jsx(i,{form:r,children:e.jsxs(S,{gap:"middle",children:[e.jsx(i.Item,{noStyle:!0,name:"account",children:e.jsx(c,{placeholder:"Account",size:"large",style:{width:"200px"}})}),e.jsx(i.Item,{noStyle:!0,name:"role",children:e.jsx(N,{size:"large",style:{width:"200px"},options:[{label:"admin",value:"admin"},{label:"user",value:"user"}]})}),e.jsx(C,{size:"large",onClick:()=>{var a;(a={account:r.getFieldValue("account")||"",role:r.getFieldValue("role")||""},f.post("/users/search",a)).then(t=>{t.status===200&&m(t.data)})},children:"Search"}),e.jsx(C,{size:"large",onClick:()=>{A.current="Create",l(!0)},children:"Create"})]})}),e.jsx("div",{style:{height:"24px"}}),e.jsx("div",{style:{height:"calc(100vh - 120px)",overflow:"scroll"},children:e.jsx(F,{size:"small",rowKey:(a,t)=>a.id,dataSource:u,columns:[{title:"Account",dataIndex:"account"},{title:"Password",dataIndex:"pwd"},{title:"Role",dataIndex:"role"},{title:"action",render:(a,t,g)=>e.jsxs(S,{gap:"small",children:[e.jsx(C,{onClick:()=>{p(t),s.setFieldsValue(t),A.current="Edit",l(!0)},children:"edit"}),e.jsx(C,{danger:!0,onClick:()=>{(function(I){return f.delete(`/deleteuserbyid/${I}`)})(t.id).then(I=>{I.status===200&&(j.success("Delete success"),n())})},children:"delete"})]})}]})}),e.jsx("div",{children:e.jsx(D,{width:"1000px",title:A.current,open:x,afterOpenChange:()=>{if(x&&A.current==="Create"){const a={account:"",pwd:"",role:""};s.setFieldsValue(a)}},afterClose:()=>{s.resetFields()},onCancel:()=>{l(!1)},onOk:()=>{(function(){const a=s.getFieldsValue();let t=!0;for(let g in a)a[g]!==""||a[g]!==null||a[g]!==void 0?t=!1:a[g]="";t?j.error("Please fill in all the fields"):(A.current==="Create"&&function(g){W(g).then(I=>{I.status===200&&(j.success("Create success"),n(),l(!1))})}(a),A.current==="Edit"&&function(g){(I=o.id,k={...g},f.put(`/updateuserbyid/${I}`,k)).then(b=>{b.status===200&&(j.success("Edit success"),n(),l(!1))});var I,k}(a))})()},children:e.jsxs(i,{form:s,labelAlign:"right",labelCol:{span:6},children:[e.jsx(i.Item,{label:"Account",name:"account",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Password",name:"pwd",children:e.jsx(c,{})}),e.jsx(i.Item,{label:"Role",name:"role",children:e.jsx(N,{options:[{label:"admin",value:"admin"},{label:"user",value:"user"}]})})]})})})]});function n(){G().then(a=>{a.status===200&&m(a.data)})}}const le="/assets/img_1-Wkt0yX-g.png";function Ae(x){const[l]=i.useForm(),[u,m]=d.useState([]),[o,p]=d.useState(!1),A=w();return d.useEffect(()=>{G().then(s=>{s.status===200&&m(s.data)})},[]),e.jsx("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:`url(${le})`,backgroundSize:"cover",backgroundPosition:"center"},children:e.jsxs("div",{style:{width:"400px",padding:"24px",backgroundColor:"rgba(170,255,207,0.41)",textAlign:"center",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},children:[e.jsx("div",{style:{fontSize:"24px",padding:"20px"},children:"Plant Admin"}),o?e.jsxs("div",{children:[e.jsxs(i,{layout:"vertical",form:l,children:[e.jsx(i.Item,{label:"account",name:"account",required:!0,children:e.jsx(c,{})}),e.jsx(i.Item,{label:"password",name:"pwd",required:!0,children:e.jsx(c,{type:"password"})}),e.jsx(i.Item,{label:"re password",name:"repwd",required:!0,children:e.jsx(c,{type:"password"})})]}),e.jsxs(S,{justify:"center",gap:"middle",children:[e.jsx(C,{style:{width:"100px"},onClick:()=>{l.validateFields().then(s=>{s.repwd===s.pwd?(u.forEach(r=>{r.account!==s.account||j.error("account has been used")}),s.account&&s.pwd&&W({account:s.account,pwd:s.pwd}).then(r=>{r.status===200&&j.success("register success")})):j.error("two password not equal")})},children:"Conform"}),e.jsx(C,{style:{width:"100px"},onClick:()=>{p(!1)},children:"Go login"})]})]}):e.jsxs("div",{children:[e.jsxs(i,{layout:"vertical",form:l,children:[e.jsx(i.Item,{label:"account",name:"account",required:!0,children:e.jsx(c,{})}),e.jsx(i.Item,{label:"password",name:"pwd",required:!0,children:e.jsx(c,{type:"password"})})]}),e.jsxs(S,{justify:"center",gap:"middle",children:[e.jsx(C,{style:{width:"100px"},onClick:()=>{l.validateFields().then(s=>{let r=!1;u.forEach(h=>{h.account===s.account&&h.pwd===s.pwd&&(r=!0,window.sessionStorage.setItem("user",JSON.stringify(h)),A("/dashboard"))}),j.info(r?"login success":"account or password error")})},children:"Login"}),e.jsx(C,{style:{width:"100px"},onClick:()=>{p(!0)},children:"Register"})]})]})]})})}function ce(){return e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"100px",width:"100vw",height:"100vh",color:"rgba(132,116,255,0.56)",textShadow:"0 0 10px #fff, 0 0 20px #fff, 0 0 40px #ff0000, 0 0 80px #ff0000, 0 0 160px #ff0000"},children:e.jsx("div",{children:"404"})})}function oe(){return e.jsx(J,{children:e.jsxs(V,{children:[e.jsxs(y,{path:O,element:e.jsx(ie,{}),children:[e.jsx(y,{path:M,element:e.jsx(ae,{})}),e.jsx(y,{path:H,element:e.jsx(ne,{})}),e.jsx(y,{path:P,element:e.jsx(re,{})})]}),e.jsx(y,{path:X,element:e.jsx(Ae,{})}),e.jsx(y,{path:"*",element:e.jsx(ce,{})})]})})}T.createRoot(document.getElementById("root")).render(e.jsx(Y,{theme:{components:{},token:{colorPrimary:"#00b96b"}},children:e.jsx(oe,{})}));
