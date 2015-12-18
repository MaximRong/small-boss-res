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
        if ("table" == style) {

        }
    })
});