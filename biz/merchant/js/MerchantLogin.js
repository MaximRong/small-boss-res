/**
 * Created by Maxim on 2015/12/23.
 */
$(function () {

    var validMemberParam = function () {
        var mobile = $("#mobile").val();
        var password = $("#password").val();
        if("" == mobile || "" == password) {
            $(".login-btn").removeClass("active");
            return;
        }

        if(11 != mobile.length) {
            $(".login-btn").removeClass("active");
            return;
        }

        $(".login-btn").addClass("active");
    };

    setInterval(validMemberParam, 500);

    $(".login-btn").click(function() {

    });

    $(".login-operate").delegate(".active", "click", function () {
        var mobile = $("#mobile").val();
        var password = $("#password").val();
        $.ajax({
            url: context + "/merchant/login/login",
            dataType: "json",
            type: "POST",
            data: {
                "mobile": mobile,
                "password": password
            },
            success: function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/merchant/home/show";
                } else if("null" == ret.result) {
                    $.inputError("该手机号不存在");
                } else {
                    $.inputError("手机号或密码不正确");
                }

            }
        });
    });

});