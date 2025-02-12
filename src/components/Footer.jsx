import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Twitter,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  
  export function Footer() {
    return (
      <div className="border-t">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">The Band</h3>
              <p className="text-muted-foreground mb-2">
                Providing a Better E-commerce Experience
              </p>
              <div className="flex space-x-4 mt-5">
                <Link
                  to="https://facebook.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  to="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  to="https://instagram.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  to="https://linkedin.com"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <a
                    href="mailto:info@theband.co.ke"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    info@theband.co.ke
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <a
                    href="tel:+254115767696"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    + (254) 45913429
                  </a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-muted-foreground">
                    123 Tech Street, San Francisco, CA 94105
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  