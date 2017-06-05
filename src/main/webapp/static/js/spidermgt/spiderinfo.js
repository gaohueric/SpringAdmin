/*
 * LY.com Inc.
 * Copyright (c) 2004-2016 All Rights Reserved.
 */
var spiderInfoPage;
$(document).ajaxStart(function(e) {
	Metronic.unblockUI();
});
$(document).ready(function() {
    //vue begin.
	spiderInfoPage = new Vue({
		
    });

    $('.date-picker').datepicker({
        format:'yyyy-mm-dd',
        language:"zh-CN",
        autoclose:true
    });
});