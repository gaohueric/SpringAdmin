package com.imau.admin.service;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

/**
* Created by 3010493848@qq.com on 2017-06-04 16:18:52.
*/
@Service
public class CacheService {

/***
* 测试缓存是否生效
* @return
*/
@Cacheable(value = "myCache",key = "#key")
public String testCache(String key){
System.out.println("第一次调用会会打印此语句-------");
return "cache test success !!!";
}
}