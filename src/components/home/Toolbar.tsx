import React from 'react';
import { Row, Col, Button, Input } from '@seeyon/syf-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCustomers, setSearchKey } from './redux/actions';
import { StateType } from '@root/common/configStore';
import { useTranslation } from 'react-i18next';
import { translations } from '@locales/i18n';
import './Toolbar.less';

export interface ToolbarProps {
  searchKey: string;
  setSearchKey: (searchKey: string) => void;
  fetchCustomers: () => void;
  openCreateModal: () => void;
}

export function Toolbar({
  searchKey,
  setSearchKey,
  fetchCustomers,
  openCreateModal,
}: ToolbarProps) {
  const { t } = useTranslation();
  return (
    <div className="toolbar-container">
      <Row justify="end" gutter={20}>
        <Col>
          <Input
            placeholder={t(translations.customer.name)}
            value={searchKey}
            onChange={({ target }) => setSearchKey(target.value)}
          />
        </Col>
        <Col>
          <Button type="primary" onClick={fetchCustomers}>
            {t(translations.button.search)}
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={openCreateModal}>
            {t(translations.button.create)}
          </Button>
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps(state: StateType) {
  const { searchKey } = state.home;
  return {
    searchKey,
  };
}

function mapDispatchToProps(dispatch: any) {
  return { ...bindActionCreators({ setSearchKey, fetchCustomers }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
