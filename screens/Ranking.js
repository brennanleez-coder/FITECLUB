
import React, { Component } from 'react';
import { View, Alert, Image, Text } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Leaderboard from 'react-native-leaderboard';

export default class Ranking extends Component {
    state = {
        globalData: [
            { name: 'Din Tai Fung', score: 4, iconUrl: 'https://images.liven.com.au/u/d/din-tai-fung/l/8CW2VHR1V.png' },
            { name: 'Alter Ego', score: 3.8, iconUrl: 'https://scontent.fsin9-1.fna.fbcdn.net/v/t1.6435-9/35357604_1976391049039031_6092325703951319040_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=RKjt7un_fqoAX_53o57&_nc_ht=scontent.fsin9-1.fna&oh=af5d393a2d63a19ae2a7c6f3bf34239a&oe=60D841C1' },
            { name: 'Burnt Ends', score: 4.2, iconUrl: 'https://scontent.fsin9-1.fna.fbcdn.net/v/t31.18172-8/906512_237321196412740_1155565660_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=KCn3ySF9AO0AX-aQXu1&_nc_ht=scontent.fsin9-1.fna&oh=70b3be6bad8225886bb9101bc663ff79&oe=60D98951' },
            { name: 'Fook Kin', score: 4.1, iconUrl: 'https://scontent.fsin9-2.fna.fbcdn.net/v/t1.6435-9/38497347_1965055290451866_1444688683247599616_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=174925&_nc_ohc=bo2s6eNLehQAX_ftYJp&_nc_ht=scontent.fsin9-2.fna&oh=9f3aa6fea2b4955d5fbb8671ee90b0ca&oe=60D84B5A' },
            { name: 'Koh Grill', score: 5, iconUrl: 'https://tummyworms.files.wordpress.com/2013/06/img_7667.jpg' },
            { name: 'Lawry\'s The Prime Rib', score: 4.5, iconUrl: 'https://scontent.fsin9-2.fna.fbcdn.net/v/t1.6435-9/93519531_10158361310977089_8200525923204726784_n.png?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=4NNCd6u7S3UAX-G_gwM&_nc_ht=scontent.fsin9-2.fna&oh=cf778780f386c862d907b1de6d3fc81d&oe=60D94239' },
            { name: 'Three Meals A Day', score: 4.8, iconUrl: 'https://1.bp.blogspot.com/-egfRzDjSmU0/XQJpCDpsOPI/AAAAAAAAZuo/xYWlw_xYm3M_B4RE2u-flfum_SsWiDGmQCLcBGAs/s1600/20190320_140754_HDR.jpg' },
            { name: 'Two Man Bagel House', score: 4, iconUrl: 'https://rs-menus-api.roocdn.com/images/2a2a6824-2eb2-4d24-8a02-995e57466bd9/image.jpeg?width=1200&height=630&auto=webp&format=jpg&fit=crop&v=' },
            { name: 'Beauty In The Pot', score: 4.8, iconUrl: 'https://www.paradisegp.com/wp-custom/images/LogoMenu-BIP.jpg' },
            { name: 'Genki Sushi', score: 4.7, iconUrl: 'https://www.capitaland.com/content/dam/capitaland-sites/singapore/shop/malls/junction-8/tenants/Genki%20Sushi-logo.png.transform/cap-midres/image.png' },
            { name: 'Hai Di Lao', score: 4.3, iconUrl: 'https://crossingthewalldotcom.files.wordpress.com/2019/01/haidilao-logo.jpg' },
           
        ],
        
        filter: 0,
        userRank: 1,
        user: {
            name: 'coco',
            score: 69,
        }
    }

    alert = (title, body) => {
        Alert.alert(
            title, body, [{ text: 'OK', onPress: () => { } },],
            { cancelable: false }
        )
    }

    sort = (data) => {
        const sorted = data && data.sort((item1, item2) => {
            return item2.score - item1.score;
        })
        let userRank = sorted.findIndex((item) => {
            return item.name === this.state.user.name;
        })
        this.setState({ userRank: ++userRank });
        return sorted;
    }

    renderHeader() {
        return (
            <View colors={[, '#1da2c6', '#1695b7']}
                style={{ backgroundColor: '#119abf', padding: 15, paddingTop: 35, alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: 'white', }}> F.I.T.E club Ranking Leaderboard</Text>
                <View style={{
                    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                    marginBottom: 15, marginTop: 20
                }}>
                </View>
                
            </View>
        )
    }

    render() {
        const props = {
            labelBy: 'name',
            sortBy: 'score',
            data: this.state.filter > 0 ? this.state.friendData : this.state.globalData,
            icon: 'iconUrl',
            onRowPress: (item, index) => { this.alert(item.name + " has a rating of " + item.score + " stars!") },
            sort: this.sort
        }

        return (
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                {this.renderHeader()}
                <Leaderboard {...props} />
            </View>
        )
    }
}

const ordinal_suffix_of = (i) => {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
