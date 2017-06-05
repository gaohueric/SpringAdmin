var index_vm;
$(document).ajaxStart(function(e){
    Metronic.unblockUI();
});
$(document).ready(function() {
    $(document).ajaxStart(function(e) {
        Metronic.unblockUI();
    });
    $(document).ajaxStop(function() {
        Metronic.unblockUI();
    });
    index_vm = new Vue({
        el:'#indexPage',
        data:{
            notices:[],
            notice:{}
        },
        ready:function() {
            this.loadNotices();
        },
        methods: {

            loadNotices:function() {
                var me = this;
                $.ajax({
                    url: __ctx + "/fly/index/notices",
                    success:function(data){
                        $(data).each(function(i,e){
                            var ex=new RegExp("<p","g"); 
                            e.content = e.content.replace(ex, "<div");
                            var eex=new RegExp("</p>","g"); 
                            e.content = e.content.replace(eex, "</div>");
                        });
                        me.notices = data;
                    }
                });
            },
            viewNotice:function(notice) {
                this.notice = notice;
                $("#noticeModal").modal({
                    show : true,
                    backdrop : 'static'
                });
            },
            replaceAll:function(str,reallyDo,replaceWith) { 
                var e=new RegExp(reallyDo,"g"); 
                words = str.replace(e, replaceWith); 
                return words; 
            } 
        }
    });

});