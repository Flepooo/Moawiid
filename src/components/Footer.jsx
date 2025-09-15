// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Company Column */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">About us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Press</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">The Tamara Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Vulnerability disclosure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Sharia Committee</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Consumer Protection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Financial Reports</a></li>
            </ul>
          </div>

          {/* Tamara Products Column */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Tamara Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Pay Later</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Tamara Deals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Your Credit Score</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Store Directory</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Buyer Protection</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Shop Brands</a></li>
            </ul>
          </div>

          {/* Business Column */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Business</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Business Solution</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Tamara Ads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Industries</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Fashion Industry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Electronics Industry</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Education Industry</a></li>
            </ul>
          </div>

          {/* Integration & Tools Column */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Integration & Tools</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Shopify Plugin</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">WooCommerce Plugin</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Magento Plugin</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Saila Plugin</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Merchant Kit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Integration Guide</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Help center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">System Status</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Login</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Business Login</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">User Login</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white text-sm">Follow us</a></li>
            </ul>
          </div>

          {/* Saudi Arabia Column */}
          <div>
            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-4">Saudi Arabia</h3>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full transition-colors">United Arab Emirates</a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full transition-colors">Kuwait</a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full transition-colors">Bahrain</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2023 Tamara. All rights reserved.
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
          
          <div className="flex space-x-2 mt-4 md:mt-0">
            <a href="#" className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-3 py-2 rounded flex items-center transition-colors">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
              </svg>
              App Store
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs px-3 py-2 rounded flex items-center transition-colors">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.781 9.186l-2.043 2.039 2.043 2.041 7.962-4.041L14.39 7.814l-7.962 4.041 7.962 4.041-7.962 4.041L1.61 16.186V7.814L14.39 1.814 22.353 12l-7.962 4.041z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;