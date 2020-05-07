import React, { Component } from 'react';
import { Image, Button } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const BookCard = ({ data, navigation, saveBook }) => {
  const { title, authors, imageLinks, previewLink, description } = data;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: imageLinks.smallThumbnail}} />
            <Body>
              <Text>{title}</Text>
              <Text note>{authors.join('')}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          {/* <Image source={{uri: imageLinks.smallThumbnail }} style={{height: 200, width: 200}}/> */}
          <Button 
            title='Book Detail'
            onPress={() => {
              navigation.navigate('Book Detail', { data });
            }}
            /> 
            <Right>
            <TouchableOpacity onPress={() => saveBook(data)}>
              <Icon ios='ios-flame' android="md-flame" style={{ color: 'orange'}} />
            </TouchableOpacity> 
          </Right>
        </CardItem>
      </Card>
    );
  }

export const SavedBookCard = ({ data, navigate }) => {
  const { title, authors, imageLinks, previewLink, description } = data;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: imageLinks.smallThumbnail}} />
            <Body>
              <Text>{title}</Text>
              <Text note>{authors.join('')}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          {/* <Image source={{uri: imageLinks.smallThumbnail }} style={{height: 200, width: 200}}/> */}
          <Button 
            title='Notes'
            onPress={() => navigate('BookNotes')}
            /> 
            <Right>
            <TouchableOpacity onPress={() => null}>
              <Icon ios='ios-trash' android="md-delete" style={{ color: 'red'}}/>
            </TouchableOpacity>
            
          </Right>
        </CardItem>
      </Card>
    );
  }
