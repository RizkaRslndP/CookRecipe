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
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: 1px solid rgba(128, 108, 53, 0.3);
        z-index: 100;
      }
      
      .navbar-logo h2 a {
        font-size: 1.8rem;
        color: white;
        margin: 0;
        text-decoration: none;
      }
      
      .navbar-menu {
        display: flex;
        gap: 20px;
      }
      
      .navbar-menu a {
        font-size: 1.2rem;
        color: white;
        text-decoration: none;
        padding: 10px;
        border-radius: 5px;
        transition: background-color 0.3s ease-in-out;
      }
      
      .navbar-menu a:hover {
        background-color: #443e63;
      }

      .logo {
        background-image: url(./img/logo.png);
      }

      @media (max-width: 428px) {
        .navbar {
          height: 32px;
        }
        .navbar-logo h2 a {
          font-size: 1rem;
        }
        .navbar-menu a {
          font-size: 0.8rem;
        }
      }
      
      </style>
      <div id="home" class="navbar">
      <div class="navbar-logo">
        <img class="logo" alt="logo"><a href="#"></a></img>
      </div>
    
      <div class="navbar-menu">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    
    `;
  }
}

customElements.define("nav-bar", NavBar);
