import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';

const {width} = Dimensions.get("window");
const height = width * 0.6;
const images = [
    'https://media.timeout.com/images/105447600/image.jpg',
    'https://lh6.googleusercontent.com/proxy/Y-0qywSXUL5Eb-mtTK4kmlhv5KQ7jwxA0QRPFnm7xJOk99tCu-_QBB3EJ_FsoFrWv6jh8fGGgeAiZib_ZJScBZpwbQrBJISmIsQIceyD543XOw_p=w1200-h630-p-k-no-nu',
    'https://asiaexchange.org/wp-content/uploads/2020/04/Korean-Barbecue-Getting-a-Taste-of-Seoul-1.jpg',
    'https://jenitadarmento.files.wordpress.com/2018/04/36736b2d-3261-4af6-be75-4eb10755795d.jpg',
    'https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna-800x530.png',
    'https://www.expatica.com/app/uploads/sites/5/2020/03/Boeuf-bourguignon-1920x1080.jpg'
]

const vertImages = [
    'https://media.timeout.com/images/103512626/630/472/image.jpg',
    'https://tnimage.s3.hicloud.net.tw/photos/2020/06/11/1591848891-5ee1afbb6502c.jpg',
    'https://bukitpanjanginsg.com/wp-content/uploads/2020/12/Genki-Sushi-@Hillion-Mall.png',
    'https://1.bp.blogspot.com/-egfRzDjSmU0/XQJpCDpsOPI/AAAAAAAAZuo/xYWlw_xYm3M_B4RE2u-flfum_SsWiDGmQCLcBGAs/s1600/20190320_140754_HDR.jpg',
    'http://www.xinyeapparel.com/wp-content/uploads/2020/01/TMBH-300x200.jpg',
    'https://images.squarespace-cdn.com/content/v1/59e62172dc2b4a72ea63dd39/1611986843309-5WYI3JMD3TSZWSLJKM1C/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/DSC_0734.jpg',
    'https://cdn.techinasia.com/data/images/o1JQRyB2UZY9paYhBqIlZ9gJXRrQp7QpqFQAiIHU.jpeg',
    'data:image/png;base64,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',

] 
class Slider extends React.Component {
    state = {
        active: 0
    }
    change = ({nativeEvent }) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if(slide !== this.state.active) {
            this.setState({active: slide})
        }
    }
    render() {
        return (
            <ScrollView>
                <SafeAreaView style={style.container}>
                <Text style={style.Text}>TRENDING TODAY...</Text>
                
                <ScrollView 
                pagingEnabled 
                horizontal 
                onScroll = {this.change}
                showsHorizontalScrollIndicator={false}
                style = {style.scroll}>
                    {
                        images.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={style.image} />

                        ))
                    }
                </ScrollView>
                <View style = {style.circle}>
                    {
                        images.map((i,k) => (
                            <Text key = {k}
                            style={k==this.state.active ? style.currentPic :
                                style.carouselPic}>⬤</Text>
                        ))
                    }
                    
                </View>
                </SafeAreaView>
                <SafeAreaView style={style.container}>
                <Text style={style.Text}>BROWSE ALL RESTAURANTS</Text>
                <ScrollView>
                    {
                        vertImages.map((image, index) => (
                            <Image
                                key={index}
                                source={{ uri: image }}
                                style={style.image} />
                        ))
                    }
                </ScrollView>
                </SafeAreaView>
            </ScrollView>
        )
    }
}
export default Slider;

const style = StyleSheet.create({
    container: {flex: 1},
    image: { width, height, resizeMode: 'cover', borderWidth: 10, borderColor: 'white' },
    scroll: {width, height},
    circle: {flexDirection:'row', position:'absolute', bottom: 10, alignSelf:'center'},
    carouselPic: {fontSize: (width/40), color:'#888', margin: 3},
    currentPic: { fontSize: (width/40), color:'#fff', margin: 3},
    Text: { fontSize : 20, borderWidth: 10,  borderColor: 'white' }
})