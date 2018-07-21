import React from 'react'
import RX from 'reactxp';
import styling from './AppStyles';
// import MapView from 'react-native-maps';
const styles = {
roundButton: RX.Styles.createViewStyle({
 margin: 16,
 borderRadius: 16,
 backgroundColor: '#ff0000ab',
 justifyContent: 'CENTER'
 }),
}
class Location extends RX.Component {
constructor(props) {
    super(props);

    this.state = {
      latitude: null,
                longitude: null,
                formatted_address: null,
                res:null,
                error: null,
currentLocation:null
    };
  }
  componentDidMount() {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        formatted_address: position.coords.formatted_address,
                    
                        error: null,
                       
                    });
                    
                },
                (error) => this.setState({ error: error.message }),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
            );
            var localAPI = "http://googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true"
          }
          _onChangeVar = (e) => {

              this.setState({ joke:'' });
              fetch("http://maps.googleapis.com/maps/api/geocode/json?latlng=12.9067769,80.22776999999999",{headers:{Accept:'text/plain'}}).then((response) => response.json()).then((responseJson) => {
                           currentLocation = responseJson.results[0];                            ;
                          console.log(currentLocation,"currentLocation");
                          this.setState({
                            currentLocation:currentLocation
                          })
                     })
                     state={currentLocation:'Testing'};
          }
            render() {
              return (
                 <RX.View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                 <RX.Link style={ styles.docLink } url={ 'https://maps.google.com/maps?q=%22+19.22+%22,%22+16.22+%22&hl=es' }>
                             Google maps
                         </RX.Link>
                     <RX.Text>Latitude: {this.state.latitude}</RX.Text>
                     <RX.Text>Longitude: {this.state.longitude}</RX.Text>
                     <RX.Text>res: {this.state.currentLocation}</RX.Text>

                     {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                     {/* <RX.MapView.Animated
           region={this.state.region}
           onRegionChange={this.onRegionChange}
        /> */}
        <RX.Button class="btn btn-secondary btn-lg btn-block" onPress={()=> this._onChangeVar() }>Primary</RX.Button>
         <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateSeven }>
      <RX.Text style={ styles.buttonText }>
      REGISTER 
      </RX.Text>
      <RX.Text style={styling.Text }>
                  {this.state.joke}
              </RX.Text>
      </RX.Button>
     </RX.View>
   );
 
  }
}

export default Location;