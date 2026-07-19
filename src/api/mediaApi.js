import axios from "axios";

const unsplash = import.meta.env.VITE_UNSPLASH_API_KEY


export async function fetchPhotos(query, page=1, per_page= 20){
   const res = await axios.get("https://api.unsplash.com/search/photos",{
    params:{query, page, per_page},
    headers:{
        Authorization:`Client-ID ${unsplash}`
    }
   })

//    console.log(res.data.results)
return res.data.results;
}



const youtube = import.meta.env.VITE_YOUTUBE_API_KEY;

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
      }
    );

    // console.log(res.data.items);

    return res.data.items;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}



const giphy = import.meta.env.VITE_GIPHY_API_KEY;

// Fetch GIFs
export async function fetchGifs(query, limit = 20, offset = 0) {
  try {
    const res = await axios.get(
      "https://api.giphy.com/v1/gifs/search",
      {
        params: {
          api_key: giphy,
          q: query,
          limit,
          offset,
          rating: "g",
          lang: "en",
        },
      }
    );

    // console.log(res.data.data)
    return res.data.data

    // return res.data.data.map((gif) => ({
    //   id: gif.id,
    //   title: gif.title,
    //   thumbnail: gif.images.fixed_width.url,
    //   url: gif.images.original.url,
    //   type: "gif",
    //   source: "giphy",
    // }));
  } catch (error) {
    console.error("Error fetching GIFs:", error);
    return [];
  }
}



// Fetch Stickers
export async function fetchStickers(query, limit = 20, offset = 0) {
  try {
    const res = await axios.get(
      "https://api.giphy.com/v1/stickers/search",
      {
        params: {
          api_key: giphy,
          q: query,
          limit,
          offset,
          rating: "g",
          lang: "en",
        },
      }
    );

    // console.log(res.data.data)
    return res.data.data

    // return res.data.data.map((sticker) => ({
    //   id: sticker.id,
    //   title: sticker.title,
    //   thumbnail: sticker.images.fixed_width.url,
    //   url: sticker.images.original.url,
    //   type: "sticker",
    //   source: "giphy",
    // }));
  } catch (error) {
    console.error("Error fetching Stickers:", error);
    return [];
  }
}
