import React from 'core-libs/react';
import Button from 'design-system/Button'
import Dialog from 'design-system/Dialog'
import ToolTip from "design-system/ToolTip"
import Title from "design-system/Title"
export default class App extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        dialogVisible:false
      }
      this.handleClick = this.handleClick.bind(this);
      this.HanldeSwitchVisible = this.HanldeSwitchVisible.bind(this);
    }
    handleClick(ev){
      console.log(ev);
      this.setState({
        dialogVisible:true
      })
    }
    HanldeSwitchVisible(visible){
      this.setState({
        dialogVisible:visible
      })
    }
    render(){
      
      return (
        <div>
          <Title>
            Webpack Module Federation: A React Case Study
          </Title>
          <p>react、react-dom js files hosted on <strong>lib-app</strong></p>
          <p>
            components hosted on <strong>component-app</strong>
          </p>
          <h4>
            Buttons:
          </h4>
          <Button type="primary"/>
          <Button type="warning"/>
          <h4>
            Dialog:
          </h4>
          <button onClick={this.handleClick}>click me to open Dialog</button>
          <Dialog switchVisible={this.HanldeSwitchVisible} visible={this.state.dialogVisible}/>
          <h4>hover me please!</h4>
          <ToolTip content="hover me please" message="Hello,world!"/>
        </div>
      )
    }
  }