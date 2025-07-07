import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="sm:w-2/3 p-5 flex flex-col gap-5 divide-y-2 divide-slate-300 mx-auto">
        <div className="flex sm:flex-row justify-between py-5">
          <div>
            <ul className="flex flex-col gap-4 sm:gap-2 sm:text-lg">
              <li>
                <Link href="/" className="text-gray-700  hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700  hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/program"
                  className="text-gray-700  hover:text-gray-900"
                >
                  Our Program
                </Link>
              </li>
              <li>
                <Link
                  href="/legal"
                  className="text-gray-700  hover:text-gray-900"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700  hover:text-gray-900"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-end">
            <ul className="flex flex-col gap-4 sm:gap-2 sm:text-lg">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-700  hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-700  hover:text-gray-900"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-700  hover:text-gray-900"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-center text-gray-500">
          <span className="w-full flex flex-col items-start">
            <p>© {new Date().getFullYear()} Mr. Eko Guidance Learning.</p>
            <p>All rights reserved.</p>
          </span>
          <div className="w-full flex justify-end">
            <Link href={"/"} className="relative w-32 h-32 sm:w-48 sm:h-48 grayscale hover:grayscale-0 duration-200">
              <Image
                src={"/Logo.png"}
                alt="Logo"
                fill
                className="inline-block ml-2 object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
