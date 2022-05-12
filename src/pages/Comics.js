import { useEffect, useState } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://marvel-backend-eric.herokuapp.com/comics"
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
    <div>
      {data.results.map((char) => {
       
        return (
          <div >
            
            <img
              
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              alt=""
            ></img>
             <h4 className="title">{char.title}</h4>
            <>
            <div className="description">{char.description}</div>
            </>
          </div>
        );
      })}
    </div>
  );
};


export default Comics;