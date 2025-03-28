
"use client"
import Counter from "@/components/Counter";
import { useRouter } from "next/navigation";

import formatDate from "@/components/common"
import SearchFilter from "@/components/SearchFilter";
import SectionTitle from "@/components/SectionTitle";
import Testimonial from "@/components/slider/Testimonial";
import ReveloLayout from "@/layout/ReveloLayout";
import { FaChessKnight } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdAppRegistration } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { IoIosColorFilter } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, Avatar, Typography, Button, Row, Col } from "antd";
import { UserOutlined, CalendarOutlined, EnvironmentOutlined } from "@ant-design/icons";
const page = () => {
  const router = useRouter();
  const [horses, setHorses] = useState([]);
  console.log(horses);
  const horseId = horses[0]?.horse_id
  console.log(horseId);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const response = await fetch('/api/gethorses');
        const data = await response.json();
        if (data.status === 200) {
          setHorses(data.horses);
        } else {
          console.error('Error fetching horses:', data.message);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHorses();
  }, []);



  return (
    <ReveloLayout header={1} footer={1}>

      <section
        className="hero-area-two pt-160 rpt-100 rel z-2"
        style={{
          backgroundImage: "url(assets/images/backgrounds/hero-bg-lines.png)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="hero-content-two"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >

                <h1
                  className="hero-title"
                  data-aos="flip-up"
                  data-aos-delay={50}
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  Horse World
                </h1>
                <p>
                Welcome to Horse World, your premier destination for everything related to horses. Whether you're a seasoned equestrian or a beginner, we offer a wide range of resources to enhance your knowledge, skills, and passion for horses. Join our community and immerse yourself in the world of horses!

                </p>

              </div>
            </div>

            <div className="col-xl-6">
              <div
                className="hero-image-two bgs-cover"
                style={{
                  backgroundImage: "url(assets/images/about/about.png)",
                }}
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Hero Area Start */}

      {/* Hero Area End */}
      {/* Destinations Area start */}
      <br />
      <section className="destinations-area  pt-70 pb-70 rel z-1" style={{ backgroundColor: "#F9F9F7" }}>
        <h2 style={{ color: "#1c231f", textAlign: "center"  }}>Featured Horse</h2>
        <p style={{textAlign:"center",fontSize:"18px"}}>Horses From Trusted and Reputable Breeders. Find Your Perfect Horse Today.</p>
        

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          style={{ marginTop: "15px" }}
        >
          {horses.map((horse, index) => (
            console.log("horse", horse),

            <SwiperSlide key={horse.horse_id} style={{ display: "flex", justifyContent: "center" }}>

              <Card
                style={{
                  width: 320,
                  textAlign: "center",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
                cover={
                  <div
                    style={{
                      backgroundColor: "#4E2A12",
                      padding: "10px",
                      position: "relative",
                      height: "100px", // Increased height
                    }}
                  >
                    <Avatar
                      size={120}
                      src={horse.Photo[0]?.replace(/"/g, "")}
                      style={{
                        border: "5px solid white",
                        position: "absolute",
                        left: "50%",
                        bottom: "-40px",
                        transform: "translateX(-50%)",
                        backgroundColor: "#fff",
                      }}
                    />
                  </div>

                }
              >


                <div style={{ marginTop: 20 }}>
                  <Typography.Title level={3}> {horse?.call_name}</Typography.Title>


                  <Button onClick={() => router.push(`/horseProfile?horse_id=${horse?.horse_id}`)} type="primary" shape="round" style={{ backgroundColor: "#6B3E26", border: "none" }}>
                    View Profile
                  </Button>

                  <Row gutter={16} style={{ marginTop: 20 }}>
                    <Col span={8}>
                      <UserOutlined style={{ fontSize: 24, color: "#6B3E26" }} />
                      <Typography.Text style={{ display: "block", fontWeight: "bold" }}>{horse.Registration_No}</Typography.Text>
                      <Typography.Text type="secondary">Reg. No.</Typography.Text>
                    </Col>

                    <Col span={8}>
                      <CalendarOutlined style={{ fontSize: 24, color: "#6B3E26" }} />
                      <Typography.Text style={{ display: "block", fontWeight: "bold" }}> {new Date(horse.Date_of_birth).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        timeZone: "Asia/Kolkata",
                      })}</Typography.Text>
                      <Typography.Text type="secondary">DOB</Typography.Text>
                    </Col>
                    <Col span={8}>
                      <IoIosColorFilter size={30} color="#3B1C02" style={{ marginRight: "5px" }} />
                      <Typography.Text style={{ display: "block", fontWeight: "bold" }}>{horse.Colour}</Typography.Text>
                      <Typography.Text type="secondary">Color</Typography.Text>
                    </Col>
                  </Row>




                  <div style={{ marginTop: 20 }}>
                    <EnvironmentOutlined style={{ fontSize: 24, color: "#6B3E26" }} />
                    <Typography.Text style={{ display: "block", fontWeight: "bold" }}>
                      Nagpur, Maharashtra
                    </Typography.Text>
                    <Typography.Text type="secondary">{horse.Place_of_Birth}</Typography.Text>
                  </div>


                </div>
              </Card>

            </SwiperSlide>

          ))}
        </Swiper>
      </section>
      {/* Destinations Area end */}
      {/* About Us Area start */}
      <section className="about-us-area py-100 rpb-90 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div
                className="about-us-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <h2>
                  How Horse World Works?
                  </h2>
                </div>
                
                {/* <div className="divider counter-text-wrap mt-45 mb-55">
                </div> */}
                  {/* <span>
                    We have{" "}
                    <span>
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop={25}
                      >
                        <Counter end={25} />
                      </span>{" "}
                      Years
                    </span>{" "}
                    of experience
                  </span> */}
              
                <div className="row">
                  {/* <div className="col-6"> */}
     

<div class="process-container">
  <p style={{textAlign:"left"}}>Our platform helps you trace the lineage of horses, allowing breeders, owners, enthusiasts, and historians to track horse pedigrees easily and comprehensively. Whether you're interested in understanding a horse’s ancestry, discovering genetic traits, or simply exploring the fascinating world of horse bloodlines, you can find it all here.</p>
  
  <div class="step">
    <strong class="step-title">Pedigree Visualization:</strong>
    <p class="step-description">Interactive charts that show a horse’s ancestors.</p>
  </div>

  <div class="step">
    <strong class="step-title">Horse Profile Pages:</strong>
    <p class="step-description">Detailed profiles with information on breed, age, color, and achievements.</p>
  </div>

  <div class="step">
    <strong class="step-title">Search and Filter Options:</strong>
    <p class="step-description">Easily search for horses based on breed, name, or lineage.</p>
  </div>
</div>

                    
                    {/* <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text"
                        data-speed={3000}
                        data-stop={3}
                      >
                        <Counter end={50} />
                      </span>

                      <span className="counter-title">Registered Breeds</span>
                    </div> */}
                  {/* </div> */}
                  {/* <div className="col-6">
                    <div className="counter-item counter-text-wrap">
                      <span
                        className="count-text m-plus"
                        data-speed={3000}
                        data-stop={9}
                      >
                        <Counter end={1} />
                      </span>
                      <span className="counter-title">Satisfied Users</span>
                    </div>
                  </div> */}
                </div>
                <Link href="destination1" className="theme-btn mt-10 style-two">
                  <span data-hover="Explore Breeds">
                    Explore Breeds
                  </span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-us-image">
                <div className="shape">
                  <img src="assets/images/about/shape1.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape2.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape3.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape4.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape5.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape6.png" alt="Shape" />
                </div>
                <div className="shape">
                  <img src="assets/images/about/shape7.png" alt="Shape" />
                </div>
                <img src="assets/images/hero/hero-two.jpg" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Popular Destinations Area start */}
      <section className="popular-destinations-area rel z-1">
        <div className="container-fluid">
          <div className="popular-destinations-wrap br-20 bgc-lighter pt-100 pb-70">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  className="section-title text-center counter-text-wrap mb-70"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2>Explore Popular Indian Horse Breeds</h2>
                  {/* <SectionTitle
                    title={"Explore Popular Indian Horse Breeds"}
                  
                  /> */}
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <a href="#" className="heart">
                        <i className="fas fa-heart" />
                      </a>
                      <img
                        src="assets/images/destinations/destination1.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="destination-details">Marwari Horse</Link>
                      </h6>
                      {/* <span className="time">
                        5352+ tours &amp; 856+ Activity
                      </span>
                      <a href="#" className="more">
                        <i className="fas fa-chevron-right" />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <a href="#" className="heart">
                        <i className="fas fa-heart" />
                      </a>
                      <img
                        src="assets/images/destinations/destination2.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="destination-details"> Kathiawari Horse</Link>
                      </h6>
                      {/* <span className="time">
                        5352+ tours &amp; 856+ Activity
                      </span>
                      <a href="#" className="more">
                        <i className="fas fa-chevron-right" />
                      </a> */}
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <a href="#" className="heart">
                        <i className="fas fa-heart" />
                      </a>
                      <img
                        src="assets/images/destinations/destination3.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="destination-details">Sindhi Horse </Link>  
                      </h6>
                      <span className="time">
                        5352+ tours &amp; 856+ Activity
                      </span>
                      <a href="#" className="more">
                        <i className="fas fa-chevron-right" />
                      </a> 
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <a href="#" className="heart">
                        <i className="fas fa-heart" />
                      </a>
                      <img
                        src="assets/images/destinations/destination4.jpg"
                        alt="Destination"
                      />
                    </div>
                     <div className="content">
                      <h6>
                        <Link href="destination-details">
                          Reserve of Canada, Canada
                        </Link>
                      </h6>
                      <span className="time">
                        5352+ tours &amp; 856+ Activity
                      </span>
                      <a href="#" className="more">
                        <i className="fas fa-chevron-right" />
                      </a>
                    </div> 
                  </div>
                </div>  */}
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={100}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <a href="#" className="heart">
                        <i className="fas fa-heart" />
                      </a>
                      <img
                        src="assets/images/destinations/destination5.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="destination-details">
                          Sindhi Horse
                        </Link>
                      </h6>
                      {/* <span className="time">
                        5352+ tours &amp; 856+ Activity
                      </span> */}
                      {/* <a href="#" className="more">
                        <i className="fas fa-chevron-right" />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div
                    className="destination-item style-two"
                    data-aos="flip-up"
                    data-aos-delay={200}
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <div className="image">
                      <a href="#" className="heart">
                        <i className="fas fa-heart" />
                      </a>
                      <img
                        src="assets/images/destinations/destination6.jpg"
                        alt="Destination"
                      />
                    </div>
                    <div className="content">
                      <h6>
                        <Link href="destination-details">Bhimtadi</Link>
                      </h6>
                      {/* <span className="time">
                        5352+ tours &amp; 856+ Activity
                      </span>
                      <a href="#" className="more">
                        <i className="fas fa-chevron-right" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Destinations Area end */}









      {/* Features Area start */}
      {/* <section className="features-area pt-100 pb-45 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div
                className="features-content-part mb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-60">
                  <h2>
                    The Ultimate Travel Experience Features That Set Our Agency
                    Apart
                  </h2>
                </div>
                <div className="features-customer-box">
                  <div className="image">
                    <img
                      src="assets/images/features/features-box.jpg"
                      alt="Features"
                    />
                  </div>
                  <div className="content">
                    <div className="feature-authors mb-15">
                      <img
                        src="assets/images/features/feature-author1.jpg"
                        alt="Author"
                      />
                      <img
                        src="assets/images/features/feature-author2.jpg"
                        alt="Author"
                      />
                      <img
                        src="assets/images/features/feature-author3.jpg"
                        alt="Author"
                      />
                      <span>4k+</span>
                    </div>
                    <h6>850K+ Happy Customer</h6>
                    <div className="divider style-two counter-text-wrap my-25">
                      <span>
                        <span
                          className="count-text plus"
                          data-speed={3000}
                          data-stop={25}
                        >
                          0
                        </span>{" "}
                        Years
                      </span>
                    </div>
                    <p>We pride ourselves offering personalized itineraries</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="row pb-25">
                <div className="col-md-6">
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-tent" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="tour-details">Fawns</Link>
                      </h5>
                      <p>
                        Tent camping is wonderful way to connect with nature
                      </p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-tent" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="tour-details">Kayaking</Link>
                      </h5>
                      <p>
                        Kayaking is a thrilling outdoor activity that adventure
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="feature-item mt-20">
                    <div className="icon">
                      <i className="flaticon-tent" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="tour-details">Mountain Biking</Link>
                      </h5>
                      <p>
                        Mountain biking is exhilarating sport that physical
                        fitness
                      </p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="icon">
                      <i className="flaticon-tent" />
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="tour-details">Fishing &amp; Boat</Link>
                      </h5>
                      <p>
                        Fishing and boat bring joy quintessential activities
                        that
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Features Area end */}








      {/* Hotel Area start */}
      {/* <section className="hotel-area bgc-black py-100 rel z-1">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-white text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Discover the World's Class Top Hotel"}
                  subtitle2="most popular experience you’ll remember"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three"
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
                    src="assets/images/destinations/hotel1.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Ao Nang, Thailand
                  </span>
                  <h5>
                    <Link href="destination-details">
                      The brown bench near swimming pool Hotel
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="fal fa-bed-alt" /> 2 Bed room
                    </li>
                    <li>
                      <i className="fal fa-hat-chef" /> 1 kitchen
                    </li>
                    <li>
                      <i className="fal fa-bath" /> 2 Wash room
                    </li>
                    <li>
                      <i className="fal fa-router" /> Internet
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$85.00</span>/per night
                    </span>
                    <a href="#" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three"
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
                    src="assets/images/destinations/hotel2.jpg"
                    alt="Hotel"
                  />
                </div>
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Kigali, Rwanda
                  </span>
                  <h5>
                    <Link href="destination-details">
                      Green trees and body of water Marriott Hotel
                    </Link>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="fal fa-bed-alt" /> 2 Bed room
                    </li>
                    <li>
                      <i className="fal fa-hat-chef" /> 1 kitchen
                    </li>
                    <li>
                      <i className="fal fa-bath" /> 2 Wash room
                    </li>
                    <li>
                      <i className="fal fa-router" /> Internet
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$85.00</span>/per night
                    </span>
                    <a href="#" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Ao Nang, Thailand
                  </span>
                  <h5>
                    <a href="#">Painted house surrounded with trees Hotel</a>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="fal fa-bed-alt" /> 2 Bed room
                    </li>
                    <li>
                      <i className="fal fa-hat-chef" /> 1 kitchen
                    </li>
                    <li>
                      <i className="fal fa-bath" /> 2 Wash room
                    </li>
                    <li>
                      <i className="fal fa-router" /> Internet
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$85.00</span>/per night
                    </span>
                    <a href="#" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel3.jpg"
                    alt="Hotel"
                  />
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-8 col-lg-10">
              <div
                className="destination-item style-three"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <span className="location">
                    <i className="fal fa-map-marker-alt" /> Ao Nang, Thailand
                  </span>
                  <h5>
                    <a href="#">house pool Jungle Pool Indonesia Hotel</a>
                  </h5>
                  <ul className="list-style-one">
                    <li>
                      <i className="fal fa-bed-alt" /> 2 Bed room
                    </li>
                    <li>
                      <i className="fal fa-hat-chef" /> 1 kitchen
                    </li>
                    <li>
                      <i className="fal fa-bath" /> 2 Wash room
                    </li>
                    <li>
                      <i className="fal fa-router" /> Internet
                    </li>
                  </ul>
                  <div className="destination-footer">
                    <span className="price">
                      <span>$85.00</span>/per night
                    </span>
                    <a href="#" className="read-more">
                      Book Now <i className="fal fa-angle-right" />
                    </a>
                  </div>
                </div>
                <div className="image">
                  <div className="ratting">
                    <i className="fas fa-star" /> 4.8
                  </div>
                  <a href="#" className="heart">
                    <i className="fas fa-heart" />
                  </a>
                  <img
                    src="assets/images/destinations/hotel4.jpg"
                    alt="Hotel"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hotel-more-btn text-center mt-40">
            <Link href="destination2" className="theme-btn style-four">
              <span data-hover="Explore More Hotel">Explore More Hotel</span>
              <i className="fal fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section> */}
      {/* Hotel Area end */}



      {/* Mobile App Area start */}
      {/* <section className="mobile-app-area py-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div
                className="mobile-app-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    We Are Available On the Store Get Our Mobile Apps Very
                    Easily
                  </h2>
                </div>
                <p>
                  We go above and beyond to make your travel dreams a reality.
                  Trust us to handle the details so you can creating
                  unforgettable memories. Explore the world with confidence
                </p>
                <ul className="list-style-two mt-35 mb-30">
                  <li>Experience Agency</li>
                  <li>Professional Team</li>
                  <li>Low Cost Travel</li>
                  <li>Online Support 24/7</li>
                </ul>
                <div className="google-play-app-store">
                  <a href="#">
                    <img
                      src="assets/images/mobile-app/g-play.jpg"
                      alt="Google Play"
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/mobile-app/a-store.jpg"
                      alt="App Store"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mobile-app-images">
                <div className="bg">
                  <img src="assets/images/mobile-app/phone-bg.png" alt="BG" />
                </div>
                <div className="images">
                  <img
                    src="assets/images/mobile-app/phone2.png"
                    alt="Phone"
                    data-aos="fade-down-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  />
                  <img src="assets/images/mobile-app/phone.png" alt="Phone" />
                  <img
                    src="assets/images/mobile-app/phone3.png"
                    alt="Phone"
                    data-aos="fade-up-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Mobile App Area end */}


      {/* Testimonials Area start */}
      {/* <section className="testimonials-area rel z-1">
        <div className="container">
          <div className="testimonials-wrap bgc-lighter">
            <div className="row">
              <div
                className="col-lg-5 rel"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div
                  className="testimonial-left-image rmb-55"
                  style={{
                    backgroundImage:
                      "url(assets/images/testimonials/testimonial-left.jpg)",
                  }}
                />
              </div>
              <div className="col-lg-7">
                <div
                  className="testimonial-right-content"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title mb-55">
                    <h2>
                      <span>5280</span> Global Clients Say About Us Services
                    </h2>
                  </div>
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonials Area end */}


      {/* CTA Area start */}
      <section className="cta-area pt-100 rel z-1">
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
                <span className="category"></span>
                <h2>Planned Foal</h2>
                {/* <h2>Explore the world best tourism</h2> */}
                <Link
                  href="/addhorse" 
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
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
                <span className="category"></span>
                <h2>Blogs and News</h2>
                <Link href="" className="theme-btn style-two">
                  <span data-hover="">Explore </span>
                  <i className="fal fa-arrow-right" />
                </Link>
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
                <span className="category"></span>
                <h2>10 Best Horse Breeds for Beginners & First-Time Owners</h2>
                <Link
                  href="/addhorse"
                  className="theme-btn style-two bgc-secondary"
                >
                  <span data-hover="Explore Tours">Explore</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area end */}

      {/* Blog Area start */}
      {/* <section className="blog-area py-70 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center counter-text-wrap mb-70"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <SectionTitle
                  title={"Read Latest News & Blog"}
                  subtitle2="most popular experience you’ll remember"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="blog" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="blog-details">
                      Ultimate Guide to Planning Your Dream Vacation with Ravelo
                      Travel Agency
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <Link href="blog-details" className="theme-btn">
                  <span data-hover="Book Now">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="blog" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="blog-details">
                      Unforgettable Adventures Travel Agency Bucket List
                      Experiences
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <Link href="blog-details" className="theme-btn">
                  <span data-hover="Book Now">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="content">
                  <Link href="blog" className="category">
                    Travel
                  </Link>
                  <h5>
                    <Link href="blog-details">
                      Exploring Culture and way Cuisine Travel Agency's they
                      Best Foodie Destinations
                    </Link>
                  </h5>
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">25 February 2024</a>
                    </li>
                    <li>
                      <i className="far fa-comments" />{" "}
                      <a href="#">Comments (5)</a>
                    </li>
                  </ul>
                </div>
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <Link href="blog-details" className="theme-btn">
                  <span data-hover="Book Now">Read More</span>
                  <i className="fal fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </ReveloLayout>
  );
};
export default page;




