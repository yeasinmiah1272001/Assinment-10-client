
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Mycard = ({ card }) => {
  const { img, price, band, _id, description } = card;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` https://assinment10-servers-qm7cixbfy-yeasins-projects.vercel.app/my/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const cardElement = document.getElementById(_id);
              if (cardElement) {
                cardElement.remove();
              }
            }

          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl" id={_id}>
      <figure>
        <img className="h-[200px] w-[350px]" src={img} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{band}</h2>
        <p>Price: {price}</p>
        <p>{description}</p>

        <div className="rating rating-md mt-4">
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-7"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>

        <div className="card-actions justify-end">
          <Link to={`/my/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn btn-success">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mycard;
