import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import MainNavbar from '../Components/MainNavbar';
import Footer from '../Components/Footer';
import '../Components/addItUp.css';

class AddItUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foods: [],
            selected: [],
            details: [],
            searchItem: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch("https://api.nal.usda.gov/fdc/v1/search?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K", {
            body: `{\"generalSearchInput\":\"${this.state.searchItem}\"}`,
            headers: {
                "Content-Type": "application/json",
                Origin: "http://localhost:3000/search"
            },
            method: "POST"
        }).then( data => data.json()).then( data => this.setState({foods: data.foods, searchItem: '', selected: []}));
    }


    render() {
        const items = this.state.foods.map((food) => {
            if (food.brandOwner === undefined) {
                return (
                    <div className="results">
                        <h2 className="name">{food.description}</h2>
                        <p>{food.additionalDescriptions}</p>
                        <button
                            className="add"
                            onClick={ event => {
                                const selected = [...this.state.selected, food.fdcId];
                                fetch(`https://api.nal.usda.gov/fdc/v1/${food.fdcId}?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K`, {
                                    headers: {
                                        "content-Type": "application/json"
                                    }
                                }).then(data => data.json()).then(data => this.setState({selected, details: [...this.state.details, data]}));
                            }}
                        >add
                        </button>
                    </div>
                );
            } else {
                return (
                    <div className="results">
                        <h2 className="name">{food.description}</h2>
                        <p className="company">{food.brandOwner.toUpperCase()}</p>
                        <p>{food.additionalDescriptions}</p>
                        <button
                            className="add"
                            onClick={ event => {
                                const selected = [...this.state.selected, food.fdcId];
                                fetch(`https://api.nal.usda.gov/fdc/v1/${food.fdcId}?api_key=ZAc6ym7jFxdoPb1HMJejftTfsTyhKbsKBClreV2K`, {
                                    headers: {
                                        "content-Type": "application/json"
                                    }
                                }).then(data => data.json()).then(data => this.setState({selected, details: [...this.state.details, data]}));
                            }}
                        >add
                        </button>
                    </div>
                );
            }
        });

        const detail = function(food) {
            const list = food.foodNutrients.map(function(nut) {
                return(
                    <li>{nut.nutrient.name + ": " + nut.nutrient.number + nut.nutrient.unitName}</li>
                );
            });
            return list;
        };

        const select = this.state.details.map((data) => {
            return (
                <div>
                    <h2>{data.description}</h2>
                    <ul>
                        {detail(data)}
                    </ul>

                </div>
            );
        });



        return (
            <Container fluid="true">
                <MainNavbar/>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input className="text"
                           type="text"
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
                <div className="outer">
                    <div className="display">
                        {items}
                    </div>

                    <div className="selected">
                        {select}
                    </div>
                </div>
                <Footer/>
            </Container>
        );
    }
}



export default AddItUp;
