import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customBlue text-gray-200 py-2">
      <div className="max-w-screen-lg mx-auto text-center">
        {/* Branding and Description */}
        <h2 className="text-lg font-semibold">
          Secure Vault - A Full-Stack Password Manager Project
        </h2>
        <p className="text-xs mt-1 flex items-center justify-center space-x-4">
          <span>Built with ❤️ using</span>
          <span>React</span>
          <img
            src="/icons/react.png"
            alt="React logo"
            className="h-6 w-6"
            title="React"
          />
          <span>MongoDB</span>
          <img
            src="/icons/database.png"
            alt="MongoDB logo"
            className="h-6 w-6"
            title="MongoDB"
          />
        </p>
        {/* GitHub Repository Button */}
        <div className="my-2 flex justify-center">        
          <a
            href="https://github.com/nnaqash/Password-Manager"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 rounded-md flex bg-customBlue justify-between items-center"
          >
            <span className="text-gray-200">Source code: </span>
            <img
              src="/icons/github.svg"
              alt="GitHub logo"
              className="invert p-1 w-10"
            />
            <span className="font-semibold px-2 text-gray-200">GitHub</span>
          </a>
        </div>   

        {/* Copyright */}
        <p className="text-xs mt-6">
          &copy; {new Date().getFullYear()} SecureVault. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
