import{a,b as s,c as e,d as r,e as o,n,f as c,g as t,h as i,i as l,B as d,j as u,k as h,l as m,t as p,C as g,m as f,D as v,o as w}from"./chunk.d0bf4898.js";import{a as E}from"./chunk.1b490eba.js";import"./chunk.bb65ef47.js";function b(a){var s,e,p,g,f,v;return{c(){s=r("div"),e=r("label"),p=o("Re-enter your password"),g=n(),f=r("input"),this.h()},l(a){s=c(a,"DIV",{class:!0},!1);var r=t(s);e=c(r,"LABEL",{for:!0},!1);var o=t(e);p=i(o,"Re-enter your password"),o.forEach(l),g=i(r,"\n          "),f=c(r,"INPUT",{id:!0,type:!0,class:!0,required:!0},!1),t(f).forEach(l),r.forEach(l),this.h()},h(){e.htmlFor="password2",f.id="password2",d(f,"type","password"),f.className="form-control",f.required=!0,s.className="form-group",v=u(f,"input",a.input_input_handler)},m(r,o){h(r,s,o),m(s,e),m(e,p),m(s,g),m(s,f),f.value=a.password2},p(a,s){a.password2&&(f.value=s.password2)},d(a){a&&l(s),v()}}}function M(a){var s,e,d,g,f,v,w,E,b;return{c(){s=r("div"),e=r("button"),d=o("×"),g=n(),f=r("strong"),v=o("Error!"),w=n(),E=o(a.errorMessage),this.h()},l(r){s=c(r,"DIV",{class:!0},!1);var o=t(s);e=c(o,"BUTTON",{type:!0,class:!0},!1);var n=t(e);d=i(n,"×"),n.forEach(l),g=i(o,"\n          "),f=c(o,"STRONG",{},!1);var u=t(f);v=i(u,"Error!"),u.forEach(l),w=i(o,"\n           "),E=i(o,a.errorMessage),o.forEach(l),this.h()},h(){e.type="button",e.className="close",s.className="alert alert-dismissible alert-danger",b=u(e,"click",a.click_handler)},m(a,r){h(a,s,r),m(s,e),m(e,d),m(s,g),m(s,f),m(f,v),m(s,w),m(s,E)},p(a,s){a.errorMessage&&p(E,s.errorMessage)},d(a){a&&l(s),b()}}}function N(a){var s,e,d,g,f,v,w,E,b;return{c(){s=r("div"),e=r("button"),d=o("×"),g=n(),f=r("strong"),v=o("Success!"),w=n(),E=o(a.successMessage),this.h()},l(r){s=c(r,"DIV",{class:!0},!1);var o=t(s);e=c(o,"BUTTON",{type:!0,class:!0},!1);var n=t(e);d=i(n,"×"),n.forEach(l),g=i(o,"\n          "),f=c(o,"STRONG",{},!1);var u=t(f);v=i(u,"Success!"),u.forEach(l),w=i(o,"\n           "),E=i(o,a.successMessage),o.forEach(l),this.h()},h(){e.type="button",e.className="close",s.className="alert alert-dismissible alert-success",b=u(e,"click",a.click_handler_1)},m(a,r){h(a,s,r),m(s,e),m(e,d),m(s,g),m(s,f),m(f,v),m(s,w),m(s,E)},p(a,s){a.successMessage&&p(E,s.successMessage)},d(a){a&&l(s),b()}}}function y(a){var s,e,w,E,y,k,_,S,I,L,T,U,A,D,V,B,O,P,q,x,G,R,j,C,F,H,W,Y,$,z,J,K,Q,X,Z,aa,sa,ea,ra=a.loginMode?"Login to your account":"Create an account",oa=a.loginMode?"Login":"Sign Up",na=a.loginMode?"Don't have an account?":"Already have an account?",ca=a.loginMode?"Sign up":"Login",ta=!a.loginMode&&b(a),ia=a.showError&&M(a),la=a.showSuccess&&N(a);return{c(){s=r("div"),e=r("div"),w=r("h5"),E=o(ra),y=n(),k=r("div"),_=r("form"),S=r("div"),I=r("label"),L=o("E-mail address"),T=n(),U=r("input"),A=n(),D=r("div"),V=r("label"),B=o("Password"),O=n(),P=r("input"),q=n(),ta&&ta.c(),x=n(),G=r("div"),R=r("button"),j=o(oa),C=n(),ia&&ia.c(),F=n(),la&&la.c(),H=n(),W=r("button"),Y=o("GitHub"),$=n(),z=r("button"),J=o("Google"),K=n(),Q=r("small"),X=o(na),Z=n(),aa=r("span"),sa=o(ca),this.h()},l(a){s=c(a,"DIV",{class:!0,style:!0},!1);var r=t(s);e=c(r,"DIV",{class:!0},!1);var o=t(e);w=c(o,"H5",{class:!0},!1);var n=t(w);E=i(n,ra),n.forEach(l),o.forEach(l),y=i(r,"\n  "),k=c(r,"DIV",{class:!0},!1);var d=t(k);_=c(d,"FORM",{},!1);var u=t(_);S=c(u,"DIV",{class:!0},!1);var h=t(S);I=c(h,"LABEL",{for:!0},!1);var m=t(I);L=i(m,"E-mail address"),m.forEach(l),T=i(h,"\n        "),U=c(h,"INPUT",{id:!0,type:!0,class:!0,required:!0},!1),t(U).forEach(l),h.forEach(l),A=i(u,"\n      "),D=c(u,"DIV",{class:!0},!1);var p=t(D);V=c(p,"LABEL",{for:!0},!1);var g=t(V);B=i(g,"Password"),g.forEach(l),O=i(p,"\n        "),P=c(p,"INPUT",{id:!0,type:!0,class:!0,required:!0},!1),t(P).forEach(l),p.forEach(l),q=i(u,"\n      "),ta&&ta.l(u),x=i(u,"\n      "),G=c(u,"DIV",{class:!0},!1);var f=t(G);R=c(f,"BUTTON",{type:!0,class:!0},!1);var v=t(R);j=i(v,oa),v.forEach(l),f.forEach(l),C=i(u,"\n      "),ia&&ia.l(u),F=i(u,"\n      "),la&&la.l(u),H=i(u,"\n      "),W=c(u,"BUTTON",{class:!0},!1);var b=t(W);Y=i(b,"GitHub"),b.forEach(l),$=i(u,"\n      "),z=c(u,"BUTTON",{class:!0},!1);var M=t(z);J=i(M,"Google"),M.forEach(l),K=i(u,"\n      "),Q=c(u,"SMALL",{class:!0},!1);var N=t(Q);X=i(N,na),Z=i(N,"\n        "),aa=c(N,"SPAN",{class:!0},!1);var ea=t(aa);sa=i(ea,ca),ea.forEach(l),N.forEach(l),u.forEach(l),d.forEach(l),r.forEach(l),this.h()},h(){w.className="mb-0",e.className="card-header",I.htmlFor="email",U.id="email",d(U,"type","email"),U.className="form-control",U.required=!0,S.className="form-group",V.htmlFor="password",P.id="password",d(P,"type","password"),P.className="form-control",P.required=!0,D.className="form-group",R.type="button",R.className="btn btn-primary",G.className="form-group",W.className="btn btn-secondary w-100",z.className="btn btn-secondary w-100 mt-1",aa.className="btn btn-link pl-0",Q.className="text-muted",k.className="card-body",s.className="card border-light mx-auto",g(s,"max-width","25rem"),ea=[u(U,"input",a.input0_input_handler),u(P,"input",a.input1_input_handler),u(R,"click",a.handleAuth),u(aa,"click",a.changeMode)]},m(r,o){h(r,s,o),m(s,e),m(e,w),m(w,E),m(s,y),m(s,k),m(k,_),m(_,S),m(S,I),m(I,L),m(S,T),m(S,U),U.value=a.email,m(_,A),m(_,D),m(D,V),m(V,B),m(D,O),m(D,P),P.value=a.password,m(_,q),ta&&ta.m(_,null),m(_,x),m(_,G),m(G,R),m(R,j),m(_,C),ia&&ia.m(_,null),m(_,F),la&&la.m(_,null),m(_,H),m(_,W),m(W,Y),m(_,$),m(_,z),m(z,J),m(_,K),m(_,Q),m(Q,X),m(Q,Z),m(Q,aa),m(aa,sa)},p(a,s){a.loginMode&&ra!==(ra=s.loginMode?"Login to your account":"Create an account")&&p(E,ra),a.email&&(U.value=s.email),a.password&&(P.value=s.password),s.loginMode?ta&&(ta.d(1),ta=null):ta?ta.p(a,s):((ta=b(s)).c(),ta.m(_,x)),a.loginMode&&oa!==(oa=s.loginMode?"Login":"Sign Up")&&p(j,oa),s.showError?ia?ia.p(a,s):((ia=M(s)).c(),ia.m(_,F)):ia&&(ia.d(1),ia=null),s.showSuccess?la?la.p(a,s):((la=N(s)).c(),la.m(_,H)):la&&(la.d(1),la=null),a.loginMode&&na!==(na=s.loginMode?"Don't have an account?":"Already have an account?")&&p(X,na),a.loginMode&&ca!==(ca=s.loginMode?"Sign up":"Login")&&p(sa,ca)},i:f,o:f,d(a){a&&l(s),ta&&ta.d(),ia&&ia.d(),la&&la.d(),v(ea)}}}function k(a,s,e){let r;w(a,E,a=>{e("$user",r=a)});let{loginMode:o}=s,n="",c="",t="",i=!1,l="",d=!1,u="",h=a=>{e("showError",i=!0),e("errorMessage",l=a)},m=a=>{switch(a){case"auth/email-already-in-use":h("Email already exists");break;case"auth/invalid-email":h("Not a valid email address");break;case"auth/weak-password":h("Your password is too weak.");break;case"auth/invalid-email":h("User not found");break;case"auth/user-disabled":h("You are disallowed from this site.");break;case"auth/user-not-found":h("User not found");break;case"auth/wrong-password":h("Incorrect e-mail or password");break;default:h("Something went wrong")}},p=()=>{e("email",n=""),e("password",c=""),e("password2",t="")},g=function(){authentication.createUserWithEmailAndPassword(n,c).then(()=>{authentication.currentUser.sendEmailVerification({url:"https://open-writing.firebaseapp.com/auth/login",handleCodeInApp:!1}).then(()=>{p(),e("showSuccess",d=!0),e("successMessage",u="We have sent a confirmation email")}).catch(a=>{e("showError",i=!0),e("errorMessage",l="Error sending email verification")})}).catch(a=>m(a.code))},f=function(){authentication.signInWithEmailAndPassword(n,c).then(()=>{p(),e("showSuccess",d=!0),e("successMessage",u="Logging in")}).catch(function(a){r=!1,E.set(r);let s=a.code;m(s)})};return a.$set=(a=>{"loginMode"in a&&e("loginMode",o=a.loginMode)}),{loginMode:o,email:n,password:c,password2:t,showError:i,errorMessage:l,showSuccess:d,successMessage:u,handleAuth:()=>{if(o)return f();g()},changeMode:()=>{e("loginMode",o=!o)},input0_input_handler:function(){n=this.value,e("email",n)},input1_input_handler:function(){c=this.value,e("password",c)},input_input_handler:function(){t=this.value,e("password2",t)},click_handler:function(){const a=i=!1;return e("showError",i),a},click_handler_1:function(){const a=d=!1;return e("showSuccess",d),a}}}class _ extends a{constructor(a){super(),s(this,a,k,y,e,["loginMode"])}}export{_ as a};
//# sourceMappingURL=chunk.ddd6534b.js.map