var vm_edit;
$(document).ready(function(){

    vm_edit = new Vue({
        el:"#flightadd",

    });
    $('#departureTimes').datetimepicker({
        minView: "hour",
        format: "yyyy-mm-dd hh:ii",
        autoclose: true,
        todayBtn: true,
    }).on("click",function (ev) {
        var currentDate = moment().format("YYYY-MM-DD");
    });
    $('#arriveTime').datetimepicker({
        minView: "hour",
        format: "yyyy-mm-dd hh:ii",
        autoclose: true,
        todayBtn: true,
    }).on("click",function (ev) {
        var currentDate = moment().format("YYYY-MM-DD");
    });

});

function submitData(op){


    var airlineCompany= $('#airlineCompany').val(); // 航空公司

    var departureCity = $('#departureCity').val(); // 起飞城市

    var destinationCity = $('#destinationCity').val();//抵达城市

    var departureAirport = $('#departureAirport').val();//起飞机场

    var destinationAirport = $('#destinationAirport').val(); // 抵达机场

    var flightNum = $('#flightNum').val(); //航班号

    var departureTimes = $('#departureTimes').val()

    var arriveTime = $('#arriveTime').val(); //抵达时间

    var operatorName = $('#operatorName').val(); //操作人

    var params = {
        airlineCompany : airlineCompany,
        departureCity : departureCity,
        destinationCity : destinationCity,
        departureAirport : departureAirport,
        destinationAirport : destinationAirport,
        flightNum : flightNum,
        departureTime : departureTimes,
        arriveTime : arriveTime,
        operatorName : operatorName,
    };

    $.ajax({
        type : 'POST',
        url : __ctx + "/flight/insertFlightBase",
        data : JSON.stringify(params),
        datatype : "json",
        contentType : 'application/json;charset=UTF-8',
        success : function(data) {
            toastr.success(data.message,"", {timeOut: 3000, positionClass: "toast-top-center"});
            if(op == 1){
                // 保存并返回
                $('#formModal').modal('hide');
                window.location.href =  __ctx + "/flight/list";
            } else if(op == 2){
                // 保存并继续新增
                $("#formModal").modal({
                    show: true,
                    remote: __ctx + "/flight/add",
                    backdrop: 'static'
                });
            }

        },
        error : function(err) {
            toastr.error(err, {timeOut: 3000, positionClass: "toast-top-center"});
        }
    });

/*    $.ajax({
        type : 'POST',
        url : __ctx + "/flight/updateFlightBase",
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
    });*/
}


