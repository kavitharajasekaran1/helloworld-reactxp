/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import Rest from './RestConfig';
import QuotesSelection from './QuotesSelection';
import { Navigator } from 'reactxp-navigation';
import DatePicker from 'react-datepicker';
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,StyleSheet,FormControl,minDate,maxDate,HelpBlock,DateTimeField,Checkbox} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import moment from 'moment';
import ReactDom from 'react-dom';
import swal from 'sweetalert';




/*const {
    Welcome
} = TodoStyles;*/
const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#ffffff'
    }),
    roundButton: RX.Styles.createViewStyle({
        margin: 16,
        borderRadius: 16,
        backgroundColor: '#ff0000ab',
        justifyContent: 'CENTER'
        }),
        read:RX.Styles.createScrollViewStyle({
            borderRadius:15,
            width:"100%",
            marginLeft:20,
            align:'center'
        }),
        SCROLL: RX.Styles.createScrollViewStyle({
            alignSelf: 'stretch',
            backgroundColor: '#2222c357',
            marginTop:62,
            width:1126,
            justifyContent:'center'

        }),
        HomeScrollImageLogo: RX.Styles.createImageStyle({
            width:3000,
            height: 65,
            paddingVertical:20,
            marginLeft:-1200,
            marginTop:30,
            paddingTop:30,
        }),
       Form:RX.Styles.createScrollViewStyle({
                display: 'block',
                 width: '80%',
                 height: 34,
                 // padding: 6px 12px;
                  fontSize: 14,
                // line: 1.42857143;
                color: "#555",
                backgroundColor: "white",
                borderWidth:1,
                borderColor:"#ccc",
                borderRadius: 4,
                marginLeft: 296,
                textAlign: 'center'
            
        }),
    
        
}

