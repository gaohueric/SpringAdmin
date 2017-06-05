/*
 * LY.com Inc.
 * Copyright (c) 2004-2016 All Rights Reserved.
 */

/**
 * Created by hzy24985 on 2016/4/20.
 */
Vue.component('vue-transfer', {
    template: '<div class="ant-transfer" id="transferTest"><div class="ant-transfer-list" style="width:170px;height:300px;"><div class="ant-transfer-list-header"><span class="ant-transfer-list-header-selected"><span><span v-html="allItems.left.length"></span><span> 条</span></span><span class="ant-transfer-list-header-title">源列表</span></span></div><div class="ant-transfer-list-body ant-transfer-list-body-with-search"><div class="ant-transfer-list-body-search-wrapper"><div><input placeholder="请输入搜索内容" class="ant-transfer-list-search ant-input" v-model="leftSearch"><span class="ant-transfer-list-search-action"><i class="anticon anticon-search"></i></span></div></div><ul class="list-group"><li class="list-group-item" v-for="item in allItems.left | filterBy leftSearch in \'name\'"><label><input type="checkbox" class="ant-checkbox-input" v-model="item.checked">{{item.name}}</label></li></ul></div></div><div class="ant-transfer-operation"><button type="button" class="ant-btn ant-btn-primary ant-btn-sm" style="margin-bottom: 5px;" @click="allToRight"><span><i class=" anticon anticon-right"></i><span>&gt;&gt;&nbsp;</span></span></button><button type="button" class="ant-btn ant-btn-primary ant-btn-sm" style="margin-bottom: 5px;" @click="toRight"><span><i class=" anticon anticon-right"></i><span>&gt;</span></span></button><br/><button type="button" class="ant-btn ant-btn-primary ant-btn-sm" style="margin-bottom: 5px;" @click="toLeft"><span><span>&lt;</span><i class=" anticon anticon-left"></i></span></button><button type="button" class="ant-btn ant-btn-primary ant-btn-sm" style="margin-bottom: 5px;" @click="allToLeft"><span><span>&lt;&lt;&nbsp;</span><i class=" anticon anticon-left"></i></span></button></div><div class="ant-transfer-list" style="width:170px;height:300px;"><div class="ant-transfer-list-header"><span class="ant-transfer-list-header-selected"><span><span v-html="allItems.right.length">0</span><span> 条</span></span><span class="ant-transfer-list-header-title">目的列表</span></span></div><div class="ant-transfer-list-body ant-transfer-list-body-with-search"><div class="ant-transfer-list-body-search-wrapper"><div><input placeholder="请输入搜索内容" class="ant-transfer-list-search ant-input" v-model="rightSearch"><span class="ant-transfer-list-search-action"><i class=" anticon anticon-search"></i></span></div></div><ul class="list-group"><li class="list-group-item" v-for="item in allItems.right | filterBy rightSearch in \'name\'"><label><input type="checkbox" class="ant-checkbox-input" v-model="item.checked">{{item.name}}</label></li></ul></div></div></div>',
    props: {
        data: Array,
        selected: Array,
        leftItems: {
            type:Array,
            default: function (){
                return [];
            }
        },
        rightItems: {
            type:Array,
            default: function (){
                return [];
            }
        },
        initFlag: {
            type: Boolean,
            default: function () {
                return true;
            }
        },
        leftSearch: String,
        rightSearch: String
    },
    computed: {
        allItems: function () {
            if (this.initFlag) {
                for(var i in this.data) {
                    var flag = false;
                    this.data[i].checked="";
                    for(var j in this.selected){
                        if(this.data[i].value==this.selected[j]){

                            this.rightItems.push(this.data[i]);
                            flag = true;
                            break;
                        }
                    }
                    if(!flag) {
                        this.leftItems.push(this.data[i]);
                    }
                }
                this.initFlag = false;
            }


            return {left: this.leftItems, right: this.rightItems};
        }
    },
    methods: {
        toRight: function () {
            var reset = [];
            for(var i = 0; i < this.leftItems.length; i++) {
                if(this.leftItems[i].checked) {
                    var item = this.leftItems[i];
                    item.checked = "";
                    this.rightItems.push(item);
                    this.selected.push(item.value);
                } else {
                    reset.push(this.leftItems[i]);
                }

            }
            this.leftItems = reset;
            return;
        },
        toLeft: function () {
            var reset = [];
            for(var i = 0; i < this.rightItems.length; i++) {
                if(this.rightItems[i].checked) {
                    var item = this.rightItems[i];
                    item.checked = "";
                    this.leftItems.push(item);

                } else {
                    reset.push(this.rightItems[i]);
                }

            }
            this.selected = [];
            for (var i = reset.length - 1; i >= 0; i--) {
                this.selected.push(reset[i].value);
            };

            this.rightItems = reset;
            return;
        },
        allToRight: function () {
            var length = this.leftItems.length;
            for(var i = 0; i < length; i++) {
                var item = this.leftItems.pop();
                item.checked = "";
                this.rightItems.push(item);
                this.selected.push(item.value);
            }
        },
        allToLeft: function () {
            var length = this.rightItems.length;
            for(var i = 0; i < length; i++) {
                var item = this.rightItems.pop();
                item.checked = "";
                this.leftItems.push(item);
            }
            this.selected = [];
        }
    }
});