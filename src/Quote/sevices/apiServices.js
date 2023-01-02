import axios from "axios";

const getTimeTable = async () => {
  // const endpoint =
  //   "https://cors-anywhere.herokuapp.com/https://animeschedule.net/api/v3/timetables/sub?tz=Asia/Kolkata&year=2022&week=52";
  const endpoint =
    "https://cors-anywhere.herokuapp.com/https://animechan.vercel.app/api/random";

  const rawdata = await fetch(endpoint);
  // const rawdata = await axios.get(endpoint);

  const data = await rawdata.data;
  return data;
};

const getAnimeQuotes = async () => {
  const endpoint = "https://animechan.vercel.app/api/random";

  // const rawdata = await fetch(endpoint);
  const rawdata = await axios.get(endpoint);

  const data = await rawdata.data;
  return data;
};

export { getTimeTable, getAnimeQuotes };
