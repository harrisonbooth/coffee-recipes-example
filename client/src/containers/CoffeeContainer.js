import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';

class CoffeeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: []
    };
  }

  componentDidMount() {
    this.getRecipes()
      .then(recipes => this.setState({ recipes: recipes }));
  }

  getRecipes() {
    const url = 'http://localhost:3002/api/recipes';

    return fetch(url)
      .then(res => res.json());
  }

  render() {
    return (
      <div className="coffee-container">
        <h1>Coffee Recipes</h1>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default CoffeeContainer;
