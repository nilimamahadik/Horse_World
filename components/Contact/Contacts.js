import React, { useState } from 'react';
import './Contacts.css';
import { useEffect } from 'react';

const Contacts = ({ ownerId }) => {

  console.log(ownerId);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [data, setData] = useState([]);
  console.log(data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHorses = async () => {
      try {
        const response = await fetch(`/api/get_ownerInfo?id=${encodeURIComponent(ownerId)}`);
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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="contact-container">


      <div className="contact-content">
        <div className="contact-map-section">
          <div className="map-container">

            {/* <div className="map-address">
              <p>{data?.Address1}</p>
              <p>{data?.Address2}</p>
              <p>{data?.State}  {data?.Pincode}</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9961.23786972603!2d79.06170184222742!3d21.151090369871074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1741003854871!5m2!1sen!2sin"
                width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div> */}
            <div className="map-address">
              <p>{data?.Address1}</p>
              <p>{data?.Address2}</p>
              <p>{data?.State} {data?.Pincode}</p>

              {data?.Address1 && data?.State && (
                <iframe
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(`${data.Address1}, ${data.Address2}, ${data.State}, ${data.Pincode}`)}&output=embed`}
                ></iframe>
              )}
            </div>

          </div>
        </div>

        <div className="contact-info-section">
          <div className="contact-info-card">
            <div className="info-item">
              <div className="info-icon blue-bg">
                <i className="location-icon">📍</i>
              </div>
              <div className="info-text">{data?.Address1 || "NA"} {data?.Address2 || "NA"}</div>
            </div>

            <div className="info-item">
              <div className="info-icon green-bg">
                <i className="phone-icon">📞</i>
              </div>
              <div className="info-text">{data?.ContactNumber || "NA"}</div>
            </div>

            <div className="info-item">
              <div className="info-icon yellow-bg">
                <i className="email-icon">✉️</i>
              </div>
              <div className="info-text">{data?.Email || "NA"}</div>
            </div>

            <div className="info-item">
              <div className="info-icon orange-bg">
                <i className="website-icon">🌐</i>
              </div>
              <div className="info-text">{data?.website || "NA"}</div>
            </div>
          </div>


        </div>
      </div>




    </div>
  );
};

export default Contacts;