import React,{Component} from 'react';
import Erorin from '../erorin';

class Erorb extends Component{
    constructor(props){
        super(props)
        this.state={
            hasEror:false
        }
    }
    componentDidCatch(){
        this.setState({
            hasEror:true
        })
    }
    render(){
        if(this.state.hasEror){
            return <Erorin/>
        }
        return this.props.children
    }
}
export default Erorb;