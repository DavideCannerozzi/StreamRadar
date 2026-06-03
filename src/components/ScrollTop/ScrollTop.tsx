import { ChevronUp } from "lucide-react";

export default function ScrollTop() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={backToTop}
      className="fixed bottom-4 right-4 p-2 bg-slate-700 text-white rounded-full shadow-lg"
    >
      <ChevronUp />
    </button>
  );
}
