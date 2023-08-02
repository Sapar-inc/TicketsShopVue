<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>About Us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="footer-section">
        <h3>Contact Us</h3>
        <p>Email: info@example.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="#" class="icon-link">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="icon-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="icon-link">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2023 Your Website. All rights reserved.</p>
    </div>
  </footer>
</template>
  
<style scoped>
.footer {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  background-color: #333;
  color: #fff;
  padding: 40px 0;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1 1 300px;
  margin-bottom: 30px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-section p {
  margin-bottom: 10px;
}

.social-icons {
  display: flex;
}

.icon-link {
  color: #fff;
  margin-right: 10px;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
}
</style>
  