import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends Component {
  state = { lat: null, errorMessage: '' }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }


  renderCOntent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    
    if( !this.state.lat && this.state.errorMessage){
      return <div>Latitude: {this.state.errorMessage}</div>
    } 
    return <Spinner message="Please accept location request"/>
  }
  
  render() {
    return  <div className="border red">{this.renderCOntent()}</div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));