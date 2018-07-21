/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';



import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField} from 'react-bootstrap';

const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'black'
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
        backgroundColor:'#000000c2'
    }),
    welcome: RX.Styles.createTextStyle({
        color: 'Red',
        alignSelf: 'center',
        opacity: 0.9,
        marginTop: -175,
        width: 350,
        justifyContent: 'center',
        fontweight: 'bold',
        fontSize:35,
        marginLeft:65,
        textstyle:'italic',
        position:'absolute'


    }),
    Welcome: RX.Styles.createTextStyle({
        
        color: 'white',
        alignSelf: 'center',
        opacity: 0.9,
        marginTop: -175,
        width: 350,
        justifyContent: 'center',
        fontweight: 'bold',
        fontSize:35,
        marginLeft:190,
        position: 'absolute'

    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    button1Hover: RX.Styles.createButtonStyle({
        backgroundColor: '#EF5350'
    }),
    button1Text: RX.Styles.createTextStyle({
        fontSize: 14,
        color: '#EF5350',
        justifyContent: 'center',
        textAlign:'CENTER',
        alignSelf:'center'
    }),
    button1TextHover: RX.Styles.createTextStyle({
        fontSize: 14,
        color: 'White',
        justifyContent: 'center',
        margingright:50,
        textAlign:'CENTER',
        alignSelf:'center'
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
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#7d88a9'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    business: RX.Styles.createImageStyle({
        height: 821,
        width: 2392,
        marginTop:10,

    }),
    text: RX.Styles.createTextStyle({
        fontSize: 30,
        position: 'absolute',
        top: 159,
        left: 507,
        marginBottom: 30,
        color: 'white',
    }),
    Text: RX.Styles.createTextStyle({
        fontSize: 30,
        position: 'absolute',
        top: 297,
        left: 331,
        marginBottom: 30,
        color: 'white',
        justifyContent: 'center'
    }),
    TExt: RX.Styles.createTextStyle({
        fontSize: 30,
        position: 'absolute',
        top: 351,
        left: 580,
        marginBottom: 30,
        color: 'pink',
        justifyContent: 'center',

        flex: number = 0,
        alignSelf: 'auto'
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 5,
        backgroundColor: '#2ecc71'
    }),
    Input: RX.Styles.createTextStyle({
        marginHorizontal: 4,
        marginVertical: 30,
        paddingHorizontal: 8,
        position: 'absolute',

    }),
    TEXT: RX.Styles.createTextStyle({
        fontSize: 30,
        position: 'absolute',
        top: 371,
        left: 507,
        marginBottom: 30,
        color: 'white',
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 9,
        backgroundColor: '#2ecc71',
        marginTop: -239
    }),
    buybuttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
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
    quotes: RX.Styles.createTextStyle({
        position: 'absolute',
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:104,
        height:42,
        width:59,
        padding:13,
        marginLeft:-7
    }),
    quotes1: RX.Styles.createTextStyle({
        position: 'absolute',
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:104,
        height:42,
        width:59,
        padding:13,
        marginLeft: 61
    }),
    quotes2: RX.Styles.createTextStyle({
        position: 'absolute',
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:104,
        height:42,
        width:59,
        padding:13,
        marginLeft:128
    }),
    quotes3: RX.Styles.createTextStyle({
        position: 'absolute',
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:104,
        height:42,
        width:59,
        padding:13,
        marginLeft:-75
    }),
    backgroundImage:RX.Styles.createViewStyle({
        flex: 1,
        alignSelf: "stretch",
    }),
    otp: RX.Styles.createTextStyle({
        
            fontSize: 18,
            marginBottom: 16,
            color:'White',
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'center',
            marginLeft: 1,
            marginTop:52,
            textAlign: 'center'
          
    }),
    image: RX.Styles.createViewStyle({
        height: 42,
        width: 37,
        marginTop:415,
        marginLeft:10


    }),
    Form:RX.Styles.createViewStyle({
        width: '21%',
         float:'left',
          margin: '5px',
           backgroundcolor:  '#fff',
    }),
    Form1:RX.Styles.createViewStyle({
        width: '21%',
        float:'left',
         margin: '5px',
          backgroundcolor:  '#fff',
     
    }),

    Form2:RX.Styles.createViewStyle({
        width: '21%',
        float:'left',
         margin: '5px',
          backgroundcolor:  '#fff',
     
    }),
    // element:RX.Styles.createViewStyle({
    //     width: '21%',
    //     float:'left',
    //      margin: '5px',
    //      margintop: '4px',
    //      marginleft: '-2px',
    //       backgroundcolor:  '#fff',
     
    // }),
    textInput1: RX.Styles.createTextInputStyle({
        flex: 1,
        maxWidth: 200,
        borderWidth: 1,
        fontSize: 14,
        padding: 4,
        borderColor: 'red'
    }),
    phone: RX.Styles.createViewStyle({
        height: 120,
        width: 30,
        marginTop:-39,
        marginLeft:148,
        marginBottom:29
    }),
    resend: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: -117,
        marginTop:130
    
    }),
    Resend: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft:31,
        marginTop:130
    }),
    policy: RX.Styles.createScrollViewStyle({
    fontSize: 18,
    marginBottom: 16,
    color:'White',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: -10,
    marginTop:-148
    }),
    Policy: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        marginBottom: 16,
        color:'White',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
        marginLeft: 2,
        marginTop:-95,
        textAlign: 'center'
        }),
        P0LIcy: RX.Styles.createScrollViewStyle({
            fontSize: 18,
            marginBottom: 16,
            color:'White',
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'center',
            marginLeft: -73,
            marginTop:-62,
            textAlign: 'center'
            }),
            TryHead: RX.Styles.createScrollViewStyle({
                fontSize: 15,
                color: 'WHITE',
                marginTop: 'auto',
                textTransform:'capitalize'
            }),
        POLICY: RX.Styles.createScrollViewStyle({
            fontcolor:'red',
            marginTop: -26,
            marginLeft: 331
            }),

        POlicy:RX.Styles.createTextStyle({
            fontSize: 18,
            color:'White',
            justifyContent: 'center',
            position: 'absolute',
            alignSelf: 'center',
            margin: '5',
            marginTop: '50',
            textAlign: 'justify',

    
        }),
        image:RX.Styles.createViewStyle({
            height: 69,
            width:'100%',
            marginTop: 100,
    marginLeft: '-6px',
    backgroundcolor: '#62629cb0'
           
        }), 
    IMAGE:RX.Styles.createViewStyle({
            height: 100,
            width:'9%',
            marginTop: '99px',
    marginLeft: '146px',
    backgroundcolor: '#62629cb0'
           
        }),
        aren:RX.Styles.createTextStyle({ 
            marginTop: -76,
        marginLeft: 67,
        height:116,
        width:173,
        marginTop:-71,
        marginLeft:193,
        marginBottom:56
        }),
        areN:RX.Styles.createTextStyle({ 
        marginLeft: 183,
    marginTop: -101,
    }),
       lock:RX.Styles.createTextStyle({
        display: 'block',
        backgroundColor: '#e2dadad1',
        width: 50,
        float: 'left',
        padding: 8,
        position:'center',
        marginLeft:'25px',
        color: "#080808eb",
        justifyContent: 'center',
        textAlign:'center',
          
            }),
            hoat:RX.Styles.createTextStyle({
                display: 'block',
                backgroundcolor: 'grey',
                width: 200,
                float: 'left',
                padding: 10,
                marginLeft:50
                

            }),
            autofous:RX.Styles.createTextStyle({
                marginTop:520,
                marginLeft:450

            })
    
    
};
var token
var phone
export default class OtpPage extends RX.Component{
    constructor(props) {
        super(props);
        this.textInput = React.createRef(),
        this.state = {
         
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
        
        this.props.onPressNavigate(token);
    }



    
    GetValueFunction = (ValueHolder) =>{
      
        var Value = ValueHolder.length.toString() ;
        console.log(+Value)
        if(Value>=1)
        {
    this.refs.check1.focus();
        }
    
           }
    
    
    
           GetValueFunction1 = (ValueHolder) =>{
          
            var Value = ValueHolder.length.toString() ;
            console.log(+Value)
            if(Value>=1)
            {
        this.refs.check2.focus();
            }
        
               }
    
    
               GetValueFunction2 = (ValueHolder) =>{
          
                var Value = ValueHolder.length.toString() ;
                console.log(+Value)
                if(Value>=1)
                {
            this.refs.check3.focus();
                }
            
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
    onChangeText = (value) => {
        this.setState({ value: value });
        
    }
     
                       
    onChangePhone = (value) => {
        this.setState({ phone: value });
        console.log(this.state.phone,"phone");
    }
    // onChangePhone = (value) => {
    //     this.setState({ phone1: value });
    //     console.log(this.state.phone1,"phone");
    // }
    // onChangePhone = (value) => {
    //     this.setState({ phone2: value });
    //     console.log(this.state.phone2,"phone");
    // }
    // onChangePhone = (value) => {
    //     this.setState({ phone3: value });
    //     console.log(this.state.phone3,"phone");
    // }

    render() {
        res=this.props.navigatorRoute.res
        token = this.props.navigatorRoute.token
      phone=this.props.navigatorRoute.phone
        console.log(token,"token")
        console.log(phone,"phone")
        return (
            <RX.Image
            source={ ('./src/img/policy.png' )}
            resizeMode="cover"
            fluidalt="Responsive Image"
            style={[styles.backgroundImage]}
        >
            {/* <RX.ScrollView style={ styles.scroll }> */}
            
            
            <RX.Image source={ './src/img/Logo.svg' }style={ [styles.image] }/>   
            <RX.View style={ styles.container }>
           
                 <RX.Text style={ styles.policy }>Your Policy Patner</RX.Text> 
            <RX.Text style={styles.Policy}>Waiting to automatically detect an SMS</RX.Text><RX.Text style={styles.P0LIcy}> sent to { phone}.<p  class="text-danger" style={styles.POLICY} >WrongNumber?</p></RX.Text>
            <RX.Text style={styles.POlicy}>  </RX.Text>
<div style={ styles.autofous }>            
            <RX.TextInput ref="check0"  onChangeText={ ValueHolder => this.GetValueFunction(ValueHolder) } style={styles.lock} required
             />
         
            
         
             




<RX.TextInput
             
            ref="check1"
         
             onChangeText={ ValueHolder => this.GetValueFunction1(ValueHolder) }
         
             style={styles.lock} required
           />


           <RX.TextInput
             ref="check2"
         
             onChangeText={ ValueHolder => this.GetValueFunction2(ValueHolder) }
         
             style={styles.lock} required
           />
<RX.TextInput
             
             ref="check3" maxLength='1' onChangeText={ ValueHolder => this.GetValueFunction3(ValueHolder) }
         
             style={styles.lock} required
           />

          
           {/* <RX.TextInput  placeholder="Enter Text here" ref="check4" style={styles.lock}
           /> */}
           </div>
             
            
         
             
         
             

      





           
  




      









                
{/*                     
              </RX.Text>    */}
                    <RX.Text style={ styles.otp}>
                        Enter OTP code
                    </RX.Text>
                    <RX.Text style={ styles.resend }>
                        <RX.Image source={ './src/img/mess.png' } style={ [styles.IMAGE] } /><p style={styles.aren}>Resend</p>
                       
                    </RX.Text>
                  
                    <RX.Text style={ styles.Resend }>
                        <RX.Image source={ './src/img/phonee.png' } style={ [styles.phone] } /><p style={styles.areN} >Phone</p>

                    </RX.Text>
                    <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }) } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }) } }
                    onPress={()=> this.onChangePost() }
                >
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Next' }
                    </RX.Text>
                </RX.Button>
                </RX.View>
                <RX.View style={styles.footer}>

<RX.Button
/* // style={ [sty]} */
onPress={()=> this.onChangePost()}
> {/* // onPress={() => navigate('OtpPage'), { phone: this.state.phone }} */}
  <RX.Text style={styles.footerText} >{'NEXT'}
 </RX.Text>
  </RX.Button>
   </RX.View>

                {/* <Row className="show-grid">
                                        <Col  md={6}>
                                            <RX.Button bsStyle="primary"  onPress={()=> this.onChangePost() }>Post</RX.Button>
                                        </Col>
                                        <Col  md={6}>
                                            <RX.Button bsStyle="warning"  onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                        </Col>

                                    </Row>
                 */}
            {/* </RX.ScrollView> */}
</RX.Image>
        );
    }
}