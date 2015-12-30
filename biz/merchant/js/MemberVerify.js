/**
 * Created by Maxim on 2015/12/16.
 */
$(function () {
    $(".pass").click(function() {
        $.ajax({
            type: "POST",
            url: context + "/merchant/member/pass",
            data: {"memberId" : $(this).data("val")},
            dataType: "json",
            success: function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/merchant/member/verify";
                }
            }
        });
    });

    $(".refuse").click(function() {
        $.ajax({
            type: "POST",
            url: context + "/merchant/member/refuse",
            data: {"memberId" : $(this).data("val")},
            dataType: "json",
            success: function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/merchant/member/verify";
                }
            }
        });
    })

});