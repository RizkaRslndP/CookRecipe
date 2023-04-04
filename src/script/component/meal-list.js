import "./meal-item.js";

class MealList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        .meal-item {
            display: flex;
            align-items: center;
            padding: 8px;
            border-bottom: 1px solid #ccc;
        }
        
        .meal-item img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-right: 16px;
        }
        
        .meal-item h3 {
            font-size: 24px;
            margin: 0;
        }
    </style>`;
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement("meal-item");
      mealItemElement.meal = meal;
      this.shadowDOM.appendChild(mealItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   color: #ff6b6b;
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
           </style> `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("meal-list", MealList);
