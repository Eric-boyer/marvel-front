import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import insider from "../img/insider.webp"
import MarvelStudios from "../img/MarvelStudios.jpeg"
const Characters = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `https://marvel-backend-eric.herokuapp.com/characters?name=${name}&skip=${skip}`
          //`http://localhost:4000/characters?name=${name}&skip=${skip}`
        );
        //console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchdata();
  }, [name, skip]);

  return isloading === true ? (
    <div>En cours de chargement...</div>
  ) : (
    <>
    <div className="div-reward">
        <img className="insider-img" src={insider} alt=""></img>
        <div className="div-reward-inside">
            <p className="writing">REWARD YOUR MARVEL FANDOM WITH</p>
        </div>
    </div>
    <strong className="inside-picture">
        MARVEL CHARACTERS
    </strong>
    <div className="Marvel-picture-container">
    <img className="picture-marvel" src={MarvelStudios} alt="">
        
    </img>
    
    </div>
      <input
        className="barre-search"
        placeholder="SEARCH"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>

      <Button
        data={data}
        page={page}
        setPage={setPage}
        skip={skip}
        setSkip={setSkip}
        count={Characters.count}
        limit={Characters.limit}
      />
      <div className="container-character">
        {data.results.map((character, index) => {
          return (
            <Link to={`/comics/${character._id}`} key={index}>
              <div className="steve-jobs">
                <img
                  className="character-image"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt=""
                ></img>
                <h4 className="title">{character.name}</h4>
                <>
                  <div className="description">{character.description}</div>
                  <i className="fa-solid fa-heart"></i>
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
