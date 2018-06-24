function formateDate(date){
  return date.toLocaleDateString();
}
class Avatar extends React.Component{
  render(){
    return(
      <img className="Avatar"
      src={this.props.user.avatarUrl}
      alt={this.props.user.name}/>
      );
  }
}
class UserInfo extends React.Component{
  render(){
    return(
    <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">
          {this.props.user.name}
        </div>
    </div>
  );
  }
}
function Comment(props){
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formateDate(props.date)}
      </div>
    </div>
  );
}
const comment = {
  date: new Date(),
  text: 'Hello , React!',
  author:{
    name:'dearonger',
    avatarUrl:'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author} />,
  document.getElementById('root')
);