// filter the project cards when a button is clicked
function filterProjects(category) {
    var cards = document.getElementsByClassName("card");
    for (var i = 0; i < cards.length; i++) {
        if (category == "all" || cards[i].getAttribute("data-cat") == category) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// check the contact form before sending
function checkForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var out = document.getElementById("formMsg");

    // all fields must be filled
    if (name == "" || email == "" || msg == "") {
        out.innerHTML = "Please fill in all fields.";
        out.style.color = "red";
        return false;
    }

    // email must have @ and a dot
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        out.innerHTML = "Please enter a valid email.";
        out.style.color = "red";
        return false;
    }

    out.innerHTML = "Message sent. Thank you " + name + "!";
    out.style.color = "green";
    return false;
}