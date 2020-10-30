// https://www.youtube.com/watch?v=MRIMT0xPXFI
/* TEST 1 
const root = document.querySelector('#test');
const heading = document.createElement('h1');
heading.textContent = 'learn h1';
root.appendChild(heading); 

ReactDOM.render(root,document.getElementById("test"))*/

// MISE EN PLACE


class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
      if (this.state.liked) {
        return "Tu l'aimes!";
      }
  
      return React.createElement(
        'button',
        { onClick: () => this.setState({ liked: true }) },
        'Cliques si tu aimes cette musique.'
      );
    }
  }
const domContainer1 = document.querySelector('#aime1');
ReactDOM.render(React.createElement(LikeButton), domContainer1);

const domContainer2 = document.querySelector('#aime2');
ReactDOM.render(React.createElement(LikeButton), domContainer2);


//export default App
//ReactDOM.render(<p>yes</p>,document.getElementById("test")); 

// utilisation de reactJS //
//import React from 'react'
//import ReactDOM from 'react-dom'
//import '../css/style.css'

//function CoolComponent({ adjective = 'Cool' }) {
//    return  <div class="col-sm-7">
//                <video width='100%' src="videos/31.mp4" controls ></video>
//            </div>
//            <div class="col-sm-5">
//            <h4>Comment l’intelligence artificielle s’invite dans la musique?</h4>
//            <p>I am AI, un album de musique pop, est quant à lui annoncé pour ce début d’année, 
//                mais son premier single est sorti en août. Ses parties instrumentales ont été 
//                composées automatiquement par le logiciel Amper, en fonction des choix de l’artiste.</p>
//            </div>
//  }

//  ReactDOM.render(
//    <div>
//      <CoolComponent adjective="awesome" />
//    </div>,
//    document.getElementById('test')
//  )


//var p = React.createElement("p",null,"Hello React"); //création de l'élément
//function CoolComponent({ adjective = 'HI' }) {
//    return  <p>{adjective}</p>}
//class classen extends React.Component{
//    render(){
//         return(<p>classe </p>)
//    }
//}

//ReactDOM.render(<p>Haa</p>,document.getElementById("test"));
 



