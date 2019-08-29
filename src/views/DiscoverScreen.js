/**
 * Discovery Screen
 */
import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Icon, Text, Button} from 'native-base';
import { styles } from '@configs/styles';
import {  } from 'react-native-gesture-handler';

export default class DiscoverScreen extends Component{
  static navigationOptions = {
    header: null 
  }

  render(){
    return(
      <Container style={styles.container}>
        <Header transparent>
          <Left>
          <TouchableOpacity>
              <Image source={require('@res/img/user-circle.png')}/>
            </TouchableOpacity>
          </Left>
          <Body>            
            <Title style={styles.title}><Icon style={styles.iconScope} name='search' type='FontAwesome5'/> Discover</Title>
          </Body>
          <Right>            
            <TouchableOpacity>
              <Image source={require('@res/img/user-plus.png')} style={styles.icon001}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={require('@res/img/md-more.png')}  style={styles.icon001}/>
            </TouchableOpacity>
          </Right>
        </Header>
        <Content style={styles.content}>  
          <Text style={styles.text001}> Friends </Text>
          <Text style={styles.text002}> Stories from your friends will appear here. </Text>
          <View style={styles.buttonLayer001}>
            <Button style={styles.button001} rounded success><Text style={styles.text003}> Add Friends </Text></Button>
          </View>

          <View style={styles.quickAddLayer001}>            
            <Text style={styles.text001}> Quick Add </Text>                        
            <TouchableOpacity>            
              <Text style={styles.text004}>Hide</Text>            
            </TouchableOpacity>
          </View>

          <View style={styles.forYouLayer001}>
            <Text style={styles.text001}> For You </Text>                                                
          </View>
        </Content>
      </Container>
    );
  }
}