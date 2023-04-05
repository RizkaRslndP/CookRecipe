class MealItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .meal-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px;
        padding: 20px;
        background-color: transparent;
      }
      
      .fan-art-meal {
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
      }
      
      h2 {
        font-size: 28px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
      }
      
      h3 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
      }
      
      .row {
        display: flex;
        justify-content: center;
      }
      
      .long-copy {
        font-size: 18px;
        line-height: 1.5;
        text-align: justify;
        margin-top: 20px;
      }
      
      .long-copy u {
        font-weight: bold;
        color: #333;
      }
      
      .long-copy span {
        color: #996F27;
      }

      hr {
        height: 2px;
        border: none;
        background: rgba(255,207,139,1);
      }
      </style>
      <div class="meal-info">
          <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Meal Art">
          <h2>${this._meal.strMeal}</h2> 
          <h3>This is a ${this._meal.strArea} dish</h3>
          <h3>Dish Category: ${this._meal.strCategory}</h3>
          <div class="row">
              <p class="long-copy"><u><span>How to make:<span></u><br> ${this._meal.strInstructions}</p>
          </div>
      </div>
      <hr>
      `;
  }
}

customElements.define("meal-item", MealItem);
