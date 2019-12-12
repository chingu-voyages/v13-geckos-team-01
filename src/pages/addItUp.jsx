import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainNavbar from "../Components/MainNavbar";
import Footer from "../Components/Footer";

import "./addItUp.css";

import { bindActionCreators } from "redux";
import * as userActions from './../_Actions/index';
import { connect } from 'react-redux';

class AddItUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
      selected: [],
      details: [],
      searchItem: "",
      float: undefined,
      floatTitle: undefined,

      selected2: [],
      details2: [],
      totalArray: [],
      resultArray: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleStateSumButton = this.handleStateSumButton.bind(this);
    this.calculateButton = this.calculateButton.bind(this);
  }
  // Previously there was a: then( data => data.json()).then( data => this.setState({foods: data.foods, searchItem: '', selected: []}));
  // I removed 'selected: []' in order prevent reseting the state every time a new search is made.
  handleSubmit(e) {
    e.preventDefault();
    fetch(
      "https://cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/search?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K",
      {
        body: `{\"generalSearchInput\":\"${this.state.searchItem}\"}`,
        headers: {
          "Content-Type": "application/json",
          Origin: "http://localhost:3000/search"
        },
        method: "POST"
      }
    )
      .then(data => data.json())
      .then(data => this.setState({ foods: data.foods, searchItem: "" }));
  }

  handleClose() {
    this.setState({ float: undefined });
    this.refs.float.className = "float d";
  }

  //This function does a search with the selected ID's and returns their values.
  //
  handleStateSumButton() {
    if (this.state.selected != false) {
      console.log(this.state.selected);
      //console.log(this.state.foods);
      this.state.selected.map(str => {
        const selected2 = [...this.state.selected2];
        fetch(
          `https://cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/${str}?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K`,
          {
            headers: {
              "content-Type": "application/json"
            }
          }
        )
          .then(data => data.json())
          .then(data =>
            this.setState({
              selected2,
              details2: [...this.state.details2, data]
            })
          );
      });
    } else {
      console.log("No selected data");
    }
  }

  //This function takes the necessary data from the API result and makes the sum of the nutrients.
  calculateButton = e => {
    console.log("Selected2");
    console.log(this.state.details2);
    //map the state of details2 to get each 'foodNutrients'.
    this.state.details2.map((value, index) => {
      return value.foodNutrients.map((value, index) =>
        //console.log(value),
        //console.log(value.amount),
        //console.log(value.nutrient.name),
        this.setState(
          (this.state.totalArray = [...this.state.totalArray, value])
        )
      );
    });
    console.log("#############");
    //console.log(JSON.stringify(this.state.totalArray));
    var tempObject = {};
    var result = this.state.totalArray.reduce(function(dataE, e) {
      var index = e.nutrient.name;
      if (!tempObject[index]) {
        tempObject[index] = e;
        dataE.push(tempObject[index]);
      } else {
        tempObject[index].amount += e.amount;
      }
      return dataE;
    }, []);
    this.setState(this.state.resultArray = result)
    this.props.actions.calcualteNutrients(this.state.resultArray)
    console.log(this.state.resultArray);
  }

  render() {
    //This fragment is related to the API response.
    //First it renders a div with a clickable h2 tag which will fetch the api. Then it will render the data in the component.
    //It has two parts: if and else.
    const items = this.state.foods.map(food => {
      //Renders undefined brands
      if (food.brandOwner === undefined) {
        return (
          <div className="results">
            <h2
              className="name"
              onClick={event => {
                fetch(
                  `https://cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/${food.fdcId}?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K`,
                  {
                    headers: {
                      "content-Type": "application/json"
                    }
                  }
                )
                  .then(data => data.json())
                  .then(data => this.setState({ float: data }));
                //This makes the blue pop-up window by changing className.
                this.refs.float.className = "float";
              }}
            >
              {food.description}
            </h2>
            <p>{food.additionalDescriptions}</p>
            {/* CREATE ADD BUTTON */}
            <button
              className="add"
              onClick={event => {
                const selected = [...this.state.selected, food.fdcId];
                fetch(
                  `https://cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/${food.fdcId}?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K`,
                  {
                    headers: {
                      "content-Type": "application/json"
                    }
                  }
                )
                  .then(data => data.json())
                  .then(data =>
                    this.setState({
                      selected,
                      details: [...this.state.details, data]
                    })
                  );
              }}
            >
              Add
            </button>
          </div>
        );
      } //Renders defined brands
      else {
        return (
          <div className="results">
            <h2
              className="name"
              onClick={event => {
                fetch(
                  `https://cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/${food.fdcId}?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K`,
                  {
                    headers: {
                      "content-Type": "application/json"
                    }
                  }
                )
                  .then(data => data.json())
                  .then(data => this.setState({ float: data }));
                //This makes the blue pop-up window by changing className.
                this.refs.float.className = "float";
              }}
            >
              {food.description}
            </h2>

            <p className="company">{food.brandOwner.toUpperCase()}</p>
            <p>{food.additionalDescriptions}</p>
            {/* CREATE ADD BUTTON */}
            <button
              className="add"
              onClick={event => {
                const selected = [...this.state.selected, food.fdcId];
                fetch(
                  `https://cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/${food.fdcId}?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K`,
                  {
                    headers: {
                      "content-Type": "application/json"
                    }
                  }
                )
                  .then(data => data.json())
                  .then(data =>
                    this.setState({
                      selected,
                      details: [...this.state.details, data]
                    })
                  );
              }}
            >
              Add
            </button>
          </div>
        );
      }
    });

    const float = function(food) {
      if (food != undefined) {
        const listTitle = food.description;
        console.log(food);
        const list = food.foodNutrients.map(function(nut) {
          return (
            <li>
              {nut.nutrient.name + ": " + nut.amount + nut.nutrient.unitName}
            </li>
          );
        });
        return [listTitle, list];
      } else {
        return null;
      }
    };

    //This function seems unused.

    const detail = function(food) {
      const list = food.foodNutrients.map(function(nut) {
        return (
          <li>
            {nut.nutrient.name +
              ": " +
              nut.nutrient.number +
              nut.nutrient.unitName}
          </li>
        );
      });
      return list;
    };

    const select = this.state.details.map(data => {
      if (data.brandOwner != undefined) {
        return (
          <div>
            <h2>{data.description}</h2>
            <p>{data.brandOwner.toUpperCase()}</p>
            {/*<ul>*/}
            {/*    {detail(data)}*/}
            {/*</ul>*/}
            <button
              onClick={event => {
                const removedIdx = this.state.details.indexOf(data);
                const copy = this.state.details.map(x => x);
                const left = copy
                  .slice(0, removedIdx)
                  .concat(copy.slice(removedIdx + 1, copy.length));
                this.setState({ details: left });
              }}
            >
              delete
            </button>
          </div>
        );
      } else {
        return (
          <div>
            <h2>{data.description}</h2>
            {/*<ul>*/}
            {/*    {detail(data)}*/}
            {/*</ul>*/}
            <button
              onClick={event => {
                const removedIdx = this.state.details.indexOf(data);
                const copy = this.state.details.map(x => x);
                const left = copy
                  .slice(0, removedIdx)
                  .concat(copy.slice(removedIdx + 1, copy.length));
                this.setState({ details: left });
              }}
            >
              delete
            </button>
          </div>
        );
      }
    });

    return (
      <Container fluid="true">
        <MainNavbar />
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            className="text"
            type="text"
            autoComplete="off"
            name="searchItem"
            placeholder="Search for food"
            value={this.state.searchItem}
            onChange={event =>
              this.setState({ searchItem: event.target.value })
            }
          />
          <button type="submit" className="submit">
            Search
          </button>
        </form>

        {/* Handle the creation of a css window by modifying className.  */}

        <div onClick={this.handleClose} className="float d" ref="float">
          {/* The float function in render returns array with two values.
                    Here this array is used to display the title as floatTitle and
                    the list is display with float.  */}
          <h4>Product name: {float(this.state.floatTitle)}</h4>
          <ul>
            <br />
            {float(this.state.float)}
          </ul>
          <button className="add" onClick={this.handleClose}>
            Close me
          </button>
        </div>
        <div className="outer">
          <div className="display">{items}</div>

          <div className="selected">{select}</div>
        </div>
        <button className="add text-center" onClick={this.handleStateSumButton}>
          Save nutrients
        </button>

        <Link
            className="letterColorNavbar"
            to={"/results"}
          >
                    <button className="add text-center" onClick={this.calculateButton}>
          Calc My Food!
        </button>
          </Link>

        <Footer />
      </Container>
    );
  }
}

//dispatch all action in userActionVariable
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}


export default connect(null, mapDispatchToProps)(AddItUp);
