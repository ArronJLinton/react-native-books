import React from 'react';
import { Image, Linking, View, ScrollView} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const BookDetail = ({ route }) => {
  const { title, authors, imageLinks, previewLink, description } = route.params.data;
  
    return (
      <Container>
        <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center'}}>
          {/* <Content> */}
            {/* <Card style={{flex: 0}}> */}
              <CardItem style={{backgroundColor: 'lightgray', width: '100%', justifyContent: 'center'}}>
                <Image source={{uri: imageLinks.smallThumbnail}} resizeMode='contain' style={{height: 300, width: 200}}/> 
             
              </CardItem>
              <CardItem>
                <Body style={{alignItems: 'center'}}>
                  <Text>{title}</Text>
                  <Text>by {authors.join(' ')}</Text>
                </Body>
                {/* <Body> */}
                {/* <View>
                 
               
                */}
                
              {/* </Body> */}
              </CardItem>
                <Text style={{ padding: 5, borderBottomColor: 'gray', borderBottomWidth: 1, textAlign: 'center'}}>Book description</Text>  
              <CardItem>
                              
                <Body>
                  <Text>  
                    {description}
                  </Text>
                </Body> 
              </CardItem>
              <CardItem>
                {/* <Left> */}
                  <Icon name="md-link" />
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Text 
                      style={{color: 'blue'}}
                      onPress={() => Linking.openURL(previewLink)}>
                    Preview
                    </Text>
                  </Button>
                {/* </Left> */}
              </CardItem>
            {/* </Card> */}
          {/* </Content> */}
        </ScrollView>
      </Container>
    );
  }

  export default BookDetail;