/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import {Tabs,Tab,Grid,Row,Col,FormGroup,form,ControlLabel,FormControl,HelpBlock,DateTimeField,Checkbox,Button} from 'react-bootstrap';

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
   Ramp: RX.Styles.createViewStyle({
    position: 'relative',
    overflow: 'visible',
    backgroundcolor: 'transparent',
    flexgrow: 0,
    flexshrink: 0,
    height: '55px',
    width: '100px',
    margintop: '10px',
    borderradius: '10px',
    display: 'flex',
    // outlineStyle:"auto",
    // outlineColor:"red"
       
       
    }),
    Quotes: RX.Styles.createScrollViewStyle({
        fontSize: 15,
        color: '#0787d2',
        textTransform:'capitalize',
        marginTop:32,
        height:41,
        width:169,
        padding:4
    }),
   CLIENT: RX.Styles.createViewStyle({
        justifyContent: 'center',
        alignItems: 'left',
        backgroundColor:'#ffffff',
        padding:5,
        flex:1,
        flexDirection:'row',
        borderBottomWidth:4,
        borderColor:"#80808085",
       
    }),
    button0: RX.Styles.createImageStyle({
        marginTop: 16,
        borderRadius: 5,
        backgroundColor: '#2ecc71',
         height:46,
         width:127,
         justifyContent:'center',
         paddingTop: '13px'
    })
    

};

export default class EightPanel extends RX.Component{
    constructor(props) {
        super(props);
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
        console.log(this.props.navigatorRoute.res,"res");
        // this.state.test = this.props.navigatorRoute.res;


        let animation = RX.Animated.timing(this._translationValue, {
                toValue: 0,
                easing: RX.Animated.Easing.OutBack(),
                duration: 500
            }
        );

        animation.start();
    }

    _onPressEight = (res) => {
        console.log(res,"res");
        // this.setState({language: langValue});
    }

    render() {
        // var res=res;
        // var test = this.props.navigatorRoute.res;
        // console.log(this.props.navigatorRoute.res.items,"res");
        return (

            <RX.ScrollView style={ _styles.scroll }>
            <RX.View style={ styling.container }>
            <RX.Button  onPress={ this.props.onPressNavigate}><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                    <RX.Text style={styling.welcome }> Remainders </RX.Text>
                   </RX.Button>
                </RX.View>
                {/*<RX.View style={ styling.sort }>
                    <RX.View style={ styling.sorBor }>
                        <RX.View style={ styling.width }>
                        <RX.Text style={styling.sortText }>
                        Sort By
                    </RX.Text>
                        </RX.View>

                    <RX.Text style={styling.sortTexted }>
                            All
                        </RX.Text>
                    </RX.View>

                </RX.View>*/}
                {/*<RX.View>
                <Grid>
                    <Row className="show-grid">
                        <Col md={4} style={styling.marTop10}>
                            <Button  style={styling.btnMaxWidth} bsStyle="default">Next</Button>

                        </Col>
                        <Col md={4} style={styling.marTop10}>
                            <Button  style={styling.btnMaxWidth} bsStyle="default">Next</Button>

                        </Col>
                        <Col  md={4} style={styling.marTop}>
                            <RX.Button onPress={()=> this.onChangeDummy() }>Dummy</RX.Button>
                        </Col>
                    </Row>
                </Grid>
            </RX.View>*/}

                <RX.View style={ styling.pageAlign}>
                    <RX.View style={ styling.flute }>
                        <RX.Text style={ styling.head }>
                           
                            {/*  <ul className="PlayerList">
                                {
                                    this.props.navigatorRoute.res.items.map(function(player) {
                                        return <li key={player.id}>{player.name}</li>
                                    })
                                }
                            </ul>*/}
                        </RX.Text>
                    </RX.View>
                    <RX.View style={_styles.CLIENT}>
                        <Grid>
                            <Row className="show-grid" style={_styles.CLIENT} className="hidden-xs">

                                <Col  md={2}></Col>
                                <Col  md={2} xs={2}>
        
                                    <RX.Image source={ './src/img/Bike.svg' } style={ [_styles.Ramp] } />
                                    <div style={styling.CliEntHead}>Bike</div>
                                    <div style={styling.clientHead}>Royal Sundaram</div>
                                    <div style={styling.clientDate}>14/03/2018 - 13/03/2019</div>
                                   
                                </Col>

                                <Col md={3} xs={3} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHead }>
                                        ZWTV3100
                                        <div style={styling.tryHead}>Honda CB Tvs</div>
                                        <div style={styling.tryHead}>IDV: 87164</div>
                                    </RX.Text>

                                </Col>
                                <Col  md={5} xs={5} style={styling.marTop}>
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >

                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateRole }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.2325*
                                        </RX.Text>
                                        </div>
                                    {/* </RX.Button> */}
                                    <RX.Text style={ styling.quotes }>
                                        Expired on 13/03/2019
                                    </RX.Text>
                                   
