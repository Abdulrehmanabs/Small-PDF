import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 xl:px-10">
        <div className="max-w-sm">
          <div className="mb-6 flex h-12 items-center space-x-2">
            <span className="text-2xl font-bold">Giridot</span>
          </div>
          <div className="text-gray-800">
            This Website design & Code was built using our Tools. Treat it as a
            Proof Concept.
            <pre></pre>
            <br />
            Subscribe Now to receive Discount, News, and Updates. We Pinky swear
            to not spam you.
          </div>
        </div>
        {/* grid cols Company */}
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4 h-12 text-xl font-bold sm:text-center">
            Company
          </div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li className="sm:text-center">
                <a className=" hover:underline " href="#">
                  About Us
                </a>
              </li>
              <li className="sm:text-center">
                <a className=" hover:underline " href="#">
                  Contact Us
                </a>
              </li>
              <li className="sm:text-center">
                <a className=" hover:underline " href="#">
                  Newsletter
                </a>
              </li>
              <li className="sm:text-center">
                <a className=" hover:underline " href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* grid cols Products */}
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4 h-12 text-xl font-bold">
            Products
          </div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className=" hover:underline" href="#">
                  Email Builder
                </a>
              </li>
              <li>
                <a className=" hover:underline" href="#">
                  Website Generator
                </a>
              </li>
              <li>
                <a className=" hover:underline" href="#">
                  Bootstrap Builder
                </a>
              </li>
              <li>
                <a className=" hover:underline" href="#">
                  Static Pages
                </a>
              </li>
              <li>
                <a className=" hover:underline" href="#">
                  Help Articles
                </a>
              </li>
              <li>
                <a className=" hover:underline" href="#">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* grid cols Resource */}
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4 h-12 text-xl font-bold">
            Resource
          </div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className=" hover:underline" href="#">
                  No Code Design
                </a>
              </li>
              <li>
                <a className=" hover:underline" href="#">
                  Uptime Monitoring
                </a>
              </li>
              <li>
                <a className=" hover:underline" href="#">
                  Static Website Host
                </a>
              </li>
              <li>
                <a className=" hover:underline" href="#">
                  Email Marketing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* breaker */}
      <div className="bg-gray-100">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div className="order-2">
            Copyright © 2024 Giridot | All Rights Reserved
          </div>
          <div className="order-1 flex gap-6">
            <a href="#Instagram">
              <img
                className="w-8"
                src="/instagram-icon.svg"
                alt="instagram-icon"
              />
            </a>
            <a href="#twitter">
              <img className="w-8" src="/x-icon.svg" alt="x-icon" />
            </a>

            <a href="#Linkedin">
              <img
                className="w-8"
                src="/linkedin-icon.svg"
                alt="linkedin-icon"
              />
            </a>
            <a href="#facebook">
              <img
                className="w-8"
                src="/facebook-icon.svg"
                alt="facebook-icon"
              />
            </a>
            <a href="#youtube">
              <img className="w-8" src="/youtube-icon.svg" alt="youtube-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
