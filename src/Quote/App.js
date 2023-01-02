import { useState, useEffect } from "react";
import "./App.css";
import { getAnimeQuotes } from "./sevices/apiServices";

function Quote() {
  const [quote, setQuote] = useState("");
  const [anime, setAnime] = useState("");
  const [character, setCharacter] = useState("");
  // 'https://animechan.vercel.app/api/random'

  const main = async () => {
    const quote = await getAnimeQuotes();
    console.log(quote);

    setQuote(quote.quote);
    setAnime(quote.anime);
    setCharacter(quote.character);
  };

  useEffect(() => {
    main();
  }, []);

  let fetchNewQuote = async () => {
    main();
  };

  return (
    <div className="App">
      <div className="quote">
        <h1>{anime}</h1>
        <h2> &quot;{quote}&quot;</h2>
        <small>{character}</small>
      </div>
      <br />
      <button className="btn" onClick={fetchNewQuote}>
        Generate New Quote
      </button>
    </div>
  );
}

export { Quote };
