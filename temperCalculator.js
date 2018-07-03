function BoilingVerdict(props){
    if(props.elemt >= 100){
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
  
  class Calculator extends React.Component{
    constructor(props){
      super(props);
      this.state={temperature: ''};
      this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
      this.setState({temperature: event.target.value});
    }
    
    render(){
      const temperature=this.state.temperature;
      return(
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input 
            type='text' 
            onChange={this.handleChange} 
            value={temperature} />
          <BoilingVerdict elemt={parseFloat(temperature)} />
        </fieldset>
      );
    }
  }
  
  ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
  );
  