import React, {Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Alert,
    ScrollView
} from 'react-native';

export default class DinTaiFung extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modalVisible:false,
        userSelected:[],
        product: {
          name:"Din Tai Fung",
          description:"Koh Grill & Sushi Bar needs no introduction especially for Japanese food fans in Singapore. It's fun and cheerful place to enjoy delicious sushi and Japanese style grills at wallet friendly(not cheap) prices. They are most famous for their Shiok Maki",
          created:"",
          images:[
            "data:image/jpeg;base64,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", 
            "data:image/jpeg;base64,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",
            "https://americanaatbrand.com/wp-content/uploads/2017/05/AAB_DinTaiFung_NewDiningPageImage-2_900x600.jpg"
          ],
          colors:[
            "#00BFFF",
            "#FF1493",
            "#00CED1",
            "#228B22", 
            "#20B2AA",
            "#FF4500",
          ]
        }
      };
    }
  
    __setImageSelected = (image) => {
      this.setState({selectedImage:image});
    }
  
    __renderImages = () => {
      return(
        <View style={styles.smallImagesContainer}>
          {this.state.product.images.map((prop, key) => {
            return (
              <TouchableOpacity key={key} onPress={() => {this.__setImageSelected(prop)}}>
                <Image style={styles.smallImage} source={{uri:prop}}/>
              </TouchableOpacity>
            );
          })}
        </View>
      )
    }
  
    __renderColors = () => {
      return(
        <View style={styles.contentColors}>
          {this.state.product.colors.map((prop, key) => {
            return (
              <TouchableOpacity key={key} style={[styles.btnColor, {backgroundColor:prop}]}></TouchableOpacity> 
            );
          })}
        </View>
      )
    }
  
    render() {
      var mainImage = (this.state.selectedImage) ? this.state.selectedImage: this.state.product.images[0]; 
      return (
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.name}>{this.state.product.name}</Text>
              </View>
              <View style={styles.cardContent}>
                <View style={styles.header}>
                  <View style={styles.mainImageContainer}>
                    <Image style={styles.mainImage} source={{uri:mainImage}}/>
                  </View>
                  {this.__renderImages()}
                </View>
              </View>
            </View>
  
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Crowd Level</Text>
              </View>
              <View style={styles.cardContent}>
              <Text style={styles.shareButtonText}>Ratings: 4/5</Text>
                <Text style={styles.description}>Morning : Low, Afternoon: High, Evening: Medium</Text>
              </View>
            </View>
  
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>Description</Text>
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.description}>{this.state.product.description}</Text>
              </View>
            </View>
  
            <View style={styles.card}>
              <View style={styles.cardContent}>
                <TouchableOpacity style={styles.shareButton} onPress={()=> alert( "KohGrill has a rating of 5 stars!")}>
                  <Text style={styles.shareButtonText}>Ratings: 5/5</Text>  
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      marginTop:20,
      backgroundColor:"#ebf0f7",
    },
    content:{
      marginLeft:10,
      marginRight:10,
      marginTop:20,
    },
    header:{
      flexDirection:'row',
    },
    mainImage:{
      width:200,
      height:200,
    },
    smallImagesContainer:{
      flexDirection:'column',
      marginLeft:30
    },
    smallImage:{
      width:60,
      height:60,
      marginTop:5, 
    },
    btnColor: {
      height:40,
      width:40,
      borderRadius:40,
      marginHorizontal:3
    },
    contentColors:{
      flexDirection:'row', 
    },
    name:{
      fontSize:22,
      color:"#696969",
      fontWeight:'bold',
    },
    price:{
      marginTop:10,
      fontSize:18,
      color:"green",
      fontWeight:'bold'
    },
    description:{
      fontSize:18,
      color:"#696969",
    },
    shareButton: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    shareButtonText:{
      color: "#FFFFFF",
      fontSize:20,
    },
  
    /******** card **************/
    card:{
      shadowColor: '#00000021',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
  
      marginVertical: 5,
      backgroundColor:"white",
      marginHorizontal: 5,
    },
    cardContent: {
      paddingVertical: 12.5,
      paddingHorizontal: 16,
    },
    cardHeader:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 25,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
    },
    cardTitle:{
      color:"#00BFFF"
    }
  }); 