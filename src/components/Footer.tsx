import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--brand-pink)', zIndex: 10 }} className="h-auto p-4 flex flex-col items-center justify-center">
      <p>&copy; {new Date().getFullYear()} Nailed By Mo. All Rights Reserved.</p>
      <div className="flex space-x-20 mt-2">
        <a href="https://www.instagram.com/naildbymo/" target="_blank" rel="noopener noreferrer" className="p-3.5 transition-transform hover:scale-110">
          <FaInstagram size={24} style={{ color: 'black' }} />
        </a>
        <a href="https://www.facebook.com/mb79283" target="_blank" rel="noopener noreferrer" className="p-3.5 transition-transform hover:scale-110">
          <FaFacebook size={24} style={{ color: 'black' }} />
        </a>
        <a href="https://www.tiktok.com/@charmaiinneeee?lang=en" target="_blank" rel="noopener noreferrer" className="p-3.5 transition-transform hover:scale-110">
          <FaTiktok size={24} style={{ color: 'black' }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
