!function(){var e,t=void 0,a=document.querySelector(".feedback-form"),l=document.querySelector("input"),o=document.querySelector("textarea"),r=document.querySelector("button"),n={email:"",message:""};l.addEventListener("input",m),o.addEventListener("input",m),r.addEventListener("click",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("feedback-form-state"));l.value&&o.value?(console.log(t),localStorage.removeItem("feedback-form-state"),n.email="",n.message="",a.reset()):(console.log("error: not all fields are filled"),alert("All fields must be filled"))})),(e=JSON.parse(localStorage.getItem("feedback-form-state")))&&(l.value=e.email,o.value=e.message,n.email=e.email,n.message=e.message);var s=t((function(){localStorage.setItem("feedback-form-state",JSON.stringify(n))}),500);function m(e){n[this.name]=e.target.value,s()}}();
//# sourceMappingURL=03-feedback.21b570cf.js.map
