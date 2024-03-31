import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { HiOutlineBars3 } from 'react-icons/hi2';
import { useState } from 'react';

const Navbar = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(!showIcons);
  };

  return (
    <nav className="mb-20 flex flex-col md:flex-row items-center justify-between py-6">
      {/* Navigation menu to the left */}
      <div className="flex items-center">
        <Link to="/" className="mr-6 text-lg font-bold text-neutral-300">
          Home
        </Link>
        <Link to="/about" className="mr-6 text-lg font-bold text-neutral-300">
          About
        </Link>
        <Link
          to="/technologies"
          className="mr-6 text-lg font-bold text-neutral-300"
        >
          Technologies
        </Link>
        <Link
          to="/projects"
          className="mr-6 text-lg font-bold text-neutral-300"
        >
          Projects
        </Link>
        <Link to="/contact" className="text-lg font-bold text-neutral-300">
          Contact
        </Link>
      </div>

      {/* Right icons */}
      <div className="mr-6 flex items-center mt-4 md:mt-0 gap-4 text-2xl">
        <div className="hidden md:flex items-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/neerajchandran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.github.com/neerajnakka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a href="link to Twitter" target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.instagram.com/neerajnakka"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="md:hidden">
          {/* Display this div on small screens */}
          <button onClick={toggleIcons}>
            <HiOutlineBars3 />
          </button>
        </div>
        {showIcons && (
          <div className="md:hidden">
            <a
              href="https://www.linkedin.com/in/neerajchandran"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a href="link to GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a
              href="https://www.github.com/neerajnakka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.instagram.com/neerajnakka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
