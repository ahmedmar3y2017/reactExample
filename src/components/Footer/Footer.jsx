import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-gray-300 mt-10">
      <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm">© 2026 MyApp. All rights reserved.</p>

        <div class="space-x-4 mt-3 md:mt-0">
          <a href="#" class="hover:text-white">
            Privacy
          </a>
          <a href="#" class="hover:text-white">
            Terms
          </a>
          <a href="#" class="hover:text-white">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
