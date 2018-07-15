import React, { Component } from 'react'

import photo01 from '../assets/photos/1.jpeg'
import photo02 from '../assets/photos/2.jpeg'
import photo03 from '../assets/photos/3.jpeg'
import photo04 from '../assets/photos/4.jpeg'
import photo05 from '../assets/photos/5.jpeg'
import photo06 from '../assets/photos/6.jpeg'
import photo07 from '../assets/photos/7.jpeg'
import photo08 from '../assets/photos/8.jpeg'
import photo09 from '../assets/photos/9.jpeg'
import photo10 from '../assets/photos/10.jpeg'

class Photos extends Component {
  render() {
    return (
      <div className="grid-container">
        <img className="grid-item" src={photo01} alt="" />
        <img className="grid-item" src={photo02} alt="" />
        <img className="grid-item" src={photo03} alt="" />
        <img className="grid-item" src={photo04} alt="" />
        <img className="grid-item" src={photo05} alt="" />
        <img className="grid-item" src={photo06} alt="" />
        <img className="grid-item" src={photo07} alt="" />
        <img className="grid-item" src={photo08} alt="" />
        <img className="grid-item" src={photo09} alt="" />
        <img className="grid-item" src={photo10} alt="" />
      </div>
    )
  }
}

export default Photos
