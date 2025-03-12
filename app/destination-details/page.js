import SectionTitle from "@/components/SectionTitle";
import Destination from "@/components/slider/Destination";
import Subscribe from "@/components/Subscribe";
import ReveloLayout from "@/layout/ReveloLayout";
import Link from "next/link";
const page = () => {
  return (
    <ReveloLayout>
      {/* Page Banner Start */}
      <section className="page-banner-two rel z-1">
        <div className="container-fluid">
          <hr className="mt-0" />
          <div className="container">
            <div className="banner-inner pt-15 pb-25">
              <h2
                className="page-title mb-10"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                Marwari Horses
              </h2>
              <nav aria-label="breadcrumb">
                <ol
                  className="breadcrumb justify-content-center mb-20"
                  data-aos="fade-right"
                  data-aos-delay={200}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Horse Breeds
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Destination Gallery start */}
      <div className="destination-gallery">
        <div className="container-fluid">
          <div className="row gap-10 justify-content-center rel">
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <img
                  src="assets/images/destinations/destination-details1.jpg"
                  alt="Destination"
                />
              </div>
              <div className="gallery-item">
                {/* <img
                  src="assets/images/destinations/destination-details4.jpg"
                 
                /> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <img
                  src="assets/images/destinations/destination-details2.jpg"
                  alt="Destination"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-item">
                <img
                  src="assets/images/destinations/destination-details3.jpg"
                  
                />
              </div>
              {/* <div className="gallery-item">
                <img
                  src="assets/images/destinations/destination-details5.jpg"
                  alt="Destination"
                />
              </div> */}
            </div>
            {/* <div className="col-lg-12">
              <div className="gallery-more-btn">
                <Link
                  href="contact"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="See All Photos">See All Photos</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Destination Gallery End */}
      {/* About Us Area start */}
      <section className="about-us-area pt-90 pb-100 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-6">
              <div
                className="destination-details-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="h2 mb-15"> Welcome to World of</span>
                  <h2>Marwari Horse</h2>
                </div>
                <p>
                The history of the Marwari is largely grounded in folklore. The breed originated in the Marwar region of India, when horses native to that region were crossed with Arabians. According to legend, those Arabians may have arrived on Arabian ships that were shipwrecked off of the coast.

The resulting Marwari horses were bred by the Rathores in the 1100s. During the 12th century, the Rathores prized these horses, selectively breeding them to enhance the horses’ best qualities. In the 16th century, the Marwari served as cavalry horses. They had a strong natural sense of direction and were known for carrying their riders back home after getting lost in the desert. The breed’s excellent hearing also helped to alert both horse and rider to potential danger.

While the Marwari was essential to this battle lifestyle, the 20th century brought lifestyle changes and the horse fell out of demand. Breed numbers plummeted, and British occupiers of India preferred Thoroughbreds over the Marwari horse.
                </p>
                <p>
                Luckily, some dedicated breed enthusiasts helped to preserve these horses. Maharaja Umaid Singhji was among the first to step in and advocate for these horses, and his grandson continued on his efforts.
                </p>
                <Link
                  href="destination-details"
                  className="theme-btn mt-25 style-two"
                >
                  {/* <span data-hover="Explore Destinations"> */}
                  <span data-hover="Explore Breeds">
                    Explore Indian Horse Breeds
                  </span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="destination-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7572.644368459078!2d79.05008529673407!3d21.162460754959216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c7b5011c08a9%3A0x444b648beb6bcbeb!2sNagpur%20District%20Equestrian%20Association-THE%20HORSE%20RIDING%20ACADEMY%20NAGPUR!5e1!3m2!1sen!2sin!4v1738849919087!5m2!1sen!2sin"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Destinations Area start */}
      <section className="destinations-area bgc-lighter pt-85 pb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Explore Indian Horse Breeds </h2>
              </div>
            </div>
          </div>
          <Destination />
        </div>
      </section>
      {/* Destinations Area end */}

      {/* Features Tours Area start */}
      {/* <section className="features-tour-area bgc-black text-white pt-100 pb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center pb-25">
            <div className="col-lg-6">
              <div
                className="section-title counter-text-wrap mb-20"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle title={"Discover Horses"} bg={"bgc-primary"} />
              </div>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="destinations-nav style-two mb-20">
                <li data-filter="*" className="active">
                  Show All
                </li>
                <li data-filter=".beach">Beach</li>
                <li data-filter=".museum">Museum</li>
                <li data-filter=".park">Park</li>
                <li data-filter=".city">City</li>
              </ul>
            </div>
          </div>
          <div className="row destinations-active justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 item beach park">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge">10% Off</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour1.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price">
                     {/* <span>$58.00</span>/person */}
                  {/* </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <Link href="tour-details" className="theme-btn style-three">
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 item museum park city">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour2.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> New Zealand
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price"> */}
                     {/* <span>$58.00</span>/person */}
                  {/* </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <Link href="tour-details" className="theme-btn style-three">
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 item beach city">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <span className="badge bgc-pink">Featured</span>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour3.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Bali, Indonesia
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price"> */}
                     {/* <span>$58.00</span>/person */}
                  {/* </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <Link href="tour-details" className="theme-btn style-three">
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 item beach museum">
              <div
                className="destination-item style-four no-border"
                data-aos="flip-left"
                data-aos-delay={150}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img src="assets/images/destinations/tour4.jpg" alt="Tour" />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Rome, Italy
                  </span>
                  <h6>
                    <Link href="tour-details">
                      Relinking Beach in Nusa panada island, Bali, Indonesia
                    </Link>
                  </h6>
                </div>
                <div className="destination-footer">
                  <span className="price"> */}
                     {/* <span>$58.00</span>/person */}
                  {/* </span>
                  <div className="ratting">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                  </div>
                </div>
                <Link href="tour-details" className="theme-btn style-three">
                  <span data-hover="Explore">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}





      {/* Features Tours Area end */}
      {/* Popular Activity Area start */}
      {/* <section className="popular-activity pt-100 pb-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-45"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h2>Explore Our Popular Category</h2>
                <p>
                 
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity1.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Dressage</Link>
                  </h5>
                  <span className="time">258 Horses</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity2.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Racing</Link>
                  </h5>
                  <span className="time">320 Horses</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity3.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Breeders</Link>
                  </h5>
                  <span className="time">452 Horses</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity4.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">ShowJumping</Link>
                  </h5>
                  <span className="time">125 Horses</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity5.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Racing</Link>
                  </h5>
                  <span className="time">500 Horses</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity6.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Breeders</Link>
                  </h5>
                  <span className="time">258 Horses</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity7.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Show Jumping</Link>
                  </h5>
                  <span className="time">258 Horses</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity8.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Racing</Link>
                  </h5>
                  <span className="time">320 Horses</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="activity-item">
                <div className="image">
                  <img
                    src="assets/images/activities/activity9.png"
                    alt="Activity"
                  />
                </div>
                <div className="content">
                  <h5>
                    <Link href="tour-details">Breeders</Link>
                  </h5>
                  <span className="time">258 Horses</span>
                </div>
                <div className="right-btn">
                  <Link href="tour-details" className="more">
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Activity Area end */}
      {/* CTA Area start */}
      <section className="cta-area rel z-1">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta1.jpg)" }}
              >
                <span className="category">Lineage</span>
                <h2>Explore the world's Best Horse Website</h2>
                {/* <Link
                  href="tour-details"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Explore Breeds">Explore Breeds</span>
                  <i className="fal fa-arrow-right" />
                </Link>  */}
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta2.jpg)" }}
              >
                <span className="category">Event</span>
                <h2>World's largest Horse Owner Sumit</h2>
                {/* <Link href="tour-details" className="theme-btn style-two">
                  <span data-hover="Explore Tours">Explore Horses</span>
                  <i className="fal fa-arrow-right" />
                </Link> */}
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="zoom-in-down"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="cta-item"
                style={{ backgroundImage: "url(assets/images/cta/cta3.jpg)" }}
              >
                <span className="category">Latest Entries</span>
                <h2>Latest Entries Uploaded By User</h2>
                {/* <Link
                  href="tour-details"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Explore Tours">Explore Breeds</span>
                  <i className="fal fa-arrow-right" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section> 
      {/* CTA Area end */}
      {/* Hotel Area start */}
      <section className="hotel-area py-70 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center pb-40">
            <div className="col-lg-9">
              <div
                className="section-title counter-text-wrap mb-15"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Discover the World's Best Horse Breeds"}
                  bg={"bgc-primary"}
                />
              </div>
            </div>
            <div className="col-lg-3 text-xl-end">
              {/* <Link
                href="tour-list"
                className="theme-btn style-two bgc-secondary mb-15"
              >
                <span data-hover="Explore More Hotel">Explore More Breeds</span>
                <i className="fal fa-arrow-right" />
              </Link> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel5.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Nagpur, Maharashtra
                  </span>
                  <h5>
                    <Link href="tour-details">
                      The brown muscular "Raja Marwari horse
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      {/* <i className="fal fa-bed-alt" /> 2 Bed room */}
                       <i text>Father Side</i>
      
                      Pawan
                    </li>
                    <li>
                      {/* <i className="fal fa-hat-chef" /> */}
                      <i>Mother Side</i>
                       Laxmi
                    </li>
                    <li>
                      {/* <i className="fal fa-bath" /> */}
                      <i>Height</i>
                       15.5 Hands
                    </li>
                    <li>
                      {/* <i className="fal fa-router" />  */}
                      <i>Behaviour</i>
                        Friendly
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      {/* <span>$85.00</span>/per night */}
                      {/* <span>Rs 750000.00</span> */}
                    </span>
                    {/* <Link href="tour-details" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  {/* <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div> */}
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel6.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Jaipur , Rajasthan
                  </span>
                  <h5>
                    <Link href="tour-details">
                      Royal Dark Marwari Horse "Chetak" 
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      {/* <i className="fal fa-bed-alt" />  */}
                      <i>Father Side</i>
                      Rajbahadur
                    </li>
                    <li>
                      {/* <i className="fal fa-hat-chef" /> */}
                      <i>Mother Side </i>
                       Pushpa
                    </li>
                    <li>
                      {/* <i className="fal fa-bath" /> */}
                      <i>Height</i>
                       14.5 Hands
                    </li>
                    <li>
                      {/* <i className="fal fa-router" /> */}
                      <i>Behaviour</i>
                        Aggressive
                    </li>
                  </ul>
                  <div className="destination-footer">
                    {/* <span className="price">
                       <span>Rs 850000.00</span> 
                       /per night
                    </span> */}
                    {/* <Link href="tour-details" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  {/* <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div> */}
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel7.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Amritsar, Punjab
                  </span>
                  <h5>
                    <Link href="tour-details">
                      The Dark Brown Marwari Horse "Shakti"
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      {/* <i className="fal fa-bed-alt" />  */}
                      <i>Father Side</i>
                      Badhshah
                    </li>
                    <li>
                      {/* <i className="fal fa-hat-chef" />  */}
                      <i>Mother Side</i>
                      Preeti
                    </li>
                    <li>
                      {/* <i className="fal fa-bath" />  */}
                      <i>Height</i>
                      16 Hands
                    </li>
                    <li>
                      {/* <i className="fal fa-router" />  */}
                      <i>Behaviour</i>
                      Friendly
                    </li>
                  </ul>
                  <div className="destination-footer">
                    {/* <span className="price">
                      <span>Rs.1000000.00</span>
                    </span> */}
                    {/* <Link href="tour-details" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three bgc-lighter"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                  <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel8.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Delhi
                  </span>
                  <h5>
                    <Link href="tour-details">
                      The Marwari Horse "Kali"
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      {/* <i className="fal fa-bed-alt" />  */}
                      <i>Father Side</i>
                      Rudra
                    </li>
                    <li>
                      {/* <i className="fal fa-hat-chef" /> */}
                      <i>Mother Side</i>
                      Janvi
                    </li>
                    <li>
                      {/* <i className="fal fa-bath" />  */}
                      <i>Height</i>
                      14.5 Hands
                    </li>
                    <li>
                      {/* <i className="fal fa-router" />  */}
                      <i>Behaviour</i>
                      Friendly
                    </li>
                  </ul>
                  {/* <div className="destination-footer">
                    <span className="price">
                      <span>Rs 1200000.00</span>
                    </span>
                    <Link href="tour-details" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hotel Area end */}
      {/* Newsletter Area start */}
      <Subscribe />
      {/* Newsletter Area end */}
    </ReveloLayout>
  );
};
export default page;
