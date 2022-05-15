const Button = ({data, page, setPage, count, limit, setSkip }) => {
  const numberOfPage = Math.ceil(data.count / data.limit);

  return (
    <div className="Button-container">
      <button
        className="button-pagination"
        disabled={page === 1 && true}
        onClick={() => {
          setSkip((previousState) => previousState - data.limit);
          setPage((prevState) => prevState - 1);
        }}
      >
        page precedente
      </button>
      <span className="span-between">
        Page:{page}/{numberOfPage}
      </span>
      <button
        className="button-pagination"
        disabled={page === (numberOfPage) && true}
        onClick={() => {
          setSkip((previousState) => previousState + data.limit);
          setPage((prevState) => prevState + 1);
        }}
      >
        page suivante
      </button>
    </div>
  );
};

export default Button;
