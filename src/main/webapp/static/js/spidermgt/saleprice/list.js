var vm_list;
$(document).ready(function(){

	
	$("#flightDate").datetimepicker({
		minView: "day",
		format: "yyyy-mm-dd ",
		autoclose: true,
		todayBtn: true,
	}).on("click", function(ev) {
		var currentDate = moment().format('YYYY-MM-DD ');
	
	});
	$("#qryDate").datetimepicker({
		minView: "day",
		format: "yyyy-mm-dd ",
		autoclose: true,
		todayBtn: true,
	}).on("click", function(ev) {
		var currentDate = moment().format('YYYY-MM-DD ');
	
	});
    vm_list=new Vue({
        el:"#salepricelist",
        data:{
            infos:{},
            params:{}
        },
        ready:function(){
            // 页面初始化载入首页数据.
            this.loadGridData();
        },
        methods:{
        	// 加载list页面数据
            loadGridData:function(salePriceReqDTO){
                $.ajax({
                    type:"POST",
                    url:__ctx + "/saleprice/getSalePriceList",
                    data:salePriceReqDTO,
                    success:function(result){
                        if (result.result){
                            vm_list.infos = result.obj
                        }else{
                            toastr.error(result.message, "加载失败", {
                                timeOut : 2000,
                                positionClass : "toast-top-center"
                            });
                        }
                    },
                    error:function (result) {
                        toastr.error(result.message, "加载失败", {
                            timeOut : 2000,
                            positionClass : "toast-top-center"
                        });
                    }
                })
            },
            // 翻页功能
            queryData: function(event, pageInfo) {
                if (pageInfo) {
                    $.extend(this.params, pageInfo);
                }else {
                    this.params.page = 1;
                    this.params.pageSize = 20;
                }
                this.loadGridData(this.params);
            },

        }
    });
    
})