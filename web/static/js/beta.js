(function () {
    
    var sidebarIsShown = true,
        headerIsShown = false;

    $(document).ready(function() {
        var winHeight = $(window).height(),
            winWidth = $(window).width();

        $('#sidebar').css({ height: winHeight });
        $('#sidebar-nav').css({ height: winHeight - 10 - 250 });
        // $('.content-full').css({ height: winHeight });
            
        $('.sidebar-nav-item').on('click', renderNavClick);
        
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
