import React,{Component } from 'react';
import {Link } from 'react-router-dom';

class Nav extends Component{
    constructor(props)
    {
        super(props);
        
    }
    render(){
        return(
            <div className="sidebar" data-color="purple" data-background-color="white" data-image="./img/sidebar-1.jpg">    
               <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text logo-normal">
                        Nugen
                    </a>
                </div> 
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li className="nav-item active">
                            <Link to="/admin"className="nav-link">
                                <i className="material-icons">dashboard</i>
                                <p>Attendance</p>
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" >
                                <i className="material-icons">person</i>
                                <p>Attendance</p>
                            </a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" >
                            <i className="material-icons">content_paste</i>
                            <p>Table List</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Nav;