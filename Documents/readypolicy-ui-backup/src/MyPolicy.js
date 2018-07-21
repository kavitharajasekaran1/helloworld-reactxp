/*
 * This file demonstrates a basic ReactXP app.
 */

import React from 'react';
import RX from 'reactxp';
import styling from './AppStyles';
import swal from 'sweetalert';
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
    

    onChangeDummy = () => {
       
        var pdf = new jsPDF('p', 'pt', 'letter');
        // source can be HTML-formatted string, or a reference
        // to an actual DOM element from which the text will be scraped.
        source = $('#customers')[0];
      console.log("rahul")
        // we support special element handlers. Register them with jQuery-style 
        // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
        // There is no support for any other type of selectors 
        // (class, of compound) at this time.
        specialElementHandlers = {
          // element with id of "bypass" - jQuery style selector
          '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
          }
        };
        margins = {
          top: 100,
          bottom: 100,
          left: 70,
          width: 2000
        };
        // all coords and widths are in jsPDF instance's declared units
        // 'inches' in this case
        pdf.fromHTML(
          source, // HTML string or DOM elem ref.
          margins.left, // x coord
          margins.top, { // y coord
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
          },
      
          function(dispose) {
            // dispose: object with X, Y of the last line add to the PDF 
            //          this allow the insertion of new lines after html
            pdf.save('Test.pdf');
          }, margins);
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
            // <div id="customers">
            <RX.ScrollView style={ _styles.scroll }>
              <div id="customers">
            <RX.View style={ styling.container }>
            <RX.Button  onPress={ this.props.onPressNavigate}><RX.Image
                         style={_styles.HomeScrollImageLogo}
                         source={'./src/img/Back.svg'}/>
                    <RX.Text style={styling.welcome }> My Policies </RX.Text>
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
                            Sort By
                            {/*  <ul className="PlayerList">
                                {
                                    this.props.navigatorRoute.res.items.map(function(player) {
                                        return <li key={player.id}>{player.name}</li>
                                    })
                                }
                            </ul>*/}
                        </RX.Text>
                    </RX.View>
                    <RX.View style={styling.client}>
                        <Grid>
                            <Row className="show-grid" style={styling.client} className="hidden-xs">

                                <Col  md={2}></Col>
                                <Col  md={2} xs={2}>
                                    <RX.Image source={ './src/img/royal.jpg' } style={ [styling.image] } />
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
 
                                    {/* <RX.Button style={ styling.roundButton }> */}
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

                    <RX.View>
                        <Grid>
                            <Row className="show-grid" style={styling.clientLeft} className="hidden-lg">

                                <Col xs={4}>
                                    <RX.Image source={ './src/img/Bharti.png' } style={ [styling.image] } />
                                    <div style={styling.clientHeadxs}>Bajaj Allianz</div>
                                    <div style={styling.clientDate}>12/04/2017 - 12/04/2018</div>
                                </Col>
                                <Col  xs={4} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHeadxs }>
                                        DL4CCB1111
                                        <div style={styling.tryHeadxs}>Honda CB</div>
                                        <div style={styling.tryHeadxs}>IDV: 1,25,300</div>
                                    </RX.Text>

                                </Col>
                                <Col   xs={4} >
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >
                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.1,322*
                                        </RX.Text>
                                    {/* </RX.Button> */}
                                    </div>
                                    <RX.Text style={ styling.quotesxs }>
                                        Expired on 12/04/2017
                                    </RX.Text>
                                </Col>
                            </Row>
                        </Grid>
                    </RX.View>
                    <RX.View>
                        <Grid>
                            <Row className="show-grid" style={styling.clientLeft} className="hidden-lg">

                                <Col   xs={4}>
                                    <RX.Image source={ './src/img/Bharti.png' } style={ [styling.image] } />
                                    <div style={styling.clientHeadxs}>Bajaj Allianz</div>
                                    <div style={styling.clientDate}>12/04/2017 - 12/04/2018</div>
                                </Col>
                                <Col  xs={4} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHeadxs }>
                                        DL4CCB1111
                                        <div style={styling.tryHeadxs}>Honda CB</div>
                                        <div style={styling.tryHeadxs}>IDV: 1,25,300</div>
                                    </RX.Text>

                                </Col>
                                <Col   xs={4} >
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >
                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.1,322*
                                        </RX.Text>
                                    </div>
                                    <RX.Text style={ styling.quotesxs }>
                                        Expired on 12/04/2017
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
                                    <RX.Image source={ './src/img/Bharti.png' } style={ [styling.image] } />
                                    <div style={styling.clientHead}>Bajaj Allianz</div>
                                    <div style={styling.clientDate}>12/04/2017 - 12/04/2018</div>
                                </Col>
                                <Col md={3} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHead }>
                                        DL4CCB1111
                                        <div style={styling.tryHead}>Honda CB Hornet</div>
                                        <div style={styling.tryHead}>IDV: 1,25,300</div>
                                    </RX.Text>

                                </Col>
                                <Col  md={5} style={styling.marTop}>
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >
                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.1,322*
                                        </RX.Text>
                                    </div>
                                    <RX.Text style={ styling.quotes }>
                                        Expired on 12/04/2017
                                    </RX.Text>
                                </Col>
                            </Row>
                        </Grid>
                    </RX.View>
                    <RX.View style={styling.client}>
                        <Grid  className="hidden-xs" >
                            <Row className="show-grid" >

                                <Col  md={2} style={styling.expired}></Col>
                                <Col  md={2}>
                                    <RX.Image source={ './src/img/Sbi.png' } style={ [styling.image] } />
                                    <div style={styling.clientHead}>State Bank</div>
                                    <div style={styling.clientDate}>12/04/2017 - 12/04/2018</div>
                                </Col>
                                <Col md={3} style={styling.marTop17 }>
                                    <RX.Text style={ styling.sideHead }>
                                        CB4CCB1235
                                        <div style={styling.tryHead}>Honda CB Hornet</div>
                                        <div style={styling.tryHead}>IDV: 1,25,300</div>
                                    </RX.Text>

                                </Col>
                                <Col  md={5} style={styling.marTop}>
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >
                                    {/* <RX.Button style={ styling.roundButton } onPress={ this.props.onNavigateBack }> */}
                                        <RX.Text style={ styling.buybuttonText }>
                                            Rs.1,322*
                                        </RX.Text>
                                    </div>
                                    <RX.Text style={ styling.quotes }>
                                        Expired on 12/04/2017
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
                                    <RX.Image source={ './src/img/tata.png' } style={ [styling.image] } />
                                    <div style={styling.clientHead}>Tata Insurance</div>
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
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >
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
                                <div style={_styles.button0} class="w3-panel w3-round-xlarge w3-teal" >
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
                                <RX.Button onPress={()=> this.onChangeDummy() }>Print</RX.Button>
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
                </div>

            </RX.ScrollView>
           
        );
    }
}