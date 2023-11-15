import { Link } from "react-router-dom";
const Card = ({ cards }) => {
    const { id, img, price, title, description } = cards;
    return (
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl h-[250px]" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
          {description.length > 20 ? (
            <p className="mt-2">
              {description.slice(0, 95)}{" "}
              <Link className="text-blue-700 underline">Read More...</Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
          <div className="card-actions">
            <Link to={`/cards/${id}`}>
              <button className=" border btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Card;