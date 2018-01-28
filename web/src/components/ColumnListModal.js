import React, { Component } from 'react';
import { Modal, Button } from 'antd';

import getComparisonData from '../data/dataColumns';

export default class ColumnListModal extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showModal = () => this.setState({ visible: true });

  handleOk = () => this.setState({ visible: false });

  handleCancel = () => this.setState({ visible: false });

  render() {
    return (
      <span>
        <a onClick={this.showModal}>Show mandatory column list</a>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <ul>
            <li>Ideally 'S0_INFO.coords:lon' and 'S0_INFO.coords:lat' to display the map</li>
            {Object.keys(getComparisonData()).map(colKey => (
              <li key={colKey}>
                <em>{colKey}</em>: {getComparisonData()[colKey].label}
              </li>
            ))}
          </ul>
        </Modal>
      </span>
    );
  }
}
