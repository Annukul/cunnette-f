import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const GetUserDetails = () => {
    const [userDetails, setUserDetails] = useState({});

    if (!localStorage.getItem("authToken")) {
        window.location.href = "/login";
    }

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    console.log("Outside");

    useEffect(() => {
        console.log("Inside");
        const fetchUserDetails = async () => {
            const res = await axios.get("/user/getUserDetails/" + id);
            console.log(res.data);
            setUserDetails(res.data);
        }
        fetchUserDetails();
        console.log("Done fetching");
    }, [id]);

    console.log(userDetails);


    return (
        <div>
            Hell
            <h2>College Details</h2>
            <p>{userDetails.collegeDetail.collegeName}</p>
            <p>{userDetails.collegeDetail.collegeBranch}</p>
            <p>{userDetails.collegeDetail.collegeRollNo}</p>
            <p>{userDetails.collegeDetail.courseDuration.from}</p>
            <p>{userDetails.collegeDetail.courseDuration.to}</p>
            <br />

            <p>{userDetails.about}</p>
            {userDetails.skills.map((sk, index) => {
                return (
                    <p>{sk}</p>
                );
            })}
            <p>{userDetails.dob}</p>
            <br />

            <h2>Contact details</h2>
            <p>{userDetails.contact.professionalEmailId}</p>
            <p>{userDetails.contact.phoneNumber}</p>
            <br />

            <h2>Social links</h2>
            <p><a href={userDetails.socialLinks.twitter}>Twitter</a></p>
            <p><a href={userDetails.socialLinks.linkedin}>Linkedin</a></p>
            <br />

            <h2>Address</h2>
            <p>{userDetails.address.currentCity}</p>
            <p>{userDetails.address.currentState}</p>
            <br />

        </div>
    )
}

export default GetUserDetails;
