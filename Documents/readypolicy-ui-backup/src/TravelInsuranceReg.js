/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import Button from 'react-bootstrap/lib/Button';
import ToggleSwitch from './ToggleSwitch';

/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#c4c3c7'
    }),
    container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1a153b',
        padding:5
    }),
    Container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#c4c3c7',
        padding:5
    }),
    welcome: RX.Styles.createScrollViewStyle({
        top: 5,
        fontSize: 25,
        color: 'white',
        textAlign:'center',
     margintop:95

    }),
    Welcome: RX.Styles.createTextStyle({
        fontSize: 38,
        color: 'Black',
        alignItems: 'center'
    }),
    sideHead: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:54,
        marginTop:41
    }),
    
    SideHead: RX.Styles.createScrollViewStyle({
        fontSize: 20,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:389,
        marginTop:51
    }),
    quotes: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        height:41,
        width:169,
        padding:4,
        marginLeft:71
    }),
    quoted: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        height:41,
        width:169,
        padding:4,
        marginLeft:92
    }),
    subQuotes: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        height:41,
        width:169

    }),
    ncb: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"white",
        marginTop:41,
        alignItems:'left',
        height:41,
        padding:4,
        marginLeft:62
    }),
    Ncb: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"white",
        marginTop:41,
        alignItems:'left',
        height:41,
        padding:4,
        marginLeft:592
    }),
    subNcb: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        alignItems:'left',
        height:41
    }),
    tryHead: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#3e376d',
        textTransform:'capitalize'
    }),
    TryHead: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: 'RED',
        marginTop: 'auto',
        textTransform:'capitalize'
    }),
    
    
        
    client: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:"#cccccc"
    }),
    Client: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:"#cccccc"
    }),
    btn: RX.Styles.createViewStyle({
        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row'
    }),
    nextBtn: RX.Styles.createViewStyle({
        marginTop:30,
        marginLeft:62
    }),
    titleText: RX.Styles.createTextStyle({
        fontSize: 16,
        textAlign: 'center',
        marginTop: 12,
        color: 'black'
    }),
    videoTitleText: RX.Styles.createTextStyle({
        marginBottom: 8
    }),
    progressMargin: RX.Styles.createViewStyle({
        margin: 8
    }),
    video: RX.Styles.createViewStyle({
        height: 176,
        width: 320
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 5,
        backgroundColor: '#2ecc71'
    }),
    buyButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#7d88a9'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 18,
        marginVertical: 12,
        marginHorizontal: 12,
        color: 'black',
        margin:30,
        marginLeft: 474
        
    }),
    buybuttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white',
        justifyContent: 'center'
    }),
    image: RX.Styles.createViewStyle({
        height: 100,
        width: 150,
        backgroundColor:'#FFFFFF',
        marginTop:10
    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'WHITE',
        padding:13
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3b3751',
        textTransform:'capitalize',
        marginLeft: 60
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center',
        borderRadius: 5,
        marginRight: 20,
        marginLeft: 20

    }),
    Button: RX.Styles.createViewStyle({
        margin: 16,
        style: 'rounded square',
        backgroundColor: '#80808000',
        margin:30,
        marginLeft:506
    }),
    radiobutton: RX.Styles.createViewStyle({
        borderRadius: 10,

    }),
    buttoninside: RX.Styles.createViewStyle({
        borderRadius: 10,
        backgroundColor: '#cdcdcd'

    }),
    Radio: RX.Styles.createViewStyle({
        borderRadius: 10,
        backgroundColor: 'white',
        marginLeft:1181,
        marginTop:-22
       }),
};



var token
export default class PaymentScreen extends RX.Component{
    constructor(props) {
        super(props);
        this._onChangeToggle = this._onChangeToggle.bind(this);
        this.state = {
            toggleValue: true,
            progressValue: 0
        };
        
        this._translationValue = RX.Animated.createValue(-100);
        this._animatedStyle = RX.Styles.createAnimatedTextStyle({
            transform: [
                {
                    translateY: this._translationValue
                }
            ]
        });
    }
    onChangePost() {
        this.props. onNavigatePayment(token);
    
    }

    componentDidMount() {
        let animation = RX.Animated.timing(this._translationValue, {
                toValue: 0,
                easing: RX.Animated.Easing.OutBack(),
                duration: 500
            }
        );

        animation.start();
    }
   

    render() {
        token = this.props.navigatorRoute.token
        console.log(token,"token")
        return (
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styling.container }>
                    <RX.Text style={styles.welcome }>
                        Payments
                    </RX.Text>

                    </RX.View>
              <RX.Text >

                        <RX.Link style={ styles.buttonText }  url={ 'https://www.royalsundaram.net/web/test/makepayment?quoteId=QVMN0011943' }> */}
                           
                        </RX.Link> 
                       </RX.Text>
            </RX.ScrollView>
       

        );
    }

_onChangeToggle(newValue) {
    this.setState({toggleValue: newValue});
}
}