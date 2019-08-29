import {StyleSheet, Dimensions} from "react-native";
import {purple001, purple002} from './colors';

const {width: WIDTH} = Dimensions.get('window');
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const scale = size => (Dimensions.get("window").width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;


export const styles = StyleSheet.create({
    container: {
      backgroundColor: purple001,
    },
    content :{
        backgroundColor:'white',
        borderTopColor:'white',
        borderTopWidth:1,
        borderRadius:8,
        paddingHorizontal:5,
    },
    title :{
        fontSize: 22,
        color: 'white',
        fontFamily: 'AvenirLTStd-Medium',
        fontWeight: '500',
    },
    /**
     * title ; Add Friends
     */
    title001:{
        fontSize: 21,
        color: '#424a54',
        //fontFamily: 'Avenir',
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing:1.3,        
    },
    /**
     * * icon user plus
     * * icon more
     */
    icon001:{
        width:50,
        height:30,
        resizeMode:'center',        
    },
    iconScope:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    },
    /**
     * icon - bell
     * used image
     */
    iconBell:{        
        marginRight:10,
    },
    /**
     * DiscoverScreen
     * * Friends *
     */
    text001:{
        fontSize: 16,
        color: '#2c3137',
        fontFamily: "AvenirLTStd-Heavy",
        fontWeight: '800',
    },
    /**
     * DiscoverScreen
     * * Stories from your friends will appear here *
     */
    text002:{
        width:'100%',
        paddingTop:20,
        paddingBottom:10,
        fontSize: 14,
        color: '#9a9fa7',
        fontFamily: 'AvenirLTStd-Medium',
        textAlign: 'center',
    },
    /**
     * Text - Add Friends
     */
    text003:{
        fontSize: 17,
        color: 'white',
        fontFamily: 'AvenirLTStd-Medium',
        fontWeight: '800',
        textAlign: 'center',
    },
    /**
     * Button -  text 'hide'
     */
    text004:{
        fontSize: moderateScale(14),
        color: '#b9c0c7',
        fontFamily: 'AvenirLTStd-Medium',
        fontWeight: '800',
        textAlign: 'right',
    },
    
    /**
     * Button Add Friends
     */
    button001:{
        color:purple002,
        width:'45%',
        textAlign:"center",
        alignItems:'center',
        justifyContent:'center',
    },
    buttonLayer001:{
        width:'100%',
        alignItems:'center'
    },
    quickAddLayer001:{
        flexDirection : 'row',
        width:'100%',
        justifyContent : 'space-between',
    },

    /**
     * Search Bar
     */
    searchBar:{
        backgroundColor:'#ecedec',
        borderTopWidth : 1,
        borderBottomWidth : 1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderRadius : 15,
        borderColor : 'gray',
    },
});
  