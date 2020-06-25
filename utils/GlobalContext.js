import React, { useState, createContext, useEffect } from 'react';
import API from './API';

const GlobalContext = createContext({});

export const GlobalContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const saveBook = (data) => {
  const { title, authors, imageLinks } = data;
  const bookObject = {
      title,
      fullName: authors[0],
      bookCover: imageLinks.thumbnail
    }
    API.saveBook(bookObject)
    .then(() => getBooks())
    .catch(err => console.log('ERROR: ', err))
  }
  const getBooks = () => {
    API.getBooks()
      .then(({data}) => setBooks(data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBooks()
  }, [])
  return (
    <GlobalContext.Provider
      value={{
        books: books,
        saveBook: saveBook
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}


// create the consumer as higher order component
export const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {
      context => <ChildComponent {...props} global={context}  />
    }
  </GlobalContext.Consumer>
);

 