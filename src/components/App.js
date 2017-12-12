import React, { Component } from 'react';
import { Map } from './Map.js';
import '../index.css';

const beaches = require("../data.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeach: {
        location: [32.715736, -117.161087],
      }
    }
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent(e) {
    console.log(typeof e.target.value, e.target.value);
    this.setState({
      selectedBeach: {
        location: e.target.value.split(",").map(function (coord) {
          return parseFloat(coord);
        })
      }
    });
  }

  render() {
    return (
      <div className="App">
        <SecondHeader />
        <PrimaryContent />
        {/* <Beaches /> */}
        {
          this.state.selectedBeach &&
          <Map beach={this.state.selectedBeach} />
        }
        <select className="beach-select" onChange={this.handleClickEvent} placeholder="Please select a beach...">
          {(beaches.map(beach =>
            <SecondaryContent
              key={beach.name}
              location={beach.location}
              name={beach.name}
            />))}
        </select>
        <Footer />
      </div>
    );
  }
}

class SecondHeader extends Component {
  render() {
    return (
      <div>
        <header id="top" className="header">
          <span className="title">Beach & Surf Spot Finder</span>
          <h1>San Diego, California</h1>
        </header>
      </div>
    )
  }
}

class PrimaryContent extends Component {
  render() {
    return (
      <div>
        <div className="primary-content t-border">
          <p className="intro">
            San Diego's beaches are some of the best in the world. Idealic weather, plenty of attractions, and clean, warm waters make
            for the perfect mix! And the best part is that we've done the homework for you.. Simply choose from our curated
            list of beaches and surf spots in San Diego to see the location on a map.
          </p>
          <a className="callout" href="#maps">Explore Beaches</a>
        </div>
      </div>
    )
  }
}

// class Beaches extends Component {
//   render() {
//     return (
//       <div>
//         <div className="beaches" id="middle">
//           <div >
//             <h3 id="beach-text">Let's have fun</h3>
//           </div>
//         </div>
//       </div >
//     )
//   }
// }

class SecondaryContent extends Component {
  render() {
    return (
      <option value={this.props.location} className="callout-2" href="#maps">
        {this.props.name}
      </option>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="main-footer">
        <p>Christian Gallego | 2017</p>
      </footer>
    )
  }
}

export default App;
