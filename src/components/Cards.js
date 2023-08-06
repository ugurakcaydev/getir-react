import React,{useEffect,useState} from "react";
import cardsData from "api/cards.json"

function Cards() {

  const [cards,setCards]=useState([])

  useEffect(()=>{
      setCards(cardsData)
  },[])

  return (
    <div className="grid grid-cols-3 gap-x-4 ">
        {cards.length&&cards.map((card) =>(
          <div key={card.id} className="rounded-lg shadow-md p-14 bg-white flex flex-col items-center justify-center text-center">
            <img className="w-[150px] h-[150px] mb-8" src={card.image} alt=""/>
            <h6 className="text-primary-brand-color font-semibold text-lg ">{card.title}</h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
    );
}

export default Cards;
