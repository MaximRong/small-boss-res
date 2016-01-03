/**
 * Created by Maxim on 2015/12/19.
 */
$(function () {

    $(".staff-choose > li").click(function() {
        var $this = $(this);
        $this.siblings().removeClass("selected").addClass("unselected");
        $this.removeClass("unselected").addClass("selected");
        var staffId = $this.data("id");
        $.ajax({
            url: context + "/member/booking/show/" + staffId,
            success : function (data) {
                var match = data.match(/<!--\s*replace-start\s*-->([\s\S]+)<!--\s*replace-end\s*-->/)[1];
                $(".booking-panel").replaceWith(match);
            }
        }).done(function() {
        });
    });

    $(".main").click(function(e) {
        var $target = $(e.target);
        if($target.attr("class") == "booking-block" || $target.closest('.booking-block').length > 0) {
            return
        }
        if($target.attr("class") == "booking-time" || $target.closest('.booking-time').length > 0) {
            return
        }
        $("#booking-block").hide();
    })

    $(".booking-btn").click(function() {
        var data = {
            "staffId" : $("#comfirm-booking-staff").data("staffId"),
            "millis" : $("#comfirm-booking-time").data("millis")
        };
         $.ajax({
             url: context + "/member/booking/booking/",
             type: "POST",
             data: data,
             dataType: "json",
             success : function (ret) {
                 if("ok" == ret.result) {
                     window.location.href = context + "/member/subscribe/show";
                 } else if("ex" == ret.result) {
                     $.inputError(ret.msg);
                 } else {
                     $.inputError("预约异常，不可预约！");
                 }

             }
         });
    });
});
