'use client';
import React, { useState } from "react";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Button from "antd/es/button";
import Select from "antd/es/select";
import DatePicker from "antd/es/date-picker";
import Upload from "antd/es/upload";
import Checkbox from "antd/es/checkbox";
import Row from "antd/es/row";
import Col from "antd/es/col";
import Card from "antd/es/card";

import { UploadOutlined } from "@ant-design/icons";
import ReveloLayout from "@/layout/ReveloLayout";
import Banner from "@/components/Banner";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { IoMdReturnLeft } from "react-icons/io";
const { Option } = Select;

const page = () => {
    const [fileList, setFileList] = useState([]);
    // console.log(fileList);
    const titles = {
        virtualAnimal: "Your Horse",
        father: "Sire ",
        mother: "Dam ",
        grandfather1: "Grandfather (Sire)",
        grandmother1: "Grandmother (Sire)",
        grandfather2: "Grandfather (Dam)",
        grandmother2: "Grandmother (Dam)",
    };
    // console.log(file);
    const [family, setFamily] = useState({
        virtualAnimal: { name: "", image: null },
        father: { name: "", image: null },
        mother: { name: "", image: null },
        grandfather1: { name: "", image: null },
        grandfather2: { name: "", image: null },
        grandmother1: { name: "", image: null },
        grandmother2: { name: "", image: null },
    });

    console.log(family);

    const handleFileChange = ({ fileList }) => {
        setFileList(fileList);
    };

    const handleSubmit = async (values) => {
        console.log("Form values:", values);
        const formData = new FormData();
        formData.append("callName", values.callName);
        formData.append("regNo", values.regNo);
        formData.append("sire", values.sire);
        formData.append("dam", values.dam);
        formData.append("sex", values.sex);
        formData.append("dob", values.dob);
        formData.append("dod", values.dod);
        formData.append("color", values.color);
        formData.append("country", values.country);
        formData.append("breeder", values.breeder);
        formData.append("owner", values.owner);
        formData.append("height", values.height);
        formData.append("weight", values.weight);
        formData.append("teeth", values.teeth);
        formData.append("birth_marks", values.birth_marks);
        formData.append("PreTitle", values.PreTitle);
        formData.append("PostTitle", values.PostTitle);
        formData.append("birth_place", values.birth_place);
        formData.append("dnaTesting", values.dnaTesting);
        formData.append("comments", values.comments);
        formData.append("family", JSON.stringify(family));

        fileList.forEach(({ originFileObj }) => {
            if (originFileObj) {
                formData.append("photo", originFileObj);
            }
        });

        // console.log(...formData.entries());
        try {
            const response = await fetch('/api/horses', {
                method: 'POST',
                body: formData, // No need for headers, browser sets it automatically
            });

            const data = await response.json();

            if (data.status === 200) {
                alert(data.message || "Horse added successfully!");
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {
            console.error("Error saving horse:", error);
        }
    };

    const handleInputChange = (key, value) => {
        console.log(key);

        console.log(value); // Logs correctly

        setFamily((prev) => {
            let updatedFamily = {
                ...prev,
                [key]: typeof prev[key] === "object" ? { ...prev[key], name: value } : value,
            };

            if (key === "callName") {
                // console.log(callName);

                updatedFamily.virtualAnimal = {
                    ...prev.virtualAnimal,
                    name: value,
                };
            }
            if (key === "sire") {
                updatedFamily.father = {
                    ...prev.father,
                    name: value,
                };
            }
            if (key === "dam") {
                updatedFamily.mother = {
                    ...prev.mother,
                    name: value,
                };
            }

            return updatedFamily;
        });
    };



    const handleUpload = (key, file) => {
        const imageUrl = URL.createObjectURL(file);
        setFamily((prev) => ({ ...prev, [key]: { ...prev[key], image: imageUrl } }));
    };

    const renderCard = (key, backgroundColor) => (
        <Card
            title={titles[key]} // Card Title
            style={{
                width: 350,
                textAlign: "center",
                borderRadius: 10,
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                backgroundColor: backgroundColor || "#fff",
            }}
            cover={
                family[key].image ? (
                    <img
                        alt={key}
                        src={family[key].image}
                        style={{
                            height: 400,
                            objectFit: "cover",
                            borderRadius: "5px",
                        }}
                    />
                ) : (
                    <div
                        style={{
                            height: 100,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#f5f5f5",
                            borderRadius: "5px",
                        }}
                    >
                        No Image
                    </div>
                )
            }
        >
            <Input
                placeholder="Enter Name"
                value={family[key]?.name || ""} // Fetch name correctly
                onChange={(e) => handleInputChange(key, e.target.value)}
                style={{
                    marginBottom: 10,
                    borderRadius: 5,
                    border: "1px solid #ddd",
                    padding: 5,
                }}
            />


            <Upload showUploadList={false} beforeUpload={(file) => handleUpload(key, file)}>
                <Button icon={<UploadOutlined />} type="primary" style={{ width: "100%" }}>
                    Upload Image
                </Button>
            </Upload>
        </Card>
    );


    return (
        <ReveloLayout insta>
            <Banner pageTitle={"Add a horse"} />
            <Card
                style={{
                    maxWidth: 1200,
                    margin: "auto",
                    padding: "30px",
                    border: "1px solidrgb(100, 96, 96)",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    marginBottom: "20px",
                    marginTop: "30px",
                }}
            >
                <Form layout="vertical" className="custom-form" onFinish={handleSubmit}
                    initialValues={{
                        callName: "",  // Predefined Call Name
                        regNo: "H12345",  // Predefined Registration Number
                        sire: "",
                        dam: "",
                        sex: "Male",
                        teeth: 40,
                        PreTitle: "Thunder",
                        PostTitle: "Thunder",
                        color: "Brown",
                        country: "India",
                        birth_marks: "white dotted",
                        breeder: "6",
                        owner: "6",
                        height: 15.2,
                        weight: 500,
                        dnaTesting: "Clear",
                        hipDysplasia: "Normal",
                        spine: "normal",
                        thyroid: "normal",
                        comments: " thisis strong "
                    }}
                >
                    {/* <Form layout="vertical" className="custom-form" onFinish={handleSubmit}     > */}
                    <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: "10px" }}>Basic Information</h2>
                    <div className="custom-container">

                        <Row gutter={16}>



                            <Col span={12}>
                                <Form.Item className="formItem" label="Call Name" name="callName" rules={[{ required: true, message: "Please enter the horse's call name" }]}>

                                    <Input
                                        placeholder="Enter horse call name"
                                        value={family.callName}
                                        onChange={(e) => handleInputChange("callName", e.target.value)}
                                    />


                                    {/* <Input
                                        placeholder="Enter horse call name"
                                        onChange={(e) => handleInputChange("callName", e.target.value)}
                                    /> */}
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Registration Number" name="regNo">
                                    <Input placeholder="Enter registration number" />
                                </Form.Item>
                            </Col>
                        </Row>



                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Sire (Father)" name="sire">

                                    <Input
                                        placeholder="Enter sire name"
                                        value={String(family.sire?.name || "")} // Ensure it correctly retrieves the value
                                        onChange={(e) => handleInputChange("sire", e.target.value)}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Dam (Mother)" name="dam">
                                    <Input placeholder="Enter dam name"
                                        value={String(family.dam?.name || "")} // Ensure it correctly retrieves the value
                                        onChange={(e) => handleInputChange("dam", e.target.value)} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item label="Sex" name="sex">
                                    <Select placeholder="Select sex">
                                        <Option value="male">Male</Option>
                                        <Option value="female">Female</Option>
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item className="formItem" label="Teeth" name="teeth">
                                    <Input style={{ width: "100%" }} placeholder="Enter Teeth" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Date of Birth" name="dob">
                                    <DatePicker style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Date of Death" name="dod">
                                    <DatePicker style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>

                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>

                                <Form.Item className="formItem" label="PreTitle" name="PreTitle">
                                    <Input placeholder="Enter PreTitle" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="PostTitle" name="PostTitle">
                                    <Input placeholder="Enter PostTitle" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Color" name="color">
                                    <Input placeholder="Enter horse color" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item label="Country of Origin" name="country">
                                    <Select placeholder="Select country">
                                        <Option value="us">United States</Option>
                                        <Option value="uk">United Kingdom</Option>
                                        <Option value="fr">France</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>

                                <Form.Item className="formItem" label="Birth Mark" name="birth_marks">
                                    <Input placeholder="Enter Birth Mark" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Birth Place" name="birth_place">
                                    <Input placeholder="Enter Birth Place" />
                                </Form.Item>
                            </Col>

                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Breeder ID" name="breeder">
                                    <Input placeholder="Enter breeder id " />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Owner ID" name="owner">
                                    <Input placeholder="Enter owner id" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                    {/* Health Section */}
                    <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: "10px" }}>Health Information</h2>
                    <div className="custom-container">
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Height (in hands)" name="height">
                                    <Input placeholder="Enter height" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Weight (kg)" name="weight">
                                    <Input placeholder="Enter weight" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item className="formItem" label="DNA Testing" name="dnaTesting">
                                    <Select placeholder="Select DNA test status">
                                        <Option value="clear">Clear</Option>
                                        <Option value="carrier">Carrier</Option>
                                        <Option value="affected">Affected</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Hip Dysplasia" name="hipDysplasia">
                                    <Select placeholder="Select rating">
                                        <Option value="normal">Normal</Option>
                                        <Option value="mild">Mild</Option>
                                        <Option value="severe">Severe</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Spine Condition" name="spine">
                                    <Input placeholder="Enter spine health details" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Thyroid Health" name="thyroid">
                                    <Input placeholder="Enter thyroid condition" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                    <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: "10px" }}>Additional Information</h2>
                    <div className="custom-container">
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item className="formItem" label="Identification Number" name="identification">
                                    <Input placeholder="Enter ID number" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className="formItem" label="DNA Profile" name="dnaProfile">
                                    <Input placeholder="Enter DNA profile" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item className="formItem" label="Comments" name="comments">
                            <Input.TextArea rows={3} placeholder="Enter any additional comments" />
                        </Form.Item>

                        {/* Horse Image Upload */}
                        <Form.Item className="formItem" label="Upload Photos" name="photos">
                            <Upload
                                multiple
                                beforeUpload={() => false} // Prevent auto-upload
                                fileList={fileList}
                                onChange={handleFileChange}
                            >
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>

                            {/* <Upload
                                beforeUpload={(file) => {
                                    setFile(file); // Store the file in state
                                    return false; // Prevent auto-upload
                                }}
                                showUploadList={true}
                            >
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload> */}
                        </Form.Item>
                    </div>
                    {/* Breeding Status */}
                    <Form.Item className="formItem" name="breedingStatus" valuePropName="checked">
                        <Checkbox>Available for Breeding</Checkbox>
                    </Form.Item>

                    <hr />
                    <div
                        style={{
                            textAlign: "center",
                            padding: 40,
                            maxWidth: 1000,
                            margin: "auto",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        <h2 style={{ marginBottom: 10, fontSize: "24px", fontWeight: 600 }}>  Your Horse Lineage </h2>


                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 30,
                            }}
                        >
                            {/* Virtual Animal (Left) */}
                            <div>{renderCard("virtualAnimal")}</div>

                            {/* Parents and Grandparents (Right Side) */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                                {/* Father's Side */}
                                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                                    {renderCard("father")}
                                    <span style={{ fontSize: 18, fontWeight: "bold", color: "#555" }}>OR</span>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                        {renderCard("grandfather1")}
                                        {renderCard("grandmother1")}
                                    </div>
                                </div>

                                {/* Mother's Side */}
                                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                                    {renderCard("mother")}
                                    <span style={{ fontSize: 18, fontWeight: "bold", color: "#555" }}>OR</span>
                                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                        {renderCard("grandfather2")}
                                        {renderCard("grandmother2")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Form Buttons */}
                    <Form.Item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button htmlType="submit" style={{ backgroundColor: '#5B913B', color: "white" }} >
                            Save
                        </Button>
                        <Button style={{ marginLeft: "10px", backgroundColor: '#E4003A', color: "white" }} danger>
                            Close
                        </Button>
                    </Form.Item>

                </Form>

            </Card>


        </ReveloLayout >
    );
};

export default page;


