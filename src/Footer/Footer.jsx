import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral glass py-5">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center flex-col md:flex-row text-lg">
                    {/* Left side: Slogan */}
                    <div className="mb-4 md:mb-0 flex-1 text-center md:text-left">
                        <span className="text-black text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl">The ultimate car review listing site</span>
                    </div>

                    {/* Right side: Contact Information */}
                    <div className="flex flex-col items-center md:items-end text-white text-xs sm:text-sm md:text-base space-y-2">
                        <Link href="https://www.instagram.com/sejoqariz/" className="hover:underline">
                            <span><FaInstagram className="inline text-lg md:text-xl"/> Instagram</span>
                        </Link>
                        <Link href="mailto:dummyemail@example.com" className="hover:underline">
                            <span><FaEnvelope className="inline text-lg md:text-xl"/> dummyemail@example.com</span>
                        </Link>
                        <Link href="tel:1234567890" className="hover:underline">
                            <span><FaPhone className="inline text-lg md:text-xl"/> (123) 456-7890</span>
                        </Link>
                    </div>
                </div>

                {/* Thin white line */}
                <hr className="my-4 border-t border-white" />

                {/* Bottom Center: Copyright */}
                <div className="text-center text-xs sm:text-sm md:text-base lg:text-lg">
                    <span className="text-white">&copy; {currentYear}</span>
                </div>
            </div>
        </footer>
    );
}
