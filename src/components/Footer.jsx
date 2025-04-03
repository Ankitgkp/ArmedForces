
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2B2E31] text-[#D7D2CB] py-8 px-10 mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-lg font-semibold">Indian Army</h3>
          <p className="text-sm text-gray-400">Seva Paramo Dharma</p>
        </div>


        <div className="flex flex-col items-center md:items-end">
          <p className="text-sm text-gray-400 mb-2">Follow us on:</p>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/Indianarmy.adgpi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-[#9D2444] transition duration-300"
            >
              <FaFacebookF size={20} />
              <span className="text-sm">Facebook</span>
            </a>
            <a
              href="https://twitter.com/adgpi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-[#9D2444] transition duration-300"
            >
              <FaTwitter size={20} />
              <span className="text-sm">Twitter</span>
            </a>
            <a
              href="https://www.instagram.com/indianarmy.adgpi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-[#9D2444] transition duration-300"
            >
              <FaInstagram size={20} />
              <span className="text-sm">Instagram</span>
            </a>
            <a
              href="https://www.youtube.com/@ADGPIIndianArmy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-[#9D2444] transition duration-300"
            >
              <FaYoutube size={20} />
              <span className="text-sm">YouTube</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 my-6 mx-16"></div>

      <div className="text-center">
        <a
          href="https://www.indianarmy.nic.in/news/bulletins/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9D2444] text-sm font-semibold hover:underline"
        >
          Indian Army Newsletter - Stay Updated
        </a>
      </div>


      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} Indian Army. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
