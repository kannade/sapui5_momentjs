/* global moment:true */
/*eslint consistent-this: ["error", "oElem"]*/

sap.ui.define([
	//	"momentjs/nickcode/model/moment-with-locales",
	"sap/ui/Device"
], function (
	//momentjs,
	Device) {
	"use strict";

	var Formatter = {
		requestTime: function (sValue) {
			if (!sValue) {
				return "";
			}

			//Локализация - Россия
			moment.locale("ru");

			var nowDate = moment();
			var date = moment(sValue);
			var yesterday = moment(sValue).subtract(1, "days");
			
			var oElem = this;

			if (nowDate.format("DD.MM.YY") === date.format("DD.MM.YY")) {
				var diffMs = nowDate.diff(date);

				if ((diffMs) <= (1000 * 60 * 60) && !Device.system.phone) {

					//Будем обновлять состояние каждые 60 секунд
					setInterval(function () {
						try {
							var time = moment(oElem.getModel("nickcode").getData().time);
							diffMs = nowDate.diff(time);
							if (diffMs < 3600000) {
								var diffTime = time.fromNow();
								oElem.setText(diffTime);
							}
						} catch (err) {
							//console.log("error");
						}
					}, 60000);

					return date.fromNow();
				} else {
					return date.format("HH:mm");
				}
			} else if (nowDate.format("DD.MM.YY") === yesterday.format("DD.MM.YY")) {
				return "Вчера";
			} else {
				return date.format("DD MMM");
			}

		}

	};
	return Formatter;
}, true);