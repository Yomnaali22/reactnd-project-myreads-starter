import React, { Component } from 'react'
import { update } from './BooksAPI'



export default class Book extends Component {
  state ={
    currentlyReading: [],
    wantToRead: [],
    read: []
  }
  

  async organizeBooks(target){
    await update(this.props.book, target.target.value).then(
      data => {
        if(this.props.updateSection){
          this.props.updateSection()
        }
        
      } ) }
      
      render() {
        return <div className="book">
          <div className="book-top">
            
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${this.props.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              
              <select onChange={this.organizeBooks.bind(this)} defaultValue={this.props.book["shelf"] ? this.props.book["shelf"] : "none"}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
                </select>
                </div>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div></div>
        
    }
}
