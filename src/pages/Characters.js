import { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-eric.herokuapp.com/characters"
        );
        //console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchdata();
  }, []);

  return isloading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="container-character">
      {data.results.map((character) => {
        //console.log(character.thumbnail);
        return (
          <div className="steve-jobs">
            
            <img
              className="character-image"
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            ></img>
             <h4 className="title">{character.name}</h4>
            <>
            <div className="description">{character.description}</div>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
