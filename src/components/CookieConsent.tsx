import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-6 left-6 max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <Cookie className="h-6 w-6 text-gold-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Cookie Policy
          </h3>
          <p className="text-xs text-gray-600 mb-3">
            We use cookies to enhance your browsing experience and provide personalized content. By continuing to use our site, you consent to our use of cookies.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={acceptCookies}
              className="bg-gold-600 hover:bg-gold-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
            >
              Accept
            </button>
            <button
              onClick={declineCookies}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-medium transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
        <button
          onClick={declineCookies}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
