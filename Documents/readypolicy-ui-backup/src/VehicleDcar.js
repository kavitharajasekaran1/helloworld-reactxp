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
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,Form,ControlLabel,StyleSheet,FormControl,minDate,maxDate,HelpBlock,DateTimeField,Checkbox} from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import moment from 'moment';
import SweetAlert from 'react-swal';
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
        HomeScrollImageLogo: RX.Styles.createImageStyle({
            width:3000,
        height: 65,
        paddingVertical:20,
        marginLeft:-1200,
        marginTop:30,
        paddingTop:30,
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
        
        
        
}

//var message
var quoteid
var premium
var liability
var idv
var resJson
var allResponse
var token
var index
var index1
var index2
export default class VehicleDetails extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
                      quoteid:this.props.navigatorRoute.quoteid,
                      mypremium:this.props.navigatorRoute.premium,
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
                      idv: '4520250.0',
                      policyStartDate: '20/07/2018',
                      vehicleMostlyDrivenOn: 'Roads',
                      vehicleRegDate: '20/07/2018',
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


    


    onChangePost = () => {
        console.log("Rahul")
console.log("quoteid",this.state.quoteid)
//console.log("quoteid_",this.props.navigatorRoute.quoteid)
        return fetch('http://localhost:8082/updatevehicalcardetails', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': token
            },                                            
        
            body: JSON.stringify({
                    CALCULATEPREMIUMREQUEST: {
                      authenticationDetails: {
                        agentId: "BA502092",
                        apikey: "310ZQmv/bYJMYrWQ1iYa7s43084="
                    },
                      quoteId: this.state.quoteid,
                      proposerDetails: {
                        addressFour: "North Street",
                        addressOne: "No1",
                        addressThree: "No1",
                        addressTwo: "North Street",
                        contactAddress1: "No1",
                        contactAddress2: "North Street",
                        contactAddress3: "No1",
                        contactAddress4: "North Street",
                        contactCity: "Chennai",
                        contactPincode: "600001",
                        dateOfBirth: "12/08/1990",
                        guardianAge: "54",
                        guardianName: "tqzukzy",
                        nomineeAge: "13",
                        nomineeName: "vinbbhm",
                        occupation: "Student",
                        regCity: "Chennai",
                        regPinCode: "600001",
                        relationshipWithNominee: "Cousin",
                        relationshipwithGuardian: "Mother",
                        same_addr_reg: "No",
                        strEmail: "michael@xerago.com",
                        strFirstName: "ldybgsr",
                        strMobileNo: "9810063054",
                        strPhoneNo: "57879797",
                        strStdCode: "044",
                        strTitle: "Mr"
                    },
                      reqType: "XML",
                      respType: "XML",
                      vehicleDetails: {
                        yearOfManufacture: "2017",
                        carRegisteredCity: "CHENNAI",
                        region: "South Region",
                        vehicleManufacturerName: "REVA",
                        vehicleModelCode: "CMB65",
                        vehicleregDate: "30/06/2018",
                        idv: this.state.idv, 
                        engineCapacityAmount: "1995 CC",
                        drivingExperience: "2",
                        vehicleMostlyDrivenOn: "Hilly areas",
                        averageMonthlyMileageRun: "1000",
                        vehicleSubLine: "privatePassengerCar",
                        ProductName: "BrandNewCar",
                        fuelType: "Petrol",
                        isBiFuelKit: "Yes",
                        isBiFuelKitYes: "ADD ON",
                        addonValue: "8225",
                        automobileAssociationMembership: "No",
                        vehicleRegisteredInTheNameOf: "Individual",
                        voluntarydeductible: "5000",
                        hdnDepreciation: "false",
                        hdnInvoicePrice: "false",
                        hdnKeyReplacement: "false",
                        hdnProtector: "false",
                        hdnRoadTax: "true",
                        hdnWindShield: "true",
                        hdnSpareCar: "true",
                        spareCarLimit: "300",
                        hdnLossOfBaggage: "true",
                        valueOfLossOfBaggage: "7500",
                        cover_dri_othr_car_ass: "Yes",
                        accidentcoverforpaiddriver: "50000",
                        personalaccidentcoverforunnamedpassengers: "200000",
                        legalliabilitytopaiddriver: "Yes",
                        fibreglass: "No",
                        cover_elec_acc: "No",
                        valueofelectricalaccessories: "7193",
                        electricalAccessories: {
                          electronicAccessoriesDetails: [
                            {
                              makeModel: "QlFilgwuMt",
                              nameOfElectronicAccessories: "hhjUGyvtsp",
                              value: "1215"
                            },
                            {
                            makeModel: "jsoOIXpVKJ",
                            nameOfElectronicAccessories: "AGtVfPoitL",
                              value: "1579"
                            },
                            {
                              makeModel: "tmLvPxPCok",
                              nameOfElectronicAccessories: "sCCQdelmBn",
                            value: "1429"
                            },
                            {
                              makeModel: "TkMDZFqHtR",
                              nameOfElectronicAccessories: "mgSBhHMkdR",
                              value: "1065"
                            },
                            {
                              makeModel: "tfKBeIoRQP",
                              nameOfElectronicAccessories: "VpnejUOKJm",
                              value: "1905"
                            }
                          ]
                        },
                        cover_non_elec_acc: "Yes",
                        valueofnonelectricalaccessories: "7779",
                        nonElectricalAccesories: {
                          nonelectronicAccessoriesDetails: [
                            {
                              makeModel: "myXviRDoOh",
                              nameOfElectronicAccessories: "PJCbYotGFQ",
                              value: "1810"
                            },
                            {
                              makeModel: "nxpMLZiEef",
                              nameOfElectronicAccessories: "YusJjZyrpC",
                              value: "1660"
                            },
                            {
                              makeModel: "vbZiMDMKOl",
                              nameOfElectronicAccessories: "baWUyWRdSH",
                              value: "1931"
                            },
                            {
                              makeModel: "bqDobxEyWB",
                              nameOfElectronicAccessories: "YaLTzsZYxT",
                              value: "1163"
                            },
                            {
                              makeModel: "ASwFBhFXFn",
                              nameOfElectronicAccessories: "PzlJAaXNeq",
                              value: "1215"
                            }
                          ]
                        },
                        registrationNumber: "HR10N4662",
                        chassisNumber: "2zDxdIz1S5",
                        engineNumber: "Ri9X4IVSjW",
                        isCarFinanced: "Yes",
                        isCarFinancedValue: "Lease",
                        financierName: "Bajaj"
                      }
                    }
            }),
        }).then((response) => response.json()).then((responseJson) => {
            var res = responseJson.response;
            var resJson1 = JSON.parse(res)
            console.log(resJson1,"res");
           // this.props.onNavigateEight(res);
            var Message = resJson1.PREMIUMDETAILS.Status.Message
            console.log(Message,"Message");
            if (Message==="Vehicle Additional details updation success"){
            var mypremium = resJson1.PREMIUMDETAILS.DATA.PREMIUM
            console.log("premium",mypremium)
            swal(''+Message+'')
            
             this.props.onNavigateFifty(quoteid,mypremium,);
             }else{
                swal(''+Message+'')
             }

        })
     }
     onChangePosttt(){
        console.log("navigate",token)
        this.props.onNavigateFourty(liability,resJson,quoteid,premium,allResponse,token); 
    } 
    onChangeTextValue = (value) => {
        this.setState({ inputValue: value });
        console.log(this.state.inputValue,"inputValue");
    }
    onChangequoteid = (value) => {
        console.log("VenhicleDetails", value)
     //   var quote = quoteid
        this.setState ({ quoteid:value});
        console.log(this.state.quoteid,"quoteId");
    }
    onChangepremium = (value) => {
        this.setState({mypremium: value });
        console.log({premium},"premium");
    }
   

    onChangetitle = (value) => {
        this.setState({ title: value });
        console.log(this.state.title,"title");
    }
    onChangefirstName = (value) => {
        this.setState({ firstname: value });
        console.log(this.state.firstname,"firstname");
    }
    onChangelastName = (value) => {
        this.setState({ lastname: value });
        console.log(this.state.lastname,"lastname");
    }
    onChangeemailId = (value) => {
        this.setState({ emailId: value });
        console.log(this.state.emailId,"emailId");
    }
    onChangevehicleManufacturerName = (value) => {
        this.setState({ vehicleManufacturerName: value });
        console.log(this.state.vehicleManufacturerName,"vehicleManufacturerName");
    }

    // validateEmail(value) {
    //     let regex = /\w[-._\w]*@[-._\w]*\w\.\w{2,5}/;
    //     if (regex.test(value) === true) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    //  }

    // // getValidationState = (value)=> {
    // //     this.setState({ name: value });
    // //     console.log(this.state.name,"name");
    // //     // const length = this.state.name.length;
    // //     const value = this.state.name;
    // //     if (this.validateEmail(value)) return 'success';
    // //     else if (length > 5 && !this.validateEmail(value)) return 'warning';
    // //     else if (length > 2 && !this.validateEmail(value)) return 'error';
    // //     return null;
    // // }
    onChangemobileNo = (value) => {
        this.setState({ mobileNo: value });
        console.log(this.state.mobileNo,"mobileNo");
    }

    onChangeEmail = (value) => {
        this.setState({ email: value });
        this.props.onUpdate(value);
        console.log(this.state.email,"email");
    }
  onChangeArea = (value) => {
        this.setState({ regAreaCode: value });
        console.log(this.state.regAreaCode,"regAreaCode");
    }
    onChangedateofbirth =  (value) => {
        this.setState({ dateofbirth: value });
        console.log(this.state.dateofbirth,"dateofbirth");
    }
    onChangeoccupation =   (value) => {
        this.setState({ occupation: value });
        console.log(this.state.occupation,"occupation");
    }
    onChangenomineeName =   (value) => {
        this.setState({ nomineeName: value });
        console.log(this.state.nomineeName,"nomineeName");
    }
    onChangenomineeAge =   (value) => {
        this.setState({ nomineeAge: value });
        console.log(this.state.nomineeAge,"nomineeAge");
    }
    onChangeguardianName =   (value) => {
        this.setState({ guardianName: value });
        console.log(this.state.guardianName,"guardianName");
    }
    onChangeguardianAge =   (value) => {
        this.setState({ guardianAge: value });
        console.log(this.state.guardianAge,"guardianAge");
    }
    onChangerelationshipWithNominee =   (value) => {
        this.setState({ relationshipWithNominee: value });
        console.log(this.state.relationshipWithNominee,"relationshipWithNominee");
    }
    onChangerelationshipWithGuardian =   (value) => {
        this.setState({ relationshipWithGuardian: value });
        console.log(this.state.relationshipWithGuardian,"relationshipWithGuardian");
    }
    onChangepermanentAddress1 =   (value) => {
        this.setState({ permanentAddress1: value });
        console.log(this.state.permanentAddress1,"permanentAddress1");
    }
    onChangepermanentAddress2=   (value) => {
        this.setState({ permanentAddress2: value });
        console.log(this.state.permanentAddress2,"permanentAddress2");
    }
    onChangepermanentAddress3 =   (value) => {
        this.setState({ permanentAddress3: value });
        console.log(this.state.permanentAddress3,"permanentAddress3");
    }
    onChangepermanentAddress4 =   (value) => {
        this.setState({ permanentAddress4: value });
        console.log(this.state.permanentAddress4,"permanentAddress4");
    }
    onChangepermanentCity =   (value) => {
        this.setState({ permanentCity: value });
        console.log(this.state.permanentCity,"permanentCity");
    }
    onChangepermanentPincode =   (value) => {
        this.setState({ permanentPincode: value });
        console.log(this.state.permanentPincode,"Pincode");
    }
    onChangesameAdressReg =   (value) => {
        this.setState({ sameAdressReg: value });
        console.log(this.state.sameAdressReg,"sameAdressReg");
    }

    onChangeResidenceCity = (value) => {
        this.setState({ResidenceCity : value });
        console.log(this.state.ResidenceCity ,"ResidentialCity ");
    }
    onChangeResidencePinCode = (value) => {
        this.setState({ResidencePinCode : value });
        console.log(this.state.ResidencePinCode ,"ResidencePinCode");
    }
    onChangestrStdCode = (value) => {
        this.setState({strStdCode : value });
        console.log(this.state.strStdCode ,"strStdCode");
    }
    onChangestrPhoneNo = (value) => {
        this.setState({strPhoneNo : value });
        console.log(this.state.strPhoneNo ,"strPhoneNO");
    }
    onChangestrpin = (value) => {
        this.setState({strpin : value });
        console.log(this.state.strpin ,"strpin");
    }
    onChangevehicleModelCode= (value) => {
        this.setState({vehicleModelCode : value });
        console.log(this.state.vehicleModelCode,"vehicleModelCode");
    }
    onChangeplanOpted= (value) => {
        this.setState({planOpted : value });
        console.log(this.state.planOpted,"planOpted");
    }
    onChangedrivingExperience= (value) => {
        this.setState({drivingExperience : value });
        console.log(this.state.drivingExperience,"drivingExperience");
    }
    onChangevoluntaryDeductible= (value) => {
        this.setState({voluntaryDeductible : value });
        console.log(this.state.voluntaryDeductible,"voluntaryDetuctible");
    }
    onChangepermanetCity= (value) => {
        this.setState({permanentCity : value });
        console.log(this.state.permanentCity,"permanentCity");
    }
    onChangeplan= (value) => {
        this.setState({plan : value });
        console.log(this.state.plan,"plan");
    }
    onChangeyearOfManufacture= (value) => {
        this.setState({yearOfManufacture: value });
        console.log(this.state.yearOfManufacture,"yearOfManufacture");
    }
    onChangeidv= (value) => {
        this.setState({idv : value });
        console.log(this.state.idv,"idv");
    }
    onChangepolicyStartDate= (value) => {
        this.setState({policyStartDate : value });
        console.log(this.state.policyStartDate,"policyStartDate");
    }
    onChangevehicleMostlyDrivenOn= (value) => {
        this.setState({vehicleMostlyDrivenOn: value });
        console.log(this.state.vehicleMostlyDrivenOn,"vehicleMostlyDrivenOn");
    }
    onChangevehicleRegDate = (value) => {
        this.setState({vehicleRegDate  : value });
        console.log(this.state.vehicleRegDate ,"vehicleRegDate ");
    }
    onChangevehicleRegisteredInTheNameOf= (value) => {
        this.setState({vehicleRegisteredInTheNameOf : value });
        console.log(this.state.vehicleRegisteredInTheNameOf,"vehicleRegisteredInTheNameOf");
    }
    onChangemodelName= (value) => {
        this.setState({modelName : value });
        console.log(this.state.modelName,"modelName");
    }
    onChangeproductName= (value) => {
        this.setState({productName : value });
        console.log(this.state.productName,"productName");
    }
    onChangecompanyNameForCar= (value) => {
        this.setState({companyNameForCar : value });
        console.log(this.state.companyNameForCar,"companyNameForCar");
    }
    onChangeengineNumber= (value) => {
        this.setState({engineNumber: value });
        console.log(this.state.engineNumber,"engineNumber");
    }
    onChangechassisNumber= (value) => {
        this.setState({chassisNumber: value });
        console.log(this.state.chassisNumber,"chassisNumber");
    }
    onChangeisTwoWheelerFinanced= (value) => {
        this.setState({isTwoWheelerFinanced: value });
        console.log(this.state.isTwoWheelerFinanced,"isTwoWheelerFinanced");
    }
    onChangevehicleSubline= (value) => {
        this.setState({vehicleSubline: value });
        console.log(this.state.vehicleSubline,"vehicleSubline");
    }
    onChangeregistrationchargesRoadtax= (value) => {
        this.setState({registrationchargesRoadtax: value });
        console.log(this.state.registrationchargesRoadtax,"registrationchargesRoadtax");
    }
    onChangefuelType= (value) => {
        this.setState({fuelType: value });
        console.log(this.state.fuelType,"fuelType");
    }
    onChangeautomobileAssociationMembership= (value) => {
        this.setState({automobileAssociationMembership: value });
        console.log(this.state.automobileAssociationMembership,"automobileAssociationMembership");
    }
    onChangeregion= (value) => {
        this.setState({region: value });
        console.log(this.state.region,"region");
    }
    onChangecarRegisteredCity= (value) => {
        this.setState({carRegisteredCity: value });
        console.log(this.state.carRegisteredCity,"carRegisteredCity");
    }
    onChangemileage= (value) => {
        this.setState({mileage: value });
        console.log(this.state.mileage,"mileage");
    }
    onChangeisProductCheck= (value) => {
        this.setState({isProductCheck: value });
        console.log(this.state.isProductCheck,"isProductCheck");
    }



    onChangeResidenceAddressOne = (value) => {
        this.setState({  ResidenceAddressOne: value });
        console.log(this.state. ResidenceAddressOne," ResidenceAddressOne");
    }
    onChangeResidenceAddressTwo = (value) => {
        this.setState({  ResidenceAddressTwo: value });
        console.log(this.state. ResidenceAddressTwo," ResidenceAddressTwo");
    }
    onChangeResidenceAddressThree= (value) => {
        this.setState({  ResidenceAddressThree: value });
        console.log(this.state. ResidenceAddressThree," ResidenceAddressThree");
    }
    onChangeResidenceAddressFour = (value) => {
        this.setState({  ResidenceAddressFour: value });
        console.log(this.state. ResidenceAddressFour," ResidenceAddressFour");
    }

    onChangeModel = (value) => {
        this.setState({ carModel: value });
        console.log(this.state.carModel,"model");
    }

    onChangeFuel = (value) => {
        this.setState({ fuelType: value });
        console.log(this.state.fuelType,"fuelType");
    }

    onChangeCar = (value) => {
        this.setState({ carVariant: value });
        console.log(this.state.carVariant,"carVariant");
    }

    onChangeInsurer = (value) => {
        this.setState({ existingInsurer: value });
        console.log(this.state.existingInsurer,"existingInsurer");
    }

    onChangeengineCapacityAmount = (value) => {
        this.setState({engineCapacityAmount: value });
        console.log(this.state.engineCapacityAmount,"engineCapacityAmount");
    }
    onChangepersonalAccidentCoverForUnnamedPassengers = (value) => {
        this.setState({ personalAccidentCoverForUnnamedPassengers: value });
        console.log(this.state.personalAccidentCoverForUnnamedPassengers,"personalAccidentCoverForUnnamedPassengers");
    }
    onChangeaccidentCoverForPaidDriver = (value) => {
        this.setState({accidentCoverForPaidDriver: value });
        console.log(this.state.accidentCoverForPaidDriver,"accidentCoverForPaidDriver");
    }
    onChangelegalliabilityToPaidDriver = (value) => {
        this.setState({ legalliabilityToPaidDriver: value });
        console.log(this.state.legalliabilityToPaidDriver,"legalliabilityToPaidDriver");
    }
    onChangelegalliabilityToEmployees= (value) => {
        this.setState({ legalliabilityToEmployees: value });
        console.log(this.state.legalliabilityToEmployees,"legalliabilityToEmployees");
    }
    onChangecover_elec_acc = (value) => {
        this.setState({ cover_elec_acc: value });
        console.log(this.state.cover_elec_acc,"cover_elec_acc");
    }
    onChangeNameOfElectronicAccessories = (value) => {
        this.setState({ NameOfElectronicAccessories: value });
        console.log(this.state.NameOfElectronicAccessories,"NameOfElectronicAccessories");
    }
    onChangeMakeModel = (value) => {
        this.setState({ MakeModel: value });
        console.log(this.state.MakeModel,"MakeModel");
    }
    onChangeValue = (value) => {
        this.setState({ Value: value });
        console.log(this.state.Value,"Value");
    }


    render() {
        // this.props.onNavigateSixth(function(res) { return (res); })
        // this.props.QuotesSelection
       
     //   message = this.props.navigatorRoute.message
        quoteid = this.props.navigatorRoute.quoteid
         mypremium = this.props.navigatorRoute.premium
         token = this.props.navigatorRoute.token
         console.log(token,"token")
       //  liability = this.props.navigatorRoute.liability
         //idv = this.props.navigatorRoute.idv
         //resJson = this.props.navigatorRoute.resJson
        //  allResponse = this.props.navigatorRoute.allResponse
        console.log("quoteid",quoteid)
        console.log("premium",mypremium)
       // console.log("liability",liability)
       // console.log("idv",idv)
       // console.log("idv",resJson)

        return (
            <RX.ScrollView style={ _styles.scroll }>
            <RX.View style={ styling.container }>
            <RX.Button  onPress={()=> this.onChangePosttt()}><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                    <RX.Text style={styling.welcome }>
                    New Car Insurance
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

                <Row className="clearfix" >
                    <Col  md={8}></Col>
                    <Col  md={8}>

                        <Tabs defaultActiveKey={1} style={_styles.read} id="left-tabs-example">
                            <Tab eventKey={1} style={_styles.read}title="New" className="myClass">
                            
                                {/*<code>&lt;{'Col xs={12} md={8}'} /&gt;</code>*/}
                                <RX.View style={ _styles.client }>
                                    <form>
                                    <div class="form-row">
<div class="form-group col-md-4">
  <label for="inputEmail4" style={ styling.siDeText }>Quote ID</label>

                                        <RX.TextInput
                                            type="Quote ID"
                                            style={styling.Form}
                                            placeholder="Quote Id"
                                            value={quoteid }
                                            onChangeText={this.onChangequoteid}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                          
                                          </div>
                                          
<div class="form-group col-md-4">
  <label for="inputPassword4" style={ styling.siDeText }>Premium</label>

                                        <RX.TextInput
                                            type="Premium"
                                            style={styling.Form}
                                            placeholder="Premium"
                                            value={mypremium}
                                            onChangeText={this.onChangepremium}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                            </div>

<div class="form-group col-md-4">
  <label for="inputEmail4" style={ styling.siDeText }>Title</label>
                                  

                                        <RX.TextInput
                                            type="title"
                                            style={styling.Form}
                                            placeholder="Title"
                                            value={ this.state.title }
                                            onChangeText={this.onChangetitle}
                                            // defaultValue={ this.state.inputValue }
                                        />
       </div>
       </div>
    </form>  
    </RX.View>
    <RX.View style={ _styles.client }>
    <div class="jumbotron" style={ _styles.SCROLL}> 
             <form>
  <div class="form-row">

  <label for="inputEmail4" style={ styling.SIDETEXT }>Personal Details</label>
  </div>

  </form>  
     <form> 
                                    <div class="form-row">
<div class="form-group col-md-4">
  <label for="inputPassword4" style={ styling.siDeText }>First Name</label>
                                 
                                   
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="First Name"
                                            value={ this.state.firstname }
                                            onChangeText={this.onChangefirstName}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                       </div>

                                 
   

<div class="form-group col-md-4">
  <label for="inputEmail4" style={ styling.siDeText }>Last Name</label>                           
                                   

                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Last Name"
                                            value={ this.state.lastname }
                                            onChangeText={this.onChangelastName }
                                            // defaultValue={ this.state.inputValue }
                                        />
                                               </div>
<div class="form-group col-md-4">
  <label for="inputPassword4" style={ styling.siDeText }>Email ID</label>
                                  

                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Email id"
                                            value={ this.state.emailId }
                                            onChangeText={this.onChangeemailId}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                       </div>
</div>
</form>

<form>   
                                 
   
<div class="form-row">
<div class="form-group col-md-4">
  <label for="inputEmail4" style={ styling.siDeText }>Mobile No</label>         
                                   
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Mobile no"
                                            value={ this.state.mobileNo }
                                            onChangeText={this.onChangemobileNo}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        </div>
                                     <div class="form-group col-md-4">
  <label for="inputPassword4" style={ styling.siDeText }>Date Of Birth</label>
                                  
                              
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Date of Birth"
                                            value={ this.state.dateofbirth }
                                            onChangeText={this.onChangedateofbirth}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                         
                                         </div>


<div class="form-group col-md-4">
  <label for="inputEmail4" style={ styling.siDeText }>Occupation</label>  
                                
                                   
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Occupation"
                                            value={ this.state.occupation}
                                            onChangeText={this.onChangeoccupation}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                       
                                       </div>
                                       </div>
                                       </form>
                                       <form>
                                       <div class="form-row">
                                     <div class="form-group col-md-4">
  <label for="inputPassword4" style={ styling.siDeText }>Nominee Name</label>
                                   
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Nominee Name"
                                            value={ this.state.nomineeName }
                                            onChangeText={this.onChangenomineeName}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        
                                        </div>

                                        
                                        <div class="form-group col-md-4">
  <label for="inputPassword4" style={ styling.siDeText }>Nominee Age</label>
                                
                                   
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Nominee age"
                                            value={ this.state.nomineeAge }
                                            onChangeText={this.onChangenomineeAge}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        
                                   </div>
                                   <div class="form-group col-md-4">
  <label for="inputPassword4" style={ styling.siDeText }>Relation with Nominee</label>
                                
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="RelationshipWithNominee"
                                            value={ this.state.  relationshipWithNominee}
                                            onChangeText={this.onChangerelationshipWithNominee}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        
                                 </div>

                                 </div>
                                 </form>
                              
                                 
                                 <RX.View style={ _styles.client }>
                                 <div class="jumbotron" style={ _styles.SCROLL}> 
                                 
             <form>
  <div class="form-row">

  <label for="inputEmail4" style={ styling.SIDETEXT }>Vehicle Details</label>
  </div>

  </form>  
                                 <form>
                                    
                                 <div class="form-row">
                                     <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Vehicle Model code</label>
                                   
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Vehicle model code"
                                            value={ this.state.vehicleModelCode}
                                            onChangeText={this.onChangevehicleModelCode}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        </div>
                                        <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Plan Opted</label>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Plan opted"
                                            value={ this.state.planOpted }
                                            onChangeText={this.onChangeplanOpted}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        </div>
                                     <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>year Of Manufacturer</label>   
                                  
                                    <RX.TextInput
                                            style={styling.Form}
                                            placeholder=" Year of manufacturer"
                                            value={ this.state.yearOfManufacture}
                                            onChangeText={this.onChangeyearOfManufacture}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                  </div>


<div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Driving Experience</label>   
                                  
                               
                                    
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Driving experience"
                                            value={ this.state.drivingExperience }
                                            onChangeText={this.onChangedrivingExperience}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                     </div>  
                                    
                                     <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Voluntary Detuctable</label>   
                                                                
                               
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Voluntary detuctable"
                                            value={ this.state.voluntaryDeductible }
                                            onChangeText={this.onChangevoluntaryDeductible}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        </div>

                                        </div>


<div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Voluntary Detuctable</label>       
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Vehicle manufacturer name"
                                            value={ this.state.vehicleManufacturerName}
                                            onChangeText={this.onChangevehicleManufacturerName}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                       
                                 </div>
                                 </form>
</div>
</RX.View>
<RX.View style={ _styles.client }>
<div class="jumbotron" style={ _styles.SCROLL}> 
<form>
                                       <div class="form-row">
                                     <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>IDV</label>
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="IDV"
                                            value={ this.state.idv }
                                            onChangeText={this.onChangeidv}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        
                                  </div>
                                
                                  <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Start Policy</label>   
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder=" start Policy"
                                            value={ this.state.policyStartDate }
                                            onChangeText={this.onChangepolicyStartDate}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                       
                                    </div>
                                    <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Vehicle Mostly driven </label>  
                                   
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="vehicle mostly driven on"
                                            value={ this.state.vehicleMostlyDrivenOn }
                                            onChangeText={this.onChangevehicleMostlyDrivenOn}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                       
                                 </div>
                                 </div>
                                 
                               
                                 <form>
                                       <div class="form-row">
                                     <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Vehicle Registered Date</label>
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Vehicle register date"
                                            value={ this.state.vehicleRegDate }
                                            onChangeText={this.onChangevehicleRegDate }
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </div>
                                
                                    <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Vehicle Registered</label>
                                   
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Vehicle registered in the name of"
                                            value={ this.state.vehicleRegisteredInTheNameOf }
                                            onChangeText={this.onChangevehicleRegisteredInTheNameOf}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        </div>
                                        </div>
                                    </form>
                                    
                                    <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Model Name</label>
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="model name"
                                            value={ this.state.modelName }
                                            onChangeText={this.onChangemodelName}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        
                                    </div>
                                    <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Product Name</label>
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Product name"
                                            value={ this.state.productName }
                                            onChangeText={this.onChangeproductName}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                       
                                  </div>
                                  <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Company Name for car</label>
                                   
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Company name for car"
                                            value={ this.state.companyNameForCar }
                                            onChangeText={this.onChangecompanyNameForCar}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                        
                                  </div>
                                  <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>Enginee Number</label>
                                   
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="enginee number"
                                            value={ this.state.engineNumber }
                                            onChangeText={this.onChangeengineNumber}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                 </div>
                                 <div class="form-group col-md-6">
  <label for="inputPassword4" style={ styling.siDeText }>chassis Number</label>
                                    
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Chassis Number"
                                            value={ this.state.chassisNumber }
                                            onChangeText={this.onChangechassisNumber}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                       
                                   </div>
                                </form>
</div>
                                </RX.View>
                                
                              </div>
                              
                              </RX.View>
                              
                              

                                {/*<RX.View style={styling.sideMar}>*/}
                                    {/*<RX.Text style={ styling.sideText }>*/}
                                        {/*Vehicle Model*/}
                                    {/*</RX.Text>*/}
                                    {/*<form>*/}
                                        {/*<RX.TextInput*/}
                                            {/*style={styling.Form}*/}
                                            {/*placeholder="Model"*/}
                                            {/*value={ this.state.carModel }*/}
                                            {/*onChangeText={this.onChangeModel}*/}
                                            {/*// defaultValue={ this.state.inputValue }*/}
                                        {/*/>*/}
                                    {/*</form>*/}
                                {/*</RX.View>*/}

                               {/* <RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Fuel Type
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Fuel Type"
                                            value={ this.state.fuelType }
                                            onChangeText={this.onChangeFuel}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>*/}

                                {/*<RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Car Variant
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Car Variant"
                                            value={ this.state.carVariant }
                                            onChangeText={this.onChangeCar}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>*/}

                                {/*<RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Previous Insurer
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Car Variant"
                                            value={ this.state.existingInsurer }
                                            onChangeText={this.onChangeInsurer}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>*/}
                               {/* <Row className="show-grid">
                                    <Col  md={6} style={styling.marTop}>
                                        <RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>
                                    </Col>
                                    <Col  md={6} style={styling.marTop}>
                                        <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                        <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                            try
                                        </RX.Button>

                                    </Col>
                                </Row>*/}

                                <Row className="show-grid">
                                    <Col md={12} style={styling.marTop10}>
                                        {/*<RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>*/}
                                        <RX.Button style={styling.BUTTON6} onPress={()=> this.onChangePost() }>Next</RX.Button>

                                    </Col>
                                    {/*<Col  md={6} style={styling.marTop}>
                                        <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                        <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                            try
                                        </RX.Button>

                                    </Col>*/}
                                </Row>

                            </Tab>
                            <Tab eventKey={2} style={_styles.read}  title="Renew">
                                <RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText}>
                                        Registration No
                                    </RX.Text>
                                    <form>
                                      
                                            {/*<FormControl/>*/}
                                            <RX.TextInput
                                                controlId="formBasicText"
                                                type="email"
                                                style={styling.Form}
                                                placeholder="Enter Registration No"
                                                value={ this.state.name }
                                                onChangeText={this.onChangeName}
                                                // defaultValue={ this.state.inputValue }
                                            />
                                           
                                    </form>
                                </RX.View>

                                <RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Manufacturer
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Enter Manufacturer"
                                            value={ this.state.phone }
                                            onChangeText={this.onChangePhone}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>


                                <RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Model
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Enter Model"
                                            value={ this.state.email }
                                            onChangeText={this.onChangeEmail}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>

                                <RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Variant
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Enter Variant"
                                            value={ this.state.regAreaCode }
                                            onChangeText={this.onChangeArea}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>

                                <RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Registration Year
                                    </RX.Text>
                                   
                                   
                                    <div className="form-group">
                                    <div className="input-group date" id="datetimepicker1">
                                     <input type="text" className="form-control" />
                                     <span className="input-group-addon">
                                     <span className="glyphicon-calendar glyphicon">
                                     </span></span>
     </div>
</div>

                                 
                                </RX.View>

                                <RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        RTO Location
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="RTO Location"
                                            value={ this.state.registrationYear }
                                            onChangeText={this.onChangeReg}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>
                            

                                {/*<RX.View style={styling.sideMar}>*/}
                                {/*<RX.Text style={ styling.sideText }>*/}
                                {/*Vehicle Model*/}
                                {/*</RX.Text>*/}
                                {/*<form>*/}
                                {/*<RX.TextInput*/}
                                {/*style={styling.Form}*/}
                                {/*placeholder="Model"*/}
                                {/*value={ this.state.carModel }*/}
                                {/*onChangeText={this.onChangeModel}*/}
                                {/*// defaultValue={ this.state.inputValue }*/}
                                {/*/>*/}
                                {/*</form>*/}
                                {/*</RX.View>*/}

                                {/* <RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Fuel Type
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Fuel Type"
                                            value={ this.state.fuelType }
                                            onChangeText={this.onChangeFuel}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>*/}

                                {/*<RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Car Variant
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Car Variant"
                                            value={ this.state.carVariant }
                                            onChangeText={this.onChangeCar}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>*/}

                                {/*<RX.View style={styling.sideMar}>
                                    <RX.Text style={ styling.sideText }>
                                        Previous Insurer
                                    </RX.Text>
                                    <form>
                                        <RX.TextInput
                                            style={styling.Form}
                                            placeholder="Car Variant"
                                            value={ this.state.existingInsurer }
                                            onChangeText={this.onChangeInsurer}
                                            // defaultValue={ this.state.inputValue }
                                        />
                                    </form>
                                </RX.View>*/}
                                {/* <Row className="show-grid">
                                    <Col  md={6} style={styling.marTop}>
                                        <RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>
                                    </Col>
                                    <Col  md={6} style={styling.marTop}>
                                        <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                        <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                            try
                                        </RX.Button>

                                    </Col>
                                </Row>*/}
                                <Row className="show-grid">
                                    <Col md={10}  >
                                        <code style={styling.mobFont}><Checkbox>No Claims Last Year</Checkbox></code>
                                        <code style={styling.mobFont}><Checkbox>I Don't Know My Policy Expiry Date</Checkbox></code>
                                    </Col>

                                    {/*<Col xs={10} md={10}><code></code></Col>*/}
                                </Row>
                                <Row className="show-grid">
                                    <Col md={12} style={styling.marTop10}>
                                        {/*<RX.Button   onPress={()=> this.onChangePost() }>Submit</RX.Button>*/}
                                        <Button  style={styling.btnMaxWidth} bsStyle="primary">Next</Button>
                                        
       <RX.Button style={ _styles.roundButton } onPress={ this.props.onNavigateEight }>
    <RX.Text style={ _styles.buttonText }>
   NEXT
    </RX.Text>
    </RX.Button>
   

                                    </Col>
                                    {/*<Col  md={6} style={styling.marTop}>
                                        <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                                        <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
                                            try
                                        </RX.Button>

                                    </Col>*/}
                                </Row>


                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Grid>

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

