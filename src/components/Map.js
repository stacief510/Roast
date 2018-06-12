import React, {Component} from 'react';
import Header from './Header';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from  'google-maps-react';
const API_KEY = 'AIzaSyA_BiGhxTrDhBx8bBEJ41Elbjt7n419I_Q';

class  MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
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

  // `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-37.778519,-122.405640&radius=1500&type=coffee&keyword=cruise&key=${API_KEY}`
 
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
          // onTilesLoaded={props.fetchPlaces}
          // ref={props.onMapMounted}
          // onBoundsChanged={props.fetchPlaces}
          style={style}
          initialCenter={{
            lat: 37.778519,
            lng: -122.405640}}
            zoom={12}
            onClick={this.onMapClicked}>

            <Marker onClick={this.onMarkerClick}
                      position={{lat: 37.778519, lng: -122.405640}}  />

            <InfoWindow onClose={this.onInfoWindowClose}
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
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