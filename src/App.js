import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Particles from 'react-particles-js';
import { Container, Row, Col } from 'reactstrap'
// import { Grid } from 'react-bootstrap';
import Stats from './Components/Stats';
import WebcamRecorder from './Components/WebcamRecorder';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoType: ["Hustle", "Salsa", "Samba", "Flamenco", "Moonwalk", "Cha Cha", "Dougie", "Salsa", "Tango", "Flamenco", "Hustle", "Tap Dance", "Charleston", "Samba"],
      localFile: ['hustle.mp4', 'salsa.mp4', 'samba.mp4', 'flamenco.mp4', 'moonwalk.mp4', 'chacha.mp4', 'dougie.mp4', 'salsa.mp4', 'tango.mp4', 'flamenco.mp4', 'hustle.mp4', 'tapdance.mp4', 'charleston.mp4', 'samba.mp4'],
      videoLink: [
        "https://www.youtube.com/watch?v=G0g6pq8wK5k",
        "https://www.youtube.com/watch?v=EqwFL_0Y_Zk",
        "https://www.youtube.com/watch?v=UCzOuCis9SU",
        "https://www.youtube.com/watch?v=0VLMyr7MFTA",
        "https://www.youtube.com/watch?v=tjaT1bZ78Qs",
        "https://www.youtube.com/watch?v=kmakB53NFow",
        "https://www.youtube.com/watch?v=OvQ2jpVi07E",
        "https://www.youtube.com/watch?v=G0g6pq8wK5k",
        "https://www.youtube.com/watch?v=veiDkbYhZnY",
        "https://www.youtube.com/watch?v=0VLMyr7MFTA",
        "https://www.youtube.com/watch?v=EqwFL_0Y_Zk",
        "https://www.youtube.com/watch?v=5xxTkB5bGy4",
        "https://www.youtube.com/watch?v=fQSY-2VtBvg",
        "https://www.youtube.com/watch?v=UCzOuCis9SU"
      ],
      chosenVideoType: "",
      chosenVideoLink: "",
      loadedVideo: false,
      ind: 0,
      analyze: false,
      alocalFile: "../src/videos/hustle.mp4"
    }

    setInterval(() => {
      if(this.state.loadedVideo == true) {
        let randrange = this.state.videoLink.length;
        let ind = Math.floor(this.state.ind % randrange); //Math.floor(Math.random() * randrange);
        //console.log(ind);
        this.setState({
          ind: ind + 1,
          loadedVideo: false,
          chosenVideoType: this.state.videoType[ind],
          chosenVideoLink: this.state.videoLink[ind],
          alocalFile: "../src/videos/" + this.state.localFile[ind],
        })
      }
      //console.log(this.state.chosenVideoLink);
      //console.log(this.state.chosenVideoType);
    }, 5000);

    this.getData = this.getData.bind(this);
    this.getAnalyze = this.getAnalyze.bind(this);
  }

  getData(data) {
    this.setState({
      loadedVideo: data
    })
    console.log(data);
  }

  getAnalyze(data) {
    this.setState({
      analyze: data
    })
  }

  render() {
    return (
      <div>
        <Particles
          params={{
            particles: {
              number: {
                value: 80,
              },
              line_linked: {
              	shadow: {
              		enable: true,
              		color: "#70c1d0",
              		blur: 10
              	},
                color: "#70c1d0",
                opacity: 0.4,
                width: 2,
              },
            }
          }}
          style={{
            width: '100%',
            height: "100%",
            backgroundColor: "#1c222b",
            position: "absolute",
            zIndex: -1,
            marginTop: -20,
          }}
        />
        <Container fluid style={styles.canvas}>
          <Row>
            <Col xs="8">
              <WebcamRecorder storeData={this.getData} analyze={this.getAnalyze}/>
              <p style={styles.desc}>Related Youtube video: </p><a href={this.state.chosenVideoLink} style={styles.desc} target="_blank">{this.state.chosenVideoLink}</a>
            </Col>
            <Col xs="4">
              <Stats danceType={this.state.chosenVideoType} analyze={this.state.analyze}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

let styles = {
  canvas: {
    marginTop: 20,
    marginLeft: 25,
  },
  desc: {
    color: "#ffffff",
    fontSize: 24,
  }
}
// <Webcam style={{ marginTop: 50, marginBottom: -50 }} audio={false} height="90%" width="100%" />
/*
<video width="320" height="240" controls autoplay>
    <source src={this.state.alocalFile} type="video/mp4"/>
    Your browser does not support the video tag.
</video>
*/
