const domain = 'https://discord.com/api/webhooks/';
$(".menuItems").find("a").on("click", function() {
    console.log(this)
    $(".checkbox").prop("checked",false);
});


$(".learn-more-project").on("click", function(e) {
    e.preventDefault();
    $(this).parent().find(".learn-more-p").toggle();
    if ($(this).find("a").text() === "Learn more...") {
        $(this).find("a").text("Read less...");
    } else {
        $(this).find("a").text("Learn more...");
    }
});


// function offsetAnchor() {
//     if (location.hash.length !== 0) {
//       window.scrollTo(window.scrollX, window.scrollY - 100);
//     }
// }

// $(document).on('click', 'a[href^="#"]', function(event) {
//     window.setTimeout(function() {
//       offsetAnchor();
//     }, 0);
// });


// window.setTimeout(offsetAnchor, 0);

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


async function sendContact(e) {
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
        return;
    };

    const webhookBody = {
        embeds: [{
            title: 'Contact Form Submitted',
            fields: [
            { name: 'Name', value: first.value + " " + last.value },
            { name: 'Sender', value: email.value },
            { name: 'Phone', value: phone.value },
            { name: 'Subject', value: subject.value },
            { name: 'Message', value: message.value }
            ]
        }],
      };

    const hook = '1263893328043315271/ClIEghX9EWIRUUhVnohn1fIUdqIMnbw7kNs3sA82WVNYqmbOdAKQA8pMCN_mAMwFx0_z';

    const response = await fetch(domain + hook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });

    if (response.ok) {
        alert('I have received your message!');
        first.value = "";
        last.value = "";
        email.value = "";
        phone.value = "";
        subject.value = "";
        message.value = "";
    } else {
        alert('There was an error! Try again later!');
    }

}

