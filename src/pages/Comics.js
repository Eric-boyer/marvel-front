import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/comics"
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
    <div className= "container-character">
      {data.results.map((comic) => {
        return (
          <div className="steve-jobs">
            <img className="character-image"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            ></img>
            <h4 className="title" >{comic.title}</h4>
            <>
              <div className="description">{comic.description}</div>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
