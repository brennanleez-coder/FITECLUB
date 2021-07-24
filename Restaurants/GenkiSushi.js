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

export default class GenkiSushi extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modalVisible:false,
        userSelected:[],
        product: {
          name:"Genki Sushi",
          description:"Koh Grill & Sushi Bar needs no introduction especially for Japanese food fans in Singapore. It's fun and cheerful place to enjoy delicious sushi and Japanese style grills at wallet friendly(not cheap) prices. They are most famous for their Shiok Maki",
          created:"",
          images:[
            "https://intohongkong.files.wordpress.com/2019/01/GENKI_EEL.jpg", 
            "http://eatsasmallworld.com/wp-content/uploads/2017/03/17-Mmdj0ZL.jpg",
            "data:image/jpeg;base64,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"
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
              <Text style={styles.shareButtonText}>Ratings: 4.7/5</Text>
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