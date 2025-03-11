



import React from "react";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Upload,
  Checkbox,
  Row,
  Col,
  Card,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const Provisional = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    //////////console.log.log.log("validateForm ::", validateForm());
    const { valid, errors } = validateForm();
    if (valid) {
      // if (validateForm()) {
      const formDataToSend = new FormData();

      // Append all form fields to FormData
      for (const [key, value] of Object.entries(formData)) {
        formDataToSend.append(key, value);
      }
      // Append files from the refs
      for (const [key, ref] of Object.entries(fileRefs)) {
        if (ref.current && ref.current.files[0]) {
          formDataToSend.append(`${key}File`, ref.current.files[0]);
        }
      }

      try {
        //console.log(...formDataToSend.entries());


        const userConfirmed = window.confirm(
          "Have you reviewed all the information thoroughly and want to save and proceed?"
        );
        if (userConfirmed) {
          setLoading(true);
          const response = await fetch("/api/save", {
            method: "POST",
            body: formDataToSend,
          });
          // ////////console.log.log.log(response);

          if (!response.ok) {
            setLoading(false);
            throw new Error("Network response was not ok");
          }

          const data = await response.json();

          if (data.status === "success") {
            const queryParams = new URLSearchParams();

            queryParams.append("data", JSON.stringify(data.data)); // Serialize complex data

            const queryString = queryParams.toString();
            // //////console.log.log("Query String:", queryString);

            router.push(`/feeprovisional?${encryptId(queryString)}`);
            // setLoading(false);
          } else {
            alert(
              "An error occurred while saving the data. Please try again later."
            );
            setLoading(false);
          }
        }
      } catch (error) {
        setLoading(false);
        //console.log.error("Error posting data:", error);
      }
    } else {
      // Form validation failed
      setLoading(false);
      const errorMessages = Object.values(errors).filter(Boolean).join("\n");
      // ////console.log.log(errorMessages);

      // ////console.log.log("Form validation failed.");

      alert(
        "Please ensure all fields in the form are filled out correctly to proceed.\n\n" +
        errorMessages
      );
    }
  };


  return (
    <Card
      style={{
        maxWidth: 1200,
        margin: "auto",
        padding: "30px",
        border: "1px solidrgb(100, 96, 96)",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px"
      }}
    >
      <Form layout="vertical" onFinish={onFinish} className="custom-form">
        <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: "10px" }}>Basic Information</h2>
        <div className="custom-container">

          {/* Name and Search */}
          <Row gutter={16}>

          <Col span={12}>
              <Form.Item className="formItem" label="Name" name="name" rules={[{ required: true, message: "Please enter the horse's name" }]}>
                <Input placeholder="Enter horse name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item className="formItem" label="Call Name" name="callName" rules={[{ required: true, message: "Please enter the horse's call name" }]}>
                <Input placeholder="Enter horse call name" />
                
              </Form.Item>
            </Col>
         
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item className="formItem" label="Registration Number" name="regNo">
                <Input placeholder="Enter registration number" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item className="formItem" label="Breed" name="breed">
                <Input placeholder="Enter breed" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item className="formItem" label="Sire (Father)" name="sire">
                <Input placeholder="Enter sire name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item className="formItem" label="Dam (Mother)" name="dam">
                <Input placeholder="Enter dam name" />
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
              <Form.Item className="formItem" label="Date of Birth" name="dob">
                <DatePicker style={{ width: "100%" }} />
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
              <Form.Item className="formItem" label="Breeder Name" name="breeder">
                <Input placeholder="Enter breeder name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item className="formItem" label="Owner Name" name="owner">
                <Input placeholder="Enter owner name" />
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
          <Form.Item className="formItem" label="Upload Photo" name="photo">
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </div>
        {/* Breeding Status */}
        <Form.Item className="formItem" name="breedingStatus" valuePropName="checked">
          <Checkbox>Available for Breeding</Checkbox>
        </Form.Item>

        {/* Form Buttons */}
        <Form.Item style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button htmlType="submit" style={{ backgroundColor: '#5B913B'}} >
            Save
          </Button>
          <Button style={{ marginLeft: "10px", backgroundColor: '#E4003A' }} danger>
            Close
          </Button>
        </Form.Item>

      </Form>
    </Card>
  );
};

export default Provisional;



