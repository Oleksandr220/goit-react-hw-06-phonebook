(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),s=(n(21),n(22),n(5)),i=n(4),l=n.n(i),u=n(3),b=Object(u.b)("addContact",(function(e){return{payload:{name:e.name,number:e.number,id:l.a.generate()}}})),j=Object(u.b)("deleteContact"),m=Object(u.b)("filterContact"),d=n(14),O=(n(35),n(1));var f=function(e){var t=e.addContacts,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),u=i[0],b=i[1],j=l.a.generate(),m=l.a.generate(),f=function(e){var t=e.currentTarget,n=t.name,c=t.value;"name"===n&&o(c),"number"===n&&b(c)},h=function(e){o(""),b("")};return Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),h()},className:"form",children:[Object(O.jsx)("label",{htmlFor:j,className:"form__label",children:"Name"}),Object(O.jsx)("input",{type:"text",name:"name",value:r,onChange:f,className:"form__input",id:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer \u0438 \u0442. \u043f."}),Object(O.jsx)("label",{htmlFor:m,className:"form__label",children:"Number"}),Object(O.jsx)("input",{type:"phone",name:"number",value:u,onChange:f,className:"form__input",id:m,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}),Object(O.jsx)("button",{type:"submit",className:"form__button",children:"Add contact"})]})},h=(n(37),function(e){var t=e.value,n=e.onChange;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"Find contacts by name"}),Object(O.jsx)("label",{children:Object(O.jsx)("input",{type:"text",value:t,onChange:n,className:"filter__input"})})]})}),x=(n(38),function(e){var t=e.users,n=e.ondeleteContact;return Object(O.jsx)("ul",{className:"contactList__list",children:t.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(O.jsxs)("li",{className:"contactList__item",children:[Object(O.jsxs)("span",{className:"contactList__text",children:[c,":"]}),Object(O.jsx)("span",{className:"contactList__text",children:a}),Object(O.jsx)("button",{className:"contactList__button",onClick:function(){return n(t)},children:"Delete contact"})]},t)}))})}),p=(n(39),function(e){var t=e.title,n=e.children;return Object(O.jsxs)("div",{className:"conteiner",children:[Object(O.jsx)("h2",{className:"conteiner__title",children:t}),Object(O.jsx)("div",{children:n})]})});var _,v=function(){var e=Object(s.c)((function(e){return e.contacts.contacts})),t=Object(s.c)((function(e){return e.contacts.filter})),n=Object(s.b)(),c=t.toLocaleLowerCase(),a=e.filter((function(e){return e.name.includes(c)||e.number.includes(c)}));return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p,{title:"Phonebook",children:Object(O.jsx)(f,{addContacts:function(t){var c={id:l.a.generate(),name:t.name,number:t.number};console.log(t);""!==t.name&&""!==t.number?e.some((function(e){return c.name===e.name}))?alert("".concat(t.name," is already in contacts")):n(b(c)):alert("Please make a correct contact")}})}),Object(O.jsx)(p,{title:"Contacts",children:e.length>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{value:t,onChange:function(e){n(m(e.currentTarget.value))}}),Object(O.jsx)(x,{users:a,ondeleteContact:function(e){n(j(e))}})]}):Object(O.jsx)("span",{className:"contact-message",children:"You have not contacts yet, please add contact to phoneboock"})})]})},g=n(15),N=n.n(g),C=n(10),y=n(16),k=n(2),L=Object(u.c)([],(_={},Object(C.a)(_,b,(function(e,t){return[].concat(Object(y.a)(e),[t.payload])})),Object(C.a)(_,j,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),_)),w=Object(u.c)("",Object(C.a)({},m,(function(e,t){return t.payload}))),F=Object(k.b)({contacts:L,filter:w}),A=Object(u.a)({reducer:{contacts:F},middleware:function(e){return e().concat(N.a)}});o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(s.a,{store:A,children:Object(O.jsx)(v,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.1a7b04a8.chunk.js.map