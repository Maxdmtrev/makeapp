import React, {Component} from 'react';
import {Button, Checkbox, Col, Form, Input, Row, Select} from 'antd';

const {Option} = Select;


class Home extends Component {
  
  render () {
    return (<div style={{backgroundColor: "#282c34" }}  >
      
        <Form ><Row style={{margin:5,padding:5}} >
          <Col span={9}  >
            <Form.Item label="Address">
              <Input type="text" name="address" id="exampleAddress" placeholder="Название улицы"/>
            </Form.Item>
          </Col>
          <Col span={4} offset={1}>
            <Form.Item label="Площадь м2"  hasFeedback>
              <Input style={{width: 170}} type="text" name="city" id="exampleCity" placeholder="м2"/> </Form.Item>
          </Col>
        </Row>
          <Row style={{margin:5,padding:5}}>
            <Col span={5}>
              <Form.Item label="Количество комнат" style={{color: "white"}}>
                <Select style={{width: 170}}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              </Form.Item>
            </Col>
   
            <Col span={5}>
              <Form.Item label={"Количество дверей"}>
                <Select style={{width: 170}}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                  <Option value="3">3</Option>
                  <Option value="4">4</Option>
                  <Option value="5">5</Option>
                </Select>
              </Form.Item>
            </Col>
      
            <Col span={5}>
              <Form.Item label="Количество санузлов">
                <Select style={{width: 170}}>
                  <Option value="1">1</Option>
                  <Option value="2">2</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
            <Row style={{margin:5,padding:5}}>
          <Col span={6}>
              <Form.Item>
                <Checkbox>
                  Демонтаж
                </Checkbox>
                <Checkbox>
                  Вторичка
                </Checkbox>
              </Form.Item>
           </Col>
            <Col span={2}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Перейти к расчету
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
    </div>);
  }
}

export default Home;
