import React from 'react';
import { Image, Button, View } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const BookCard = ({ data, navigation, saveBook }) => {
  const { title, authors, imageLinks, ratingsCount, averageRating } = data;
  console.log('RATINGS: ', data)
  const stars = [1, 2, 3, 4, 5];
    return (
      <Card>
        <CardItem>
          <Left>
            <TouchableOpacity
              onPress={() => navigation.navigate('Book Detail', { data })}
            >
              <Image source={{uri: imageLinks ? imageLinks.thumbnail: ''}} resizeMode='center' style={{width: 100, height: 150}} />
            </TouchableOpacity>
            <Body>
              <Text>{title}</Text>
              <Text note>{authors ? authors.join('') : ''}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Left >
            <Text>{ratingsCount || 0} Ratings</Text>
            {/* <View > */}
            <Body style={{flexDirection: 'row'}}>
            {stars.map(star =>  <Icon type='FontAwesome' name={star <= averageRating ? 'star' : 'star-o'} style={{ fontSize: 25, color: 'orange'}}/>)}  
            </Body>
          </Left>
          <TouchableOpacity onPress={() => saveBook(data)}>
            <Icon ios='ios-heart' android="md-heart" style={{ fontSize: 25, color: 'orange'}} />
          </TouchableOpacity>
        </CardItem>
      </Card>
    );
  }

export const SavedBookCard = ({ data, navigate }) => {
  const { title, Author, bookCover } = data;
    return (
      <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 1 }}>
        <CardItem cardBody>
          <TouchableOpacity
            onPress={() => navigate('BookNotes')}
          >
            <Image source={{uri: bookCover }} resizeMode='center' style={{width: 100, height: 150}}/> 
          </TouchableOpacity>
            <Body style={{ justifyContent: 'center',}}>
              <Text>{title}</Text>
              <Text note>{Author.fullName}</Text>
            </Body>
          {/* TODO: Pass book id into the navigate function */}

          <TouchableOpacity onPress={() => null}>
            <Icon ios='ios-trash' android="md-delete" style={{ color: 'red'}}/>
          </TouchableOpacity>
        </CardItem>
      </View>
    );
  }
