import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Charactere = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);
  const id = useParams();
  const test = id.charactereId
  

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-eric.herokuapp.com/comics/${test}`
        );
       //console.log(id.charactereId)
        setData(response.data);
       // console.log(data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchdata();
  }, [test]);

  return isloading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="container-character">{data&&data.comics.map((comic, index)=>{
console.log(comic);
return <div className="steve-jobs" key={index}>
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
