import axios from "axios";

const unsplash = import.meta.env.VITE_UNSPLASH_API_KEY;
const youtube = import.meta.env.VITE_YOUTUBE_API_KEY;
const giphy = import.meta.env.VITE_GIPHY_API_KEY;



export async function fetchPhotos(query, page = 1, per_page = 20) {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        page,
        per_page,
      },
      headers: {
        Authorization: `Client-ID ${unsplash}`,
      },
    });

    return res.data.results.map((item) => ({
      id: item.id,
      type: "photo",
      title: item.alt_description || "Photo",
      thumbnail: item.urls.small,
      src: item.urls.full,
      url: item.links.html,
    }));
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}


export async function fetchVideos(query, maxResults = 20) {
  try {
    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: query,
          type: "video",
          maxResults,
          key: youtube,
        },
      },
    );

    return res.data.items.map((item) => ({
      id: item.id.videoId,
      type: "video",
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      src: `https://www.youtube.com/embed/${item.id.videoId}`,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
    }));
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}


export async function fetchGifs(query, limit = 20, offset = 0) {
  try {
    const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: giphy,
        q: query,
        limit,
        offset,
        rating: "g",
        lang: "en",
      },
    });

    return res.data.data.map((item) => ({
      id: item.id,
      type: "gif",
      title: item.title || "GIF",
      thumbnail: item.images.fixed_width.url,
      src: item.images.original.url,
      url: item.url,
    }));
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return [];
  }
}


export async function fetchStickers(query, limit = 20, offset = 0) {
  try {
    const res = await axios.get("https://api.giphy.com/v1/stickers/search", {
      params: {
        api_key: giphy,
        q: query,
        limit,
        offset,
        rating: "g",
        lang: "en",
      },
    });

    return res.data.data.map((item) => ({
      id: item.id,
      type: "sticker",
      title: item.title || "Sticker",
      thumbnail: item.images.fixed_width.url,
      src: item.images.original.url,
      url: item.url,
    }));
  } catch (error) {
    console.error("Error fetching stickers:", error);
    return [];
  }
}
