import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Space, Button, Divider, Spin, Popconfirm, message } from '@seeyon/syf-components';
import { bindActionCreators } from 'redux';
import { Customer, PaginationType } from './types';
import { fetchCustomers, setPagination, deleteCustomers } from './redux/actions';
import { useTranslation } from 'react-i18next';
import { translations } from '@locales/i18n';
import './CustomerList.less';

export interface CustomerListProps {
  isLoading: boolean;
  list: Customer[];
  fetchCustomers: () => void;
  deleteCustomers: (id: string, callback?: any) => void;
  pagination: PaginationType;
  setPagination: (pagination: PaginationType) => void;
  openEditModal: (data: Customer) => void;
}

function CustomerList({
  isLoading,
  list,
  fetchCustomers,
  pagination,
  setPagination,
  openEditModal,
  deleteCustomers,
}: CustomerListProps) {
  const { t } = useTranslation();

  useEffect(() => {
    fetchCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 点击某行的删除按钮, 弹出确认弹窗; 确认删除后, 请求删除接口并刷新列表数据
  function deleteCallback(res: any) {
    if (res.status === 0) {
      // 删除成功后弹出提示并刷新列表
      message.success(t(translations.message.deleteSuccess));
      const { current, pageSize, total } = pagination;
      if (current > 1 && (current - 1) * pageSize === total - 1) {
        // 删除后本页无数据, 就请求前一页的数据
        setPagination({ ...pagination, current: current - 1 });
      }
      fetchCustomers();
    } else {
      message.error(res.message);
    }
  }

  const columns = [
    {
      title: t(translations.customer.id),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t(translations.customer.name),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t(translations.customer.phoneNumber),
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: t(translations.customer.address),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t(translations.customer.operate),
      dataIndex: 'operate',
      key: 'operate',
      render: (_: string, data: Customer) => (
        <Space>
          <Button size="small" type="primary" onClick={() => openEditModal(data)}>
            {t(translations.button.update)}
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            title={t(translations.message.deleteConfirm)}
            okText={t(translations.button.confirm)}
            cancelText={t(translations.button.cancel)}
            onConfirm={() => {
              deleteCustomers(data.id, deleteCallback);
            }}>
            <Button size="small" type="primary">
              {t(translations.button.delete)}
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const tablePagination: any = {
    ...pagination,
    onChange: (current: number, pageSize = pagination.pageSize) => {
      setPagination({ ...pagination, current, pageSize });
      fetchCustomers();
    },
  };

  return (
    <Spin spinning={isLoading}>
      <Table rowKey="id" dataSource={list} columns={columns} pagination={tablePagination} />
    </Spin>
  );
}

function mapStateToProps(state: Record<string, any>) {
  const { list, isLoading, pagination } = state.home;
  return {
    list,
    isLoading,
    pagination,
  };
}

function mapDispatchToProps(dispatch: any) {
  return { ...bindActionCreators({ fetchCustomers, deleteCustomers, setPagination }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerList);
