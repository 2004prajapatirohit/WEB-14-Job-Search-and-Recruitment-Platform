import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center "><div class="flex items-center justify-center w-full h-[100vh] text-gray-900 ">

      
<div class="flex items-center justify-center w-full h-[100vh] text-gray-900 transform scale-50 mb-40">
  <div>
    <h1 class="text-xl md:text-7xl font-bold flex items-center">L
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="animate-spin" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z">
        </path>
      </svg> ading . . .
    </h1>
  </div>
</div>


  </div></div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-semibold">Please Login First</p>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="container mx-auto px-4 mt-16">
        <div className="flex justify-center">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center text-center bg-gradient-to-r from-indigo-100 to-white p-8 rounded-lg shadow-lg">
              <img
                className="border-4 border-gray-300 rounded-full shadow-lg h-48 w-48"
                src={user.picture} alt={user.name}
              />
              <h1 className="text-3xl text-blue-600 font-bold mt-4">{user.name}</h1>
              <h2 className="text-xl text-gray-700 mt-2">{user.email}</h2>
              <ul className="flex flex-row mt-4 space-x-4">
                <li>
                  <a href="#" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                    <svg
                      className="h-8 text-gray-700 hover:text-indigo-600 transition-transform transform hover:scale-110"
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>GitHub</title>
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                    <svg
                      className="h-8 text-gray-700 hover:text-indigo-600 transition-transform transform hover:scale-110"
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <svg
                      className="h-8 text-gray-700 hover:text-blue-600 transition-transform transform hover:scale-110"
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitter</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" aria-label="Email" rel="noopener noreferrer">
                    <svg
                      className="h-8 text-gray-700 hover:text-indigo-600 transition-transform transform hover:scale-110"
                      fill="currentColor"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Mail.Ru</title>
                      <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.734-2.091L12 15.537 5.266 19.91C6.789 21.047 9.346 22 12 22c6.617 0 12-5.383 12-12S18.617 0 12 0" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Profile;
