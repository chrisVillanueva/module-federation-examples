import React from 'core-libs/react';
import Button from 'design-system/Button'
import Dialog from 'design-system/Dialog'
import ToolTip from "design-system/ToolTip"
import Title from "design-system/Title"
import "./scaffold.css";
import "./dashboard.css";

export default class Dashboard extends React.Component{
    constructor(props) {
      super(props)
    }


    render(){  
      return (
        <div className="container-fluid content-wrapper">
          Dashboard
          <i className="fa fa-plus-circle" aria-hidden="true"></i>
        </div>
      )
    }
  }