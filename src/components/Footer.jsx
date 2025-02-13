import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">TerraVista</h3>
            <p className="text-muted-foreground text-sm mb-2">
              Streamline your business operations with TerraVista
            </p>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" className="text-[#4267B2] hover:opacity-80 transition-opacity">
                <span className="sr-only">Facebook</span>
                <FaFacebookF size={22} />
              </Link>
              <Link to="https://twitter.com" className="text-[#1DA1F2] hover:opacity-80 transition-opacity">
                <span className="sr-only">Twitter</span>
                <FaTwitter size={22} />
              </Link>
              <Link to="https://instagram.com" className="text-[#E1306C] hover:opacity-80 transition-opacity">
                <span className="sr-only">Instagram</span>
                <FaInstagram size={22} />
              </Link>
              <Link to="https://wa.me/254769635954" className="text-[#25D366] hover:opacity-80 transition-opacity">
                <span className="sr-only">WhatsApp</span>
                <FaWhatsapp size={22} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:info@theband.co.ke" className="text-muted-foreground hover:text-foreground">
                  info@terravista.co.ke
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+254115767696" className="text-muted-foreground hover:text-foreground">
                  + (254) 769635954
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-muted-foreground">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
  