// import React, { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/router";
// import { encryptId } from "src/utils/encrypt";
// import { CommandLoader, DocumentValidation, dropdownOptions } from "../common";
// import { UploadOutlined } from "@ant-design/icons";
// import {
//   Form,
//   Input,
//   DatePicker,
//   Select,
//   Upload,
//   Button,
//   InputNumber,
// } from "antd";
// import en from "@/data/en";
// import mr from "@/data/mr";
// const { Option } = Select;
// const Provisional = () => {
//   const [form] = Form.useForm();

//   const { locale } = useRouter(); // Get the current locale from the router
//   const translations = locale === "mr" ? mr : en; // Load the correct translations based on locale

//   const fileRefs = {
//     photo: useRef(null),
//     signature: useRef(null),
//     degree: useRef(null),
//     aadhar: useRef(null),
//     identity: useRef(null),
//     dob: useRef(null),
//     domicile: useRef(null),
//   };
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();
//   const fileInputRefs = useRef([]);
//   const [provisionalNoInput, setProvisionalNoInput] = useState("");
//   const [provisionalRegistrationNo, setProvisionalRegistrationNo] = useState("Yes");
//   const [errors, setErrors] = useState({});
//   const [photoFile, setPhotoFile] = useState(null);
//   const [signatureFile, setSignatureFile] = useState(null);
//   const [degreeFile, setDegreeFile] = useState(null);
//   const [aadharFile, setAadharFile] = useState(null);
//   const [identityFile, setIdentityFile] = useState(null);
//   const [dobFile, setDobFile] = useState(null);
//   const [domicileFile, setDomicileFile] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const options = dropdownOptions()
//   const [formData, setFormData] = useState({
//     // provisionalRegistrationNo: "0",
//     // registrationNo: "0",
//     // name: "",
//     // fathersName: "",
//     // mothersName: "",
//     // lastName: "",
//     // fullName: "",
//     // dateOfBirth: "2024-07-31",
//     // gender: "female",
//     // category: "",
//     // nationality: "indian",
//     // stateOfResidence: "maharastra",
//     // aadharCardNo: "234343456767",
//     // sector: "private",
//     // degree: "",
//     // dateOfPassing: "2024-07-31",
//     // universityName: "Rashtrasant Tukdoji Maharaj University ,nagpur",
//     // collegeName: "Nagpur Veterinary College, Nagpur",
//     // mobileNo: "9876543212",
//     // alternateMobileNo: "6521345231",
//     // emailId: "test2@gmail.com",
//     // alternateEmailId: "nilimamahadik98765@gmail.com",
//     // isForeign: false,
//     // permanentAddress: "5-2, Civil Lines, Nagpur",
//     // permanentState: "maharashtra",
//     // permanentDistrict: "nagpur",
//     // permanentTaluka: "nagpur",
//     // permanentVillage: "nagpur",
//     // permanentPincode: "442202",
//     // workingAddress: "nagpur",
//     // workingState: "maharashtra",
//     // workingDistrict: "nagpur",
//     // workingTaluka: "nagpur",
//     // workingVillage: "nagpur",
//     // workingPincode: "442202",
//     // oath: false,
//     // status: false,
//     // reject: false,
//     // remark: false,
//     // state: false,
//     // regType: "provisional",
//     // doctorinfo: "provisional",

//     provisionalRegistrationNo: "0",
//     registrationNo: "0",
//     name: "",
//     fathersName: "",
//     mothersName: "",
//     lastName: "",
//     fullName: "",
//     dateOfBirth: "",
//     gender: "",
//     category: "",
//     nationality: "",
//     stateOfResidence: "",
//     aadharCardNo: "",
//     sector: "",
//     degree: "",
//     dateOfPassing: "",
//     universityName: "",
//     collegeName: "",
//     mobileNo: "",
//     alternateMobileNo: "",
//     emailId: "",
//     alternateEmailId: "",
//     isForeign: false,
//     permanentAddress: "",
//     permanentState: "",
//     permanentDistrict: "",
//     permanentTaluka: "",
//     permanentVillage: "",
//     permanentPincode: "",
//     workingAddress: "",
//     workingState: "",
//     workingDistrict: "",
//     workingTaluka: "",
//     workingVillage: "",
//     workingPincode: "",
//     oath: false,
//     status: false,
//     reject: false,
//     remark: false,
//     state: false,
//     regType: "provisional",
//     doctorinfo: "provisional",
//   });
//   //modal
//   useEffect(() => {
//     if (provisionalRegistrationNo === "Yes") {
//       setModalOpen(true); // Open modal if the default value is "Yes"
//     }
//   }, [provisionalRegistrationNo]);

