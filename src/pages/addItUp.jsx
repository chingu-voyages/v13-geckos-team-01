import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import MainNavbar from '../Components/MainNavbar';
import Footer from '../Components/Footer';
import LabelContainer from "../Components/LabelContainer";

class AddItUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [],
            selected: [],
            searchItem: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        fetch("https://api.nal.usda.gov/fdc/v1/search?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K", {
            body: `{\"generalSearchInput\":\"${this.state.searchItem}\"}`,
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST"
        }).then( data => data.json()).then( data => this.setState({foods: data.foods, searchItem: ''}));
    }


    render() {
        const items = this.state.foods.map(function(food) {
            if (food.brandOwner === undefined) {
                return (
                    <div className="results">
                        <h2 className="name">{food.description}</h2>
                        <p>{food.additionalDescriptions}</p>
                    </div>
                );
            } else {
                return (
                    <div className="results">
                        <h2 className="name">{food.description}</h2>
                        <p className="company">{food.brandOwner}</p>
                        <p>{food.additionalDescriptions}</p>
                    </div>
                );
            }
        });



        return (
            <Container fluid="true">
                <MainNavbar/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"
                           autoComplete="off"
                           name="searchItem"
                           placeholder="Search for food"
                           value={this.state.searchItem}
                           onChange={event => this.setState({searchItem: event.target.value})}
                    />
                    <button type="submit" className="submit">
                        Search
                    </button>
                </form>

                <div className="display">
                    {items}
                </div>

                <Footer/>
            </Container>
        );
    }
}




// function AddItUp() {
//   return (
//       <Container fluid="true">
//           <MainNavbar/>
//           <Footer/>
//       </Container>
//   );
// }


export default AddItUp;
