import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';
import SearchBar from '../../components/SearchBar';
import { BookCard } from '../../components/BookCard';
import { withGlobalContext } from '../../utils/GlobalContext';
import { Icon } from 'native-base';

const Home = ({ navigation, global }) => {
  const [bookState, setBookState] = useState({
    search: '',
    results: [],
    isLoading: false
  });

  const handleBookSearch = () => {  
    setBookState({ ...bookState, results: [], isLoading: true})
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookState.search}`)
      .then(results => {
        setBookState({...bookState, results: results.data.items, isLoading: false})
      })
      .catch(err => console.log(err))
  }

  const handleInputChange = (text) => {
    setBookState({
      ...bookState,
      search: text
    })
  }

  return (
    <View style={styles.container}>
      <SearchBar 
        handleInputChange={handleInputChange}
        handleBookSearch={handleBookSearch}
      />
       { bookState.isLoading 
        ? <View style={styles.subContainer}>
            <ActivityIndicator size='large' />
          </View>
        : bookState.results.length > 0 
        ? null
        :<View style={styles.subContainer}>
          <Text>Search for a Book</Text>
          <Icon name='md-book' />
        </View>
        }

        {bookState.results.length >  0
          ? 
          <ScrollView style={styles.container}>
            {bookState.results.map((book, i) => 
              <BookCard 
                key={i}
                navigation={navigation} 
                data={book} 
                saveBook={global.saveBook} 
                />
              )}
          </ScrollView> 
          : null }
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});


export default withGlobalContext(Home);