//   const handleModal = (e) => {
//     const { value } = e.target;
//     setProvisionalRegistrationNo(value);

//     if (value === "Yes") {
//       setModalOpen(true);
//     } else {
//       setProvisionalNoInput("");
//     }
//   };
//   const onFinish = (values) => {
//     console.log("Form Values:", values);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     const lettersOnlyFields = ["name", "fathersName", "mothersName", "lastName"];
//     const lettersOnly = /^[A-Za-z\s]*$/;

//     if (lettersOnlyFields.includes(name)) {
//       if (!lettersOnly.test(value)) {
//         setErrors((prevErrors) => ({
//           ...prevErrors,
//           [name]: "Only letters are allowed.",
//         }));
//         return; // Stop further processing if validation fails
//       }
//     }


//     setFormData((prevFormData) => {
//       const newFormData = {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value,
//       };

//       if (name === "sameAddress") {
//         if (checked) {
//           newFormData.workingAddress = prevFormData.permanentAddress;
//           newFormData.workingState = prevFormData.permanentState;
//           newFormData.workingDistrict = prevFormData.permanentDistrict;
//           newFormData.workingTaluka = prevFormData.permanentTaluka;
//           newFormData.workingVillage = prevFormData.permanentVillage;
//           newFormData.workingPincode = prevFormData.permanentPincode;
//         } else {
//           newFormData.workingAddress = "";
//           newFormData.workingState = "";
//           newFormData.workingDistrict = "";
//           newFormData.workingTaluka = "";
//           newFormData.workingVillage = "";
//           newFormData.workingPincode = "";
//         }
//       }

//       return newFormData;
//     });
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: "", // Clear error message for the current field
//     }));
//     if (name === "dateOfBirth") {
//       validateDateOfBirth(value);
//     }
//   };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent the default form submission
  //   //////////console.log.log.log("validateForm ::", validateForm());
  //   const { valid, errors } = validateForm();
  //   if (valid) {
  //     // if (validateForm()) {
  //     const formDataToSend = new FormData();

  //     // Append all form fields to FormData
  //     for (const [key, value] of Object.entries(formData)) {
  //       formDataToSend.append(key, value);
  //     }
  //     // Append files from the refs
  //     for (const [key, ref] of Object.entries(fileRefs)) {
  //       if (ref.current && ref.current.files[0]) {
  //         formDataToSend.append(`${key}File`, ref.current.files[0]);
  //       }
  //     }

  //     try {
  //       //console.log(...formDataToSend.entries());


  //       const userConfirmed = window.confirm(
  //         "Have you reviewed all the information thoroughly and want to save and proceed?"
  //       );
  //       if (userConfirmed) {
  //         setLoading(true);
  //         const response = await fetch("/api/save", {
  //           method: "POST",
  //           body: formDataToSend,
  //         });
  //         // ////////console.log.log.log(response);

  //         if (!response.ok) {
  //           setLoading(false);
  //           throw new Error("Network response was not ok");
  //         }

  //         const data = await response.json();

  //         if (data.status === "success") {
  //           const queryParams = new URLSearchParams();

  //           queryParams.append("data", JSON.stringify(data.data)); // Serialize complex data

  //           const queryString = queryParams.toString();
  //           // //////console.log.log("Query String:", queryString);

  //           router.push(`/feeprovisional?${encryptId(queryString)}`);
  //           // setLoading(false);
  //         } else {
  //           alert(
  //             "An error occurred while saving the data. Please try again later."
  //           );
  //           setLoading(false);
  //         }
  //       }
  //     } catch (error) {
  //       setLoading(false);
  //       //console.log.error("Error posting data:", error);
  //     }
  //   } else {
  //     // Form validation failed
  //     setLoading(false);
  //     const errorMessages = Object.values(errors).filter(Boolean).join("\n");
  //     // ////console.log.log(errorMessages);

  //     // ////console.log.log("Form validation failed.");

  //     alert(
  //       "Please ensure all fields in the form are filled out correctly to proceed.\n\n" +
  //       errorMessages
  //     );
  //   }
  // };

//   const validateForm = () => {
//     let valid = true;
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Please enter name";
//       valid = false;
//     }

