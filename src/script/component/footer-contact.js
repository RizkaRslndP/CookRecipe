class FooterContact extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const FooterContact = `
    <style>
      footer {
        background-color: #f1f1f1;
        padding: 20px 0;
      }

.footer-content {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.social-icons a {
  display: inline-block;
  margin-right: 20px;
}

.social-icons i {
  font-size: 24px;
  color: #555;
  transition: color 0.2s ease;
}

.social-icons a:hover i {
  color: #ff5722;
}

.email-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

.email-form h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.email-form input[type="email"],
.email-form textarea {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
}

.email-form textarea {
  height: 100px;
}

.email-form button[type="submit"] {
  background-color: #ff5722;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.email-form button[type="submit"]:hover {
  background-color: #f44336;
}

/* Styles for copyright info */

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
  color: #777;
}
          @media screen and (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }
  
  .social-icons {
    margin-bottom: 20px;
  }
  
  .email-form {
    max-width: 100%;
  }
  
  .email-form input[type="email"],
  .email-form textarea,
  .email-form button[type="submit"] {
    width: 100%;
  }
}
        </style>
        <footer>
        <div class="footer-content">
    <h3>Follow Us</h3>
    <div class="social-icons">
      <a href="#" target="_blank"></a>
      <a href="#" target="_blank"></a>
      <a href="#" target="_blank"></a>
    </div>
    <form class="email-form" action="#" method="post">
      <h3>Contact Us</h3>
      <input type="email" name="email" placeholder="Your email address" required>
      <textarea name="message" placeholder="Your message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
  <div class="copyright">
    <p>&copy; 2023 Your Recipe Page. All rights reserved.</p>
  </div>
  </footer>
      `;
    this.shadowRoot.innerHTML = FooterContact;
  }
}

customElements.define("footer-contact", FooterContact);
