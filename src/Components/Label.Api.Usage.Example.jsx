import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

import sampleData2 from "./LabelSample2.json";

{
  /* 
  e.g. Search for Cheddar cheese in the Food Search endpoint 

  curl -H "Content-Type:application/json" -d '{"generalSearchInput":"Cheddar cheese"}' https://api.nal.usda.gov/fdc/v1/search?api_key=4VLJS8sDoHqDFzeZDntLwkDHQwv66u2fWTVHyLOV

take the Cheddar cheese Id "fdcId":453744 and then use it in the Food Details endpoint

curl -H “Content-Type:application/json” https://api.nal.usda.gov/fdc/v1/453744?api_key=4VLJS8sDoHqDFzeZDntLwkDHQwv66u2fWTVHyLOV 
 
to get the ingredients values

-> console.log(JSON.stringify(this.state.name.foodNutrients))
-> console.log(JSON.stringify(this.state.name.labelNutrients))

#########################

------------------ Data structure ------------------


JSON Data/URL
{"foodClass":"Branded","description":"CHEESE","foodNutrients":[{"type":"FoodNutrient","id":3102264,"nutrient":{"id":1079,"number":"291","name":"Fiber, total dietary","rank":1200,"unitName":"g"},"foodNutrientDerivation":{"id":75,"code":"LCCD","description":"Calculated from a daily value percentage per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":0E-8},{"type":"FoodNutrient","id":3102265,"nutrient":{"id":1087,"number":"301","name":"Calcium, Ca","rank":5300,"unitName":"mg"},"foodNutrientDerivation":{"id":75,"code":"LCCD","description":"Calculated from a daily value percentage per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":536.00000000},{"type":"FoodNutrient","id":3102266,"nutrient":{"id":1089,"number":"303","name":"Iron, Fe","rank":5400,"unitName":"mg"},"foodNutrientDerivation":{"id":75,"code":"LCCD","description":"Calculated from a daily value percentage per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":0E-8},{"type":"FoodNutrient","id":3102267,"nutrient":{"id":1104,"number":"318","name":"Vitamin A, IU","rank":7500,"unitName":"IU"},"foodNutrientDerivation":{"id":75,"code":"LCCD","description":"Calculated from a daily value percentage per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":714.00000000},{"type":"FoodNutrient","id":3102268,"nutrient":{"id":1162,"number":"401","name":"Vitamin C, total ascorbic acid","rank":6300,"unitName":"mg"},"foodNutrientDerivation":{"id":75,"code":"LCCD","description":"Calculated from a daily value percentage per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":0E-8},{"type":"FoodNutrient","id":4523289,"nutrient":{"id":1003,"number":"203","name":"Protein","rank":600,"unitName":"g"},"foodNutrientDerivation":{"id":70,"code":"LCCS","description":"Calculated from value per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":17.86000000},{"type":"FoodNutrient","id":4523290,"nutrient":{"id":1004,"number":"204","name":"Total lipid (fat)","rank":800,"unitName":"g"},"foodNutrientDerivation":{"id":70,"code":"LCCS","description":"Calculated from value per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":25.00000000},{"type":"FoodNutrient","id":4523291,"nutrient":{"id":1005,"number":"205","name":"Carbohydrate, by difference","rank":1110,"unitName":"g"},"foodNutrientDerivation":{"id":70,"code":"LCCS","description":"Calculated from value per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":10.71000000},{"type":"FoodNutrient","id":4523292,"nutrient":{"id":1008,"number":"208","name":"Energy","rank":300,"unitName":"kcal"},"foodNutrientDerivation":{"id":70,"code":"LCCS","description":"Calculated from value per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":286.00000000},{"type":"FoodNutrient","id":4523293,"nutrient":{"id":2000,"number":"269","name":"Sugars, total including NLEA","rank":1510,"unitName":"g"},"foodNutrientDerivation":{"id":70,"code":"LCCS","description":"Calculated from value per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":10.71000000},{"type":"FoodNutrient","id":4523294,"nutrient":{"id":1093,"number":"307","name":"Sodium, Na","rank":5800,"unitName":"mg"},"foodNutrientDerivation":{"id":70,"code":"LCCS","description":"Calculated from value per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":607.00000000},{"type":"FoodNutrient","id":4523295,"nutrient":{"id":1253,"number":"601","name":"Cholesterol","rank":15700,"unitName":"mg"},"foodNutrientDerivation":{"id":70,"code":"LCCS","description":"Calculated from value per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":71.00000000},{"type":"FoodNutrient","id":4523296,"nutrient":{"id":1257,"number":"605","name":"Fatty acids, total trans","rank":15400,"unitName":"g"},"foodNutrientDerivation":{"id":70,"code":"LCCS","description":"Calculated from value per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":0E-8},{"type":"FoodNutrient","id":4523297,"nutrient":{"id":1258,"number":"606","name":"Fatty acids, total saturated","rank":9700,"unitName":"g"},"foodNutrientDerivation":{"id":70,"code":"LCCS","description":"Calculated from value per serving size measure","foodNutrientSource":{"id":9,"code":"12","description":"Manufacturer's analytical; partial documentation"}},"amount":12.50000000}],"foodComponents":[],"foodAttributes":[],"tableAliasName":"branded_food","brandOwner":"Triad Mfg. KY LLC.","gtinUpc":"868802000105","dataSource":"LI","ingredients":"CHEDDAR CHEESE ((AGED OVER 120 DAYS) PASTEURIZED MILK, CHEESE CULTURE, SALT, ENZYME, WATER, WHEY, CREAM, SALT, GUAR GUM, SORBIC ACID (TO PROTECT FLAVOR), ANNATTO (COLOR)), BEER, GARLIC, HOT SAUCE (DISTILLED VINEGAR, RED PEPPER, SALT), ONION, SPICES.","modifiedDate":"7/14/2017","availableDate":"7/14/2017","servingSize":28.00000000,"servingSizeUnit":"g","householdServingFullText":"2 Tbsp","labelNutrients":{"fat":{"value":7.0000000000000000},"saturatedFat":{"value":3.5000000000000000},"transFat":{"value":0E-16},"cholesterol":{"value":19.8800000000000000},"sodium":{"value":169.9600000000000000},"carbohydrates":{"value":2.9988000000000000},"fiber":{"value":0E-16},"sugars":{"value":2.9988000000000000},"protein":{"value":5.0008000000000000},"calcium":{"value":150.0800000000000000},"iron":{"value":0E-16},"calories":{"value":80.0800000000000000}},"brandedFoodCategory":"Cheese","fdcId":453744,"dataType":"Branded","publicationDate":"4/1/2019","foodPortions":[],"changes":""}
JSON Specification
JSON Template
#2
November 17th 2019, 2:21:24 pm
VALID JSON (RFC 8259)
Formatted JSON Data
{ 
   "foodClass":"Branded",
   "description":"CHEESE",
   "foodNutrients":[  ],
   "foodComponents":[  ],
   "foodAttributes":[  ],
   "tableAliasName":"branded_food",
   "brandOwner":"Triad Mfg. KY LLC.",
   "gtinUpc":"868802000105",
   "dataSource":"LI",
   "ingredients":"CHEDDAR CHEESE ((AGED OVER 120 DAYS) PASTEURIZED MILK, CHEESE CULTURE, SALT, ENZYME, WATER, WHEY, CREAM, SALT, GUAR GUM, SORBIC ACID (TO PROTECT FLAVOR), ANNATTO (COLOR)), BEER, GARLIC, HOT SAUCE (DISTILLED VINEGAR, RED PEPPER, SALT), ONION, SPICES.",
   "modifiedDate":"7/14/2017",
   "availableDate":"7/14/2017",
   "servingSize":28.00000000,
   "servingSizeUnit":"g",
   "householdServingFullText":"2 Tbsp",
   "labelNutrients":{  },
   "brandedFoodCategory":"Cheese",
   "fdcId":453744,
   "dataType":"Branded",
   "publicationDate":"4/1/2019",
   "foodPortions":[  ],
   "changes":""
}

*/
}

