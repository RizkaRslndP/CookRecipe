class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .search-title {
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 50px;
        margin-top: 15px;
        text-align: center;
        color: #996F27;
      }
      
      .search-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        position: absolute;
        font-family: 'Quicksand', sans-serif;
        max-width: auto;
        top: 50%;
        left: 25%;
        width: 50%;
      }
      
      #searchElement {
        padding: 10px;
        border-radius: 5px;
        border: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        font-size: 14px;
        font-family: 'Quicksand', sans-serif;
        color: #996F27;
        width: 400px;
        margin-right: 10px;
      }
      
      #searchButtonElement {
        display: inline-block;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        background-color: #996F27;
        color: #fff;
        font-size: 14px;
        font-family: 'Quicksand', sans-serif;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      #searchButtonElement:hover {
        background-color: #BD8729;
      }

      #searchButtonElement:active {
        background-color: #BD8729;
        transform: translateY(4px);
        box-shadow: none;
      }

      @media (max-width: 800px) {
        .search-container {
          top: 80%;
          left: 23%;
          width: 50%;
        }
      }
      @media (max-width: 912px) {
        .search-container {
          top: 30%;
          left: 28%;
          width: 50%;
        }
      }
      @media (max-width: 428px) {
        .search-container {
          top: 50%;
          left: 50%;
          width: 80%;
          transform: translate(-50%);
        }
        #searchButtonElement {
          display: inline-block;
          position: absolute;
          top: 120%;
          left: 50%;
          transform: translate(-50%);
        }
      }

      @media (max-width: 1280px) {
        .search-container {
          top: 40%;
          left: 50%;
          transform: translate(-50%);
        }
      }

      </style>
      <div class="search-title">Find Favourite Recipe</div>
      
      <div id="search-container" class="search-container">
        <input placeholder="Search Cook Recipe" id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">search</button>
      </div>
    `;

    this.shadowDOM
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
