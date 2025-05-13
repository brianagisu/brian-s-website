<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CARS ONSALE</title>
  <link rel="stylesheet" href="style.css"> 
</head>
<body>
  <nav class="navbar">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#Resources">Resources</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#Solus">Solus</a></li>
    </ul>
    
  </nav>
  <div id="typing-effect">
  <h1 id="welcome-text"></h1>
  </div>
<script>
  const text = "COME AND GRAB ONE OF YOUR FAVOURITE AUDI CAR AT A LOWER PRICE";
  const typingEffect = document.getElementById("typing-effect");
  typingEffect.style.fontSize = "24px";
  const speed = 120; 
  let index = 0;

  function typeText() {
    if (index < text.length) {
      document.getElementById("welcome-text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, speed);
    }
  }

  typeText(); 
</script>
  </div>

  <div class="slideshow-container">
    <div class="slide">
      <img src="image/download (5).jpg" alt="Image 1">
    </div>
    <div class="slide">
      <img src="image/download (4).jpg" alt="Image 2">
    </div>
    <div class="slide">
      <img src="image/download (1).jpg" alt="Image 3">
    </div>
    <div class="slide">
      <img src="image/download (n).jpg" alt="Image 4">
  </div>
  <div>
      <p>Ready to find your dream car? Click the button below to get started!</p>
     <button>
        <a href="#contact" style="color:blue; text-decoration:yellowgreen;">Get Started</a>
     </button>
    </div>
  </div>


  <div class="dots">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>

  <script>
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    function showSlides() {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
      }

      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1; }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active");

      setTimeout(showSlides, 3000); 
    }

    showSlides(); 
  </script>
    <div class="about" id="about">
        <h2>About Us</h2>
        <p>We are a leading car dealership specializing in Audi cars. Our mission is to provide high-quality vehicles at competitive prices.</p>
     <p>We have a wide range of Audi models available, and our team is dedicated to helping you find the perfect car for your needs.</p>
    </div>
    <div class="services" id="services">
        <h2>Services</h2>
        <p>We offer a variety of services to our customers, including:</p>
        <ul>
            <li>Car Sales</li>
            <li>Financing Options</li>
            <li>Trade-Ins</li>
            <li>Maintenance and Repairs</li>
        </ul>
    </div>
    <div class="contact" id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to schedule a test drive, please contact us:</p>
        <p>Email:brianagisu48@gmail.com</p>
        <p>Phone: +254 746 483 885</p>
        <p>Address: 123 Audi Street, Nairobi, Kenya</p>
    </div>
    <div class="resources" id="Resources">
        <h2>Resources</h2>
        <p>Check out our resources for more information on Audi cars:</p>
        <ul>
            <li><a href="https://www.audi.com">Audi Official Website</a></li>
            <li><a href="https://www.carsguide.com.au/car-advice/audi">CarsGuide Audi Advice</a></li>
            <li><a href="https://www.edmunds.com/audi/">Edmunds Audi Reviews</a></li>
        </ul>
    </div>
    <div class="testimonials">
        <h2>Testimonials</h2>
        <p>"I had a great experience buying my Audi from Cars OnSale. The staff was friendly and knowledgeable!" - John Doe</p>
        <p>"I love my new Audi! The financing options made it easy for me to get the car I wanted." - Jane Smith</p>
        <p>"The maintenance service is top-notch. I trust them with my car!" - Mark Johnson</p>
    </div>

    <div class="message">
        <h2>Message Us</h2>
        <form action="submit_form.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>
    <div class="solus" id="Solus">
        <h2>Solus</h2>
        <p>Solus is a leading provider of automotive solutions, offering a range of services to enhance your driving experience.</p>
        <p>From advanced technology to exceptional customer service, Solus is committed to delivering the best for Audi owners.</p>
        <p>Explore our innovative solutions and discover how we can help you get the most out of your Audi.</p>
        <p>For more information, visit our website: <a href="https://www.audi.com" target="_blank">Solus Official Website</a></p>
    </div>
    <div class="footer">
        <h2> Appriciation</h2>
            <p>Thank you for visiting our website Cars OnSale. We hope you find the perfect Audi car for you!</p>
            <p>For any inquiries, please contact us at: <a href="brianagisu48@gmail.com">brianagisu48@gmail.com</a></p>
        </div>
      
        <footer>
        <p>&copy; 2023 Cars OnSale. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <ul class="social-media">
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
            <li><a href="https://www.linkedin.com">LinkedIn</a></li>
            <li><a href="https://www.youtube.com">YouTube</a></li>
              <li><a href="https://www.Whatsapp.com">Whatsapp</a></li>
        </ul>
    </footer>
  <script src="script.js" defer></script>
</body>
</html>
