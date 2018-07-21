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
                    
                    <RX.Button style={ styles.Button }>
                        <RX.Link style={ styles.buttonText }  url={ 'https://www.royalsundaram.net/web/test/makepayment?quoteId=QVMN0011943' }>
                            After selecting please click here to proceed
                        </RX.Link>
                    </RX.Button>
                    </RX.Text>

                    </RX.View>
                    <RX.View style={ styles.client }>
                        <RX.Image source={ './src/img/royal.jpg' } style={ [styles.image] } />
                        <div style={styles.TryHead}>View Details</div>

                        <RX.Text style={ styles.sideHead }>
                            Royal Sundaram
                            <div style={styles.tryHead}>IDV: Rs.1,25,300</div>
                        </RX.Text>
                        <RX.Text style={ styles.ncb }>
                            Rs. 21,900
                               </RX.Text>
                      </RX.View>
                      <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                        Select Payment Method
                    </RX.Text>
                    </RX.View>
                    <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                            Credit/Debit/AtmCard
                            </RX.Text>
                            <RX.View style={ styles.Radio}> <input type="radio"
                             value="radio1"
                              name="radioGroup"
                               onClick={this.addFunction} />  
                               </RX.View>       
                    </RX.View>
                    </RX.View>
                    <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                    </RX.Text>
                    </RX.View>
                    <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                            Internet Banking
                            </RX.Text>
                            <RX.View  style={ styles.Radio}> <input type="radio"
                             value="radio2"
                              name="radioGroup"
                               onClick={this.addFunction} />  
                               </RX.View>       
                    </RX.View>
                    </RX.View>
                    <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                    </RX.Text>
                    </RX.View>
                    <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                            UPI
                            </RX.Text>
                            <RX.View style={ styles.Radio}> <input type="radio"
                             value="radio3"
                              name="radioGroup"
                               onClick={this.addFunction} />  
                               </RX.View>       
                    </RX.View>
                    </RX.View>
                    <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                    </RX.Text>
                    </RX.View>
                    <RX.View style={ styles.pageAlign }>
                    <RX.View style={ styles.flute }>
                        <RX.Text style={ styles.head }>
                           Wallets
                           </RX.Text> 
                            <RX.View style={ styles.Radio}> <input type="radio"
                             value="radio1"
                              name="radioGroup"
                               onClick={this.addFunction} />  
                               </RX.View>      
                    </RX.View>
                    </RX.View>
                    <RX.View style={ styles.Container }>
                    <RX.Text style={styles.Welcome }>
                    </RX.Text>
                    </RX.View>
                   
                    <RX.Button style={ styles.Button }>
                        <RX.Link style={ styles.buttonText }  >
                            After selecting please click here to proceed
                        </RX.Link>
                    </RX.Button>
                       
            </RX.ScrollView>
            </RX.ScrollView>

        );
    }

_onChangeToggle(newValue) {
    this.setState({toggleValue: newValue});
}
}
// travel
/*
 * This file demonstrates a basic ReactXP app.
 */

// import React from 'react';
// import RX from 'reactxp';
// import styling from './AppStyles';
// import Rest from './RestConfig';
// import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField} from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';

// /*const {
//     Welcome
// } = TodoStyles;*/
// const _styles = {
//     scroll: RX.Styles.createScrollViewStyle({
//         alignSelf: 'stretch',
//         backgroundColor: '#ffffff'
//     }),
// };



// export default class TravelInsuranceReg extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             inputValue: '',
//             testValue:''
//         };
//     }

//     onChangePost = () => {
//         let {
//             testValue = 'testValue'
//         } = this.state;

//         let email = "joe@example.com";
//         let password = "donkeybrains";
//         let myApiUrl = "http://www.example.com/api"
//         let usersPath = "users"
//         console.log(testValue,"testValue");
//         console.log(password,"password");
//         console.log(Rest.ApiUrl,"RestApiUrl");
//         fetch(`${Rest.ApiUrl}/${usersPath}`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 user: {email, password}
//                 /*firstParam: 'yourValue',
//                 secondParam: 'yourOtherValue',*/
//             })
//         });
//     }

//     onChangeTextValue = (value) => {
//         this.setState({ inputValue: value });
//         console.log(this.state.inputValue,"inputValue");
//     }


