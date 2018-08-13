/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import {default as RXVideo} from 'reactxp-video';
// import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField,Checkbox,Button} from 'react-bootstrap';

import ProgressIndicator from './ProgressIndicator';
import ToggleSwitch from './ToggleSwitch';

const styles = {
    scroll: RX.Styles.createScrollViewStyle({
        alignSelf: 'stretch',
        backgroundColor: '#f5fcff'
    }),
    container: RX.Styles.createViewStyle({
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
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
        borderRadius: 16,
        backgroundColor: '#7d88a9'
    }),
    buttonText: RX.Styles.createTextStyle({
        fontSize: 16,
        marginVertical: 6,
        marginHorizontal: 12,
        color: 'white'
    })
};

export default class SecondPanel extends RX.Component {

    _progressTimerToken;

    constructor(props) {
        super(props);
        this._playVideo = this._playVideo.bind(this);
        this._onMountVideo = this._onMountVideo.bind(this);
        this._onChangeToggle = this._onChangeToggle.bind(this);
        this.state = {
            toggleValue: true,
            progressValue: 0,
            showme:false,
            showme1:false,
            showme2:false
        };
    }

    componentDidMount() {
        if( global.index==1)
            {
                console.log("hisp")
                this.setState({ showme:!this.state.showme})
                
                 
            }



            if( global.index1==1)
            {
                console.log("hisp")
                this.setState({ showme1:!this.state.showme})
                
                 
            }

            if( global.index2==1)
            {
                console.log("hisp")
                this.setState({ showme2:!this.state.showme})
                
                 
            }

        this._startProgressIndicator();

        
    }

    componentWillUnmount() {
        this._stopProgressIndicator();
    }

    // operation=()=>{
        // if( this.refs.check_me1.checked==true)
        // {
            // var c=global.B
            // console.log(c.checked)
        //   if()
        //     console.log(global.input[2])

        //     // if(global.input==true)
        //     if()
        //     {
        //     this.setState({ showme:!this.state.showme})
        //     console.log()
        // }
    
        // operation=()=>{

        //     if( global.index==1)
        //     {
        //         console.log("hisp")
        //         this.setState({ showme:!this.state.showme})
                
                 
        //     }

        //     if( global.index1==1)
        //     {
        //         console.log("hisp")
        //         this.setState({ showme1:!this.state.showme})
                
                 
        //     }

        //     if( global.index2==1)
        //     {
        //         console.log("hisp")
        //         this.setState({ showme2:!this.state.showme})
                
                 
        //     }




        // }





    render() {
        
        return (
            <RX.View useSafeInsets={ true }>
                <RX.ScrollView style={ styles.scroll }>
                    <RX.View style={ styles.container }>
                        <RX.Button style={ styles.roundButton } onPress={ this.props.onNavigateBack }>
                            <RX.Text style={ styles.buttonText }>
                                Go Back
                            </RX.Text>
                        </RX.Button>
<RX.Text
value={ this.state.operation }
 onChange={ this.operation}
                      
/>
                        <RX.Text style={ styles.titleText }>
                            Here is a simple control built using ReactXP
                        </RX.Text>
                        <ToggleSwitch
                            value={ this.state.toggleValue }
                            onChange={ this._onChangeToggle }
                        />

                        <RX.Text style={ styles.titleText }>
                            Here is an SVG image using the ImageSvg extension
                        </RX.Text>


 <div>
               {this.state.showme1 ? <div>hi vignesh!!!!! </div>:null}  
               
               </div> 


               <div>
               {this.state.showme2 ? <div>hi harini!!!!! </div>:null}  
               
               </div> 






  <div>
               {this.state.showme ? <RX.View style={styles.clientSec}>
                   <Row className="show-grid hidden-xs">
                       <Col  md={3} style={styling.marTop}>
                           {/*<RX.Text>Test</RX.Text>*/}
                           {/*<RX.Image source={ './src/img/Bharti.png' } style={ [styles.image ] } />*/}
                       </Col>
                      <Col class="RS" md={3} style={styling.marTop}>
                           
                           <RX.Image source={ './src/img/royal.jpg' } style={ [styles.image ] } />
                         
                       </Col> </Row>
<Row>

<Col  md={3} style={styling.marTop}>
<RX.Text style={[styles.clientText]}>Ergo Insurance</RX.Text>
</Col>
</Row>
<Row>
<Col  md={3} style={styling.marTopcs}>
                           <RX.Text style={[styles.clientText]}>Basic Permium:</RX.Text>
                       </Col>
<Col  md={3} style={styling.marTop}>
                           <RX.Text style={[styles.subText]}>3,17,402</RX.Text>
                       </Col>
</Row>
</RX.View>:null}  
               
               </div> 


   {/* <RX.Button style={ styles.roundButton } onPress={()=> this.operation()}>hi</RX.Button> */}

                        <ProgressIndicator
                            style={ styles.progressMargin }
                            progress={ this.state.progressValue }
                            fillColor={ '#ddd' }
                            size={ 32 }
                        />

                        <RX.Text style={ [styles.titleText, styles.videoTitleText] }>
                            Here is a video using the Video extension
                        </RX.Text>

                        {/* {this.operation()} */}
                        <RXVideo
                            ref={ this._onMountVideo }
                            style={ styles.video }
                            source={ 'https://www.w3schools.com/html/mov_bbb.mp4' }
                            loop={ true }
                            onCanPlay={ this._playVideo }
                        />
                        <RX.Text>{global.samplevar}</RX.Text>
                        {/* <RX.Text>{global.input[2]}</RX.Text> */}

                    </RX.View>
                </RX.ScrollView>
            </RX.View>
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

    // Note that we define this as a variable rather than a normal method. Using this
    // method, we prebind the method to this component instance. This prebinding ensures
    // that each time we pass the variable as a prop in the render function, it will
    // not change. We want to avoid unnecessary prop changes because this will trigger
    // extra work within React's virtual DOM diffing mechanism.
    _onChangeToggle(newValue) {
        this.setState({toggleValue: newValue});
    }
}
