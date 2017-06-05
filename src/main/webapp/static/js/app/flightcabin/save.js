var vm_edit;
$(document).ready(function(){

    vm_edit = new Vue({
        el:"#airCabinCodeForm",

    });

});

function submitData(op){


    var flightBaseId = $('#flightBaseId').val(); // 舱位代码

    var cabinPrice = $('#cabinPrice').val(); // 基准舱位
/*    if(cabinPrice == null || cabinPrice == ""){
        toastr.error("请输入基准舱, null, {timeOut: 3000, positionClass: "toast-top-center"});
        return false;
    }*/
    var cabinRemain = $('#cabinRemain').val();//舱位剩余

    var operatorName = $('#operatorName').val();

    var flightCabinId = $('#flightCabinId').val();
        if(flightCabinId == null || flightCabinId == ""){
        toastr.error("请输入舱位ID", null, {timeOut: 3000, positionClass: "toast-top-center"});
        return false;
    }

    // 获取复选框选中的行程类
    var applicableItineraryTypeArr = new Array();
    $('input[name="applicableItineraryType"]:checked').each(function(){
        applicableItineraryTypeArr.push($(this).val());
    });
    var applicableItineraryType = applicableItineraryTypeArr.join(",");

    var params = {
        flightBaseId : flightBaseId,
        cabinPrice : cabinPrice,
        cabinType : $('#cabinType').find("option:selected").val(),
        cabinRemain : cabinRemain,
        operatorName : operatorName,
        flightCabinId : flightCabinId,

    };
    var param = {
        cabinPrice : cabinPrice,
        cabinType : $('#cabinType').find("option:selected").val(),
        cabinRemain : cabinRemain,
        operatorName : operatorName,
        flightCabinId : flightCabinId,

    };

    $.ajax({
        type : 'POST',
        url : __ctx + "/cabin/insertCabinInfo",
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
                    remote: __ctx + "/cabin/save",
                    backdrop: 'static'
                });
            }

        },
        error : function(err) {
            toastr.error(err, {timeOut: 3000, positionClass: "toast-top-center"});
        }
    });

    $.ajax({
        type : 'POST',
        url : __ctx + "/cabin/updateCabinInfo",
        data : JSON.stringify(param),
        datatype : "json",
        contentType : 'application/json;charset=UTF-8',
        success : function(data) {
            toastr.success(data.message,"", {timeOut: 3000, positionClass: "toast-top-center"});
            if(op == 3){
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
