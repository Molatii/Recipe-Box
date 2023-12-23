import { PiBoundingBoxThin } from "react-icons/pi";
import Link from "next/link";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SocialIconProps } from "@/utils/types";

export default function Footer() {
  //socials icon
  const Icon = ({ href, icon, label }: SocialIconProps) => (
    <a href={href} className="text-white hover:text-green-500 mr-2">
      {icon}
      <span className="sr-only">{label}</span>
    </a>
  );

  return (
    <footer className="bg-slate-600 w-full p-4 lg:pl-20 lg:pr-20">
      <div className="mx-auto w-full py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              href="/"
              className="w-full flex flex-row gap-2 self-center text-2xl font-semibold whitespace-nowrap text-white"
            >
              <div className="bg-green-500 text-white font-extrabold p-1 rounded">
                <PiBoundingBoxThin size={30} />
              </div>
              <span className="text-green-500 mt-2">
                <p className="text-primary">Recipe</p>
              </span>
              <p className="text-white mt-2">Box</p>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div id="Marketing-col">
              <h2 className="mb-6 text-sm font-semibold text-green-500 uppercase">
                Marketing
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="/about-us"
                    className="text-white hover:text-green-500"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-green-500"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div id="follow-col">
              <h2 className="mb-6 text-sm font-semibold text-green-500 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/recipebox"
                    className="hover:underline text-white hover:text-green-500"
                  >
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com"
                    className="hover:underline text-white hover:text-green-500"
                  >
                    X Social
                  </Link>
                </li>
              </ul>
            </div>
            <div id="legal-col">
              <h2 className="mb-6 text-sm font-semibold text-green-500 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/privacy" className="text-white hover:text-green-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white hover:text-green-500">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2023 RecipeBox™ . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Icon href="#" icon={<FaLinkedin size={20} />} label="Linkedin" />
            <Icon href="#" icon={<FaSquareXTwitter size={20} />} label="x" />
            <Icon
              href="https://github.com/Molatii/Recipe-Box"
              icon={<FaGithub size={20} />}
              label="GitHub"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
