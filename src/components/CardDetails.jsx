import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";

const CardDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/films/${id}`);
        setData(response.data);
        console.log(response.data);

        console.log(response.data);
        const characterData = await Promise.all(
          response.data.characters.map((url) =>
            axios.get(url).then((res) => res.data)
          )
        );
        setCharacters(characterData);
        const planetsData = await Promise.all(
          response.data.planets.map((url) =>
            axios.get(url).then((res) => res.data)
          )
        );
        setPlanets(planetsData);

        const speciesData = await Promise.all(
          response.data.species.map((url) =>
            axios.get(url).then((res) => res.data)
          )
        );
        setSpecies(speciesData);

        const starshipData = await Promise.all(
          response.data.starships.map((url) =>
            axios.get(url).then((res) => res.data)
          )
        );
        setStarships(starshipData);

        const vehiclesData = await Promise.all(
          response.data.vehicles.map((url) =>
            axios.get(url).then((res) => res.data)
          )
        );
        setVehicles(vehiclesData);
        setError(null);
        console.log(response.data);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="">
        {loading ? (
          <Loading />
        ) : (
          <div>
            {error && (
              <div>{`There is a problem fetching More Info - ${error}`}</div>
            )}
            <div className="info-container">
              <div className="holder">
                <Link
                  to="/stutern-react-task-4"
                  style={{ textDecoration: "none" }}
                >
                  <p className="back"> &larr; Back to list</p>
                </Link>
                <div className="info-heading">
                  <h2 className="info-heading-primary">{data.title}</h2>
                  <p className="info-heading-secondary">{data.director}</p>
                  <p className="info-heading-secondary">{data.producer}</p>
                </div>
                <div className="description">
                  <h3 className="description-heading">Description</h3>
                  <p className="description-text">{data.opening_crawl}</p>
                </div>
                <div className="list-container">
                  <h3 className="list-heading">Characters</h3>
                  <ul className="list-ul">
                    {characters.map((character) => (
                      <li key={character.url}>{character.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="list-container">
                  <h3 className="list-heading">Planets</h3>
                  <ul className="list-ul">
                    {planets.map((planets) => (
                      <li key={planets.url}>{planets.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="list-container">
                  <h3 className="list-heading">Species</h3>
                  <ul className="list-ul">
                    {species.map((species) => (
                      <li key={species.url}>{species.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="list-container">
                  <h3 className="list-heading">Starships</h3>
                  <ul className="list-ul">
                    {starships.map((starships) => (
                      <li key={starships.url}>{starships.name}</li>
                    ))}
                  </ul>
                </div>
                <div className="list-container">
                  <h3 className="list-heading">Vehicles</h3>
                  <ul className="list-ul">
                    {vehicles.map((vehicles) => (
                      <li key={vehicles.url}>{vehicles.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDetails;
