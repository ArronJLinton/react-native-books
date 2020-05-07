import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { withGlobalContext } from '../../utils/GlobalContext';
import { SavedBookCard } from '../../components/BookCard';

 const BookNotes = ({ global }) => {
  // const { books } = global;
  return (
    <View style={styles.container}>
      <Text>Book Notes</Text>
      <Icon name='md-book'/>
    </View>
  );
}

export default withGlobalContext(BookNotes);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
