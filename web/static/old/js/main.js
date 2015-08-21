(function () {

    $(document).ready(function() {

        resizeBG();

        $(window).on('resize', resizeBG);
        $('.tile-split').on('click', renderSiteSection);
    });

    function resizeBG() {
        var height = $(window).height();

        $('.bg-full').css({ height: height });
    }

    function renderSiteSection() {
        /* POSSIBLE START TO NEW FUNCTION */
        var self = $(this),
            top = self.offset().top,
            left = self.offset().left,
            width = self.width(),
            height = self.find('.upper').height() + 48,
            color = self.find('.upper').css('background-color'),
            section;

        $('.bg-full').addClass('no-scroll');

        // TODO: make sure to delete .section-full when done
        self.parent().append('<div class="section-full"></div>');

        section = $('.section-full');
        section.css({ top: top, left: left, width: width, height: height, backgroundColor: color });

        /* POSSIBLE END TO NEW FUNCTION */

        section.animate({ top: 0, left: 0, width: $(window).width(), height: $(window).height() }, 0, function() {
            section.addClass('fullscreen');
        });
        
    }

})();