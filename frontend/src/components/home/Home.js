import React, { Component } from 'react';
import {
  Button, Card, Checkbox, Col, Form, Input, Row, Select,
} from 'antd';
import { connect } from 'react-redux';
import { GetCardAC } from '../../redux/creators';
import '../../app.css';

const { Option } = Select;


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: null,
      m2: null,
      countBath: null,
      countDoor: null,
      countRoom: null,
      changeLayoutPrice: 0,
      designPrice: 0,
      changeLayout: false,
      designItem: false,
      change: true,
    };
  }

  componentDidMount() {
    const { change } = this.state;
    if (change) {
      this.loadMap();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { change } = this.state;
    if (change !== prevState.change && change) {
      this.loadMap();
    }
  }

  loadMap() {
    new this.props.ymaps.SuggestView('suggest', {
      results: 5, offset: [0, 5],
    });
  }

  render() {
    const {
      address, m2, countBath, countDoor, countRoom, change, designItem, designPrice, changeLayout, changeLayoutPrice,
    } = this.state;
    const { roomCard } = this.props;
    return (
      <div className="backImg">
        {change
          ? (
            <Card
              title="Калькулятор ремонта квартиры"
              style={{
                backgroundColor: '#282c34', width: '60%', height: '1%', opacity: '0.90', textAlign: 'center',
              }}
            >
              <Form>
                <Row style={{ margin: 5, padding: 5 }}>
                  <Col offset={2} span={12}>
                    <Form.Item label="Адрес" hasFeedback>
                      <Input
                        type="text"
                        name="address"
                        style={{ width: '100%' }}
                        id="suggest"
                        placeholder="Название улицы"
                        value={address}
                        onChange={(e) => {
                          this.setState({ address: e.target.value });
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={4} offset={3}>
                    <Form.Item label="Площадь м2" hasFeedback>
                      <Input
                        style={{ width: 100 }}
                        type="number"
                        name="city"
                        id="exampleCity"
                        placeholder="м2"
                        onChange={(e) => {
                          this.setState({ m2: e.target.value });
                        }}
                      />
                      {' '}
                    </Form.Item>
                  </Col>
                </Row>
                <Row style={{ margin: 5, padding: 5 }}>
                  <Col offset={2} span={5}>
                    <Form.Item label="Количество комнат" style={{ color: 'white' }}>
                      <Select
                        style={{ width: 120 }}
                        onChange={(e) => {
                          this.setState({ countRoom: e });
                        }}
                      >
                        <Option value="1">1-комнатная</Option>
                        <Option value="2">2-комнатная</Option>
                        <Option value="3">3-комнатная</Option>
                        <Option value="4">4-комнатная</Option>
                        <Option value="5">5-комнатная</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col offset={3} span={5}>
                    <Form.Item label="Количество дверей">
                      <Select
                        style={{ width: 100 }}
                        onChange={(e) => this.setState({ countDoor: e })}
                      >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col offset={2} span={5}>
                    <Form.Item label="Количество санузлов">
                      <Select
                        style={{ width: 100 }}
                        onChange={(e) => this.setState({ countBath: e })}
                      >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row style={{ margin: 5, padding: 5 }}>
                  <Col offset={2} span={13}>
                    <Form.Item>
                      <Checkbox
                        checked={designItem}
                        value={1000}
                        onChange={(e) => {
                          if (!designItem) {
                            this.setState({ designPrice: e.target.value, designItem: !designItem });
                          } else {
                            this.setState({ designPrice: 0, designItem: !designItem });
                          }
                        }}
                      >
                        Дизайнерская мебель
                      </Checkbox>
                      <Checkbox
                        checked={this.state.changeLayout}
                        value={10000}
                        onChange={(e) => {
                          if (!this.state.changeLayout) {
                            this.setState({ changeLayoutPrice: e.target.value, changeLayout: !changeLayout });
                          } else {
                            this.setState({ changeLayoutPrice: 0, changeLayout: !changeLayout });
                          }
                        }}
                      >
                        Перепланировка
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col offset={2} span={2}>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        onClick={() => {
                          const totalPrice = (m2 * 10000) + (countBath * 30000)
                              + (countDoor * 10000) + (countRoom * changeLayoutPrice)
                              + (designPrice * m2);
                          if (address !== null && m2 !== null && countBath
                              !== null && countDoor !== null && countRoom !== null) {
                            this.props.addCardAC(address, m2, countBath, countDoor,
                              countRoom, designPrice, changeLayoutPrice, totalPrice);
                            this.setState({
                              change: !change,
                              address: null,
                              m2: null,
                              countBath: null,
                              countDoor: null,
                              countRoom: null,
                              designPrice: 0,
                              changeLayoutPrice: 0,
                              price: 0,
                            });
                          }
                        }}
                      >
                        Перейти к расчету
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Card>
          ) : (
            <Row>
              <Col>
                <Card title="Калькулятор ремонта квартиры" style={{ backgroundColor: '#282c34', width: '100%' }}>
                  <h2 style={{ color: 'white' }}>
                    {' '}
                    Ваш адрес:
                    {roomCard.address}
                  </h2>
                  <p style={{ color: 'white' }}>
                    {roomCard.countRoom}
                    {' '}
                    -комнатная квартира площадью
                    {' '}
                    {roomCard.m2}
                    {' '}
                    м2
                  </p>
                  <p style={{ color: 'white' }}>
                    Количество санузлов:
                    {roomCard.countBath}
                  </p>
                  <p style={{ color: 'white' }}>
                    Количество дверей:
                    {roomCard.countDoor}
                  </p>

                  <p style={{ color: 'white' }}>
                    Начальная стоимость дизайн проекта:
                    {this.props.roomCard.price}
                  </p>
                  <Button onClick={() => {
                    this.setState({ change: !change });
                  }}
                  >
                    Изменить
                  </Button>
                </Card>
              </Col>
            </Row>
          )}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    roomCard: store.roomCard, ymaps: store.ymaps,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addCardAC: (address, m2, countBath, countDoor, countRoom, designPrice, changeLayoutPrice, price) => {
      dispatch(GetCardAC(address, m2, countBath, countDoor, countRoom, designPrice, changeLayoutPrice, price));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
