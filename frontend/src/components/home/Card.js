import { Table, Button } from 'antd';
import React, {Component} from 'react';
import {connect} from "react-redux";
import image from "../../img/bath/kerama_wall/kerama_belkanto.png";
import ceramic from "../../img/construct_bath/kerama_belkanto_fregat.png";
import floor from "../../img/construct_bath/bravat_opal.png";
import bath from "../../img/bath/bath/cersanit_octavia.png";
import thumb from "../../img/construct_bath/godmorgon_white.png";
import toilet from "../../img/construct_bath/cersanit_parva.png";
import locker from "../../img/bath/locker/locker_white.png";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
const columns = [
  { title: 'Материал', dataIndex: 'name', key: 'name' },
  { title: 'Цена', dataIndex: 'price', key: 'price' },
  { title: 'Ссылка', dataIndex: 'href', key: 'href' },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: `${this.props.priceToilet.title}`,
    price: `${this.props.priceToilet.price}`,
    href: <a onClick={() =>  window.open(`${this.props.priceToilet.href}`)}>URL</a>,
    description: `${this.props.priceToilet.descript}`,
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];


return (
    <Table
      columns={columns}
      expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
      dataSource={data}
    />
  )
}
}

function mapStateToProps(store) {
  return {
    priceToilet: store.priceToilet,
    priceLocker: store.priceLocker,
  };
}


export default connect(mapStateToProps)(Card);