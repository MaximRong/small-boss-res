/**
 * Created by Maxim on 2015/12/15.
 */
$(function () {
    $(".member-name").click(function () {
        var $this = $(this);
        $.inputBlock({
            elem: $this,
            type: "input",
            tip: "姓名",
            maxlength: 6,
            save: function (value) {
                $this.find(".content").data("val", value).text(value);
            }
        });
    });

    $("#sex").click(function () {
        var $this = $(this);
        $.inputBlock({
            elem: $this,
            type: "select",
            tip: "性别",
            options: {0: "女", 1: "男"},
            save: function (value, desc) {
                $this.find(".content").data("val", value).text(desc);
            }
        });
    });

    $("#mobile").click(function () {
        var $this = $(this);
        $.inputBlock({
            elem: $this,
            type: "input",
            tip: "电话",
            maxlength: 11,
            save: function (value) {
                $this.find(".content").data("val", value).text(value);
            }
        });
    });

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
        var name = $(".member-name > .content").data("val") || "";
        var sex = $("#sex > .content").data("val") + "" || "";
        var mobile = $("#mobile > .content").data("val") || "";
        var password = $("#password > .content").data("val") || "";
        var reRassword = $("#reRassword > .content").data("val") || "";

        if("" == name || "" == mobile || "" == sex || "" == password || "" == reRassword) {
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

        var data = {
            name: $(".member-name > .content").data("val") || "",
            sex: $("#sex > .content").data("val") || "",
            mobile: $("#mobile > .content").data("val") || "",
            password : $("#password > .content").data("val") || ""
        };

        $.ajax({
            type: "POST",
            contentType: 'application/json;charset=UTF-8',
            url: context + "/merchant/member/add",
            data: JSON.stringify(data),
            success: function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/merchant/member/show";
                }
            }
        });
    });

});