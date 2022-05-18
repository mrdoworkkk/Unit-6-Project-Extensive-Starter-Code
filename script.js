$(".yes-button").click(function() {
    $(".Part-Two-Yes").show();
    $(".story-start ").hide();

});

$(".treasure-img").dblclick(function() {
    $(".Story-Ending-Yes").show();
    $(".Part-Two-Yes ").hide();

});


$(".Part-Two-Yes").hide();
$(".Part-Two-No").hide();
$(".Story-Ending-Yes").hide();
$(".Story-Ending-No").hide();

$(".no-button").click(function() {
    $(".Part-Two-No").show();
    $(".story-start ").hide();
    $("body").css("background-color", "red");
});

$(".Bad-choice").dblclick(function() {
    $(".Story-Ending-No").show();
    $(".Part-Two-No ").hide();

});