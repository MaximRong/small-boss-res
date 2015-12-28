/**
 * Created by Maxim on 2015/12/15.
 */
$(function () {
    $(".staff-name").click(function () {
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

/*
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
*/

    $("#desc").click(function () {
        var $this = $(this);
        $.inputBlock({
            elem: $this,
            type: "input",
            tip: "简介",
            maxlength: 20,
            save: function (value) {
                $this.find(".content").data("val", value).text(value);
            }
        });
    });

    $("#tags").click(function () {
        var length = $("#tag-items > .item").length;
        if (3 <= length) return;

        var $this = $(this);
        $.inputBlock({
            elem: $this,
            type: "input",
            tip: "标签",
            maxlength: 5,
            save: function (value) {
                var tag = "<div class=\"item clearfix\">";
                tag += "<span class=\"info-lab\" data-val=\"" + value + "\">" + value + "</span>";
                tag += "<i class=\"delete iconfont\">&#xe608;</i>";
                tag += "</div>";

                $("#tag-items").append(tag);
            }
        });
    });

    $("#tag-items").delegate(".item", "click", function () {
        $(this).remove();
    });

    var validStaffParam = function () {
        var name = $(".staff-name > .content").data("val") || "";
        var sex = $("#sex > .content").data("val") + "" || "";
        var desc = $("#desc > .content").data("val") || "";

        if("" == name || "" ==  sex || "" == desc) {
            $(".save-btn").removeClass("active");
            return;
        }
        $(".save-btn").addClass("active");
    };

    setInterval(validStaffParam, 500);

    $(".staff-operate").delegate(".active", "click", function () {
        var data = {
            staffId : $("#staffId").val(),
            userId : $("#userId").val(),
            name: $(".staff-name > .content").data("val") || "",
            sex: $("#sex > .content").data("val") || "",
            desc: $("#desc > .content").data("val") || "",
            tag1: $(".info-lab")[0] ? $($(".info-lab")[0]).data("val") : "",
            tag2: $(".info-lab")[1] ? $($(".info-lab")[1]).data("val") : "",
            tag3: $(".info-lab")[2] ? $($(".info-lab")[2]).data("val") : ""
        };

        $.ajax({
            type: "POST",
            contentType: 'application/json;charset=UTF-8',
            url: context + "/merchant/staff/modify",
            data: JSON.stringify(data),
            success: function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/merchant/home/show";
                } else {
                    $.inputError(ret.msg);
                }
            }
        });
    });

});