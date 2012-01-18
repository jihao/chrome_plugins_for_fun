var phoneURL = chrome.extension.getURL("images/phone.png");
var applyURL = chrome.extension.getURL("images/apply.png");

$(document).ready(function() {
	//console.log($("#other-payment-options"));
	
	var $html = '<div class="payment-method" id="ericsson_mobile" style=""><img class="logo"  alt="" src="'+phoneURL+'"><h2 id="title-gift-card">Pay by Mobile</h2><div style="margin-left: 118px;"><p class="caption">Phone Number: xxxxxxxx</p><p class="caption">Payment Password</p></div><div class="offer" id="gcpromo"><input type="text" size="25" maxlength="25" id="gcpromoinput" title="phone number"><input type="image" class="apply action_link" style="vertical-align: text-bottom;"  alt="apply" src="'+applyURL+'"><p class="caption" id="title-new-gift-card">Pay by mobile through Ericsson Mobile Orchestrator.</p></div><br></div>';
	
	$("#other-payment-options").after ( $html );
   //$("#other-payment-options").after(  );
});