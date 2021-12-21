import React  from 'react';
import './App.css';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Inject,Agenda, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
//import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

export default class App extends React.Component{
  obj =[{
  Id: 3,
                Subject: 'Testing',
                StartTime: new Date(2018, 1, 11, 9, 0),
                EndTime: new Date(2018, 1, 11, 10, 0),
                IsAllDay: false
            }, {
                Id: 4,
                Subject: 'Vacation',
                StartTime: new Date(2018, 1, 13, 9, 0),
                EndTime: new Date(2018, 1, 13, 10, 0),
                IsAllDay: false
              }]

render(){
        return(
            
            <div>
       <div>
                <ScheduleComponent width='100%' height='550px' eventSettings={{dataSource:this.obj}} selectedDate={new Date(2018, 1, 15)}>
           <ViewsDirective>
                <ViewDirective option='Day'/>
               <ViewDirective option='Week'/>
              <ViewDirective option='WorkWeek'/>
                             <ViewDirective option='Month'/>
            </ViewsDirective>
            <Inject services={[Day, Week, WorkWeek, Month]}/>
       </ScheduleComponent>
   </div>
 </div>
        );
 }
}


