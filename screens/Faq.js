import React, { Component } from 'react';
 import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, 
    SafeAreaView, Platform, Image } from 'react-native';
 
class QnA extends Component { 
  constructor() {
    super();
    this.state = {
 
      layout_Height: 0
 
    }
  }
 
  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }
 
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }
 
  show_Selected_Category = (item) => {
 
    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);
 
  }
 
  render() {
    return (
      <View style={styles.Panel_Holder}>
 
        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>
 
          <Text style={styles.questionText}>{this.props.item.questions} </Text>
 
          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon.png' }}
            style={styles.iconStyle} />
 
        </TouchableOpacity>
 
        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>
 
          {
            this.props.item.answer.map((item, key) => (
 
              <TouchableOpacity key={key} style={styles.ansText} onPress={this.show_Selected_Category.bind(this, item.name)}>
 
                <Text> {item.name} </Text>
 
                <View style={{ width: '100%', height: 1, backgroundColor: '#000' }} />
 
              </TouchableOpacity>
 
            ))
          }
 
        </View>
 
      </View>
 
    );
  }
}
 
export default class App extends Component {
 
  constructor() {
    super();
 
    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)
 
    }
 
    const array = [
 
    {expanded: false, questions: "What is FITE CLUB", answer: [{ id: 1, name: 'FITE CLUB hopes to expedite the process of finding an eatery of your choice. Many foodies have reached the point where online searches give them repetitive results and eventually choose to eat something that they are not satisfied with. Additionally, they have to make multiple searches in order to get all the answers that they want. So why isn’t there an application that can help provide all the answers in one search without having to waste time doing multiple separate searches.' }]},
      {expanded: false, questions: "How is the ranking determined for the various restaurants?", answer: [{ id: 1, name: 'We use a unique algorithm that determines that best restaurant for you' }]},
      {expanded: false, questions: "How can I make a reservation", answer: [{ id: 1, name: 'This function would be released in later updates' }]},
      {expanded: false, questions: "How can I view/update my personal details for my friends to view", answer: [{ id: 1, name: 'You must first register or log in to your account with us before you can access your profile. My profile is located in the menu on our mobile apps and mobile website and at the very top of our desktop website. This can be done by navigating to the Profile Page -> Edit Details' }]}
    ];

    this.state = { AccordionData: [...array] }
  }
 
  update_Layout = (index) => {
 
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
 
    const array = [...this.state.AccordionData];
 
    array[index]['expanded'] = !array[index]['expanded'];
 
    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }
 
  render() {
    return (
      <SafeAreaView style={styles.MainContainer}>
 
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
        <Text style={styles.Text}>Frequently Asked Questions</Text>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <QnA key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>
 
      </SafeAreaView>
    );
  }
}
 
const styles = StyleSheet.create({
    Text: { fontSize : 20},
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 30 : 0,
  },
 
  iconStyle: {
    width: 40,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    tintColor: '#fff'
  },
 
  ansText: {
    fontSize: 18,
    color: '#000',
    padding: 10 
  },
 
  questionText: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 21,
    padding: 10
  },
 
  category_View: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0091EA'
  },
 
  Btn: {
    padding: 10,
    backgroundColor: '#FF6F00'
  }
 
});
