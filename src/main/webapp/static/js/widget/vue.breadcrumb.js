/*
 * LY.com Inc.
 * Copyright (c) 2004-2016 All Rights Reserved.
 */
Vue.component('vue-breadcrumb', {
    template: '<ul class="page-breadcrumb breadcrumb">' +
                    '<li>' +
                        '<a href="' + __ctx + '/index">首页</a>' +
                    '</li>' +
                    '<template v-for="item in items">' +
                        '<li><i class="fa fa-lg fa-angle-right"></i></li>' +
                        '<li class="active" v-html="item"></li>' +
                    '</template>' +
                    '<template v-if="sourcePath">' +
                    '<li style="float:right; text-align:right;"><a v-on:click.prevent="push()"><span class="glyphicon glyphicon-cloud-upload"></span>发布</a></li>' +
                    '</template>' +
                '</ul>' +
                '<div class="modal fade" id="remarkModal" tabindex="-1" role="dialog" >' +
                	'<div class="modal-dialog">' +
                		'<div class="modal-content">' +
                			'<div class="modal-header" id="pushHeader">' +
                				'<h4 class="modal-title" id="myModalLabel">发布信息概述</h4>' +
                			'</div>' +
                			'<form class="form-horizontal" id="pushForm">' +
                				'<div class="modal-body">' +
	        						'<div class="form-group">' +
	        							'<label class="col-sm-2 control-label" for="remark">备注</label>' +
	        							'<div class="col-sm-10">' +
	        								'<textarea class="form-control" id ="remark" name="remark" value=""></textarea>' +
	        							'</div>' +
		        					'</div>' +
                				'</div>' +
            					'<div class="modal-footer">' +
            						'<button id="dialog-cancel" type="button" class="btn btn-warning" data-dismiss="modal">取消</button>' +
            						'<button id="push-dl-submit" type="button" class="btn btn-success" @click.prevent="pushSubmit()" >同意</button>' +
            					'</div>' +
            				'</form>' +
            			'</div>' +
            		'</div>' +
            	'</div>',
            	
    props: ["firstName", "secondName", "thirdName", "sourcePath"],
    
    methods: {
    	push: function (event) {
    		$("#remarkModal").modal({
                show : true,
                backdrop : 'static'
            });
        },
        pushSubmit: function () {
	    	var url = __ctx + "/pushDrm/push",data = {sourceList:this.sourcePath,remark:$("#remark").val()};
			$.ajax({
				type : "POST",
				// 提交的网址
				url : url,
				// 提交的数据
				data : data,
				// 返回数据的格式
				datatype : "json",
				// 在请求之前调用的函数
				beforeSend : function() {
				},
				// 成功返回之后调用的函数
				success : function(data) {
				    if (data && data.result) {
				    	$('#remarkModal').modal('hide');
                        toastr.success(data.message, {timeOut: 3000, positionClass: "toast-top-center"});
					}else{
					    toastr.error(data.message, {timeOut: 3000, positionClass: "toast-top-center"});
					}
				},
				// 调用执行后调用的函数
				complete : function(XMLHttpRequest, textStatus) {
				},
				// 调用出错执行的函数
				error : function() {
				}
			});
        },
		
    },
    ready:function() {
        $("#remarkModal").on("hidden.bs.modal", function() {
        	$("#remark").val("");
        });
    },
    computed: {
        items: function(){
            var list = [];
            if (this.firstName) {
            	list.unshift(this.firstName);
            }
            if (this.secondName) {
            	list.unshift(this.secondName);
            }
            if (this.thirdName) {
            	list.unshift(this.thirdName);
            }
            return list;
        }
    }
});
