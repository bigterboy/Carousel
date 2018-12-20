import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data/data'


// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {property} = this.state;
    return (
      <div className="App">

<div className="btn">




        <div className="cards-slider">
            <div className="cards-slider-wrapper" style={{'transform': `translateX(-${property.index*(1280)}px)`}}>
              {
                data.properties.map(property=><Card key={property._id} property={property}/>)
              }
            </div>
            <button className="prevBtn"
                    onClick={() => this.nextProperty()}
                    disabled={property.index === data.properties.length-1}
                  >Next</button>
                  <button className="nextBtn"
                    onClick={() => this.prevProperty()}
                    disabled={property.index === 0}
                  >Prev</button>
</div>
        </div>







      </div>
    );
  }
}

export default App;
