/**
 * Discovery Screen
 */
import React, { Component } from 'react';
import { Image, TouchableOpacity, View, FlatList } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Icon, Text, Button, Item, Input} from 'native-base';
import { styles } from '@configs/styles';

export default class AddFriendScreen extends Component{
  static navigationOptions = {
    header: null 
  }

  render(){
    return(
      <Container >
        <Header transparent>
          <Left>            
          </Left>
          <Body>            
            <Title style={styles.title001}> Add Friends  </Title>
          </Body>
          <Right>            
            <TouchableOpacity>
              <Icon name='angle-down' type='FontAwesome'/>
            </TouchableOpacity>            
          </Right>
        </Header>

        <Header searchBar transparent>
          <Item style={styles.searchBar}>
            <Icon name="ios-search" />
            <Input placeholder="Find Friends" />
            <Image source={require('@res/img/icon-bell.png')} style={styles.iconBell}/>            
          </Item>          
        </Header>

        <Content style={styles.content}>  
          <Text style={styles.text001}> Added Me </Text>          
        </Content>
      </Container>
    );
  }
}