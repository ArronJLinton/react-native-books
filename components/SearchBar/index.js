import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

const SearchBar = ({ handleBookSearch, handleInputChange }) => {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Input onChangeText={handleInputChange} placeholder="Search" />
        <Icon name="ios-book" />
      </Item>
      <Button transparent onPress={handleBookSearch}>
        <Text>Search</Text>
      </Button>
    </Header>
  )
};

export default SearchBar
