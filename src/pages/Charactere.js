import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Charactere = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);
  const id = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics/${id.charactereId}`
        );
       console.log(id.charactereId)
        setData(response.data);
        console.log(data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchdata();
  }, [id.charactereId]);

  return isloading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="container-character">{data&&data.comics.map((comic, index)=>{
console.log(comic);
return <div className="steve-jobs">
            <img className="character-image"
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            ></img>
            <h4 className="title" >{comic.title}</h4>
            <>
              <div className="description">{comic.description}</div>
            </>
          </div>

    })}</div>
  );
};

export default Charactere;