//var message
var quoteid
var premium
var token
export default class VehicleDetails extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
                      quoteid:this.props.navigatorRoute.quoteid,
                      premium:this.props.navigatorRoute.mypremium,
                      title: 'Ms',
                      firstname: 'Neelima',
                      lastname: 'Rani',
                      emailId: 'neeluneelima67@gmail.com',
                      mobileNo: '9553715856',
                      dateofbirth: '03/12/1994',
                      occupation: 'Student',
                      nomineeName: 'Harini',
                      nomineeAge: '50',
                      relationshipWithNominee: 'Cousin',
                      guardianName: 'Prakhya',
                      guardianAge: '60',
                      relationshipwithGuardian: 'Sister',
                      permanentAddress1: 'Guntupalli',
                      permanentAddress2: 'Vijayawada',
                      permanentAddress3: 'Krishna',
                      permanentAddress4: 'Ibrahimpatnam',
                      permanentCity: 'Chennai',
                      permanentPincode: '600034',
                      sameAdressReg:'No',
                      ResidenceAddressOne: 'Hyderabad',
                      ResidenceAddressTwo: 'Guntupalli',
                      ResidenceAddressThree: 'Krishna',
                      ResidenceAddressFour: 'Kurnool',
                      ResidenceCity: 'Chennai',
                      ResidencePinCode: '600032',
                      strStdCode: '0866',
                      strPhoneNo: '2831608',
                      vehicleModelCode: 'ZWTV310',
                      planOpted: 'Fixed Plan',
                      yearOfManufacture: '2017',
                      drivingExperience: '1',
                      voluntaryDeductible:'0',
                      vehicleManufacturerName: 'TVS',
                      idv: '87164',
                      policyStartDate: '29/06/2018',
                      vehicleMostlyDrivenOn: 'Roads',
                      vehicleRegDate: '29/06/2018',
                      vehicleRegisteredInTheNameOf: 'Company',
                      modelName: 'APACHE RTR ABS-2 Seater',
                      productName: 'BrandNewTwoWheeler',
                      companyNameForCar: 'xerago',
                      engineNumber: '565465466',
                      chassisNumber: '56546546',
                      isTwoWheelerFinanced: 'No',
                      vehicleSubLine: 'motorCycle',
                      registrationchargesRoadtax: 'No',
                      fuelType: 'Petrol',
                      automobileAssociationMembership: 'No',
                      region: 'East Region',
                      carRegisteredCity: '24PARGANAS',
                      isProductCheck: 'No',
                      engineCapacityAmount: '153 CC',
                      personalAccidentCoverForUnnamedPassengers: '5000',
                      accidentCoverForPaidDriver: '5000',
                      legalliabilityToPaidDriver: 'Yes',
                      legalliabilityToEmployees: 'Yes',
                      cover_elec_acc: 'Yes',
                      NameOfElectronicAccessories: 'Tyre',
                      MakeModel: 'TVS',
                      Value:'345',
                      NameOfElectronicAccessories: 'Handle',
                          MakeModel: 'HONDA',
                          Value: '365',
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


    
componentDidMount(){

   this.onChangePost = () => {
        console.log("Rahul")

         fetch('http://localhost:8082/gproposalrequest', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },
        
            body: JSON.stringify({
                GPROPOSALREQUEST: {
                    "quoteId": this.state.quoteid,
                    "premium": this.state.premium,
                    "emailId": this.state. emailId,
                    authenticationDetails: {
                      apiKey: "310ZQmv/bYJMYrWQ1iYa7s43084=",
                      agentId: "RSAI"
                    }
                }
            })
                    
                    
        }).then((response) => response.json()).then((responseJson) => {
            var res = responseJson.response;
            var resJson1 = JSON.parse(res)
            console.log(resJson1,"res");
            // this.props.onNavigateFifty(res);
            var Message = resJson1.PREMIUMDETAILS.Status.Message
            console.log(Message,"Message");
          
            if (Message==="Quote Approved,Proceed Buy Policy"){
                swal(''+Message+'')
                console.log("approved")   
                this.props.onNavigateEleven(token)
            }else{
                swal(''+Message+'')
            }
            console.log("bharthiproposalresuesAjax")
            fetch('http://localhost:8082/bharathiproposal', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
            
                body: JSON.stringify({
                   
                        "Body": {
                           "serve": {
                              "SessionDoc": {
                                 "Session": {
                                    "SessionData": {
                                       "Index": "2",
                                       "InitTime": "Thu, 13 Apr 2017 16:55:41 GMT",
                                       "UserName": "signMtr",
                                       "Password": "AZg3Q1SktWKLz0Os/H0MlAxFfI75pjnpKjn9xrV9vimyyS7/5Ilil/ftcP5oHxC7IFYLVF0C3MAJcIznwrZvDA==",
                                       "OrderNo": "VDJC492112",
                                       "QuoteNo": "QRN201807160000632",
                                       "Route": "INT",
                                       "Contract": "MTR",
                                       "Channel": "polbaz",
                                       "TransactionType": "Quote",
                                       "TransactionStatus": "Fresh",
                                       "ID": "149208275803217169563038",
                                       "UserAgentID": "2C000098",
                                       "Source": "2C000098"
                                    },
                                    "Vehicle": {
                                       "TypeOfBusiness": "TR",
                                       "AccessoryInsured": "N",
                                       "AccessoryValue": "0",
                                       "BiFuelKit": {
                                          "IsBiFuelKit": "N",
                                          "BiFuelKitValue": "0",
                                          "ExternallyFitted": "N"
                                       },
                                       "DateOfRegistration": "2014-04-01T00:00:00.000",
                                       "DateOfManufacture": "2014-04-01T00:00:00.000",
                                       "RiskType": "FTW",
                                       "Make": "HERO MOTOR CORP",
                                       "Model": "PASSION",
                                       "FuelType": "P",
                                       "Variant": "X PRO DRUM DISC SELF",
                                       "IDV": "41208.00",
                                       "EngineNo": "JA12ABDGM26881",
                                       "ChasisNo": "MBLJA12ACDGM21415",
                                       "VehicleAge": "4",
                                       "CC": "110",
                                       "SeatingCapacity": "2",
                                       "PlaceOfRegistration": "Bettiah",
                                       "VehicleExtraTag01": null,
                                       "RegistrationNo": "BR22S3564",
                                       "ExShowroomPrice": "52297",
                                       "PaidDriver": "False"
                                    },
                                    "Quote": {
                                       "LLDriver": "false",
                                       "ExistingPolicy": {
                                          "Claims": "0",
                                          "NCB": "35",
                                          "PolicyType": "Comprehensive",
                                          "EndDate": "2017-04-19T23:59:59.000",
                                          "PolicyNo": "OG-17-9906-1802-00004439",
                                          "InsuranceCompany": "Bajaj Allianz General Insurance Co. Ltd."
                                       },
                                       "PolicyStartDate": "2018-07-20T00:00:00.000",
                                       "Deductible": "0",
                                       "PAFamilySI": "0",
                                       "AgentNumber": null,
                                       "DealerId": null,
                                       "Premium": {
                                          "Discount": null
                                       },
                                       "SelectedCovers": {
                                          "CarDamageSelected": "true",
                                          "TPLiabilitySelected": "true",
                                          "PADriverSelected": "true",
                                          "PAFamilyPremiumSelected": "true"
                                       },
                                       "PolicyEndDate": "2018-07-12T23:59:59.000"
                                    },
                                    "Client": {
                                       "ClientType": "Individual",
                                       "FinancierDetails": {
                                          "IsFinanced": "0"
                                       },
                                       "CltDOB": "19790930",
                                       "CltSex": "M",
                                       "Salut": "MR",
                                       "GivName": "AJAY",
                                       "ClientExtraTag01": "BIHAR",
                                       "CityOfResidence": "Bettiah",
                                       "EmailID": "ajaysktpp@gmail.com",
                                       "MobileNo": "8084088091",
                                       "SurName": "Kumar Tiwari",
                                       "Marryd": "S",
                                       "Occupation": "0007",
                                       "CltAddr01": "vishunpurwa po d k shikarpur",
                                       "CltAddr02": "ps -Shikarpur",
                                       "City": "Bettiah",
                                       "State": "Bihar",
                                       "PinCode": "845451",
                                       "Nominee": {
                                          "Name": "punam pandey",
                                          "Age": "39",
                                          "Relationship": "Spouse"
                                       },
                                       "RegistrationZone": "B"
                                    },
                                    "Payment": {
                                       "PaymentMode": null,
                                       "PaymentType": null,
                                       "TxnReferenceNo": null,
                                       "TxnAmount": null,
                                       "TxnDate": null,
                                       "BankCode": null,
                                       "InstrumentAmount": null
                                    }
                                 }
                              }
                           }
                        }

                    
                    })    

        }).then((response) => response.json()).then((responseJson) => {
            var res = responseJson.response;
            var bharathiproposal = JSON.parse(res)
            console.log(bharathiproposal,"vijay");
            var orderNo=bharathiproposal.Envelope.Body.serveResponse.tuple.old.serve.serve["SOAP:Envelope"]["SOAP:Body"].processTPRequestResponse.response.OrderNo.$t
            var QuoteNo=bharathiproposal.Envelope.Body.serveResponse.tuple.old.serve.serve["SOAP:Envelope"]["SOAP:Body"].processTPRequestResponse.response.QuoteNo.$t
            console.log(orderNo,"orderNo")
            console.log(QuoteNo,"quoteno")
            // this.props.onNavigateFifty(res);
            // var Message = bharathiproposal.PREMIUMDETAILS.Status.Message
            // console.log(Message,"Message");
    
            })
    })
    }
}

