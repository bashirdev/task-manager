import{g as N,r as c,j as e,C as h,A as f,k as v,l as D,D as w,U as b}from"./index-61e3ea25.js";const S=()=>{const r=N(),[u,d]=c.useState(r),[n,x]=c.useState(""),[o,i]=c.useState(""),l=u.filter(s=>{const a=s.status.toLowerCase().includes(n.toLowerCase())||n==="",t=s.date.toLowerCase().includes(o.toLowerCase())||o==="";return a&&t}),m=()=>{d(l)};console.log({filteredList:l});const j=()=>{x(""),i(""),d(r)},p=s=>{w(s).then(a=>{console.log(s),a===!0&&console.log("Delete Successfull")})},g=(s,a)=>{console.log(s,a),b(s,a).then(t=>{t===!0&&(console.log("Data Updated"),window.location.reload())}).catch(t=>{console.error("Update failed:",t.message)}),window.location.reload()};return e.jsx(c.Fragment,{children:e.jsxs(h,{fluid:!0,className:"content-body",children:[e.jsxs("div",{className:"row p-0 m-0",children:[e.jsx("div",{className:"col-4 col-md-2 col-lg-4 px-3",children:e.jsx("h5",{children:" All Task"})}),e.jsx("div",{className:"col-12 float-end col-md-6 col-lg-8 px-2 d-flex justify-content-center",children:e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-4 flex",children:e.jsx("input",{className:"form-control w-100",placeholder:"Search by due date",type:"date",value:o,onChange:s=>i(s.target.value)})}),e.jsx("div",{className:"col-4 flex",children:e.jsx("input",{className:"form-control w-100",placeholder:"Search by status",value:n,onChange:s=>setSearchQuery(s.target.value)})}),e.jsx("div",{className:"col-2 flex",children:e.jsx("button",{className:"btn btn-primary w-100",onClick:m,children:"Search"})}),e.jsx("div",{className:"col-2 flex",children:e.jsx("button",{className:"btn btn-secondary w-100",onClick:j,children:"Reset"})})]})})]}),e.jsx("div",{className:"row p-0 m-0",children:l.length>0?l.map(s=>e.jsx("div",{className:"col-12 col-lg-4 col-sm-6 col-md-4  p-2",children:e.jsx("div",{className:"card h-100",children:e.jsxs("div",{className:"card-body",children:[e.jsx("h6",{className:"animated fadeInUp",children:s.title}),e.jsx("p",{className:"animated fadeInUp",children:s.description}),e.jsxs("p",{className:"m-0 animated fadeInUp p-0",children:["Due Date: ",e.jsx(f,{})," ",s.date]}),e.jsx("a",{onClick:g.bind(void 0,s.id,s.status),className:"icon-nav text-primary mx-1",children:e.jsx(v,{})}),e.jsx("a",{onClick:p.bind(void 0,s.id),className:"icon-nav text-danger mx-1",children:e.jsx(D,{})})," ",e.jsxs("a",{className:`badge float-end ${s.status==="Completed"?"bg-primary":s.status==="Pending"?"bg-warning":s.status==="Progress"?"bg-danger":""}`,children:["status: ",s.status]})]})})},s.id)):e.jsx(h,{className:"d-flex justify-content-center align-items-center vh-100",children:e.jsx("h1",{className:"p-10 my-10",children:"No Data Found"})})})]})})};export{S as default};