/**
 * Created by Maxim on 2015/12/19.
 */
$(function () {
    $("#password").click(function () {
        var $this = $(this);
        $.inputBlock({
            elem: $this,
            type: "input",
            tip: "密码",
            maxlength: 12,
            save: function (value) {
                $this.find(".content").data("val", value).text(value.replace(/(\w)/g, "*"));
                $(".error").hide();
            }
        });
    });

    $("#reRassword").click(function () {
        var $this = $(this);
        $.inputBlock({
            elem: $this,
            type: "input",
            tip: "再次输入密码",
            maxlength: 12,
            save: function (value) {
                $this.find(".content").data("val", value).text(value.replace(/(\w)/g, "*"));
                $(".error").hide();
            }
        });
    });


    var validMemberParam = function () {
        var password = $("#password > .content").data("val") || "";
        var reRassword = $("#reRassword > .content").data("val") || "";

        if("" == password || "" == reRassword) {
            $(".save-btn").removeClass("active");
            return;
        }
        $(".save-btn").addClass("active");
    };

    setInterval(validMemberParam, 500);

    $(".member-operate").delegate(".active", "click", function () {
        var password = $("#password > .content").data("val") || "";
        var reRassword = $("#reRassword > .content").data("val") || "";

        if(password != reRassword) {
            $.inputError("两次密码输入的不一致");
            return;
        }

        $.ajax({
            type: "POST",
            url: context + "/merchant/change-password/change",
            data: {password : $("#password > .content").data("val") || ""},
            dataType : "json",
            success: function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/merchant/home/show";
                }
            }
        });
    });
});
