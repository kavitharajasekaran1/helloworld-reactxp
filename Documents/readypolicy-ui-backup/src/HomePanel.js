/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import {default as RXVideo} from 'reactxp-video';
import Ripples from 'react-ripples'


import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField} from 'react-bootstrap';
/*const {
    Welcome
} = TodoStyles;*/
const styles = {
    scrollContainer:  RX.Styles.createViewStyle({
        flex: 1,
        backgroundColor: 'emerald',
    }),
    video: RX.Styles.createViewStyle({
        height: 150,
        width: 1302,

    }),
    scrollViewContainer: RX.Styles.createViewStyle({
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 2,
        backgroundColor:'#8080803b',

    }),
    scrollImage: RX.Styles.createImageStyle({
    margin: 2,
    width: '100%',
    height: 250,
    backgroundColor:''
    
    }),
    homeImageLayout: RX.Styles.createImageStyle({
    height: 220,
    width: '100%',
    padding: 2,
    flex:1,
    alignSelf:'stretch',
    display:'block',
    position:'absolute',
    backgroundColor:'#1d6779a8'
}),
scrollBox: RX.Styles.createImageStyle({
    margin: 10,
    width: '100%',
    flexDirection:'row'
}),
ScrollBox: RX.Styles.createImageStyle({
    margin: 10,
    width: '100%',
    flexDirection:'row'
}),
roundButton: RX.Styles.createViewStyle({
    margin: 16,
    borderRadius: 16,
    backgroundColor: '#ff0000ab',
    justifyContent: 'CENTER'
    }),
  
homeScrollImageLogo: RX.Styles.createImageStyle({
    width: 60,
    height: 60,
    float:'left',
    flexDirection: 'column',
    justifyContent: 'space-between',
}),
image:RX.Styles.createViewStyle({
    height: 50,
    width:50,
    marginTop:'20',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:10
}),
imagey:RX.Styles.createViewStyle({
    height: 25,
    width:25,
    marginTop:'20',
    alignItems:'center'
}),
imagey1:RX.Styles.createViewStyle({
    height: 25,
    width:25,
    marginTop:'20',
    alignItems:'center',
    
}),
// IMage:RX.Styles.createViewStyle({
//     width:"100%",
//     height:201,
//    backgroundColor: 'grey'
// }),
IMage:RX.Styles.createViewStyle({
    //     width:"100%",
    //     height:72,
    //    backgroundColor: '#1d6779a8'
    height: 63,
           width: 325,
           marginTop:10,
           marginLeft:-38,
           display:'flex',
           position:'relative'
           
    }),
Image:RX.Styles.createViewStyle({
    height: 50,
    width:'50%',
    marginTop:'20'
}),
    HomeScrollImageLogo: RX.Styles.createImageStyle({
        width:97,
        height: 72,
        paddingVertical:20,
        marginLeft:3,
        marginTop:51
    }),
    
        scroll: RX.Styles.createScrollViewStyle({
            alignSelf: 'stretch',
            backgroundColor: '#f5fcff'
        }),
        container: RX.Styles.createViewStyle({
            marginHorizontal: 4,
            marginVertical: 30,
            paddingHorizontal: 8,
            backgroundColor:'#1c191ff2',
           
   
}),
marTop:RX.Styles.createViewStyle({
    marginTop:10,
}),
policy:RX.Styles.createTextStyle({
    fontSize: 17,
    marginBottom: 16,
    backgroundColor:'#grey',
    color:'#231c1c',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: -20,
    marginTop:59,
    textAlign:'CENTER',
   
   
}),
footer: RX.Styles.createViewStyle({
    position: 'absolute',
    
    minWidth: '100%',
    backgroundColor: 'rgba(26,153,228,.97)',

    justifyContent:'center',
    alignSelf:'center',
    height:'10',
    bottom:'0',
    marginTop:'40',
    clear:'both'
    
}),
 
scrollBoxText: RX.Styles.createTextStyle({
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'Center',
   color:'#1a153b',
   


}),
web: RX.Styles.createTextStyle({
   maxWidth:'100%',
   padding:30
  
}),
fert: RX.Styles.createTextStyle({
  margin: 'auto',
  width:'80%',

 }),

ScrollBoxText: RX.Styles.createTextStyle({
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'Center',
   color:'white'
}),
welcome: RX.Styles.createTextStyle({
    fontSize: 40,
    color: 'white',
}),
remo:RX.Styles.createTextStyle({
    width:"100%",
    height:201,
}),
read: RX.Styles.createScrollViewStyle({
    width:'100%'
}),
rega: RX.Styles.createScrollViewStyle({

    margin:'auto',
}),
container123: RX.Styles.createViewStyle({
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'#423f56c4',
    backgroundColor:'#80808000',
    height:237,
    padding:-10,
    marginTop:-20
}),
squarebutton:RX.Styles.createViewStyle({
    color:'white',
    width:'100',
    height:50,
    marginLeft:-14,
    marginTop:-40

}),
button1Text:RX.Styles.createButtonStyle({
    
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'Center',
}),
button1: RX.Styles.createButtonStyle({
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 20,
    padding: 12,
    borderRadius: 50,
    borderColor: 'white',
    borderRadius: 0,
    height:100,
    width:100,
    marginLeft:300,
    marginTop:-160
}),
button11: RX.Styles.createButtonStyle({
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 20,
    padding: 12,
    borderRadius: 50,
    borderColor: 'white',
    borderRadius: 0,
    height:100,
    width:100,
    marginLeft:300,
    marginTop:-100,
    
}),
button2: RX.Styles.createButtonStyle({
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 20,
    padding: 12,
    borderRadius: 50,
    borderColor: 'white',
    borderRadius: 0,
    height:100,
    width:100,
    marginTop:-160,
    marginLeft:200
}),
button22: RX.Styles.createButtonStyle({
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 20,
    padding: 12,
    borderRadius: 50,
    borderColor: 'white',
    borderRadius: 0,
    height:100,
    width:100,
    marginTop:-100,
    marginLeft:200
}),
button3: RX.Styles.createButtonStyle({
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 20,
    padding: 12,
    borderRadius: 50,
    borderColor: 'white',
    borderRadius: 0,
    height:100,
    width:100,
    marginLeft:200,            
    marginTop:-160
}),
button33: RX.Styles.createButtonStyle({
    backgroundColor: 'white',
    borderWidth: 1,
    margin: 20,
    padding: 12,
    borderRadius: 50,
    borderColor: 'white',
    borderRadius: 0,
    height:100,
    width:100,
    marginLeft:200,            
    marginTop:-100
}),
button1Hover: RX.Styles.createButtonStyle({
    borderRadius: '500%',
    backgroundColor:'#776fce',
    
}),
button2Hover: RX.Styles.createButtonStyle({
    borderRadius: '500%',
    backgroundColor:'#de6d75'
}),
button3Hover: RX.Styles.createButtonStyle({
    borderRadius: '500%',
   backgroundColor:'pink'
}),
button11Hover: RX.Styles.createButtonStyle({
    borderRadius: '500%',
    backgroundColor:'#42ceb2'
}),
button22Hover: RX.Styles.createButtonStyle({
    borderRadius: '500%',
    backgroundColor:'#496fbc'
}),

button33Hover: RX.Styles.createButtonStyle({
    borderRadius: '500%',
   backgroundColor:'#e6a65a'
}),
navbar:RX.Styles.createViewStyle({

overflow: 'hidden',
  backgroundColor: '#383838',
  position: 'fixed',
  top: 0,
  width: '100%'
}),
navbarHover:RX.Styles.createViewStyle({
    background: '#ddd',
  color: 'black',
}),
homehover: RX.Styles.createButtonStyle({
  
    backgroundColor:' #e86680',
    width:100,
    height:64,
    alignItems:'center',
    marginTop:-19
   
}),
homehover1: RX.Styles.createButtonStyle({
  
    backgroundColor:' #e86680',
    width:100,
    height:64,
    alignItems:'center',
    marginTop:-19
}),
homehover2: RX.Styles.createButtonStyle({
  
    backgroundColor:' #e86680',
    width:100,
    height:64,
    alignItems:'center',
    marginTop:-19
   
}),
homehover3: RX.Styles.createButtonStyle({
  
   
    backgroundColor:'#e86680',
    width:100,
    height:64,
    alignItems:'center',
    marginTop:-19
   
}),
    

};
var token
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
    onChangePost  () {
        
        console.log(token,"tokenab")
        this.props.onPressSuper(token);
        
    }
    onChangePostt  () {
        console.log(token,"tokenab")
        this.props.onNavigateSuperCar(token);
        
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
        console.log("token",token)
        return (
           
                   
                    
                   


            
           
<RX.View class="mobile-skin ipnone6 black portrait" style={styles.scrollViewContainer}>
                <RX.View style={styles.scrollImage}>
                
       
       <RX.View style={ styles.container123 }>
           <RX.Image source={ './src/img/Logo.svg' } style={ [styles.IMage] }/>
            {/* <RX.Text style={ styles.policy }></RX.Text>  */}
            
           
            {/* </RX.Image> */}
            
              <RX.Text style={ styles.policy }>Plan your insurance on this platform{'\n'}and get RS 100 off your first policy</RX.Text> 
              </RX.View>
              </RX.View>
    
    
   
   
      <Ripples color='rgba(0,0,0,.5)' during='300' ripple-width='700'> <RX.Button style={styles.button1Hover} borderRadius='100'>hi</RX.Button></Ripples>        
     <RX.Button
                    style={ [styles.button1, this.state.button1Hover && styles.button1Hover] }
                    onHoverStart={ () => { this.setState({ button1Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button1Hover: false }); } }
                    onPress={()=> this.onChangePostt() }
                        // no-op
                    
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
                    onPress= {()=> this.onChangePost() }
                        // no-op
                    
                >
            <RX.Image source={ './src/img/Bike.svg' } style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button1Hover && styles.button1TextHover] }>
                        { 'Two Wheeler' }
                    </RX.Text>
                </RX.Button>
                
                
                <RX.Button
                    style={ [styles.button3, this.state.button3Hover && styles.button3Hover] }
                    onHoverStart={ () => { this.setState({ button3Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button3Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={'./src/img/Term.svg'} style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button3Hover && styles.button1TextHover] }>
                        { 'Term Insurance' }
                    </RX.Text>
                </RX.Button>
                
                

                 <RX.Button
                    style={ [styles.button11, this.state.button11Hover && styles.button11Hover] }
                    onHoverStart={ () => { this.setState({ button11Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button11Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={'./src/img/Health.svg'} style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button11Hover && styles.button1TextHover] }>
                        { 'Health Insurance' }
                    </RX.Text>
                </RX.Button>
                
                
                <RX.Button
                    style={ [styles.button22, this.state.button22Hover && styles.button22Hover] }
                    onHoverStart={ () => { this.setState({ button22Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button22Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={'./src/img/Travell.svg'} style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button22Hover && styles.button1TextHover] }>
                        { 'Travel Insurance' }
                    </RX.Text>
                </RX.Button>
                
                <RX.Button
                    style={ [styles.button33, this.state.button33Hover && styles.button33Hover] }
                    onHoverStart={ () => { this.setState({ button33Hover: true }); } }
                    onHoverEnd={ () => { this.setState({ button33Hover: false }); } }
                    onPress={ () => {this.save()
                        // no-op
                    } }
                >
            <RX.Image source={'./src/img/Add Existing Insurance.svg'} style={ [styles.image] } />
                    <RX.Text style={ [styles.button1Text, this.state.button33Hover && styles.button1TextHover] }>
                        { ' Existing policy' }
                    </RX.Text>
                </RX.Button>
                {/* </div> */}
             
                <RX.View style={styles.navbar}>
                
                


<Row className="show-grid hidden-xs">
    <Col  md={2} style={styling.marTop}>
        {/*<RX.Text>Test</RX.Text>*/}
        {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
    </Col>
   <Col  md={2} style={styling.marTop}>
        {/*<RX.Text>Test1</RX.Text>*/}
        <RX.Button  style={ [ this.state.homehover && styles.homehover] }
                    onHoverStart={ () => { this.setState({ homehover: true }); } }
                    onHoverEnd={ () => { this.setState({ homehover: false }); } } 
                    onPress={this.props.onPressHome }>
                    <RX.Image source={ './src/img/Home.svg' } style={ [styles.imagey1 ] } />
                    <RX.Text style={styles.ScrollBoxText}>Home</RX.Text>

                    </RX.Button>
    </Col>
    <Col  md={2} style={styling.marTop}>
        <RX.Button style={ [ this.state.homehover1 && styles.homehover1] }
                    onHoverStart={ () => { this.setState({ homehover1: true }); } }
                    onHoverEnd={ () => { this.setState({ homehover1: false }); } }  onPress={ this.props.onNavigateRole }><RX.Image source={ './src/img/MyPolicies.svg' } style={ [styles.imagey] } />
        <RX.Text style={styles.ScrollBoxText}>My Policies</RX.Text>
        {/*<RX.Image source={ './src08/img/Bharti.png' } style={ [styles.image ] } />*/}
        </RX.Button>
    </Col>
    <Col  md={2} style={styling.marTop}>
        {/*<RX.Text>Test3</RX.Text>*/}
        <RX.Button style={ [ this.state.homehover2 && styles.homehover2] }
                    onHoverStart={ () => { this.setState({ homehover2: true }); } }
                    onHoverEnd={ () => { this.setState({ homehover2: false }); } } 
                     onPress={ this.props.onNavigateOne }>  
                      <RX.Image source={ './src/img/Remainder.svg' } style={ [styles.imagey] } />
        <RX.Text style={styles.ScrollBoxText}>Remainder</RX.Text>
        {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
    </RX.Button>
    </Col>
    <Col  md={2} style={styling.marTop}>
    <RX.Button style={ [ this.state.homehover3 && styles.homehover3] }
                    onHoverStart={ () => { this.setState({ homehover3: true }); } }
                    onHoverEnd={ () => { this.setState({ homehover3: false }); } }  > 
    
        <RX.Image source={ './src/img/Settings.svg' } style={ [styles.imagey] } />
        <RX.Text style={styles.ScrollBoxText}>Settings</RX.Text>
        </RX.Button>
        {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
    </Col>
   
    {/* <RX.Button bsStyle="info" onPress={()=> this._onChangeVar() }>Primary</RX.Button>
<RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateForth}>
<RX.Text style={ styles.buttonText }>
REGISTER
</RX.Text>
</RX.Button> */}
    {/*<Col  md={6} style={styling.marTop}>
        <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
        <RX.Button style={styling.button} onPress={ this.props.onNavigateEleven }>
            try
        </RX.Button>
    </Col>*/}
</Row>










                
                
                    {/* <RX.ScrollView style={ styles.container}> */}
                    
                                    
            
  </RX.View>
  


   </RX.View>
   
//    </RX.View>
  
  
 
    );
}
_playVideo() {
    if (this._mountedVideo) {
        this._mountedVideo.mute(true);
        this._mountedVideo.play();
    }
}

_onMountVideo(component) {
    this._mountedVideo = component;
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
}