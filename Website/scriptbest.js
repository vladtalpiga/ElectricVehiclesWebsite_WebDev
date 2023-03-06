window.onload = function(){

    setTimeout(culoaretext, 500);

function culoaretext(){
    
    var i = -1;

    if(Math.random() < 0.5){

    t = setInterval(function(){i = (i+1)%5; 
        var b = document.querySelectorAll("input")[i]; 
        b.checked = true;
        document.body.style.color = b.value;}, 2500);

    }else{

    t = setInterval(function(){i = (i+1)%5; 
            var b = document.querySelectorAll("input")[i]; 
            b.checked = true;
            document.body.style.color = b.value;}, 600);
    }

         window.onclick = function(){

            clearInterval(t);
            localStorage.setItem("culoaretext", document.body.style.color);
    
        }
}

    if(localStorage.getItem("culoaretext"))
            document.body.style.color = localStorage.getItem("culoaretext");
}

p = document.querySelector(p);


let div = document.querySelector("#clsnm");
div.classList.remove("hh33");


const ele = document.getElementById("clsnm");
const cssSt = window.getComputedStyle(ele, null);

let bk = cssSt.getPropertyValue("background-color");
document.getElementById("compst").innerHTML = bk;


/* function func1(event) {
    alert("DIV 1");
    if (document.getElementById("check").checked) {
      event.stopPropagation();
    }
  }
  
  function func2() {
    alert("DIV 2");
  }
*/

// const list = element.classList;
// list.remove("hh33");

// let el = document.getElementsByClassName("hh33");
// el.className = "inactive";

// classList.remove("hh33");
