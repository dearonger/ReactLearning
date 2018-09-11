function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  function Dialog(props){
      return(
          <FancyBorder color = "blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
          </FancyBorder>
      )
  }
  
  class SignUpDialog extends React.Component{
    constructor(props){
      super(props);
      this.state = {login:''};
      this.handleChange=this.handleChange.bind(this);
      this.handleSignUp=this.handleSignUp.bind(this);
    }
    handleChange(e){
      this.setState({login: e.target.value});
    }
    handleSignUp(){
      alert(`Welcome aboard, ${this.state.login}!`);
    }
    render(){
      return(
        <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?" >
        <div>
          <input type="text" onChange={this.handleChange} value={this.state.login} />
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </div>
        </Dialog>
      );
    }
  }

  ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('root')
  );
