import React, {Component} from 'react';
import {View} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Accordion,
  Right,
  Icon,
  Body,
  Text,
  Root,
} from 'native-base';

const dataArray = [
  {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];
export default function Base () {
  return (
    <Container>
      <Header>
        <Left>
          <Button>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
      <Content padder>
        <Accordion
          dataArray={dataArray}
          expanded={0}
          icon="add"
          expandedIcon="home"
          iconStyle={{color: 'green'}}
          expandedIconStyle={{color: 'red'}}
          headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
        />

      </Content>

      <Footer>
        <FooterTab>
          <Button full>
            <Text>fooder</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}
