;(function($) {
	var validation = null;
	$(":input").focus(function(){
		$(this).css("background","#F1F1F1");
	}).blur(function(){
        $(this).css("background","none");
	})
   
	if (document.getElementById("contact") != null) {
		validation = $("form#sfm-form").exValidation({
			firstValidate: true,
			stepValidation: true,
			customListener : "blur change",
			scrollToErr: true,
			errMsgPrefix: "",
			errTipCloseBtn: false,
			errInsertPos: 'after',
			errPosition: 'fixed',
			rules: {
				name: "chkname",
				email: "chkmailaddress chkemail",
				emailcheck: "chkretype-email chkmailaddress chkemail",
				body: "chkbody"
			}
		});
	}
})(jQuery);