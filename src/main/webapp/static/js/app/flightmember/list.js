var vm_list;
$(document).ready(function(){

    vm_list=new Vue({
        el:"#memberInfolist",
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
            loadGridData:function(memberDTO){
                $.ajax({
                    type:"POST",
                    url:__ctx + "/member/getMemberInfoList",
                    data:memberDTO,
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
            /**
             * 重置
             */
            reset: function () {
                this.params = {};
            },

            remove: function (memberInfo) {
                var self = this;
                alertify.confirm("确定删除吗？", function(result) {
                    if (result) {
                        $.ajax({
                            type : 'DELETE',
                            contentType : 'application/json; charset=utf-8',
                            url : __ctx + '/member/deleteMemberInfo',
                            data : JSON.stringify({memberId : memberInfo.memberId})
                        }).done(function(resp) {
                            if (resp.result) {
                                toastr.success('删除成功');
                            } else {
                                toastr.error(resp.message);
                            }
                            self.queryData()
                        });
                    }
                });
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