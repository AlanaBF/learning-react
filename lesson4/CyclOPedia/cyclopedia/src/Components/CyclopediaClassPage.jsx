import React, { Component } from "react";
import { getRandomUser } from "../utilities/api";
import Instructor from "./Instructor";

export default class CyclopediaClassPage extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem("cyclopedia")) || {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
      inputName: "",
      inputFeedback: "",
    };
  }

  componentDidMount = async () => {
    
    if (JSON.parse(localStorage.getItem("cyclopedia"))) {
      //this.setState(JSON.parse(localStorage.getItem("cyclopedia")));
    } else {
      const response = await getRandomUser();
   

      this.setState((prevState) => {
        return {
          instructor: {
            name: response.data.first_name + " " + response.data.last_name,
            email: response.data.email,
            phone: response.data.phone_number,
          },
        };
      });
    }
  };

  componentDidUpdate= async(previousProps, previousState) =>{
  
    localStorage.setItem("cyclopedia", JSON.stringify(this.state));
    if(previousState.studentCount < this.state.studentCount) {
      const response = await getRandomUser();
      this.setState((prevState)=> {
        return {
          studentList:[
            ...prevState.studentList,{
              name: response.data.first_name + " " + response.data.last_name
            }
          ]
        }
      })
    } else if (previousState.studentCount > this.state.studentCount){
      this.setState((prevState)=> {
        return {
          studentList:[]
        }
      })
    }
  }

  componentWillUnmount() {
  }

  handleAddStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount + 1,
      };
    });
  };

  handleRemoveAllStudent = () => {
    this.setState((prevState) => {
      return {
        studentCount: 0,
      };
    });
  };

  handleToggleInstructor = () => {
    this.setState((prevState)=> {
      return {
        hideInstructor: !prevState.hideInstructor,
      }
    })
  }

  render() {
    return (
      <div>
        <div className="p-3">
          <span className="h4 text-success">Instructor &nbsp;</span>
          <i className={`bi ${this.state.hideInstructor?"bi-toggle-off":"bi-toggle-on"} btn btn-success btn-sm`}
          onClick={this.handleToggleInstructor}></i>
          {!this.state.hideInstructor && this.state.instructor ? (
            <Instructor instructor={this.state.instructor} />
          ) : null}
        </div>

        <div className="p-3">
          <span className="h4 text-success">Feedback</span>
          <br />
          <input
            type="text"
            value={this.state.inputName}
            placeholder="Name..."
            onChange={(e) => {
              this.setState({ inputName: e.target.value });
            }}
          ></input>{" "}
          Name: {this.state.inputName}
          <br/>
          <textarea
            placeholder="Feedback..."
            value={this.state.inputFeedback}
            onChange={(e) => {
              this.setState({ inputFeedback: e.target.value });
            }}
          ></textarea>{" "}
          Feedback: {this.state.inputFeedback}
        </div>
        <div className="p-3">
          <span className="h4 text-success">Students</span>
          <br />
          <div> Student Count: {this.state.studentCount}</div>
          <button
            className="btn btn-success btn-sm"
            onClick={this.handleAddStudent}
          >
            Add Student
          </button>
          &nbsp;
          <button
            className="btn btn-danger btn-sm"
            onClick={this.handleRemoveAllStudent}
          >
            Remove All Students
          </button>


          {this.state.studentList.map((student, index) => {
            return (
                <div className="text-white" key={index}>-{student.name}</div>
              )}
          )
          }
          
        </div>
      </div>
    );
  }
}
