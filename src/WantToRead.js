import React, { Component } from 'react'
import Book from './Book'



export default class WantToRead extends Component {
  render() {
    return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want to Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
        {this.props.books.map(book => {
          if(book["shelf"] === "wantToRead"){
            return <li key={book.id}>
              <Book 
              title={book.title} authors={book.authors} 
              thumbnail={book["imageLinks"]["thumbnail"]} book={book} updateSection={this.props.updateSection}>
              </Book>
              </li>
            }})}
            </ol>
            </div>
            </div>)}}

