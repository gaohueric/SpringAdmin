var vm_edit;
$(document).ready(function(){
    $('.date-picker').datepicker({
        format:'yyyy-mm-dd',
        language:"zh-CN",
        autoclose:true
    });

    vm_edit = new Vue({
        el:"#airCabinCodeForm",

    });

});

function submitData(op){


    var flightCabinId = $('#flightCabinId').val(); // 舱位代码
    if(flightCabinId == null || flightCabinId == ""){
        toastr.error("请输入舱位代码", null, {timeOut: 3000, positionClass: "toast-top-center"});
        return false;
    }

    var cabinPrice = $('#cabinPrice').val(); // 基准舱位
    if(cabinPrice == null || cabinPrice == ""){
        toastr.error("请输入基准舱位", null, {timeOut: 3000, positionClass: "toast-top-center"});
        return false;
    }


    var params = {
        flightCabinId : flightCabinId,
        cabinPrice : cabinPrice,
    };

    $.ajax({
        type : 'POST',
        url : __ctx + "/cabin/updateCabinInfo",
        data : JSON.stringify(params),
        datatype : "json",
        contentType : 'application/json;charset=UTF-8',
        success : function(data) {
            toastr.success(data.message,"", {timeOut: 3000, positionClass: "toast-top-center"});
            if(op == 1){
                // 保存并返回
                $('#formModal').modal('hide');
                window.location.href =  __ctx + "/cabin/list";
            } else if(op == 2){
                // 保存并继续新增
                $("#formModal").modal({
                    show: true,
                    remote: __ctx + "/aircabincode/toaddpage",
                    backdrop: 'static'
                });
            } else {
                // 提交修改
                $('#formModal').modal('hide');
                window.location.href =  __ctx + "/cabin/list";
            }

        },
        error : function(err) {
            toastr.error(err, {timeOut: 3000, positionClass: "toast-top-center"});
        }
    });
}
