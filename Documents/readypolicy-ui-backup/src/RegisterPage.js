/*
* This file demonstrates a basic ReactXP app.
*/

import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,label,Visible,Checkbox,lg,xs} from 'react-bootstrap';
/*const {
Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#2a647d0a'
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
        backgroundColor:'rgba(213,222,219,0)',
        padding:5
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
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
        backgroundColor: '#ff0000ab',
        justifyContent: 'CENTER'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    editTodoItem: RX.Styles.createViewStyle({
        margin: 15,
        height: 47,
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 16,
        borderWidth: 2,
        bordercolor: '#cccccc'
    }),
    email: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center'
    }),
    password: RX.Styles.createTextStyle({
        fontSize: 18,
        color: 'Black',
        justifyContent: 'center'
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 40,
        color: 'white',
    }),
    account: RX.Styles.createTextStyle({
        fontSize: 20,
        color: 'red',
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center'

    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        padding: 11,
        alignSelf:'center',
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 25,
        color: 'red',
        alignSelf:'center',
        textalign:'center',
        justifyContent: 'center',
     
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
    }),
        logo:RX.Styles.createButtonStyle({
          width: 25,
          marginTop: -30,
          float:'right',
          alignItems:'right'

    }),
    register: RX.Styles.createImageStyle({
        height: 80,
        width: 110,
        justifyContent: 'center'
    }),
    sideText:RX.Styles.createTextStyle({
        fontSize: 18,
        color: '#1a153b',
       
    }),
    sideMar:RX.Styles.createTextStyle({
        marginTop: 10,
        marginLeft:30,
        marginRight:20
    }),
   
};

export default class RegisterPage extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
            todofield: '',
            secureTextEntry: true
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
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.container }>
                    <RX.Text style={ styles.welcome }>
                        Profile
                    </RX.Text>
                </RX.View>
                <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                            Please Create An Account
                        </RX.Text>
                    </RX.View>
                </RX.View>
                
                <div class="container">
                <form>
                <div class="form-group row">
                <label for="lgFormGroupInput" style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Full Name</label>
                <div class="col-sm-10">
                <input type="email" style={styles.sideText} class="form-control form-control-lg" id="lgFormGroupInput" placeholder="Full Name"/>
      </div>
    </div>
    </form>
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Phone Number</label>
      <div class="col-sm-10">
        <input type="email"  style={styles.sideText}  class="form-control form-control-lg" id="lgFormGroupInput" placeholder="+919293456234"/>
      </div>
    </div>
    </form>
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Email</label>
      <div class="col-sm-10">
        <input type="email"  style={styles.sideText}  class="form-control form-control-lg" id="lgFormGroupInput" placeholder="you@example.com"/>
      </div>
    </div>
    </form>
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Date of Birth</label>
      <div class="col-sm-10">
        <input type="email"  style={styles.sideText}  class="form-control form-control-lg" id="lgFormGroupInput" placeholder="DD/MM/YYYY"/>
        <img src="./src/img/Datepicker.svg" style={styles.logo}>
                                            </img>
      </div>
    </div>
    </form>
    <form>
    <div class="form-group row">
      <label for="lgFormGroupInput"  style={styles.sideText}  class="col-sm-2 col-form-label col-form-label-lg">Location</label>
      <div class="col-sm-10">
        <input type="email"  style={styles.sideText}  class="form-control form-control-lg" id="lgFormGroupInput" placeholder="Bangalore/India"/>
        <img src="./src/img/MapPin.svg" style={styles.logo}>
                                            </img>
      </div>
    </div>
    </form>
   

            </div>
            
                                    <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }) } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }) } }
                    onPress={this.props.onNavigateFifth }
                >
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Next' }
                    </RX.Text>
                </RX.Button>
               
            </RX.ScrollView>  
                
        );
     
    }
}
