import Link from "next/link";
import Image from "next/image";
import { navItems, legalItems } from "@/data/navigation";

const Footer = ({ currentLanguage = "id" }) => {
  return (
    <footer className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Navigation Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <nav>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.title[currentLanguage]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">Legal</h3>
            <nav>
              <ul className="space-y-3">
                {legalItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.title[currentLanguage]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="text-gray-600 leading-relaxed">
                <p className="font-medium">Visit Us:</p>
                <address className="not-italic mt-1">
                  Jl. Pelajar Pejuang 45 no.23B
                  <br />
                  Lingkar Selatan, Lengkong
                  <br />
                  Kota Bandung, Jawa Barat
                </address>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-gray-600">WhatsApp:</p>
                <div className="space-y-2">
                  <Link
                    href="https://wa.me/+6281235010526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.19-.44-2.27-1.41-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.77.34-.27.27-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3.01.15.2 2.05 3.13 4.97 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33z" />
                    </svg>
                    +62 812-3501-0526
                  </Link>
                  <Link
                    href="https://wa.me/+6287837859720"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.19-.44-2.27-1.41-.84-.75-1.41-1.68-1.58-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.27-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.77.34-.27.27-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3.01.15.2 2.05 3.13 4.97 4.27.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.09 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33z" />
                    </svg>
                    +62 878-3785-9720
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-medium text-gray-600">Email:</p>
                <Link
                  href="mailto:guidancelearningmreko@gmail.com"
                  className="text-yellow-600 hover:text-yellow-500 transition-colors duration-200
                "
                >
                  guidancelearningmreko@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-6 gap-4">
          <div className="flex flex-col items-start text-gray-500 text-sm">
            <span>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-700">
                Guidance Learning Mr.Eko
              </span>
              .
            </span>
            <span>All rights reserved.</span>
          </div>
          <Link
            href="/"
            className="relative w-20 h-20 grayscale hover:grayscale-0 transition duration-200"
          >
            <Image
              src="/Logo.png"
              alt="Logo"
              fill
              className="object-contain"
              sizes="80px"
              priority
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
