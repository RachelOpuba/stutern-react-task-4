import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const CardList = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films`);
        setData(response.data.results);
        console.log(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const limitWords = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength).trim() + "...";
    } else {
      return text;
    }
  };
  return (
    <>
      <div className="card-container">
        {loading && <Loading />}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}

        {data &&
          data.map(function (item) {
            return (
              <div className="card" key={item.episode_id}>
                <h2 className="card-title">{item.title}</h2>
                <p className="date">
                  {new Date(item.release_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <p className="text">{limitWords(item.opening_crawl, 260)}</p>
                <p className="more-info">More Info</p>
              </div>
            );
          })}

        {/* <div className="card">
          <h2 className="card-title">A NEW HOPE</h2>
          <p className="date">May 25, 1977</p>
          <p className="text">
            It is a period of civil war. Rebel spaceships, striking from a
            hidden base, have won their first victory against the evil Galactic
            Empire. During the battle, Rebel spies managed to steal secret plans
            to the Empire's ultimate weapon, the DEATH STAR, ...
          </p>
          <p className="more-info">More Info</p>
        </div>
        <div className="card">
          <h2 className="card-title">A NEW HOPE</h2>
          <p className="date">May 25, 1977</p>
          <p className="text">
            It is a period of civil war. Rebel spaceships, striking from a
            hidden base, have won their first victory against the evil Galactic
            Empire. During the battle, Rebel spies managed to steal secret plans
            to the Empire's ultimate weapon, the DEATH STAR, ...
          </p>
          <p className="more-info">More Info</p>
        </div>  */}
      </div>
    </>
  );
};

export default CardList;
