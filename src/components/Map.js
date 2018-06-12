import React, {Component} from 'react';
import Header from './Header'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from  'google-maps-react';
import axios from 'axios';
const API_KEY = 'AIzaSyA_BiGhxTrDhBx8bBEJ41Elbjt7n419I_Q';
class  MapContainer extends Component {
  state = {
    places:{},
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    currentLocation:{
        lat: null,
        lng: null }
  };

  getCoffeeShops = () => {
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.774929,-122.419416&radius=1500&type=cafe&key=AIzaSyA_BiGhxTrDhBx8bBEJ41Elbjt7n419I_Q')
      .then(res => {
        console.log(res)
        return res;
      })
  }
 
  componentDidMount(){

    if (navigator && navigator.geolocation){
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
        console.log('sf', this.state)

        this.getCoffeeShops();



        //do a search for coffee then render results onto page. 

      });
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

 
  render() {
    const style = {
      width: '100%',
      height: '70%',
      top: '100px',
      left: '5px',
    }

    return (
      <div>
        <Header />
        <div className='map'>
          <Map google={this.props.google}  
          style={style}
          center={
            {lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng}
          }
            zoom={14}
            onClick={this.onMapClicked}
            nearbySearch={{
              location: this.state.currentLocation,
              radius: 5500,
              type:['coffee']}
            }>
        
            <Marker onClick={this.onMarkerClick}
                      position={{lat: this.state.currentLocation.lat, lng: this.state.currentLocation.lng}}
                      />

            <InfoWindow onClose={this.onInfoWindowClose}
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                  <h1> <span role="img" aria-labelledby="sleepy">😴 </span> </h1>
                </div>
            </InfoWindow>
          </Map> 
        </div>  
      </div>    
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)
