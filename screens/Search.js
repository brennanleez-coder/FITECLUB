import React, {Component} from 'react';
import {
  SafeAreaView,
  View,StyleSheet,
  TouchableOpacity,
  Text,
  FlatList,
  Alert} from 'react-native';
import Constants from 'expo-constants';
import {SearchBar} from 'react-native-elements';

const data=[
  {key:"1",title:"Din Tai Fung"},
  {key:"2",title:"Genki Sushi"},
  {key:"3",title:"Korean BBQ"},
  {key:"4",title:"Alter Ego"},
  {key:"5",title:"Burnt Ends"},
  {key:"6",title:"Soup Restaurant"},
  {key:"7",title:"Bingsu Spoon"},
  
];
class FlatListWithSearch extends Component {
    constructor(props){
        super()
        this.state={
            data:data,
            search:""
        }
    }
  showItem=(props,data)=>{
    Alert.alert(data);
  }

    renderHeader=()=>{
      const { search } = this.state;
        return(
            <SearchBar
            placeholder="Search Restaurants ... "
            lightTheme   
            onChangeText={text=>this.searchAction(text)}
            autoCorrect={false}
            value={search}/>

        )
    }
    searchAction=(text)=>{
        const newData=data.filter(item=>{
            const itemData=`${item.title.toUpperCase()}`;
            const textData=text.toUpperCase();
            return itemData.indexOf(textData) > -1;

        });
        this.setState({
            data:newData,
            search:text
        });
    }
  

    renderItem=(item)=>{
      return(
      <View key={item.key} style={styles.item}>
        <TouchableOpacity onPress={()=>this.showItem(item.title)}>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      </View>
      )
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                data={this.state.data}
                renderItem={({item})=>this.renderItem(item)}
                keyExtractor={item=>item.key}
                ListHeaderComponent={this.renderHeader}
                >
                </FlatList>
            </SafeAreaView>         
            
        )
    }
}
export default FlatListWithSearch;

const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
        marginTop: Constants.statusBarHeight,
        padding:10
      },
      item:{
        padding:10,
        textAlign: 'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#6495ed', 
        marginBottom:10},
})
