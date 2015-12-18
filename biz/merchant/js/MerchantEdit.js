/**
 * Created by Maxim on 2015/12/16.
 */
$(function () {

    $(".merchant-name").click(function () {
        var $this = $(this);
        $.inputBlock({
            elem: $this,
            type: "input",
            tip: "店名",
            maxlength: 20,
            save: function (value) {
                $this.find(".content").data("val", value).text(value);
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

    $("#address").click(function () {
        var $this = $(this);
        $.inputBlock({
            elem: $this,
            type: "input",
            tip: "地址",
            maxlength: 100,
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

    var validMerchantParam = function () {
        var name = $(".merchant-name > .content").data("val") || "";
        var mobile = $("#mobile > .content").data("val") || "";
        var desc = $("#address > .content").data("val") || "";

        if("" == name || "" == mobile || "" == desc) {
            $(".save-btn").removeClass("active");
            return;
        }
        $(".save-btn").addClass("active");
    };

    setInterval(validMerchantParam, 500);

    $(".merchant-operate").delegate(".active", "click", function () {
        var data = {
            name: $(".merchant-name > .content").data("val") || "",
            mobile: $("#mobile > .content").data("val") || "",
            address: $("#address > .content").data("val") || "",
            tag1: $(".info-lab")[0] ? $($(".info-lab")[0]).data("val") : "",
            tag2: $(".info-lab")[1] ? $($(".info-lab")[1]).data("val") : "",
            tag3: $(".info-lab")[2] ? $($(".info-lab")[2]).data("val") : ""
        };

        $.ajax({
            type: "POST",
            contentType: 'application/json;charset=UTF-8',
            url: context + "/merchant/merchant/save",
            data: JSON.stringify(data),
            success: function (ret) {
                if("ok" == ret.result) {
                    window.location.href = context + "/merchant/home/show";
                }
            }
        });
    });

});