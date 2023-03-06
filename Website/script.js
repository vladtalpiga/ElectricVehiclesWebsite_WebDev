document.querySelector("button").onclick = adauga;

function adauga(){

    var articol = document.createElement("article");

    var titlu = document.createElement("h3");

    var data = new Date();

    titlu.innerHTML = document.getElementById("prodrec").value + " - posted on " + data;

    articol.appendChild(titlu);

    var par = document.createElement("p");

    par.innerHTML = document.getElementById("post").value;

    par.style.color = "yellow";

    articol.appendChild(par);

    document.querySelector("#postari").appendChild(articol);

    articol.ondblclick = function(){

        document.querySelector("#postari").removeChild(articol);
    }

    articol.className = "post";
}

function targ(event) { 

    var x = event.target;
    document.getElementById("elemtarg").innerHTML = "Triggered by a " + x.tagName + " element";
  }

function currtarg(event) { 
    alert(event.currentTarget.nodeName);
  }