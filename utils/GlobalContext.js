import React, { useState, createContext } from 'react';

const GlobalContext = createContext({});

export const GlobalContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  const saveBook = (obj) => {
    setBooks([...books, obj]);
  }

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

 