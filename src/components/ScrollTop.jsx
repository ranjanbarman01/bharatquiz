import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition z-50"
    >
      <ArrowUp size={22} />
    </button>
  );
}

export default ScrollTop;
