import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function SingleBeer() {
  const navigate = useNavigate();
  const paramsId = useParams();
  const { id } = paramsId;

  const [allBeers, setAllBeers] = useState(null);
  const [isFetch, setFetch] = useState(true);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setAllBeers(response.data);
      setFetch(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetch === true) {
    return <h3>...Espera mi pana estamos trabajando</h3>;
  }

  return (
    <div>
        <Link to="/">Home</Link>

      <div>
        <div>
          <img src={allBeers.image_url} alt="beer" width="60rem" />
        </div>
        <div>
          <h1>{allBeers.name} </h1>
          <p>{allBeers.tagline} </p>
          <p>{allBeers.first_brewed} </p>
          <p>{allBeers.attenuation_level} </p>
          <p>{allBeers.description} </p>
          <p>Created by: {allBeers.contributed_by} </p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer;