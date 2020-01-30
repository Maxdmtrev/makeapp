import React, {Component} from 'react';
import {  Icon, } from 'antd';
import { Statistic, Row, Col, Button, Descriptions} from 'antd';
import { Upload, message } from 'antd';
import {connect} from 'react-redux';
import InfoCard from "./InfoCard";

const { Dragger } = Upload;

class List extends Component {

  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }

  render() {
    const prop = {
      name: 'file',
      multiple: true,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    };
  return (
      <div>



        <div>
        <InfoCard />
        </div>
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Active Material" value={112} />
            </Col>
            <Col span={12}>
              <Statistic title="Design Count (RUB)" value={1112893} precision={2} />

            </Col>
          </Row>
        </div>
        <div>
          <Dragger {...prop}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p>
          </Dragger>,
        </div>
      </div>
  )
}}

function mapStateToProps(store) {
  return {
    priceToilet: store.priceToilet,
    priceLocker: store.priceLocker,
  };
}


export default connect(mapStateToProps)(List);