
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
import Banner from "../Banner";

const Stud = () => {
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

            <Banner pageTitle={"All Horses"} />
            <section className="destinations-area  pt-70 pb-70 rel z-1" style={{ backgroundColor: "#F9F9F7" }}>
                <h1 style={{ color: "#8F4A00", textAlign: "center", fontSize: "60px" }}>All Horses</h1>

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
                        console.log(horse),

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


        </ReveloLayout>
    );
};
export default Stud;




