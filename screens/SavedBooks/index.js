import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { withGlobalContext } from '../../utils/GlobalContext';
import { SavedBookCard } from '../../components/BookCard';

 const SavedBooks = ({ global, navigation }) => {
  const { books } = global;
  return (
    <View style={styles.container}>
      {books.length > 0
      ?<ScrollView>
        {books.map((book, i) => 
          <SavedBookCard 
            key={i} 
            data={book}
            navigate={navigation.navigate} 
            />)}
      </ScrollView>
      : 
      <View style={styles.noSavedBooks}>
        <Text>No Saved Books</Text>
        <Icon name='md-book'/>
      </View>
      }
    </View>
  );
}

export default withGlobalContext(SavedBooks);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noSavedBooks: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
