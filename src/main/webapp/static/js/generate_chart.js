/*$(function () {
    //饼状图
    $('#container').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['审核跟进:10',  10],
                ['驳回跟进:8',  8],
                {
                    name: '退款跟进:3',
                    y: 3,
                    sliced: true,
                    selected: true
                },
                ['待完结跟进:6',  6],
                ['自退票跟进:5',  5],
                ['线下工单跟进:7', 7]
            ]
        }]
    });
//雷达图
$('#container_redar').highcharts({

        chart: {
            polar: true,
            type: 'line'
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['个人能力', '团队精神', '服务质量意识', '解决问题能力',
                    'QC知识'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: '活动前',
            data: [4, 1, 3, 2, 1],
            pointPlacement: 'on'
        }, {
            name: '活动后',
            data: [4, 3, 3, 2, 1],
            pointPlacement: 'on'
        }]

    });
//柱状图
$('#container_column').highcharts({

        chart: {
            type: 'column'
        },
        xAxis: {
            categories: ['进度处理']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: '待审核',
            data: [12],
            stack: 'one'
        }, {
            name: '审核跟进',
            data: [8],
            stack: 'one'
        }, {
            name: '待完结',
            data: [7],
            stack: 'tow'
        }, {
            name: '待完结跟进',
            data: [7],
            stack: 'tow'
        },{
            name: '自退票处理',
            data: [10],
            stack: 'three'
        }, {
            name: '自退票跟进',
            data: [11],
            stack: 'three'
        }, {
            name: '线下工单处理',
            data: [15],
            stack: 'four'
        }, {
            name: '线下工单跟进',
            data: [3],
            stack: 'four'
        }]
    });
//区域图
    $('#container_area').highcharts({
        chart: {
            type: 'line'
        },
        xAxis: {
            categories: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        // yAxis: {
        //     title: {
        //         text: 'Percent'
        //     }
        // },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} 单)<br/>',
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: [{
            name: '退票审核完成量',
            data: [5, 6, 8, 9, 1, 3, 5]
        }, {
            name: '申请单完结量',
            data: [1, 4, 3, 1, 2, 7, 5]
        }, {
            name: '自退票完成量',
            data: [1, 2, 2, 4, 5, 7, 6]
        }, {
            name: '线下工单完成量',
            data: [1, 3, 5, 1, 3, 8, 1]
        }]
    });
  });*/