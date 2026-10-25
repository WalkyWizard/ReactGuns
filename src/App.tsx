import "./App.css";

import gun1 from "./assets/gun1.webp";
import gun2 from "./assets/gun2.webp";
import gun3 from "./assets/gun3.webp";
import gun4 from "./assets/gun4.webp";
import gun5 from "./assets/gun5.webp";
import gun6 from "./assets/gun6.webp";
import gun7 from "./assets/gun7.webp";
import gun8 from "./assets/gun8.webp";
import logo from "./assets/logo.webp";
import present from "./assets/present.webp";
import sale from "./assets/sale.png";



const images = [gun1, gun2, gun3, gun4, gun5, gun6, gun7, gun8];

function App() {
  return (
    <div className="page">
      <div className="layout">

        <div className="box gallery-box">
          <img src={logo} alt="logo" className="brand-logo" />

          <div className="gallery">
            <div className="thumbnails">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={`thumb ${i === 0 ? "thumb-first" : ""}`}
                  alt="thumb"
                />
              ))}
            </div>

            <div className="main-image">
              <img src={gun1} alt="main" />
            </div>
          </div>
        </div>

        <div className="box info-box">

          <div className="breadcrumbs">
            Оружейный магазинㅤ›ㅤAR оружиеㅤ›ㅤAR-15ㅤ›ㅤAR-15 Daniel Defenseㅤ›ㅤКарабин Daniel Defense DDM4 V7 PRO GUN METAL GRAY кал.223Rem 18"
          </div>

          <h1 className="title">
            Карабин Daniel Defense DDM4 V7 PRO GUN METAL GRAY кал.223Rem 18"
          </h1>

          <div className="meta-row">
            <span>Артикул: 0212809385047</span>
            <span className="review-link">Оставить отзыв</span>
          </div>

          <div className="price-row">
            <div className="price">197 460 грн</div>
            <div className="side-actions">
              <span>К сравнению</span>
              <span>В желания</span>
            </div>
          </div>

          <div className="stock">В наличии</div>

          <div className="discount-login">
            <img src={sale} alt="sale" className="discount-icon-img" />
            Войти &gt; Скидка 5% для зарегистрированных
          </div>

          <div className="buy-row">
            <div className="quantity">
              <button>-</button>
              <input value="1" readOnly />
              <button>+</button>
            </div>

            <button className="buy">Купить</button>
            <button className="quick">Заказать в 1 клик</button>
          </div>

          <div className="gift-box">
            <img src={present} alt="gift" className="gift-image" />

            <div className="gift-info">
              <div className="gift-title">Подарок</div>
              <div className="gift-desc">
                Сертификат на тренировку "Все включено"
              </div>
              <div className="gift-price">
                <span className="old-price">4 000 грн</span>
                <span className="free">бесплатно</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;