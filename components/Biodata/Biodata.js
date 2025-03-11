import React, { useEffect, useState } from 'react';
import './profile-ui.css'; // Import the CSS file

const Biodata = ({ horseId }) => {
  console.log(horseId);

  const [data, setData] = useState([]);
  console.log(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const response = await fetch(`/api/getHorse_id?id=${encodeURIComponent(horseId)}`);
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

  return (


        <div className="resume-section" style={{padding:"20px"}}>
          <h2 className="section-title">
            Name: <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.call_name}</span>
          </h2>

          <h2 className="section-title">
            Date of birth:: <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.Date_of_birth}</span>
          </h2>
          <h2 className="section-title">
            Color: <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.Colour}</span>
          </h2>
          <h2 className="section-title">
            BreederID: <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.Breeder_ID}</span>
          </h2>
          <h2 className="section-title">
            OwnerID: <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.OwnerID}</span>
          </h2>
          <h2 className="section-title">
            Country of origin: <span style={{ fontSize: "20px", fontWeight: "bold" }}>{data?.Country_of_origin}</span>
          </h2>




        </div>




  );
};

export default Biodata;