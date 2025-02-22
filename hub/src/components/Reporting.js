import React, { useState } from "react";
import axios from "axios";
import "./Reporting.css";

const Reporting = () => {
  console.log("Reporting component rendered");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
    incident_type: "",
    date_of_incident: "",
    location_of_incident: "",
    details_of_incident: "",
    preferred_support: "",
    consent_follow_up: "Yes",
    evidence: null,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error & success message when user edits the form
    setError("");
    setSuccess("");
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      evidence: e.target.files[0],
    });

    setError("");
    setSuccess("");
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidPhoneNumber(formData.contact)) {
      setError("Please enter a valid contact number.");
      return;
    } else {
      setError("");
    }

    const data = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        data.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/report/submit",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log(response.data);
      setSuccess("Report submitted successfully! ✅"); // Show success message

      setFormData({
        name: "",
        contact: "",
        email: "",
        location: "",
        incident_type: "",
        date_of_incident: "",
        location_of_incident: "",
        details_of_incident: "",
        preferred_support: "",
        consent_follow_up: "Yes",
        evidence: null,
      });
    } catch (error) {
      console.error("Error submitting the report:", error);
      alert("There was an error submitting the report!");
    }
  };

  return (
    <>
      <p className="introR">
        &nbsp; Do you have any concerns? Sharing is the first step to solving a
        problem. <br />
        &nbsp; Fill in this form to let us know how we can help you better.
      </p>

      <div className="feedback-section">
        <div className="SubmissionForm">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name(It can be a nickname):</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Contact:</label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Incident Type:</label>
              <input
                type="text"
                name="incident_type"
                value={formData.incident_type}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Date of Incident:</label>
              <input
                type="date"
                name="date_of_incident"
                value={formData.date_of_incident}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Location of Incident:</label>
              <input
                type="text"
                name="location_of_incident"
                value={formData.location_of_incident}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Details of Incident:</label>
              <input
               type="text"
                name="details_of_incident"
                value={formData.details_of_incident}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Preferred Support:</label>
              <input
                type="text"
                name="preferred_support"
                value={formData.preferred_support}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Consent to Follow-up:</label>
              <select
                name="consent_follow_up"
                value={formData.consent_follow_up}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label>Evidence:</label>
              <input type="file" name="evidence" onChange={handleFileChange} />
            </div>

            {error && <p className="error">{error}</p>} {/* Show error if any */}
            {success && <p className="success">{success}</p>} {/* Show success */}

            <button type="submit">Submit Report</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reporting;
