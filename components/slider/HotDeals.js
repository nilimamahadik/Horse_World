"use client";

import { sliderProps } from "@/utility/sliderprops";
import Link from "next/link";
import Slider from "react-slick";

const HotDeals = () => {
  return (
    <Slider {...sliderProps.hotDeals} className="hot-deals-active">
      <div
        className="destination-item style-four no-border"
        data-aos="flip-left"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          {/* <span className="badge">10% Off</span> */}
          <a href="#" className="heart">
            <i className="fas fa-heart" />
          </a>
          <img src="assets/images/destinations/hot-deal1.jpg" alt="Hot Deal" />
        </div>
        <div className="content">
          <span className="location">
            <i className="fal fa-map-marker-alt" /> Jaipur, Rajasthan
          </span>
          <h5>
            <Link href="destination-details">
              "Lucky" Marwari Horse 
            </Link>
          </h5>
        </div>
        <div className="destination-footer">
          <span className="price">
             {/* <span>$58.00</span>/person */}
          </span>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <Link href="destination-details" className="theme-btn style-three">
          <span data-hover="Explore">Explore</span>
          <i className="fal fa-arrow-right" />
        </Link>
      </div>
      <div
        className="destination-item style-four no-border"
        data-aos="flip-left"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          {/* <span className="badge">10% Off</span> */}
          <a href="#" className="heart">
            <i className="fas fa-heart" />
          </a>
          <img src="assets/images/destinations/hot-deal2.jpg" alt="Hot Deal" />
        </div>
        <div className="content">
          <span className="location">
            <i className="fal fa-map-marker-alt" /> Nagpur, Maharashtra
          </span>
          <h5>
            <Link href="destination-details">
              "Kohinoor" Kathiyawadi Horse
            </Link>
          </h5>
        </div>
        <div className="destination-footer">
          <span className="price">
             {/* <span>$58.00</span>/person */}
          </span>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <Link href="destination-details" className="theme-btn style-three">
          <span data-hover="Explore">Explore</span>
          <i className="fal fa-arrow-right" />
        </Link>
      </div>
      <div
        className="destination-item style-four no-border"
        data-aos="flip-left"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          {/* <span className="badge">10% Off</span> */}
          <a href="#" className="heart">
            <i className="fas fa-heart" />
          </a>
          <img src="assets/images/destinations/hot-deal3.jpg" alt="Hot Deal" />
        </div>
        <div className="content">
          <span className="location">
            <i className="fal fa-map-marker-alt" /> Amritsar, Punjab
          </span>
          <h5>
            <Link href="destination-details">
              "Khalnayak" Marwadi Horse
            </Link>
          </h5>
        </div>
        <div className="destination-footer">
          <span className="price">
             {/* <span>$58.00</span>/person */}
          </span>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <Link href="destination-details" className="theme-btn style-three">
          <span data-hover="Explore">Explore</span>
          <i className="fal fa-arrow-right" />
        </Link>
      </div>
      <div
        className="destination-item style-four no-border"
        data-aos="flip-left"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          {/* <span className="badge">10% Off</span> */}
          <a href="#" className="heart">
            <i className="fas fa-heart" />
          </a>
          <img src="assets/images/destinations/hot-deal1.jpg" alt="Hot Deal" />
        </div>
        <div className="content">
          <span className="location">
            <i className="fal fa-map-marker-alt" /> Mumbai, Maharashtra
          </span>
          <h5>
            <Link href="destination-details">
             "Rajkumar" Marwadi Horse
            </Link>
          </h5>
        </div>
        <div className="destination-footer">
          <span className="price">
             {/* <span>$58.00</span>/person */}
          </span>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <Link href="destination-details" className="theme-btn style-three">
          <span data-hover="Explore">Explore</span>
          <i className="fal fa-arrow-right" />
        </Link>
      </div>
      <div
        className="destination-item style-four no-border"
        data-aos="flip-left"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          {/* <span className="badge">10% Off</span> */}
          <a href="#" className="heart">
            <i className="fas fa-heart" />
          </a>
          <img src="assets/images/destinations/hot-deal2.jpg" alt="Hot Deal" />
        </div>
        <div className="content">
          <span className="location">
            <i className="fal fa-map-marker-alt" /> Delhi, India
          </span>
          <h5>
            <Link href="destination-details">
              "Rajput" Marwadi Horse
            </Link>
          </h5>
        </div>
        <div className="destination-footer">
          <span className="price">
             {/* <span>$58.00</span>/person */}
          </span>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <Link href="destination-details" className="theme-btn style-three">
          <span data-hover="Explore">Explore</span>
          <i className="fal fa-arrow-right" />
        </Link>
      </div>
      <div
        className="destination-item style-four no-border"
        data-aos="flip-left"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          {/* <span className="badge">10% Off</span> */}
          <a href="#" className="heart">
            <i className="fas fa-heart" />
          </a>
          <img src="assets/images/destinations/hot-deal3.jpg" alt="Hot Deal" />
        </div>
        <div className="content">
          <span className="location">
            <i className="fal fa-map-marker-alt" /> Nashik, Maharashtra
          </span>
          <h5>
            <Link href="destination-details">
              "Chetak" Marwadi Horse
            </Link>
          </h5>
        </div>
        <div className="destination-footer">
          <span className="price">
             {/* <span>$58.00</span>/person */}
          </span>
          <div className="ratting">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <Link href="destination-details" className="theme-btn style-three">
          <span data-hover="Explore">Explore</span>
          <i className="fal fa-arrow-right" />
        </Link>
      </div>
    </Slider>
  );
};
export default HotDeals;
