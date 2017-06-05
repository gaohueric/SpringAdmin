var vm_list;
$(document).ready(function(){

    vm_list=new Vue({
        el:"#flightBaselist",
        data:{
            infos:{},
            params:{}
        },
        ready:function(){
            // 页面初始化载入首页数
            this.loadGridData();
        },
        methods:{
            // 加载list页面数据
            loadGridData:function(flightBaseInfoDTO){
                $.ajax({
                    type:"POST",
                    url:__ctx + "/flight/getFlightBaseInfo",
                    data:flightBaseInfoDTO,
                    success:function(result){
                        if (result.result){
                            vm_list.infos = result.data
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

            remove: function (flightBase) {
                var self = this;
                alertify.confirm("确定删除吗？", function(result) {
                    if (result) {
                        $.ajax({
                            type : 'DELETE',
                            contentType : 'application/json; charset=utf-8',
                            url : __ctx + '/flight/deleteFlightBase',
                            data : JSON.stringify({flightBaseId : flightBase.flightBaseId})
                        }).done(function(resp) {
                            if (resp.result) {
                                toastr.success('删除成功');
                            } else {
                                toastr.error(resp.message);
                            }
                            self.queryData();
                        });
                    }
                });
            },
           //新增
            add:function(){
                $("#formModal").modal({
                    show: true,
                    remote: __ctx + "/flight/add",
                    backdrop: 'static'
                });
            },

            reset: function () {
                this.params = {};
            },

/*            preEdit : function(flightCabin) {
                $("#saveModal").modal({
                    show : true,
                    remote : __ctx + "/cabin/add",
                    backdrop : true
                });
            },*/
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
    //复选框全选
    $("input[tag='allFlight']").on('click',function(){
        var prop = $(this).prop("checked");
        $("input[tag='flight']").each(function(){
            $(this).prop("checked", prop)
        });
    });

  $('#departureTime').datepicker({
      minView: "day",
      format: "yyyy-mm-dd",
      autoclose: true,
      todayBtn: true,
  }).on("click",function (ev) {
      var currentDate = moment().format("YYYY-MM-DD");
  })
})
