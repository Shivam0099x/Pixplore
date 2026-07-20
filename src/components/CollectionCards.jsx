/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaPlay } from "react-icons/fa";

import {
  removeCollection,
  removeToast,
} from "../redux/Features/collectionSlice";

import VideoModal from "./VideoModal";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const [selectedVideo, setSelectedVideo] = useState(null);

  const removeFromCollection = () => {
    dispatch(removeCollection(item.id));
    dispatch(removeToast());
  };

  return (
    <>
      <div className="group relative w-[18vw] h-80 rounded-2xl overflow-hidden bg-zinc-900 shadow-lg hover:shadow-2xl transition">

        {/* PHOTO / GIF / STICKER */}

        {item.type !== "video" ? (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="block h-full"
          >
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-500"
            />
          </a>
        ) : (
          <>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="h-full w-full object-cover object-center group-hover:scale-110 transition duration-500"
            />

            <button
              onClick={() => setSelectedVideo(item)}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl hover:scale-110 transition"
            >
              <FaPlay />
            </button>
          </>
        )}

        {/* Gradient */}

        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-transparent" />

        {/* Bottom */}

        <div className="absolute bottom-0 w-full px-4 py-4 text-white flex justify-between items-end gap-3">

          <h2 className="text-lg font-semibold h-14 overflow-hidden">
            {item.title}
          </h2>

          <button
            onClick={removeFromCollection}
            className="bg-red-600 hover:bg-red-500 active:scale-95 transition rounded-lg px-4 py-2 font-medium"
          >
            Remove
          </button>

        </div>
      </div>

      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
};

export default CollectionCard;