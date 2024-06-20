
$(".menuItems").find("a").on("click", function() {
    console.log(this)
    $(".checkbox").prop("checked",false);
});



$("a").on('click', function(event) {

    if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 800, function(){

        window.location.hash = hash;
    });
    } 
});


$('#contactSubmitForm').on("submit", function(e) {
    e.preventDefault();
    var blankFields = false;
    var first = document.getElementById('firstName');
    var last = document.getElementById('lastName');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    var requireds = [first, last, email, message]
    requireds.forEach(function(reqField) {
        if (reqField.value == "" ) {
            reqField.style.borderColor = 'red';
            blankFields = true;
        } else {
            if (reqField.style.borderColor == 'red') {
                reqField.style.removeProperty("border-color");
            }
        }
    })
    if (blankFields === true) {
        alert("Please fill out the required fields.")
    };
    // TODO: implement submission process
});