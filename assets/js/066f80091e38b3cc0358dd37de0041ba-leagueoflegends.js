! function (e) {
    var t = {};

    function i(r) {
        if (t[r]) return t[r].exports;
        var n = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
    }
    i.m = e, i.c = t, i.d = function (e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, i.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, i.t = function (e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (i.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(r, n, function (t) {
                return e[t];
            }.bind(null, n));
        return r;
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default;
        } : function () {
            return e;
        };
        return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "/assets", i(i.s = 29);
}({
    29: function (module, exports) {
        var currencyCode = $("#order-description #selected-currency-code").text(),
            currencyRate = 1,
            currencySymbol = "SAR",
            discountPercent;

        function setCurrency(e) {
            currencyCode = e, $("#order-description #selected-currency-code").text(currencyCode), lookupRateAndSymbol(), $("#store-credit-currency").text(currencySymbol), $("#store-credit-amount").text($("#store-credit-amount").attr("data-amount-" + currencyCode)), updateOrder();
            var t = new Date;
            t.setTime(t.getTime() + 615168e6);
            var i = "expires=" + t.toUTCString();
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
        $(".section-purchase").on("click", "#order-description .dropdown-item", function (e) {
            $("#order-description .dropdown .dropdown-toggle").trigger("click"), setCurrency($(this).text()), e.preventDefault();
        }), lookupRateAndSymbol(), $(".order-discount-container").on("click", ".order-discount-add", function (e) {
            e.preventDefault(), $(this).prop("disabled", !0);
            var t = $(this).parents("form");
            $.ajax({
                method: "POST",
                url: t.attr("action"),
                data: t.serialize()
            }).done(function (e) {
                $(".order-discount-container").html(e), updateDiscount(), updateOrder(), $(".order-discount").find("i").tooltip();
            });
        }), $(".order-discount-container").on("click", ".order-discount-remove", function (e) {
            e.preventDefault(), $.ajax({
                method: "POST",
                url: $(this).attr("href")
            }).done(function (e) {
                $(".order-discount-container").html(e), updateDiscount(), updateOrder(), $(".order-discount").find("i").tooltip();
            });
        }), $(".order-discount-container").on("input", ".discount-code", function () {
            $(this).val($(this).val().toUpperCase());
        });
        var isDuo = !1,
            isStream = !1,
            priorityCompletion = !1,
            lpGainLowPercent, lpGainMidPercent, flexQueuePercent, duoPercent, streamPercent, priorityCompletionPercent;

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
            startRating = 4e3,
            desiredRating = 5e3,
            startTier = 4,
            startDivision = 0,
            startLP = 0,
            desiredTier = 5,
            desiredDivision = 0,
            desiredLP = 50,
            maxTier = 8,
            minDesiredTier = 1,
            positionPrimary = "Fill",
            positionSecondary = "Fill",
            summonerSpellD = "Any",
            summonerSpellF = "Flash",
            ratingPrices, ratingMaxLP, ratingMinLPPrice, ratingMaxLPPrice, ratingLPPrices;

        function generateRatingLPPrices() {
            ratingLPPrices = new Array(ratingMaxLP);
            for (var e = 0; e < ratingMaxLP; e++) ratingLPPrices[e] = Math.floor(100 * (ratingMinLPPrice + (ratingMaxLPPrice - ratingMinLPPrice) * (e + 1) / ratingMaxLP)) / 100;
        }

        function updateRatingIcon(e, t, i) {
            e.attr("src", "/assets/img/league-of-legends/ranks/rank-" + t + ".webp");
        }
        var tiers = ["Unranked", "Iron", "Bronze", "Silver", "Gold", "Platinum", "Emerald", "Diamond", "Master", "Grandmaster", "Challenger"],
            divisions = ["IV", "III", "II", "I"];

        function rankToString(e, t) {
            return e > 0 && e < 8 ? tiers[e] + " " + divisions[t] : tiers[e];
        }
        var completionHoursForTier = [168, 168, 168, 168, 168, 336, 336, 336, 336, 336],
            completionHours = 0;

        function calculateRatingAmount() {
            for (var e = startTier, t = startDivision, i = startLP, r = 0; e !== desiredTier || t !== desiredDivision;) {
                var n = ratingPrices[e][t];
                e < 8 && i > 0 ? (r += i >= 60 ? 1 * n : i >= 30 ? 1 * n : n, i = 0) : r += n, e >= 8 ? e += 1 : 4 === (t += 1) && (t = 0, e += 1);
            }
            completionHours = completionHoursForTier[desiredTier];
            return r;
        }

        function updateRating() {
            if (desiredTier >= 8 && isDuo) return desiredDivision = 3, desiredLP = 0, startTier > (desiredTier = 7) ? (startTier = 7, startDivision = 2, startLP = 0) : startTier === desiredTier && startDivision >= desiredDivision && (startDivision = 2, startLP = 0), void startTierChanged();
            var e = $("#tab-rating"),
                t = "";
            if (isDuo && (t += "Duo "), t += "<b>" + rankToString(startTier, startDivision) + "</b>&nbsp;", t += startTier < 8 ? "(" + startLP + "+&nbsp;LP)&nbsp" : "(" + startLP + "&nbsp;LP)&nbsp", t += "to&nbsp;<b>" + rankToString(desiredTier, desiredDivision) + "</b>", 8 === desiredTier && (t += "&nbsp;(" + desiredLP + "&nbsp;LP)&nbsp"), completionHours = 0, desiredTier <= 8) {
                amount = calculateRatingAmount();
                var i = $("#form-rating").find(".hidden-server").val(),
                    r = void 0 !== serverMultipliers[i] ? serverMultipliers[i] : 1;
                amount *= r;
                var n = $("#form-rating"),
                    a = 0;
                "Flex Queue" === n.find(".hidden-queue-type").val() && (a += flexQueuePercent);
                var s = n.find(".hidden-lp-gain").val();
                "1-16" === s ? a += lpGainLowPercent : "17-19" === s && (a += lpGainMidPercent), isDuo ? (n.find(".hidden-is-duo").val("true"), a += duoPercent) : n.find(".hidden-is-duo").val("false"), isStream ? (n.find(".hidden-stream").val("true"), a += streamPercent) : n.find(".hidden-stream").val("false"), priorityCompletion ? (n.find(".hidden-priority-completion").val("true"), a += priorityCompletionPercent) : n.find(".hidden-priority-completion").val("false"), amount *= (100 + a) / 100, applyCurrency(), applyDiscount(), n.find(".hidden-start").val(1e3 * startTier + 100 * startDivision + startLP), n.find(".hidden-desired").val(1e3 * desiredTier + 100 * desiredDivision + desiredLP), n.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
                var o = "";
                amount != amountWithDiscount && (o += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), o += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(o), $("#order-description-container .dropdown").show(), e.find(".checkout-button").prop("disabled", !1);
            } else $("#order-description-amount").html("<b>Contact us</b>"), $("#order-description-container .dropdown").hide(), e.find(".checkout-button").prop("disabled", !0);
            isDuo && (completionHours *= 2), t += '<br><span class="small text-muted">Approximate completion time: <b>' + (completionHours <= 1 ? "Contact us" : completionHours <= 24 ? completionHours + " hours" : Math.ceil(completionHours / 24) + " days") + "</b></span>", $("#order-summary").html(t);
        }

        function startTierChanged() {
            $("#start-tier").val(startTier), $("#start-tier").selectpicker("refresh"), startTier <= 1 ? $("#start-tier-minus").attr("disabled", !0) : $("#start-tier-minus").attr("disabled", !1), startTier >= maxTier ? $("#start-tier-plus").attr("disabled", !0) : $("#start-tier-plus").attr("disabled", !1), startTier >= 8 ? (startDivision = 0, $("#start-division").addClass("d-none"), $("#start-lp").addClass("d-none"), $("#start-lp-input-group").removeClass("d-none")) : ($("#start-division").removeClass("d-none"), $("#start-lp").removeClass("d-none"), $("#start-lp-input-group").addClass("d-none"), 0 === startDivision ? $("#start-division-iv").addClass("active") : $("#start-division-iv").removeClass("active"), 1 === startDivision ? $("#start-division-iii").addClass("active") : $("#start-division-iii").removeClass("active"), 2 === startDivision ? $("#start-division-ii").addClass("active") : $("#start-division-ii").removeClass("active"), 3 === startDivision ? $("#start-division-i").addClass("active") : $("#start-division-i").removeClass("active"), 7 === startTier && isDuo ? $("#start-division-i").addClass("disabled") : $("#start-division-i").removeClass("disabled")), desiredTier < (minDesiredTier = 3 === startDivision ? startTier + 1 : startTier) && (desiredTier = minDesiredTier), updateRatingIcon($("#start-rating-icon"), startTier, startDivision), desiredTierChanged();
        }

        function desiredTierChanged() {
            $("#desired-tier").val(desiredTier), desiredTier <= minDesiredTier ? $("#desired-tier-minus").attr("disabled", !0) : $("#desired-tier-minus").attr("disabled", !1), desiredTier >= maxTier ? $("#desired-tier-plus").attr("disabled", !0) : $("#desired-tier-plus").attr("disabled", !1), $("#desired-tier option").each(function () {
                parseInt($(this).val()) < minDesiredTier ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1);
            }), $("#desired-tier").selectpicker("refresh"), desiredTier >= 8 ? (desiredDivision = 0, $("#desired-division").addClass("d-none"), $("#desired-lp").addClass("d-none"), $("#desired-lp-input-group").removeClass("d-none")) : ($("#desired-division").removeClass("d-none"), $("#desired-lp").removeClass("d-none"), $("#desired-lp-input-group").addClass("d-none"), desiredTier === startTier ? (desiredDivision <= startDivision && (desiredDivision = startDivision + 1), $("#desired-division-iv").addClass("disabled").removeClass("active"), startDivision <= 0 ? $("#desired-division-iii").removeClass("disabled") : $("#desired-division-iii").addClass("disabled"), startDivision <= 1 ? $("#desired-division-ii").removeClass("disabled") : $("#desired-division-ii").addClass("disabled"), $("#desired-division-i").removeClass("disabled"), 1 === desiredDivision ? $("#desired-division-iii").addClass("active") : $("#desired-division-iii").removeClass("active"), 2 === desiredDivision ? $("#desired-division-ii").addClass("active") : $("#desired-division-ii").removeClass("active"), 3 === desiredDivision ? $("#desired-division-i").addClass("active") : $("#desired-division-i").removeClass("active")) : ($("#desired-division-iv").removeClass("disabled"), $("#desired-division-iii").removeClass("disabled"), $("#desired-division-ii").removeClass("disabled"), $("#desired-division-i").removeClass("disabled"))), updateRatingIcon($("#desired-rating-icon"), desiredTier, desiredDivision), fixLPIfNecessary(), updateRating();
        }

        function fixLPIfNecessary() {
            startTier < maxTier ? 0 !== startLP && 30 !== startLP && 60 !== startLP && (startLP = 0, $("#start-lp-0").addClass("active"), $("#start-lp-30").removeClass("active"), $("#start-lp-60").removeClass("active")) : startLP > ratingMaxLP - 50 && (startLP = ratingMaxLP - 50), desiredTier < maxTier ? desiredLP = 0 : (startTier === maxTier ? desiredLP < startLP + 50 && (desiredLP = startLP + 50) : desiredLP > 0 && desiredLP < 50 && (desiredLP = 50), desiredLP > ratingMaxLP && (desiredLP = ratingMaxLP)), $("#start-lp-input").val(startLP), $("#desired-lp-input").val(desiredLP);
        }

        function positionPrimaryChanged(e) {
            positionPrimary = e, $("#position-primary").val(e).selectpicker("refresh"), $(".hidden-position-primary").val(e), "Fill" !== e && positionSecondary === e && positionSecondaryChanged("Fill"), $("#position-primary-icon").attr("src", "/assets/img/league-of-legends/positions/" + e.toLowerCase() + ".png");
        }

        function positionSecondaryChanged(e) {
            positionSecondary = e, $("#position-secondary").val(e).selectpicker("refresh"), $(".hidden-position-secondary").val(e), "Fill" !== e && positionPrimary === e && positionPrimaryChanged("Fill"), $("#position-secondary-icon").attr("src", "/assets/img/league-of-legends/positions/" + e.toLowerCase() + ".png");
        }

        function summonerSpellDChanged(e) {
            summonerSpellD = e, $("#summoner-spell-d").val(e).selectpicker("refresh"), $(".hidden-summoner-spell-d").val(e), "Any" !== e && summonerSpellF === e && summonerSpellFChanged("Any"), "Any" === e ? $("#summoner-spell-d-icon").attr("src", "/assets/img/league-of-legends/summoner-spells/any.png") : $("#summoner-spell-d-icon").attr("src", "/assets/img/league-of-legends/summoner-spells/" + e.toLowerCase() + ".jpg");
        }

        function summonerSpellFChanged(e) {
            summonerSpellF = e, $("#summoner-spell-f").val(e).selectpicker("refresh"), $(".hidden-summoner-spell-f").val(e), "Any" !== e && summonerSpellD === e && summonerSpellDChanged("Any"), "Any" === e ? $("#summoner-spell-f-icon").attr("src", "/assets/img/league-of-legends/summoner-spells/any.png") : $("#summoner-spell-f-icon").attr("src", "/assets/img/league-of-legends/summoner-spells/" + e.toLowerCase() + ".jpg");
        }

        function updateQuantitySlider() {
            var e = document.getElementById("quantity-slider");
            void 0 !== e.noUiSlider && null != e.noUiSlider && e.noUiSlider.destroy(), noUiSlider.create(e, {
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
            }), e.noUiSlider.on("update", function (e, t) {
                quantity = parseInt(e[t]), $("#quantity").val(quantity), updateOrder();
            });
        }

        function quantityDecrease() {
            quantity > 1 && (quantity--, $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
        }

        function quantityIncrease() {
            quantity < quantityMax && (quantity++, $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
        }
        $("#tab-rating").length && (updateOrder = updateRating, ratingPrices = eval($("#tab-rating").attr("data-rating-prices")), serverMultipliers = JSON.parse($("#tab-rating").attr("data-server-multipliers")), lpGainLowPercent = parseInt($("#tab-rating").attr("data-lp-gain-low-percent")), lpGainMidPercent = parseInt($("#tab-rating").attr("data-lp-gain-mid-percent")), flexQueuePercent = parseInt($("#tab-rating").attr("data-flex-queue-percent")), duoPercent = parseInt($("#tab-rating").attr("data-duo-percent")), ratingMaxLP = parseInt($("#tab-rating").attr("data-rating-max-lp")), ratingMinLPPrice = parseFloat($("#tab-rating").attr("data-rating-min-lp-price")), ratingMaxLPPrice = parseFloat($("#tab-rating").attr("data-rating-max-lp-price")), generateRatingLPPrices(), streamPercent = parseInt($("#tab-rating").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-rating").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (e) {
            e.preventDefault(), $("#form-rating").find(".hidden-server").val($(this).attr("data-server")), startTierChanged();
        }), $("#start-tier").on("change", function () {
            (startTier = parseInt($(this).val())) === maxTier && (startLP = 0, $("#start-lp-0").addClass("active"), $("#start-lp-30").removeClass("active"), $("#start-lp-60").removeClass("active")), startTierChanged();
        }), $("#desired-tier").on("change", function () {
            desiredTier = parseInt($(this).val()), desiredTierChanged();
        }), $("#start-tier-minus").click(function (e) {
            e.preventDefault(), startTier > 1 && (startTier -= 1, startTierChanged());
        }), $("#start-tier-plus").click(function (e) {
            e.preventDefault(), startTier < maxTier && ((startTier += 1) === maxTier && (startLP = 0, $("#start-lp-0").addClass("active"), $("#start-lp-30").removeClass("active"), $("#start-lp-60").removeClass("active")), startTierChanged());
        }), $("#desired-tier-minus").click(function (e) {
            e.preventDefault(), desiredTier > minDesiredTier && (desiredTier -= 1, desiredTierChanged());
        }), $("#desired-tier-plus").click(function (e) {
            e.preventDefault(), desiredTier < maxTier && (desiredTier += 1, desiredTierChanged());
        }), $("#start-division-i").click(function () {
            startDivision = 3, startTierChanged();
        }), $("#start-division-ii").click(function () {
            startDivision = 2, startTierChanged();
        }), $("#start-division-iii").click(function () {
            startDivision = 1, startTierChanged();
        }), $("#start-division-iv").click(function () {
            startDivision = 0, startTierChanged();
        }), $("#start-lp-0").click(function () {
            startLP = 0, startTierChanged();
        }), $("#start-lp-30").click(function () {
            startLP = 30, startTierChanged();
        }), $("#start-lp-60").click(function () {
            startLP = 60, startTierChanged();
        }), $("#start-lp-input").on("change", function () {
            startLP = parseInt($("#start-lp-input").val()), isNaN(startLP) && (startLP = 0), startTierChanged();
        }), $("#desired-division-i").click(function () {
            desiredDivision = 3, desiredTierChanged();
        }), $("#desired-division-ii").click(function () {
            desiredDivision = 2, desiredTierChanged();
        }), $("#desired-division-iii").click(function () {
            desiredDivision = 1, desiredTierChanged();
        }), $("#desired-division-iv").click(function () {
            desiredDivision = 0, desiredTierChanged();
        }), $("#desired-lp-input").on("change", function () {
            desiredLP = parseInt($("#desired-lp-input").val()), isNaN(desiredLP) && (desiredLP = 0), startTierChanged();
        }), $("#lp-gain .nav-link").click(function (e) {
            e.preventDefault(), $("#form-rating").find(".hidden-lp-gain").val($(this).attr("data-lp-gain")), updateOrder();
        }), $("#queue-type .nav-link").click(function (e) {
            e.preventDefault(), $("#form-rating").find(".hidden-queue-type").val($(this).attr("data-queue-type")), updateOrder();
        }), $("#position-primary").on("change", function () {
            positionPrimaryChanged($(this).val());
        }), positionPrimaryChanged(positionPrimary), $("#position-secondary").on("change", function () {
            positionSecondaryChanged($(this).val());
        }), positionSecondaryChanged(positionSecondary), $("#summoner-spell-d").on("change", function () {
            summonerSpellDChanged($(this).val());
        }), summonerSpellDChanged(summonerSpellD), $("#summoner-spell-f").on("change", function () {
            summonerSpellFChanged($(this).val());
        }), summonerSpellFChanged(summonerSpellF), $("#duo-group").click(function (e) {
            e.preventDefault(), duoSwitch(), startTierChanged();
        }), $("#stream-group").click(function (e) {
            e.preventDefault(), streamSwitch(), updateRating();
        }), $("#priority-completion-group").click(function (e) {
            e.preventDefault(), priorityCompletionSwitch(), updateRating();
        }), startTierChanged());
        var tier = 4,
            quantity = 5,
            quantityMin = 1,
            quantityMax = 5,
            quantityPips = {
                mode: "steps",
                filter: function (e) {
                    return 1 === e ? 1 : e % 5 ? 0 : 1;
                },
                density: 1e3
            },
            placementPrices;

        function updatePlacement() {
            amount = parseInt(quantity) * parseFloat(placementPrices[parseInt(tier)]);
            var e = $("#form-placement").find(".hidden-server").val(),
                t = void 0 !== serverMultipliers[e] ? serverMultipliers[e] : 1;
            amount *= t;
            var i = $("#form-placement"),
                r = 0;
            "Flex Queue" === i.find(".hidden-queue-type").val() && (r += flexQueuePercent), isDuo ? (i.find(".hidden-is-duo").val("true"), r += duoPercent) : i.find(".hidden-is-duo").val("false"), isStream ? (i.find(".hidden-stream").val("true"), r += streamPercent) : i.find(".hidden-stream").val("false"), priorityCompletion ? (i.find(".hidden-priority-completion").val("true"), r += priorityCompletionPercent) : i.find(".hidden-priority-completion").val("false"), amount *= (100 + r) / 100, applyCurrency(), applyDiscount(), i.find(".hidden-start").val(1e3 * parseInt(tier)), i.find(".hidden-quantity").val(quantity), i.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
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
        $("#tab-placement").length && (updateOrder = updatePlacement, placementPrices = $("#tab-placement").attr("data-prices").split(","), serverMultipliers = JSON.parse($("#tab-placement").attr("data-server-multipliers")), flexQueuePercent = parseInt($("#tab-placement").attr("data-flex-queue-percent")), duoPercent = parseInt($("#tab-placement").attr("data-duo-percent")), streamPercent = parseInt($("#tab-placement").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-placement").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (e) {
            e.preventDefault();
            var t = $(this).attr("data-server");
            $("#form-placement").find(".hidden-server").val(t), updateOrder();
        }), $("#tier").val(tier), $("#tier").selectpicker("refresh"), $("#tier").on("change", function () {
            tier = parseInt($(this).val()), updateOrder();
        }), $("#tier-minus").click(function (e) {
            e.preventDefault(), tier > 0 && (tier -= 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#tier-plus").click(function (e) {
            e.preventDefault(), tier < 9 && (tier += 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#quantity").on("input", function () {
            var e = parseInt($("#quantity").val());
            isNaN(e) || ((quantity = parseInt($("#quantity").val())) > quantityMax ? quantity = quantityMax : quantity < 1 && (quantity = 1), $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
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
        }), updateQuantitySlider(), $("#queue-type .nav-link").click(function (e) {
            e.preventDefault(), $("#form-placement").find(".hidden-queue-type").val($(this).attr("data-queue-type")), updateOrder();
        }), $("#position-primary").on("change", function () {
            positionPrimaryChanged($(this).val());
        }), positionPrimaryChanged(positionPrimary), $("#position-secondary").on("change", function () {
            positionSecondaryChanged($(this).val());
        }), positionSecondaryChanged(positionSecondary), $("#summoner-spell-d").on("change", function () {
            summonerSpellDChanged($(this).val());
        }), summonerSpellDChanged(summonerSpellD), $("#summoner-spell-f").on("change", function () {
            summonerSpellFChanged($(this).val());
        }), summonerSpellFChanged(summonerSpellF), $("#duo-group").click(function (e) {
            e.preventDefault(), duoSwitch(), updateOrder();
        }), $("#stream-group").click(function (e) {
            e.preventDefault(), streamSwitch(), updateOrder();
        }), $("#priority-completion-group").click(function (e) {
            e.preventDefault(), priorityCompletionSwitch(), updateOrder();
        }));
        var coachingHours = 1,
            coachingPriceDefault = 40,
            coachingPrice = coachingPriceDefault;

        function updateCoachingSlider() {
            var e = document.getElementById("coaching-hours-slider");
            void 0 !== e.noUiSlider && null != e.noUiSlider && e.noUiSlider.destroy(), noUiSlider.create(e, {
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
            }), e.noUiSlider.on("update", function (e, t) {
                coachingHours = parseInt(e[t]), $("#coaching-hours").val(coachingHours), updateCoaching();
            });
        }

        function updateCoaching() {
            $("#tab-coaching");
            coachingPrice = parseInt($(".card-profile.selected").attr("data-price")), isNaN(coachingPrice) && (coachingPrice = coachingPriceDefault), amount = parseInt(coachingHours) * parseFloat(coachingPrice);
            var e = $("#form-coaching"),
                t = 0;
            priorityCompletion ? (e.find(".hidden-priority-completion").val("true"), t += priorityCompletionPercent) : e.find(".hidden-priority-completion").val("false"), amount *= (100 + t) / 100, applyCurrency(), applyDiscount(), e.find(".hidden-quantity").val(coachingHours), e.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
            var i = $(".card-profile.selected").attr("data-id");
            void 0 !== i && e.find(".hidden-booster-id").val(i);
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
        $("#tab-coaching").length && (updateOrder = updateCoaching, priorityCompletionPercent = parseInt($("#tab-coaching").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (e) {
            e.preventDefault(), $("#form-coaching").find(".hidden-server").val($(this).attr("data-server"));
        }), $("#coaching-hours").on("input", function () {
            var e = parseInt($("#coaching-hours").val());
            isNaN(e) || ((coachingHours = parseInt($("#coaching-hours").val())) > 5 ? coachingHours = 5 : coachingHours < 1 && (coachingHours = 1), $("#coaching-hours").val(coachingHours), updateCoachingSlider()), updateCoaching();
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
        }), $(".card-profile").click(function (e) {
            e.preventDefault(), $(".card-profile.selected").removeClass("selected"), $(this).addClass("selected"), updateOrder();
        }), updateCoachingSlider(), $("#priority-completion-group").click(function (e) {
            e.preventDefault(), priorityCompletionSwitch(), updateOrder();
        }));
        var division = 0,
            winsPrices, arenaWinsPrices;

        function updateWins() {
            tier >= 8 ? (division = 0, $("#division-iv").addClass("disabled").addClass("active"), $("#division-iii").addClass("disabled").removeClass("active"), $("#division-ii").addClass("disabled").removeClass("active"), $("#division-i").addClass("disabled").removeClass("active")) : ($("#division-iv").removeClass("disabled"), $("#division-iii").removeClass("disabled"), $("#division-ii").removeClass("disabled"), $("#division-i").removeClass("disabled")), amount = parseInt(quantity) * parseFloat(winsPrices[parseInt(tier)][parseInt(division)]);
            var e = $("#form-wins").find(".hidden-server").val(),
                t = void 0 !== serverMultipliers[e] ? serverMultipliers[e] : 1;
            amount *= t;
            var i = $("#form-wins"),
                r = 0;
            "Flex Queue" === i.find(".hidden-queue-type").val() && (r += flexQueuePercent), isDuo ? (i.find(".hidden-is-duo").val("true"), r += duoPercent) : i.find(".hidden-is-duo").val("false"), isStream ? (i.find(".hidden-stream").val("true"), r += streamPercent) : i.find(".hidden-stream").val("false"), priorityCompletion ? (i.find(".hidden-priority-completion").val("true"), r += priorityCompletionPercent) : i.find(".hidden-priority-completion").val("false"), amount *= (100 + r) / 100, applyCurrency(), applyDiscount(), i.find(".hidden-start").val(1e3 * parseInt(tier) + 100 * division), i.find(".hidden-quantity").val(quantity), i.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
            var n = Math.ceil(1.5 * quantity);
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

        function updateArenaWins() {
            amount = parseInt(quantity) * parseFloat(arenaWinsPrices[parseInt(tier)]);
            var e = $("#form-wins").find(".hidden-server").val(),
                t = void 0 !== serverMultipliers[e] ? serverMultipliers[e] : 1;
            amount *= t;
            var i = $("#form-wins"),
                r = 0;
            isDuo ? (i.find(".hidden-is-duo").val("true"), r += duoPercent) : i.find(".hidden-is-duo").val("false"), isStream ? (i.find(".hidden-stream").val("true"), r += streamPercent) : i.find(".hidden-stream").val("false"), priorityCompletion ? (i.find(".hidden-priority-completion").val("true"), r += priorityCompletionPercent) : i.find(".hidden-priority-completion").val("false"), amount *= (100 + r) / 100, applyCurrency(), applyDiscount(), i.find(".hidden-start").val(tier), i.find(".hidden-quantity").val(quantity), i.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
            var n = Math.ceil(1.5 * quantity);
            isDuo && (n *= 2);
            var a = "";
            if (n <= 24) {
                var s = "";
                n > 1 && (s = "s"), a = n + " hour" + s;
            } else a = Math.ceil(n / 24) + " days";
            var o = "<b>" + quantity + "</b>";
            isDuo && (o += " Duo"), o += " Soul Fighter Win" + (quantity > 1 ? "s" : ""), o += '<br><span class="small text-muted">Approximate completion time: <b>' + a + "</b></span>", $("#order-summary").html(o);
            var d = "";
            amount != amountWithDiscount && (d += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), d += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(d);
        }
        $("#tab-wins").length && (updateOrder = updateWins, quantity = 5, quantityMax = 5, winsPrices = eval($("#tab-wins").attr("data-prices")), serverMultipliers = JSON.parse($("#tab-wins").attr("data-server-multipliers")), flexQueuePercent = parseInt($("#tab-wins").attr("data-flex-queue-percent")), duoPercent = parseInt($("#tab-wins").attr("data-duo-percent")), streamPercent = parseInt($("#tab-wins").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-wins").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (e) {
            e.preventDefault(), $("#form-wins").find(".hidden-server").val($(this).attr("data-server")), updateOrder();
        }), tier = 4, $("#tier").val(tier), $("#tier").selectpicker("refresh"), $("#tier").on("change", function () {
            tier = parseInt($(this).val()), updateOrder();
        }), $("#tier-minus").click(function (e) {
            e.preventDefault(), tier > 1 && (tier -= 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#tier-plus").click(function (e) {
            e.preventDefault(), tier < 8 && (tier += 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#division-i").click(function () {
            division = 3, updateOrder();
        }), $("#division-ii").click(function () {
            division = 2, updateOrder();
        }), $("#division-iii").click(function () {
            division = 1, updateOrder();
        }), $("#division-iv").click(function () {
            division = 0, updateOrder();
        }), $("#quantity").on("input", function () {
            var e = parseInt($("#quantity").val());
            isNaN(e) || ((quantity = parseInt($("#quantity").val())) > quantityMax ? quantity = quantityMax : quantity < 1 && (quantity = 1), $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
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
        }), updateQuantitySlider(), $("#queue-type .nav-link").click(function (e) {
            e.preventDefault(), $("#form-wins").find(".hidden-queue-type").val($(this).attr("data-queue-type")), updateOrder();
        }), $("#position-primary").on("change", function () {
            positionPrimaryChanged($(this).val());
        }), positionPrimaryChanged(positionPrimary), $("#position-secondary").on("change", function () {
            positionSecondaryChanged($(this).val());
        }), positionSecondaryChanged(positionSecondary), $("#summoner-spell-d").on("change", function () {
            summonerSpellDChanged($(this).val());
        }), summonerSpellDChanged(summonerSpellD), $("#summoner-spell-f").on("change", function () {
            summonerSpellFChanged($(this).val());
        }), summonerSpellFChanged(summonerSpellF), $("#duo-group").click(function (e) {
            e.preventDefault(), duoSwitch(), updateOrder();
        }), $("#stream-group").click(function (e) {
            e.preventDefault(), streamSwitch(), updateOrder();
        }), $("#priority-completion-group").click(function (e) {
            e.preventDefault(), priorityCompletionSwitch(), updateOrder();
        })), $("#tab-arena-wins").length && (updateOrder = updateArenaWins, quantity = 5, quantityMax = 5, arenaWinsPrices = $("#tab-arena-wins").attr("data-prices").split(","), serverMultipliers = JSON.parse($("#tab-arena-wins").attr("data-server-multipliers")), duoPercent = parseInt($("#tab-arena-wins").attr("data-duo-percent")), streamPercent = parseInt($("#tab-arena-wins").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-arena-wins").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (e) {
            e.preventDefault(), $("#form-wins").find(".hidden-server").val($(this).attr("data-server")), updateOrder();
        }), tier = 4, $("#tier").val(tier), $("#tier").selectpicker("refresh"), $("#tier").on("change", function () {
            tier = parseInt($(this).val()), updateOrder();
        }), $("#tier-minus").click(function (e) {
            e.preventDefault(), tier > 1 && (tier -= 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#tier-plus").click(function (e) {
            e.preventDefault(), tier < 5 && (tier += 1, $("#tier").val(tier), $("#tier").selectpicker("refresh"), updateOrder());
        }), $("#quantity").on("input", function () {
            var e = parseInt($("#quantity").val());
            isNaN(e) || ((quantity = parseInt($("#quantity").val())) > quantityMax ? quantity = quantityMax : quantity < 1 && (quantity = 1), $("#quantity").val(quantity), updateQuantitySlider()), updateOrder();
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
        }), updateQuantitySlider(), $("#duo-group").click(function (e) {
            e.preventDefault(), duoSwitch(), updateOrder();
        }), $("#stream-group").click(function (e) {
            e.preventDefault(), streamSwitch(), updateOrder();
        }), $("#priority-completion-group").click(function (e) {
            e.preventDefault(), priorityCompletionSwitch(), updateOrder();
        }));
        var startMasteryLevel = 5,
            startMasteryTokens = 0,
            desiredMasteryLevel = 7,
            minDesiredMastery = 6,
            masteryPrices;

        function calculateMasteryAmount() {
            for (var e = startMasteryLevel, t = startMasteryTokens, i = 0; e < desiredMasteryLevel;) i += parseFloat(masteryPrices[e]), 5 === e && t < 1 ? t += 1 : 6 === e && t < 2 ? t += 1 : (completionHours += 24, e += 1, t = 0);
            return i;
        }

        function updateMastery() {
            var e = $("#tab-mastery"),
                t = "";
            t += "<b>Mastery&nbsp;" + startMasteryLevel + "</b>&nbsp;", 5 !== startMasteryLevel && 6 !== startMasteryLevel || (t += "(" + startMasteryTokens + "&nbsp;tokens)&nbsp;"), t += "to&nbsp;<b>Mastery " + desiredMasteryLevel + "</b>", completionHours = 0, amount = calculateMasteryAmount();
            var i = $("#form-mastery").find(".hidden-server").val(),
                r = void 0 !== serverMultipliers[i] ? serverMultipliers[i] : 1;
            amount *= r;
            var n = $("#form-mastery"),
                a = 0;
            isStream ? (n.find(".hidden-stream").val("true"), a += streamPercent) : n.find(".hidden-stream").val("false"), priorityCompletion ? (n.find(".hidden-priority-completion").val("true"), a += priorityCompletionPercent) : n.find(".hidden-priority-completion").val("false"), amount *= (100 + a) / 100, applyCurrency(), applyDiscount(), n.find(".hidden-start").val(10 * startMasteryLevel + startMasteryTokens), n.find(".hidden-desired").val(10 * desiredMasteryLevel), n.find(".hidden-amount").val(amountWithDiscount.toFixed(2));
            var s = "";
            amount != amountWithDiscount && (s += '<span style="text-decoration:line-through">&nbsp;' + currencySymbol + amount.toFixed(2) + "&nbsp;</span>&nbsp;"), s += "<b>" + currencySymbol + amountWithDiscount.toFixed(2) + "</b>&nbsp;", $("#order-description-amount").html(s), $("#order-description-container .dropdown").show(), e.find(".checkout-button").prop("disabled", !1);
            t += '<br><span class="small text-muted">Approximate completion time: <b>' + (completionHours <= 24 ? completionHours + " hours" : Math.ceil(completionHours / 24) + " days") + "</b></span>", $("#order-summary").html(t);
        }

        function startMasteryChanged() {
            $("#start-mastery").val(startMasteryLevel), $("#start-mastery").selectpicker("refresh"), startMasteryLevel <= 0 ? $("#start-mastery-minus").attr("disabled", !0) : $("#start-mastery-minus").attr("disabled", !1), startMasteryLevel >= 6 ? $("#start-mastery-plus").attr("disabled", !0) : $("#start-mastery-plus").attr("disabled", !1), 2 === startMasteryTokens && 6 !== startMasteryLevel && (startMasteryTokens = 0), 1 === startMasteryTokens && 5 !== startMasteryLevel && 6 !== startMasteryLevel && (startMasteryTokens = 0), 0 !== startMasteryTokens || 5 !== startMasteryLevel && 6 !== startMasteryLevel ? $("#tokens-0").removeClass("active") : $("#tokens-0").addClass("active"), 1 !== startMasteryTokens || 5 !== startMasteryLevel && 6 !== startMasteryLevel ? $("#tokens-1").removeClass("active") : $("#tokens-1").addClass("active"), 2 === startMasteryTokens && 6 === startMasteryLevel ? $("#tokens-2").addClass("active") : $("#tokens-2").removeClass("active"), 5 === startMasteryLevel ? ($("#tokens-0").removeClass("disabled"), $("#tokens-1").removeClass("disabled"), $("#tokens-2").addClass("disabled")) : 6 === startMasteryLevel ? ($("#tokens-0").removeClass("disabled"), $("#tokens-1").removeClass("disabled"), $("#tokens-2").removeClass("disabled")) : ($("#tokens-0").addClass("disabled"), $("#tokens-1").addClass("disabled"), $("#tokens-2").addClass("disabled")), desiredMasteryLevel < (minDesiredMastery = startMasteryLevel + 1) && (desiredMasteryLevel = minDesiredMastery), desiredMasteryChanged();
        }

        function desiredMasteryChanged() {
            $("#desired-mastery").val(desiredMasteryLevel), desiredMasteryLevel <= minDesiredMastery ? $("#desired-mastery-minus").attr("disabled", !0) : $("#desired-mastery-minus").attr("disabled", !1), desiredMasteryLevel >= 7 ? $("#desired-mastery-plus").attr("disabled", !0) : $("#desired-mastery-plus").attr("disabled", !1), $("#desired-mastery option").each(function () {
                parseInt($(this).val()) < minDesiredMastery ? $(this).attr("disabled", !0) : $(this).attr("disabled", !1);
            }), $("#desired-mastery").selectpicker("refresh"), updateMastery();
        }
        $("#tab-mastery").length && (updateOrder = updateMastery, masteryPrices = $("#tab-mastery").attr("data-mastery-prices").split(","), serverMultipliers = JSON.parse($("#tab-mastery").attr("data-server-multipliers")), streamPercent = parseInt($("#tab-mastery").attr("data-stream-percent")), priorityCompletionPercent = parseInt($("#tab-mastery").attr("data-priority-completion-percent")), updateDiscount(), $("#server .nav-link").click(function (e) {
            e.preventDefault(), $("#tab-mastery").find(".hidden-server").val($(this).attr("data-server")), updateOrder();
        }), $("#start-mastery").on("change", function () {
            startMasteryLevel = parseInt($(this).val()), startMasteryChanged();
        }), $("#desired-mastery").on("change", function () {
            desiredMasteryLevel = parseInt($(this).val()), desiredMasteryChanged();
        }), $("#start-mastery-minus").click(function (e) {
            e.preventDefault(), startMasteryLevel > 0 && (startMasteryLevel -= 1, startMasteryChanged());
        }), $("#start-mastery-plus").click(function (e) {
            e.preventDefault(), startMasteryLevel < 6 && (startMasteryLevel += 1, startMasteryChanged());
        }), $("#desired-mastery-minus").click(function (e) {
            e.preventDefault(), desiredMasteryLevel > 1 && (desiredMasteryLevel -= 1, desiredMasteryChanged());
        }), $("#desired-mastery-plus").click(function (e) {
            e.preventDefault(), desiredMasteryLevel < 7 && (desiredMasteryLevel += 1, desiredMasteryChanged());
        }), $("#tokens-0").click(function () {
            startMasteryTokens = 0, startMasteryChanged();
        }), $("#tokens-1").click(function () {
            startMasteryTokens = 1, startMasteryChanged();
        }), $("#tokens-2").click(function () {
            startMasteryTokens = 2, startMasteryChanged();
        }), $("#position-primary").on("change", function () {
            positionPrimaryChanged($(this).val());
        }), positionPrimaryChanged(positionPrimary), $("#position-secondary").on("change", function () {
            positionSecondaryChanged($(this).val());
        }), positionSecondaryChanged(positionSecondary), $("#summoner-spell-d").on("change", function () {
            summonerSpellDChanged($(this).val());
        }), summonerSpellDChanged(summonerSpellD), $("#summoner-spell-f").on("change", function () {
            summonerSpellFChanged($(this).val());
        }), summonerSpellFChanged(summonerSpellF), $("#stream-group").click(function (e) {
            e.preventDefault(), streamSwitch(), updateMastery();
        }), $("#priority-completion-group").click(function (e) {
            e.preventDefault(), priorityCompletionSwitch(), updateMastery();
        }), startMasteryChanged());
    }
});