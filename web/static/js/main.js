(function() {

    var currentSection = 0; // TODO: figure out another way where this isn't a global

    $(document).ready(onPageLoad());

    // var photoInfo = {
    //     url: " ",
    //     title: " ",
    //     desc: " "
    // };

    // var photoArray = [];
    // photoArray.push({ url: 'tracks.jpg', title: 'Tracks', desc: 'my description for this photo, it tells more about the backstory and shit like that' });
    // photoArray.push({ url: 'swan.jpg', title: 'Swan', desc: 'heres another description fro the swan photo. blab bla lj bla bl blabblha blbha blah bl' });
    // photoArray.push({ url: 'golf.jpg', title: 'Golf', desc: 'this is a nother photo and my spelling is really bad cause im tyruing to type fase' });
    // photoArray.push({ url: 'lakeside.jpg', title: 'Lakeside', desc: 'i really like this picture it was take up in glen arbor, MI' });
    // photoArray.push({ url: 'sunset.jpg', title: 'Sunset', desc: 'this pic was taken outside of south beach miami on the drive down to key west' });
    // photoArray.push({ url: 'dunes.jpg', title: 'Dunes', desc: 'taken summer 2014 at sleeping bear dunes. love this picture its neat' });

    function onPageLoad() {
        /* bind event listeners */
        $('.header-topic').on('mouseover', renderHeaderMouseover);
        $('.header-topic').on('click', renderHeaderClick);
        $('#header').on('mouseleave', renderHeaderMouseleave);
        $(window).on('scroll', fadeCover);
        $(window).on('scroll', renderHeader);

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
        var baseURL = '/static/images/photos/',
            photoArray = [];
            
        photoArray.push({ url: 'tracks.jpg', title: 'Tracks', desc: 'my description for this photo, it tells more about the backstory and shit like that' });
        photoArray.push({ url: 'swan.jpg', title: 'Swan', desc: 'heres another description fro the swan photo. blab bla lj bla bl blabblha blbha blah bl' });
        photoArray.push({ url: 'golf.jpg', title: 'Golf', desc: 'this is a nother photo and my spelling is really bad cause im tyruing to type fase' });
        photoArray.push({ url: 'lakeside.jpg', title: 'Lakeside', desc: 'i really like this picture it was take up in glen arbor, MI' });
        photoArray.push({ url: 'sunset.jpg', title: 'Sunset', desc: 'this pic was taken outside of south beach miami on the drive down to key west' });
        photoArray.push({ url: 'dunes.jpg', title: 'Dunes', desc: 'taken summer 2014 at sleeping bear dunes. love this picture its neat' });

        for (var i = 0; i < photoArray.length; i++) {
            var elem = '#photo' + (i + 1);
            $(elem).css('background-image', 'url(' + baseURL + photoArray[i].url + ')');
            $(elem).find('.photo-text').append('<h3>' + photoArray[i].title + '</h3>');
            $(elem).find('.photo-text').append('<p>' + photoArray[i].desc + '</p>');
        }

        $('.photo').css('width', '100%');
        var height = $('.photo').width() / 1.5;
        $('.photo').css('height', height); 
    }
    
    function renderHeader() {
        var break1 = $('#education').offset().top,
            break2 = $('#experience').offset().top,
            break3 = $('#photos').offset().top,
            break4 = $('#contact').offset().top,
            scroll = $(window).scrollTop(),
            newSection;

        if (scroll < break1) {
            newSection = 0;
        } else if (break1 <= scroll && scroll < break2) {
            newSection = 1;
        } else if (break2 <= scroll && scroll < break3) {
            newSection = 2;
        } else if (break3 <= scroll && scroll < break4) {
            newSection = 3;
        } else {
            newSection = 4;
        }

        if (newSection != currentSection) {
            var leftPercent = (newSection * 20) + '%'; 
            $('#underline').animate({ left: leftPercent },  200);
            currentSection = newSection;
        }
    }
        
})();


