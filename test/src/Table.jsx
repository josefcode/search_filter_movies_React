const Table = ({ data }) => {
  return (
    <div className="card-container">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title}/>
  
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
    
   </div>
  );
};

export default Table;