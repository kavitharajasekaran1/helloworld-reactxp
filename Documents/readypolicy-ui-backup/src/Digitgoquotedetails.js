/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import OtpPage from './OtpPage';
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField,Checkbox,Button} from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import Popup from 'react-popup';
import swal from 'sweetalert';
import {default as RXVideo} from 'reactxp-video';
import ProgressIndicator from './ProgressIndicator';
import ToggleSwitch from './ToggleSwitch';
import Rest from "./RestConfig";
import styling from "./AppStyles";
import { toUnicode } from 'punycode';

// const parseJson = require('parse-json');


const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'white'
    }),
    SCROLL: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#1a153b'
    }),
    HomeScrollImageLogo: RX.Styles.createImageStyle({
        width:3000,
        height: 65,
        paddingVertical:20,
        marginLeft:-1200,
        marginTop:30,
        paddingTop:30,
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#f5f5f3',
        justifyContent:'center'

    }),
    welcome: RX.Styles.createScrollViewStyle({
        fontSize: 40,
        color: 'white',
    }),
    container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1a153b',
        padding:5
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
        textTransform:'capitalize'
    }),
    sideHead: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:54,
        marginTop:41
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
        fontSize: 15,
        color: '#101010',
        textTransform:'capitalize',
        backgroundColor:"#c7c7c7",
        marginTop:41,
        alignItems:'left',
        height:41,
        padding:4
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
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    buybuttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    }),
    editTodoItem: RX.Styles.createTextStyle({
        margin: 8,
        height: 18,
        fontSize: 14,
        alignSelf: 'stretch',
        backgroundColor: 'transparent',
        borderWidth:1 ,
        borderRightWidth:0,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderStyle:'solid',
        borderColor:'#ccc'
    }),
    image: RX.Styles.createViewStyle({
        height: 100,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:10
    }),
};
var responseJson1
var idv
var enquiryId
var totalGrossPremium
var TotalPremium
var token
export default class QuotesSelection  extends RX.Component {


    _progressTimerToken;

    constructor(props) {
        super(props);

        this._playVideo = this._playVideo.bind(this);
        this._onChangeToggle = this._onChangeToggle.bind(this);
        this.state = {
            toggleValue: true,
            progressValue: 0
        };
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        this._stopProgressIndicator();
    }

    onUpdate = (value) =>{
        console.log(value,"value");

        this.setState({
            fieldVal: value
        })
    }

   
    onChangePost = () => {
        console.log("Rahul")
           
                        console.log("quoteiid",quoteid)
                        console.log("premium",premium)
                        console.log("odpremium",odpremium)
                        console.log("token",token)

                        this.props.onNavigateDetail(quoteid,premium,odpremium,token);
          
            
                      //  this.props.onNavigateBack (liability,message);
                   //   idv = resJson.PREMIUMDETAILS.DATA.IDV
                  
                      
            
  
                /*firstParam: 'yourValue',
                secondParam: 'yourOtherValue',*/
            
    }
    onChangePostt(){
        console.log("navigate",token)
        this.props.onNavigateNinety(resJson,liability,message,quoteid,premium,odpremium,token,responseJson1,idv,enquiryId,totalGrossPremium,TotalPremium); 
    }
    render() {
     resJson = this.props.navigatorRoute.resJson
     liability = this.props.navigatorRoute.liability
     message = this.props.navigatorRoute.message
     quoteid = this.props.navigatorRoute.quoteid
     premium = this.props.navigatorRoute.premium
     odpremium = this.props.navigatorRoute.odpremium
     allResponse = this.props.navigatorRoute.allResponse
     token = this.props.navigatorRoute.token
     enquiryId = this.props.navigatorRoute.enquiryId
     responseJson1 = this.props.navigatorRoute.responseJson1
     idv = this.props.navigatorRoute.idv
     totalGrossPremium = this.props.navigatorRoute.totalGrossPremium
     TotalPremium = this.props.navigatorRoute.TotalPremium
     
     console.log(responseJson1,"amountttt")
    
    //  console.log(token,"token")
    // console.log("idvvvvv",resJson)
    // console.log("liablity",liability)
    // console.log("message",message)
    // console.log("quoteiid",quoteid)
    // console.log("premium",premium)
    // console.log("odpremium",odpremium)
    console.log(idv,"kklllllll")
       // console.log(this.props,"value");
        return (
            <RX.ScrollView style={ _styles.scroll }>
            <RX.View style={ styling.container }>
            <RX.Button onPress={()=> this.onChangePostt()}><RX.Image
                     style={_styles.HomeScrollImageLogo}
                     source={'./src/img/Back.svg'}/>
                <RX.Text style={ styling.welcome }>Digitgo Quote Details</RX.Text>
                </RX.Button>
                </RX.View>
                <RX.View style={ _styles.pageAlign }>
                    <Grid className="hidden-xs">
                        <RX.View style={styling.marTop17 }>
                            <Row className="show-grid" >
                                <Col md={12} xs={12}>
                                    <Col md={2} xs={2}></Col>
                                    <RX.View >
                                        <Col md={8} xs={8}style={ _styles.client }>
                                            <Col md={2} xs={2}>
                                                <RX.Image source={ './src/img/royal.jpg '} style={ [styling.quoteImage] } />
                                            </Col>
                                            <Col  md={4} xs={4} style={styling.marTop17 }>
                                                <div style={styling.clientHead}>Digitgo</div>
                                                <RX.Text style={ styling.sideHead}>
                                                    <div style={styling.tryHead}>IDV:{idv}</div>
                                                </RX.Text>

                                            </Col>
                                            <Col md={3} xs={3}></Col>
                                            <Col md={3} xs={3}>
                                                <RX.Button style={ styling.roundButtonQuote } onPress={ this.props.onNavigateBack }>
                                                    <RX.Text style={ styling.buybuttonText }>
                                                   Rs.{totalGrossPremium}
                                                    </RX.Text>
                                                </RX.Button>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2} xs={2}></Col>
                                </Col>
                            </Row>
                        </RX.View>
                    </Grid>
                    <Grid className="hidden-lg">
                        <RX.View style={ _styles.client }>
                            <Row className="show-grid" style={styling.clientLeft} >

                                <Col xs={3}>
                                    <RX.Image source={ './src/img/Bharti.png' } style={ [styling.image] } />
                                </Col>
                                <Col  xs={5} style={styling.marTop17 }>
                                    <div style={styling.clientHeadxs}>Bajaj Allianz</div>
                                    <RX.Text style={ styling.sideHeadxs }>
                                        <div style={styling.tryHeadxs}>IDV: 1,25,300</div>
                                    </RX.Text>

                                </Col>
                                <Col   xs={3} >
                                    <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }>
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.1,322*
                                        </RX.Text>
                                    </RX.Button>
                                </Col>
                            </Row>
                        </RX.View>
                    </Grid>
                    <Grid>
                        <RX.View >
                           
