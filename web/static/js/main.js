// (function() {

//     var App = function() {
//         this.
//     };

//     App.prototype.onLoaded = function() {
//         // body...
//     };

// })();



$(document).ready(function(){
    var nameString = "HENRY MAJOROS",
        nameArray = nameString.split("");

    for (var i = 0; i < nameArray.length; i++) {

        $('#name').append('<div class="letter">' + nameArray[i] + '</div>');
    }

    $('.header-topic').on('mouseover', function() {
        var leftPercent = this.getAttribute('data-attribute') * 20;
        $('#underline-hover').css('left', leftPercent + '%').show();
    });

    // $('#header').on('mouseenter', function() {
    //     var leftPercent = this.getAttribute('data-attribute') * 20;
    //     $('#underline-hover').css('left', leftPercent + '%').show();
    // });

    $('#header').on('mouseleave', function() {
        $('#underline-hover').hide();
    });

    $('.header-topic').click(function() {
        var leftPercent = this.getAttribute('data-attribute') * 20;

        $('#underline').animate({left: leftPercent + '%'}, 200);
    })
});

