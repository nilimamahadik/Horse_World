"use client"

import { useEffect, useState } from "react";
import { Card, Row, Col,Typography  } from "antd";
import ReveloLayout from "@/layout/ReveloLayout";
import { PhoneOutlined, GlobalOutlined, EnvironmentOutlined } from "@ant-design/icons";
import Banner from "../Banner";
const { Title, Text } = Typography;
const BreedersList = () => {
    const [breeders, setBreeders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBreeders = async () => {
        try {
            const response = await fetch(`/api/get_breederList`);
            const data = await response.json();
            console.log("API Response:", data);

            if (data.status === 200 && Array.isArray(data.data)) {
                setBreeders(data.data);
            } else {
                setBreeders([]);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setBreeders([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBreeders();
    }, []);

    return (
        <ReveloLayout header={1} footer={1}>
            <Banner pageTitle={"Breeder List"} />
            <Row gutter={[16, 16]} style={{ padding: "20px" }}>
                {breeders.length > 0 ? (
                    breeders.map((breeder) => (
                        <Col key={breeder.OwnerID} lg={5} md={10} sm={12} xs={24}>
                            <Card
                                hoverable
                                style={{
                                    borderRadius: "10px",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                    backgroundColor: "#fff",
                                    border: "1px solid #8F4A00",
                                }}
                            >
                                <Title level={4} style={{ marginBottom: "5px", textAlign: "center" }}>
                                    {breeder.firstName} {breeder.lastName}
                                </Title>
                                <Text type="secondary" style={{ display: "block", textAlign: "center" }}>
                                    {breeder.Email}
                                </Text>

                                <div style={{ marginTop: "10px", padding: "10px 0", borderTop: "1px solid #ddd" ,textAlign: "center"}}>
                                    <Text>
                                        <EnvironmentOutlined style={{ color: "#6B3E26", marginRight: "8px" }} />
                                        {breeder.Address1}, {breeder.Address2}
                                    </Text>
                                    <br />
                                    <Text>
                                        {breeder.City}, {breeder.State} - {breeder.Pincode}, {breeder.Country}
                                    </Text>
                                </div>

                                <div style={{ marginTop: "10px", padding: "10px 0", borderTop: "1px solid #ddd" ,textAlign: "center"}}>
                                    <Text>
                                        <PhoneOutlined style={{ color: "#6B3E26", marginRight: "8px" }} />
                                        {breeder.ContactNumber || "NA"}
                                    </Text>
                                    <br />
                                    {breeder.website && (
                                        <Text>
                                            <GlobalOutlined style={{ color: "#6B3E26", marginRight: "8px" }} />
                                            <a href={breeder.website} target="_blank" rel="noopener noreferrer">
                                                {breeder.website}
                                            </a>
                                        </Text>
                                    )}
                                </div>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <p>No breeders found.</p>
                )}
            </Row>
        </ReveloLayout>
    );
};

export default BreedersList;
