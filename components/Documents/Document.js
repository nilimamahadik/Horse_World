import React, { useState } from 'react';
import './Document.css';
import { Typography, Button } from "antd";
import { FcDocument } from "react-icons/fc";
import { useEffect } from 'react';
const Documents = (horseId) => {
    console.log(horseId);
    const [data, setData] = useState([]);
    console.log(data);
    const [loading, setLoading] = useState(true);

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


    return (
        <div className="resume-container">
            <div className="resume-left">
                <div className="resume-section">
                    <h2 level={2} className="section-title">
                        Health Certificate:{" "}
                        <Button type="text" icon={<FcDocument size={20} />} />
                    </h2>


                </div>

                <div className="resume-section">
                    <h2 className="section-title">Birth Certificate : {" "} <Button type="text" icon={<FcDocument size={20} />} /></h2>



                </div>


            </div>


        </div>
    );
};

export default Documents;