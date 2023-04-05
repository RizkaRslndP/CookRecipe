class MealCategory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    this.render(data.categories);
  }

  render(categories) {
    this.shadowRoot.innerHTML = `
      <style>
        .category-container {
          display: flex;
          color: white; 
          flex-wrap: wrap;
          justify-content: center;
          margin: 0 auto;
          padding: 10px;
        }

        .category-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          width: 100px;
          height: 100px;
          margin: 10px 10px;
          background: #FFC96B;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 10px 10px 10px #9e8354;
        }

        .category-card:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
          z-index: 1;
          position: relative;
        }

        .category-card img {
          width: 100%;
          margin-top: 5px;
        }

        .category-card h3 {
          font-size: 15px;
          margin-bottom: 10px;
          text-align: center;
          color: #996F27;
        }

        @media (max-width: 360px) {
          .category-card {
            padding: 10px;
            width: 90px;
            height: 100px;
            margin: 10px 10px;
            border-radius: 10px;
          }
        }


      </style>
      <div id="about" class="category-container">
        ${categories
          .map(
            (category) => `
            <div class="category-card" data-category-id="${category.idCategory}">
              <img src="${category.strCategoryThumb}" alt="${category.strCategory}">
              <h3>${category.strCategory}</h3>
              
            </div>
          `
          )
          .join("")}
      </div>
    `;

    const categoryCards = this.shadowRoot.querySelectorAll(".category-card");

    categoryCards.forEach((card) => {
      card.addEventListener("click", async () => {
        const category = card.dataset.category;
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        if (category) {
          const mealCards = category
            .map(
              (meal) =>
                `<meal-card name="${meal.strMeal}" image="${meal.strMealThumb}" category="${meal.strCategory}" instructions="${meal.strInstructions}"></meal-card>`
            )
            .join("");
          this.shadowRoot.innerHTML = mealCards;
        } else {
          // tampilkan pesan atau tindakan yang sesuai jika category bernilai null
        }
      });
    });
  }
}

customElements.define("meal-category", MealCategory);
