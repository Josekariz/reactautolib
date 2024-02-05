import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './contact.css'; // Import the CSS file

export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="glass bg-yellow-100 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg dark:bg-opacity-30 moving-card">
                <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
                
                <div className="flex flex-col items-center space-y-6">
                    <a href="https://www.instagram.com/sejoqariz/" className="flex items-center space-x-2 cursor-pointer link-hover">
                        <FaInstagram className="text-3xl" />
                        <span className="text-xl">Instagram</span>
                    </a>

                    <a href="https://www.linkedin.com/in/josephmachariakariuki/" className="flex items-center space-x-2 cursor-pointer link-hover">
                        <FaLinkedin className="text-3xl" />
                        <span className="text-xl">LinkedIn</span>
                    </a>

                    <a href="https://github.com/Josekariz" className="flex items-center space-x-2 cursor-pointer link-hover">
                        <FaGithub className="text-3xl" />
                        <span className="text-xl">GitHub</span>
                    </a>

                    <div className="flex items-center space-x-2 link-hover">
                        <FaEnvelope className="text-3xl" />
                        <span className="text-xl">dummyemail@example.com</span>
                    </div>

                    <div className="flex items-center space-x-2 link-hover">
                        <FaPhone className="text-3xl" />
                        <span className="text-xl">(123) 456-7890</span>
                    </div>

                    <p className="text-center text-xl mt-6">
                        We're always here to help with any inquiries you might have. Feel free to reach out to us through any of the channels listed above!
                    </p>
                </div>
            </div>
        </div>
    );
}
