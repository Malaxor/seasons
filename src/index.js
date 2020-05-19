import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
   state = {
      lat: null,
      err: ''
   };
   componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState(() => ({ lat: position.coords.latitude })),
         err => this.setState(() => ({ err: err.message }))
      );
   }
   render() {
      if(this.state.err && !this.state.lat) {
         return <div>Error: {this.state.err}</div>;
      }   
      if(!this.state.err && this.state.lat) {
         return <div>Latitude: {this.state.lat}</div>;
      }
      return <div>Loading</div>;
   }   
}
ReactDOM.render(<App />, document.querySelector('#root'));