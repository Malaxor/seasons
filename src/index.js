import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends Component {
   state = {
      lat: null,
      err: ''
   };
   // one-time data loading
   componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
         position => this.setState(() => ({ lat: position.coords.latitude })),
         err => this.setState(() => ({ err: err.message }))
      );
   }
   renderContent() {
      if(this.state.err && !this.state.lat) {
         return <div>Error: {this.state.err}</div>;
      }   
      if(!this.state.err && this.state.lat) {
         return <SeasonDisplay lat={this.state.lat} />;
      }
      return <Loader />;
   }
   render() {
      return this.renderContent();
   }   
}
ReactDOM.render(<App />, document.querySelector('#root'));