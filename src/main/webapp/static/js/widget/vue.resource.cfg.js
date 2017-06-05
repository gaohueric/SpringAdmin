/*
 * LY.com Inc.
 * Copyright (c) 2004-2016 All Rights Reserved.
 */

/**
 * Created by hzy24985 on 2016/5/3.
 */

var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");
Vue.http.options.root = __ctx;
Vue.http.headers.common[header] = token;

Vue.http.interceptors.push({

    request: function (request) {
        return request;
    },

    response: function (response) {
        return response;
    }

});
