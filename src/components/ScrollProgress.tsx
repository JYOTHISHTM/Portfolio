    import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percent = (scrollTop / height) * 100;
      setProgress(percent);
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 h-64 w-2 bg-gray-200 rounded-full">
      <div
        className="bg-black w-full rounded-full transition-all"
        style={{ height: `${progress}%` }}
      />
    </div>
  );
}
