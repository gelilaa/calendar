import React  from 'react';
import './App.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject,Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
//import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Container, Row, Col } from "react-bootstrap";
import obj from "./data"

export default class App extends React.Component{
  // obj =[{
  // Id: 2,
  //               Subject: 'Workshop-HTML-CSS',
  //               StartTime: new Date(2022, 0, 16, 10, 0),
  //               EndTime: new Date(2022, 0, 16, 12, 0),
  //               IsAllDay: false
  //           },{
  // Id: 3,
  //               Subject: 'date now',
  //               StartTime: new Date(2015, 1, 11, 9, 0),
  //               EndTime: new Date(2015, 1, 11, 10, 0),
  //               IsAllDay: false
  //           }, {
  //               Id: 4,
  //               Subject: 'Vacation',
  //               StartTime: new Date(2018, 1, 13, 9, 0),
  //               EndTime: new Date(2018, 1, 13, 10, 0),
  //               IsAllDay: false
  //             }] 

render(){
        return(
         <Container fluid="md">
        <Row>
          <Col>
            <ScheduleComponent
            readonly={true}
              eventSettings={{ dataSource: obj }}
              selectedDate={new Date()}
              
            >
              <ViewsDirective>
                
                <ViewDirective option="Month" />
              </ViewsDirective>
              <Inject services={[Day, Week, WorkWeek, Month]} />
            </ScheduleComponent>
          </Col>
        </Row>
      </Container>
        );
 }
}


