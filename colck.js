class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={date: new Date()}
  }
  componentDidMount(){
    this.timerID=setInterval(
      ()=>this.tick(),1000
    );
  }
  componentWliiUnmount(){
    clearInterval(this.timerID)
  }
  render(){
    return (
      <div>
        <h1>Hello, React!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  tick(){
    this.setState({
      date:new Date()
    });
  }
}

  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );