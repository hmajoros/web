(function () {
    
    var sidebarIsShown = true,
        headerIsShown = false,
        headerIsOpen = false;

    $(document).ready(function() {
        var winHeight = $(window).height(),
            winWidth = $(window).width();

        $('#sidebar').css({ height: winHeight });
        $('#sidebar-nav').css({ height: winHeight - 10 - 250 });
        // $('.content-full').css({ height: winHeight });
            
        $('.sidebar-nav-item').on('click', renderNavClick);
        $('#nav-btn').on('click', renderHeaderClick);
        
        $(window).on('resize', renderPageLayout);
        
        
        renderPageLayout();        
    });

    function renderPageLayout() {
        if ($(window).width() > 768) {
            $('#sidebar').removeClass('hide');
            $('#content').addClass('sidebar-open');
        } else {
            $('#sidebar').addClass('hide');
            $('#content').removeClass('sidebar-open');
        }
    }
    
    function renderHeaderClick() {
        console.warn('headerClick');
        
        if (!this.headerIsOpen) {
            renderHeaderOpen();
        } else {
            renderHeaderClose();
        }
    }
    
    function renderHeaderOpen() {
        var faceBtn = $('#face'),
            navBtn = $('#nav-btn'),
            winWidth = $(window).width(),
            faceBtnWidth = parseInt(faceBtn.css('width'), 10),
            faceAnimate = (winWidth - faceBtnWidth) / 2,
            easing = 'linear';
        
        
        faceBtn.animate({left: faceAnimate}, 200, easing);
        navBtn.animate({right: 0 - faceAnimate}, 200, easing, function() {
            // other animations here
        });
        
        faceBtn.css({cursor: 'pointer'});
        faceBtn.on('click', renderHeaderClose);
    }
    
    function renderHeaderClose() {
        var faceBtn = $('#face'),
            navBtn = $('#nav-btn'),
            easing = 'linear';
        
        faceBtn.css({cursor: 'default'});
        
        faceBtn.animate({left: 30}, 200, easing);
        navBtn.animate({right: 30}, 200, easing);
    }


    function renderNavClick(ev) {
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
