import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Detail from "../Detail/Detail";

const Details = () => {
    const [card, setCard] = useState({})
    const {id} = useParams();
    // console.log(id);
    const cards = useLoaderData();
    console.log(cards);
    useEffect(() => {
    const findcards = cards.find(card => card.id == id)
    console.log(findcards)
    setCard(findcards)
    }, [id, cards])
    
    return (
        <div className="">
            <div className="mt-10 ">
            <Detail card={card}></Detail>
            </div>
        </div>
    );
};

export default Details;