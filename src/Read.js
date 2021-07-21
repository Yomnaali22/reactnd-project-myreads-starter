import React, { Component } from 'react'
import Book from './Book'


export default class Read extends Component {
    render() {
        return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map(book => {
                if(book["shelf"] === "read"){
                  return <li key={book['id']}>
                    <Book 
                    
                    title={book.title} authors={book.authors} 
                    thumbnail={book["imageLinks"]["thumbnail"]} 
                    book={book} bookshelf={book.shelf}
                    updateSection={this.props.updateSection}
                    >

                    </Book>
                    </li>
                  }})}
                  </ol>
                  </div>
                  </div>
                  )
                }
              }
