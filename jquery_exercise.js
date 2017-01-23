var phrases=[
	"Un sonrisa cuesta poco y vale mucho.",
	"Word hard, dream big.",
	"Make yourself strong than your excuses.",
	"Tears are words that need to be written."
]

var phrase = phrases [Math.floor(Math.random()*phrases.length)];
$('.write').append(phrase);

var newPhrases = [];
$(document).keypress(function(e) {
    if(e.which == 13) {
    newPhrases = $(".input").val();
	$(".listphrases").append("<h4>" + newPhrases + "  " + "<span class='glyphicon glyphicon-remove'></span>" + '</h4>');
	}
$("span").on('click', function(event) {
    event.preventDefault()
    $("h4").remove();
});

});

$(document).ready(function(){
    $("#hide").click(function(){
        $("h4").hide();
    });
    $("#show").click(function(){
        $("h4").show();
    });
});



   