/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import Button from 'react-bootstrap/lib/Button';
import ToggleSwitch from './ToggleSwitch';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,Form,FormGroup,ControlLabel,FormControl,T,Visible,Checkbox,lg,xs,label,radio,Input,wrapperClassName,groupClassName} from 'react-bootstrap';

/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f1f1f1'
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
    welcome: RX.Styles.createTextStyle({
        fontSize: 40,
        color: 'white',
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
        marginLeft:26,
        marginTop:-19
    }),
    
    SideHead: RX.Styles.createScrollViewStyle({
        fontSize: 20,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:26,
        marginTop:-5
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
        fontSize: 20,
        color: 'White',
        margin:556
        
    }),
    container1: {
        color: 'white'
    },
    buybuttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white',
        justifyContent: 'center',

    }),
    image: RX.Styles.createViewStyle({
        height: 100,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:10
    }),
    flute: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#f5f5f3',
        padding:5
    }),
    head: RX.Styles.createScrollViewStyle({
        fontSize: 30,
        color: '#3b3751',
        textTransform:'capitalize',
        marginLeft: 24
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center',
        borderRadius: 5,
        marginRight: 20,
        marginLeft: 20

    }),
    Button: RX.Styles.createViewStyle({
        display: 'block',
        width: '100%',
        height: 34,
        // padding: 6px 12px;
         fontSize: 14,
       // line: 1.42857143;
       color: "#F50057",
       backgroundColor: "#F50057",
       borderWidth:3,
       borderColor:"#F50057",
       borderRadius: 3
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
        backgroundColor: 'afa8a800',
        marginLeft:26,
        marginTop:-4
       }),
    editTodoItem: RX.Styles.createViewStyle({
        margin: 15,
        height: 47,
        fontSize: 20,
        justifyContent: 'center',
        alignSelf: 'left',
        marginLeft: 27,
        borderWidth:'1',
        borderColor:'#cccccc ',
        borderStyle:'solid',
        marginTop: 8,
        width:629
    }),
    number:RX.Styles.createViewStyle({
    marginLeft:29
    }),
    assitance: RX.Styles.createTextStyle({
        fontSize: 20,
        color: '#1a1828',
        textTransform:'capitalize',
        marginLeft:'-170'
    }),
    assitanceMob: RX.Styles.createTextStyle({
        fontSize: 15,
        color: '#1a1828',
        textTransform:'capitalize',
        alignSelf: 'left',
        marginLeft:'-170'

    }),
    contain: RX.Styles.createViewStyle({
        backgroundColor:'#80808000',
    }),
    sideText:RX.Styles.createTextStyle({
        fontSize: 20,
        color: '#1a153b'
    }),
    sideMar:RX.Styles.createTextStyle({
        marginTop: 10,
        marginLeft:30,
        marginRight:20
    }),
};

const pickerItems= [
    {
        label: 'Healthcare',
        value: 'Healthcare'
    },
    {
        label: 'Travel Insurance',
        value: 'Travel Insurance'
    },
    {
        label: 'Motor Insurance',
        value: 'Motor Insurance'
    }

];


export default class PaymentScreen extends RX.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: "selectedValue"
        }
        

        
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
                <RX.View style={ styling.container }>
                    <RX.Text style={styling.welcome }>
                        New Term Insurance
                    </RX.Text>
                    </RX.View>
                    <RX.View style={styles.flute }>
                    <RX.Text style={ styles.head }>
                  Personal Details
                    </RX.Text>
                </RX.View>
                <RX.View style={styles.sideMar}>
                                        <RX.Text style={ styles.sideText }>
                                            Coverage Amount
                                        </RX.Text>
                                        <form>
                                            <FormGroup controlId="formControlsSelect">
                                                <FormControl componentClass="select" placeholder="select">
                                                    <option value="select">Motor Insurance</option>
                                                    <option value="other">Travel Insurance</option>
                                                    <option value="other">Health Insurance</option>
                                                </FormControl>
                                            </FormGroup>
                                        </form>
                                    </RX.View>
                                    <RX.View style={styles.sideMar}>
                                        <RX.Text style={ styles.sideText }>
                                            Term Of the policy
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="Select Term"
                                                />
                                            </FormGroup>
                                        </form>
                                    </RX.View>
                                    


                <RX.View style={styles.flute }>
                    <RX.Text style={ styles.head }>
                 Gender
                    </RX.Text>
                    <RX.View  style={ styles.Radio}> <input type="radio"
                             value="radio2"
                              name="radioGroup"
                               onClick={this.addFunction} />  
                               
                    
                        <RX.Text style={ styles.sideHead }>
                            Male      
                            </RX.Text>
                            </RX.View>
                
                <RX.View  style={ styles.Radio}> <input type="radio"
                             value="radio2"
                              name="radioGroup"
                               onClick={this.addFunction} />  
                               
                    
                        <RX.Text style={ styles.sideHead }>
                            Female     
                            </RX.Text>
                            </RX.View>
                
                <RX.View  style={ styles.Radio}> <input type="radio"
                             value="radio2"
                              name="radioGroup"
                               onClick={this.addFunction} />  
                               
                    
                        <RX.Text style={ styles.sideHead }>
                          Other    
                            </RX.Text>
                            </RX.View>
                </RX.View>
                <RX.View style={styles.sideMar}>
                                        <RX.Text style={ styles.sideText }>
                                            Age
                                        </RX.Text>
                                        <form>
                                            <FormGroup
                                                controlId="formBasicText"
                                            >
                                                {/*<ControlLabel>Working example with validation</ControlLabel>*/}
                                                <FormControl
                                                    type="text"
                                                    value={this.state.value}
                                                    placeholder="Enter Age"
                                                />
                                            </FormGroup>
                                        </form>
                                    </RX.View>
                <RX.View style={styles.flute }>
                    <RX.Text style={ styles.head }>
                 Smoker
                    </RX.Text>
                    <RX.View  style={ styles.Radio}> <input type="radio"
                             value="radio2"
                              name="radioGroup"
                               onClick={this.addFunction} />  
                               
                    
                        <RX.Text style={ styles.sideHead }>
                           Yes   
                            </RX.Text>
                            </RX.View>
                
                <RX.View  style={ styles.Radio}> <input type="radio"
                             value="radio2"
                              name="radioGroup"
                               onClick={this.addFunction} />  
                               
                    
                        <RX.Text style={ styles.sideHead }>
                           No    
                            </RX.Text>
                            </RX.View>
                
               
                    </RX.View>
                    <Row className="show-grid" style={styles.contain}>
                        <Col md={8} mdOffset={2} className="hidden-xs" >
                            <code style={styles.assitance}><Checkbox>I accept the terms and conditions</Checkbox></code>
                         
                        </Col>
                        </Row>
                        <RX.View style={styles.sideMar}>
                                        <form>
                                        </form>
                                        <Button bsStyle="primary"  onPress={this.props.onNavigateNewTermInsurance }>Next</Button>
                   
                                    </RX.View>
                   
                        
                   
                    
            </RX.ScrollView>

        );
    }
    _onValueChange = function (itemValue, itemIndex) {
        _this.setState({ selectedValue: itemValue });
    };
}

