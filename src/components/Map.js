import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative'
  }}>
    {text}
  </div>
);

export class Map extends React.Component {
  static defaultProps = {
    zoom: 13,
    name: "San Diego"
  };

  shouldComponentUpdate() {
    return true;
  }

  // GoogleMapReact renders the location of the map being passed from the <Map> as props
  // AnyReactComponent passes down the marker information,which is stored in a function above and rerenders as a result
  render() {
    return (
      <div className="map" id="maps">
        <GoogleMapReact
          center={this.props.beach.location}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.beach.location[0]}
            lng={this.props.beach.location[1]}
            text={
              <img src="https://cdn0.iconfinder.com/data/icons/holidays-icons-rounded/110/Beach-3-512.png" height="40px" alt="beach"></img>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}