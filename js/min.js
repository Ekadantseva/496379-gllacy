document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector(".vidget-contacts .button-small"),o=document.querySelector(".popup"),s=o.querySelector(".popup-close"),r=o.querySelector("[name=user-name]"),a=o.querySelector("[name=user-email]"),u=o.querySelector("[name=message]"),l=document.querySelector(".popup .button-small"),n=localStorage.getItem("user-name"),c=localStorage.getItem("user-email");t.addEventListener("click",function(e){e.preventDefault(),o.classList.add("popup-show"),n?(r.value=n,c?(a.value=c,u.focus()):a.focus()):r.focus()}),s.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("popup-show"),o.classList.remove("popup-error")}),l.addEventListener("click",function(e){r.value&&a.value&&u.value?(localStorage.setItem("user-name",r.value),localStorage.setItem("user-email",a.value)):(e.preventDefault(),o.classList.remove("popup-error"),o.offsetWidth=o.offsetWidth,o.classList.add("popup-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&o.classList.contains("popup-show")&&(o.classList.remove("popup-show"),o.classList.remove("popup-error"))})});
