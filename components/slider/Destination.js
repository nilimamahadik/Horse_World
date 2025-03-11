"use client";
import { sliderProps } from "@/utility/sliderprops";
import Link from "next/link";
import Slider from "react-slick";

const Destination = () => {
  return (
    <Slider {...sliderProps.destination} className="destination-active">
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five1.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            {/* <Link href="destination-details">Switzerland's</Link> */}
            <Link href="destination-details">Deccani</Link>
          </h6>
          {/* <span className="tours">258 tours</span> */}
          <span className="tours">500 Horses</span>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={50}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five2.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            {/* <Link href="destination-details">Poland</Link> */}
            <Link href="destination-details">Marwari</Link>
          </h6>
          {/* <span className="tours">258 tours</span> */}
          <span className="tours">352 Horses</span>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five3.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            {/* <Link href="destination-details">Indonesia</Link> */}
            <Link href="destination-details">Kathiyawadi</Link>
          </h6>
          {/* <span className="tours">258 tours</span> */}
          <span className="tours">225 Horses</span>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={100}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five4.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            {/* <Link href="destination-details">Thailand</Link> */}
            <Link href="destination-details">Sindhi</Link>
          </h6>
          {/* <span className="tours">258 tours</span> */}
          <span className="tours">192 Horses</span>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={150}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five5.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            {/* <Link href="destination-details">Rome, Italy</Link> */}
            <Link href="destination-details">Bhimthadi</Link>
          </h6>
          {/* <span className="tours">258 tours</span> */}
          <span className="tours">100 Horses</span>
        </div>
      </div>
      <div
        className="destination-item style-two"
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="image">
          <img
            src="assets/images/destinations/destination-five2.jpg"
            alt="Destination"
          />
        </div>
        <div className="content">
          <h6>
            {/* <Link href="destination-details">Indonesia</Link> */}
            <Link href="destination-details">Sikang</Link>
          </h6>
          {/* <span className="tours">258 tours</span> */}
          <span className="tours">125 Horses</span>
        </div>
      </div>
    </Slider>
  );
};
export default Destination;
