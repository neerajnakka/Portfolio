import { motion } from 'framer-motion';
import { ABOUT_TEXT, CONTACT } from '../constants';
import aboutImg from '../src/assets/about.jpg';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className=" my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap justify-center lg:justify-between">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl max-w-full lg:max-w-none"
              src={aboutImg}
              alt="About"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center">
            <p className=" ml-4 my-2 max-w-xl py-6 text-center lg:text-left">
              {ABOUT_TEXT}
            </p>
            <div className="text-center lg:text-left ml-4">
              <h2 className="ml-4 text-2xl font-bold text-neutral-300">
                Contact Details
              </h2>
              <div className="flex flex-col items-center lg:items-start mt-4 text-lg text-neutral-200">
                <div className="flex items-center mb-4 ">
                  <FaMapMarkerAlt className="mr-2 ml-4" />
                  <p>{CONTACT.address}</p>
                </div>
                <div className="flex items-center mb-4">
                  <FaPhoneAlt className="mr-2 ml-4" />
                  <p>{CONTACT.phoneNo}</p>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="mr-2 ml-4" />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="hover:text-purple-700 transition duration-300 underline"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
