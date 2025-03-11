import { useEffect, useState } from "react";
import Image from "next/image";
// import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Card, Row, Col, Typography, Divider } from "antd";

const { Title, Text } = Typography;

const PedigreeTree = ({ horseId }) => {
    const [pedigree, setPedigree] = useState(null);
    console.log(pedigree?.data[0]?.motherName);
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!horseId) return;
        
        const fetchPedigree = async () => {
            try {
                const response = await fetch(`/api/get_horsepedigree?horse_id=${horseId}`);
                const data = await response.json();
                console.log(data);
                
                setPedigree(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching pedigree:", error);
                setLoading(false);
            }
        };

        fetchPedigree();
    }, [horseId]);

    if (loading) return <Typography>Loading...</Typography>;
    if (!pedigree) return <Typography>No pedigree found.</Typography>;

    return (
        <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#f0f2f5", borderRadius: "10px" }}>
      <Title level={3} style={{ marginBottom: "20px", color: "#1890ff" }}>Pedigree Chart</Title>

      {/* Child Horse */}
      <Card hoverable bordered style={{ background: "#fff", textAlign: "center", marginBottom: "20px" }}>
        <Title level={4}>{pedigree?.data[0]?.horse_Name}</Title>
      </Card>

      <Divider>Parents</Divider>

      {/* Parents */}
      <Row gutter={[16, 16]} justify="center">
        <Col span={10}>
          <Card hoverable bordered>
            <Title level={5}>Father: {pedigree?.data[0]?.fatherName}</Title>
            {/* {pedigree.fatherPhoto && <Image src={pedigree.fatherPhoto} alt="Father" width={100} height={100} />} */}
          </Card>
        </Col>
        <Col span={10}>
          <Card hoverable bordered>
            <Title level={5}>Mother: {pedigree?.data[0]?.motherName}</Title>
            {/* {pedigree.motherPhoto && <Image src={pedigree.motherPhoto} alt="Mother" width={100} height={100} />} */}
          </Card>
        </Col>
      </Row>

      <Divider>Grandparents</Divider>

      {/* Grandparents */}
      <Row gutter={[16, 16]} justify="center">
        <Col span={6}>
          <Card hoverable bordered>
            <Title level={5}>Grandfather 1: {pedigree?.data[0]?.grandfather1}</Title>
            {pedigree.grandfather1Photo && <Image src={pedigree.grandfather1Photo} alt="Grandfather 1" width={100} height={100} />}
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable bordered>
            <Title level={5}>Grandmother 1: {pedigree?.data[0]?.grandmother1}</Title>
            {pedigree.grandmother1Photo && <Image src={pedigree.grandmother1Photo} alt="Grandmother 1" width={100} height={100} />}
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable bordered>
            <Title level={5}>Grandfather 2: {pedigree?.data[0]?.grandfather2}</Title>
            {pedigree.grandfather2Photo && <Image src={pedigree.grandfather2Photo} alt="Grandfather 2" width={100} height={100} />}
          </Card>
        </Col>
        <Col span={6}>
          <Card hoverable bordered>
            <Title level={5}>Grandmother 2: {pedigree?.data[0]?.grandmother2}</Title>
            {pedigree.grandmother2Photo && <Image src={pedigree.grandmother2Photo} alt="Grandmother 2" width={100} height={100} />}
          </Card>
        </Col>
      </Row>
    </div>
    );
};

export default PedigreeTree;
