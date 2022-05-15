const Button = ({ page, setPage, count, limit, setSkip }) => {
  const numberOfPage = count / limit;

  return (
    <div className="Button-container">
      <button
        className="button"
        disabbled={page === 1 && true}
        onClick={() => {
          setSkip((prevState) => prevState - limit);
          setPage((prevState) => prevState - 1);
        }}
      > 
        page suivante{" "}
      </button>
      <span>Page:{page}/{Math.floor(count/limit)}</span>
      <button className="button"
       disabled ={page>Math.floor(numberOfPage)&& true}
       onClick={()=>{
           setSkip((prevState)=>prevState+limit);
           setPage((prevState)=>prevState+1)
       }}
       > page precedente </button>
    </div>
  );
};

export default Button;
