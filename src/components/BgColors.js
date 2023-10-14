import React, { Component } from 'react'
import './ColorPicker.css';

export default class BgColors extends Component {
    constructor(props) {
        super(props);
        this.state = {
          colors: [
            'Red', 'Green', 'Blue', 'Yellow', 'Purple', 'Orange',
            'Pink', 'Brown', 'Maroon', 'darkcyan', 'greenyellow',
          ],
          selectedColor: null,
          displayColors: false,
        };
      }
    
      handleColorClick = (color) => {
        this.setState({ selectedColor: color, displayColors: false });
      }
    
      toggleColorDisplay = () => {
        this.setState((prevState) => ({ displayColors: !prevState.displayColors }));
      }
    
  render() {
    const { selectedColor } = this.state;

    return (
        <div className="color-picker">
        <h2 className="color-picker-heading">Color Picker</h2>
        <div className="color-picker-border">
          <button
            onClick={this.toggleColorDisplay}
            style={{ backgroundColor: selectedColor ? selectedColor.toLowerCase() : 'white' }}
          >
            Pick a color
          </button>
          {this.state.displayColors && (
            <div className="color-list">
              {this.state.colors.map((color, index) => (
                <div
                  key={index}
                  className="color-option"
                  style={{ backgroundColor: color.toLowerCase() }}
                  onClick={() => this.handleColorClick(color)}
                >
                  {color}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}


