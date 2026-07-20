import { useEffect } from "react";

const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 flex justify-center items-center backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-[90vw] max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-black"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 h-10 w-10 rounded-full bg-black/60 text-white text-xl hover:bg-red-600 transition"
        >
          ✕
        </button>

        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default VideoModal;