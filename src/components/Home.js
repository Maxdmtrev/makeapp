import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Home = (props) => {
    return (
        <Form>
            <Row form>
                <Col >
                    <FormGroup>
                        <Label for="exampleAddress" sm={8}>Адрес</Label>
                        <Input type="text" name="address" id="exampleAddress" placeholder="Название улицы"/>
                    </FormGroup>
                </Col>
                <Col sm={2}>
                    <FormGroup>
                        <Label for="exampleCity" md={5}>м2</Label>
                        <Input type="text" name="city" id="exampleCity"/>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup row>
                <Label for="exampleSelect" sm={10}>Количество комнат</Label>
                <Col sm={2}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={10}>Количество дверей</Label>
                <Col sm={2}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleSelect" sm={10}>Количество санузлов</Label>
                <Col sm={2}>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck"/>
                <Label for="exampleCheck" check>Демонтаж</Label><br/>
                <Input type="checkbox" name="check" id="exampleCheck"/>
                <Label for="exampleCheck" check>Вторичка</Label>
            </FormGroup>
            <Button>Перейти к расчету</Button>
        </Form>
    );
}

export default Home;