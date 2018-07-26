import React , { Component } from 'react';
import Nav from '../../inc/sidenav/Nav';
import Topnav from '../../inc/topnav/Topnav';
import  {Switch,Route } from 'react-router-dom';
import Attendence from '../dashboard/attendence/Attendence';
import Assignment from '../dashboard/assignment/Assignment';


class Dashboard extends Component{
    render(){
        return(
            <div className="wrapper">
                <Nav/>
                <div className="main-panel">
                    <Topnav/>
                    <div className="content">
                    Put /assignment in url for assignment component
                        <div className="container-fluid">
                        <Switch>
                            {/* <Route path="/attandance" component={Attendence}/> */}
                            <Route path="/assignment" component={Assignment}/>

                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;