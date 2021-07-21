import React from 'react'
import './App.css'
import CurrentlyReading from './CurrentlyReading.js'
import WantToRead from './WantToRead.js'
import Read from './Read.js'
import { getAll } from './BooksAPI'
import BookSearch from './BookSearch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  state = {
    books:[],
    showSearchPage: false,
  }
  updateSection(){
    getAll().then(
      data => {
        this.setState({books: data})
      }
    )
  }
 
  componentDidMount(){
   
    getAll().then(
      data => {
        this.setState({books: data})
      }
    )
    }
    
    render(){
      
      return (
        <Router forceRefresh={true}>
          <div>
            <Switch>
              <Route path="/search">
                <BookSearch  books={this.state.books}/>
              </Route>
              <Route path="/">
              <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                       <div>
                         
                         <div>
                           <CurrentlyReading books={this.state.books} updateSection={this.updateSection.bind(this)}/>
                           <WantToRead books={this.state.books} updateSection={this.updateSection.bind(this)}/>
                           <Read books={this.state.books} updateSection={this.updateSection.bind(this)}/>
                           </div>
                          </div>
                           <Link to='/search'>
                             <div className="open-search">
                               <button >Add a book</button>
                               </div>
                                </Link>
                                </div>
                                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      )
                              }
}

export default App