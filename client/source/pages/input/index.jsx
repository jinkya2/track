import React from "react";
import { Button } from "../../components/button";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stretStatusColor: "rgba(255,0,0,0.5)",
      nofStatusColor: "rgba(255,0,0,0.5)",

      nof: false,

      circadian: {
        start: 0,
        end: 0,
        stretching: false,
      },

      medicines: {
        minox: false,
        ashwg: false,
        finacet: false,
        biokare: false,
      },

      exercises: {
        pushups: 0,
        chairdips: 0,
        squats: 0,
        legloweringdrill: 0,
        pullups: 0,
        nof: false,
      },

      meditation: {
        session1: 0,
        session2: 0,
        session3: 0,
      },
    };
    this.toggleStretch = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.stretchingActivate = this.stretchingActivate.bind(this);
    this.getMedication = this.getMedication.bind(this);
    this.exerciseCount = this.exerciseCount.bind(this);
    this.nofActivate = this.nofActivate.bind(this);
    this.meditationCount = this.meditationCount.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.value;
    let [h, m] = value.split(":");
    let meridian =
      ((h % 12) + 12 * (h % 12 == 0) + ":" + m, h >= 12 ? "PM" : "AM");
    let name = target.name;
    if (["start", "end"].includes(name)) {
      value = `${value} ${meridian}`;
    }
    this.setState({ circadian: { ...this.state.circadian, [name]: value } });
  }

  getMedication(event) {
    this.state.medicines[event.target.innerHTML]
      ? (this.setState({
          medicines: {
            ...this.state.medicines,
            [event.target.innerHTML]: false,
          },
        }),
        (event.target.style.backgroundColor = "red"))
      : (this.setState({
          medicines: {
            ...this.state.medicines,
            [event.target.innerHTML]: true,
          },
        }),
        (event.target.style.backgroundColor = "green"));

    /*
    this.setState({
      medicines: { ...this.state.medicines, [event.target.innerHTML]: true },
    });
*/

    //console.info(event.target.innerHTML);
    //let changedStyle = { backgroundColor: "rgba(0, 128, 0, 0.5)" };
    //console.log(event.target.className);

    /*
    console.log(event.target.style.backgroundColor);    
    event.target.style.backgroundColor =
      this.state.medicines.minox
        ? "rgba(0, 128, 0, 0.5)"
        : "rgba(255, 0, 0, 0.5)";
*/
  }

  stretchingActivate1() {
    this.state.stretStatusColor == "rgba(255,0,0,0.5)"
      ? this.setState({
          circadianStretching: true,
          stretStatusColor: "rgba(0, 128, 0, 0.5)",
        })
      : this.setState({
          circadianStretching: false,
          stretStatusColor: "rgba(255,0,0,0.5)",
        });
  }

  stretchingActivate() {
    this.state.stretStatusColor == "rgba(255,0,0,0.5)"
      ? (
        this.setState({circadian: {...this.state.circadian, "stretching": true}}),
        this.setState({stretStatusColor: "rgba(0, 128, 0, 0.5)"})
      )
      : (
        this.setState({circadian: {...this.state.circadian, "stretching": false}}),
        this.setState({stretStatusColor: "rgba(255,0,0,0.5)"})
      )
  }

  


  



  nofActivate() {
    this.state.nofStatusColor == "rgba(255,0,0,0.5)"
      ? this.setState({
          nof: true,
          nofStatusColor: "rgba(0, 128, 0, 0.5)",
        })
      : this.setState({
          nof: false,
          nofStatusColor: "rgba(255,0,0,0.5)",
        });
  }

  exerciseCount(event) {
    if (event.target.innerHTML == "+") {
      let count =
        this.state.exercises[event.target.attributes["name"]["value"]] + 1;
      this.setState({
        exercises: {
          ...this.state.exercises,
          [event.target.attributes["name"]["value"]]: count,
        },
      });
    } else if (event.target.innerHTML == "-") {
      if (this.state.exercises[event.target.attributes["name"]["value"]] > 0) {
        let count =
          this.state.exercises[event.target.attributes["name"]["value"]] - 1;
        this.setState({
          exercises: {
            ...this.state.exercises,
            [event.target.attributes["name"]["value"]]: count,
          },
        });
      }
    }
  }

  meditationCount(event) {
    if (event.target.innerHTML == "+") {
      let count =
        this.state.meditation[event.target.attributes["name"]["value"]] + 1;
      this.setState({
        meditation: {
          ...this.state.meditation,
          [event.target.attributes["name"]["value"]]: count,
        },
      });
    } else if (event.target.innerHTML == "-") {
      if (this.state.meditation[event.target.attributes["name"]["value"]] > 0) {
        let count =
          this.state.meditation[event.target.attributes["name"]["value"]] - 1;
        this.setState({
          meditation: {
            ...this.state.meditation,
            [event.target.attributes["name"]["value"]]: count,
          },
        });
      }
    }
  }

  submitData(event) {
    console.log("SUBMIT");
    console.log(this.state);
    // axios implementation
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          <div className="item circadian-item">
            <strong>Circadian</strong>
            <div>
              <div>
                <label htmlFor="start">Start</label>
                <input
                  name="start"
                  type="time"
                  id="time1"
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="end">End</label>
                <input
                  name="end"
                  type="time"
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <div
                  className="stretchButton"
                  ref={this.toggleStretch}
                  onClick={this.stretchingActivate}
                  style={{ background: this.state.stretStatusColor }}
                >
                  Stretching
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <strong>Medications</strong>
            <div className="medicine-item">
              <div className="medicines minox" onClick={this.getMedication}>
                minox
              </div>
              <div className="medicines ashwg" onClick={this.getMedication}>
                ashwg
              </div>
              <div className="medicines finacet" onClick={this.getMedication}>
                finacet
              </div>
              <div className="medicines biokare" onClick={this.getMedication}>
                biokare
              </div>
            </div>
          </div>

          <div className="item">
            <strong>Health</strong>
            <div className="health-item">
              <div className="exercise">
                <div>
                  <span>Pushups</span>
                  <button name="pushups" onClick={this.exerciseCount}>
                    -
                  </button>
                  <span>{this.state.exercises.pushups}</span>
                  <button name="pushups" onClick={this.exerciseCount}>
                    +
                  </button>
                </div>

                <div>
                  <span>Chair Dips</span>
                  <button name="chairdips" onClick={this.exerciseCount}>
                    -
                  </button>
                  <span>{this.state.exercises.chairdips}</span>
                  <button name="chairdips" onClick={this.exerciseCount}>
                    +
                  </button>
                </div>

                <div>
                  <span>Squats</span>
                  <button name="squats" onClick={this.exerciseCount}>
                    -
                  </button>
                  <span>{this.state.exercises.squats}</span>
                  <button name="squats" onClick={this.exerciseCount}>
                    +
                  </button>
                </div>

                <div>
                  <span>Leg lowering drills</span>
                  <button name="legloweringdrill" onClick={this.exerciseCount}>
                    -
                  </button>
                  <span>{this.state.exercises.legloweringdrill}</span>
                  <button name="legloweringdrill" onClick={this.exerciseCount}>
                    +
                  </button>
                </div>

                <div>
                  <span>Pullups</span>
                  <button name="pullups" onClick={this.exerciseCount}>
                    -
                  </button>
                  <span>{this.state.exercises.pullups}</span>
                  <button name="pullups" onClick={this.exerciseCount}>
                    +
                  </button>
                </div>

                <div
                  className="stretchButton"
                  onClick={this.nofActivate}
                  style={{ background: this.state.nofStatusColor }}
                >
                  NoF
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <strong>Meditation</strong>
            <div className="meditation-item">
              <div>
                <p>Session 1</p>
                <button name="session1" onClick={this.meditationCount}>
                  -
                </button>
                <span>{this.state.meditation.session1}</span>
                <button name="session1" onClick={this.meditationCount}>
                  +
                </button>
              </div>

              <div>
                <p>Session 2</p>
                <button name="session2" onClick={this.meditationCount}>
                  -
                </button>
                <span>{this.state.meditation.session2}</span>
                <button name="session2" onClick={this.meditationCount}>
                  +
                </button>
              </div>

              <div>
                <p>Session 3</p>
                <button name="session3" onClick={this.meditationCount}>
                  -
                </button>
                <span>{this.state.meditation.session3}</span>
                <button name="session3" onClick={this.meditationCount}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <button onClick={this.submitData}>Submit</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
