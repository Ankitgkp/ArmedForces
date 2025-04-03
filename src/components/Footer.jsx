import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#2B2E31] text-[#D7D2CB] py-6 px-8 mt-10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Indian Army</h3>
          <p className="text-sm text-gray-400">Seva Paramo Dharma</p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/Indianarmy.adgpi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#9D2444] transition duration-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com/adgpi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#9D2444] transition duration-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/indianarmy.adgpi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#9D2444] transition duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.youtube.com/@ADGPIIndianArmy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#9D2444] transition duration-300"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-4">
        © {new Date().getFullYear()} Indian Army. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
