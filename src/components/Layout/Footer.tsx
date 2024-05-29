import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkGray py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">WeightCoachAI</h2>
            <p className='text-gray-600'>Helping you achieve your health goals with AI and expert guidance.</p>
            <p className="mt-4 text-gray-600">&copy; {new Date().getFullYear()} WeightCoachAI. All rights reserved.</p>
            <button className="bg-ctaBlue text-white py-2 px-4 rounded-md mt-4">Get WeightCoachAI</button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2 mx-0">
              <li><ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer text-gray-500 hover:text-ctaBlue transition duration-300">Home</ScrollLink></li>
              <li><ScrollLink to="features" smooth={true} duration={500} className="cursor-pointer text-gray-500 hover:text-ctaBlue transition duration-300">Features</ScrollLink></li>
              <li><ScrollLink to="pricing" smooth={true} duration={500} className="cursor-pointer text-gray-500 hover:text-ctaBlue transition duration-300">Pricing</ScrollLink></li>
              <li><ScrollLink to="faq" smooth={true} duration={500} className="cursor-pointer text-gray-500 hover:text-ctaBlue transition duration-300">FAQ</ScrollLink></li>
              <li><ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer text-gray-500 hover:text-ctaBlue transition duration-300">Contact</ScrollLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2 mx-0">
              <li>
                <Link href="/TOS" legacyBehavior>
                  <a className="text-gray-500 hover:text-ctaBlue transition duration-300">Terms of Service</a>
                </Link>
              </li>
              <li>
                <Link href="/Privacy" legacyBehavior>
                  <a className="text-gray-500 hover:text-ctaBlue transition duration-300">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/License" legacyBehavior>
                  <a className="text-gray-500 hover:text-ctaBlue transition duration-300">Licenses</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">More</h3>
            <ul className="space-y-2 mx-0">
              <li><a href="#" className="text-gray-500 hover:text-ctaBlue transition duration-300">Newsletter</a></li>
              <li><a href="#" className="text-gray-500 hover:text-ctaBlue transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-ctaBlue transition duration-300">Affiliates</a></li>
              <li><a href="#" className="text-gray-500 hover:text-ctaBlue transition duration-300">Support</a></li>
              <li><a href="#" className="text-gray-500 hover:text-ctaBlue transition duration-300">Join Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