//     if (!formData.fathersName.trim()) {
//       newErrors.fathersName = "Please enter father name";
//       valid = false;
//     }

//     if (!formData.mothersName.trim()) {
//       newErrors.mothersName = "Please enter mother name";
//       valid = false;
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last Name is required";
//       valid = false;
//     }
//     if (!formData.fullName.trim()) {
//       newErrors.fullName = "Full Name is required";
//       valid = false;
//     }

//     if (!formData.dateOfBirth) {
//       newErrors.dateOfBirth = "Date of Birth is required";
//       valid = false;
//     }

//     if (!formData.gender) {
//       newErrors.gender = "Gender is required";
//       valid = false;
//     }

//     if (!formData.category) {
//       newErrors.category = "Category is required";
//       valid = false;
//     }

//     if (!formData.nationality.trim()) {
//       newErrors.nationality = "Nationality is required";
//       valid = false;
//     }

//     if (!formData.stateOfResidence.trim()) {
//       newErrors.stateOfResidence = "State of Residence is required";
//       valid = false;
//     }

//     if (!/^\d{12}$/.test(formData.aadharCardNo)) {
//       newErrors.aadharCardNo = "Enter a valid aadhar card number";
//       valid = false;
//     }

//     if (!formData.degree) {
//       newErrors.degree = "Degree is required";
//       valid = false;
//     }

//     if (!formData.dateOfPassing) {
//       newErrors.dateOfPassing = "Date of Passing is required";
//       valid = false;
//     }
//     if (!formData.universityName.trim()) {
//       newErrors.universityName = "University Name is required";
//       valid = false;
//     }

//     if (!formData.collegeName.trim()) {
//       newErrors.collegeName = "College Name is required";
//       valid = false;
//     }

//     if (!/^\d{10}$/.test(formData.mobileNo)) {
//       newErrors.mobileNo = "Mobile Number must be a 10-digit number";
//       valid = false;
//     }

//     if (
//       formData.alternateMobileNo &&
//       !/^\d{10}$/.test(formData.alternateMobileNo)
//     ) {
//       newErrors.alternateMobileNo =
//         "Alternate Mobile Number must be a 10-digit number";
//       valid = false;
//     }

//     if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
//       newErrors.emailId = "Invalid email format";
//       valid = false;
//     }

//     if (formData.alternateEmailId && !/\S+@\S+\.\S+/.test(formData.alternateEmailId)) {
//       newErrors.alternateEmailId = "Invalid alternate email format";
//       valid = false;
//     }

//     if (!formData.permanentAddress.trim()) {
//       newErrors.permanentAddress = "Permanent Address is required";
//       valid = false;
//     }

//     if (!formData.permanentState.trim()) {
//       newErrors.permanentState = "Permanent State is required";
//       valid = false;
//     }

//     if (!formData.permanentDistrict.trim()) {
//       newErrors.permanentDistrict = "Permanent District is required";
//       valid = false;
//     }

//     if (!formData.permanentTaluka.trim()) {
//       newErrors.permanentTaluka = "Permanent Taluka is required";
//       valid = false;
//     }

//     if (!formData.permanentVillage.trim()) {
//       newErrors.permanentVillage = "Permanent Landmark is required";
//       valid = false;
//     }

//     if (!/^\d{6}$/.test(formData.permanentPincode)) {
//       newErrors.permanentPincode = "Enter a valid 6-digit pincode";
//       valid = false;
//     }

//     // Validation for file uploads
//     if (!photoFile) {
//       newErrors.photoFile = "Please upload your photo";
//       valid = false;
//     }

//     if (!signatureFile) {
//       newErrors.signatureFile = "Please upload your signature";
//       valid = false;
//     }

//     if (!degreeFile) {
//       newErrors.degreeFile = "Please upload your degree certificate";
//       valid = false;
//     }



//     if (!aadharFile) {
//       newErrors.aadharFile = "Please upload your Aadhar card";
//       valid = false;
//     }

//     if (!identityFile) {
//       newErrors.identityFile = "Please upload your identity proof";
//       valid = false;
//     }

//     if (!dobFile) {
//       newErrors.dobFile = "Please upload your date of birth proof";
//       valid = false;
//     }

//     if (!domicileFile) {
//       newErrors.domicileFile = "Please upload your domicile certificate";
//       valid = false;
//     }

