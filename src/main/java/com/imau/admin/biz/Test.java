package com.imau.admin.biz;


import org.apache.commons.io.IOUtils;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;

/**
 * Created by Eric on 2017/6/5.
 */
public class Test {
    public static void main(String[] args) throws Exception {
            json();

    }
    public static void json() throws Exception
    {
        String city = java.net.URLEncoder.encode("北京","utf-8");
        String apiUrl = String.format("http://www.sojson.com/open/api/weather/json.shtml?city=广州",city);
        URL url = new URL(apiUrl);
        URLConnection open = url.openConnection();
        InputStream input = open.getInputStream();
        String result = IOUtils.toString(input,"utf-8");
        System.out.println(result);

    }

}
