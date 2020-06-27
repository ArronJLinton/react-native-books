import React, {useEffect, useState} from 'react';
import { View} from 'react-native';

import { WebView } from 'react-native-webview';
import BackButton from '../../components/BackButton';

 export default BookPreview = ({ global, route, navigation }) => {
  const { webReaderLink } = route.params;
  console.log('LINK: ', route.params)
  return (
    <View style={{flex: 1}}> 
      <BackButton />
      <WebView 
        source={{ uri: webReaderLink}} 
        style={{paddingTop: '25%'}}
      />
    </View>
    
  );
}
