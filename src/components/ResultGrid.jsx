import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchPhotos,
  fetchVideos,
  fetchGifs,
  fetchStickers,
} from "../api/mediaApi";

import {
  setLoading,
  setErrors,
  setResults,
} from "../redux/Features/searchSlice";

import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();

  const { query, activeTab, result, loading, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    if (!query) return;

    const fetchers = {
      photos: fetchPhotos,
      videos: fetchVideos,
      gif: fetchGifs,
      stickers: fetchStickers,
    };

    const getData = async () => {
      try {
        dispatch(setLoading());

        const data = await fetchers[activeTab](query);
        console.log(data);

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>{error}</h1>;

  //   alternate option for fetcher object
  // let data = [];

  // if (activeTab === "photos") {
  //     data = await fetchPhotos(query);
  // }

  // if (activeTab === "videos") {
  //     data = await fetchVideos(query);
  // }

  // if (activeTab === "gif") {
  //     data = await fetchGifs(query);
  // }

  // if (activeTab === "stickers") {
  //     data = await fetchStickers(query);
  // }

  // dispatch(setResults(data));

  return (
    <div className="flex flex-wrap justify-between gap-6 overflow-auto px-10">
      {result.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
