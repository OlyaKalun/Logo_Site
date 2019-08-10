var frontOffice = document.getElementById("front-office-tab");
var backOffice = document.getElementById("back-office-tab");
function controller(event){
    if (event.target == frontOffice ){
        frontOffice.classList.add("border-office");
        backOffice.classList.remove("border-office");
    } else if (event.target == backOffice){
        frontOffice.classList.remove("border-office");
        backOffice.classList.add("border-office");
    }   
}

function toggleClass(elem) {
    $(elem).toggleClass('tabSpanBorder');
  };