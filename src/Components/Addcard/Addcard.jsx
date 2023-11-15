
import Swal from "sweetalert2";

const Addcard = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const band = e.target.band.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const img = e.target.img.value;

    const myInfo = {
      band,
      price,
      img,
      description,
    };

    console.log(myInfo);

    fetch(" https://assinment10-servers-qm7cixbfy-yeasins-projects.vercel.app/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: "User added successfully",
            footer: '<a href="">Why do I have this issue?</a>',
          });

         
    
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mt-4">
        <h2 className="text-2xl font-semibold mb-4">Band Information Form</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
       
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
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <textarea
              placeholder="description"
              name="description"
              className="textarea textarea-bordered textarea-sm w-full"
            ></textarea>
          </div>

      
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
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addcard;
