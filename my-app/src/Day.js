import React, { Component } from 'react';
import './Day.css';

class Day extends Component {

  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  buildHours() {
    let hours = new Array(24);

    let arr = [];
    for (let i = 0; i < 24; i++) {
      arr.push(false)
    }
    
    let chosen = this.getChosenHours();
    chosen.forEach(i => {
      arr[i] = true;
    });

    return arr;
  }

  getChosenHours() {
    let arr = [];
    let props = this.props.data;
    props.forEach(p => {
      for (;p[0] < p[1]; p[0]++) {
        arr.push(p[0]);
      }
    });
    return arr;
  }

  chooseHour(e) {
    let item = e.target;
    let state = item.getAttribute('data-chosen') === 'true' ? true : false;
    item.setAttribute('data-chosen', !state);
  }

  chooseFirst(e) {
    let item = e.target;
    item.classList.add('start'); 
  }

  chooseLast(e) {
    let item = e.target;
    let parent = item.parentNode;

    let start = parent.querySelector('.start');
    if (start) {

      item.classList.add('start');
      console.dir(parent.children)

      start.setAttribute('data-chosen', 'true');
      item.setAttribute('data-chosen', 'true');
      // start.classList.remove('start');
    }    
    
  }





  render() {
    
    let props = this.props;
    return (
      <div className="day">
        <div className="day__name">
          {props.day}
        </div>
        <a className="day__btn"></a>
        <div className="day__graph" 
          onMouseDown={this.chooseFirst} 
          onMouseUp={this.chooseLast}
        >

          {
            this.buildHours().map((i, y) => {
              return <span data-chosen={i} ></span>
            })
          }

        </div>
      </div>
    )
  }
}

export default Day;
