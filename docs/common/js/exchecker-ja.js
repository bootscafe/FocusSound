/*!
 * exValidation
 *
 * @version   : 1.3.1
 * @author    : nori (norimania@gmail.com)
 * @copyright : 5509 (http://5509.me/)
 * @license   : The MIT License
 * @link      : http://5509.me/log/exvalidation
 * @modified  : 2012-03-17 16:14
 */
(function(a) {
	a.exValidationRules = a.extend(a.exValidationRules, {
		chkrequired: ["必須項目です。", function(b, c) {
			if (a(c).hasClass("chkgroup")) {
				var d = 0;
				a("input,select", c).each(function() {
					a(this).val().length > 0 && d++
				});
				if (b && d === a("input,select", c).length) return /^[ 　\r\n\t]+$/.test(b) ? !1 : !0
			} else if (b && b.length > 0) return /^[ 　\r\n\t]+$/.test(b) ? !1 : !0
		}],
		chkname: ["氏名を入力してください", function(b, c) {
			if (a(c).hasClass("chkgroup")) {
				var d = 0;
				a("input,select", c).each(function() {
					a(this).val().length > 0 && d++
				});
				if (b && d === a("input,select", c).length) return /^[ 　\r\n\t]+$/.test(b) ? !1 : !0
			} else if (b && b.length > 0) return /^[ 　\r\n\t]+$/.test(b) ? !1 : !0
		}],
		chkmailaddress: ["メールアドレスを入力してください", function(b, c) {
			if (a(c).hasClass("chkgroup")) {
				var d = 0;
				a("input,select", c).each(function() {
					a(this).val().length > 0 && d++
				});
				if (b && d === a("input,select", c).length) return /^[ 　\r\n\t]+$/.test(b) ? !1 : !0
			} else if (b && b.length > 0) return /^[ 　\r\n\t]+$/.test(b) ? !1 : !0
		}],
		chkbody: ["お問い合わせ内容を入力してください", function(b, c) {
			if (a(c).hasClass("chkgroup")) {
				var d = 0;
				a("input,select", c).each(function() {
					a(this).val().length > 0 && d++
				});
				if (b && d === a("input,select", c).length) return /^[ 　\r\n\t]+$/.test(b) ? !1 : !0
			} else if (b && b.length > 0) return /^[ 　\r\n\t]+$/.test(b) ? !1 : !0
		}],
		chkselect: ["選択してください", function(a, b) {
			if (a && a.length > 0) return /^[ 　\r\n\t]+$/.test(a) ? !1 : !0
		}],
		chkretype: ["メールアドレスが異なります", function(b, c) {
			var d = a("#" + a(c).attr("class").split("retype-")[1].split(/\b/)[0]);
			if (!d.hasClass("chkgroup")) return d.val() == b;
			var e = a("input", d),
			b = a("input", c);
			for (var f = 0, g = !1; f < e.length; f++) {
				if (e[f].value !== b[f].value) {
					g = !1;
					break
				}
				g = !0
			}
			if (g) return !0
		}],
		chkemail: ["正しいメールアドレスの形式を入力してください", /^(?:[^\@]+?@[A-Za-z0-9_\.\-]+\.+[A-Za-z\.\-\_]+)*$/],
		chkhankaku: ["全角文字は使用できません", /^(?:[a-zA-Z0-9@\<\>\;\:\[\]\{\}\|\^\=\/\!\*\`\"\#\$\+\%\&\'\(\)\,\.\-\_\?\\\s]*)*$/],
		chkzenkaku: ["全角文字で入力してください", /^(?:[^a-zA-Z0-9@\<\>\;\:\[\]\{\}\|\^\=\/\!\*\"\#\$\+\%\&\'\(\)\,\.\-\_\?\\\s]+)*$/],
		chkhiragana: ["ひらがなで入力してください", /^(?:[ぁ-ゞ]+)*$/],
		chkkatakana: ["カタカナで入力してください", /^(?:[ァ-ヾ]+)*$/],
		chkfurigana: ["ふりがなはひらがな、全角数字と〜、ー、（）が利用できます", /^(?:[ぁ-ゞ０-９ー～（）\(\)\d 　]+)*$/],
		chknochar: ["英数字で入力してください", /^(?:[a-zA-Z0-9]+)*$/],
		chknocaps: ["英数字(小文字のみ)で入力してください", /^(?:[a-z0-9]+)*$/],
		chknumonly: ["半角数字のみで入力してください", /^(?:[0-9]+)*$/],
		chkmin: ["文字以上で入力してください", function(b, c) {
			if (b.length === 0) return !0;
			var d = a(c).attr("class").match(/min(\d+)/) ? RegExp.$1 : null;
			return b.length >= d
		}],
		chkmax: ["文字以内で入力してください", function(b, c) {
			var d = a(c).attr("class").match(/max(\d+)/) ? RegExp.$1 : null;
			return b.length <= d
		}],
		chkradio: ["選択してください", function(b, c) {
			return a("input:checked", c).length > 0
		}],
		chkcheckbox: ["選択してください", function(b, c) {
			return a("input:checked", c).length > 0
		}],
		chkzip: ["正しい郵便番号の形式を入力してください", /^¥d{3}-?¥d{4}$|^¥d{3}-?¥d{2}$|^¥d{3}$/],
		chkurl: ["正しいURLの形式を入力してください", /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/],
		chktel: ["正しい電話番号を入力してください", /^(?:\(?\d+\)?\-?\d+\-?\d+)*$/],
		chkfax: ["正しいファックス番号を入力してください", /^(?:\(?\d+\)?\-?\d+\-?\d+)*$/],
		chkfile: ["ファイルを選択してください", function(a, b) {
			if (a && a.length > 0) return /^[ 　\r\n\t]+$/.test(a) ? !1 : !0
		}]
	})
})(jQuery);