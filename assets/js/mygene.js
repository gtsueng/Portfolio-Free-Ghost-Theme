$(document).ready(function() {

    $("#learnmore__btn_id").magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        callbacks: {
            open: function(){
                if(ga){
                    ga('send', 'event', 'button', 'click', 'learnmore_clicked');
                }
            }
        }
    });

    $.ajax({url: metadata_url,success:function(result){
    $("#metadata_timestamp").html('Data last updated: <a href="' + metadata_url + '">' + result.timestamp.split('T')[0] + "</a>");
    }});

    //initialize ghostHunter
    $("#search-field").ghostHunter({
        results: "#search-results"
    });

    //auto search on typing
    var thread = null;
    $('#search-field').keyup(function() {
        clearTimeout(thread);
        var target = $(this);
        thread = setTimeout(function() { target.submit(); }, 500);
    });

    // add see_also link
    var see_also_html = '<div class="header__link">';
    see_also_html += '   <span>See also: <a href="' + see_also_link + '" target="_blank">' + see_also_text + '</a></span></div>';
    $('header').first().append(see_also_html);

    //for rslides from responsiveslides.com
    $("#learnmore_slider").responsiveSlides({
        auto: false,
        pager: true,
        nav: true,
        speed: 500,
        maxwidth: 2800,
        namespace: "centered-btns"
    });

});