import { useEffect, useState } from "react";
import axios from "axios";

import Button from "../components/Button";
import Marvel1 from "../img/Marvel1.jpeg"

const Comics = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);
  const [skip,setSkip]= useState(0);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics?title=${title}&skip=${skip}`
        );
        //console.log(response.data);
        setData(response.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchdata();
  }, [title,skip]);

  return isloading === true ? (
    <div > <p className="charging">En cours de chargement...</p></div>
  ) : (
    <>
 <strong className="inside-picture">
        MARVEL COMICS
    </strong>
    <div className="Marvel-picture-container">
    <img className="picture-marvel" src={Marvel1}>
        
    </img>
    </div>
    <input
    className="barre-search"
    placeholder="SEARCH"
    onChange={(event) => {
      setTitle(event.target.value);
    }}
  ></input>
  <Button
        data={data}
        page={page}
        setPage={setPage}
        skip={skip}
        setSkip={setSkip}
        count={Comics.count}
        limit={Comics.limit}
      />
    <div className= "container-character">
      {data.results.map((comic,index) => {
        return (
          <div className="steve-jobs" key={index}>
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
    </>
  );
};

export default Comics;
