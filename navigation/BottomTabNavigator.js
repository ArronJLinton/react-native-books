import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Home';
import SavedBooksScreen from '../screens/SavedBooks';
import BookDetail from '../screens/BookDetail';
import BookNotesScreen from '../screens/BookNotes';
import BookPreviewScreen from '../screens/BookPreview';

const BookStack = createStackNavigator();
const BookStackScreen = () => (
  <BookStack.Navigator>
    <BookStack.Screen
      name="Search"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <BookStack.Screen
      name="Book Detail"
      component={BookDetail}
      // options={{
      //   headerShown: false,
      // }}
    />
    <BookStack.Screen
      name='Book Preview'
      component={BookPreviewScreen}
      options={{
        headerShown: false,
      }}
    />
  </BookStack.Navigator>
);


const SavedBooksStackScreen = () => (
  <BookStack.Navigator>
    <BookStack.Screen
      name="My Books"
      component={SavedBooksScreen}
    />
    <BookStack.Screen
      name='BookNotes'
      component={BookNotesScreen}
    />
  </BookStack.Navigator>
); 

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={BookStackScreen}
        options={{
          title: 'Book Search',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={SavedBooksStackScreen}
        options={{
          title: 'My Books',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}