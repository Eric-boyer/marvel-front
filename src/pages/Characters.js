import { useEffect, useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import Button from "../components/Button";
const Characters = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);
  const [skip,setSkip]= useState(0);
  const [page,setPage]= useState(1);
  

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
      <>
      <Button page={page} setPage={setPage} skip={skip} setSkip={setSkip} count={Characters.count} limit={Characters.limit}/>
    <div className="container-character">
      {data.results.map((character) => {
        return (
          <Link to={`/comics/${character._id}`}>
            <div className="steve-jobs">
              <img
                className="character-image"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt=""
              ></img>
              <h4 className="title">{character.name}</h4>
              <>
              
                <div className="description">{character.description}</div><i className="fa-solid fa-heart"></i>
              </>
            </div>
          </Link>
        );
      })}
    </div>
    </>
  );
};

export default Characters;