//     ////console.log.log(newErrors);
//     setErrors(newErrors);
//     // return valid;
//     return { valid, errors: newErrors };
//   };

//   const validateDateOfBirth = (dob) => {
//     const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
//     if (dob >= today) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         dateOfBirth: "Date of Birth cannot be today or greater than today.",
//       }));
//     } else {
//       setErrors((prevErrors) => {
//         const { dateOfBirth, ...rest } = prevErrors; // Remove dateOfBirth error
//         return rest;
//       });
//     }
//   };
//   // useEffect(() => {
//   //   setFormData((prevFormData) => ({
//   //     ...prevFormData,
//   //     fullName: `${prevFormData.name.trim()} ${prevFormData.fathersName.trim()} ${prevFormData.lastName.trim()}`.trim(),
//   //     // fullName: `${prevFormData.name.trim() || ''} ${prevFormData.fathersName || ''} ${prevFormData.lastName || ''}`.trim(),
//   //   }));
//   // }, [formData.name, formData.fathersName, formData.lastName]);

//   const handleBlur = (e) => {
//     // Validate on blur for the dateOfBirth input
//     const { name, value } = e.target;

//     // Check if the date is today or in the future
//     const today = new Date();
//     const selectedDate = new Date(value);

//     if (selectedDate > today) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "Date of birth cannot be today or a future date.",
//       }));
//     } else {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         [name]: "",
//       }));
//     }
//   };
//   return (
//     <div
//       className="container1 border border-gray-300"
//       style={{ padding: "20px", marginBottom: "20px" }}
//     >
//       <Form form={form} onFinish={onFinish} layout="vertical">
//         <h2>Basic Information</h2>
//         <Form.Item name="name" label="Name" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item name="callName" label="Call Name" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="registrationNo"
//           label="Registration No."
//           rules={[{ required: true }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item name="sire" label="Sire" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item name="dam" label="Dam" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item name="sex" label="Sex" rules={[{ required: true }]}>
//           <Select>
//             <Option value="male">Male</Option>
//             <Option value="female">Female</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]}>
//           <DatePicker />
//         </Form.Item>
//         <Form.Item name="dod" label="Date of Dead">
//           <DatePicker />
//         </Form.Item>

//         <h2>Details</h2>
//         <Form.Item name="height" label="Height (cm)">
//           <InputNumber min={0} />
//         </Form.Item>
//         <Form.Item name="weight" label="Weight (kg)">
//           <InputNumber min={0} />
//         </Form.Item>

//         <h2>Health</h2>
//         <Form.Item name="elbow" label="Elbow">
//           <Input />
//         </Form.Item>
//         <Form.Item name="cardiacResults" label="Cardiac Results">
//           <Input />
//         </Form.Item>
//         <Form.Item name="eyes" label="Eyes">
//           <Input />
//         </Form.Item>

//         <h2>Documents</h2>
//         <Form.Item name="healthCertificate" label="Health Certificate">
//           <Upload>
//             <Button icon={<UploadOutlined />}>Upload</Button>
//           </Upload>
//         </Form.Item>
//         <Form.Item name="birthCertificate" label="Birth Certificate">
//           <Upload>
//             <Button icon={<UploadOutlined />}>Upload</Button>
//           </Upload>
//         </Form.Item>

//         <h2>Trainings</h2>
//         <Form.Item name="trainerName" label="Trainer Name">
//           <Input />
//         </Form.Item>
//         <Form.Item name="trainingDate" label="Training Date">
//           <DatePicker />
//         </Form.Item>
//         <Form.Item name="duration" label="Duration (Days)">
//           <InputNumber min={1} />
//         </Form.Item>

//         <h2>Shows/Trials</h2>
//         <Form.Item name="showDate" label="Show Date">
//           <DatePicker />
//         </Form.Item>
//         <Form.Item name="showName" label="Show Name">
//           <Input />
//         </Form.Item>
//         <Form.Item name="country" label="Country">
//           <Input />
//         </Form.Item>

//         <h2>Litters</h2>
//         <Form.Item name="litterDate" label="Litter Date">
//           <DatePicker />
//         </Form.Item>
//         <Form.Item name="bornMales" label="Born Males">
//           <InputNumber min={0} />
//         </Form.Item>
//         <Form.Item name="bornFemales" label="Born Females">
//           <InputNumber min={0} />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//       <CommandLoader open={loading} />
//     </div>
//   );
// };

// export default Provisional;