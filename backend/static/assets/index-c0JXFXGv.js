import{u as L,r as c,a as N,j as e,L as R,M as q,O as z,b as B,c as J,i as Q,F as i,d as S,I as l,B as I,T as v,e as F,m as C,S as w,f as V,R as T,g as y,h as Y,C as O}from"./vendor-GH2pZ7JA.js";(function(){const o=document.createElement("link").relList;if(!(o&&o.supports&&o.supports("modulepreload"))){for(const h of document.querySelectorAll('link[rel="modulepreload"]'))r(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const d of p.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0})}function r(h){if(h.ep)return;h.ep=!0;const p=function(d){const x={};return d.integrity&&(x.integrity=d.integrity),d.referrerPolicy&&(x.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?x.credentials="include":d.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}(h);fetch(h.href,p)}})();const M="/",H="/dashboard",P="/manager",X="/account",Z="/login",_="data:image/png;base64,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",$="data:image/png;base64,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",ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAAXNSR0IArs4c6QAADC5JREFUeF7tnXty2zYQh0XlNm6nnlwglk/m+GR+XKDjTurbRGwgESnDSCbAXTwW+PRPJjKev90PuwBJcdjxyarA4c+/D8fj/jAMw53veBzHw6VBDMPw7L4fx/HF/bvfH5+fv30+fccnjwJDnm767cUBMY6fHiZHvwjCRnUeXb3X99uvG+tTLUABAAkQKbaIh+JaZIhtL6A8sASItKUIgGxR7UIdnzr9yIhO0aLg55Gooqc+gAi1LBAtQkcMKKFKfVAOQAQifrl5c/l/6YixNgNAWVMIQAQKXU+nnnRbTd4aoGyQmAgSKdrdH/88Zdx8R45utTiQrEr0awEACRSs4r1G4Ax+KQYogaoBSIBQRvYaATMBkliRAGRFsUbh8LMmkqzYH0A+EKhxOIAkIJwAyBWROoEDSIggAcvEokhncAAJ10HCIekUDiC54iKkWDNhOocDSC5AAiCTKNPNhsWujvtnP7yNSl6M3O+P9zx3crYEgEwemfMKuYNhGL4/hjrhFNncSLPc9+XG9/LvX/fhiWm7JQFkt9vlSK1iobjmchlvq+caCREkPRxaYFwCJjXYpFqkWLtUqVVKMJawpAKFVKtzQFI51o/InD09aWkuNe1out6DfLl5G7WNUTItSXUS9/p+262fdDtx7RU3Z0q1BrV22lgS+rW5pv57z4CoRY8ac3VNSGqcX2owfPtdAqIdPWpcYbXTrRrnmAOSLgHRXF1LbMhDHUMTkl6jSJeAKG7Os59WhcLhy2lGyx6jSHeAKDpM9XB4SLQiJoDELk8Gy2s5S82p1dIsWqlWj2lWjxFE4/TKTPQgishW8a4A6TG98u6hFUV6S7MAJHKBsZxmaKSXlucfaer+ngfRcBBLe48UexEA2YKZkToax7uWUwytNKune7O6SbFwjvMqphFFLS8SsWs5gMQpZu70ajk9AIkzeDeAKJ1gmQdEKZKa1yEUEwAJVer8llnzv/YBIBEG7+mZdI0IAiA/nYsIEsdZ/aU1AGnl9EZ6mtfTUW83KZbG5hRAzgshgNQfEKJHCCD/SyaNIJYvlsY6TjcRRCPFYg/CHiQWMDPlAeRsKk6x4lyWCBKhVwsRRGOhIMWKcBorRVk5z5YCkDiP7SaCaADSwumNxmFFC5E0FJNuAJlWT/HThNaPehVOsHbWNQiF43SkHVPYelkN57C8eiqlVwBiHYRr49dILyynWUqAdHObSXcRRGMf4kSzGkU0ImhPJ1gAsjFUWowiStHD7OKw0dR97UG0NuoWo4hS9Ohq/9FdBHET1tiHnIQz9KJLrejRW3rVJSBa+xArUURzvgCyNVEzVk8rirhp135NQCu1sjDXFG7Y1XUQL6BiylF1qqW5EPQYPbpMsWaQiK+qz1as6q4NaC4CvUaPrgFRXl2dltVAog1HTXNLkUZ91GaXKZYTRHnz6jUuDkkC8KvfZ6WEpltANI985wYq9bZbB/w4fnoYx/Gg7DDFoVeeT1RzXQOieeHwgurZHCtRNDxNqfZTuihv31AYQG7evu52u4cN2oVUeZyczPWh/kkYNapJGdVFi2ywe0BSpVoLO6iCkgGMqo+vI31cVBxA0m3YrxlmEyweCtdogn3Gb2O1eseyiIYLlQFkEiXB0eiqrdyGfhzHl3nB/f74fDzuTxvtYRjucgGxjHiv77dJ0sJVUSorACAzg6Q4Iq3M3iHDyXa4EDKY0mUAZGGBniGxdIdyLnAA5ILSPUICHJeRA5ALuqS8rpBr5Yvtp/frHdf0ApAryvQECSdW15cTAFlZaltOt0ir1uMsgKxrpPaYbkBX2YoAR5jUABKmk9Zv2gb2lrwYR7mBEgNIoFCuWImLiRHDCyrKfiNIpp+FACROr1Npi6CQUm0wdG+/zbtNosu1rEBS6vkUTa1LtkUEEapfOSjsNYT2BRChgL56LaAQMZQMOjUDILp6+v2JazXVQ1gXRwwYyoYEkDSCzludokoyWIAivQ2JIOk1PvUw3bry8zmP2IeeHAyunWH4fnrg6vnb59P/+aRVAEDS6rvaugPno0KAsCph0gIAklReGreuAIBYtyDjT6oAgCSVl8atKwAg1i3I+JMqACBJ5aVx6woAiHULMv6kCgBIUnlp3LoCAGLdgow/qQIAklReGreuAIBYtyDjT6oAgCSVl8atKwAg1i3I+JMqACBJ5aVx6woAiHULMv6kCgBIUnlp3LoCAGLdgow/qQIAklReGreuAIBYtyDjT6oAgCSVl8atKwAgihb0z5f7l3DOm/Yv5Jx/F/rDDf4HGxZ1f3n5p/ubewGo+5fn2PWMCiCRWs5/ZMGBUPBNtB+O3EPl36Lr4AGcSGPz27zXBZtHg1ohiDf3uQbwhCtHBJm08r9b5WAITX3CZbZR0r+3nWjzv726BQQg1qEFmN2uG0AAYh2ItRI9AtMsIH4PMY6fHnpNmdYcXvp3D8zr++1XaVu11m8OEAcGUBRxt9NvBrcGSxOAAEURID7qtBlYzAICFNVBcW1ApmExBQhQmIHiKizWjpBNAAIY5sG4NAET70+sGhDAaBKM+aSqT7+qBaSWl2I276J1TLDaaFIdIESNOjw29yhqfd9iVYAQNXK7ZZX9VRVNqgGkNzguPePh3NXdnr58dqTDOwGqgaQKQFqAY+7wzsn9w0t+jU7xLMby2RTXV0N3I1cBSXFArMExf5ai9if45q+eNgpPcUiKAjIZ8KnKTHh6sMhHgxQRoOS8rdzdvN8f70tqXxSQLzdvY0knWfbtT1Lc9yWNUkKTRbR5KDGGa32+vt8W89NiHd/98c9T6c1nz0CsAVATMM5OL//+db825hR/LwJIqX1Hjw/8aDnNDJgi0aVUqlUKkGypld9UD8P3x97SJi04lu2UgqVEqpUdkFzRo9Yrs6mctlS7kz1d9zkiS/ZTrRKAJIseQFEKk3O/OWDJnWplBSRF9ACKslBc6z2Frae+skaR3IBoR4+sYtXpinWPShuU3Cda2QDRFip3qK3bDesenWXbWwWEyFE3E7+NTvOuiZxRJCcgWukVcBiDww9XK5IAyHUHAA6jcPhha91BkSvFzhJBtFaOH/cPAohxQLRSLQD53RGAwzgcmlEkV5qVJYIohVUAaQQQjSgCIAtnKHEfTiP+WOU0pI86NAWIVAxnYQCp0s83D0ojq8jhE1lSLCkguVaLzdamYrQCADKTDECi/af5CgACIM07uWSCAAIgEv9pvi6AAEjzTi6ZIIAAiMR/mq8LIADSvJNLJgggACLxn+brAgiANO/kkgkCCIBI/Kf5ugACIM07uWSCAAIgEv9pvi6AAEjzTi6ZIIAAiMR/mq8LIADSvJNLJgggACLxn+brAgiANO/kkgkCCIBI/Kf5ugACIM07uWSCAAIgEv9pvi6AAEjzTi6ZIIAAiMR/mq8LIADSvJNLJgggACLxn+brAgiANO/kkgkCCIBI/Kf5ugACIM07uWSCAAIgEv9pvi6AAEjzTi6ZIIAAiMR/mq8LIADSvJNLJgggACLxn+brAgiANO/kkgkCCIBI/Kf5ugACIM07uWSCAAIgEv9pvi6AAEjzTi6ZoBSQXO+t5CWeEitTd7MCVt5bCSCbTUzFrQp8uXn7utvtHrbWd/WIIDP1cokhMRh1wxWQRo+pp8fX91sHWtIPESSpvDS+VEC695i1ByBeDCJIG6ApwrF7fb/Nsrhn6UQaUgHENiAae465Ajn9oXtADn/+fTge94dhGO5su2Gdox/H8ZBgZFnSq9NhQILB/9ZkjRFEe1XLoSN9nBXIlV51C4hmLozTZlcgW/ToEhDgyO7Qqh3mjB7dAUJapeqrJRrLGj16BGQsYVX61FEgd/ToChCih46TFmwle/QAkILWpusoBYrAASBRNqJwIQWKwWEGkB/Xa8QicXpVyL0F3ea8Yn5tmFkuFCo4pxiQ6Yr5k8BeVM2rgNjmGsPNAojUOTVOL6Rj0BCbNoIVqAKObCmW60hwu4maWAqRLNjCFNymwH5/vH/+9vl5W239WlkiyATIpqfINKKHl40oou9Aii2qLYSKY8pzs6If8IZrEeqiAYmm+8jbqmEj/tEsskWQGEicaMPw/TFVqAUSuWNLWvD2dW2ksrFkfPO62QGZg+KewZg/L5AajKVoU0RzX4t+QEDLGK214+zp5zSO48t+f3yuHYilDf4DAl5UQfFwf5kAAAAASUVORK5CYII=",te="/assets/糖果-Jqq2ogCA.png",{Content:se,Sider:ae}=R;function E(o,r,h,p){return{key:r,icon:h,children:p,label:o}}function ie(){const o=L(),[r,h]=c.useState(!1),p=N();c.useEffect(()=>{sessionStorage.getItem("user")!==null&&sessionStorage.getItem("user")!==void 0||p("/login")},[]);const[d,x]=c.useState({});c.useEffect(()=>{x(JSON.parse(sessionStorage.getItem("user")))},[]);const A=[E(e.jsx(B,{to:"/dashboard",children:"Dashboard"}),"/dashboard",e.jsx("img",{src:_,alt:"",width:20})),E(e.jsx(B,{to:"/manager",children:"Manager"}),"/manager",e.jsx("img",{src:$,alt:"",width:20})),(d==null?void 0:d.role)==="admin"?E(e.jsx(B,{to:"/account",children:"Admin"}),"/account",e.jsx("img",{src:ee,alt:"",width:20})):void 0];return e.jsxs(R,{style:{minHeight:"100vh",overflow:"hidden"},hasSider:!0,children:[e.jsxs(ae,{collapsible:!0,collapsed:r,onCollapse:a=>h(a),theme:"light",children:[e.jsx("div",{style:{textAlign:"center",fontSize:"2rem",padding:"10px 0",textShadow:"0 3px 0 rgba(0, 0, 0, 0.1)",backgroundImage:`url(${te})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",textWrap:"nowrap"},children:r?"P":"Plant Admin"}),e.jsx(q,{defaultSelectedKeys:"/dashboard",selectedKeys:[o.pathname],mode:"inline",items:A,onClick:({item:a,key:n,keyPath:g,domEvent:s})=>{p(n)}})]}),e.jsx(R,{children:e.jsx(se,{style:{margin:"0 16px",overflow:"scroll"},children:e.jsx("div",{style:{border:"1px solid #000000",padding:"24px 0",height:"100%"},children:e.jsx(z,{})})})})]})}const f=J.create({baseURL:"http://127.0.0.1:5000"});function D(){return f.get("/plants")}function K(o){return f.post("/plants/search",o)}function G(){return f.get("/users")}function W(o){return f.post("/adduser",o)}function ne(o){const r=c.useRef(),h=c.useRef(),p=c.useRef(),d=c.useRef();function x(A,a,n,g,s){n.current=Q(a,void 0,{autoResize:!0});const u={title:{text:s,left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{name:"Access From",type:"pie",radius:g,data:A}]};n.current.setOption(u)}return c.useEffect(()=>(D().then(A=>{if(A.status===200){const a={},n={},g={},s={},u={};A.data.forEach(t=>{t.category in a?a[t.category]+=1:a[t.category]=1,t.chinese_family_name in n?n[t.chinese_family_name]+=1:n[t.chinese_family_name]=1,t.chinese_genus_name in g?g[t.chinese_genus_name]+=1:g[t.chinese_genus_name]=1,t.chinese_species_name in s?s[t.chinese_species_name]+=1:s[t.chinese_species_name]=1,t.county_city_distribution in u?u[t.county_city_distribution]+=1:u[t.county_city_distribution]=1}),x(Object.keys(a).map(t=>({name:t,value:a[t]})),document.querySelector(".charts_1"),r,["50%"],"Category of plants"),x(Object.keys(n).map(t=>({name:t,value:n[t]})),document.querySelector(".charts_2"),h,["40%","70%"],"Family of plants"),function(t,m,j,k){j.current=Q(m,void 0,{autoResize:!0});const U={title:{text:k,left:"center"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:t.map(b=>b.name)},yAxis:{type:"value"},series:[{data:t.map(b=>b.value),type:"bar"}]};j.current.setOption(U)}(Object.keys(u).map(t=>({name:t,value:u[t]})),document.querySelector(".charts_3"),p,"City of plants"),x(Object.keys(s).map(t=>({name:t,value:s[t]})),document.querySelector(".charts_4"),d,["40%","70%"],"Species of plants")}}),()=>{var A,a,n,g;(A=r.current)==null||A.dispose(),(a=h.current)==null||a.dispose(),(n=p.current)==null||n.dispose(),(g=d.current)==null||g.dispose()}),[]),e.jsx("div",{style:{height:"100%"},children:e.jsxs("div",{style:{width:"100%",height:"100%",display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr",gap:"24px"},children:[e.jsx("div",{style:{backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},className:"charts_1"}),e.jsx("div",{style:{backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},className:"charts_2"}),e.jsx("div",{style:{backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},className:"charts_3"}),e.jsx("div",{style:{backgroundColor:"#fff",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},className:"charts_4"})]})})}function re(){const[o,r]=c.useState(!1),[h,p]=c.useState([]),[d,x]=c.useState(),A=c.useRef(""),[a]=i.useForm(),[n]=i.useForm();return c.useEffect(()=>{g()},[]),e.jsxs("div",{children:[e.jsx(i,{form:n,children:e.jsxs(S,{gap:"middle",children:[e.jsx(i.Item,{noStyle:!0,name:"category",label:"category",children:e.jsx(l,{placeholder:"Category",size:"large",style:{width:"200px"}})}),e.jsx(i.Item,{noStyle:!0,name:"chinese_family_name",children:e.jsx(l,{placeholder:"Chinese Family Name",size:"large",style:{width:"200px"}})}),e.jsx(i.Item,{noStyle:!0,name:"chinese_genus_name",children:e.jsx(l,{placeholder:"Chinese Genus Name",size:"large",style:{width:"200px"}})}),e.jsx(i.Item,{noStyle:!0,name:"chinese_species_name",children:e.jsx(l,{placeholder:"Chinese Species Name",size:"large",style:{width:"200px"}})}),e.jsx(I,{size:"large",onClick:()=>{K({category:n.getFieldValue("category")||"",chinese_family_name:n.getFieldValue("chinese_family_name")||"",chinese_genus_name:n.getFieldValue("chinese_genus_name")||"",chinese_species_name:n.getFieldValue("chinese_species_name")||""}).then(s=>{s.status===200&&p(s.data)})},children:"Search"}),e.jsx(I,{size:"large",onClick:()=>{A.current="Create",r(!0)},children:"Create"})]})}),e.jsx("div",{style:{height:"24px"}}),e.jsx("div",{style:{height:"calc(100vh - 120px)",overflow:"scroll"},children:e.jsx(v,{size:"small",rowKey:(s,u)=>s.id,dataSource:h,columns:[{title:"Category",dataIndex:"category"},{title:"Family Serial Number",dataIndex:"family_serial_number"},{title:"Chinese Family Name",dataIndex:"chinese_family_name"},{title:"Latin Family Name",dataIndex:"latin_family_name"},{title:"Chinese Genus Name",dataIndex:"chinese_genus_name"},{title:"Latin Genus Name",dataIndex:"latin_genus_name"},{title:"Chinese Species Name",dataIndex:"chinese_species_name"},{title:"Latin Species Name",dataIndex:"latin_species_name"},{title:"Chinese Species Name",dataIndex:"chinese_species_name"},{title:"Latin Species Name",dataIndex:"latin_species_name"},{title:"Author of the Species",dataIndex:"author_of_the_species"},{title:"Rank Indicator",dataIndex:"rank_indicator"},{title:"Status",dataIndex:"status"},{title:"County/City Distribution",dataIndex:"county_city_distribution"},{title:"Remarks",dataIndex:"remarks"},{title:"action",render:(s,u,t)=>e.jsxs(S,{gap:"small",children:[e.jsx(I,{onClick:()=>{x(u),a.setFieldsValue(u),A.current="Edit",r(!0)},children:"edit"}),e.jsx(I,{danger:!0,onClick:()=>{(function(m){return f.delete(`/plants/${m}`)})(u.id).then(m=>{m.status===200&&(C.success("Delete success"),g())})},children:"delete"})]})}]})}),e.jsx("div",{children:e.jsx(F,{width:"1000px",title:A.current,open:o,afterOpenChange:()=>{if(o&&A.current==="Create"){const s={category:"",family_serial_number:"",chinese_family_name:"",latin_family_name:"",chinese_genus_name:"",latin_genus_name:"",chinese_species_name:"",latin_species_name:"",author_of_the_species:"",rank_indicator:"",status:"",county_city_distribution:"",remarks:""};a.setFieldsValue(s)}},afterClose:()=>{a.resetFields()},onCancel:()=>{r(!1)},onOk:()=>{(function(){const s=a.getFieldsValue();let u=!0;for(let t in s)s[t]!==""||s[t]!==null||s[t]!==void 0?u=!1:s[t]="";u?C.error("Please fill in all the fields"):(A.current==="Create"&&function(t){(m=t,f.post("/plants",m)).then(j=>{j.status===200&&(C.success("Create success"),g(),r(!1))});var m}(s),A.current==="Edit"&&function(t){(function(m,j){return f.put(`/plants/${m}`,j)})(d.id,{...t}).then(m=>{m.status===200&&(C.success("Edit success"),g(),r(!1))})}(s))})()},children:e.jsxs(i,{form:a,labelAlign:"right",labelCol:{span:6},children:[e.jsx(i.Item,{label:"Category",name:"category",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Family Serial Number",name:"family_serial_number",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Chinese Family Name",name:"chinese_family_name",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Latin Family Name",name:"latin_family_name",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Chinese Genus Name",name:"chinese_genus_name",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Latin Genus Name",name:"latin_genus_name",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Chinese Species Name",name:"chinese_species_name",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Latin Species Name",name:"latin_species_name",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Author of the Species",name:"author_of_the_species",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Rank Indicator",name:"rank_indicator",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Status",name:"status",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"County/City Distribution",name:"county_city_distribution",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Remarks",name:"remarks",children:e.jsx(l,{})})]})})})]});function g(){D().then(s=>{s.status===200&&p(s.data)})}}function Ae(){const[o,r]=c.useState(!1),[h,p]=c.useState([]),[d,x]=c.useState(),A=c.useRef(""),[a]=i.useForm(),[n]=i.useForm();return c.useEffect(()=>{g()},[]),e.jsxs("div",{children:[e.jsx(i,{form:n,children:e.jsxs(S,{gap:"middle",children:[e.jsx(i.Item,{noStyle:!0,name:"account",children:e.jsx(l,{placeholder:"Account",size:"large",style:{width:"200px"}})}),e.jsx(i.Item,{noStyle:!0,name:"role",children:e.jsx(w,{size:"large",style:{width:"200px"},options:[{label:"admin",value:"admin"},{label:"user",value:"user"}]})}),e.jsx(I,{size:"large",onClick:()=>{K({account:n.getFieldValue("account")||"",role:n.getFieldValue("role")||""}).then(s=>{s.status===200&&setusers(s.data)})},children:"Search"}),e.jsx(I,{size:"large",onClick:()=>{A.current="Create",r(!0)},children:"Create"})]})}),e.jsx("div",{style:{height:"24px"}}),e.jsx("div",{style:{height:"calc(100vh - 120px)",overflow:"scroll"},children:e.jsx(v,{size:"small",rowKey:(s,u)=>s.id,dataSource:h,columns:[{title:"Account",dataIndex:"account"},{title:"Password",dataIndex:"pwd"},{title:"Role",dataIndex:"role"},{title:"action",render:(s,u,t)=>e.jsxs(S,{gap:"small",children:[e.jsx(I,{onClick:()=>{x(u),a.setFieldsValue(u),A.current="Edit",r(!0)},children:"edit"}),e.jsx(I,{danger:!0,onClick:()=>{(function(m){return f.delete(`/deleteuserbyid/${m}`)})(u.id).then(m=>{m.status===200&&(C.success("Delete success"),g())})},children:"delete"})]})}]})}),e.jsx("div",{children:e.jsx(F,{width:"1000px",title:A.current,open:o,afterOpenChange:()=>{if(o&&A.current==="Create"){const s={account:"",pwd:"",role:""};a.setFieldsValue(s)}},afterClose:()=>{a.resetFields()},onCancel:()=>{r(!1)},onOk:()=>{(function(){const s=a.getFieldsValue();let u=!0;for(let t in s)s[t]!==""||s[t]!==null||s[t]!==void 0?u=!1:s[t]="";u?C.error("Please fill in all the fields"):(A.current==="Create"&&function(t){W(t).then(m=>{m.status===200&&(C.success("Create success"),g(),r(!1))})}(s),A.current==="Edit"&&function(t){(m=d.id,j={...t},f.put(`/updateuserbyid/${m}`,j)).then(k=>{k.status===200&&(C.success("Edit success"),g(),r(!1))});var m,j}(s))})()},children:e.jsxs(i,{form:a,labelAlign:"right",labelCol:{span:6},children:[e.jsx(i.Item,{label:"Account",name:"account",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Password",name:"pwd",children:e.jsx(l,{})}),e.jsx(i.Item,{label:"Role",name:"role",children:e.jsx(w,{options:[{label:"admin",value:"admin"},{label:"user",value:"user"}]})})]})})})]});function g(){G().then(s=>{s.status===200&&p(s.data)})}}const le="/assets/img_1-Wkt0yX-g.png";function ce(o){const[r]=i.useForm(),[h,p]=c.useState([]),[d,x]=c.useState(!1),A=N();return c.useEffect(()=>{G().then(a=>{a.status===200&&p(a.data)})},[]),e.jsx("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",background:`url(${le})`,backgroundSize:"cover",backgroundPosition:"center"},children:e.jsxs("div",{style:{width:"400px",padding:"24px",backgroundColor:"rgba(170,255,207,0.41)",textAlign:"center",borderRadius:"12px",boxShadow:"0 0 10px 0 rgba(0,0,0,0.2)"},children:[e.jsx("div",{style:{fontSize:"24px",padding:"20px"},children:"Plant Admin"}),d?e.jsxs("div",{children:[e.jsxs(i,{layout:"vertical",form:r,children:[e.jsx(i.Item,{label:"account",name:"account",required:!0,children:e.jsx(l,{})}),e.jsx(i.Item,{label:"password",name:"pwd",required:!0,children:e.jsx(l,{type:"password"})}),e.jsx(i.Item,{label:"re password",name:"repwd",required:!0,children:e.jsx(l,{type:"password"})})]}),e.jsxs(S,{justify:"center",gap:"middle",children:[e.jsx(I,{style:{width:"100px"},onClick:()=>{r.validateFields().then(a=>{a.repwd===a.pwd?(h.forEach(n=>{n.account!==a.account||C.error("account has been used")}),a.account&&a.pwd&&W({account:a.account,pwd:a.pwd}).then(n=>{n.status===200&&C.success("register success")})):C.error("two password not equal")})},children:"Conform"}),e.jsx(I,{style:{width:"100px"},onClick:()=>{x(!1)},children:"Go login"})]})]}):e.jsxs("div",{children:[e.jsxs(i,{layout:"vertical",form:r,children:[e.jsx(i.Item,{label:"account",name:"account",required:!0,children:e.jsx(l,{})}),e.jsx(i.Item,{label:"password",name:"pwd",required:!0,children:e.jsx(l,{type:"password"})})]}),e.jsxs(S,{justify:"center",gap:"middle",children:[e.jsx(I,{style:{width:"100px"},onClick:()=>{r.validateFields().then(a=>{let n=!1;h.forEach(g=>{g.account===a.account&&g.pwd===a.pwd&&(n=!0,window.sessionStorage.setItem("user",JSON.stringify(g)),A("/dashboard"))}),C.info(n?"login success":"account or password error")})},children:"Login"}),e.jsx(I,{style:{width:"100px"},onClick:()=>{x(!0)},children:"Register"})]})]})]})})}function oe(){const[o,r]=c.useState({});return c.useEffect(()=>{r(JSON.parse(sessionStorage.getItem("user")))},[]),e.jsx(V,{children:e.jsxs(T,{children:[e.jsxs(y,{path:M,element:e.jsx(ie,{}),children:[e.jsx(y,{path:H,element:e.jsx(ne,{})}),e.jsx(y,{path:P,element:e.jsx(re,{})}),(o==null?void 0:o.role)==="admin"&&e.jsx(y,{path:X,element:e.jsx(Ae,{})})]}),e.jsx(y,{path:Z,element:e.jsx(ce,{})})]})})}Y.createRoot(document.getElementById("root")).render(e.jsx(O,{theme:{components:{},token:{colorPrimary:"#00b96b"}},children:e.jsx(oe,{})}));
