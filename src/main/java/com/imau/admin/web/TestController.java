package com.imau.admin.web;

import com.imau.admin.dal.DO.AdminDO;
import com.imau.admin.service.member.AdminService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.annotation.Resource;

/**
 * Created by Eric on 2017/6/4.
 */
@Controller
@RequestMapping("/test")
public class TestController {

    @Resource
    AdminService adminService;

    @RequestMapping("/login")
    public String index(){
        return "index";
    }

    @RequestMapping("/adminLogin")
    @ResponseBody
    public AdminDO adminLogin( AdminDO adminDO){
        return adminService.login(adminDO);
    }
}
