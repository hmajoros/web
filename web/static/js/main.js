(function() {

    $(document).ready(onPageLoad());


    function onPageLoad() {
        /* bind event listeners */
        $('.header-topic').on('mouseover', renderHeaderMouseover);
        $('.header-topic').on('click', renderHeaderClick);
        $('#header').on('mouseleave', renderHeaderMouseleave);
        $(window).on('scroll', fadeCover);

        /* call page load functions */
        setCoverHeight();
        printNameTiles();
        flipNameTiles();
    }

    function setCoverHeight() {
        var screenHeight = $(window).height();
        $('#cover').css({height: screenHeight});
    }

    function printNameTiles() {
        var nameString = "HENRY MAJOROS",
            nameArray = nameString.split("");

        for (var i = 0; i < nameArray.length; i++) {
            $('#name').append('<div class="flip-container"><div class="tile"><div class="tile-front"></div><div class="tile-back">' + nameArray[i] + '</div></div></div>');
        }
    }

    function flipNameTiles() {
        $('<img/>').attr('src', '/static/images/cover-full.jpg').load(function() {
            $(this).remove(); // to prevent a memory leak
            $('#cover').css('background-image', 'url(/static/images/cover-full.jpg)');

            $tiles = $('.flip-container');
            setTimeout( function() {
                $tiles.each(function(index) {
                    var el = $(this);
                    setTimeout( function(){ el.addClass('flipped'); }, index * 150);
                });
            }, 200);
        });
    }

    function renderHeaderMouseover() {
        var leftPercent = this.getAttribute('data-attribute') * 20;
        $('#underline-hover').css('left', leftPercent + '%').show();
    }

    function renderHeaderMouseleave() {
        $('#underline-hover').hide();
    }

    function renderHeaderClick() {
        var leftPercent = this.getAttribute('data-attribute') * 20;
        $('#underline').animate({left: leftPercent + '%'}, 200);
    }

    function fadeCover() {
        var coverHeight = $(window).height(),
            scrollTop = $(window).scrollTop(),
            imageOpacity = 1 - (scrollTop / coverHeight / 4),
            nameOpacity = 1 - (scrollTop / coverHeight * 6),
            socialOpacity = 1 - (scrollTop / coverHeight * 1.7);

        // $('#cover').css({ opacity: imageOpacity });
        $('#name').css({ opacity: nameOpacity });
        $('#social').css({ opacity: socialOpacity });
    }

})();
