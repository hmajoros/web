$(document).ready(function(){
    var nameString = "HENRY MAJOROS",
        nameArray = nameString.split("");

    for (var i = 0; i < nameArray.length; i++) {
        $('#name').append('<div class="flip-container"><div class="tile"><div class="tile-front"></div><div class="tile-back">' + nameArray[i] + '</div></div></div>');
    }

    $tiles = $('.flip-container');
    setTimeout( function() {
        $tiles.each(function(index) {
            var el = $(this);
            setTimeout( function(){ el.addClass('flipped'); }, index * 150);
        });
    }, 350);


    $('.header-topic').on('mouseover', function() {
        var leftPercent = this.getAttribute('data-attribute') * 20;
        $('#underline-hover').css('left', leftPercent + '%').show();
    });

    $('#header').on('mouseleave', function() {
        $('#underline-hover').hide();
    });

    $('.header-topic').click(function() {
        var leftPercent = this.getAttribute('data-attribute') * 20;

        $('#underline').animate({left: leftPercent + '%'}, 200);
    });



});

