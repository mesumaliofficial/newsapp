import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  render() {
    return (
      <div>News
        <Newsitem/>
      </div>
    )
  }
}

export default News