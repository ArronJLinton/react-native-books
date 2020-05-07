import React from 'react';
import { Image, Linking } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const BookDetail = ({ route }) => {
  const { title, authors, imageLinks, previewLink, description } = route.params.data;
  
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text>{title}</Text>
                  <Text>~ {authors.join(' ')}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: imageLinks.smallThumbnail}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  {description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Icon name="md-link" />
                <Button transparent textStyle={{color: '#87838B'}}>
                <Text 
                  style={{color: 'blue'}}
                  onPress={() => Linking.openURL(previewLink)}>
                Preview
                </Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }

  export default BookDetail;