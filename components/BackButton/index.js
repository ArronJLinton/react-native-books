import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
export default BackButton = () => {
    return (
        <Header style={{backgroundColor: 'transparent'}}>
            <Left>
            <Button transparent>
                <Icon name='arrow-back' />
            </Button>
            </Left>
            <Body>
            <Title>Header</Title>
            </Body>
            <Right>
         
            </Right>
        </Header>
    );

}