/**
 * Created by Maxim on 2015/12/16.
 */
$(function () {
    $(".delete-btn").click(function() {
        $.ajax({
            type: "POST",
            url: context + "/merchant/member/delete",
            data: {"memberId" : $("#memberId").val()},
            dataType: "json",
            success: function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/merchant/member/show";
                }
            }
        });
    });

});