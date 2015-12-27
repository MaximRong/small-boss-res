/**
 * Created by Maxim on 2015/12/27.
 */
$(function () {
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

    $(".staff-choose > li").click(function() {
        $(this).siblings().removeClass("selected").addClass("unselected");
        $(this).removeClass("unselected").addClass("selected");
        $.ajax({
            url: context + "/merchant/staff-subscribe/show/" + $(this).attr("id"),
            success : function (data) {
                var match = data.match(/<!--\s*replace-start\s*-->([\s\S]+)<!--\s*replace-end\s*-->/)[1];
                $(".booking-panel").replaceWith(match);
                $(".staff-footer").data("style", "table");
                $(".staff-footer > div").text("列表模式");
            }
        });
    });
});