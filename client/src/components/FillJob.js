import React, { useState } from "react";
import Axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useParams } from 'react-router-dom';

const FillJob = () => {
  const [UserName, setUserName] = useState("");
  const [ContactEmail, setContactEmail] = useState("");
  const [UserGithub, setGitHub] = useState("");
  const [ResumeLink, setResumeLink] = useState(""); // Added state for resume link
  const [Status, setStatus] = useState("");

  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();
  const { id: jobId } = useParams();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Pending");

    const response = await Axios.get(`http://localhost:5000/GetJobById/${jobId}`);

    Axios.post("http://localhost:5000/applyJOB", {
      UserName,
      ContactEmail,
      UserGithub,
      UserEmail: user.email,
      Status: "Pending",
      JobId: jobId,
      AdminEmail: response.data.email,
      Title: response.data.Role,
      Deadline: response.data.Deadline,
      CompanyName: response.data.CompanyName,
    UserResume:  ResumeLink // Added resume link to the post data
    })
      .then(() => {
        alert("Application sent successfully");
        navigate('/');
      })
      .catch(() => { alert("Error posting application") });
  };

  if (isLoading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-semibold">Please Login First</p>
      </div>
    );
  }

  return (
    <div className="bg-[#EEEEEE] min-h-screen bg-cover bg-center">
      <nav className="bg-[#EEEEEE] py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-black font-bold text-2xl">My Application Form</h1>
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        <form
          onSubmit={HandleSubmit}
          className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                className="input-field w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Sahil Bharti"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                value={ContactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="input-field w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="github"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                GitHub Profile
              </label>
              <input
                type="url"
                value={UserGithub}
                onChange={(e) => setGitHub(e.target.value)}
                className="input-field w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="github.com/yourprofile"
                required
              />
            </div>
            <div>
              <label
                htmlFor="resume"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Resume (Drive link)
              </label>
              <input
                type="url"
                id="resume"
                value={ResumeLink} // Controlled input for resume link
                onChange={(e) => setResumeLink(e.target.value)} // Update state on change
                className="input-field w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://drive.google.com/..."
                required
              />
            </div>
            <div className="flex items-start">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-white bg-[#3C5B6F] hover:bg-[#393E46] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FillJob;
