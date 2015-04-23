(function () {

    var curPageID = 0; // "index"
    
    $(document).ready(function() {
        var winHeight = $(window).height(),
            winWidth = $(window).width();
            
        $('.header-nav-item').on('click', renderHeaderClose);
        $('.nav-btn').on('click', renderHeaderOpen);
        $('.btn-more').on('click', clickCircleTest);
        $('.btn-less').on('click', closeInfoCnt);
        $('.sidebar-nav-item').on('click', renderSidebarClick);
        $(window).on('resize', renderPageLayout);

        renderPageLayout();
        randomizeBackgrounds();
      
    });

    function renderPageLayout() {
        var height = $(window).height();
        $('.sidebar').css({ height: height});
        $('.sidebar-nav').css({ height: height - 160 - 50 - 50 });
    }
    
    function renderHeaderOpen() {
        var faceBtn = $('.face-header'),
            navBtn = $('.nav-btn'),
            header = $('.header-nav'),
            winWidth = $(window).width(),
            faceBtnWidth = parseInt(faceBtn.css('width'), 10),
            faceAnimate = (winWidth - faceBtnWidth) / 2;
        
        
        faceBtn.animate({left: faceAnimate}, 200);
        navBtn.animate({right: 0 - faceAnimate}, 200, function() {
            header.css({ marginTop: -500 });
            header.removeClass('hide');
            header.animate({ marginTop: 0 }, 200);
        });

        faceBtn.css({cursor: 'pointer'});
        faceBtn.addClass('face-hover');
        faceBtn.on('click', renderHeaderClose);

        headerIsOpen = true;
    }
    
    function renderHeaderClose() {
        var faceBtn = $('.face-header'),
            navBtn = $('.nav-btn'),
            header = $('.header-nav'),
            easing = 'linear',
            data = $(this).data('scroll');
        
        faceBtn.css({cursor: 'default'});
        // faceBtn.removeClass('face-hover');

        header.animate({ marginTop: -500 }, 200, function() {
            header.addClass('hide');
            faceBtn.animate({left: 30}, 200, easing);
            navBtn.animate({right: 0}, 200, easing, function() {
                faceBtn.removeClass('face-hover');
            });
        });

        faceBtn.off();
        headerIsOpen = false;

        changeToPage(data);
        updateSidebar(data);
    }

    function randomizeBackgrounds() {
        $('.class-title').each(function() {
            var rand = Math.floor(Math.random() * 100) + 1;
            rand = rand + '%';
            console.warn(rand);
            $(this).css({ backgroundPositionY: rand });
        });
    }

    function clickCircleTest() {
        var self = $(this),
            parent = self.parent(),
            more = parent.find('.btn-more'),
            less = parent.find('.btn-less'),
            text = parent.find('.main-text'),
            circle;

        parent.prepend('<div class="click-circle"></div>');

        circle = parent.find('.click-circle');

        console.warn(more);
        console.warn(less);

        r = 900; // radius of new circle, which fills entire width
        circle.animate({
            height: r * 2,
            width: r * 2,
            bottom: 0 - r,
            right: 0 - r
        }, 300, 'easeInExpo', function() {
            // TODO: animate rotation fix?
            text.css({ opacity: 0 }).removeClass('hide');
            text.animate({ opacity: 1}, 300, 'easeInExpo');
            more.addClass('hide');
            less.removeClass('hide');
        });
    }

    function closeInfoCnt() {
        var self = $(this),
            parent = self.parent(),
            more = parent.find('.btn-more'),
            less = parent.find('.btn-less'),
            text = parent.find('.main-text'),
            circle = parent.find('.click-circle');

        // TODO: animate text fade out
        text.animate({ opacity: 0 }, 300, 'easeOutExpo', function() {
            circle.animate({
                height: 48,
                width: 48,
                bottom: 0,
                right: 0
            }, 300, 'easeOutExpo', function() {
                less.addClass('hide');
                more.removeClass('hide');
                circle.remove(); // important, otherwise they just stack
            });

            text.addClass('hide');
        });
    }

    function renderSidebarClick(ev) {
        var xPos = ev.pageX - $(this).offset().left, 
            yPos = ev.pageY - $(this).offset().top,
            r = 30 / 2, // initial circle diameter is 30
            self = $(this),
            data = self.data('scroll');

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

        changeToPage(data);
        updateHeader(data);
    }

    function changeToPage(pageID) {
        if (curPageID === pageID) return;

        var curr = $('#section' + curPageID),
            next = $('#section' + pageID);

        curr.animate({ opacity: 0 }, 250, function() {
            next.css({ opacity: 0 });
            next.removeClass('hide');
            curr.addClass('hide');

            next.animate({ opacity: 1 }, 250, function() {
                curPageID = pageID;
            });
        
        });

        // TODO: slide in from left/right for each new section???
    }

    function updateHeader(pageID) {
        $('.header-nav-item.active').removeClass('active');
        $('.header-nav-item[data-scroll="' + pageID + '"]').addClass('active');
    }

    function updateSidebar(pageID) {
        $('.sidebar-nav-item.active').removeClass('active');
        $('.sidebar-nav-item[data-scroll="' + pageID + '"]').addClass('active');
    }

})();
