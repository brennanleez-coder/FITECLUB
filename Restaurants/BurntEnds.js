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

export default class BurntEnds extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modalVisible:false,
        userSelected:[],
        product: {
          name:"Burnt Ends",
          description:"One of the hardest tables to book in Singapore and a top-ten entry in Asia's 50 Best. This modern barbecue joint in Chinatown cooks dishes in a custom-made brick oven that heats up to more than 1,700 degrees.",
          created:"",
          images:[
            "data:image/jpeg;base64,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", 
            "https://shopsinsg.com/wp-content/uploads/2019/12/burnt-ends-bbq-restaurant-singapore.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/0a/ff/73/bb/small-plates.jpg"
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
              <Text style={styles.shareButtonText}>Ratings: 4.2/5</Text>
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