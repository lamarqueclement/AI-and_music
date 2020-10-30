
//var React = require('react');
//var ReactDOM = require('react-dom');

//const name = 'Clarisse Agbegnenou';
const div = document.querySelector('#root54')
//const test1 = <p>Bonjour</p>; // NON VALIDE
const test2 = 'qaaa'; // OK 


ReactDOM.render(
  test2,
  div
);

// https://codepen.io/pen?&editable=true&editors=0010

/*
function CoolComponent({ adjective = 'Cool' }) {
  return <p>Youpi So {adjective} !</p>
}

ReactDOM.render(
  <div>
    <CoolComponent adjective="awesome" />
    <CoolComponent />
  </div>,
  document.getElementById('root54')
)
*/



/*
class test1 extends React.Component{
  render(){
    return(
      <p>page</p>
    )
  }
}

ReactDOM.render(
  <test1 />,
  document.getElementById('root54')
);
*/





