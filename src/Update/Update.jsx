import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
  const singleData = useLoaderData();
  console.log(singleData);
  const handleUpdate = (e) => {
    e.preventDefault();
    const band = e.target.band.value;
    const price = e.target.price.value;
    const img = e.target.img.value;
    const description = e.target.description.value;

    const myInfo = {
      band,
      price,
      img,
      description
    };

    console.log(myInfo);

    fetch(` https://assinment10-servers-qm7cixbfy-yeasins-projects.vercel.app/my/${singleData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

         if (data.modifiedCount>0) {
        
           Swal.fire({
             title: "Update Successful",
             text: "Your information has been updated successfully!",
             icon: "success",
           });
         }

          if (data.modifiedCount> 0) {
         
            window.location.href = "/my";
          }


        
      });
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-4">
        <h2 className="text-2xl font-semibold mb-4">
          Updated Information Form
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
      
          <div className="mb-4">
            <label
              htmlFor="band"
              className="block text-sm font-medium text-gray-600"
            >
              Band Name
            </label>
            <select
              className="select select-warning w-full max-w-xs"
              name="band"
              defaultValue={singleData?.band}
            >
              <option value="bmw">bmw</option>
              <option value="honda">honda</option>
              <option value="Toyota">Toyota</option>
              <option value="Tesla">Tesla</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Ford">Ford</option>
             
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              defaultValue={singleData?.price}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              defaultValue={singleData?.description}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

         
          {/* Image Source Link */}
          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-600"
            >
              Image Source Link
            </label>
            <input
              type="text"
              name="img"
              defaultValue={singleData?.img}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
