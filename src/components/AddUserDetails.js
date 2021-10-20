import React, { useState, useEffect } from "react";
import axios from "axios";
import decode from "jwt-decode";

const AddUserDetail = ({ history }) => {
  const [user, setUser] = useState("");

  if (!localStorage.getItem("authToken")) {
    window.location.href = "/login";
  }

  const token = localStorage.getItem("authToken");
  const decoded = decode(token);

  const _userId = decoded.id;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("/auth/" + _userId);
      setUser(res.data);
    };
    fetchUser();
  }, [_userId]);

  const [collegeName, setCollegeName] = useState("");
  const [collegeBranch, setCollegeBranch] = useState("");
  const [collegeRollNo, setCollegeRollNo] = useState("");
  const [from, setCollegeFrom] = useState("");
  const [to, setCollegeTo] = useState("");

  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  const [dob, setDob] = useState("");

  const [professionalEmailId, setProEmailId] = useState("");
  const [phoneNumber, setContact] = useState("");

  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const [currentCity, setCurrentCity] = useState("");
  const [currentState, setCurrentState] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const details = {
      _userId,
      collegeDetail: {
        collegeName,
        collegeBranch,
        collegeRollNo,
        courseDuration: {
          from,
          to,
        },
      },
      about,
      skills,
      dob,
      contacts: {
        professionalEmailId,
        phoneNumber,
      },
      socialLinks: {
        twitter,
        linkedin,
      },
      address: {
        currentCity,
        currentState,
      },
    };

    console.log(details);

    try {
      console.log("Almost there");
      await axios.post("/user/addUserDetails", details);
      console.log("success");
      history.push("/getuserdetails/" + _userId);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{ border: "1px solid red", marginBottom: "50px" }}>
          <h3>College Details</h3>
          <input
            type="text"
            name="collageName"
            placeholder="College Name"
            onChange={(e) => setCollegeName(e.target.value)}
          />
          <input
            type="text"
            name="collageBranch"
            placeholder="College Branch"
            onChange={(e) => setCollegeBranch(e.target.value)}
          />
          <input
            type="text"
            name="collageRollNo"
            placeholder="College Roll No."
            onChange={(e) => setCollegeRollNo(e.target.value)}
          />
          <h4>College duration</h4>
          <input
            type="date"
            name="from"
            placeholder="Starting year"
            onChange={(e) => setCollegeFrom(e.target.value)}
          />
          <input
            type="date"
            name="to"
            placeholder="End year"
            onChange={(e) => setCollegeTo(e.target.value)}
          />
        </div>

        <input
          type="text"
          name="about"
          placeholder="About"
          onChange={(e) => setAbout(e.target.value)}
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills: Ex-> Html, Css, Js"
          onChange={(e) => setSkills(e.target.value)}
        />
        <input
          type="date"
          name="dob"
          placeholder="Date of birth"
          onChange={(e) => setDob(e.target.value)}
        />

        <div style={{ border: "1px solid blue", marginBottom: "50px" }}>
          <h3>Contact details</h3>
          <input
            type="text"
            name="proEmailId"
            placeholder="Your professional email id"
            onChange={(e) => setProEmailId(e.target.value)}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact number"
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <div style={{ border: "1px solid green", marginBottom: "50px" }}>
          <h3>Social links</h3>
          <input
            type="text"
            name="twitter"
            placeholder="Twitter profile link"
            onChange={(e) => setTwitter(e.target.value)}
          />
          <input
            type="text"
            name="linkedin"
            placeholder="Linkedin profile link"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>

        <div style={{ border: "1px solid pink", marginBottom: "50px" }}>
          <h3>Address</h3>
          <input
            type="text"
            name="currentCity"
            placeholder="Current city"
            onChange={(e) => setCurrentCity(e.target.value)}
          />
          <input
            type="text"
            name="currentState"
            placeholder="Current stat"
            onChange={(e) => setCurrentState(e.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserDetail;
