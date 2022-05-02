import React, { Component } from "react";
import { Input, message, Tag, Card, Collapse } from "antd";
import { Button } from "react-bootstrap";

// import healthRecord from "../contracts/DoctorAddRecord.json"
// import getWeb3 from '../getWeb3';

class Owner extends Component {
  constructor(props) {
    super(props);
    this.registerHospital = this.registerHospital.bind(this);
    this.addInsuranceComp = this.addInsuranceComp.bind(this);
  }

  //async methods and states here
  contract = this.props.contract["OPT"];
  doctorAddRecord = this.props.contract["DAR"];
  accounts = this.props.Acc;

  async registerHospital(event) {
    event.preventDefault();
    let id = document.getElementById("hosp_id").value;
    let name = document.getElementById("hosp_name").value;
    let location = document.getElementById("hosp_location").value;
    console.log(name);
    console.log(id);
    console.log(location);
    try {
      let result = await this.contract.methods
        .addHospital(id, name, location)
        .send({ from: this.accounts[0] });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  async addInsuranceComp(event) {
    event.preventDefault();
    let id = document.getElementById("company_id").value;
    let name = document.getElementById("company_name").value;
    console.log(id);
    console.log(name);
    try {
      let result = await this.contract.methods
        .regInsuranceComp(id, name)
        .send({ from: this.accounts[0] });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col mt-2" style={{ border: "2px solid black" }}>
            <h4 style={{ align: "centre" }}>Create Hospital</h4>
            <div>
              <form onSubmit={this.registerHospital}>
                <div className="label mt-2">
                  <b>Blockchain Address:</b>
                </div>
                <input
                  type="text"
                  name="name"
                  id="hosp_id"
                  placeholder="Id"
                ></input>

                <br></br>
                <div className="label mt-2">
                  <b>Name:</b>
                </div>
                <input
                  type="text"
                  name="name"
                  id="hosp_name"
                  placeholder="Name"
                ></input>

                <br></br>
                <div className="label mt-2">
                  <b>Location:</b>
                </div>
                <input
                  type="text"
                  name="name"
                  id="hosp_location"
                  placeholder="Location"
                ></input>

                <br></br>
                <Button variant="dark" className="button" type="submit">
                  Register Hospital
                </Button>
              </form>
            </div>
          </div>

          <div className="col mt-2" style={{ border: "2px solid black" }}>
            <h4 style={{ alogn: "centre" }}>Add Insurance Comp.</h4>
            <div>
              <form onSubmit={this.addInsuranceComp}>
                <div className="label mt-2">Name:</div>
                <input type="text" id="company_name" placeholder="Name"></input>
                <br></br>
                <div className="label mt-2">Blockchain Address:</div>
                <input type="text" id="company_id" placeholder="Id"></input>
                <br></br>
                <Button variant="dark" className="button" type="submit">
                  Add
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Owner;
