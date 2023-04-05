class NavBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 50px;
        padding: 10px;
        background: rgba(128, 108, 53, 0.69);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5.3px);
        -webkit-backdrop-filter: blur(5.3px);
        z-index: 100;
      }
      
      .navbar-logo h1 {
        display: flex;
        position: absolute;
        align-items: center;
        font-size: 30px;
        margin-left: 60px;
        margin-top: 15px;
        color: #302209;
      }

      .navbar-logo a {
        position: relatif;
        padding-top: 60px;
        transition: transform 0.3s ease;
      }

      .navbar-logo a:hover img {
          transform: translateY(-5px);
        }
      
      .navbar-menu {
        display: flex;
        gap: 20px;
      }
      
      .navbar-menu a {
        font-size: 1.2rem;
        color: #302209;
        font-weight: bold;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.3s ease-in-out;
      }
      
      .navbar-menu a:hover {
        background: rgba(182, 167, 141, 0.7);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(5.3px);
        transition: transform 0.3s ease;
        transform: translateY(-5px);
        z-index: 1;
      }

      @media (max-width: 428px) {
        .navbar-logo h2 a {
          font-size: 1rem;
        }
        .navbar-logo a {
          padding: 5%;
        }
        .navbar-logo h1 {
          font-size: 20px;
          margin-left: 60px;
          margin-top: 20px;
        }
        .navbar-menu {
          gap: 2px;
        }
        .navbar-menu a {
          font-size: 0.9rem;
        }
      }

      @media (max-width: 320px) {
        .navbar-logo h2 a {
          font-size: 0.8rem;
        }
        .navbar-logo a {
          padding: 5%;
        }
        .navbar-logo h1 {
          font-size: 15px;
          margin-left: 60px;
          margin-top: 25px;
        }
        .navbar-menu {
          gap: 2px;
        }
        .navbar-menu a {
          font-size: 0.7rem;
        }
      }


      @media (max-width: 280px) {
        .navbar-logo a {
          width: 10px;
          height: 10px;
          padding: 5%;
        }
        .navbar-logo h1 {
          font-size: 15px;
        }
        .navbar-menu {
          gap: 2px;
          flex-direction: column;
        }
        .navbar-menu a {
          font-size: 0.8rem;
        }
      }
      
      </style>
      <div id="home" class="navbar">
      <div class="navbar-logo">
        <h1>CookRecipe</h1>
        <a href="#"><img src="https://img.icons8.com/arcade/64/000000/cooking-book.png" alt="Logo"></a>
      </div>
    
      <div class="navbar-menu">
        <a href="#about">Recipe</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    `;
  }
}

customElements.define("nav-bar", NavBar);
