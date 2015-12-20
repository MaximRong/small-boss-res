/**
 * Created by Maxim on 2015/12/19.
 */
$(function () {
    $(function () {
        $('.slick-container').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3
        });

//        $(".booking-block").addClass("block-fadeUp").show();
    });

    $(".date-circle > .booking-date").click(function () {
        $(".date-circle > .booking-date").removeClass("selected");
        var day = $(this).data("day");
        $(this).addClass("selected")
        $(".day-list-fake").hide();
        $("#" + day).show();
    });
});
