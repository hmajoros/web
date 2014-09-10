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
        renderPhotoSection();
    }

    function setCoverHeight() {
        var screenHeight = $(window).height();
        $('#cover').css({ height: screenHeight });

        if (screenHeight < 450) {
            $('#cover').css({ height: 450 });
        }
    }

    function printNameTiles() {
        var nameString = "HENRY MAJOROS",
            nameArray = nameString.split(""),
            winHeight = $(window).height();

        for (var i = 0; i < nameArray.length; i++) {
            $('#name').append('<div class="flip-container"><div class="tile"><div class="tile-front"></div><div class="tile-back">' + nameArray[i] + '</div></div></div>');
        }

        $('#social').css({ marginTop: winHeight - 360 });

        if (winHeight < 450) {
            $('#social').css({ marginTop: 90 });
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

    function renderPhotoSection() {
        $('#photo1').css('background-image', 'url(/static/images/photos/tracks.jpg)');
        $('#photo2').css('background-image', 'url(/static/images/photos/swan.jpg)');
        $('#photo3').css('background-image', 'url(/static/images/photos/golf.jpg)');
        $('#photo4').css('background-image', 'url(/static/images/photos/lakeside.jpg)');
        $('#photo5').css('background-image', 'url(/static/images/photos/sunset.jpg)');
        $('#photo6').css('background-image', 'url(/static/images/photos/dunes.jpg)');
        
        $('.photo').css('width', '100%');
        var height = $('.photo').width() / 1.5;
        $('.photo').css('height', height); 
    }

})();

