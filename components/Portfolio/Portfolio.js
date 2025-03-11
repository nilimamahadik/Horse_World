// import React, { useEffect, useState } from 'react';
// import './Portfolio.css';

import { useEffect } from "react";
import { useState } from "react";


// const Portfolio = ({horseId}) => {
//   console.log(horseId);
//   const [data, setData] = useState([]);
//   console.log(data);
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     const fetchHorses = async () => {
//       try {
//         const response = await fetch(`/api/getHorse_id?id=${encodeURIComponent(horseId)}`);
//         const data = await response.json();
//         console.log(data);

//         if (data.status === 200) {
//           setData(data.data[0]);
//         } else {
//           console.error('Error fetching horses:', data.message);
//         }
//       } catch (error) {
//         console.error('Fetch error:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHorses();
//   }, []);

//   const [activeTab, setActiveTab] = useState('all');

//   const portfolioItems = [
//     { id: 1, type: 'photo', imgSrc: './src/img/Bhishma.jpeg', alt: 'Citrus fruits on cutting board' },
//     { id: 2, type: 'graphic', imgSrc: '', alt: 'Modern building architecture' },
//     { id: 3, type: 'photo', imgSrc: '', alt: 'Man in hat and glasses' },
//     { id: 4, type: 'web', imgSrc: '', alt: 'Palm tree against blue sky' },
//   ];

//   const filteredItems = activeTab === 'all'
//     ? portfolioItems
//     : portfolioItems.filter(item => item.type === activeTab);

//   return (
//     <div className="portfolio-container">
//       {/* <div className="portfolio-header">
//         <h2>Portfolio</h2>
//         <div className="header-arrow">
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </div>
//       </div> */}

//       <div className="portfolio-nav">
//         <button
//           className={activeTab === 'all' ? 'active' : ''}
//           onClick={() => setActiveTab('all')}
//         >
//           Show All
//         </button>
//         <button
//           className={activeTab === 'web' ? 'active' : ''}
//           onClick={() => setActiveTab('web')}
//         >
//           Web
//         </button>
//         <button
//           className={activeTab === 'video' ? 'active' : ''}
//           onClick={() => setActiveTab('video')}
//         >
//           Video
//         </button>
//         <button
//           className={activeTab === 'photo' ? 'active' : ''}
//           onClick={() => setActiveTab('photo')}
//         >
//           Photo
//         </button>
//         <button
//           className={activeTab === 'graphic' ? 'active' : ''}
//           onClick={() => setActiveTab('graphic')}
//         >
//           Graphic
//         </button>
//       </div>

//       <div className="portfolio-grid">
//         {filteredItems.map(item => (
//           <div key={item.id} className="portfolio-item">
//             <img src={item.imgSrc} alt={item.alt} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


const Portfolio = ({ horseId }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const response = await fetch(`/api/getHorse_id?id=${encodeURIComponent(horseId)}`);
        const result = await response.json();
        console.log(result);

        if (result.status === 200) {
          setData(result.data[0]);
        } else {
          console.error("Error fetching horses:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHorses();
  }, [horseId]);

  // Map the Photo array from API response
  const portfolioItems = data.Photo
    ? data.Photo.map((photo, index) => ({
        id: index + 1,
        type: "photo",
        imgSrc: photo.replace(/"/g, ""), // Remove extra quotes if present
        alt: `Horse Photo ${index + 1}`,
      }))
    : [];

  const filteredItems = activeTab === "all" ? portfolioItems : portfolioItems.filter((item) => item.type === activeTab);

  return (
    <div className="portfolio-container">
      <div className="portfolio-nav">
        {/* <button className={activeTab === "all" ? "active" : ""} onClick={() => setActiveTab("all")}>
          Show All
        </button>
        <button className={activeTab === "photo" ? "active" : ""} onClick={() => setActiveTab("photo")}>
          Photo
        </button> */}
      </div>

      <div className="portfolio-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={item.imgSrc} alt={item.alt} />
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
