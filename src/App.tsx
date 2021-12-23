import React  from 'react';
import { Col} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './App.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject,Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
//import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import obj from "./data"
import  Navbar  from './components/header';
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component{
 
render(){
        return (
          <Container fluid>
            <Navbar></Navbar>
            <Row>
              <Col>
                <ScheduleComponent
                  style={{ backgroundColor: "rgb(74, 80, 187);" }}
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


