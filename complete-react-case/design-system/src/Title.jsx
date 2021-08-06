import React from 'core-libs/react';

export default class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const { children} = this.props;
        return (
            <h1>
                {children}
            </h1>
        )
    }
}