/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';

import OtpPage from './OtpPage';
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField,Checkbox,Button} from 'react-bootstrap';



import {default as RXVideo} from 'reactxp-video';

import ProgressIndicator from './ProgressIndicator';
import ToggleSwitch from './ToggleSwitch';
import Rest from "./RestConfig";
import styling from "./AppStyles";


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
        width:5000,
        height: 72,
        paddingVertical:20,
        marginLeft:-1200,
        marginTop:12
    }),
    pageAlign: RX.Styles.createScrollViewStyle({
        backgroundColor: '#ffffff',
        justifyContent:'center'

    }),
    welcome: RX.Styles.createScrollViewStyle({
        fontSize: 32,
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
        textTransform:'capitalize',
        justifyContent:'center',
        alignself:'center',
        textAlign:'center'
    }),
    sideHead: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:54,
        marginTop:41
    }),
    SideHead: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3e376d',
        textTransform:'capitalize',
        marginLeft:113,
        marginTop:41
    }),
    sideHEad: RX.Styles.createScrollViewStyle({
        fontSize: 18,
        color: '#3e376d',
        textTransform:'capitalize',
        msideHeadarginLeft:60,
        marginTop:41
    }),
    quotes: RX.Styles.createScrollViewStyle({
        fontSize: 13,
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
        height:44,
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
        height:44,
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
    MainContainer:  RX.Styles.createViewStyle({
        flex: 1,
        margin: 10
        
      }),
      
      TextStyle:RX.Styles.createViewStyle({
        fontSize : 25,
         textAlign: 'center'
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
    imAge: RX.Styles.createViewStyle({
        height: 100,
        width: 145,
        backgroundColor:'#FFFFFF',
        marginTop:10,
        marginLeft:8
    }),
    icic: RX.Styles.createViewStyle({
        height: 70,
        width: 100,
        backgroundColor:'#FFFFFF',
        marginTop:10,
    }),
    tata: RX.Styles.createViewStyle({
        height: 70,
        width: 70,
        backgroundColor:'#FFFFFF',
        marginTop:10
    }),
    Assitance: RX.Styles.createTextStyle({
        position: "relative", 
        width: "100",
         height: "100",
          float: "left" ,
          marginleft: 10,
          marginTop:20 
    }),
check: RX.Styles.createTextStyle({
    fontSize: 20,
    textTransform:'capitalize',
    marginTop:62
    }),
    Check: RX.Styles.createTextStyle({
        fontSize: 20,
        textTransform:'capitalize',
        marginTop:52,
        marginRight:40
        }),
}; 
var idv
var resJson
var quoteid
var premium
var allResponse 
var odpremium
var token
// var index
//         var index2
//         var index1
export default class QuotesSelection  extends RX.Component {
    

    _progressTimerToken;

    constructor(props) {
        
        super(props);
        global.index,
        global.index2,
        global.index1
       
        this._playVideo = this._playVideo.bind(this);
        this._onChangeToggle = this._onChangeToggle.bind(this);
        this.state = {
            toggleValue: true,
            progressValue: 0
        };
    }
    SampleFunction=(item)=>{
 
        Alert.alert(item);
     
      }
    componentDidMount() {
    //     console.log(this.props.triggerPost,'function');


    //     let email = "joe@example.com";
    //     let password = "donkeybrains";
    //     let usersPath = "motorIssuePolicy"
    //     console.log(password,"password");
    //    // console.log(Rest.ApiUrl,"RestApiUrl");
    //     fetch('http://192.168.1.7:3000/calculatepremium', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
                
    //             // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOjIwMCwibWVzc2FnZSI6IkxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkiLCJ1c2VycyI6W3siX2lkIjoiNWExYmFhNTYyYzZiOTEzNzYzMmM3ZWVjIiwiZW1haWwiOiJhcnVuLmhvc3NhbWFuaUByYXBpZHF1YmUuY29tIiwicGFzc3dvcmQiOiJqWmFlNzI3SzA4S2FPbUtTZ09hR3p3dy9YVnFHci9QS0VnSU1ranJjYkpJPSIsInJhcGlkSUQiOiJCd2JNd0E2YjFIaEUxNC91TFdweVJXS3EzMytBVUJINnd6UjZtQzh0OUowPSIsInVzZXJPYmplY3QiOnsiZm5hbWUiOiJhcnVuIiwibG5hbWUiOiJob3NzYW1hbmkiLCJwaG9uZSI6IjkxODM2OTk2NDU4MiJ9LCJ1c2VydHlwZSI6IkRpcmVjdCBDbGllbnRzIiwib3RwIjoxMTAwLCJlbmNvZGVkTWFpbCI6IllYSjFiaTVvYjNOellXMWhibWxBY21Gd2FXUnhkV0psTG1OdmJRPT0iLCJjcmVhdGVkX2F0IjoiTW9uIE5vdiAyNyAyMDE3IDExOjMxOjU4IEdNVCswNTMwIChJU1QpIiwiY291bnQiOjAsIl9fdiI6MCwic3RhdHVzIjpbInBob25lIiwiZW1haWwiXX1dLCJpYXQiOjE1MTUwNTA3NDcsImV4cCI6MTUxNTExMDc0N30.xZ_K-mE7WfAszkFrGMATmm9EpCmtYgdOyydVL4HGPVk'
    //         },
            
    //         body: JSON.stringify({

    //                 CALCULATEPREMIUMREQUEST: {
    //                   authenticationDetails: {
    //                     apiKey: "310ZQmv/bYJMYrWQ1iYa7s43084=",
    //                     agentId: "RSAI"
    //                   },
    //                   proposerDetails: {
    //                     title: "Ms",
    //                     firstName: "testxerago",
    //                     lastName: "name",
    //                     emailId: "test@xerago.com",
    //                     mobileNo: "7898732798",
    //                     dateOfBirth: "26/11/1987",
    //                     occupation: "Student",
    //                     nomineeName: "nomineename",
    //                     nomineeAge: "43",
    //                     relationshipWithNominee: "Cousin",
    //                     guardianName: "guardianname",
    //                     guardianAge: "54",
    //                     relationshipwithGuardian: "Mother",
    //                     permanentAddress1: "address1",
    //                     permanentAddress2: "address2",
    //                     permanentAddress3: "address3",
    //                     permanentAddress4: "address4",
    //                     permanentCity: "Chennai",
    //                     permanentPincode: "600032",
    //                     sameAdressReg: "No",
    //                     ResidenceAddressOne: "addressone",
    //                     ResidenceAddressTwo: "addresstwo",
    //                     ResidenceAddressThree: "addressthree",
    //                     ResidenceAddressFour: "addressfour",
    //                     ResidenceCity: "Chennai",
    //                     ResidencePinCode: "600034",
    //                     strStdCode: "044",
    //                     strPhoneNo: "2456984"
    //                   },
    //                   vehicleDetails: {
    //                     vehicleModelCode: "ZWTV310",
    //                     planOpted: "Flexi Plan",
    //                     yearOfManufacture: "2017",
    //                     drivingExperience: "1",
    //                     voluntaryDeductible: "0",
    //                     vehicleManufacturerName: "TVS",
    //                     idv: "65478",
    //                     policyStartDate: "09/02/2018",
    //                     vehicleMostlyDrivenOn: "City roads",
    //                     vehicleRegDate: "09/02/2018",
    //                     vehicleRegisteredInTheNameOf: "Company",
    //                     modelName: "APACHE RTR ABS-2 Seater",
    //                     productName: "BrandNewTwoWheeler",
    //                     companyNameForCar: "xerago",
    //                     engineNumber: "565465466",
    //                     chassisNumber: "5654656",
    //                     isTwoWheelerFinanced: "No",
    //                     vehicleSubLine: "motorCycle",
    //                     fuelType: "Petrol",
    //                     automobileAssociationMembership: "No",
    //                     region: "East Region",
    //                     carRegisteredCity: "24PARGANAS",
    //                     averageMonthlyMileageRun: "1000",
    //                     engineCapacityAmount: "153 CC",
    //                     personalAccidentCoverForUnnamedPassengers: "50000",
    //                     accidentCoverForPaidDriver: "50000",
    //                     legalliabilityToPaidDriver: "Yes",
    //                     legalliabilityToEmployees: "Yes",
    //                     cover_elec_acc: "Yes",
    //                     nonElectricalAccesories: {
    //                       nonelectronicAccessoriesDetails: {
    //                         NameOfElectronicAccessories: "Tyre",
    //                         MakeModel: "TVS",
    //                         Value: "345"
    //                       }
    //                     },
    //                     electricalAccessories: {
    //                       electronicAccessoriesDetails: {
    //                         NameOfElectronicAccessories: "Headlight",
    //                         MakeModel: "Philips",
    //                         Value: "300"
    //                       }
    //                     },
    //                   }
    //                 }
    //                 }),
    //                 }).then((response) => response.json()).then((responseJson) => {
    //              var res = responseJson.response;
    //              resJson = JSON.parse(res)
    //                     console.log(resJson.PREMIUMDETAILS.DATA.IDV,"xvzksdvmkdcfasdc");
    //                    // this.props.onNavigateEight(res);
    //                     idv = resJson.PREMIUMDETAILS.DATA.IDV
    //                     console.log("idididid",idv)
    //                 })
                    
                
                /*firstParam: 'yourValue',
                secondParam: 'yourOtherValue',*/
            
        
    }
    save=(value)=> {
        // console.log(this.refs.check_me.checked);
        var input= new Array()
         input[1]=this.refs.check_me1.checked;
    
         input[2]=this.refs.check_me2.checked;
    
         input[3]=this.refs.check_me3.checked;
    
         input[4]=this.refs.check_me4.checked;

         input[5]=this.refs.check_me5.checked;

        //  if(input[1] || input[2] || input[3] || input[4] ||input[5] ==false)
        //     {
        //  this.setState({TextValue : "0  selected"}) ;
        //     }
    
        var count =0;
        this.setState({TextValue : +count +"  selected"}) ;
        for(i=0;i<6;i++)
        {
       
        if(input[i]==true)
        {
        count =count + 1;
        }
       
        
        } 
        console.log(+count + "is checked")
        this.setState({TextValue : +count +"  selected"}) ;
        
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
//  onCheckBoxPress = (value) => {
//     console.log(this);
//     this.setState({ pressed: false, value, list: ["test4", "test5", "test6"]});
//   }
    // onChangeliability  = () => {
    //     this.props.onNavigateThirty(liability,resJson,quoteid,premium,allResponse,odpremium,token);
        
        

       
    // }
    onChangeliability  = (value) => {
        var input= new Array()


        input[2]=this.refs.check_me1.checked;
        console.log(this.refs.check_me1.checked)
       
    
        input[3]=this.refs.check_me2.checked;
    
        input[4]=this.refs.check_me3.checked;
        if(this.refs.check_me1.checked)
        {
            global.index=1
            console.log(global.index);
           }
        else{
            global.index=0
            console.log(global.index);
        }
        if(this.refs.check_me2.checked)
        {
            global.index1=1
        }
        if(this.refs.check_me3.checked)
        {
            global.index2=1
        }
   this.props.onNavigateThirty(liability,resJson,quoteid,premium,allResponse,odpremium,token);
        

       
    
    }
    // onChangePost  = () => {
    //     console.log(token,"tokenab")
    //     this.props.onNavigateSuperCar(token);
    // }

    render() {
       
     resJson = this.props.navigatorRoute.resJson
     liability = this.props.navigatorRoute.liability
     allResponse = this.props.navigatorRoute.allResponse
     quoteid =  this.props.navigatorRoute.quoteid
     premium = this.props.navigatorRoute.premium
     odpremium = this.props.navigatorRoute.odpremium
     token = this.props.navigatorRoute.token
  
        console.log(token,"token")
    console.log("idvvvvv",resJson)
    console.log("liablity",liability)
   // console.log("message",message)
    console.log("quoteiid",quoteid)
    console.log("premium",premium)
    console.log("allResponse",allResponse)
    console.log("odpremium",odpremium)
    // var SampleNameArray = [ "Pankaj", "Rita", "Mohan", "Amit", "Babulal", "Sakshi" ];
        return (
            <RX.ScrollView style={ _styles.scroll }>
                <RX.View style={ styling.container }>
                <RX.Button  onPress={()=> this.onChangePost()}><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                    <RX.Text style={styling.welcome }>New Motor Insurance </RX.Text>
                    </RX.Button>
                    
                </RX.View>
                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.flute }>
                        <RX.Text style={ _styles.head }>
                            view and compare quotes
                        </RX.Text>
                    </RX.View>
                    {/* <RX.View style={_styles.MainContainer}>
 
 { SampleNameArray.map((item, key)=>(
 <RX.Text key={key} style={_styles.TextStyle} onPress={ this.SampleFunction.bind(this, item) }> { item } </RX.Text>)
 )}

</RX.View> */}
{/* <Content>
          <List dataArray={this.state.list} renderRow={(data) =>
              <ListItem>
                <CheckBox onPress={() => this.onCheckBoxPress(data)} checked={this.state.pressed} />
                <Body>
                  <Text>{data}</Text>
                </Body>
              </ListItem>
          } />
      </Content> */}
                    <Grid className="hidden-xs">
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/royal.jpg' } style={ [_styles.imAge] } >
                        <div  className="checkbox" style={_styles.check}><input type="checkbox" ref="check_me1" onClick={this.save}/>Compare</div>
                         </RX.Image>
                        <RX.Text style={ _styles.sideHead }>
                            Royal Sundaram
                            <div style={_styles.tryHead}>Single Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quoted }>
                          IDV:{resJson}
                          <div>Package Premium</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                        <div>NCB</div>

<div>{odpremium.PACKAGE_PREMIUM}</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={()=> this.onChangeiability()}>
                                <RX.Text style={ _styles.buybuttonText }>
                                {odpremium.GROSS_PREMIUM}
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                    </Grid>
                </RX.View>
                <Grid className="hidden-xs">
                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/icici.png' } style={ [_styles.icic] } >
                        <div  className="checkbox" style={_styles.check}><input type="checkbox" ref="check_me2" onClick={this.save}/>Compare</div>
                         </RX.Image>
                        <RX.Text style={ _styles.SideHead }>
                             ICICI LOMBARD
                            <div style={_styles.tryHead}>Two Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quoted }>
                            IDV
                            <div>NCB</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 20,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateSixth }>
                                <RX.Text style={ _styles.buybuttonText }>
                                    Rs.1,634*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>
                </Grid>

                <Grid className="hidden-xs">
                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/tata.png' } style={ [styling.JUKE] } >
                        <div  className="checkbox" style={_styles.check}><input type="checkbox" ref="check_me3" onClick={this.save}/>Compare</div>
                         </RX.Image>
                        <RX.Text style={ _styles.SideHead }>
                           Tata AIG
                            <div style={_styles.tryHead}>Two Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quoted }>
                            IDV
                            <div>NCB</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 23,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateSixth }>
                                <RX.Text style={ _styles.buybuttonText }>
                                    Rs.1,834*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>
                </Grid>

                <Grid className="hidden-xs">
                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/Sbi.png' } style={ [_styles.image] } >
                       <div  className="checkbox" style={_styles.check}><input type="checkbox" ref="check_me4" onClick={this.save}/>Compare</div>
                         </RX.Image>
                        <RX.Text style={ _styles.SideHead }>
                          Bharathi AXP
                            <div style={_styles.tryHead}>Two Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quoted }>
                            IDV
                            <div>NCB</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 28,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateSixth }>
                                <RX.Text style={ _styles.buybuttonText }>
                                    Rs.1,934*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>
                </Grid>

                <Grid className="hidden-xs">
                <RX.View style={ _styles.pageAlign }>
                    <RX.View style={ _styles.client }>
                        <RX.Image source={ './src/img/Bharti.png' } style={ [_styles.image] } >
                        <div  className="checkbox" style={_styles.check}><input type="checkbox" ref="check_me5" onClick={this.save}/>Compare</div>
                         </RX.Image>
                        <RX.Text style={ _styles.SideHead }>
                            Reliance AXP
                            <div style={_styles.tryHead}>Two Year Cover Only</div>
                        </RX.Text>
                        <RX.Text style={ _styles.quoted }>
                            IDV
                            <div>NCB</div>
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 23,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={_styles.nextBtn}>
                            <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateSixth }>
                                <RX.Text style={ _styles.buybuttonText }>
                                    Rs.1,834*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>
                </Grid>

                <Grid className="hidden-lg">
                <RX.View style={ _styles.client }>
                        <Row className="show-grid" style={styling.clientLeft} >

                            <Col xs={4}>
                                <RX.Image source={ './src/img/bajaj.png' } style={ [styling.image] } />
                            </Col>
                            <Col  xs={4} style={styling.marTop17 }>
                                <div style={styling.clientHeadxs}>Bajaj Allianz</div>
                                <RX.Text style={ styling.sideHeadxs }>
                                    <div style={styling.tryHeadxs}>IDV: 1,25,300</div>
                                </RX.Text>

                            </Col>
                            <Col   xs={4} >
                                <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateSixth }>
                                    <RX.Text style={ styling.buybuttonText }>
                                        Rs.1,322*
                                    </RX.Text>
                                </RX.Button>
                            </Col>
                        </Row>
                </RX.View>
                </Grid>
                <Grid className="hidden-lg">
                    <RX.View style={ _styles.client }>
                        <Row className="show-grid" style={styling.clientLeft} >

                            <Col xs={4}>
                                <RX.Image source={ './src/img/icici.png' } style={ [styling.image] } />
                            </Col>
                            <Col  xs={4} style={styling.marTop17 }>
                                <div style={styling.clientHeadxs}>Bajaj Allianz</div>
                                <RX.Text style={ styling.sideHeadxs }>
                                    <div style={styling.tryHeadxs}>IDV: 1,25,300</div>
                                </RX.Text>

                            </Col>
                            <Col   xs={4} >
                                <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }>
                                    <RX.Text style={ styling.buybuttonText }>
                                        Rs.1,322*
                                    </RX.Text>
                                </RX.Button>
                            </Col>
                        </Row>
                    </RX.View>
                </Grid>
                <Grid className="hidden-lg">
                <RX.View style={ _styles.client }>
                    <Row className="show-grid" style={styling.clientLeft} >

                        <Col xs={4}>
                            <RX.Image source={ './src/img/tata.png' } style={ [styling.image] } />
                        </Col>
                        <Col  xs={4} style={styling.marTop17 }>
                            <div style={styling.clientHeadxs}>Bajaj Allianz</div>
                            <RX.Text style={ styling.sideHeadxs }>
                                <div style={styling.tryHeadxs}>IDV: 1,25,300</div>
                            </RX.Text>

                        </Col>
                        <Col   xs={4} >
                            <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ styling.buybuttonText }>
                                    Rs.1,322*
                                </RX.Text>
                            </RX.Button>
                        </Col>
                    </Row>
                </RX.View>
            </Grid>
                <Grid className="hidden-lg">
                    <RX.View style={ _styles.client }>
                        <Row className="show-grid" style={styling.clientLeft} >

                            <Col xs={4}>
                                <RX.Image source={ './src/img/bajaj.png' } style={ [styling.image] } />
                            </Col>
                            <Col  xs={4} style={styling.marTop17 }>
                                <div style={styling.clientHeadxs}>Bajaj Allianz</div>
                                <RX.Text style={ styling.sideHeadxs }>
                                    <div style={styling.tryHeadxs}>IDV: 1,25,300</div>
                                </RX.Text>

                            </Col>
                            <Col   xs={4} >
                                <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }>
                                    <RX.Text style={ styling.buybuttonText }>
                                        Rs.1,322*
                                    </RX.Text>
                                </RX.Button>
                            </Col>
                        </Row>
                    </RX.View>
                    
                </Grid>
                <RX.View style={ styling.container }>
{/* <RX.Button   onPress={()=> this.onChangePost()}><RX.Image */}

            <RX.Text  placeholder="0 selected" style={ styling.sideText1 } > { this.state.TextValue }  </RX.Text>

       

            <RX.Button className="btn btn-default" style={styling.BUTTON41} onPress={()=> this.onChangeliability()}>Compare

         {/* style={_styles.HomeScrollImageLogo}
         source={'./src/img/Back.svg'}/>
    <RX.Text style={ styling.welcome }>New Motor Insurance </RX.Text> */}
    </RX.Button>
    
    
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

    _stopProgressIndiacator() {
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
