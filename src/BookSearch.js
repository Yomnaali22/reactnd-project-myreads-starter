import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import Book from './Book.js'


export default class BookSearch extends Component {
    state = {
        books: [], 
        count: 0,
        userInput: "",
        bookwithshelfs: []
    }
    
    userInput = (input) => {
        this.setState({userInput: input.target.value})
        clearTimeout(this.state)
        this.setState({
             count: setTimeout(() => {
                  this.apiRequest()}, 500 )
                }
                )} 
                async apiRequest() {
                    await search(this.state.userInput)
                    .then(data => {
                        if(data["books"] !== undefined){
                            if(data["books"]["error"] === undefined) {
                                let arr = []

                                for (let index = 0; index < this.props["books"].length; index++) {
                                    for (let counter = 0; counter < data["books"].length; counter++) {
                                    
                                        if (data["books"][counter]["id"] == this.props["books"][index]["id"]) {
                                           
                                            arr.push(this.props["books"][index])
                                            const target = data["books"].indexOf(data["books"][counter]);
                                            if (target > -1) {
                                                      data["books"].splice(target, 1);
                                                              }


                            
                                        }
                                        
                                        
                                    }
                                    
                                }
                                arr = arr.concat(data["books"]); 
                                this.setState({books: arr})
                            }
                            else {
                                
                                this.setState({books: []})
                            }
                    }
                    else {
                        this.setState({books: []})
                    } 
                })
            }  
                                  render() {
                                  
                                      return (
                                        <div className="search-books">
                                            <div className="search-books-bar">
                                      <div> 
                                          <div>
                                              <input type="text" placeholder="Search by title or author"onChange={this.userInput}/>
                                              </div>
                                              <Link to="/" >
                                                  <button className="close-search" >Close</button>
                                                  </Link>
                                                  <div className="search-books-results">
                                                      <ol className="books-grid">
                                                          {
                                                          this.state.books.map(book=> {
                                                              return <Book 
                                                            
                                                              title={book["title"] ? book["title"] : "No title found"} authors={book["authors"] ? book["authors"]:"No author info"} 
                                                              book={book} thumbnail={book["imageLinks"]? book["imageLinks"]["thumbnail"]:"No image found"} 
                                                              key={book['id']}>
                                                                  </Book>
                                                            })}
                                                             </ol>
                                                             </div>
                                                             </div>
                                                             </div>
                                                             </div>
                )}}
