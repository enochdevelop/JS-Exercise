function chkName() {
    var myName = event.currentTarget;
    var pos = myName.value.search(/^[A-Z][a-z]+, ?[A-Z][a-z]+, ?[A-Z]\.?$/);

    if (pos != 0) {
        alert("The name you entered (" + myName.value +
            ") is not in the correct form. \n" +
            "The correct form is: " +
            "last-name, first-name, middle-initial \n" +
            "Please go back and fix your name");
    }
}

function chkAge() {
    var myAge = event.currentTarget;

    if (parseInt(myAge.value) <= 17) {
        alert("Age is over 17");
    }

}

function chkWeight() {
    var myWeight = event.currentTarget;

    if (parseInt(myWeight.value) < 80 || parseInt(myWeight.value) > 300) {
        alert("Weight should be between 80 - 300 ");

    }
}