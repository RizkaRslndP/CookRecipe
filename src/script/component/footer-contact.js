class FooterContact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const FooterContact = `
    <style>
      .footer {
        background-color: #FFC96B;
        padding: 20px 0px;
      }
      .footer-content {
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        
      }

      .footer-content h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #996F27;
        text-align: center;
      }

      .social-icons ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .social-icons img {
        width: 70px;
        height: 50px;
        object-fit: cover;
      }

      .social-icons img:hover {
        transform: scale(1.1);
      }

      .social-icons li {
        margin-top: 10px;
      }

      .social-icons a {
        display: inline-block;
        margin-right: 10px;
      }

      .email-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 500px;
      }

      .email-form h3 {
        font-size: 20px;
        margin-bottom: 10px;
        color: #996F27;
      }

      .email-form input[type="email"],
      .email-form textarea {
        padding: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: none;
        box-shadow: 10px 10px 10px #9e8354;
      }

      .email-form textarea {
        height: 100px;
        resize: none;
      }

      .email-form button[type="submit"] {
        background-color: #996F27;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }

      .email-form button[type="submit"]:hover {
        background-color: #BD8729;
      }

      .footer-content, .copyright {
        max-width: 960px;
        margin: 0 auto;
      }

      .footer-content {
        margin-bottom: 20px;
      }

      p {
        font-size: 16px;
        text-align: center;
        color: #996F27;
      }

      @media screen and (max-width: 768px) {
        .footer-content {
          flex-direction: row;
          align-items: center;
        }
      }

      @media screen and (max-width: 360px) {
        .footer-content {
          flex-direction: row;
          align-items: center;
        }
        .social-icons ul {
          display: flex;
          align-item: center;
          margin-left: 10px;
        }
        .social-icons img {
          display: flex;
          justify-content: center;
          width: 50px;
          height: 50px;
        }
        p {
          font-size: 12px;
        }
      }
      </style>
      <div class="footer">
      <div class="footer-content">
      <div class="social-icons">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://github.com/RizkaRslndP" target="_blank"><img src="https://img.icons8.com/plasticine/100/null/github-squared.png" alt="GitHub"></a></li>
          <li><a href="https://www.instagram.com/rzkrslndp/" target="_blank"><img src="https://img.icons8.com/plasticine/100/null/instagram-new--v2.png" alt="Instagram"></a></li>
          <li><a href="https://www.linkedin.com/in/rizka-rosalinda-pratiwi-7716b11b7/" target="_blank"><img src="https://img.icons8.com/plasticine/100/null/linkedin.png" alt="LinkedIn"></a></li>
        </ul>
      </div>
        <form class="email-form" action="#" method="post">
          <h3>Contact Us</h3>
          <input type="email" name="email" placeholder="Your email address" required>
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      </div>
      `;
    this.shadowRoot.innerHTML = FooterContact;
  }
}

customElements.define("footer-contact", FooterContact);