                            <Row className="show-grid" >
                                <Col md={12} style={styling.marTop17 }>
                                    <Col md={2}></Col>
                                    <Col md={8}>
                                    <div style={styling.clientHeadQuotes}>coverage</div>
                                    <div style={styling.clientHeadQuotes}>Insured Amount</div>
                                    <div style={styling.clientHeadQuotes}>premium</div>

                                    </Col>
                                </Col>
                            </Row>
                        </RX.View>


                        <RX.View >
                            <Row className="show-grid" >
                                <Col md={12} style={styling.marTop17 }>
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>Basic TP Premium</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}>RS.</RX.Text>
                                            </Col>
                                        </Col>
                                     
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                                <Col md={12} >
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>TOTAL_LIABILITY_PREMIUM</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}></RX.Text>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                                <Col md={12} >
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>Employees</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}></RX.Text>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                                <Col md={12} >
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>Paid Drivers</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}></RX.Text>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                                <Col md={12} >
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>Owner Driver</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}></RX.Text>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                            </Row>
                        </RX.View>
                        <RX.View >
                        <Row className="show-grid" >
                            <Col md={12} style={styling.marTop17 }>
                                <Col md={2}></Col>
                                <Col md={8}>
                                    <div style={styling.clientHeadQuotes}>Addon Covers</div>
                                </Col>
                            </Col>
                        </Row>
                    </RX.View>
                        <RX.View >
                            <Row className="show-grid" >
                                <Col md={12} style={styling.marTop17 }>
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>Package Premium</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}>
                                                </RX.Text>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                                <Col md={12} >
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>Policy Expiry Date</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}></RX.Text>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                                <Col md={12} >
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>Policy Start Date</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}>
                                            </RX.Text>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                                <Col md={12} >
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>Policy Term</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}>
</RX.Text>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                                <Col md={12} >
                                    <Col md={2}></Col>
                                    <RX.View>
                                        <Col md={8} style={ _styles.client }>
                                            <Col md={5}>
                                                <RX.Text style={styling.clientHeadts}>Premium without covers</RX.Text>
                                            </Col>
                                            <Col  md={4}></Col>
                                            <Col md={3} >
                                                <RX.Text style={styling.clientHeadts}>
                                                </RX.Text>
                                            </Col>
                                        </Col>
                                    </RX.View>
                                    <Col md={2}></Col>
                                </Col>
                            </Row>
                        </RX.View>
                        <RX.Button style={styling.BUTTON5}   onPress={()=> this.onChangePost() }>BuyPolicy</RX.Button>
                       
                    </Grid>




                    {/*<Grid className="hidden-xs">
                        <RX.View style={ _styles.client }>
                            <RX.Image source={ './src/img/Bharti.png' } style={ [_styles.image] } />

                            <RX.Text style={ _styles.sideHead }>
                                Bharathi Axa Life Insurance
                                <div style={_styles.tryHead}>Single Year Cover Only</div>
                            </RX.Text>
                            <RX.Text style={ _styles.quotes }>
                                IDV
                                <div>NCB</div>
                            </RX.Text>
                            <RX.Text style={ _styles.ncb }>
                                Rs. 20,347
                                <div>NIL</div>
                            </RX.Text>
                            <RX.View style={_styles.nextBtn}>
                                <RX.Button style={ _styles.roundButton } onPress={ this.props.triggerPost }>
                                    <RX.Text style={ _styles.buybuttonText }>
                                        Rs.1,322*
                                    </RX.Text>
                                </RX.Button>
                            </RX.View>
                        </RX.View>
                    </Grid>*/}
                </RX.View>
                
            </RX.ScrollView>
        );
    }

    _playVideo() {
        const video = this.refs['video'];
        if (video) {
            video.mute(true);
            video.play();
        }
    }

    _startProgressIndicator() {
        this._progressTimerToken = window.setInterval(() =>{
            const newProgressValue = (this.state.progressValue + 0.02) % 1;
            this.setState({progressValue: newProgressValue});
        }, 1000 / 15);
    }

    _stopProgressIndicator() {
        if (this._progressTimerToken) {
            window.clearInterval(this._progressTimerToken);
            this._progressTimerToken = undefined;
        }
    }

    // Note that we define this as a variable rather than a normal method. Using this
    // method, we prebind the method to this component instance. This prebinding ensures
    // that each time we pass the variable as a prop in the render function, it will
    // not change. We want to avoid unnecessary prop changes because this will trigger
    // extra work within React's virtual DOM diffing mechanism.
    _onChangeToggle(newValue) {
        this.setState({toggleValue: newValue});
    }
}