//     onChangeRestValue = (value) => {
//         this.setState({ testValue: value });
//         console.log(this.state.testValue,"testValue");
//     }
//     render() {
//         return (
//             <RX.ScrollView style={ _styles.scroll }>
//                 <RX.View style={ styling.container }>
//                     <RX.Text style={styling.welcome }>
//                         New Travel Insurance
//                     </RX.Text>
//                     {/*<RX.Button style={ Button } this._onChangeVaronPress={ this.props.onNavigateThirteen }>
//                         <RX.Text style={ styling.buttonText }>
//                             Go Back
//                         </RX.Text>
//                     </RX.Button>*/}
//                 </RX.View>
//                 <Grid>
//                     <Row className="show-grid">
//                         <Col  md={2}></Col>
//                         <Col  md={8}>
//                             <Tabs defaultActiveKey={1} id="tab">
//                                 <Tab eventKey={1} title="Self" className="myClass">
//                                     {/*<code>&lt;{'Col xs={12} md={8}'} /&gt;</code>*/}
//                                     <RX.View style={styling.sideMar}>
//                                         <RX.Text style={ styling.sideText }>
//                                             Travelling Start Date
//                                         </RX.Text>
//                                         <form>
//                                             <RX.TextInput
//                                                 style={styling.Form}
//                                                 placeholder="Start Date"
//                                                 value={ this.state.testValue }
//                                                 onChangeText={this.onChangeRestValue}
//                                                 // defaultValue={ this.state.inputValue }
//                                             />

//                                         </form>
//                                     </RX.View>

//                                     <RX.View style={styling.sideMar}>
//                                         <RX.Text style={ styling.sideText }>
//                                             Travelling End Date
//                                         </RX.Text>
//                                         <form>
//                                         <RX.TextInput
//                                             style={styling.Form}
//                                             placeholder="End Date"
//                                             value={ this.state.inputValue }
//                                             onChangeText={this.onChangeTextValue}
//                                             // defaultValue={ this.state.inputValue }
//                                         />
//                                         </form>
//                                     </RX.View>
//                                      {/* <RX.View>
//                                         <RX.TextInput
//                                             placeholder="Placeholder"
//                                             value={ this.state.testValue }
//                                             onChangeText={this.onChangeRestValue}
//                                             // defaultValue={ this.state.inputValue }
//                                         />

//                                     </RX.View>*/}

//                                     <RX.View style={styling.sideMar}>
//                                         <RX.Text style={ styling.sideText }>
//                                             Cover Amount
//                                         </RX.Text>
//                                         <form>
//                                             <FormGroup
//                                                 controlId="formBasicText"
//                                             >
//                                                 {/*<ControlLabel>Working example with validation</ControlLabel>*/}
//                                                 <FormControl
//                                                     type="text"
//                                                     value={this.state.value}
//                                                     placeholder="Enter Amount"
//                                                 />
//                                             </FormGroup>
//                                         </form>
//                                     </RX.View>

//                                     <RX.View style={styling.sideMar}>
//                                         <RX.Text style={ styling.sideText }>
//                                             Country Travelling To
//                                         </RX.Text>
//                                         <form>
//                                             <FormGroup controlId="formControlsSelect">
//                                                 <FormControl componentClass="select" placeholder="select">
//                                                     <option value="select">United States</option>
//                                                     <option value="other">Australia</option>
//                                                     <option value="other">India</option>
//                                                 </FormControl>
//                                             </FormGroup>
//                                         </form>
//                                     </RX.View>

//                                     <RX.View style={styling.sideMar}>
//                                         <RX.Text style={ styling.sideText }>
//                                             Age of Traveller
//                                         </RX.Text>
//                                         <form>
//                                             <FormGroup
//                                                 controlId="formBasicText"
//                                             >
//                                                 {/*<ControlLabel>Working example with validation</ControlLabel>*/}
//                                                 <FormControl
//                                                     type="text"
//                                                     value={this.state.value}
//                                                     placeholder="Age"
//                                                 />
//                                             </FormGroup>
//                                         </form>
//                                         <Button bsStyle="primary"  onPress={()=> this.onChangePost() }>Post</Button>
//                                     </RX.View>

//                                 </Tab>
//                                 <Tab eventKey={2} title="Group">Tab 2 content</Tab>
//                             </Tabs>
//                         </Col>
//                     </Row>
//             </Grid>

//                 {/*<RX.Text style={styling.Text }>
//                     {this.state.joke}
//                 </RX.Text>*/}
//                 {/*<form>
//                     <FormGroup
//                         controlId="formBasicText"

//                     >
//                         <ControlLabel>Input</ControlLabel>
//                         <RX.TextInput
//                             type="text"
//                             placeholder="Enter text"
//                             value={ this.state.Model }
//                             onChange={this.handleChange}
//                         />
//                         <FormControl.Feedback />
//                     </FormGroup>
//                 </form>*/}


// {/*
//                 <RX.Button bsStyle="danger" onPress={()=> this._onChangeVar() }>Primary</RX.Button>
// */}
//             </RX.ScrollView>

//         );
//     }


//     _onChangeReg = () => {
//         this.setState({ Model: this.state.Model });
//     }

//     handleChange() {
//         this.setState({ Model:'' });
//     }

//     _onChangeText = (newText) => {
//         this.setState({ password: newText });
//     }

//     _onChangeTest = (newText) => {
//         this.setState({ password: newText });
//     }
// }

