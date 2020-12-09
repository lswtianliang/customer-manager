import React, { useState } from 'react';
import Header from '@components/home/Header';
import Toolbar from '@components/home/Toolbar';
import CustomerTable from '@components/home/CustomerList';
import EditModal from '@components/home/EditModal';
import { Customer } from './types';

import './Index.less';

export default () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  // 打开新增弹窗, 设置编辑数据为空对象
  function openCreateModal() {
    setIsEditMode(false);
    setEditData({});
    setIsModalVisible(true);
  }

  // 点击某行修改按钮时打开编辑弹窗, 并将该行数据对象浅拷贝一份传给编辑弹窗
  function openEditModal(data: Customer) {
    setIsEditMode(true);
    setEditData({ ...data });
    setIsModalVisible(true);
  }

  // 取消编辑时隐藏Modal
  function hideModal() {
    setIsModalVisible(false);
  }

  // 编辑弹窗保存成功后, 隐藏弹窗并刷新列表
  function hideModalAndFetch() {
    hideModal();
    // may do something else.
  }
  return (
    <>
      <Header />
      <div className="content-container">
        <Toolbar openCreateModal={openCreateModal} />
        <CustomerTable openEditModal={openEditModal} />
      </div>
      <EditModal
        visible={isModalVisible}
        isEditMode={isEditMode}
        onClose={hideModal}
        onSuccess={hideModalAndFetch}
        data={editData as Customer}
      />
    </>
  );
};
