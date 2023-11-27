// value of 0, 0, 0
const subhanallah = document.getElementById("subhanallah");
const alhamdulillah = document.getElementById("alhamdulillah");
const allahhuakbar = document.getElementById("allahhuakbar");


// class called increment by default
const btnAddSubhanallah = document.querySelector(".btn-add-subhanallah");
const btnAddAlhamdulillah = document.querySelector(".btn-add-alhamdulillah");
const btnAddAllahhuakbar = document.querySelector(".btn-add-allahhuakbar");

// class called decrement by default
const btnSubstractSubhanallahreset = document.querySelector(".btn-substract-subhanallah");
const btnSubstractAlhamdulillahreset = document.querySelector(".btn-substract-alhamdulillah");
const btnSubstractAllahhuakbarreset = document.querySelector(".btn-substract-allahhuakbar");

// reset button
const btnReset = document.querySelector(".btn");

let countSubhanallahValue = 0;
let countAlhamdulillahValue = 0;
let countAllahhuakbarValue = 0;

btnAddSubhanallah.addEventListener("click", function () {
  if (countSubhanallahValue < 33) {
    countSubhanallahValue++;
    subhanallah.innerText = countSubhanallahValue;
    if (countSubhanallahValue === 33) {
      return Swal.fire({
        position: "center",
        icon: "success",
        title: "Sudah 33 Kali :)",
        showConfirmButton: false,
        timer: 2500
      });
    }
  }
});

btnSubstractSubhanallahreset.addEventListener("click", function () {
  if (countSubhanallahValue > 0) {
    countSubhanallahValue--;
    subhanallah.innerText = countSubhanallahValue;
    if (countSubhanallahValue === 0) {
      return alert("Can't added negative value");
    }
  }
});

btnAddAlhamdulillah.addEventListener("click", function () {
    if (countAlhamdulillahValue < 33) {
      countAlhamdulillahValue++;
      alhamdulillah.innerHTML = countAlhamdulillahValue;
      if (countAlhamdulillahValue === 33) {
        return Swal.fire({
            position: "center",
            icon: "success",
            title: "Sudah 33 Kali :)",
            showConfirmButton: false,
            timer: 2500
          });
      }
    }
  });
  btnSubstractAlhamdulillahreset.addEventListener("click", function () {
    if (countAlhamdulillahValue > 0) {
      countAlhamdulillahValue--;
      alhamdulillah.innerHTML = countAlhamdulillahValue;
      if (countAlhamdulillahValue === 0) {
        return alert("Can't added negative value");
      }
    }
  });


  btnAddAllahhuakbar.addEventListener("click", function () {
    if (countAllahhuakbarValue < 33) {
      countAllahhuakbarValue++;
      allahhuakbar.innerHTML = countAllahhuakbarValue;
    }
    if (countAllahhuakbarValue === 33) {
      return alert(
        "Allahhuakbar complete, please complete SubhanAllah and Alhamdulillah"
      );
    }
  });
  btnSubstractAllahhuakbarreset.addEventListener("click", function () {
    if (countAllahhuakbarValue > 0) {
      countAllahhuakbarValue--;
      allahhuakbar.innerHTML = countAllahhuakbarValue;
      if (countAllahhuakbarValue === 0) {
        return alert("Can't added negative value");
      }
    }
  });
  
  btnReset.addEventListener("click", function () {
    countSubhanallahValue = 0;
    countAlhamdulillahValue = 0;
    countAllahhuakbarValue = 0;
    subhanallah.innerHTML = countSubhanallahValue;
    alhamdulillah.innerHTML = countAlhamdulillahValue;
    allahhuakbar.innerHTML = countAllahhuakbarValue;
  });
