import { Component } from 'react';
import Particles from 'react-particles-js';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import WelcomeMsg from './components/WelcomeMsg/WelcomeMsg';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import './App.css';

const particlesOptions = {
  "particles": {
      "number": {
          "value": 160,
          "density": {
              "enable": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "speed": 4,
              "size_min": 0.3
          }
      },
      "line_linked": {
          "enable": false
      },
      "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "bubble"
          },
          "onclick": {
              "enable": true,
              "mode": "repulse"
          }
      },
      "modes": {
          "bubble": {
              "distance": 250,
              "duration": 2,
              "size": 0,
              "opacity": 0
          },
          "repulse": {
              "distance": 200,
              "duration": 2
          }
      }
  }
};

const app = new Clarifai.App({
  apiKey: '04f7a756443e4f3e8738f5711a3fd223'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: 'login',
      isLoggedIn: false
    }
  }

  onRouteChange = (route) => {
      this.setState({route: route});
      if(route === 'home')
        this.setState({isLoggedIn: true});
      else
        this.setState({isLoggedIn: false});
    }
  
  calculateFaceBoxSize = (data) => {
    const clarifaiFaceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = image.width;
    const height = image.height;
    this.setState({box : {
      topRow: clarifaiFaceBox.top_row * height,
      leftCol: clarifaiFaceBox.left_col * width,
      bottomRow: height - (clarifaiFaceBox.bottom_row * height),
      rightCol: width - (clarifaiFaceBox.right_col * width)
    }})
  }

  onInputChange= (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
        this.calculateFaceBoxSize(response);
      })
    .catch(err => console.log('Error encountered:', err));
  }

  render(){
    const { imageURL, box, route, isLoggedIn} = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions}/>
        <Navigation isLoggedIn={isLoggedIn} onRouteChange={this.onRouteChange}/>
        <Logo/>
        { 
          route === 'home' ? 
          <div>
            <WelcomeMsg/>
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition imageURL={imageURL} box={box}/>
          </div>
          : ( route === 'login' ? 
              <Login onRouteChange={this.onRouteChange}/>
            : <Registration onRouteChange={this.onRouteChange}/>
          )
        }
        </div>
    );
  }
}

export default App;
