import React, {Component} from 'react';
import {  Icon, } from 'antd';
import { Statistic, Row, Col, Button, Descriptions} from 'antd';
import { Upload, message } from 'antd';
import {connect} from 'react-redux';
import Card from "./Card";

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
          {/*  Если есть данные из стора тогда рендер карты : div спиннера или "Загрузите данные" => redirect '/home' */}
          <Descriptions title="User Info" layout="vertical">
            <Descriptions.Item label="UserName">Anton</Descriptions.Item>
            <Descriptions.Item label="Telephone">+7 (925) 111-11-11</Descriptions.Item>
            <Descriptions.Item label="Live">Россия, Москва</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
             Россия, Москва, Вавилова, д.1
            </Descriptions.Item>
            <Descriptions.Item label="Remark">P.S.</Descriptions.Item>
          </Descriptions>
        </div>
        <Card />
        {/*{this.props ?*/}
        {/*/!*<div className={'table'}>*!/*/}

        {/*/!*  <Row gutter={18}>*!/*/}

        {/*/!*    <div>*!/*/}

        {/*/!*      /!*<h1>{this.props.priceToilet.title}</h1>*!/*!/*/}
        {/*/!*      /!*<h1>{this.props.priceToilet.price}</h1>*!/*!/*/}
        {/*/!*      <Button onClick={() =>  window.open(`${this.props.priceToilet.href}`)} ><h3>1. {this.props.priceToilet.title} / Цена: {this.props.priceToilet.price}</h3></Button>*!/*/}
        {/*/!*    </div>*!/*/}

        {/*/!*</Row>*!/*/}
        {/*/!*  <Row gutter={16}>*!/*/}

        {/*/!*    <div>*!/*/}
        {/*/!*      /!*<h1>{this.props.priceToilet.price}</h1>*!/*!/*/}
        {/*/!*      <Button onClick={() =>  window.open(`${this.props.priceLocker.href}`)} ><h3>2. {this.props.priceLocker.title} / Цена: {this.props.priceLocker.price}</h3></Button>*!/*/}
        {/*/!*      /!*</Col>*!/*!/*/}
        {/*/!*    </div>*!/*/}

        {/*/!*  </Row>*!/*/}

        {/*/!*</div>*!/*/}
        {/*    : '...Load'}*/}
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