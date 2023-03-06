function validareForm(){

    let x = document.forms["myform"]["name"].value;

    if(x == ""){

        alert("Please fill out this field");
        return false;
    }
}