/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField,Checkbox,Button} from 'react-bootstrap';
const styles = {
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
    container: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#1a153b',
        padding:5
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 40,
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
    client: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientSec: RX.Styles.createViewStyle({
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor:'#ffffff',
        // padding:5,
        // flex:1,
        // flexDirection:'row',
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientNorm: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientName: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientText: RX.Styles.createViewStyle({
        color:'#413a6f',
        fontSize:'10',
        alignItems:'right'
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientTextxs: RX.Styles.createViewStyle({
        color:'#413a6f',
        fontSize:'8',
        marginBottom:'15'
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientedText: RX.Styles.createViewStyle({
        color:'#000000',
        fontSize:'10'
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientTexted: RX.Styles.createViewStyle({
        color:'#413a6f',
        fontSize:'10',
        marginTop:'39'
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    clientNcb: RX.Styles.createViewStyle({
        color:'#413a6f',
        fontSize:'10',
        marginTop:42
        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    subText: RX.Styles.createViewStyle({
        color:'#fa774d',
        fontSize:'10',
        marginTop:22

        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    subPer: RX.Styles.createViewStyle({
        color:'#546e7a',
        fontSize:'10',
        marginTop:42

        // borderBottomWidth:1,
        // borderColor:"#cccccc"
    }),
    imageAlign: RX.Styles.createViewStyle({
        marginLeft:100
    }),
    imageAlignement: RX.Styles.createViewStyle({
        marginLeft:100,
        marginTop:168
    }),
    imageAlignementxs: RX.Styles.createViewStyle({
        marginTop:168
    }),
    imageAligned: RX.Styles.createViewStyle({
        marginLeft:105
    }),
    /* sideHead: RX.Styles.createScrollViewStyle({
         fontSize: 18,
         color: '#3e376d',
         textTransform:'capitalize',
         marginLeft:54,
         marginTop:41
     }),
     tryHead: RX.Styles.createScrollViewStyle({
         fontSize: 15,
         color: '#3e376d',
         textTransform:'capitalize'
     }),*/
    image: RX.Styles.createViewStyle({
        height: 100,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:10
    }),
    marTopxs:RX.Styles.createViewStyle({
        marginTop:58,
        color:'#fa774d'
    }),
};
var liability
var resJson
var message
var quoteid
var premium
var odpremium
var allResponse
var token
export default class CompareQuotes extends RX.Component{
    constructor(props) {
        super(props);
        this.state = {
            data:[
               {
                  component: 'First...',
                  id: 1
               },
               {
                  component: 'Second...',
                  id: 2
               },
               {
                  component: 'Third...',
                  id: 3
               }
            ]
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
    render(){
        <div>
        <div>
           {this.state.data.map((dynamicComponent, i) => <Content 
              key = {i} componentData = {dynamicComponent}/>)}
        </div>
     </div>
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
    onChangePostCompare = () => {
        this.props.onNavigateCompare(allResponse,liability,resJson,message,quoteid,premium,odpremium,token);
    
    
    }
    onChangePost = () => {
        this.props.onNavigateTwenty(allResponse,resJson,liability,message,quoteid,premium,odpremium,token);
    
    
    }
    onNavigateSixth = () => {
        let {
            testValue = 'read'
        } = this.state;

        let email = "joe@example.com";
        let password = "donkeybrains";
        let myApiUrl = "http://www.example.com/api"
        let usersPath = "users"
        console.log(testValue,"testValue");
        console.log(password,"password");
        console.log(Rest.ApiUrl,"RestApiUrl");
        fetch(`${Rest.ApiUrl}/${usersPath}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {email, password}
                /*firstParam: 'yourValue',
                secondParam: 'yourOtherValue',*/
            })
        });
    }
    

    render() {
         liability = this.props.navigatorRoute.liability
         resJson = this.props.navigatorRoute.resJson
         message = this.props.navigatorRoute.message
         quoteid = this.props.navigatorRoute.quoteid
         premium = this.props.navigatorRoute.premium
         odpremium = this.props.navigatorRoute.odpremium
         allResponse = this.props.navigatorRoute.allResponse
         token = this.props.navigatorRoute.token
         console.log(token,"token")
        console.log("comparequotes",liability)
        console.log("resJson",resJson)
        console.log("quoteiid",quoteid)
        console.log("premium",premium)
        console.log("odpremium",odpremium)
        
        return (
            <div>
            <div>{this.props.componentData.component}</div>
            <div>{this.props.componentData.id}</div>
        
            <RX.ScrollView style={ styles.scroll }>
                <RX.View style={ styling.container }>
                <RX.Button  onPress={()=> this.onChangePost()}><RX.Image
                         style={styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                    <RX.Text style={ styles.welcome }>
                       COMPARE QUOTES
                    </RX.Text>
                    </RX.Button>
                </RX.View>
                <RX.View style={styles.clientSec}>
                    <Row className="show-grid hidden-xs">
                        <Col  md={3} style={styling.marTop}>
                            {/*<RX.Text>Test</RX.Text>*/}
                            {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                       <Col  md={3} style={styling.marTop}>
                            {/*<RX.Text>Test1</RX.Text>*/}
                            <RX.Image source={ './src/img/royal.jpg' } style={ [styles.image ] } />
                            {/* <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            {/*<RX.Text>Test2</RX.Text>*/}
                            <RX.Image source={ './src/img/icici.png' } style={ [styles.image] } />
                            {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            {/*<RX.Text>Test3</RX.Text>*/}
                            <RX.Image source={ './src/img/Sbi.png' } style={ [styles.image] } />
                            {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                        {/*<Col  md={6} style={styling.marTop}>
                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                try
                            </RX.Button>

                        </Col>*/}
                    </Row>

                    <Row className="show-grid hidden-lg">
                        <Col  xs={4} style={styling.marTop}>
                            {/*<RX.Text>Test1</RX.Text>*/}
                            <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />
                            {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                        <Col  xs={4} style={styling.marTop}>
                            {/*<RX.Text>Test2</RX.Text>*/}
                            <RX.Image source={ './src/img/icici.png' } style={ [styles.image] } />
                            {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                        <Col  xs={4} style={styling.marTop}>
                            {/*<RX.Text>Test3</RX.Text>*/}
                            <RX.Image source={ './src/img/Sbi.png' } style={ [styles.image] } />
                            {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                        </Col>
                        {/*<Col  md={6} style={styling.marTop}>
                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                try
                            </RX.Button>

                        </Col>*/}
                    </Row>

                    <Row className="show-grid hidden-xs">
                        <Col  md={3} style={styling.marTop}>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.clientText]}>Royal Sundaram</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.clientText]}>Ergo Insurance</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.clientText]}>Oriental Insurance</RX.Text>
                        </Col>

                    </Row>
                    <Row className="show-grid hidden-lg">
                        <Col  xs={4} style={styling.marTop}>
                            <RX.Text style={[styles.clientTextxs]}>Bharati Insurance</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop}>
                            <RX.Text style={[styles.clientTextxs]}>Ergo Insurance</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop}>
                            <RX.Text style={[styles.clientTextxs]}>Oriental Insurance</RX.Text>
                        </Col>

                    </Row>

                    {/* <Row className="show-grid">
                        <Col  md={3} style={styling.marTop}>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.clientText]}>Bharati Insurance</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.clientText]}>Ergo Insurance</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.clientText]}>Oriental Insurance</RX.Text>
                        </Col>
                    </Row>*/}

                    <Row className="show-grid hidden-xs">
                        <Col  md={3} style={styling.marTopcs}>
                            <RX.Text style={[styles.clientText]}>Basic Permium:</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>{liability.BASIC_PREMIUM_INCLUDING_PREMIUM_FOR_TPPD}</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>3,41,402</RX.Text>
                        </Col>sic 
                    </Row>

                    <Row className="show-grid hidden-lg">
                        <Col  xs={4} style={styling.marTop}>
                            <div style={[styles.clientTextxs]}>Sum Insured</div>
                            <RX.Text style={[styles.subText]}>3,21,402</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop40}>
                            <RX.Text style={[styles.clientTextxs]}></RX.Text>
                            <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop40}>
                            <RX.Text style={[styles.clientTextxs]}></RX.Text>
                            <RX.Text style={[styles.subText]}>3,41,402</RX.Text>
                        </Col>
                    </Row>

                    <Row className="show-grid hidden-lg">
                        <Col  xs={4} style={styling.marTop}>
                            <div style={[styles.clientTextxs]}>Health Checkup</div>
                            <RX.Text style={[styles.subText]}>3,21,402</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop40}>
                            <RX.Text style={[styles.clientTextxs]}></RX.Text>
                            <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop40}>
                            <RX.Text style={[styles.clientTextxs]}></RX.Text>
                            <RX.Text style={[styles.subText]}>3,41,402</RX.Text>
                        </Col>
                    </Row>

                    <Row className="show-grid hidden-lg">
                        <Col  xs={4} style={styling.marTop}>
                            <div style={[styles.clientTextxs]}>Cancer Care Live</div>
                            <RX.Text style={[styles.subText]}>3,21,402</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop40}>
                            <RX.Text style={[styles.clientTextxs]}></RX.Text>
                            <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop40}>
                            <RX.Text style={[styles.clientTextxs]}></RX.Text>
                            <RX.Text style={[styles.subText]}>3,41,402</RX.Text>
                        </Col>
                    </Row>

                    <Row className="show-grid hidden-lg">
                        <Col  xs={4} style={styling.marTop}>
                            <div style={[styles.clientTextxs]}>Dengue Feaver</div>
                            <RX.Text style={[styles.subText]}>3,21,402</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop40}>
                            <RX.Text style={[styles.clientTextxs]}></RX.Text>
                            <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                        </Col>
                        <Col  xs={4} style={styling.marTop40}>
                            <RX.Text style={[styles.clientTextxs]}></RX.Text>
                            <RX.Text style={[styles.subText]}>3,41,402</RX.Text>
                        </Col>
                    </Row>



                    <Row className="show-grid hidden-xs">
                        <Col  md={3} style={styling.marTopcs}>
                            <RX.Text style={[styles.clientText]}> Cover To Paid Driver</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>{liability.PA_COVER_TO_PAID_DRIVER}
                            </RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>20%</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>35%</RX.Text>
                        </Col>
                    </Row>

                    <Row className="show-grid hidden-xs">
                        <Col  md={3} style={styling.marTopcs}>
                            <RX.Text style={[styles.clientText]}>Total Liability premium</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>{liability.TOTAL_LIABILITY_PREMIUM}

                            </RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>20%</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>35%</RX.Text>
                        </Col>
                    </Row>

                    <Row className="show-grid hidden-xs">
                        <Col  md={3} style={styling.marTopcs}>
                            <RX.Text style={[styles.clientText]}>Employees</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>{liability.TO_EMPLOYESES}</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>Nil</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>Nil</RX.Text>
                        </Col>
                    </Row>

                    <Row className="show-grid hidden-xs">
                        <Col  md={3} style={styling.marTopcs}>
                            <RX.Text style={[styles.clientText]}>Paid Drivers</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>{liability.TO_PAID_DRIVERS}
                        </RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>Nil</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>Nil</RX.Text>
                        </Col>
                    </Row>

                    <Row className="show-grid hidden-xs">
                        <Col  md={3} style={styling.marTopcs}>
                            <RX.Text style={[styles.clientText]}>Owner Driver</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>{liability.UNDER_SECTION_III_OWNER_DRIVER}
:
</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>Nil</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>Nil</RX.Text>
                        </Col>
                    </Row>

                    <Row className="show-grid hidden-xs">
                        <Col  md={3} style={styling.marTopcs}>
                            <RX.Text style={[styles.clientText]}>Umnnamed Passengers</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>{liability.UNNAMED_PASSENGRS}

</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>Nil</RX.Text>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.Text style={[styles.subText]}>Nil</RX.Text>
                        </Col>
                    </Row>
                </RX.View>

                
                {/*<RX.View style={ styles.client }>
                    <Row className="show-grid" className="hidden-xs">
                        <Col  md={3} style={styling.marTop}>
                            <RX.View style={[styles.imageAlignement]}>
                                <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />
                                <RX.Text style={[styles.clientText]}>Bharati Insurance</RX.Text>
                                <RX.Text style={[styles.clientTexted]}>Sum Insured</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Health Checkup</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Cancer Care Liver</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Denuge Care</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Hospitalistaion at Home</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Organ Donor Expenes</RX.Text>
                            </RX.View>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.View style={[styles.imageAlign]}>
                                <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />
                                <RX.Text style={[styles.clientText]}>Bharati Insurance</RX.Text>
                                <RX.Text style={[styles.subText]}>3,21,402</RX.Text>
                                <RX.Text style={[styles.subPer]}>10%</RX.Text>
                                <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                                <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                                <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                                <RX.Text style={[styles.subPer]}>2 Claims Per Year</RX.Text>
                            </RX.View>

                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.View style={[styles.imageAlign]}>

                                <RX.Image source={ './src/img/ergo.png' } style={ [styles.image] } />
                                <RX.Text style={[styles.clientText]}>Ergo Insurance</RX.Text>
                                <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                                <RX.Text style={[styles.subPer]}>15%</RX.Text>
                                <RX.Text style={[styles.subPer]}>3 Garages Near You</RX.Text>
                                <RX.Text style={[styles.subPer]}>3,45,000</RX.Text>
                                <RX.Text style={[styles.subPer]}>3,45,000</RX.Text>
                                <RX.Text style={[styles.subPer]}>1 Claims Per Year</RX.Text>
                            </RX.View>
                        </Col>
                        <Col  md={3} style={styling.marTop}>
                            <RX.View style={[styles.imageAlign]}>

                                <RX.Image source={ './src/img/oriental.png' } style={ [styles.image] } />
                                <RX.Text style={[styles.clientText]}>Oriental Insurance</RX.Text>
                                <RX.Text style={[styles.subText]}>3,10,402</RX.Text>
                                <RX.Text style={[styles.subPer]}>20%</RX.Text>
                                <RX.Text style={[styles.subPer]}>2 Garages Near You</RX.Text>
                                <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                                <RX.Text style={[styles.subPer]}>3.60,000</RX.Text>
                                <RX.Text style={[styles.subPer]}>3 Claims Per Year</RX.Text>
                            </RX.View>
                        </Col>
                    </Row>
                    <Row className="show-grid" className="hidden-lg">
                        <Col  xs={3} style={styling.marTop}>
                            <RX.View style={[styles.imageAlignementxs]}>
                                <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />
                                <RX.Text style={[styles.clientText]}>Bharati Insurance</RX.Text>
                                <RX.Text style={[styles.clientTexted]}>Sum Insured</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Health Checkup</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Cancer Care Liver</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Denuge Care</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Hospitalistaion at Home</RX.Text>
                                <RX.Text style={[styles.clientNcb]}>Organ Donor Expenes</RX.Text>

                            </RX.View>
                        </Col>
                        <Col  xs={4} style={styling.marTop}>
                            <RX.View>
                                <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />
                                <RX.Text style={[styles.clientText]}>Bharati Insurance</RX.Text>
                                <RX.Text style={[styles.clientedText]}>Sum Insured</RX.Text>
                                <RX.Text style={[styles.subText]}>3,21,402</RX.Text>
                                <RX.Text style={[styles.clientedText]}>Health Checkup</RX.Text>
                                <RX.Text style={[styles.subPer]}>10%</RX.Text>
                                <RX.Text style={[styles.clientedText]}>Cancer Care Liver</RX.Text>
                                <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                                <RX.Text style={[styles.clientedText]}>Denuge Care</RX.Text>
                                <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                                <RX.Text style={[styles.clientedText]}>Hospitalistaion at Home</RX.Text>
                                <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                                <RX.Text style={[styles.clientedText]}>Organ Donor Expenes</RX.Text>
                                <RX.Text style={[styles.subPer]}>2 Claims Per Year</RX.Text>
                            </RX.View>

                        </Col>
                        <Col  xs={4} style={styling.marTop}>
                            <RX.View>

                                <RX.Image source={ './src/img/ergo.png' } style={ [styles.image] } />
                                <RX.Text style={[styles.clientText]}>Ergo Insurance</RX.Text>
                                <RX.Text style={[styles.clientText]}></RX.Text>
                                <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>15%</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>3 Garages Near You</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>3,45,000</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>3,45,000</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>1 Claims Per Year</RX.Text>
                            </RX.View>
                        </Col>
                        <Col  xs={4} style={styling.marTop}>
                            <RX.View>

                                <RX.Image source={ './src/img/oriental.png' } style={ [styles.image] } />
                                <RX.Text style={[styles.clientText]}>Oriental Insurance</RX.Text>
                                <RX.Text style={[styles.clientText]}></RX.Text>
                                <RX.Text style={[styles.subText]}>3,10,402</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>20%</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>2 Garages Near You</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>3.60,000</RX.Text>
                                <RX.Text style={[styles.clientedText]}></RX.Text>
                                <RX.Text style={[styles.subPer]}>3 Claims Per Year</RX.Text>
                            </RX.View>
                        </Col>
                    </Row>
                </RX.View>*/}




                {/*<RX.View style={ styles.client }>
                    <RX.View style={[styles.imageAlignement]}>
                        <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />
                        <RX.Text style={[styles.clientText]}>Bharati Insurance</RX.Text>
                        <RX.Text style={[styles.clientTexted]}>Insured Declared Value</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>NCB</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Cashless Garage</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Advance Cash</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>TP Permium</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Zero Depreciation</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Already Included Addons</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Own Damage</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Owner / Driver PA Cover</RX.Text>
                        <RX.Text style={[styles.clientNcb]}>Unnamed Passenger Cover</RX.Text>

                    </RX.View>

                    <RX.View style={[styles.imageAlign]}>
                        <RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />
                        <RX.Text style={[styles.clientText]}>Bharati Insurance</RX.Text>
                        <RX.Text style={[styles.subText]}>3,21,402</RX.Text>
                        <RX.Text style={[styles.subPer]}>10%</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>2 Claims Per Year</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                        <RX.Text style={[styles.subPer]}>Accessible</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                    </RX.View>

                    <RX.View style={[styles.imageAlign]}>

                        <RX.Image source={ './src/img/ergo.png' } style={ [styles.image] } />
                        <RX.Text style={[styles.clientText]}>Ergo Insurance</RX.Text>
                        <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                        <RX.Text style={[styles.subPer]}>15%</RX.Text>
                        <RX.Text style={[styles.subPer]}>3 Garages Near You</RX.Text>
                        <RX.Text style={[styles.subPer]}>3,45,000</RX.Text>
                        <RX.Text style={[styles.subPer]}>3,45,000</RX.Text>
                        <RX.Text style={[styles.subPer]}>1 Claims Per Year</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>Accessible</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                    </RX.View>
                    <RX.View style={[styles.imageAlign]}>

                        <RX.Image source={ './src/img/oriental.png' } style={ [styles.image] } />
                        <RX.Text style={[styles.clientText]}>Oriental Insurance</RX.Text>
                        <RX.Text style={[styles.subText]}>3,10,402</RX.Text>
                        <RX.Text style={[styles.subPer]}>20%</RX.Text>
                        <RX.Text style={[styles.subPer]}>2 Garages Near You</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>3.60,000</RX.Text>
                        <RX.Text style={[styles.subPer]}>3 Claims Per Year</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                        <RX.Text style={[styles.subPer]}>Accessible</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                    </RX.View>
                    <RX.View style={[styles.imageAligned]}>

                        <RX.Image source={ './src/img/united.png' } style={ [styles.image] } />
                        <RX.Text style={[styles.clientText]}>United Insurance</RX.Text>
                        <RX.Text style={[styles.subText]}>3,08,402</RX.Text>
                        <RX.Text style={[styles.subPer]}>25%</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>Nil</RX.Text>
                        <RX.Text style={[styles.subPer]}>3,55,789</RX.Text>
                        <RX.Text style={[styles.subPer]}>1 Claims Per Year</RX.Text>
                        <RX.Text style={[styles.subPer]}>NIL</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                        <RX.Text style={[styles.subPer]}>Accessible</RX.Text>
                        <RX.Text style={[styles.subPer]}>N/A</RX.Text>
                    </RX.View>


                </RX.View>*/}
                <RX.View style={ styles.clientNorm }></RX.View>

               
            <RX.Button style={styling.BUTTON4}  onPress={()=> this.onChangePostCompare()}>Buy Policy</RX.Button>
                

                {/*<RX.View style={ styles.container }>
                    <RX.Text style={ styles.welcome }>
                        Page 3
                    </RX.Text>
                    <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateForward }>
                        <RX.Text style={ styles.buttonText }>
                            Next
                        </RX.Text>
                    </RX.Button>
                </RX.View>*/}
            </RX.ScrollView>
            </div>
        );
    }
}