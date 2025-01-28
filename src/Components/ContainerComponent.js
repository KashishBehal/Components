import React from 'react'
import { PresentationalComponent } from './PresentationalComponent';

class ContainerComponent extends React.Component{
    state={msg:"Container Component example"}
    render(){
        return <PresentationalComponent msg={this.state.msg}/>
    }
}
export default ContainerComponent;