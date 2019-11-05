import React,{Component} from 'react';
import './home.scss';
import Hoc from '../../hoc';
import Spiner from '../../spiner';
import {getDataforbase,deletefBase} from '../../../actions';
import {connect} from 'react-redux';
import ItemList from '../applelist';
import Chartlogo from './img/chartlogo.png';
import Apple from './img/apple.png';
import Good from './img/google.png';
import Facebook from './img/facebook-logo.png';
import Amazon from './img/amazon.png';
import IBM from './img/ibm.png';
import Next from './img/next.png';
import Parrow from './img/left-arrow.png';
import Narrow from './img/right-arrow.png'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            m:0,
            n:10,
            valuer:'1m'
        }
    }
    componentDidMount(){
    
        document.getElementById('clickerautp').click()
        // const {getDataforbase,history,mainServise} = this.props
    }
    async nextbutton(){
    if(this.state.n>=this.props.datas.length){
      return 0
    }    

   await this.setState({
        m:this.state.m+10,
        n:this.state.n+10
    }) 

    }h
   async prevbutton(){
    if(this.state.m<=0){
        return 0
      }  
      await this.setState({
           m:this.state.m-10,
           n:this.state.n-10
       }) 
    }
    chanerlogo(name,e){
        e.preventDefault()
        let charts = document.querySelectorAll('.navigation ul li a')
        for(let i =0; i<charts.length; i++){
            charts[i].style.color = '#fff';
            charts[i].parentNode.querySelector('span').innerHTML =''
        }
        document.getElementById('headingone').innerHTML = `NASDAQ: ${name.toUpperCase()}`
        let img1 = document.createElement('img')
        img1.src = `${Next}`
        e.target.parentNode.querySelector('span').appendChild(img1)
        e.target.style.color = '#287AFF'
        console.log()
        this.props.mainServise.getData(name,this.state.valuer)
        .then(response=>response.json())
        .then(data=>{
            let newArray = []
            for(let i=data.reverse().length-1; i>=0; i--){
                data[i].id = i
                newArray.push(data[i])
            }
            this.props.getDataforbase(newArray.reverse())
        })
    }   
  async changeDate(e){
      await this.setState({
           valuer:e.target.value
       })
    
       this.props.mainServise.getData( document.getElementById('headingone').innerHTML.slice(8),this.state.valuer)
    .then(response=>response.json())
    .then(data=>{
        let newArray = []
        for(let i=data.reverse().length-1; i>=0; i--){
            data[i].id = i
            newArray.push(data[i])
        }
        this.props.getDataforbase(newArray.reverse())
    })
    }
    render(){
        
        return(
            <React.Fragment>
                <div className="main_content">
                    <header className="header_container main_content__header_container">
                        <div className="header_container__logo">
                            <a href="">Chart<wbr/>Stock <img src={Chartlogo} alt=""/></a>
                        </div>
                        <nav className="navigation header_container__navigation">
                            <ul>
                                <li><img width="14" height="14" src={Apple} alt=""/><a id="clickerautp" href="#"onClick={(e)=>{this.chanerlogo('aapl',e)}}>Apple</a><span className="arrownext"></span></li>
                                <li><img width="14" height="14" src={Good} alt=""/><a href=""onClick={(e)=>{this.chanerlogo('GOOGL',e)}}>Google</a> <span className="arrownext"></span></li>
                                <li><img width="14" height="14" src={Facebook} alt=""/><a href="" onClick={(e)=>{this.chanerlogo('FB',e)}}>Facebook</a> <span className="arrownext"></span></li>
                                <li><img width="14" height="14" src={Amazon} alt=""/><a href="" onClick={(e)=>{this.chanerlogo('AMZN',e)}}>Amazon</a> <span className="arrownext"></span></li>
                                <li><img width="14" height="14" src={IBM} alt=""/><a href="" onClick={(e)=>{this.chanerlogo('IBM',e)}}>IBM</a> <span className="arrownext"></span ></li>
                            </ul>
                        </nav>
                        <nav className="navigation_bottom header_container__navigation_bottom">
                            <ul>
                                <li><a href="">API Docs</a></li>
                                <li><a href="">Upgrate Plan</a></li>
                            </ul>
                        </nav>
                    </header>
                    <main className="main_container main_content__main_container">
                        <div className="main_content_info">
                            <div className="main_content_info_top">
                            <h1 ><strong id="headingone"></strong></h1>
                            <select onChange={(e)=>{this.changeDate(e)}}  value={this.props.valuer}>
                                <option value="1m">1 Month</option>
                                <option value="3m">3 Month</option>
                                <option value="6m">6 Month</option>
                                <option value="1y">1 Year</option>
                                <option value="2y">2 Years</option>
                                <option value="5y">5 Years</option>
                            </select>
                            </div>
                            <div className="main_content_info_central">
                            <div><button onClick={()=>{this.prevbutton()}}> <img src={Parrow} width = '50' alt=""/> </button></div>
                              <ItemList itemss = {this.props.datas.slice(this.state.m,this.state.n)} numbers  ={this.props.numberlist}/> 
                             <div><button onClick={()=>{this.nextbutton()}}><img src={Narrow} width = '50' alt=""/> </button></div>
                             </div>
                        </div>
                    </main>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = ({datas,numberlist})=>{
  return {datas,numberlist}
}
const mapDispatchToProps = {
    getDataforbase,deletefBase
}
export default Hoc()(connect(mapStateToProps,mapDispatchToProps)(Home));    