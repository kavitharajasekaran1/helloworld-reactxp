// /*
//  * This file demonstrates a basic ReactXP app.
//  */

import React from 'react';
import RX from 'reactxp';
// import {Checkbox} from'react-native'
import { createElement, PureComponent } from 'react';
import ArrowKeyNavigation from 'boundless-arrow-key-navigation';

import SweetAlert from 'react-swal';
var uniqid = require('uniqid');
// var Select = require('react-select');

const excelToJson = require('convert-excel-to-json');
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

import { Dropdown, DropdownToggle, DropdownMenu as dDropdownMenu, DropdownItem  } from 'reactstrap';




// import BlinkView from 'react-native-blink-view'



// import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField,Checkbox,Button} from 'react-bootstrap';



const styles = {  
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    }),

   
        scroll1: RX.Styles.createViewStyle({

        
            width: "1440px",
            height: "58px",
            backgroundColor: "#222222",
          }), 

    days: RX.Styles.createScrollViewStyle({
        fontFamily: 'arial',
        
               
        transition: 'all',
        }),
        StyleSheet:RX.Styles.createScrollViewStyle({
            containerStyle: {
              borderWidth: 1,
              borderRadius: 2,
              borderColor: '#ddd',
              borderBottomWidth: 0,
            
              
              
              shadowRadius: 2,
              elevation: 1,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 10,
              shadowOffset:{  width: 10,  height: 10,  },
shadowColor: 'black',
shadowOpacity: 1.0,
            }
          }),
        
        day:RX.Styles.createScrollViewStyle({
            width: 30,
            height: 30,
            cursor: 'pointer',
            borderRadius: '50%',
            display: 'block',
            float: 'left',
            background: '#CCC',
            textalign: "center",
            lineHeight: 30,
            margin: 0,
        }),
            

        image:RX.Styles.createViewStyle({
            height: 45,
            width:22    ,
            fontsize:30,
            backgroundColor:'#654e4e00',
            marginTop:10,
            position:'center',
        }),

            sibling:RX.Styles.createScrollViewStyle({ 
                transform: 'scale(1.3)',
            }),
            current:RX.Styles.createScrollViewStyle({ 
                transform: 'scale(1.8)',
                zindex: 5,
                position:'relative'.check_me2,
            }),
        hover :RX.Styles.createScrollViewStyle({
                background: "#BBB",
            }),
            
            ballMenuContainer:RX.Styles.createViewStyle({
                position: 'absolute',
                right: 25,
                top:0
            }), 
            
        
    





    container: RX.Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }),
    helloWorld: RX.Styles.createTextStyle({
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 28
    }),
    welcome: RX.Styles.createTextStyle({
        fontSize: 32,
        marginBottom: 12
    }),
    TextInputStyle:RX.Styles.createTextStyle({
        color:'blue',
    }),
    TextInputStyle1:RX.Styles.createTextStyle({
        color:'blue',
    }),

    button1: RX.Styles.createButtonStyle({
        backgroundColor: '#ddd',
        borderWidth: 1,
        margin: 20,
        padding: 12,
        borderRadius: 50,
        borderColor: 'black',
        borderRadius: 0,
        height:100,
        width:100,
        marginLeft:-450
    }),
    button2: RX.Styles.createButtonStyle({
        backgroundColor: '#ddd',
        borderWidth: 1,
        margin: 20,
        padding: 12,
        borderRadius: 50,
        borderColor: 'black',
        borderRadius: 0,
        height:100,
        width:100,
        marginTop:-95
    }),
    button3: RX.Styles.createButtonStyle({
        backgroundColor: '#ddd',
        borderWidth: 1,
        margin: 20,
        padding: 12,
        borderRadius: 50,
        borderColor: 'black',
        borderRadius: 0,
        height:100,
        width:100,
        marginRight:-421,
        marginTop:-100
    }),
    button1Hover: RX.Styles.createButtonStyle({
        borderRadius: '500%',
        backgroundColor:'pink'
    }),
    button2Hover: RX.Styles.createButtonStyle({
        borderRadius: '500%',
        backgroundColor:'pink'
    }),
    button3Hover: RX.Styles.createButtonStyle({
        borderRadius: '500%',
       backgroundColor:'pink'
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
    // box:RX.Styles.createTextStyle({ 
    //     float: 'left',
    //     height: 100,
    //     width: 350,
    //     margin: 20,
    //     padding: 1,
    //     border: 'solid',
    //     borderRadius: 10,
    //     backgroundColor: 'black'
    // }),
    button1Text: RX.Styles.createTextStyle({
        alignContent:'center',
        
    })
};
//   var B= this.refs.check_me2.checked;


export default class MainPanel extends RX.Component{
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
        this.state = {
            isHidden: true
          }
         global.samplevar="kavitha, this is a test";
         global.index,
         global.index2,
         global.index1
        //  global.input[2]=this.refs.check_me1.checked;
        // var c= this.refs.check_me1.checked;
        // global.B=c
        // console.log(global.B)
        //  B= this.googleInput;
        //  console.log(B)
         
        //  global.input = new Array();
        //  console.log(this.refs.check_me1.checked)
       


        this.textInput = React.createRef(),
        // this.ShowMaxAlert = this.ShowMaxAlert.bind(this);

        this.state={
            items:"",
            checked:false,
            TextInput:'',
            showme:false,
            checkboxValue:false,
                    items: [ 'lorem', 'ipsum', 'dolor' ],

            
           
           
            
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

    // GetValueFunction = (ValueHolder) =>{
      
    //     var Value = ValueHolder.length.toString() ;
   
    //     this.setState({TextValue : Value}) ;
      
    //    }

    // onChangePost=()=> {
    // this.props.onPressNavigate();

    // } 
    
    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }


    
    toggleCheckboxValue= () => {
        this.setState({checkBoxValue: !this.state.checkboxValue});
      }
    
      save1=  () =>{
        console.log("WELCOME" +this.refs.check_me.checked)
      }

      bigImg=(x)=> {
        height = "64px";
       width = "64px";
    }

    normalImg=(x) =>{
      height = "32px";
      width = "32px";
    }
    deleteAccount(e) {
        console.log("Deleting Account")
      }
     
      logout(e) {
        console.log("Logging out")
      }

  save=(value)=> {
    // console.log(this.refs.check_me.checked);
    var input= new Array()


     input[2]=this.refs.check_me1.checked;
    // var  c=this.refs.check_me1.checked;
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
     

    var count =0;
    for(i=0;i<5;i++)
    {
   
    if(input[i]==true)
    {
    count =count + 1;
    }
   
    
    } 
    console.log(+count + "is checked")
    this.setState({TextValue : +count +"selected"}) ;
    const result = excelToJson({
        sourceFile: 'SOME-EXCEL-FILE.xlsx',
        sheets:[{
            name: 'sheet1',
            header:{
                rows: 1
            },
            columnToKey: {
                H: 'Model Code',
                B: 'Model Name'
            }
        
        }]
    })
    console.log(result,"resulllllllll"),
    this.props.onPressNavigate()
    
  }

//   focus1 =(value)=>{
//       if(this.refs.passcode1.length<4)
//       this.refs.passcode2.focus()
//       console.log(this.refs.passcode1.length)
//   }

// operation1=()=>{
//     if( this.refs.check_me1.checked)
//     {
//         global.index=0;
//     }
// }


  GetValueFunction = (ValueHolder) =>{
      
    var Value = ValueHolder.length.toString() ;
    console.log(+Value)
    if(Value>4)
    {
this.refs.check1.focus();
    }

       }



       GetValueFunction1 = (ValueHolder) =>{
      
        var Value = ValueHolder.length.toString() ;
        console.log(+Value)
        if(Value>4)
        {
    this.refs.check2.focus();
        }
    
           }


           GetValueFunction2 = (ValueHolder) =>{
      
            var Value = ValueHolder.length.toString() ;
            console.log(+Value)
            if(Value>4)
            {
        this.refs.check3.focus();
            }
        
               }


               GetValueFunction3 = (ValueHolder) =>{
      
                var Value = ValueHolder.length.toString() ;
                console.log(+Value)
                if(Value>4)
                {
            this.refs.check4.focus();
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

    operation=()=>{
        // if( this.refs.check_me1.checked==true)
        // {
            // var c=global.B
            // console.log(c.checked)
            // console.log(this.refs.)
            // console.log(global.input[2])

            // // if(global.input==true)
            console.log("hi")
            if(true)
            {
                console.log("hiiiii5")
            this.setState({ showme:!this.state.showme})
            console.log("hiiiii")
        }
        this.props.onPressNavigate();

    }

    // onCheckChange(idx) {
    //     return () => {
    //         const items = this.state.items.concat();
    //         items[idx].checked = !items[idx].checked;
    //         this.setState({items});
    //     }
    // }

    totalChecked() {
        return this.state.items.filter(props => props.checked).length;
    }


//  logChange(val) {
//     console.log("Selected: " + val)
//     } 


    render() {
      let rows=[];
    //   var x=document.getElementById("myselect")
    console.log("vijay")
       dropdownItem = ["Hardley Davidson","Royal Enfield","HERO MOTOCORP","Honda Motors Ltd.",
      "KTM","TRIUMPH","Ducati","YAMAHA","BMW","HERO ELECTRIC","MAHINDRA","TVS","SUZUKI","ELECTROTHERM PVT LTD",
      "Hero Ultra","BAJAJ","Hero Honda","Piaggio","BAJAJ/FORCE MOTORS","APRILIA","LML","DSK BENELLI","DSK HYOSUNG",
      "KAWASAKI","Yezdi","UM Motorcycles","SPEED BRAIN","INDIAN MOTOCYCLE CO LTD","MOTO GUZZI","Kinetic Engg","Yamaha"]
    //    console.log(dropdownItem)
       console.log(dropdownItem[0],"kavitha")

      for (var i = 0; i < dropdownItem.length; i++) {
        console.log("hhhhhhhhhhhhhhhh")

          rows.push(< option value={dropdownItem[i]}/>);
           
      } 
console.log(rows,"vijaaaaaaaaaaaaaaaaaaay")
        
        return (


            
            

            <RX.View useSafeInsets={ true }>
                <RX.ScrollView style={ styles.scroll }>
                    <RX.View style={ styles.container }>
                    
                        <RX.Animated.Text style={ [ this._animatedStyle] }>
                            Hello World
                        {/* </RX.Animated.Text> */}
                        <RX.Text style={ styles.welcome }>
                            Welcome to ReactXP
                        </RX.Text>
                        <RX.Text style={ styles.instructions }>
                            Edit App.js to get started
                        </RX.Text>
                        <RX.Link style={ styles.docLink } url={ 'https://microsoft.github.io/reactxp/docs' }>
                            View ReactXP documentation
                        </RX.Link>

 

 <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
 <DropdownToggle caret>
          Dropdown
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>





 <DropdownMenu userName="Chris Smith">
        <MenuItem text="Home" location="/home" />
        <MenuItem text="Edit Profile" location="/profile" />
        <MenuItem text="Change Password" location="/change-password" />
        <MenuItem text="Privacy Settings" location="/privacy-settings" />
        <MenuItem text="Delete Account" onClick={this.deleteAccount} />
        <MenuItem text="Logout" onClick={this.logout} />
      </DropdownMenu>
      {/* <select id="myselect">{rows} */}
  {/* <option value="volvo">{rows}</option> */}
  {/* <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option> */}
{/* </select> */}
      


{/* <Select
  name="form-field-name"
  value="one"
  options={options}
 // onChange={logChange}
/> */}



        
        <div className='spread'>
                <section>
                    <h6>Horizontal-only</h6>
                    <div className='demo-loose-list' mode={ArrowKeyNavigation.mode.HORIZONTAL}>
                        {this.state.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                </section>
                </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4" >enquiryId</label> 
      <RX.TextInput
                                                 placeholder="Last Name"
                                                 //value={ this.state.lastname }
                                                 value={uniqid() }
                                                 // defaultValue={ this.state.inputValue }
                                             />
     
      </div>
      </div>  
      </RX.Animated.Text>
 
        <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={ './src/img/Car.svg' } style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'car Insurance' }
                    </RX.Text>
                </RX.Button>
                <RX.Button
                    style={ [styles.button2, this.state.button2Hover && styles.button2Hover] }
                    onHoverStart={ () => { this.setState({ button2Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button2Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={ './src/img/Bike.svg' } style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Bike Insurance' }
                    </RX.Text>
                </RX.Button>
                <RX.Button
                    style={ [styles.button3, this.state.button3Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button3Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button3Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={ './src/image/icici.png' } style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Term Insurance' }
                    </RX.Text>
                </RX.Button>

                 <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={ './src/image/icici.png' } style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Button With Hover' }
                    </RX.Text>
                </RX.Button>
                <RX.Button
                    style={ [styles.button2, this.state.button2Hover && styles.button2Hover] }
                    onHoverStart={ () => { this.setState({ button2Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button2Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={ './src/image/icici.png' } style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Button With Hover' }
                    </RX.Text>
                </RX.Button>
                <RX.Button
                    style={ [styles.button3, this.state.button3Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button3Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button3Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={ './src/image/icici.png' } style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Button With Hover' }
                    </RX.Text>
                </RX.Button>
 


 <RX.View style={styles.MainContainer}>

 <RX.Text style={styles.TextStyle}> { this.state.TextValue } </RX.Text>

 <RX.TextInput placeholder="Enter Textsds here" ref="check0"  onChangeText={ ValueHolder => this.GetValueFunction(ValueHolder) } style={styles.lock}
             />
         
            
         
             




<RX.TextInput
             
             placeholder="Enter Text here" ref="check1"
         
             onChangeText={ ValueHolder => this.GetValueFunction1(ValueHolder) }
         
             style={styles.lock}
           />


           <RX.TextInput
             
             placeholder="Enter Text here" ref="check2"
         
             onChangeText={ ValueHolder => this.GetValueFunction2(ValueHolder) }
         
             style={styles.lock}
           />
<RX.TextInput
             
             placeholder="Enter Text here" ref="check3" onChangeText={ ValueHolder => this.GetValueFunction3(ValueHolder) }
         
             style={styles.lock}
           />

          
           {/* <RX.view style={styles.scroll1} */}
           />
             
            
         
             
         
             


           </RX.View> 
           {/* <div>
               {this.state.showme ? <div>hi this test</div>:null} 
               </div>  */}



<input ref="checkes" type="checkbox" />checkme



<label>
        <input type="checkbox"
          checked={this.state.isChecked}
          onChange={this.toggleChange}
        />
        Check Me!
       </label>
       <div style={styles.box}>
			<h2>Title</h2>
			<img src="images/meni1.png" />
			<p></p>
			</div>
		
			<div style={styles.box}>
			<h2>Title2</h2>
			<p></p>
			</div>
  
	
			<div style={styles.box}>
			<h2>Title3</h2>
			<p></p>
			</div>
  
		
			<div style={styles.box}>
			<h2>Title4</h2>
			<p></p>
			</div> 

        <div className="checkbox">
                <label>


                <input type="checkbox" ref="check_me" value={this.state.checkboxValue} onChange={this.toggleCheckboxValue} /> Check!!!!




                    {/* <input type="checkbox" ref="check_me" onChangeText={ () => this.operation() }/> Check me out */}
                    <input type="checkbox" ref="check_me1"  /> Check me out
                    hi
                    <input type="checkbox" ref="check_me2" /> Check me out
                    <input type="checkbox" ref="check_me3" /> Check me out
                    


                     {/* <input type="text" ref="check1" maxLength="4" onChangeText={ this.setfoucs() }/>  */}
                    {/* <input type="text" ref="check2" maxLength="4"/> 
                    <input type="text" ref="check3" maxLength="4"/> 
                    <input type="text" ref="check4" maxLength="4"/>  */}

                    <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={ './src/image/icici.png' } style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Button With Hover' }
                    </RX.Text>
                </RX.Button>

                <div id="ballMenuContainer">
<div id="menuBall1" class="menuBall">
  <a href="#" class="ball blueball">
    <div class="menuText"style={ [styles.ballMenuContainer] }>
        Party Info
    </div>
  </a>
  </div>
  </div>
                    
                    
                    
                    <RX.Button className="btn btn-default" style={styles.StyleSheet}    >Submit!!!</RX.Button> 
                </label>
            </div>



            <div>
            <RX.Text style={styles.TextStyle}> { this.state.TextValue }  <button className="btn btn-default"    onClick={this.save} >Submit</button> </RX.Text>
            </div>
            {/* <RX.Text type="checkbox" value={this.state.check} onChange={()=>this.checkboxTest}/> */}
          


<div class="row">
<div class="col-sm-3">
{/* <Image src="Image/Capture.PNG" style="width:100px; height:100px;" /> */}
<input id="Checkbox1" type="checkbox"  />
</div>
<div class="col-sm-3">
{/* <Image src="Image/grt.png" style="width:100px; height:100px;" /> */}
<input id="Checkbox2" type="checkbox" />
</div>
<div class="col-sm-3">
{/* <Image src="Image/logo.png" style="width:100px; height:100px;" /> */}
<input id="Checkbox3" type="checkbox" />
</div>
<div class="col-sm-3">
{/* <Image src="Image/Navigation_icon.png" style="width:100px; height:100px;" /> */}
<input id="Checkbox4" type="checkbox" />
</div>
</div>
{/* <input id="Button1" type="button" value="button" onPress={()=> this.onChangePost()}/> */}
       
       
            
     
			<div id="box">
			<h2>Title</h2>
			<img src="images/meni1.png" />
			<p></p>
			</div>
		
			<div id="box">
			<h2>Title2</h2>
			<p></p>
			</div>
  
	
			<div id="box">
			<h2>Title3</h2>
			<p></p>
			</div>
  
		
			<div style={styles.box}>
			<h2>Title4</h2>
			<p></p>
			</div>      

            
    











{/* <div>
                { this.state.items.map((props, idx) => (
                    <RX.Item {...props} key={idx} onCheckChange={this.onCheckChange(idx)} />
                )) }
                Total checked: { this.totalChecked() }
            </div> */}




                       
                        {/* <RX.Button style={ styles.roundButton } onPress={()=> this.onChangePost()}> */}




 
   

                        <RX.Button style={ styles.roundButton } onPress={()=> this.operation()}>

                            <RX.Text style={ styles.buttonText }>
                                See More Examples
                            </RX.Text>
                        </RX.Button>
                    </RX.View>
                </RX.ScrollView>
            </RX.View>

            



        );
    }
}











