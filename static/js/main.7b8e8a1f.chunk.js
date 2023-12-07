(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(39)},20:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(8),s=t.n(i),r=(t(20),t(1)),c=t(2),o=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}},"I am a ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/1.jpg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=t(6),E=t.n(f),v=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={modalIsOpen:!1,selectedProject:null},t.openModal=function(e){t.setState({modalIsOpen:!0,selectedProject:e})},t.closeModal=function(){t.setState({modalIsOpen:!1,selectedProject:null})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.modalIsOpen,n=a.selectedProject,i=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"sixteen columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},i.portfolio&&i.portfolio.map(function(a,t){return l.a.createElement("div",{key:t,className:"columns portfolio-item"},l.a.createElement("div",{className:""},l.a.createElement("a",{onClick:function(){return e.openModal(a)}},l.a.createElement("img",{src:"".concat(a.imgurl),className:"item-img",alt:a.name,style:{cursor:"pointer"}}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",{style:{color:"orangered"}},a.name),l.a.createElement("p",{style:{color:"black"}},a.description))))))})))),l.a.createElement(E.a,{isOpen:t,onRequestClose:this.closeModal,contentLabel:"Project Modal"},n&&l.a.createElement("div",null,l.a.createElement("h2",null,n.name),l.a.createElement("p",null,n.tech),l.a.createElement("p",null,n.content),l.a.createElement("button",{onClick:this.closeModal},"Close Modal"))))}}]),a}(n.Component),g=(t(33),t(37),function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).initFlexSlider=function(){window.$(".flexslider").flexslider({animation:"slide",controlNav:!1,directionNav:!0,prevText:"<",nextText:">"})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.initFlexSlider()}},{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"More About ME"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))))))}}]),a}(n.Component)),b=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={modalIsOpen:!1,selectedProject:null},t.openModal=function(e){t.setState({modalIsOpen:!0,selectedProject:e})},t.closeModal=function(){t.setState({modalIsOpen:!1,selectedProject:null})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.state.modalIsOpen,t=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in :",t.linkedinId,l.a.createElement("a",{onClick:function(){return e.openModal()}}," hedla@gmail.com"))))),l.a.createElement(E.a,{isOpen:a,onRequestClose:this.closeModal,contentLabel:"Project Modal"},l.a.createElement("div",null,l.a.createElement("div",{className:"dorik-row-lz6xnjth flex popup-row"},l.a.createElement("div",{className:"col-lg-1/1"},l.a.createElement("div",{className:"column-inner dorik-column-4nny02t8 1/1"},l.a.createElement("button",{style:{fontSize:"10px",width:"10%"},onClick:this.closeModal},"Close Modal"),l.a.createElement("form",{id:"o9rzg21r fs-frm",name:"simple-contact-form",method:"POST",action:"https://formspree.io/f/mdorvjjl"},l.a.createElement("div",{className:"dorik-customForm-o9rzg21r"},l.a.createElement("div",{className:"customform-field-wrapper customform-field-email customform-column-6"},l.a.createElement("label",{className:"form-field-label",htmlFor:"email-address"},"Email",l.a.createElement("span",{className:"required-mark"},"*")),l.a.createElement("input",{type:"email",placeholder:"Your email address",name:"_replyto",required:"",id:"email-address",className:"form-field-input"})),l.a.createElement("div",{className:"customform-field-wrapper customform-field-email customform-column-6"},l.a.createElement("label",{className:"form-field-label",htmlFor:"full-name"},"Name",l.a.createElement("span",{className:"required-mark"},"*")),l.a.createElement("input",{type:"text",placeholder:"Name",name:"name",required:"",id:"full-name",className:"form-field-input"})),l.a.createElement("div",{className:"customform-field-wrapper customform-field-textarea customform-column-6"},l.a.createElement("label",{className:"form-field-label",htmlFor:"message"},"Message",l.a.createElement("span",{className:"required-mark"},"*")),l.a.createElement("textarea",{name:"message",placeholder:"Your message",required:"",id:"message",className:"form-field-input textarea"})),l.a.createElement("input",{type:"hidden",name:"_subject",id:"email-subject",value:"Contact Form Submission"}),l.a.createElement("div",{className:"customform-field-wrapper"},l.a.createElement("button",{type:"submit",className:"customform-button",value:"submit",id:""},l.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"rocket",className:"svg-inline--fa fa-rocket icon customform-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{fill:"currentColor",d:"M142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"})),l.a.createElement("span",{className:"icon-text-spacer"}),"Submit Form",l.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"spinner",className:"svg-inline--fa fa-spinner fa-spin fa-fw customform-icon spinner",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",style:{display:"none",marginLeft:"5px"}},l.a.createElement("path",{fill:"currentColor",d:"M142.9 437c18.7-18.7 18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zm0-294.2c18.7-18.7 18.7-49.1 0-67.9S93.7 56.2 75 75s-18.7 49.1 0 67.9s49.1 18.7 67.9 0zM369.1 437c18.7 18.7 49.1 18.7 67.9 0s18.7-49.1 0-67.9s-49.1-18.7-67.9 0s-18.7 49.1 0 67.9z"})))),l.a.createElement("input",{type:"hidden",name:"_t",value:"Y29udGFjdEBzaG91cmF2LmRlc2lnbg=="}),l.a.createElement("input",{type:"hidden",name:"_sub",value:"Custom Form from Dorik"})))))),"              ")))}}]),a}(n.Component),N=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),y={imagebaseurl:"https://rbhatia46.github.io/",name:"Hareen Edla",role:"Frontend Developer and Data Scientist",linkedinId:"edla_hareen",skypeid:"Hareen Edla",roleDescription:"I like dabbling in various parts of frontend development and like to learn about new technologies, write technical articles or simply play games in my free time.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/edlahareen",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/hareenedla",className:"fa fa-github"},{name:"skype",url:"http://twitter.com/edlahareen",className:"fa fa-twitter"}],aboutme:"I am currently pursuing my masters at Saint louis Universityand pursuing my Master of Science in Computer Science from here. I am a self taught Full Stack Web Developer, currently diving deeper into Machine Learning. I believe that to be successful in life, one needs to be obsessive with their dreams and keep working towards them.",address:"India",website:"https://edlahareen.github.io",education:[{UniversityName:"Saint louis University",specialization:"Computer Science",MonthOfPassing:"May",YearOfPassing:"2025",Achievements:"Some Achievements"},{UniversityName:"Osmania University",specialization:"Bsc Computer Science",MonthOfPassing:"June",YearOfPassing:"2022",Achievements:"Some Achievements"}],work:[{CompanyName:"Accenture",specialization:"Low code Developer",MonthOfLeaving:"july",YearOfLeaving:"2023",Achievements:"Some Achievements"},{CompanyName:"Excelerate",specialization:"Data Analyst",MonthOfLeaving:"august",YearOfLeaving:"2023",Achievements:"Some Achievements"}],skillsDescription:"Your skills here",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Reactjs"}],portfolio:[{name:"Dowsiness Detection System using Python",description:"Engineered an advanced drowsiness detection system using Python and computer vision techniques to enhance driver safety on extended journeys. Leveraged OpenCV to capture real-time video from an in-vehicle camera and applied facial landmarks detection to accurately analyze driver behavior, including eye closure through eye aspect ratio (EAR) calculations.",imgurl:"images/portfolio/drow.jpeg",tech:"Technologies used Python, SQLite, OpenCV ",content:"Engineered an advanced drowsiness detection system using Python and computer vision techniques to enhance driver safety on extended journeys. Leveraged OpenCV to capture real-time video from an in-vehicle camera and applied facial landmarks detection to accurately analyze driver behavior, including eye closure through eye aspect ratio (EAR) calculations.\u2022 Integrated an alarm system triggered by identified drowsiness signs, proactively alerting drivers to take corrective actions."},{name:"Data Visualization on Facebook Dataset",description:" Facilitated data-driven strategies by effectively communicating findings across various domains, amplifying the impact of data analysis on organizational objectives.",imgurl:"images/portfolio/d.jpg",tech:"Technologies used Tableau,Excel,python",content:"Expert Visual Translator: Proficient in converting complex datasets into clear, intuitive visuals, facilitating easy comprehension and decision-making.insightful Graphics Creation: Skilled in crafting visuals that directly address critical business queries, enriching understanding and guiding informed choices. Adherence to Best Practices: Applied top-tier data visualization standards to transform raw data into engaging presentations, ensuring clarity and precision in communication. Mastery of Tools and Techniques: Proficiented navigate a spectrum of visualization tools and methods, ensuring accurate representation and resonance with diverse audiences. Impactful Communication: Facilitated data-driven strategies by effectively communicating findings across various domains, amplifying the impact of data analysis on organizational objectives."},{name:"Book Next",description:"Client-Based App that provides a 2-Dimensional (2-D) theatre module with 2-D seats, allowing the client to select a seat as per convenience for a required movie, payment with an in-built scientific calculator, booking history, and ticket cancellation",imgurl:"images/portfolio/m.jpg",tech:"Technologies used Java ,Netbeans        ",content:"\u2022Client-Based App that provides a 2-Dimensional (2-D) theatre module with 2-D seats, allowing the client to select a seat as per convenience for a required movie, payment with an in-built scientific calculator, booking history, and ticket cancellation \u2022 Integrated Java and MySQL using the JDBC driver through the Apache Netbeans IDE to develop the application, which offered various swing components in the Java library"}],testimonials:[{description:"Video Games ",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},w=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:y}),l.a.createElement(p,{resumeData:y}),l.a.createElement(h,{resumeData:y}),l.a.createElement(v,{resumeData:y}),l.a.createElement(g,{resumeData:y}),l.a.createElement(b,{resumeData:y}),l.a.createElement(N,{resumeData:y}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.7b8e8a1f.chunk.js.map