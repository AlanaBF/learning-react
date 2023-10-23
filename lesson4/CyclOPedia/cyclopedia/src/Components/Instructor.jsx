import React, { Component } from 'react'

export default class Instructor extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        console.log("Mounted-Instructor")
    }
    componentWillUnmount() {
        console.log("UnMount-Instructor")
    }
    componentDidUpdate() {
        console.log("Update-Instructor")
    }

  render() {
    console.log("Render-Instructor")
    return (
      <div>
         <div className="">
            Name: {this.props.instructor.name} <br />
            Email: {this.props.instructor.email} <br />
            Phone: {this.props.instructor.phone} <br />
          </div>
      </div>
    )
  }
}
