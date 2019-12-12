import React from "react";
import { Container, Table, Dropdown, Row, Col, Button } from "react-bootstrap";
import Label from "./Label";
import "./label.css";

import { bindActionCreators } from "redux";
import * as userActions from './../_Actions/index';
import { connect } from 'react-redux';

import testData from "./testData.json";

let tempVar = 0;
const initarray = [
     {
        "type": "FoodNutrient",
        "id": 0,
        "nutrient": {
           "id": 0,
           "number": "0",
           "name": "Enter data",
           "rank": 0,
           "unitName": "g"
        },
        "amount": 0
     }
  ]


class LabelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completeUnits: true
    };

    this.renderCompleteUnits = this.renderCompleteUnits.bind(this);
    this.renderTableSpoonUnits = this.renderTableSpoonUnits.bind(this);
    this.completeUnitsButton = this.completeUnitsButton.bind(this);
    this.tableSpoonUnitsButton = this.tableSpoonUnitsButton.bind(this);
    this.resetButton = this.resetButton.bind(this);
  }

  resetButton = e => {
    this.props.actions.ResetCalcualteNutrients(initarray);
  }

  completeUnitsButton() {
    this.setState({ completeUnits: true });
  }

  tableSpoonUnitsButton() {
    this.setState({ completeUnits: false });
  }

  getValue(){
    console.log (this.props.calculationReducer);
  }

  renderCompleteUnits() {
    if (this.state.completeUnits === true) {
      return (
        <div>
          {console.log ("This console log: ", this.props.calculationReducer)}
          <p className="text-center">
            Nutrients for 100 {testData[0].servingSizeUnit}{" "}
          </p>
          <Table responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>
                  <i>Quantity</i>
                </th>
                <th>
                  <i>Units</i>
                </th>
              </tr>
            </thead>

            {/*Double map: first loop maps the testData json file and second loop goes through the 'foodNutrients' array.*/}

            {this.props.calculationReducer.search_value.map((value, index) => {
              return (
                <Label
                  names={value.nutrient.name}
                  values={Math.round(value.amount).toFixed(1)}
                  units={value.nutrient.unitName}
                />
                )})}
          </Table>
        </div>
      );
    }
  }

  renderTableSpoonUnits() {
    if (this.state.completeUnits === false) {
      return (
        <div>
          {" "}
          <p className="text-center">
            Nutrients for {testData[0].householdServingFullText} ({" "}
            {testData[0].servingSize} {testData[0].servingSizeUnit} ){" "}
          </p>
          <Table responsive>
            <thead>
              <tr>
                <th>Item</th>
                <th>
                  <i>Quantity</i>
                </th>
                <th>
                  <i>Units</i>
                </th>
              </tr>
            </thead>

            {/*Double map: first loop maps the testData json file and second loop goes through the 'foodNutrients' array.*/}

            {this.props.calculationReducer.search_value.map((value, index) => {
              return (
                  //testing logs
                  //console.log(varName), //console.log(value.nutrient.name), //console.log(testData[0]), //console.log(value.nutrient.name), //console.log(value.amount),
                  (tempVar = value.amount),
                  (tempVar = (154 * tempVar) / 100),
                  (
                    <Label
                      names={value.nutrient.name}
                      values={(Math.round(154 * tempVar) / 100).toFixed(1)}
                      units={value.nutrient.unitName}
                    />
                  )
                  )
            })}
          </Table>
        </div>
      );
    }
  }

  render() {
    return (
      <Container className="mainFont">
        <br />
        <h2 className="text-center">Nutrition facts of your meal</h2>

        <Dropdown className="text-center">
          <br />
          <Dropdown.Toggle className="buttonBackground" id="dropdown-basic">
            Choose serving size
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              className="letter text-center"
              onClick={this.completeUnitsButton}
            >
              100 {testData[0].servingSizeUnit}
            </Dropdown.Item>
            <Dropdown.Item
              className="letter text-center"
              onClick={this.tableSpoonUnitsButton}
            >
              {testData[0].householdServingFullText} ( {testData[0].servingSize}{" "}
              {testData[0].servingSizeUnit} )
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <br />
        <br />

        {/* CONDITIONAL RENDERING */}
        {this.renderCompleteUnits()}
        {this.renderTableSpoonUnits()}

       
        <div className="text-center">
        <br/>
        <h5> Ingredients: {testData[0].ingredients}</h5>
            <Button size="lg" onClick={this.resetButton}>
              Reset Units
            </Button>
          </div>
          <br/>
      
      </Container>
    );
  }
}

function mapStateToProps(state){
  return{
    calculationReducer: state.calculationReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelContainer);
