import React  from 'react';
import './App.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject,Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
//import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Container, Row, Col,Image } from "react-bootstrap";
import obj from "./data"

export default class App extends React.Component{
 
render(){
        return (
          <Container fluid="md">
            <Row>
              <Col>
                HackYourFuture Lab @ Antwerp Class Calendar
                <Image
                  src="https://github.com/gelilaa/calendar/blob/master/src/assets/logo.png"
                  fluid
                />
              </Col>
              <Col xs={5}>
                <ScheduleComponent
                  readonly={true}
                  eventSettings={{ dataSource: obj }}
                  selectedDate={new Date()}
                >
                  <ViewsDirective>
                    <ViewDirective option="Week" />
                  </ViewsDirective>
                  <Inject services={[Day, Week, WorkWeek, Month]} />
                </ScheduleComponent>
              </Col>
            </Row>
          </Container>
        );
 }
}


