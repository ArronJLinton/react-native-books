import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Body, CardItem, Icon, Button, Header, Content, Tab, Tabs  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';
import { withGlobalContext } from '../../utils/GlobalContext';
import { SavedBookCard } from '../../components/BookCard';
import API from '../../utils/API';

 const BookNotes = ({ global, route }) => {
  // const { books } = global;
  const { title, Author, bookCover, googleId } = route.params.data;
  const [book, setBook] = useState({});

  const findBookId = () => {
    API.findById(googleId)
      .then(({data}) => {
        console.log('DATA: ', data.webReaderLink)
        setBook(data.volumeInfo)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    findBookId();
  }, [])
  return (
    <Container>
      {/* <ScrollView contentContainerStyle={{ justifyContent: 'center', alignItems: 'center'}}> */}
        {/* <Content> */}
          {/* <Card style={{flex: 0}}> */}
            <CardItem style={{backgroundColor: 'lightgray', width: '100%', justifyContent: 'center'}}>
              <Image source={{uri: bookCover}} resizeMode='contain' style={{height: 300, width: 200}}/> 
            </CardItem>
  
   
          {/* </Card> */}
        {/* </Content> */}
        {/* <CardItem>
          <Text>Chapter Notes</Text>
        </CardItem> */}
        {/* <Header hasTabs /> */}
        <Tabs>
          <Tab heading="Chapter Notes">
            <AccordionExample />
          </Tab>
          <Tab heading="Description">
            {/* <Tab2 /> */}
            <Content>
              <Text>{book.description}</Text>
            </Content>
          </Tab>
          <Tab heading="BookDetail">
            <Content>
              <Text>{book.title}</Text>
              
              <Text>{book.authors[0]}</Text>
              {/* <Text>{book.description}</Text>
              <Text>{book.description}</Text> */}
              <Text>{book.subtitle}</Text>
              <Text>Pages: {book.pageCount}</Text>
              <Text>{book.categories[0]}</Text>
            </Content>
          </Tab>
        </Tabs>
      {/* </ScrollView> */}
    </Container>
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