import { Link } from "react-router-dom";


const Detail = ({ card }) => {
    const { img, title, price, description } = card;
    return (
      <div>
        <div>
          <div className="">
            <div className="carousel h-[80vh] rounded-3xl my-5">
              <div id="slide1" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/kmFBWp5/ty5.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/GvN07xr/fo4.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/VwsXxJ7/bm4.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/RcPrWn1/mb4.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide5" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide5" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/RcPrWn1/mb4.jpg"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide6" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide6" className="carousel-item relative w-full">
                <img
                  src="https://i.ibb.co/8M6wGmk/te4.webp"
                  className="w-full"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-[40%]">
                  <a href="#slide5" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center text-3xl font-bold mb-5 text-red-600">
            <h1>
              <span className="text-amber-500">Many collection of cars in our</span> <br /> company are on
              sale
            </h1>
          </div>
          <div className=" ">
            <div className="card bg-gray-300 mb-10">
              <img
                className="lg:w-[1400px] lg:h-[470px] rounded-lg md:w-[300px] md:h-[150px] object-cover"
                src={img}
                alt=""
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold mt-2">{title}</h1>
                <button className=" rounded font-bold mt-3">{price}</button>
                <h1 className="mt-3">{description}</h1>
                <div className="mt-4">
                  <Link to="/add">
                    <button className="btn btn-success">
                      Add your product
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Detail;