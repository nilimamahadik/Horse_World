import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import { FaHeartbeat, FaBrain, FaBone, FaDna, FaEye } from "react-icons/fa"; // Import icons
import { Grid } from '@mui/material';
import { Typography } from 'antd';
// // import { Card, CardContent, Typography, Grid, CircularProgress } from "@mui/material";

const testimonialsData = [
  {
    id: 1,
    name: "Janet Green",
    date: "April 15, 2018",
    image: "https://via.placeholder.com/80",
    text: "Awesome! You're creative, smart and edgy – just what we needed for our mobile application startup! Your graphic design looks and works great for us, so we will be contacting you soon!"
  },
  {
    id: 2,
    name: "Steven Morris",
    date: "May 11, 2018",
    image: "https://via.placeholder.com/80",
    text: "I would definitely recommend your services to everyone who's looking for quality web/graphic design. I am 100% satisfied with the outcome, and would like to thank you for the hard work on..."
  },
  {
    id: 3,
    name: "Amy Jones",
    date: "June 14, 2018",
    image: "https://via.placeholder.com/80",
    text: "I'm happy to be able to install, manage and customize the theme without anyone's help! thank you so much for the wonderful job you've done for me, and I really hope to..."
  },
  // You can add more testimonials here
];

const HealthItem = ({ icon, label, value }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: 10,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 10,
      paddingLeft: 15,
    }}
  >
    <span style={{ fontSize: 22 }}>{icon}</span>
    <Typography variant="body1" style={{ fontWeight: "bold", color: "white" }}>{label}:</Typography>
    <Typography variant="body2" style={{ fontWeight: "bold", color: "#3D3D3D", fontSize: "20px" }}>{value || "N/A"}</Typography>
  </div>
);

const Testimonials = ({ horseId }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  console.log(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const response = await fetch(`/api/gethorse_health?id=${encodeURIComponent(horseId)}`);
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

  const testimonialsPerPage = 3;

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonialsData.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

  const totalPages = Math.ceil(testimonialsData.length / testimonialsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (



    <div className="testimonials-content">


      <div className="resume-section" style={{ padding: "20px" }}>
        <h2 className="section-title">
          <FaHeartbeat size={25} color="#8F4A00" />     Cardiac Result : <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.Cardiac_results}</span>
        </h2>

        <h2 className="section-title">
          <FaBrain size={25} color="#8F4A00" />        Epilepsy Result : <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.Epilepsy}</span>
        </h2>
        <h2 className="section-title">
          <FaBone size={25} color="#8F4A00" />         Elbow Result : <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.Elbow}</span>
        </h2>
        <h2 className="section-title">
          <FaDna size={25} color="#8F4A00" />          DNA Result : <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.DNA_Testing}</span>
        </h2>
        <h2 className="section-title">
          <FaEye size={25} color="#8F4A00" />          Eyes Result : <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.Eyes}</span>
        </h2>




      </div>









    </div>
  );
};

export default Testimonials;