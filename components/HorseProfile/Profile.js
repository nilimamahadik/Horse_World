
"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { FaChessKnight } from 'react-icons/fa';
import { BsBriefcase } from 'react-icons/bs';
import { BsChatQuote } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';

import { IoDocumentOutline } from "react-icons/io5";
// import Biodata from "@/components/Biodata";
import Testimonials from "@/components/Testimonials/Testimonials";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contacts from "@/components/Contact/Contacts";
import Banner from "@/components/Banner";
import Documents from "@/components/Documents/Document";
import ReveloLayout from "@/layout/ReveloLayout";
import { useSearchParams } from "next/navigation";
import "../../components/ProfilePage.css"
import Biodata from "@/components/Biodata/Biodata";
import PedigreeTree from "@/components/HorseLineage/Horse_Lineage";
export const dynamic = "force-dynamic";

const page = () => {

    const searchParams = useSearchParams();
    const horseId = searchParams.get("horse_id");
    const [data, setData] = useState([]);
    // console.log(data);
    const ownerId = data?.OwnerID
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    useEffect(() => {
        const fetchHorses = async () => {
            try {
                const response = await fetch(`/api/getHorse_id?id=${horseId}`);
                const data = await response.json();
                console.log(data);

                if (data.status === 200) {
                    setData(data.data[0]);
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


    const portfolioItems = data.Photo
        ? data.Photo.map((photo, index) => ({
            id: index + 1,
            type: "photo",
            imgSrc: photo.replace(/"/g, ""),
            alt: `Horse Photo ${index + 1}`,
        }))
        : [];


    return (
        <ReveloLayout insta>
            <Banner pageTitle={"Profile"} />
            <div className="profile-wrapper">
                {/* Left Column - Horse Image */}
                <div className="profile-image-section">
                    {portfolioItems.length > 0 ? (
                        <img src={portfolioItems[0].imgSrc} alt={portfolioItems[0].alt} className="profile-image" />
                    ) : (
                        <p>No image available</p>
                    )}
                </div>


                {/* Right Column - Profile Details & Navigation */}
                <div className="profile-details-section">
                    <div className="profile-card">
                        {/* Profile Header */}
                        <div
                            className="profile-header"
                            style={{
                                backgroundColor: "#8F4A00",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                padding: "20px",
                            }}
                        >
                            <div className="profile-info">
                                <h1
                                    className="profile-name"
                                    style={{ fontSize: "40px", textAlign: "center" }}
                                >
                                    {data?.call_name}
                                </h1>
                                <p className="profile-title"></p>
                            </div>
                        </div>


                        {/* Navigation Sections */}
                        <div className="profile-nav">
                            <div className="nav-item" onClick={() => toggleSection("resume")}>
                                <div className="nav-icon person" style={{ backgroundColor: "#3B1C02" }}>
                                    <FaChessKnight className="cursor-pointer text-blue-500 text-xl" />
                                </div>
                                <span>Information</span>
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: activeSection === "resume" ? "auto" : 0, opacity: activeSection === "resume" ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden mt-2"
                            >
                                {activeSection === "resume" && <Biodata horseId={horseId} />}
                            </motion.div>

                            <div className="nav-item" onClick={() => toggleSection("horse_lineage")}>
                                <div className="nav-icon person" style={{ backgroundColor: "#3B1C02" }}>
                                    <FaChessKnight className="cursor-pointer text-blue-500 text-xl" />
                                </div>
                                <span>Horse Lineage</span>
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: activeSection === "horse_lineage" ? "auto" : 0, opacity: activeSection === "horse_lineage" ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden mt-2"
                            >
                                {activeSection === "horse_lineage" && <PedigreeTree horseId={horseId} />}
                            </motion.div>

                            <div className="nav-item" onClick={() => toggleSection("Documents")}>
                                <div className="nav-icon person" style={{ backgroundColor: "#3B1C02" }}>
                                    <IoDocumentOutline className="cursor-pointer text-blue-500 text-xl" />
                                </div>
                                <span>Documents</span>
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: activeSection === "Documents" ? "auto" : 0, opacity: activeSection === "Documents" ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden mt-2"
                            >
                                {activeSection === "Documents" && <Documents horseId={horseId} />}
                            </motion.div>

                            {/* <div className="nav-item" onClick={() => toggleSection("portfolio")}>
                                <div className="nav-icon document" style={{ backgroundColor: "#3B1C02" }}>
                                    <BsFileEarmarkText className="cursor-pointer text-green-500 text-xl" />
                                </div>
                                <span>Portfolio</span>
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: activeSection === "portfolio" ? "auto" : 0, opacity: activeSection === "portfolio" ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden"
                            >
                                {activeSection === "portfolio" && <Resume />}
                            </motion.div> */}

                            <div className="nav-item" onClick={() => toggleSection("testimonials")}>
                                <div className="nav-icon briefcase" style={{ backgroundColor: "#3B1C02" }}>
                                    <BsBriefcase className="cursor-pointer text-yellow-500 text-xl" />
                                </div>
                                <span>Gallery</span>
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: activeSection === "testimonials" ? "auto" : 0, opacity: activeSection === "testimonials" ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden"
                            >
                                {activeSection === "testimonials" && <Portfolio horseId={horseId} />}
                            </motion.div>

                            <div className="nav-item" onClick={() => toggleSection("contacts")}>
                                <div className="nav-icon quote" style={{ backgroundColor: "#3B1C02" }}>
                                    <BsChatQuote className="cursor-pointer text-red-500 text-xl" />
                                </div>
                                <span>Health Details</span>
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: activeSection === "contacts" ? "auto" : 0, opacity: activeSection === "contacts" ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden"
                            >
                                {activeSection === "contacts" && <Testimonials horseId={horseId} />}
                            </motion.div>
                            <div className="nav-item" onClick={() => toggleSection("Contact Details")}>
                                <div className="nav-icon envelope" style={{ backgroundColor: "#3B1C02" }}>
                                    <BsEnvelope className="cursor-pointer text-purple-500 text-xl" />
                                </div>
                                <span>Contact Details</span>
                            </div>
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: activeSection === "Contact Details" ? "auto" : 0, opacity: activeSection === "Contact Details" ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className="overflow-hidden"
                            >
                                {activeSection === "Contact Details" && <Contacts ownerId={ownerId} />}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </ReveloLayout>
    );
};
export default page;