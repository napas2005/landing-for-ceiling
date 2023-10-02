let form = document.querySelector(".form"),
  formInputs = document.querySelectorAll(".input-js"),
  formNumber = document.querySelector(".input-number-js"),
  alertSuccess = document.querySelector(".success-submit"),
  formButton = document.querySelector(".form-button"),
  scrollButton = document.querySelector(".scroll-button"),
  mainLink = document.querySelector(".main-link"),
  mainLink2 = document.querySelector(".main-link2"),
  sliderWidth = document.querySelector('.slider')
  aboutLink = document.querySelector(".about-link"),
  aboutLink2 = document.querySelector(".about-link2"),
  aboutContainer = document.querySelector('.about-container'),
  servicesLink = document.querySelector(".services-link"),
  servicesLink2 = document.querySelector(".services-link2"),
  services = document.querySelector('.line'),
  infoWhyLink = document.querySelector(".info-why-link"),
  infoWhyLink2 = document.querySelector(".info-why-link2"),
  infoWhyContainer = document.querySelector(".info-container"),
  contactsLink = document.querySelector(".contacts-link")
  contactsLink2 = document.querySelector(".contacts-link2")
  ;



  const TOKEN = '5919140230:AAH2amUiWKAGXnm2KLKr1LZjWXo4YBVcams';
  const CHAT_ID = '-1001893307635';
  const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

  function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
  }
  
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if(validateForm() === true){
    let message =`<b>Замовлення за сайту!</b>\n`;
    message += `<b>Ім'я: </b> ${this.name.value}\n`
    message += `<b>Номер: </b> ${this.number.value}`
  
    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })
    .then((res) => {
      this.number.value = "";
      this.name.value = "";
      alertSuccess.style.display = "block";
      formButton.style.marginTop = "48px";
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      console.log("Final");
    })
  }
  else {
    console.log("Form was not submitted");
  }
});


function validateForm() {
  console.log("form works!!!");
  let phoneValue = formNumber.value;
  let error = 0;
  emptyInputs = Array.from(formInputs).filter((input) => input.value === "");

  formInputs.forEach(function (input) {
    if (input.value === "") {
      input.classList.add("error");
      input.placeholder = "Заповніть поле";
      error = false;
    } else {
      input.classList.remove("error");
      error = true;
    }
  });

  if (!validatePhone(phoneValue)) {
    console.log("phone not valid");
    formNumber.classList.add("error");
    formNumber.value = "";
    formNumber.placeholder = "Введіть лише числа";
    error = false;
  } else {
    console.log("Phone is correct");
  }

  if (emptyInputs.length !== 0) {
    console.log("inputs not filled");
    return false;
  }
  return error;
}

scrollButton.onclick = (e) => {
  e.preventDefault();
  form.scrollIntoView({behavior: 'smooth'});
}
mainLink.onclick = (e) => {
  e.preventDefault();
  sliderWidth.scrollIntoView({behavior: 'smooth'});
}

mainLink2.onclick = (e) => {
  e.preventDefault();
  sliderWidth.scrollIntoView({behavior: 'smooth'});
}

aboutLink.onclick = (e) => {
  e.preventDefault();
  aboutContainer.scrollIntoView({behavior: 'smooth'});
}
aboutLink2.onclick = (e) => {
  e.preventDefault();
  aboutContainer.scrollIntoView({behavior: 'smooth'});
}

servicesLink.onclick = (e) => {
  e.preventDefault();
  services.scrollIntoView({behavior: 'smooth'});
}
servicesLink2.onclick = (e) => {
  e.preventDefault();
  services.scrollIntoView({behavior: 'smooth'});
}

infoWhyLink.onclick = (e) => {
  e.preventDefault();
  infoWhyContainer.scrollIntoView({behavior: 'smooth'});
}

infoWhyLink2.onclick = (e) => {
  e.preventDefault();
  infoWhyContainer.scrollIntoView({behavior: 'smooth'});
}

contactsLink.onclick = (e) => {
  e.preventDefault();
  form.scrollIntoView({behavior: 'smooth'});
}

contactsLink2.onclick = (e) => {
  e.preventDefault();
  form.scrollIntoView({behavior: 'smooth'});
}