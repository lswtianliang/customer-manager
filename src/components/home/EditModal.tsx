import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input, Modal, message } from '@seeyon/syf-components';
import { FormItemType, Customer } from './types';
import { fetchCustomers, addCustomers, getCustomers, editCustomers } from './redux/actions';
import { useTranslation } from 'react-i18next';
import { translations } from '@locales/i18n';
import './EditModal.less';

const { Item } = Form;
export interface EditModalProps {
  visible?: boolean;
  /**
   * 是否为修改模式
   */
  isEditMode?: boolean;
  /**
   * 修改模式时传入的要修改的数据
   */
  data?: Customer;
  /**
   * 取消编辑的回调
   */
  onClose?: () => void;
  /**
   * 保存成功后的回调
   */
  onSuccess?: () => void;

  addCustomers: (customer: Customer, callback?: any) => void;

  getCustomers: (id: string, callback?: any) => void;

  editCustomers: (customer: Customer, callback?: any) => void;

  fetchCustomers: () => void;
}

function EditModal({
  isEditMode,
  visible,
  data,
  onClose,
  onSuccess,
  addCustomers,
  fetchCustomers,
  getCustomers,
  editCustomers,
}: EditModalProps) {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const formItems: FormItemType[] = [
    {
      label: t(translations.customer.id),
      name: 'id',
    },
    {
      label: t(translations.customer.name),
      name: 'name',
    },
    {
      label: t(translations.customer.phoneNumber),
      name: 'phoneNumber',
    },
    {
      label: t(translations.customer.address),
      name: 'address',
    },
  ];

  useEffect(() => {
    // 清空表单数据
    form.resetFields();

    function getCustomerCallback(res: any) {
      if (!res.status) {
        form.setFieldsValue({ ...res.content });
      }
    }

    if (visible) {
      // 弹窗打开时, 根据传入的编辑数据, 设置表单数据
      form.setFieldsValue({ ...data });
      if (data?.id) {
        // 如果编辑模式, 根据订单id获取商品列表
        getCustomers(data.id, getCustomerCallback);
      }
    }
  }, [form, data, visible, getCustomers]);

  function dealCustomerCallback(res: any) {
    setIsSubmitting(false);
    if (res.status) {
      message.error(res.message);
    } else {
      message.success(t(translations.message.saveSuccess));
      fetchCustomers();
      onSuccess && onSuccess();
    }
  }

  function onFinish(values: Customer) {
    setIsSubmitting(true);
    const payload = isEditMode ? { ...data, ...values } : values;
    const action = isEditMode ? editCustomers : addCustomers;
    action(payload, dealCustomerCallback);
  }

  const modalTitleKey = isEditMode
    ? t(translations.title.updateCustomer)
    : t(translations.title.createCustomer);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputPlaceholder = t(translations.message.inputPlaceholder);

  return (
    <Modal
      forceRender
      visible={visible}
      width={680}
      className="order-edit-modal"
      title={modalTitleKey}
      okText={t(translations.button.confirm)}
      cancelText={t(translations.button.cancel)}
      onOk={form.submit}
      okButtonProps={{ loading: isSubmitting }}
      onCancel={onClose}>
      <Form labelCol={{ span: 5 }} wrapperCol={{ span: 19 }} form={form} onFinish={onFinish}>
        {formItems.map(({ label, name, suffix }, index) => (
          <Item
            key={index}
            label={label}
            name={name}
            rules={[{ required: true, message: `${inputPlaceholder}${label}` }]}>
            <Input placeholder={`${inputPlaceholder}${label}`} suffix={suffix} />
          </Item>
        ))}
      </Form>
    </Modal>
  );
}

function mapDispatchToProps(dispatch: any) {
  return {
    ...bindActionCreators({ addCustomers, fetchCustomers, getCustomers, editCustomers }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(EditModal);
