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

export default class ThreeMealsADay extends Component {

    constructor(props) {
      super(props);
      this.state = {
        modalVisible:false,
        userSelected:[],
        product: {
          name:"ThreeMealsADay",
          description:"Three Meals A Day is a popular Korean reality cooking show, and also the name of an under-the-radar Korean restaurant at Chun Tin Road (5 minutes walk from Beauty World). The Korean family restaurant may not have much social media presence, but was almost full-house during a weekday dinner.",
          created:"",
          images:[
            "https://burpple-1.imgix.net/foods/638b8913d5d119f8e8a1869789_original.?w=400&h=400&fit=crop&q=80&auto=format", 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuou608s384eVYIomILpsQc9rvKhYTD620Tg&usqp=CAU",
            "https://burpple-3.imgix.net/foods/447f8d328f709f6cb841336439_original.?w=645&dpr=1&fit=crop&q=80&auto=format"
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
              <Text style={styles.shareButtonText}>Ratings: 4.8/5</Text>
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