class Label extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: sampleData2
    };
  }
  render() {
    return (
      <Container>
        {console.log(JSON.stringify(this.state.name))}

        <h2 className="text-center">Nutrition facts of your meal</h2>
        <h3>Portion </h3>
        <Table responsive>
          <thead>
            <tr>
              <th>Item</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>
                  Calories:{" "}
                  {JSON.stringify(
                    this.state.name.labelNutrients.calories.value
                  )}{" "}
                  g
                </strong>
              </td>
              <td>12%</td>
            </tr>
            <tr>
              <td>
                <strong>
                  Total Fat :{" "}
                  {JSON.stringify(this.state.name.labelNutrients.fat.value)} g{" "}
                </strong>
              </td>
              <td>12%</td>
            </tr>
            <tr>
              <td>
                <i>
                      Saturated fat :{" "}
                  {JSON.stringify(
                    this.state.name.labelNutrients.saturatedFat.value
                  )}{" "}
                  g
                </i>
              </td>
              <td>12%</td>
            </tr>
            <tr>
              <td>
                <i>
                      Trans fat :{" "}
                  {JSON.stringify(
                    this.state.name.labelNutrients.transFat.value
                  )}{" "}
                  g
                </i>
              </td>
              <td>12%</td>
            </tr>
            <tr>
              <td>
                <strong>Cholesterol: number</strong>
              </td>
              <td>12%</td>
            </tr>
            <tr>
              <td>
                <strong>
                  Sodium:{" "}
                  {JSON.stringify(this.state.name.labelNutrients.sodium.value)}{" "}
                  g
                </strong>
              </td>
              <td>12%</td>
            </tr>
            <tr>
              <td>
                <strong>
                  Total Carbohydrate:{" "}
                  {JSON.stringify(
                    this.state.name.labelNutrients.carbohydrates.value
                  )}{" "}
                  g
                </strong>
              </td>
              <td>12%</td>
            </tr>
            <tr>
              <td>
                <strong>
                  Protein:{" "}
                  {JSON.stringify(this.state.name.labelNutrients.protein.value)}{" "}
                  g
                </strong>
              </td>
              <td>12%</td>
            </tr>
          </tbody>
          <h5> Ingredients: {JSON.stringify(this.state.name.ingredients)}</h5>
        </Table>
      </Container>
    );
  }
}

export default Label;
