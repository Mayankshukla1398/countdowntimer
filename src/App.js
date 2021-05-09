import React from 'react';
import Input from './Components/Input';
import Submit from './Components/Submit';
import Timer from './Components/Timer';
import tachyons from 'tachyons';



class App extends React.Component{
  constructor(){
    super();
    this.countDown = 0;
    this.interval = undefined;
    this.date = "";
    this.state ={
      inputVal : '',
      days :0,
      hours : 0,
      minutes:0,
      seconds :0
    }
  }

  dateDisplay=(event)=>{
    this.setState({ inputVal : event.target.value})
  }

  onSubmit=()=>{
    if(this.state.inputVal!=="") {
      this.countDown = new Date(this.state.inputVal).getTime();
      this.date = new Date(this.state.inputVal).toDateString();
      this.setState({inputVal: ""});
      this.mainCalc();
    }
  }
   mainCalc=()=>{
    let now = new Date().getTime();
    let count = this.countDown - now ;
    this.timer(count);
   
   }
   timer = (count) => {
    this.interval = setInterval(() => {
    count -= 1000;
    let days = Math.floor(count / (24*60*60*1000));
    let hours = Math.floor((count % (24*60*60*1000)) / (60*60*1000));
    let minutes = Math.floor((count % (60*60*1000)) / (60*1000));
    let seconds = Math.floor((count % (60*1000)) / (1000));
    this.setState({days: days, hours: hours, minutes: minutes, seconds: seconds},);
  }, 1000);
}

  render(){
    return(
      <div style ={{display :'flex', justifyContent :'center'}} className ="pt6"  >
        <div>
        <h1 className="lightest-blue">Timer Ends On {this.date}</h1>
        <Timer days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
        <Input display={this.dateDisplay} value={this.state.input}/>
        <Submit submit={this.onSubmit}/>
      </div>
      </div>
      
      
    )
  }
}
export default App;