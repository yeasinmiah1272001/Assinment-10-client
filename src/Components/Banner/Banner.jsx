
const Banner = () => {
    return (
      <div>
        <div className="carousel w-full lg:h-[600px] md:h-[200px] object-cover rounded-lg mt-5">
          <div
            className="hero object-cover"
            style={{
              backgroundImage: "url(https://i.ibb.co/pP0M6Gm/all.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div>
                <h1 className="lg:text-5xl text-xl font-bold  text-[#ec5b60] ">
                  Automative
                </h1>
                <p className="mt-4 text-xl">
                  Discover the perfect blend of style, performance, and value in
                  our wide selection of quality cars. <br /> Find your dream
                  ride and hit the road with confidence today
                </p>
                <input
                  type="text"
                  placeholder="Search here...."
                  className=" p-3 mt-8 rounded-l   lg:w-72 input-error text-black"
                />
                <button className="bg-[#FF444A] lg:w-28 p-3 rounded-r">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;