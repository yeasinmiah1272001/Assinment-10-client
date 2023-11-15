import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Riview from "../Riview/Riview";

const Home = () => {
    const cards = useLoaderData();
    console.log(cards)
    return (
      <div>
        <div>
          <div>
            <Banner></Banner>
            <div>
              <h1 className="text-center text-4xl font-bold mt-8 text-[#e64a50]">
                Choose
              </h1>
              <h1 className="text-center text-blue-500 text-xl mt-2 font-semibold">
                According to CarTitles.com, a car title, also called a pink
                slip, <br />
                is a document that is issued by the state that acts as a <br />
                certificate of legal ownership. Savings Await!
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {cards.map((cards) => (
                <Card key={cards.id} cards={cards}></Card>
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-center text-4xl font-bold mt-10">
              Testimonial
            </h1>
            <p className="text-center mt-2 text-xl">
              capture positive feedback and can be used to showcase customer
              satisfaction or reviews in
              <br /> various contexts, such as websites, product pages, or
              marketing materials.
            </p>
          
          </div>
          <div></div>
        </div>
        <div>
            <Riview></Riview>
        </div>
      </div>
    );
};

export default Home;