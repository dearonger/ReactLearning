function NumberList(props){
  const numbers = props.numbers;
  const listItem = numbers.map(number =>
     <li key={number.toString()}>
       {number}
     </li>
  );
  return(
    <ul>{listItem}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList  numbers={numbers}/>,
    document.getElementById('root')
);
