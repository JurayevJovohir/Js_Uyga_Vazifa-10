
var elTitle = document.querySelector(".js-title");
var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elInput2 = document.querySelector(".js-input2");
var elStart = document.querySelector(".btn-start")
var elEnd = document.querySelector(".btn-end")



var array = ["Bugatti", "Corvette", "BMW", "Lamborghini", "Mercedes", "Toyota"]
elTitle.textContent = array

elStart.addEventListener('click', function (evt) {
    if (elInput.value == '') {
        return;
    }
    array.unshift(elInput.value);
    elTitle.textContent = array;
  })
  
  elEnd.addEventListener('click', function (evt) {
    
    if (elInput2.value == '') {
      return;
    }
    array.push(elInput2.value);
    elTitle.textContent = array
  } )


  elEnd.addEventListener('click', function (evt) {
    if (elInput2.value == '') {
      return;
    }
    array.push(elInput2.value);
    elTitle.textContent = array
  } )
  
  elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
  
    if (elInput.value !== '' && elInput2.value !== '') {
      array.shift(elInput.value);
      elTitle.textContent = array;
  
      array.pop(elInput2.value);
      elTitle.textContent = array;
      return;
  }
  });