$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-time");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").show();
    }
  });
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});
function hello() {
  var a = confirm("Are you like my web page");
  if (a) {
    alert("Thanks you very much");
  } else {
    alert("SORRY");
  }
}
function sendEmail() {
    // Initialize EmailJS with your user ID
    emailjs.init("vipulsoni689@gmail.com");
    emailjs.init("sS7EknPUBGq9haVU5");

    // Fetch form data
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var project = document.querySelector('input[name="project"]').value;
    var contact = document.querySelector('input[name="contact"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // Use EmailJS to send the email
    emailjs
        .send("service_behe9xc", "template_3x9jn8a", {
            name: name,
            email: email,
            project: project,
            contact: contact,
            message: message,
        })
        .then(
            function (response) {
                console.log("Email sent successfully", response);
                alert("Thanks for Contacting us..! We Will Contact You Soon...");
            },
            function (error) {
                console.error("Error sending email", error);
            }
        );
}