import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import importantColumns from '../data/dataColumns';

export default class ColumnListModal extends Component {
  state = { visible: false };
  showModal = () => this.setState({ visible: true });

  handleOk = () => this.setState({ visible: false });

  handleCancel = () => this.setState({ visible: false });

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>Show mandatory column list</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ul>
            <li>Ideally 'S0_INFO.coords:lon' and 'S0_INFO.coords:lat' to display the map</li>
            {Object.keys(importantColumns).map(colKey => (
              <li key={colKey}>
                <em>{colKey}</em>: {importantColumns[colKey].label}
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    );
  }
}
