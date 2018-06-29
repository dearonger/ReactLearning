const numbers = [1, 2, 3, 4, 5];
const listNumber = numbers.map(numbers =>
  <li>{numbers}</li>
);

ReactDOM.render(
    //You can build a collection of elements within JSX by using {} to collectively render
    <ul>{listNumber}</ul>,
    document.getElementById('root')
);
