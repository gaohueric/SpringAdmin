package com.imau.admin.dal.DAO;

import com.imau.admin.dal.DO.AdminDO;

public interface AdminDAO {
    int deleteByPrimaryKey(String uid);

    int insert(AdminDO record);

    int insertSelective(AdminDO record);

    AdminDO selectByPrimaryKey(String uid);

    int updateByPrimaryKeySelective(AdminDO record);

    int updateByPrimaryKey(AdminDO record);

    AdminDO login(AdminDO adminDO);
}