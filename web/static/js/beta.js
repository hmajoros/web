(function () {
    
    var sidebarIsShown = true,
        headerIsShown = false,
        headerIsOpen = false;

    $(document).ready(function() {
        var winHeight = $(window).height(),
            winWidth = $(window).width();

        $('#sidebar').css({ height: winHeight });
        $('#sidebar-nav').css({ height: winHeight - 10 - 250 }); // TODO: give these numbers names
            
        $('.sidebar-nav-item').on('click', renderSidebarClick);
        $('#nav-btn').on('click', renderHeaderOpen);
        $(window).on('resize', renderPageLayout);

        renderPageLayout();        
    });

    function renderPageLayout() {
        if ($(window).width() > 768) {
            renderSidebarLayout();
        } else {
            renderHeaderLayout();
        }
    }

    function renderSidebarLayout() {
        var faceBtn = $('#face');

        if (headerIsOpen) {
            faceBtn.off().css({ cursor: 'default' });
            headerIsOpen = false;
            $('#header-nav').addClass('hide');
            faceBtn.removeClass('face-hover').css({ left: '30px' });
            $('#nav-btn').css({ right: '30px' });
        }
        $('#content').addClass('sidebar-open');
        faceBtn.css({ left: '75px' });
    }

    function renderHeaderLayout() {
        var faceBtn = $('#face'),
            faceSize = faceBtn.width(),
            winWidth = $(window).width(),
            faceLeft = (winWidth - faceSize) / 2;

        // full width content
        $('#content').removeClass('sidebar-open');

        // render face in right spot
        if (headerIsOpen) {
            faceBtn.css({ left: faceLeft });
        } else {
            faceBtn.css({ left: '30px' });
        }
    }
    
    function renderHeaderOpen() {
        var faceBtn = $('#face'),
            navBtn = $('#nav-btn'),
            header = $('#header-nav'),
            winWidth = $(window).width(),
            faceBtnWidth = parseInt(faceBtn.css('width'), 10),
            faceAnimate = (winWidth - faceBtnWidth) / 2,
            easing = 'linear';
        
        
        faceBtn.animate({left: faceAnimate}, 200, easing);
        navBtn.animate({right: 0 - faceAnimate}, 200, easing, function() {
            // other animations here
        });

        header.removeClass('hide');

        faceBtn.css({cursor: 'pointer'});
        faceBtn.addClass('face-hover');
        faceBtn.on('click', renderHeaderClose);

        headerIsOpen = true;
    }
    
    function renderHeaderClose() {
        var faceBtn = $('#face'),
            navBtn = $('#nav-btn'),
            header = $('#header-nav'),
            easing = 'linear';
        
        faceBtn.css({cursor: 'default'});
        // faceBtn.removeClass('face-hover');

        header.addClass('hide');

        faceBtn.animate({left: 30}, 200, easing);
        navBtn.animate({right: 30}, 200, easing, function() {
            faceBtn.removeClass('face-hover');
        });

        headerIsOpen = false;
    }


    function renderSidebarClick(ev) {
        var xPos = ev.pageX - $(this).offset().left, 
            yPos = ev.pageY - $(this).offset().top,
            r = 30 / 2, // initial circle diameter is 30
            self = $(this);

        $('.active').removeClass('active');

        self.prepend('<div class="clickCircle"></div>');
        $('.clickCircle').css({ top: yPos - r, left: xPos - r });
        
        r = 300; // radius of new circle, which fills entire width
        $('.clickCircle').animate({
            height: r * 2,
            width: r * 2,
            top: yPos - r,
            left: xPos - r
        }, 300, function() {
            $('.clickCircle').remove();
            self.addClass('active');
        });

    }

})();
