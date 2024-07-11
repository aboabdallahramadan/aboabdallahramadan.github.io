! function (t) {
    var e = {};

    function i(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
    }
    i.m = t, i.c = e, i.d = function (t, e, r) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        });
    }, i.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, i.t = function (t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var n in t) i.d(r, n, function (e) {
                return t[e];
            }.bind(null, n));
        return r;
    }, i.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default;
        } : function () {
            return t;
        };
        return i.d(e, "a", e), e;
    }, i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, i.p = "/assets", i(i.s = 30);
}({
    30: function (module, exports) {
        var currencyCode = $("#order-description #selected-currency-code").text(),
            currencyRate = 1,
            currencySymbol = "SAR",
            discountPercent;

        function setCurrency(t) {
            currencyCode = t, $("#order-description #selected-currency-code").text(currencyCode), lookupRateAndSymbol(), $("#store-credit-currency").text(currencySymbol), $("#store-credit-amount").text($("#store-credit-amount").attr("data-amount-" + currencyCode)), updateOrder();
            var e = new Date;
            e.setTime(e.getTime() + 615168e6);
            var i = "expires=" + e.toUTCString();
            document.cookie = "currency=" + currencyCode + ";" + i + "; path=/";
        }

        function lookupRateAndSymbol() {
            $("#order-description .dropdown-item").each(function () {
                $(this).text() == currencyCode && (currencyRate = parseFloat($(this).attr("data-currency-rate")), currencySymbol = $(this).attr("data-currency-symbol"));
            }), $(".hidden-currency").val(currencyCode);
        }

        function applyCurrency() {
            amount *= currencyRate;
        }

        function updateDiscount() {
            discountPercent = parseInt($(".order-discount").attr("data-discount-percent"));
        }

        function applyDiscount() {
            amountWithDiscount = amount, discountPercent > 0 && (amountWithDiscount = amount * (100 - discountPercent) / 100);
        }
        // $(".section-purchase").on("click", "#order-description .dropdown-item", function (t) {
        //     $("#order-description .dropdown .dropdown-toggle").trigger("click"), setCurrency($(this).text()), t.preventDefault();
        // }), lookupRateAndSymbol(), $(".order-discount-container").on("click", ".order-discount-add", function (t) {
        //     t.preventDefault(), $(this).prop("disabled", !0);
        //     var e = $(this).parents("form");
        //     $.ajax({
        //         method: "POST",
        //         url: e.attr("action"),
        //         data: e.serialize()
        //     }).done(function (t) {
        //         $(".order-discount-container").html(t), updateDiscount(), updateOrder(), $(".order-discount").find("i").tooltip();
        //     });
        // }), $(".order-discount-container").on("click", ".order-discount-remove", function (t) {
        //     t.preventDefault(), $.ajax({
        //         method: "POST",
        //         url: $(this).attr("href")
        //     }).done(function (t) {
        //         $(".order-discount-container").html(t), updateDiscount(), updateOrder(), $(".order-discount").find("i").tooltip();
        //     });
        // }), $(".order-discount-container").on("input", ".discount-code", function () {
        //     $(this).val($(this).val().toUpperCase());
        // });
        var isDuo = !1,
            isStream = !1,
            priorityCompletion = !1,
            duoPercent, streamPercent, priorityCompletionPercent;

        function duoSwitch() {
            isDuo = !isDuo, $("input.duo-switch").prop("checked", isDuo);
        }

        function streamSwitch() {
            isStream = !isStream, $("input.stream-switch").prop("checked", isStream);
        }

        function priorityCompletionSwitch() {
            priorityCompletion = !priorityCompletion, $("input.priority-completion-switch").prop("checked", priorityCompletion);
        }
        setTimeout(function () {
            isDuo = $("input.duo-switch").is(":checked"), isStream = $("input.stream-switch").is(":checked"), priorityCompletion = $("input.priority-completion-switch").is(":checked"), updateOrder();
        }, 1);
        var serverMultipliers = {},
            amount, amountWithDiscount, plusMinusTimeout, plusMinusInterval, updateOrder = function () { },
            startRating = 4200,
            desiredRating = 5200,
            startTier = 4,
            startDivision = 2,
            startLP = 0,
            desiredTier = 5,
            desiredDivision = 2,
            desiredLP = 40,
            maxTier = 8,
            minDesiredTier = 1,
            ratingPrices, ratingMaxRR, ratingMinRRPrice, ratingMaxRRPrice, ratingRRPrices;

        function generateRatingRRPrices() {
            ratingRRPrices = new Array(ratingMaxRR);
            for (var t = 0; t < ratingMaxRR; t++) ratingRRPrices[t] = Math.floor(100 * (ratingMinRRPrice + (ratingMaxRRPrice - ratingMinRRPrice) * (t + 1) / ratingMaxRR)) / 100;
        }

        function updateRatingIcon(t, e, i) {
            t.attr("src", "/assets/img/valorant/ranks/rank-" + e + ".png");
        }
        var tiers = ["Unranked", "Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Ascendant", "Radiant"],
            divisions = ["1", "2", "3"];

        function rankToString(t, e) {
            return t > 0 && t < 7 ? tiers[t] + " " + divisions[e] : tiers[t];
        }
        var completionHoursForTier = [168, 168, 168, 168, 168, 336, 336, 336, 336, 336],
            completionHours = 0;

        function calculateRatingAmount() {
            for (var t = startTier, mine = desiredTier, e = startDivision, i = startLP, r = 0; t !== desiredTier || e !== desiredDivision;) t < 8 && i > 0 ? (r += i >= 60 ? 1 * ratingPrices[t][e] : i >= 30 ? 1 * ratingPrices[t][e] : ratingPrices[t][e], i = 0) : r += ratingPrices[t][e], completionHours = completionHoursForTier[mine], t >= 8 ? t += 1 : 3 === (e += 1) && (e = 0, t += 1);
            for (; i !== desiredLP;) r += ratingRRPrices[i], i += 1;
            return r;
        }

        function updateRating() {
            if (desiredTier >= 8 && desiredLP > 0 && isDuo) return desiredTier = 8, desiredDivision = 0, desiredLP = 0, 8 === startTier && (startTier = 7, startDivision = 2, 30 !== startLP && 60 !== startLP && (startLP = 0)), void startTierChanged();
            var t = $("#tab-rating"),
                e = "";
            if (isDuo && (e += "Duo "), e += "<b>" + rankToString(startTier, startDivision) + "</b>&nbsp;", e += startTier < 8 ? "(" + startLP + "+&nbsp;RR)&nbsp" : "(" + startLP + "&nbsp;RR)&nbsp", e += "to&nbsp;<b>" + rankToString(desiredTier, desiredDivision) + "</b>", 9 === desiredTier && (e += "&nbsp;(" + desiredLP + "&nbsp;RR)&nbsp"), completionHours = 0, desiredTier <= 9) {
                amount = calculateRatingAmount();
                var i = $("#form-rating").find(".hidden-server").val(),
                    r = void 0 !== serverMultipliers[i] ? serverMultipliers[i] : 1;
                amount *= r;
                var n = $("#form-rating"),
                    a = 0;
                isDuo ? (n.find(".hidden-is-duo").val("true"), a += duoPercent) : n.find(".hidden-is-duo").val("false"), isStream ? (n.find(".hidden-stream").val("true"), a += streamPercent) : n.find(".hidden-stream").val("false"), priorityCompletion ? (n.find(".hidden-priority-completion").val("true"), a += priorityCompletionPercent) : n.find(".hidden-priority-completion").val("false"), amount *= (100 + a) / 100, applyCurrency(), applyDiscount(), n.find(".hidden-start").val(1e3 * startTier + 100 * startDivision + startLP), n.find(".hidden-desired").val(1e3 * desiredTier + 100 * desiredDivision + desiredLP), n.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
                var s = "";
                amount != amountWithDiscount && (s += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), s += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(s), $("#order-description-container .dropdown").show(), t.find(".checkout-button").prop("disabled", !1);
            } else $("#order-description-amount").html("<b>Contact us</b>"), $("#order-description-container .dropdown").hide(), t.find(".checkout-button").prop("disabled", !0);
            isDuo && (completionHours *= 2), e += '<br><span class="small text-muted">Approximate completion time: <b>' + (completionHours <= 1 ? "Contact us" : completionHours <= 24 ? completionHours + " hours" : Math.ceil(completionHours / 24) + " days") + "</b></span>", $("#order-summary").html(e);
        }

        function startTierChanged() {
            $("#start-tier").val(startTier), $("#start-tier").selectpicker("refresh"), startTier <= 1 ? $("#start-tier-minus").attr("disabled", !0) : $("#start-tier-minus").attr("disabled", !1), startTier >= maxTier ? $("#start-tier-plus").attr("disabled", !0) : $("#start-tier-plus").attr("disabled", !1), startTier >= 9 ? (startDivision = 0, $("#start-division").addClass("d-none"), $("#start-lp").addClass("d-none"), $("#start-lp-input-group").removeClass("d-none")) : ($("#start-division").removeClass("d-none"), $("#start-lp").removeClass("d-none"), $("#start-lp-input-group").addClass("d-none"), 0 === startDivision ? $("#start-division-i").addClass("active") : $("#start-division-i").removeClass("active"), 1 === startDivision ? $("#start-division-ii").addClass("active") : $("#start-division-ii").removeClass("active"), 2 === startDivision ? $("#start-division-iii").addClass("active") : $("#start-division-iii").removeClass("active")), desiredTier < (minDesiredTier = 2 === startDivision ? startTier + 1 : startTier) && (desiredTier = minDesiredTier), updateRatingIcon($("#start-rating-icon"), startTier, startDivision), desiredTierChanged();
        }

        function desiredTierChanged() {
            $("#desired-tier").val(desiredTier), desiredTier <= minDesiredTier ? $("#desired-tier-minus").attr("disabled", !0) : $("#desired-tier-minus").attr("disabled", !1), desiredTier >= maxTier ? $("#desired-tier-plus").attr("disabled", !0) : $("#desired-tier-plus").attr("disabled", !1), $("#desired-tier option").each(function () {
                parseInt($(this).val()) < minDesiredTier ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1);
            }), $("#desired-tier").selectpicker("refresh"), desiredTier >= 9 ? (desiredDivision = 0, $("#desired-division").addClass("d-none"), $("#desired-lp").addClass("d-none"), $("#desired-lp-input-group").removeClass("d-none"), isDuo ? $("#desired-lp-input").attr("disabled", !0) : $("#desired-lp-input").attr("disabled", !1)) : ($("#desired-division").removeClass("d-none"), $("#desired-lp").removeClass("d-none"), $("#desired-lp-input-group").addClass("d-none"), desiredTier === startTier ? (desiredDivision <= startDivision && (desiredDivision = startDivision + 1), $("#desired-division-i").addClass("disabled").removeClass("active"), startDivision <= 0 ? $("#desired-division-ii").removeClass("disabled") : $("#desired-division-ii").addClass("disabled"), startDivision <= 1 ? $("#desired-division-iii").removeClass("disabled") : $("#desired-division-iii").addClass("disabled"), 1 === desiredDivision ? $("#desired-division-ii").addClass("active") : $("#desired-division-ii").removeClass("active"), 2 === desiredDivision ? $("#desired-division-iii").addClass("active") : $("#desired-division-iii").removeClass("active")) : ($("#desired-division-i").removeClass("disabled"), $("#desired-division-ii").removeClass("disabled"), $("#desired-division-iii").removeClass("disabled"), 0 === desiredDivision ? $("#desired-division-i").addClass("active") : $("#desired-division-i").removeClass("active"), 1 === desiredDivision ? $("#desired-division-ii").addClass("active") : $("#desired-division-ii").removeClass("active"), 2 === desiredDivision ? $("#desired-division-iii").addClass("active") : $("#desired-division-iii").removeClass("active"))), updateRatingIcon($("#desired-rating-icon"), desiredTier, desiredDivision), fixLPIfNecessary(), updateRating();
        }

        function fixLPIfNecessary() {
            startTier < maxTier ? 0 !== startLP && 30 !== startLP && 60 !== startLP && (startLP = 0, $("#start-lp-0").addClass("active"), $("#start-lp-30").removeClass("active"), $("#start-lp-60").removeClass("active")) : startLP > ratingMaxRR - 40 && (startLP = ratingMaxRR - 40), desiredTier < maxTier ? desiredLP = 0 : (startTier === maxTier ? desiredLP < startLP + 40 && (desiredLP = startLP + 40) : desiredLP > 0 && desiredLP < 40 && (desiredLP = 40), desiredLP > ratingMaxRR && (desiredLP = ratingMaxRR)), $("#start-lp-input").val(startLP), $("#desired-lp-input").val(desiredLP);
        }

        function updateQuantitySlider() {
            var t = document.getElementById("quantity-slider");
            void 0 !== t.noUiSlider && null != t.noUiSlider && t.noUiSlider.destroy(), noUiSlider.create(t, {
                start: quantity,
                connect: [!0, !1],
                range: {
                    min: quantityMin,
                    max: quantityMax
                },
                step: 1,
                tooltips: !0,
                format: wNumb({
                    decimals: 0
                }),
                pips: quantityPips
            }), t.noUiSlider.on("update", function (t, e) {
                quantity = parseInt(t[e]), $("#quantity").val(quantity), updateOrder();
            });
        }

        function quantityDecrease() {
            quantity > 1 && (quantity--, $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
        }

        function quantityIncrease() {
            quantity < quantityMax && (quantity++, $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
        }
        $("#tab-rating").length && (updateOrder = updateRating, ratingPrices = eval($("#tab-rating").attr("data-rating-prices")), serverMultipliers = JSON.parse($("#tab-rating").attr("data-server-multipliers")), duoPercent = parseInt($("#tab-rating").attr("data-duo-percent")), ratingMaxRR = parseInt($("#tab-rating").attr("data-rating-max-rr")), ratingMinRRPrice = parseFloat($("#tab-rating").attr("data-rating-min-rr-price")), ratingMaxRRPrice = parseFloat($("#tab-rating").attr("data-rating-max-rr-price")), generateRatingRRPrices(), streamPercent = parseInt($("#tab-rating").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-rating").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (t) {
            t.preventDefault(), $("#form-rating").find(".hidden-server").val($(this).attr("data-server")), updateOrder();
        }), $("#start-tier").on("change", function () {
            (startTier = parseInt($(this).val())) === maxTier && (startLP = 0, $("#start-lp-0").addClass("active"), $("#start-lp-30").removeClass("active"), $("#start-lp-60").removeClass("active")), startTierChanged();
        }), $("#desired-tier").on("change", function () {
            desiredTier = parseInt($(this).val()), desiredTierChanged();
        }), $("#start-tier-minus").click(function (t) {
            t.preventDefault(), startTier > 1 && (startTier -= 1, startTierChanged());
        }), $("#start-tier-plus").click(function (t) {
            t.preventDefault(), startTier < maxTier && ((startTier += 1) === maxTier && (startLP = 0, $("#start-lp-0").addClass("active"), $("#start-lp-30").removeClass("active"), $("#start-lp-60").removeClass("active")), startTierChanged());
        }), $("#desired-tier-minus").click(function (t) {
            t.preventDefault(), desiredTier > minDesiredTier && (desiredTier -= 1, desiredTierChanged());
        }), $("#desired-tier-plus").click(function (t) {
            t.preventDefault(), desiredTier < maxTier && (desiredTier += 1, desiredTierChanged());
        }), $("#start-division-i").click(function () {
            startDivision = 0, startTierChanged();
        }), $("#start-division-ii").click(function () {
            startDivision = 1, startTierChanged();
        }), $("#start-division-iii").click(function () {
            startDivision = 2, startTierChanged();
        }), $("#start-lp-0").click(function () {
            startLP = 0, startTierChanged();
        }), $("#start-lp-30").click(function () {
            startLP = 30, startTierChanged();
        }), $("#start-lp-60").click(function () {
            startLP = 60, startTierChanged();
        }), $("#start-lp-input").on("change", function () {
            startLP = parseInt($("#start-lp-input").val()), isNaN(startLP) && (startLP = 0), startTierChanged();
        }), $("#desired-division-i").click(function () {
            desiredDivision = 0, desiredTierChanged();
        }), $("#desired-division-ii").click(function () {
            desiredDivision = 1, desiredTierChanged();
        }), $("#desired-division-iii").click(function () {
            desiredDivision = 2, desiredTierChanged();
        }), $("#desired-lp-input").on("change", function () {
            desiredLP = parseInt($("#desired-lp-input").val()), isNaN(desiredLP) && (desiredLP = 0), startTierChanged();
        }), $("#duo-group").click(function (t) {
            t.preventDefault(), duoSwitch(), startTierChanged();
        }), $("#stream-group").click(function (t) {
            t.preventDefault(), streamSwitch(), updateRating();
        }), $("#priority-completion-group").click(function (t) {
            t.preventDefault(), priorityCompletionSwitch(), updateRating();
        }), startTierChanged());
        var tier = 0,
            quantity = 5,
            quantityMin = 1,
            quantityMax = 5,
            quantityPips = {
                mode: "steps",
                filter: function (t) {
                    return 1 === t ? 1 : t % 5 ? 0 : 1;
                },
                density: 1e3
            },
            placementPrices, gamesPrices;

        function updatePlacement() {
            amount = parseInt(quantity) * parseFloat(placementPrices[parseInt(tier)]);
            var t = $("#form-placement").find(".hidden-server").val(),
                e = void 0 !== serverMultipliers[t] ? serverMultipliers[t] : 1;
            amount *= e;
            var i = $("#form-placement"),
                r = 0;
            isDuo ? (i.find(".hidden-is-duo").val("true"), r += duoPercent) : i.find(".hidden-is-duo").val("false"), isStream ? (i.find(".hidden-stream").val("true"), r += streamPercent) : i.find(".hidden-stream").val("false"), priorityCompletion ? (i.find(".hidden-priority-completion").val("true"), r += priorityCompletionPercent) : i.find(".hidden-priority-completion").val("false"), amount *= (100 + r) / 100, applyCurrency(), applyDiscount(), i.find(".hidden-start").val(1e3 * parseInt(tier)), i.find(".hidden-quantity").val(quantity), i.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
            var n = quantity;
            isDuo && (n *= 2);
            var a = "";
            if (n <= 24) {
                var s = "";
                n > 1 && (s = "s"), a = n + " hour" + s;
            } else a = Math.ceil(n / 24) + " days";
            var o = "<b>" + quantity + "</b>";
            isDuo && (o += " Duo"), o += " Placement Game" + (quantity > 1 ? "s" : ""), o += '<br><span class="small text-muted">Approximate completion time: <b>' + a + "</b></span>", $("#order-summary").html(o);
            var d = "";
            amount != amountWithDiscount && (d += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), d += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(d);
        }

        function updateGames() {
            amount = parseInt(quantity) * parseFloat(gamesPrices[parseInt(tier)]);
            var t = $("#form-games").find(".hidden-server").val(),
                e = void 0 !== serverMultipliers[t] ? serverMultipliers[t] : 1;
            amount *= e;
            var i = $("#form-games"),
                r = 0;
            isDuo ? (i.find(".hidden-is-duo").val("true"), r += duoPercent) : i.find(".hidden-is-duo").val("false"), isStream ? (i.find(".hidden-stream").val("true"), r += streamPercent) : i.find(".hidden-stream").val("false"), priorityCompletion ? (i.find(".hidden-priority-completion").val("true"), r += priorityCompletionPercent) : i.find(".hidden-priority-completion").val("false"), amount *= (100 + r) / 100, applyCurrency(), applyDiscount(), i.find(".hidden-start").val(1e3 * parseInt(tier)), i.find(".hidden-quantity").val(quantity), i.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
            var n = quantity;
            isDuo && (n *= 2);
            var a = "";
            if (n <= 24) {
                var s = "";
                n > 1 && (s = "s"), a = n + " hour" + s;
            } else a = Math.ceil(n / 24) + " days";
            var o = "<b>" + quantity + "</b>";
            isDuo && (o += " Duo"), o += " Game" + (quantity > 1 ? "s" : ""), o += '<br><span class="small text-muted">Approximate completion time: <b>' + a + "</b></span>", $("#order-summary").html(o);
            var d = "";
            amount != amountWithDiscount && (d += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), d += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(d);
        }
        $("#tab-placement").length && (updateOrder = updatePlacement, placementPrices = $("#tab-placement").attr("data-prices").split(","), serverMultipliers = JSON.parse($("#tab-placement").attr("data-server-multipliers")), duoPercent = parseInt($("#tab-placement").attr("data-duo-percent")), streamPercent = parseInt($("#tab-placement").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-placement").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (t) {
            t.preventDefault(), $("#form-placement").find(".hidden-server").val($(this).attr("data-server")), updateOrder();
        }), $("#tier").val(tier), $("#tier").selectpicker("refresh"), $("#tier").on("change", function () {
            tier = parseInt($(this).val()), updateOrder();
        }), $("#tier-minus").click(function (t) {
            t.preventDefault(), tier > 0 && (tier -= 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#tier-plus").click(function (t) {
            t.preventDefault(), tier < maxTier && (tier += 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#quantity").on("input", function () {
            var t = parseInt($("#quantity").val());
            isNaN(t) || ((quantity = parseInt($("#quantity").val())) > quantityMax ? quantity = quantityMax : quantity < 1 && (quantity = 1), $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
        }).on("change", function () {
            updateOrder();
        }).on("blur", function () {
            isNaN(parseInt($("#quantity").val())) && $("#quantity").val(quantity);
        }), $("#quantity-minus").mousedown(function () {
            quantityDecrease(), plusMinusTimeout = setTimeout(function () {
                plusMinusInterval = setInterval(function () {
                    quantityDecrease();
                }, 125);
            }, 300);
        }).mouseup(function () {
            clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
        }), $("#quantity-plus").mousedown(function () {
            quantityIncrease(), plusMinusTimeout = setTimeout(function () {
                plusMinusInterval = setInterval(function () {
                    quantityIncrease();
                }, 125);
            }, 300);
        }).mouseup(function () {
            clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
        }), updateQuantitySlider(), $("#duo-group").click(function (t) {
            t.preventDefault(), duoSwitch(), updateOrder();
        }), $("#stream-group").click(function (t) {
            t.preventDefault(), streamSwitch(), updateOrder();
        }), $("#priority-completion-group").click(function (t) {
            t.preventDefault(), priorityCompletionSwitch(), updateOrder();
        })), $("#tab-games").length && (quantityMin = 1, quantityMax = 10, updateOrder = updateGames, gamesPrices = $("#tab-games").attr("data-prices").split(","), serverMultipliers = JSON.parse($("#tab-games").attr("data-server-multipliers")), duoPercent = parseInt($("#tab-games").attr("data-duo-percent")), streamPercent = parseInt($("#tab-games").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-games").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (t) {
            t.preventDefault(), $("#form-games").find(".hidden-server").val($(this).attr("data-server")), updateOrder();
        }), $("#tier").val(tier), $("#tier").selectpicker("refresh"), $("#tier").on("change", function () {
            tier = parseInt($(this).val()), updateOrder();
        }), $("#tier-minus").click(function (t) {
            t.preventDefault(), tier > 0 && (tier -= 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#tier-plus").click(function (t) {
            t.preventDefault(), tier < 6 && (tier += 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#quantity").on("input", function () {
            var t = parseInt($("#quantity").val());
            isNaN(t) || ((quantity = parseInt($("#quantity").val())) > quantityMax ? quantity = quantityMax : quantity < 1 && (quantity = 1), $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
        }).on("change", function () {
            updateOrder();
        }).on("blur", function () {
            isNaN(parseInt($("#quantity").val())) && $("#quantity").val(quantity);
        }), $("#quantity-minus").mousedown(function () {
            quantityDecrease(), plusMinusTimeout = setTimeout(function () {
                plusMinusInterval = setInterval(function () {
                    quantityDecrease();
                }, 125);
            }, 300);
        }).mouseup(function () {
            clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
        }), $("#quantity-plus").mousedown(function () {
            quantityIncrease(), plusMinusTimeout = setTimeout(function () {
                plusMinusInterval = setInterval(function () {
                    quantityIncrease();
                }, 125);
            }, 300);
        }).mouseup(function () {
            clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
        }), updateQuantitySlider(), $("#duo-group").click(function (t) {
            t.preventDefault(), duoSwitch(), updateOrder();
        }), $("#stream-group").click(function (t) {
            t.preventDefault(), streamSwitch(), updateOrder();
        }), $("#priority-completion-group").click(function (t) {
            t.preventDefault(), priorityCompletionSwitch(), updateOrder();
        }));
        var division = 0,
            winsPrices;

        function updateWins() {
            amount = parseInt(quantity) * parseFloat(winsPrices[parseInt(tier)][parseInt(division)]);
            var t = $("#form-wins").find(".hidden-server").val(),
                e = void 0 !== serverMultipliers[t] ? serverMultipliers[t] : 1;
            amount *= e;
            var i = $("#form-wins"),
                r = 0;
            isDuo ? (i.find(".hidden-is-duo").val("true"), r += duoPercent) : i.find(".hidden-is-duo").val("false"), isStream ? (i.find(".hidden-stream").val("true"), r += streamPercent) : i.find(".hidden-stream").val("false"), priorityCompletion ? (i.find(".hidden-priority-completion").val("true"), r += priorityCompletionPercent) : i.find(".hidden-priority-completion").val("false"), amount *= (100 + r) / 100, applyCurrency(), applyDiscount(), i.find(".hidden-start").val(1e3 * parseInt(tier) + 100 * division), i.find(".hidden-quantity").val(quantity), i.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
            var n = Math.ceil(2 * (1 + quantity));
            isDuo && (n *= 2);
            var a = "";
            if (n <= 24) {
                var s = "";
                n > 1 && (s = "s"), a = n + " hour" + s;
            } else a = Math.ceil(n / 24) + " days";
            var o = "<b>" + quantity + "</b>";
            isDuo && (o += " Duo"), o += " Net Win" + (quantity > 1 ? "s" : ""), o += '<br><span class="small text-muted">Approximate completion time: <b>' + a + "</b></span>", $("#order-summary").html(o);
            var d = "";
            amount != amountWithDiscount && (d += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), d += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(d);
        }
        $("#tab-wins").length && (updateOrder = updateWins, winsPrices = eval($("#tab-wins").attr("data-prices")), serverMultipliers = JSON.parse($("#tab-wins").attr("data-server-multipliers")), duoPercent = parseInt($("#tab-wins").attr("data-duo-percent")), streamPercent = parseInt($("#tab-wins").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-wins").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (t) {
            t.preventDefault(), $("#form-wins").find(".hidden-server").val($(this).attr("data-server")), updateOrder();
        }), tier = 4, division = 2, $("#tier").val(tier), $("#tier").selectpicker("refresh"), $("#tier").on("change", function () {
            tier = parseInt($(this).val()), updateOrder();
        }), $("#tier-minus").click(function (t) {
            t.preventDefault(), tier > 1 && (tier -= 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#tier-plus").click(function (t) {
            t.preventDefault(), tier < maxTier && (tier += 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#division-i").click(function () {
            division = 0, updateOrder();
        }), $("#division-ii").click(function () {
            division = 1, updateOrder();
        }), $("#division-iii").click(function () {
            division = 2, updateOrder();
        }), $("#quantity").on("input", function () {
            var t = parseInt($("#quantity").val());
            isNaN(t) || ((quantity = parseInt($("#quantity").val())) > quantityMax ? quantity = quantityMax : quantity < 1 && (quantity = 1), $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
        }).on("change", function () {
            updateOrder();
        }).on("blur", function () {
            isNaN(parseInt($("#quantity").val())) && $("#quantity").val(quantity);
        }), $("#quantity-minus").mousedown(function () {
            quantityDecrease(), plusMinusTimeout = setTimeout(function () {
                plusMinusInterval = setInterval(function () {
                    quantityDecrease();
                }, 125);
            }, 300);
        }).mouseup(function () {
            clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
        }), $("#quantity-plus").mousedown(function () {
            quantityIncrease(), plusMinusTimeout = setTimeout(function () {
                plusMinusInterval = setInterval(function () {
                    quantityIncrease();
                }, 125);
            }, 300);
        }).mouseup(function () {
            clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
        }), updateQuantitySlider(), $("#duo-group").click(function (t) {
            t.preventDefault(), duoSwitch(), updateOrder();
        }), $("#stream-group").click(function (t) {
            t.preventDefault(), streamSwitch(), updateOrder();
        }), $("#priority-completion-group").click(function (t) {
            t.preventDefault(), priorityCompletionSwitch(), updateOrder();
        }));
        var coachingHours = 1,
            coachingPriceDefault = 40,
            coachingPrice = coachingPriceDefault;

        function updateCoachingSlider() {
            var t = document.getElementById("coaching-hours-slider");
            void 0 !== t.noUiSlider && null != t.noUiSlider && t.noUiSlider.destroy(), noUiSlider.create(t, {
                start: coachingHours,
                connect: [!0, !1],
                range: {
                    min: 1,
                    max: 5
                },
                step: 1,
                tooltips: !0,
                format: wNumb({
                    decimals: 0
                }),
                pips: {
                    mode: "values",
                    values: [1, 2, 3, 4, 5],
                    density: 1e3
                }
            }), t.noUiSlider.on("update", function (t, e) {
                coachingHours = parseInt(t[e]), $("#coaching-hours").val(coachingHours), updateCoaching();
            });
        }

        function updateCoaching() {
            $("#tab-coaching");
            coachingPrice = parseInt($(".card-profile.selected").attr("data-price")), isNaN(coachingPrice) && (coachingPrice = coachingPriceDefault), amount = parseInt(coachingHours) * parseFloat(coachingPrice);
            var t = $("#form-coaching"),
                e = 0;
            priorityCompletion ? (t.find(".hidden-priority-completion").val("true"), e += priorityCompletionPercent) : t.find(".hidden-priority-completion").val("false"), amount *= (100 + e) / 100, applyCurrency(), applyDiscount(), t.find(".hidden-quantity").val(coachingHours), t.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
            var i = $(".card-profile.selected").attr("data-id");
            void 0 !== i && t.find(".hidden-booster-id").val(i);
            var r = $(".card-profile.selected").attr("data-name"),
                n = "<b>" + coachingHours + "</b> hour" + (coachingHours > 1 ? "s" : "") + " of coaching";
            void 0 !== r && (n += " with <b>" + r + "</b>"), $("#order-summary").html(n);
            var a = "";
            amount != amountWithDiscount && (a += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), a += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(a);
        }

        function coachingHoursDecrease() {
            coachingHours > 1 && (coachingHours--, $("#coaching-hours").val(coachingHours), updateCoachingSlider()), updateCoaching();
        }

        function coachingHoursIncrease() {
            coachingHours < 10 && (coachingHours++, $("#coaching-hours").val(coachingHours), updateCoachingSlider()), updateCoaching();
        }
        $("#tab-coaching").length && (updateOrder = updateCoaching, priorityCompletionPercent = parseInt($("#tab-coaching").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (t) {
            t.preventDefault(), $("#form-coaching").find(".hidden-server").val($(this).attr("data-server"));
        }), $("#coaching-hours").on("input", function () {
            var t = parseInt($("#coaching-hours").val());
            isNaN(t) || ((coachingHours = parseInt($("#coaching-hours").val())) > 5 ? coachingHours = 5 : coachingHours < 1 && (coachingHours = 1), $("#coaching-hours").val(coachingHours), updateCoachingSlider()), updateCoaching();
        }).on("change", function () {
            updateCoaching();
        }).on("blur", function () {
            isNaN(parseInt($("#coaching-hours").val())) && $("#coaching-hours").val(coachingHours);
        }), $("#coaching-hours-minus").mousedown(function () {
            coachingHoursDecrease(), plusMinusTimeout = setTimeout(function () {
                plusMinusInterval = setInterval(function () {
                    coachingHoursDecrease();
                }, 125);
            }, 300);
        }).mouseup(function () {
            clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
        }), $("#coaching-hours-plus").mousedown(function () {
            coachingHoursIncrease(), plusMinusTimeout = setTimeout(function () {
                plusMinusInterval = setInterval(function () {
                    coachingHoursIncrease();
                }, 125);
            }, 300);
        }).mouseup(function () {
            clearTimeout(plusMinusTimeout), clearInterval(plusMinusInterval);
        }), $(".card-profile").click(function (t) {
            t.preventDefault(), $(".card-profile.selected").removeClass("selected"), $(this).addClass("selected"), updateOrder();
        }), updateCoachingSlider(), $("#priority-completion-group").click(function (t) {
            t.preventDefault(), priorityCompletionSwitch(), updateOrder();
        }));
    }
});