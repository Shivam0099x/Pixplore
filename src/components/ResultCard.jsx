import { FaPlay, FaDownload } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/Features/collectionSlice";

const ResultCard = ({ item, onPlay }) => {
  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className="group relative w-[320px] h-80 rounded-2xl overflow-hidden bg-zinc-900 shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* MEDIA */}

      {item.type === "video" ? (
        <img
          src={item.thumbnail}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      ) : (
        <img
          src={item.src}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      )}

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80" />

      {/* Play Button */}

      {item.type === "video" && (
        <button
          onClick={() => onPlay(item)}
          className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white/20 backdrop-blur-md text-white text-3xl flex items-center justify-center hover:scale-110 transition"
        >
          <FaPlay />
        </button>
      )}

      {/* Bottom */}

      <div className="absolute bottom-0 w-full p-4 text-white">
        <h2 className="font-semibold text-lg line-clamp-2 mb-3">
          {item.title}
        </h2>

        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              addToCollection(item);
            }}
            className="
            flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500  px-4 py-2 rounded-lg transition"
          >
            <BsBookmarkPlus />
            Save
          </button>

          {item.type !== "video" ? (
            <a
              href={item.src}
              download
              target="_blank"
              className="
              flex
              items-center
              gap-2
              bg-white/20
              backdrop-blur-md
              px-4
              py-2
              rounded-lg
              hover:bg-white/30
              transition"
            >
              <FaDownload />
              Download
            </a>
          ) : (
            <button
              onClick={() => onPlay(item)}
              className="
              flex
              items-center
              gap-2
              bg-red-600
              hover:bg-red-500
              px-4
              py-2
              rounded-lg"
            >
              <FaPlay />
              Play
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
