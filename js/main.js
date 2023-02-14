(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        // $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        window.location = "https://wa.me/919876787172"
        return false;
    });


    // Modal Video
    // var $videoSrc;
    // $('.btn-play').click(function () {
    //     $videoSrc = $(this).data("src");
    // });
    // console.log($videoSrc);
    // $('#videoModal').on('shown.bs.modal', function (e) {
    //     $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    // })
    // $('#videoModal').on('hide.bs.modal', function (e) {
    //     $("#video").attr('src', $videoSrc);
    // })


    // Project and Testimonial carousel
    $(".project-carousel, .testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);


//=========== Snackbar
function snackbar(msg) {
    var snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = msg;
    snackbar.className = "show";
    setTimeout(function () { snackbar.className = snackbar.className.replace("show", ""); }, 4000);
}

//=========== Book a Call Form
function bookCall() {
    let name = document.getElementById("name");
    let mail = document.getElementById("mail");
    let contact = document.getElementById("mobile");
    let message = document.getElementById("message");
    let timeSlot = document.getElementById("time");

    if (name.value == "") {
        name.focus();
        snackbar("Please enter your name");
        return;
    }

    if (mail.value == "") {
        mail.focus();
        snackbar("Please enter you Email ID");
        return;
    }

    if (contact.value == "") {
        contact.focus();
        snackbar("Please enter your contact number");
        return;
    }

    if (timeSlot.value == "empty") {
        timeSlot.focus();
        snackbar("Please select a time slot");
        return;
    }

    if (message.value == "") {
        message.focus();
        snackbar("Please enter your message");
        return;
    }

    snackbar("Please wait...");

    setTimeout(() => {
        emailjs.send("service_so52d5g", "template_nn4djfe", {
            name: name.value,
            mail: mail.value,
            contact: contact.value,
            message: message.value,
            timeSlot: timeSlot.value
        })
            .then(() => {
                name.value = "";
                mail.value = "";
                contact.value = "";
                message.value = "";
                timeSlot.value = "10 AM - 11 PM";
                setTimeout(() => { snackbar("Thank you! We will contact you soon.") }, 2000)
            });
    }, 2000)
}

//============ Contact Us Form
function contactUs() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    if (name.value == "") {
        name.focus();
        snackbar("Please enter your name");
        return;
    }

    if (email.value == "") {
        email.focus();
        snackbar("Please enter your mail address");
        return;
    }

    if (subject.value == "") {
        subject.focus();
        snackbar("Please enter a subject");
        return;
    }

    if (message.value == "") {
        message.focus();
        snackbar("Please enter a message");
        return;
    }

    snackbar("Please wait...");

    setTimeout(() => {
        emailjs.send("service_so52d5g", "template_8wsl84u", {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        })
            .then((res) => {
                name.value = "";
                email.value = "";
                subject.value = "";
                message.value = "";
                setTimeout(() => { snackbar("Thank you! We will contact you soon.") }, 2000)
            });
    }, 2000);
}