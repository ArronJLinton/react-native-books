import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, Animated } from 'react-native';
import { Container, Content, Tab, Tabs } from 'native-base';
import HTML from 'react-native-render-html';
import { withGlobalContext } from '../../utils/GlobalContext';
import API from '../../utils/API';

 const BookNotes = ({ global, route }) => {
  // const { books } = global;
  const { title, Author, bookCover, googleId } = route.params.data;
  const [book, setBook] = useState({});
  const H_MAX_HEIGHT = 150;
  const H_MIN_HEIGHT = 52;
  const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: "clamp"
  });

  const findBookId = () => {
    API.findById(googleId)
      .then(({data}) => {
        setBook(data.volumeInfo)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    findBookId();
  }, [])
  return (
    <View style={styles.container}> 

        <Tabs style={{ paddingTop: H_MAX_HEIGHT }}>
          <Tab heading="Chapter Notes">
          <ScrollView
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
            ])}
            scrollEventThrottle={16}
          >
            <AccordionExample />
            </ScrollView>
          </Tab>
          <Tab heading="Description">            
          <ScrollView
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: scrollOffsetY } } }
            ])}
            scrollEventThrottle={16}
          >
                <HTML html={book.description} imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
          </Tab>
          <Tab heading="Book Detail">
            <Content>
              <Text>{title}</Text>
              <Text>{Author.fullName}</Text>
              <Text>{book.subtitle}</Text>
              <Text>Pages: {book.pageCount}</Text>
              {/* <Text>{book.categories[0]}</Text> */}
            </Content>
          </Tab>
        </Tabs>
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
          backgroundColor: "lightgray"
        }}
        >
        <Image source={{uri: bookCover}} resizeMode='contain' style={{flex: 1}}/> 
      </Animated.View>
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

import { Accordion } from "native-base";
const dataArray = [
  { title: "Intro", content: ["- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi'] },
  { title: "Research", content: ["- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi'] },
  { title: "Third Element", content: ["- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi', "- Lorem ipsum dolor sit amet \n", '- sdfasdasdasdas \n', '- whjebfiwasdifndsijfnjksndkjlasnbdiabnsi'] }
];
const AccordionExample = () => {
    return (
      <Container>
        <Content padder>
          <Accordion dataArray={dataArray} expanded={0}/>
        </Content>
      </Container>
    );
  }