// onchangeback=()=>{
//     this.props.onNavigateSuper1(token)
// }
        
 
    onChangequoteid = (value) => {
        var quote = quoteid
        this.setState ({ quote});
        console.log(this.state.quoteid,"quoteId");
    }
    onChangepremium = (value) => {
        this.setState({premium: value });
        console.log({premium},"premium");
    }


   
   
    onChangeemailId = (value) => {
        this.setState({ emailId: value });
        console.log(this.state.emailId,"emailId");
    }
    
    render() {
        // this.props.onNavigateSixth(function(res) { return (res); })
        // this.props.QuotesSelection
       
     //   message = this.props.navigatorRoute.message
       var quoteid = this.props.navigatorRoute.quoteid
        var mypremium = this.props.navigatorRoute.mypremium
       token = this.props.navigatorRoute.token
        console.log(token,"token")


        return (
            
            <RX.ScrollView style={ _styles.scroll }>
            <RX.View style={ styling.container }>
            <RX.Button  onPress={ this.onchangeback }><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                    <RX.Text style={styling.welcome }>
                   Gproposal Details
                </RX.Text>
                   </RX.Button>
                {/*<RX.Button style={ Button } this._onChangeVaronPress={ this.props.onNavigateThirteen }>
                    <RX.Text style={ styling.buttonText }>
                        Go Back
                    </RX.Text>
                </RX.Button>*/}
            </RX.View>
                <Grid>
                    {/*<Row className="show-grid">
                        <Col  md={2}></Col>
                        <Col md={4} style={styling.marTop10}>
                            <RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>
                            <Button  style={styling.btnMaxWidth} bsStyle="primary">Next</Button>

                        </Col>
                        <Col md={4} style={styling.marTop10}>
                            <RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>
                            <Button  style={styling.btnMaxWidth} bsStyle="primary">Next</Button>

                        </Col>
                        <Col  md={6} style={styling.marTop}>
                                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                                try
                                            </RX.Button>

                                        </Col>
                    </Row>*/}

              
                    
                            {/* <Tabs defaultActiveKey={1} style={_styles.read} id="left-tabs-example">
                                <Tab eventKey={1} style={_styles.read}title="" className="myClass"> */}
                                
                                    {/*<code>&lt;{'Col xs={12} md={8}'} /&gt;</code>*/}
                                    <div class="jumbotron" style={ _styles.SCROLL}> 
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.siDeText}>
                                            Quote ID
                                        </RX.Text>
                                        <form>
                                        <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <RX.TextInput
                                                type="Quote ID"
                                                style={ _styles.Form}
                                                placeholder="Quote Id"
                                                value={ quoteid }
                                                onChangeText={this.onChangequoteid}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            </div>
                                         </div>     
                                        </form>
                                    </RX.View>
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.siDeText}>
                                            Premium 
                                        </RX.Text>
                                        <form>
                                        <div class="form-row">
    <div class="form-group col-md-6">
                                            <RX.TextInput
                                                type="Premium"
                                                style={_styles.Form}
                                                placeholder="Premium"
                                                value={mypremium}
                                                onChangeText={this.onChangepremium}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            </div>
                                            </div>  
                                        </form>
                                    
                                        </RX.View>

                                   
                                   
                                    <RX.View style={styling.sideMar}>
                                        <RX.Text style={ styling.siDeText }>
                                            Email id
                                        </RX.Text>
                                        <form>
                                        <div class="form-row">
    <div class="form-group col-md-6">
                                        

                                            <RX.TextInput
                                                style={_styles.Form}
                                                placeholder="Email id"
                                                value={ this.state.emailId }
                                                onChangeText={this.onChangeemailId}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                            </div>
                                            </div>
                                        </form>
                                      
                                    </RX.View>
                                  

                                    <Row className="show-grid">
                                        <Col md={12} style={styling.marTop10}>
                                            {/*<RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>*/}
                                            <RX.Button style={styling.BUTTON7} onPress={()=> this.onChangePost() }>Buy Policy</RX.Button>

                                        </Col>
                                        {/*<Col  md={6} style={styling.marTop}>
                                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                                try
                                            </RX.Button>

                                        </Col>*/}
                                    </Row>

                                
            

                                
                                        {/*<Col  md={6} style={styling.marTop}>
                                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                            <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                                try
                                            </RX.Button>

                                        </Col>*/}
                                   


                                   </div>          
                       
                </Grid>
                {/* <div class="loader" style={_styles.loader}></div> */}

                {/*<RX.Text style={styling.Text }>
                    {this.state.joke}
                </RX.Text>*/}
                {/*<form>
                    <FormGroup
                        controlId="formBasicText"

                    >
                        <ControlLabel>Input</ControlLabel>
                        <RX.TextInput
                            type="text"
                            placeholder="Enter text"
                            value={ this.state.Model }
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                </form>*/}


                {/*
                <RX.Button bsStyle="danger" onPress={()=> this._onChangeVar() }>Primary</RX.Button>
*/}
            </RX.ScrollView>

        );
    }


    _onChangeReg = () => {
        this.setState({ Model: this.state.Model });
    }

    handleChange() {
        this.setState({ Model:'' });
    }
    handlechange(date) {
        this.setState({
          startDate: date
        });

      }
      handleSelect(date) {
        this.setState({
          startDate: date
        });
      }
      

    _onChangeText = (newText) => {
        this.setState({ password: newText });
    }

    _onChangeTest = (newText) => {
        this.setState({ password: newText });
    }
    
}