                                </Col>
                            </Row>
                        </Grid>
                    </RX.View>

                    <RX.View style={_styles.CLIENT}>
                    <Grid>
                            <Row className="show-grid" style={_styles.CLIENT} className="hidden-xs">

                                <Col  md={2}></Col>
                                <Col  md={2} xs={2}>
                                    <RX.Image source={ './src/img/Bike.svg' } style={ [_styles.Ramp] } />
                                    <div style={styling.CliEntHead}>Bike</div>
                                    <div style={styling.clientHead}>Royal Sundaram</div>
                                    <div style={styling.clientDate}>14/03/2018 - 13/03/2019</div>
                                </Col>
                                <Col md={3} xs={3} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHead }>
                                        ZWTV3100
                                        <div style={styling.tryHead}>Honda CB Tvs</div>
                                        <div style={styling.tryHead}>IDV: 87164</div>
                                    </RX.Text>

                                </Col>
                                <Col  md={5} xs={5} style={styling.marTop}>
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >

                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateRole }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.2325*
                                        </RX.Text>
                                    {/* </RX.Button> */}
                                    </div>
                                    <RX.Text style={ _styles.Quotes }>
                                        Expires by 13/03/2019
                                    </RX.Text>
                                </Col>
                            </Row>
                        </Grid>
                    </RX.View>
                    <RX.View style={_styles.CLIENT}>
                        <Grid>
                            <Row className="show-grid" style={_styles.CLIENT} className="hidden-xs">

                                <Col  md={2}></Col>
                                <Col  md={2} xs={2}>
                                    <RX.Image source={ './src/img/Bike.svg' } style={ [_styles.Ramp] } />
                                    <div style={styling.CliEntHead}>Bike</div>
                                    <div style={styling.clientHead}>Royal Sundaram</div>
                                    <div style={styling.clientDate}>14/03/2018 - 13/03/2019</div>
                                </Col>
                                <Col md={3} xs={3} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHead }>
                                        ZWTV3100
                                        <div style={styling.tryHead}>Honda CB Tvs</div>
                                        <div style={styling.tryHead}>IDV: 87164</div>
                                    </RX.Text>

                                </Col>
                                <Col  md={5} xs={5} style={styling.marTop}>
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >

                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateRole }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.2325*
                                        </RX.Text>
                                    {/* </RX.Button> */}
                                    </div>
                                    <RX.Text style={ styling.quotes }>
                                        Expired on 13/03/2019
                                    </RX.Text>
                                </Col>
                            </Row>
                        </Grid>
                    </RX.View>

                      <RX.View style={_styles.CLIENT}>
                    <Grid>
                            <Row className="show-grid" style={_styles.CLIENT} className="hidden-xs">

                                <Col  md={2}></Col>
                                <Col  md={2} xs={2}>
                                    <RX.Image source={ './src/img/Bike.svg' } style={ [_styles.Ramp] } />
                                    <div style={styling.CliEntHead}>Bike</div>
                                    <div style={styling.clientHead}>Royal Sundaram</div>
                                    <div style={styling.clientDate}>14/03/2018 - 13/03/2019</div>
                                </Col>
                                <Col md={3} xs={3} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHead }>
                                        ZWTV3100
                                        <div style={styling.tryHead}>Honda CB Tvs</div>
                                        <div style={styling.tryHead}>IDV: 87164</div>
                                    </RX.Text>

                                </Col>
                                <Col  md={5} xs={5} style={styling.marTop}>
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >

                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateRole }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.2325*
                                        </RX.Text>
                                        </div>
                                    {/* </RX.Button> */}
                                    <RX.Text style={ _styles.Quotes }>
                                        Expires by 13/03/2019
                                    </RX.Text>
                                </Col>
                            </Row>
                        </Grid>
                    </RX.View>
                    <RX.View style={_styles.CLIENT}>
                    <Grid>
                            <Row className="show-grid" style={_styles.CLIENT} className="hidden-xs">

                                <Col  md={2}></Col>
                                <Col  md={2} xs={2}>
                                    <RX.Image source={ './src/img/Bike.svg' } style={ [_styles.Ramp] } />
                                    <div style={styling.CliEntHead}>Bike</div>
                                    <div style={styling.clientHead}>Royal Sundaram</div>
                                    <div style={styling.clientDate}>14/03/2018 - 13/03/2019</div>
                                </Col>
                                <Col md={3} xs={3} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHead }>
                                        ZWTV3100
                                        <div style={styling.tryHead}>Honda CB Tvs</div>
                                        <div style={styling.tryHead}>IDV: 87164</div>
                                    </RX.Text>

                                </Col>
                                <Col  md={5} xs={5} style={styling.marTop}>
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >

                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateRole }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.2325*
                                        </RX.Text>
                                    {/* </RX.Button> */}
                                    </div>
                                    <RX.Text style={ _styles.Quotes }>
                                        Expires by 13/03/2019
                                    </RX.Text>
                                </Col>
                            </Row>
                        </Grid>
                    </RX.View>
                    <RX.View style={styling.expired}>
                        <Grid  className="hidden-xs" >
                            <Row className="show-grid" >

                                <Col  md={2} style={styling.expired}></Col>
                                <Col  md={2}>
                                    <RX.Image source={ './src/img/icici.png' } style={ [styling.image] } />
                                    <div style={styling.clientHead}>ICIC Insurance</div>
                                    <div style={styling.clientDate}>12/04/2017 - 12/04/2018</div>
                                </Col>
                                <Col md={3} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHead }>
                                        AB4CCB123
                                        <div style={styling.tryHead}>Honda CB Hornet</div>
                                        <div style={styling.tryHead}>IDV: 1,25,300</div>
                                    </RX.Text>

                                </Col>
                                <Col  md={5} style={styling.marTop}>
                                <div style={_styles.button0}  >

                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.1,322*
                                        </RX.Text>
                                    {/* </RX.Button> */}
                                    </div>
                                    <RX.Text style={ styling.quotes }>
                                        Expired on 12/04/2017
                                    </RX.Text>
                                </Col>
                            </Row>
                        </Grid>
                    </RX.View>











                    {/*<RX.View style={styling.client}>
                        <RX.View>
                        <RX.Image source={ './src/img/Bharti.png' } style={ [styling.image] } />
                        <div style={styling.clientHead}>Bajaj Allianz</div>
                            <div style={styling.clientDate}>12/04/2017 - 12/04/2018</div>
                        </RX.View>
                        <RX.Text style={ styling.sideHead }>
                            DL4CCB1111
                            <div style={styling.tryHead}>Honda CB Hornet</div>
                            <div style={styling.tryHead}>IDV: 1,25,300</div>
                        </RX.Text>
                        <RX.Text style={ styling.quotes }>
                            Expired on 12/04/2017
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 20,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={styling.nextBtn}>
                            <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ styling.buybuttonText }>
                                    Rs.1,322*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>*/}



                    {/*<RX.View style={ styling.pageAlign}>
                    <RX.View style={ styling.flute }>
                        <RX.Text style={ styling.head }>
                            Sort
                        </RX.Text>
                    </RX.View>
                    <RX.View style={ [styling.expired] }>
                        <RX.View>
                            <RX.Image source={ './src/img/Bharti.png' } style={ [styling.image] } />
                            <div style={styling.clientHead}>Bajaj Allianz</div>
                            <div style={styling.clientDate}>12/04/2017 - 12/04/2018</div>
                        </RX.View>
                        <RX.Text style={ styling.sideHead }>
                            DL4CCB1111
                            <div style={styling.tryHead}>Honda CB Hornet</div>
                            <div style={styling.tryHead}>IDV: 1,25,300</div>
                        </RX.Text>
                        <RX.Text style={ styling.valid }>
                            Expires on 12/04/2017
                        </RX.Text>
                        <RX.Text style={ _styles.ncb }>
                            Rs. 20,347
                            <div>NIL</div>
                        </RX.Text>
                        <RX.View style={styling.nextBtn}>
                            <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }>
                                <RX.Text style={ styling.buybuttonText }>
                                    Rs.1,322*
                                </RX.Text>
                            </RX.Button>
                        </RX.View>
                    </RX.View>
                </RX.View>*/}
                    {/*<RX.View style={ styling.container }>
                    <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateNine }>
                        <RX.Text style={ styling.buttonText }>
                            Next
                        </RX.Text>
                    </RX.Button>
                </RX.View>*/}
                </RX.View>
            </RX.ScrollView>

        );
    }
}