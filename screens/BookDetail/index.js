import React,{useRef} from 'react';
import { Image, Linking, View, ScrollView, Animated, Dimensions} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

const BookDetail = ({ route, navigation }) => {
  const { title, authors, imageLinks, previewLink, description } = route.params.data.volumeInfo;
  const { webReaderLink } = route.params.data.accessInfo;
  const H_MAX_HEIGHT = 200;
  const H_MIN_HEIGHT = 52;
  const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp"
  });

    return (
      <Container>
        <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center'}}>
          {/* <Content> */}
            {/* <Card style={{flex: 0}}> */}
              
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
                      onPress={() => navigation.navigate('Book Preview', { webReaderLink })}
                      // onPress={() =>  Linking.openURL(webReaderLink)}
                      >
                    Preview
                    </Text>
                  </Button>
                {/* </Left> */}
              </CardItem>
            {/* </Card> */}
          {/* </Content> */}
        </ScrollView>
        <Animated.View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: headerScrollHeight,
          width: "100%",
          overflow: "hidden",
          zIndex: 999,
          // STYLE
          borderBottomColor: "#EFEFF4",
          borderBottomWidth: 2,
          padding: 10,
          backgroundColor: "blue"
        }}
        >
        {/* <CardItem style={{backgroundColor: 'lightgray', width: '100%', justifyContent: 'center'}}> */}
                <Image source={{uri: imageLinks.thumbnail}} style={{flex: 1}} resizeMode='contain'/> 
             
              {/* </CardItem> */}
      </Animated.View>
      </Container>
    );
  }

  export default BookDetail;