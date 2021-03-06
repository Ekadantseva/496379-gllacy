// модальное окна
var initPopup = function(){
  var link = document.querySelector(".vidget-contacts .button-small");
  if(link)
  {
	  var popup = document.querySelector(".popup");
	  var close = popup.querySelector(".popup-close");
	  var userName = popup.querySelector("[name=user-name]");
	  var userEmail = popup.querySelector("[name=user-email]");
	  var message = popup.querySelector("[name=message]");

	  var submit = document.querySelector(".popup .button-small");

	  var nameStorage = localStorage.getItem("user-name");
	  var emailStorage = localStorage.getItem("user-email");

	  link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("popup-show");

		if (nameStorage) {
		  userName.value = nameStorage;
		  if(emailStorage)
		  {
			userEmail.value = emailStorage
			message.focus();
		  }
		  else {
			userEmail.focus();
		  }
		}
		else{
		  userName.focus();
		}
	  });

	  close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("popup-show");
		popup.classList.remove("popup-error");
	  });

	  submit.addEventListener("click", function (evt) {
		if (!userName.value || !userEmail.value || !message.value) {
			  evt.preventDefault();
			  popup.classList.remove("popup-error");
			  popup.offsetWidth = popup.offsetWidth;
			  popup.classList.add("popup-error");
			} else {
			  localStorage.setItem("user-name", userName.value);
			  localStorage.setItem("user-email", userEmail.value);
		  }
	  });
	  window.addEventListener("keydown", function (evt) {
		  if (evt.keyCode === 27) {
			if (popup.classList.contains("popup-show")) {
			  popup.classList.remove("popup-show");
			  popup.classList.remove("popup-error");
			}
		  }
	  });
  }
}

//добавление в корзину
var initBasket = function(){
  var addToBasketBtnArr = document.querySelectorAll(".catalog-item .button-small");
  for(var i=0; i<addToBasketBtnArr.length;i++)
  {
		addToBasketBtnArr[i].addEventListener("click", function (evt) {
	  var basketLnk = document.querySelector("a.button-basket");
	  if(basketLnk)
		basketLnk.classList.add("full");
	});
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
	initPopup();
	initBasket();
});
