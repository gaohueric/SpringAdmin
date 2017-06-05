package com.imau.admin.service.member.impl;

import com.imau.admin.dal.DAO.AdminDAO;
import com.imau.admin.dal.DO.AdminDO;
import com.imau.admin.service.member.AdminService;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;

/**
 * Created by Eric on 2017/6/4.
 */
@Service("adminService")
public class AdminServiceImpl implements AdminService {

    @Resource
    AdminDAO adminDAO;

    /**
     * 管理员登录
     * @param adminDO
     * @return
     */
    @Override
    public AdminDO login(AdminDO adminDO) {
        AdminDO adminDOs = adminDAO.login(adminDO);
        return adminDOs;
    }
}
