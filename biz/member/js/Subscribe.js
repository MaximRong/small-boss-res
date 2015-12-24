/**
 * Created by Maxim on 2015/12/23.
 */
$(function () {
    $(".booking-operate").click(function() {
        var subscribeId = $(this).data("val");
        $.ajax({
            url: context + "/member/subscribe/cancel",
            type: "POST",
            data: {"subscribeId" : subscribeId + ""},
            dataType: "json",
            success : function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/member/subscribe/show";
                }
            }
        });
    });
});