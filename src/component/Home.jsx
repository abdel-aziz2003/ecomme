import React from 'react';
import Products from './Products';

 const Home = () =>{


return (
<>
<section className="banner">
  <div className="slider">
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="slide-inner">
            <div
              className="slide-image"
              style={{ backgroundImage: "url(images/slider/slider1.jpg)" }}
            />
            <div className="swiper-content">
              <h1>
              Trouvez ce dont vous avez besoin, quand vous en avez besoin
              </h1>
              <p className="mar-bottom-20">
              Des offres incroyables sur des produits de qualité"
"Achetez plus, économisez plus
              </p>
              <a href="" className="biz-btn">
               Savoir plus
              </a>
              <a href="" className="biz-btn mar-left-10">
                Nous contacter
              </a>
            </div>
            <div className="overlay" />
          </div>
        </div>
      </div>
      {/* Add Arrows */}

    </div>
  </div>
</section>
<Products/>
<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/color-switcher.js"></script>
    <script src="js/plugin.js"></script>
    <script src="js/main.js"></script>
    <script src="js/menu.js"></script>
    <script src="js/custom-swiper2.js"></script>
    <script src="js/custom-nav.js"></script>
    <script src="js/custom-date.js"></script>
</>


)

 }
export default Home;