/*
 * LY.com Inc.
 * Copyright (c) 2004-2016 All Rights Reserved.
 */

/**
 * Created by hzy24985 on 2016/5/24.
 */
Vue.component('vue-checkbox',{
    template: '<div class="checker" >' +
                '<span :class="spanClass">' +
                    '<input type="checkbox" class="icheck" v-bind:id="id" value="{{ckValue}}" v-model="checker" >' +
                '</span>'+
              '</div>',
    props: ['id', 'checker', 'ckValue'],
    methods:{},
    beforeCompile: function() {

    },
    computed: {
        spanClass: function() {
            if (this.checker instanceof Array && this.checker.indexOf(this.ckValue) >= 0) {
                return "checked";
            }
            if(this.ckValue && this.ckValue == this.checker) {
                return "checked";
            }
            if(!this.ckValue && this.checker==true) {
                return "checked";
            }
            return "";
        }
    }
});