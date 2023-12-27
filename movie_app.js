$(function () {
    $(".submit").on('click', function() {
       let movie = $(".movie_title").val();
       let rating = $(".rating").val();
       $("ul").append($("<li>", {text:`${movie}: ${rating}/10`}));
    });
    $(".remove").on('click', function() {
        $("li:last-child").remove();
     });
});