import React , { Component } from 'react';
import Nav from '../../inc/sidenav/Nav';
import Topnav from '../../inc/topnav/Topnav';
import  {Switch,Route } from 'react-router-dom';
import Attendence from '../dashboard/attendence/Attendence';

class Dashboard extends Component{
    render(){
        return(
            <div className="wrapper">
                <Nav/>
                <div className="main-panel">
                    <Topnav/>
                    <div className="content">
                        <div className="container-fluid">
                        <Switch>
                            <Route path="/admin" component={Attendence}/>
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;