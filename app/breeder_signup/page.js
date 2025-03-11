
"use client"
import React from "react";
import { Form, Input, Checkbox, Radio, Button, Card, Row, Col, Select } from "antd";
import ReveloLayout from "@/layout/ReveloLayout";
import Banner from "@/components/Banner";
import { Option } from "antd/es/mentions";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const page = () => {
    const [form] = Form.useForm();
    const router = useRouter();



    const handleSubmit = async (values) => {
        console.log("Form values:", values);

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            const data = await response.json();
            console.log("Data:", data);

            if (data.status === 200) {

                alert(data.message || "User registered successfully!");
                router.push('/');
            } else {
                alert("Error: " + data.message);
            }
        } catch (error) {

            console.error("Error saving horse:", error);
        }
    };

    return (
        <ReveloLayout insta>
            <Banner pageTitle={"Free Breeder/Owner Account"} />
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

                <p style={{ fontSize: "14px", color: "#666", marginBottom: "15px" }}>
                    After you have clicked on the sign-up button, we will send you an e-mail with a link to confirm your registration.
                    If you do not receive an e-mail, please check your spam box or contact us.
                </p>

                <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>With a free breeder/owner account you can:</h5>
                <ul>
                    <li>Add your name as owner or breeder to a horse.</li>
                    <li>
                        Get a page with your horses and, if you want, your contact information.
                    </li>
                    <li>Add your name to the breeders list.</li>
                    <li>Put your horse(s) on the studhorse page.</li>
                    <li>Put your litter(s) on the litter page.</li>
                </ul>


                <Form form={form} layout="vertical" onFinish={handleSubmit} style={{ marginTop: "20px" }}>
                    {/* Address Fields - Side by Side */}


                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="First Name:" name="firstName" rules={[{ required: true, message: "First name is required" }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Account Name:" name="accountName" rules={[{ required: true, message: "Account name is required" }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Last Name:" name="lastName" rules={[{ required: true, message: "Last name is required" }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Password:" name="password" rules={[{ required: true, message: "Password is required" }]}>
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="E-mail:" name="email" rules={[{ required: true, type: "email", message: "Valid email is required" }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Confirm Password:"
                                name="confirmPassword"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    { required: true, message: "Confirm your password" },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue("password") === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error("Passwords do not match!"));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Col span={24}>
                        <Form.Item label="Country:" name="country" rules={[{ required: true, message: "Country is required" }]}>
                            <Select placeholder="Select your country">
                                <Option value="usa">USA</Option>
                                <Option value="canada">Canada</Option>
                                <Option value="uk">UK</Option>
                                <Option value="india">India</Option>
                            </Select>
                        </Form.Item>
                    </Col>




                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Address Line 1" name="address1">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Address Line 2" name="address2">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Other Fields */}
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Zip Code" name="zip">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="City" name="city">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="State/Province/Region" name="state">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Phone Number" name="phone">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="Owner" name="kennel">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Website" name="website">
                                <Input placeholder="www.example.com" />
                            </Form.Item>
                        </Col>
                    </Row>
                    {/* Public Information Options */}
                    <Form.Item name="publicOptions">
                        <Checkbox.Group>
                            <Checkbox value="showName">Show (also) my personal name</Checkbox>
                            <Checkbox value="publicPage">I want a public page</Checkbox>
                            <Checkbox value="breedersList">
                                Add my name to the breeders list
                            </Checkbox>
                        </Checkbox.Group>
                    </Form.Item>

                    {/* Visibility Options */}
                    <Form.Item label="Show this information on my public page:" name="visibility">
                        <Radio.Group>
                            <Radio value="full">My Full Address</Radio>
                            <Radio value="cityRegion">Only my City and Region</Radio>
                            <Radio value="phone">My Phone Number</Radio>
                            <Radio value="contactForm">
                                A contact form (email address will not be shown)
                            </Radio>
                        </Radio.Group>
                    </Form.Item>

                    {/* Kennel Info */}
                    <Form.Item label="Short Info on your Kennel" name="kennelInfo">
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button type="primary" htmlType="submit" size="medium">
                            Sign up for a breeder/owner account
                        </Button>
                    </Form.Item>

                </Form>
            </Card>
        </ReveloLayout>
    );
};

export default page;
