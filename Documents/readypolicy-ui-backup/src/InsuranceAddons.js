/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import {Nav,NavItem,NavDropdown,MenuItem,Grid,Row,Col,label,Form,FormGroup,ControlLabel,FormControl,Checkbox,Visible,lg,xs} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import styling from './AppStyles';
import SweetAlert from 'react-swal';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import swal from 'sweetalert';
import debounce from 'lodash.debounce';
const parseJson = require('parse-json');
//const parser = require('xml2json');
var uniqid = require('uniqid');






/*const {
    Welcome
} = TodoStyles;*/
const _styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: 'white'
    }),
    SCROLL: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#2222c357'
    }),
    HomeScrollImageLogo: RX.Styles.createImageStyle({
        width:3000,
        height: 65,
        paddingVertical:20,
        marginLeft:-1200,
        marginTop:30,
        paddingTop:30,
    }),
   

};


var token
var idv
var resJson
var quoteid
var premium
var odpremium
 var responseJson1
// var responseJson2
var TotalPremium


var enquiryId
var totalGrossPremium
export default class InsuranceAddons extends RX.Component{
    // onPress(event) {
    //     this.onChangePostt();
    //     this.onChangePostt1();
    //  }
    constructor(props) {
        super(props);
       // this.onChangePostt1=this.onChangePostt1.bind(this)        
        this.state = {
                emailId: 'neelima@gmail.com',
                mobileNo: '9080784567',
                yearOfManufacture: '2017',
                vehicleMostlyDrivenOn: 'Roads',
                carRegisteredCity: '24PARGANAS',
                vehicleManufacturerName: 'TVS',
                vehicleModelCode: 'ZWTV310',
                vehicleRegDate: '29/06/2018',
                lastName: 'RANI',
                
                // emailId: '',
                // mobileNo: '',
                // yearOfManufacture: '',
                // vehicleMostlyDrivenOn: '',
                // carRegisteredCity: '',
                // vehicleManufacturerName: '',
                // vehicleModelCode: '',
                // vehicleRegDate: '',
                // lastName: '',
                
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
        
       this.onChangePostt1=() => { 
    
console.log("kavitha.......");

        
      fetch('http://localhost:8082/calculatepremium', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                
                'x-access-token': token
            },
            
            body: JSON.stringify({

                    CALCULATEPREMIUMREQUEST: {
                      authenticationDetails: {
                        apiKey: "310ZQmv/bYJMYrWQ1iYa7s43084=",
                        agentId: "RSAI"
                      },
                      proposerDetails: {
                        title: "Ms",
                        firstName: "testxerago",
                        lastName: this.state.lastName,
                        emailId: this.state.emailId,
                        mobileNo: this.state.mobileNo,
                        dateOfBirth: "03/11/1987",
                        occupation: "Student",
                        nomineeName: "nomineename",
                        nomineeAge: "43",
                        relationshipWithNominee: "Cousin",
                        guardianName: "guardianname",
                        guardianAge: "54",
                        relationshipwithGuardian: "Mother",
                        permanentAddress1: "address1",
                        permanentAddress2: "address2",
                        permanentAddress3: "address3",
                        permanentAddress4: "address4",
                        permanentCity: "Chennai",
                        permanentPincode: "600032",
                        sameAdressReg: "No",
                        ResidenceAddressOne: "addressone",
                        ResidenceAddressTwo: "addresstwo",
                        ResidenceAddressThree: "addressthree",
                        ResidenceAddressFour: "addressfour",
                        ResidenceCity: "Chennai",
                        ResidencePinCode: "600034",
                        strStdCode: "044",
                        strPhoneNo: "2456984"
                      },
                      vehicleDetails: {
                        vehicleModelCode: this.state.vehicleModelCode,
                        planOpted: "Flexi Plan",
                        yearOfManufacture: this.state.yearOfManufacture,
                        drivingExperience: "1",
                        voluntaryDeductible: "0",
                        vehicleManufacturerName: this.state.vehicleManufacturerName,
                        idv: "65478",
                        policyStartDate: "20/07/2018",
                        vehicleMostlyDrivenOn: this.state.vehicleMostlyDrivenOn,
                        vehicleRegDate: "20/07/2018",
                        vehicleRegisteredInTheNameOf: "Company",
                        modelName: "APACHE RTR ABS-2 Seater",
                        productName: "BrandNewTwoWheeler",
                        companyNameForCar: "xerago",
                        engineNumber: "565465466",
                        chassisNumber: "5654656",
                        isTwoWheelerFinanced: "No",
                        vehicleSubLine: "motorCycle",
                        fuelType: "Petrol",
                        automobileAssociationMembership: "No",
                        region: "East Region",
                        carRegisteredCity:this.state.carRegisteredCity,
                        averageMonthlyMileageRun: "1000",
                        engineCapacityAmount: "153 CC",
                        personalAccidentCoverForUnnamedPassengers: "50000",
                        accidentCoverForPaidDriver: "50000",
                        legalliabilityToPaidDriver: "Yes",
                        legalliabilityToEmployees: "Yes",
                        cover_elec_acc: "Yes",
                        nonElectricalAccesories: {
                          nonelectronicAccessoriesDetails: {
                            NameOfElectronicAccessories: "Tyre",
                            MakeModel: "TVS",
                            Value: "345"
                          }
                        },
                        electricalAccessories: {
                          electronicAccessoriesDetails: {
                            NameOfElectronicAccessories: "Headlight",
                            MakeModel: "Philips",
                            Value: "300"
                          }
                        }
                      }
                    }
                    }),
                    }).then((response) => response.json()).then((responseJson) => {
                 var res = responseJson.response;
                 var resJson1 = JSON.parse(res)
                 var message = resJson1.PREMIUMDETAILS.Status.Message
                 if (message==="Premium Calculated and Quote Saved Successfully"){
                 var resJson = resJson1.PREMIUMDETAILS.DATA.IDV
                 var quoteid = resJson1.PREMIUMDETAILS.DATA.QUOTE_ID
                 var premium = resJson1.PREMIUMDETAILS.DATA.PREMIUM
                 var liability = resJson1.PREMIUMDETAILS.DATA.LIABILITY
                 var odpremium = resJson1.PREMIUMDETAILS.DATA
                 console.log("quoteid",quoteid)
                 console.log("neenenne",resJson1)
                 console.log("liablity",liability)
                 console.log("message",message)
                 console.log("premium",premium)
                 console.log("odpremium",odpremium)
                 
                 }
                 fetch('http://localhost:8082/bharathiquickquote', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        
                        'x-access-token': token
                    },
                    
                    body: JSON.stringify({

                 
                    Body: {
                       serve: {
                          SessionDoc: {
                             Session: {
                                SessionData: {
                                   Index: "1",
                                   InitTime: "Thu, 13 Apr 2017 16:55:39 GMT",
                                   UserName: "signMtr",
                                   Password: "AZg3Q1SktWKLz0Os/H0MlAxFfI75pjnpKjn9xrV9vimyyS7/5Ilil/ftcP5oHxC7IFYLVF0C3MAJcIznwrZvDA==",
                                   OrderNo: "NA",
                                   QuoteNo: "NA",
                                   Route: "INT",
                                   Contract: "MTR",
                                   Channel: "polbaz",
                                   TransactionType: "Quote",
                                   TransactionStatus: "Fresh",
                                   ID: "149208275275017943554968",
                                   UserAgentID: "2C000098",
                                   Source: "2C000098"
                                },
                                Vehicle: {
                                   TypeOfBusiness: "TR",
                                   AccessoryInsured: "N",
                                   NonElecAccessoryInsured: "N",
                                   AccessoryValue: "0",
                                   BiFuelKit: {
                                      IsBiFuelKit: "N",
                                      BiFuelKitValue: "0",
                                      ExternallyFitted: "N"
                                   },
                                   DateOfRegistration: "2014-04-01T00:00:00.000",
                                   DateOfManufacture: "2014-04-01T00:00:00.000",
                                   RiskType: "FTW",
                                   Make: "HERO MOTOR CORP",
                                   Model: "PASSION",
                                   FuelType: "P",
                                   Variant: "X PRO DRUM DISC SELF",
                                   IDV: "41208",
                                   VehicleAge: "4",
                                   CC: "110",
                                   PlaceOfRegistration: "Bettiah",
                                   SeatingCapacity: "2",
                                   VehicleExtraTag01: null,
                                   RegistrationNo: "BR22S3564",
                                   ExShowroomPrice: "52297",
                                   PaidDriver: "False"
                                },
                                Quote: {
                                   LLDriver: "false",
                                   ExistingPolicy: {
                                      Claims: "0",
                                      NCB: "35",
                                      PolicyType: "Comprehensive",
                                      EndDate: "2018-07-06T23:59:59.000"
                                   },
                                   PolicyStartDate: "2018-07-20T00:00:00.000",
                                   Deductible: "0",
                                   PAFamilySI: "0",
                                   AgentNumber: null,
                                   DealerId: null,
                                   Premium: {
                                      Discount: null
                                   },
                                   SelectedCovers: {
                                      CarDamageSelected: "True",
                                      PAFamilyPremiumSelected: [
                                         "true",
                                         "true"
                                      ],
                                      TPLiabilitySelected: "True",
                                      PADriverSelected: "True"
                                   },
                                   PolicyEndDate: "2019-07-14T23:59:59.000"
                                },
                                Client: {
                                   ClientType: "Individual",
                                   CltDOB: null,
                                   FinancierDetails: {
                                      IsFinanced: "0"
                                   },
                                   GivName: "TW238275707201704130455394890",
                                   SurName: null,
                                   ClientExtraTag01: "BIHAR",
                                   CityOfResidence: "Bettiah",
                                   EmailID: "pb@pb.com",
                                   MobileNo: "9777777777",
                                   RegistrationZone: "B"
                                }
                             }
                          }
                       }
                    }
                 }),
                 

               
                
            }).then((response) => response.json()).then((responseJson2) => {
                var res = responseJson2.response;
                var resJson2 = JSON.parse(res)
                console.log(resJson2,"kavi")
                var TotalPremium=resJson2.Envelope.Body.serveResponse.tuple.old.serve.serve["SOAP:Envelope"]["SOAP:Body"].processTPRequestResponse.response.PremiumSet.PremiumDetails.TotalPremium
console.log(TotalPremium)

            //     var idv = responseJson1.response.idv;
            //     var enquiryId = responseJson1.response.enquiryId;
            //     var totalGrossPremium = responseJson1.response.totalGrossPremium;
            //     console.log(totalGrossPremium,"premium")
            //     console.log(enquiryId,"enquiryId")
            //    // var resJson1 = JSON.parse(res)
            //    // var idv = res.idv;
            //     console.log(idv,"kavithaaaaaaaaaaa")
            //     console.log(token,"insurance page")
                            
                //console.log(enquiryId,"outside")

            






                 
           console.log("1")
               
               // this.props.onNavigateTen(resJson,liability,message,quoteid,premium,odpremium,token); 
            
            // onChangePostt = () => {
                // debugger;
                console.log("hittinh.......")
             fetch('http://localhost:8082/digitgo2wquickquote', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        
                        'x-access-token': token
                    },
                    body: JSON.stringify({
                 
                        
                            contract: {
                              insuranceProductCode: "20202",
                              startDate: "2018-07-20",
                              endDate: "2019-07-20",
                              term : 1,
                              salesChannel : "ABSA",
                              questions : {
                                wantTrailerInsured : false,
                                employeesInsured : 0,
                                driversInsured : 0,
                                nonFarePassengersInsured : 5
                              },
                              coverages : {
                                baseCover : {
                                  thirdPartyLiabilityCover : {
                                    selection : true,
                                    insuredAmount: 100000
                                  },
                                  ownDamageCover : {
                                    selection : false,
                                    plan : "PLAN_D",
                                    discountPercent : 0
                                  },
                                  theftCover : {
                                    selection : false
                                  },
                                  fireCover : {
                                    selection : false
                                  }
                                },
                                addOnCover : {
                                  partsDepreciationCover : {
                                    selection : false,
                                    plan : "PLAN_E",
                                    numberOfClaimsCovered : "TWO",
                                    coPay : 0
                                  },
                                  engineAndGearBoxProtectionCover : {
                                    selection : false
                                  },
                                  consumableCover : {
                                    selection : false
                                  },
                                  breakdownAssistanceCover : {
                                    selection : false,
                                    plan : "PLAN_C"
                                  },
                                  returnToInvoiceCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  },
                                  tyreProtectCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  },
                                  rimDamageCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  }
                                },
                                additionalCover : {
                                  otherDriverCover : {
                                    selection : false,
                                    insuredAmount : 200000
                                  },
                                  paUnnamedPersonCover : {
                                    selection : true,
                                    insuredAmount : 100000
                                  },
                                  paOwnerDriverCover : {
                                    selection : true,
                                    insuredAmount : 200000
                                  }
                                },
                                accessoriesCover : {
                                  electricalCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  },
                                  nonElectricalCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  },
                                  cngCover : {
                                    selection : false,
                                    insuredAmount : 0
                                  }
                                }
                              },
                              voluntaryDeductible : "ZERO"
                            },
                            vehicle : {
                              isVehicleNew : true,
                              idv : 0,
                              annualMileage : "8001",
                              mainCode : "1210211901",
                              licensePlate : "MH03",
                              vehicleIdentificationNumber : "--",
                              engineNumber : "--",
                              permitAgency : "MH03",
                              manufactureDate : "2018-02-01",
                              initialRegistrationDate : "2018-06-26",
                              permitUsageType : null,
                              vehicleType : null,
                              usageType : null,
                              trailer : null,
                              hypothecation : {
                                isHypothecation : false,
                                hypothecationAgency : null,
                                hypothecationCIty : "Pune"
                              }
                            },
                            previousInsurer : {
                              previousInsurerCode : null,
                              previousInsurerPolicyNumber : null,
                              previousInsurerPolicyExpiryDate : "2018-07-26",
                              claimInLastYear : false,
                              previousNoClaimBonus : "ZERO"
                            },
                            pinCode : "400015",
                            enquiryId :uniqid(),
                            security : {
                              webUserId : "25860711",
                              password : "digit123"
                      }
                       
            
                 
                    })
                
                    }).then((response) => response.json()).then((responseJson1) => {
                        console.log(responseJson1,"kavi")
                        var idv = responseJson1.response.idv;
                        var enquiryId = responseJson1.response.enquiryId;
                        var totalGrossPremium = responseJson1.response.totalGrossPremium;
                        console.log(totalGrossPremium,"premium")
                        console.log(enquiryId,"enquiryId")
                       // var resJson1 = JSON.parse(res)
                       // var idv = res.idv;
                        console.log(idv,"kavithaaaaaaaaaaa")
                        console.log(token,"insurance page")
                                    
                        console.log(enquiryId,"outside")
                        // this.props.onNavigateTen(resJson,liability,message,quoteid,premium,odpremium,token,responseJson1,idv,enquiryId,totalGrossPremium); 
                        this.props.onNavigateTen(resJson,liability,message,quoteid,premium,odpremium,token,responseJson1,idv,enquiryId,totalGrossPremium,TotalPremium); 

        })

})
                     })
    

}
        }
    






    

    onChangePost = () => {
        console.log(token,"my token")
        this.props.onPressNavigate(token);
    }
    onChangeyearOfManufacture= (value) => {
        this.setState({yearOfManufacture: value });
        console.log(this.state.yearOfManufacture,"yearOfManufacture");
    }
    onChangecarRegisteredCity= (value) => {
        this.setState({carRegisteredCity: value });
        console.log(this.state.carRegisteredCity,"carRegisteredCity");
    }
    onChangevehicleRegDate = (value) => {
        this.setState({vehicleRegDate  : value });
        console.log(this.state.vehicleRegDate ,"vehicleRegDate ");
    }
    onChangevehicleManufacturerName = (value) => {
        this.setState({ vehicleManufacturerName: value });
        console.log(this.state.vehicleManufacturerName,"vehicleManufacturerName");
    }
    onChangevehicleModelCode= (value) => {
        this.setState({vehicleModelCode : value });
        console.log(this.state.vehicleModelCode,"vehicleModelCode");
    }
    onChangevehicleMostlyDrivenOn= (value) => {
        this.setState({vehicleMostlyDrivenOn: value });
        console.log(this.state.vehicleMostlyDrivenOn,"vehicleMostlyDrivenOn");
    }
    onChangemobileNo = (value) => {
        this.setState({ mobileNo: value });
        console.log(this.state.mobileNo,"mobileNo");
    }
    onChangelastName = (value) => {
        this.setState({ lastName: value });
        console.log(this.state.lastName,"lastName");
    }
    onChangeemailId = (value) => {
        this.setState({ emailId: value });
        this.props.onUpdate(value);
        console.log(this.state.emailId,"email");
    }
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    // componentDidMount() {
    //     let animation = RX.Animated.timing(this._translationValue, {
    //             toValue: 0,
    //             easing: RX.Animated.Easing.OutBack(),
    //             duration: 500
    //         }
    //     );

    //     animation.start();
    // }

    // componentWillUnmount() {
    //     this.emitChangeDebounced.cancel();
    //   }

    render() {
        token = this.props.navigatorRoute.token

        // token = this.props.navigatorRoute.token
        resJson = this.props.navigatorRoute.resJson
        liability = this.props.navigatorRoute.liability
        message = this.props.navigatorRoute.message
        quoteid =  this.props.navigatorRoute.quoteid
        premium = this.props.navigatorRoute.premium
        odpremium = this.props.navigatorRoute.odpremium
        enquiryId = this.props.navigatorRoute.enquiryId
        responseJson1 = this.props.navigatorRoute.responseJson1
        idv = this.props.navigatorRoute.idv
        totalGrossPremium = this.props.navigatorRoute.totalGrossPremium
        responseJson2 = this.props.navigatorRoute.responseJson2
        TotalPremium = this.props.navigatorRoute.TotalPremium
         console.log(token,"token????????")
        // console.log(TotalPremium,"kavithhhhhhh")
        // console.log(quoteid,"addonspagequoteid")
        // console.log(enquiryId,"addons enquiryId")
        // console.log(token,"token")
         return (
            <RX.ScrollView style={ _styles.scroll }>
            <RX.View style={ styling.container }>
            <RX.Button  onPress={()=> this.onChangePost()}><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                   <RX.Animated.Text style={ [styling.welcome, this._animatedStyle] }>
                     Get Quote
                    </RX.Animated.Text>
                   </RX.Button>
                {/*<RX.Button style={ Button } this._onChangeVaronPress={ this.props.onNavigateThirteen }>
                    <RX.Text style={ styling.buttonText }>
                        Go Back
                    </RX.Text>
                </RX.Button>*/}
            </RX.View>
                 <Grid>
                 <div class="steps-form-2">
    <div class="steps-row-2 setup-panel-2 d-flex justify-content-between">
        <div class="steps-step-2">
            <a href="#step-1" type="button" class="btn btn-amber btn-circle-2 waves-effect ml-0" data-toggle="tooltip" data-placement="top" title="Quote Details"><i class="fa fa-folder-open-o" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-2" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Vehicle Details"><i class="fa fa-pencil" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-3" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect" data-toggle="tooltip" data-placement="top" title="Personal Information"><i class="fa fa-photo" aria-hidden="true"></i></a>
        </div>
        <div class="steps-step-2">
            <a href="#step-4" type="button" class="btn btn-blue-grey btn-circle-2 waves-effect mr-0" data-toggle="tooltip" data-placement="top" title="Payment"><i class="fa fa-check" aria-hidden="true"></i></a>
        </div>
    </div>
</div>
                 <div class="jumbotron" style={ _styles.SCROLL}> 
                 <form data-toggle="validator">
  <div class="form-row">
    
      <label for="inputEmail4" style={ styling.SIDETEXT }>Please enter vehicle details to get your Quote</label>
      </div>
    
      </form>             
                 <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>Manufacturer Year</label> 
                                         <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder=" Year of manufacturer"
                                                 value={ this.state.yearOfManufacture}
                                                 onChangeText={this.onChangeyearOfManufacture}
                                                
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                              
                                    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4" style={ styling.sideText }>Car Registered City</label>
                                         
                                        
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Car Register city"
                                                 value={ this.state.carRegisteredCity }
                                                 onChangeText={this.onChangecarRegisteredCity}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                            
                                            </div>
  </div>
  </form>
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4"  style={ styling.sideText }>Vehicle Register Date</label> 
      <div class="form-row">
      
                                    <input type="date" id="party"  style={ styling.Form } name="party"  min="2017-apr-01" max="2030-apr-20" required/>
                                        </div>  
                                     </div>
                                          <div class="form-group col-md-6">
      <label for="inputPassword4" style={ styling.sideText }>Vehicle Manufacturer Name</label>                                     
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Vehicle manufacturer name"
                                                 value={ this.state.vehicleManufacturerName}
                                                 onChangeText={this.onChangevehicleManufacturerName}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                              </div>
                                              </div>
                                              </form>
  <form>
 <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>Vehicle Model Code</label> 
                                    
                                        
                                         
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Vehicle model code"
                                                 value={ this.state.vehicleModelCode}
                                                 onChangeText={this.onChangevehicleModelCode}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                             
                                     </div>
      <div class="form-group col-md-6">
      <label for="inputPassword4" style={ styling.sideText }>Vehicle Mostly Driven On</label>     
                                     
                                        
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="vehicle mostly driven on"
                                                 value={ this.state.vehicleMostlyDrivenOn }
                                                 onChangeText={this.onChangevehicleMostlyDrivenOn}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                            
                                            </div>
                                            </div>
                                              </form>
                                              <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>Name</label> 
                                    
                                         
                                        
 
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Last Name"
                                                 value={ this.state.lastname }
                                                 onChangeText={this.onChangelastName }
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                              
                                        </div>
                                        <div class="form-group col-md-3">
      <label for="inputPassword4" style={ styling.sideText }>Email ID</label>     
                                        
 
                                             <RX.TextInput
                                                 style={styling.Form}
                                                 pattern=".+@beststartupever.com"
                                                 placeholder="Email id"
                                                 value={ this.state.emailId }
                                                 onChangeText={this.onChangeemailId}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                        </div>
                                            </div>
                                            <div class="form-group col-md-3">     
                                      
                                            <label for="inputPassword4" style={ styling.SIdeText }>Mobile No</label> 
                                         
                                             <RX.TextInput
                                                 style={styling.FOrm}
                                                 placeholder="Mobile no"
                                                 value={ this.state.mobileNo }
                                                 onChangeText={this.onChangemobileNo}
                                                 // defaultValue={ this.state.inputValue }
                                             />
                                           </div> 
                                           {/* <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" style={ styling.sideText }>enquiryId</label> 
      <RX.TextInput
                                                 style={styling.Form}
                                                 placeholder="Last Name"
                                                 //value={ this.state.lastname }
                                                 value={this.kavitha }
                                                 // defaultValue={ this.state.inputValue }
                                             />
     
      </div>
      </div>   */}
                                         </form>
               
                                         {/* <RX.Button style={styling.button} onPress={()=> this.onPress}>Get Quote</RX.Button>             */}
                                         <RX.Button style={styling.button} onPress={(event)=> this.onChangePostt1()}>Get Quote</RX.Button>            

                   </div>   
              
                 </Grid>
 
 
                 
 
 
 
 
 
 
 
 
                 {/*Bootstrap ex stashed for integrate*/}
                 {/*<Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect}>
                     <NavItem eventKey="1" href="/home">NavItem 1 content</NavItem>
                     <NavItem eventKey="2" title="Item">NavItem 2 content</NavItem>
                     <NavItem eventKey="3" disabled>NavItem 3 content</NavItem>
                     <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
                         <MenuItem eventKey="4.1">Action</MenuItem>
                         <MenuItem eventKey="4.2">Another action</MenuItem>
                         <MenuItem eventKey="4.3">Something else here</MenuItem>
                         <MenuItem divider />
                         <MenuItem eventKey="4.4">Separated link</MenuItem>
                     </NavDropdown>
                 </Nav>
 
 
 
 
                 <Grid>
                     <Row className="show-grid">
                         <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
                         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                     </Row>
 
                     <Row className="show-grid">
                         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                         <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
                     </Row>
 
                     <Row className="show-grid">
                         <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
                     </Row>
 
                     <Row className="show-grid">
                         <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
                         <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
                     </Row>
                 </Grid>
 
 
                 <Form horizontal>
                     <FormGroup controlId="formHorizontalEmail">
                         <Col componentClass={ControlLabel} sm={2}>
                             Email
                         </Col>
                         <Col sm={10}>
                             <FormControl type="email" placeholder="Email" />
                         </Col>
                     </FormGroup>
 
                     <FormGroup controlId="formHorizontalPassword">
                         <Col componentClass={ControlLabel} sm={2}>
                             Password
                         </Col>
                         <Col sm={10}>
                             <FormControl type="password" placeholder="Password" />
                         </Col>
                     </FormGroup>
 
                     <FormGroup>
                         <Col smOffset={2} sm={10}>
                             <Checkbox>Remember me</Checkbox>
                         </Col>
                     </FormGroup>
 
                     <FormGroup>
                         <Col smOffset={2} sm={10}>
                             <Button type="submit">
                                 Sign in
                             </Button>
                         </Col>
                     </FormGroup>
                 </Form>*/}
 
                 <RX.Button style={ Button } onPress={ this.props.onNavigateTen }>
                     <RX.Text style={ styling.buttonText }>
                         Go Back
                     </RX.Text>
                 </RX.Button>
             </RX.ScrollView>
 
         );
     }
    }