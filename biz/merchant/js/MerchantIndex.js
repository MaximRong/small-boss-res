/**
 * Created by Maxim on 2015/12/16.
 */
$(function () {
    $('.slick-container').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3
    });

//        $(".member-block").addClass("block-fadeUp").show();

    $(".staff-footer").click(function () {
        var $this = $(this);
        var style = $this.data("style");
        var isTable = "table" == style;
        $this.find("div").text(isTable ? "日历模式" : "列表模式");
        $this.data("style", isTable ? "data" : "table");
        $(".table-style").toggle(isTable);
        $(".date-style").toggle(!isTable);
    });

    $(".date-circle > .booking-date").click(function () {
        $(".date-circle > .booking-date").removeClass("selected");
        var day = $(this).data("day");
        $(this).addClass("selected")
        $(".booking-inner").hide();
        $(".booking-inner").filter(function(index) {
            return $(this).data("date") == day;
        }).show();
    });

    $(".cancel-booking-fake").click(function() {
        $.ajax({
            url: context + "/merchant/home/cancel",
            type: "POST",
            data: {"subscribeId": $(this).data("val")},
            dataType: "json",
            success : function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/merchant/home/show";
                }
            }
        });
    });
});