/*
 * This file demonstrates a basic ReactXP app.
 */
import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import Ripples from 'react-ripples'
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField} from 'react-bootstrap';
/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        flex:1,
        backgroundColor:'blue'
       
        
        
    }),
   Image: RX.Styles.createScrollViewStyle({
    flex: 1,
    width: '100%',
    height: '400%',
    resizemode:'cover'
   
      
    }),
    container: RX.Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        position: 'absolute',
        display: 'flex',
        flexdirection: 'column',
        flexgrow: 1,
        flexshrink: 1,
        overflow: 'hidden',
        alignitems: 'stretch',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor:'#000000c2',
        borderColor:"#ff0000"
    }),
    CONTAINER: RX.Styles.createViewStyle({
        marginTop:300,
        justifyContent: 'center',
        position: 'absolute',
        display: 'flex',
        flexdirection: 'column',
        flexgrow: 1,
        flexshrink: 1,
        overflow: 'hidden',
        alignitems: 'stretch',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor:'#9ca4ab;'
    }),
    
    
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        color: 'Red',
        alignSelf: 'center',
        opacity: 0.9,
        width: '100%',
        justifyContent: 'center',
        fontweight: 'bold',
        fontSize:35,
        textstyle:'italic',
        position:'absolute',
        marginTop:-42
    }),
    Welcome: RX.Styles.createTextStyle({
        paddingTop: 45,
        color: 'white',
        textAlign: 'center',
        opacity: 0.9,
        marginTop: -60,
        width: 350,
        justifyContent: 'center',
        fontweight: 'bold',
        alignItems:'center',
        fontSize:35,
       
    }),
    policy:RX.Styles.createTextStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 1,
        marginTop:18
       
    }),
        
    text: RX.Styles.createTextStyle({
        fontSize: 30,
        marginBottom: 30,
        color: 'white',
    }),
    instructions: RX.Styles.createTextStyle({
        fontSize: 16,
        color: '#aaa',
        marginBottom: 16
    }),
    docLink: RX.Styles.createLinkStyle({
        fontSize: 16,
        color: 'blue',
        marginBottom: 16
    }),
    roundButton: RX.Styles.createViewStyle({
        paddingTop: 4,
        width: '49%',
        height: 40,
        color:'pink',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    business: RX.Styles.createImageStyle({
        position: 'absolute',
        display: 'flex',
        flexdirection: 'column',
        flexgrow: 1,
        flexshrink: 1,
        overflow: 'hidden',
        alignitems: 'stretch',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
       
    }),
    button1Hover: RX.Styles.createButtonStyle({
        backgroundColor: '#EF5350',
        position: 'fixed',
        backgroundcolor: 'red',
        marginVertical:6,
        marginHorizontal:15,
    }),
    footer: RX.Styles.createViewStyle({
        position: 'absolute',
        
        width: '100%',
        backgroundColor: 'rgba(26,153,228,.97)',
        justifyContent:'center',
        alignSelf:'center',
        height:'50',
        bottom:'0',
        marginTop:'40'
        
    }),
    footerText: RX.Styles.createTextStyle({
        fontSize: 20,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white',
        alignSelf:'center'
    }),
    button1Text: RX.Styles.createTextStyle({
       
       marginTop: 652,
        backgroundcolor: 'red',
        marginVertical:6,
        marginHorizontal:15,
    }),
    button1TextHover: RX.Styles.createTextStyle({
        position: 'fixed',
        backgroundcolor: 'red',
        marginVertical:6,
        marginHorizontal:15,
        
    }),
    button1: RX.Styles.createButtonStyle({
        backgroundColor: '#ddd',
        borderWidth: 1,
        margin: 20,
        padding: 12,
        borderRadius: 8,
        borderColor: '#EF5350',
        marginTop:500,
    }),
    marTop:RX.Styles.createViewStyle({
        marginTop:20,
    }),
    image:RX.Styles.createViewStyle({
        height: 70,
        width:'100%',
        marginTop:'20'
       
    }), 
    backgroundImage:RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: "stretch",
        
    }),
    
};
export default class MainPanel extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            phone:'',
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
        return (
           
            <RX.Image
            source={ ('./src/img/policy.png' )}
            resizeMode='cover'
            fluidalt="Responsive Image"
            style={[styles.backgroundImage]}
        >
         <Ripples color='rgba(0,0,0,.5)' during='700'>
    <RX.Button color='white'> Ripple Button</RX.Button>
  </Ripples>
                   <marquee Height="200px" direction= "right" scrollamount="30">
   
<img src="./src/img/CAR.png"/>
</marquee>
               <RX.View style={ styles.container }>
              
                <RX.Text style={ styles.welcome }>
                              <RX.Image source={ './src/img/Logo.svg' } style={ [styles.image] } />
                       
                    </RX.Text>
                                       <RX.Text style={ styles.policy }>Your Policy Patner</RX.Text>
                                      <RX.View style={ styles.CONTAINER }>
                                        <marquee Height="200px" direction= "right" scrollamount="30"> 
<img src="./src/img/BiKe.png"/>
</marquee> 
</RX.View>
                
                <RX.View style={styles.footer}>

    <RX.Button
   /* // style={ [sty]} */
    onPress={this.props.onNavigateForward}
  > {/* // onPress={() => navigate('OtpPage'), { phone: this.state.phone }} */}
      <RX.Text style={styles.footerText} >{'NEXT'}
     </RX.Text>
      </RX.Button>
       </RX.View>
               
      
                </RX.View> 
                    </RX.Image>
        );
    }
}