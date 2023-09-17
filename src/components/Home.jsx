import { useState } from "react";
import { useEffect } from "react";
import Cart from "./Cart";

function Home() {
  const [data, setData] = useState([]);
  const [selectedCard, setCard] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remaining, setRemain] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleSelectCourse = (card) => {
    const isSelected = selectedCard.find((item) => item.id == card.id);
    let count = card.credit;
    if (isSelected) {
      return alert("hey you can not add the same course");
    } else {
      selectedCard.forEach((item) => {
        count = count + item.credit;
      });
      const totalRemaining = 20 - count;
      if (count > 20){
        return alert('credit is more than 20')
      }
      else{
        setCard([...selectedCard, card]);
        setRemain(totalRemaining);
        setCredit(count);
      }

    }
  };

  return (
    <>
      <h1 className="text-4xl text-center my-6 font-semibold">
        Course Registration
      </h1>
      <div className="max-w-6xl mx-auto flex gap-5 mb-12">
        {/* card single */}
        <div className=" w-[75%] grid-cols-3 grid gap-5">
          {data.map((card) => (
            <div className="card w-full  text-primary-content  shadow-xl border-red-300">
              <div className="card space-y-3">
                <img src={card.image} alt="" />
                <h2 className="text-lg text-center font-semibold text-black">
                  {card.title}
                </h2>
                <p className="mx-2 text-black text-sm text-gray-700 text-center">
                  {card.description}
                </p>
                <div className="flex justify-between mx-4 text-black text-gray-600">
                  <p>$ Price: {card.price}</p>
                  <p>Credit: {card.credit} hr</p>
                </div>
                <div className="card-actions justify-center">
                  <button
                    onClick={() => handleSelectCourse(card)}
                    className="btn btn-error mb-3">
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cart here  */}
        <div className="shadow-xl h-fit  rounded-xl p-2 w-[25%] bg-orange-50">
          <div className="ml-3">
            <h1 className="text-lg font-medium text-blue-800">
              Credit Hour Remaining {remaining} hr
            </h1>
            <hr className="my-3 border-b-1 border-gray-500" />
            <h2 className="text-lg font-semibold text-gray-800">Course Name</h2>
            {selectedCard.map((selectedCard) => (
              <Cart selectedCard={selectedCard} key={selectedCard.id}></Cart>
            ))}
            <hr className="my-3 border-b-1 border-gray-500" />
            <h2 className="text-lg font-medium text-gray-700">
              Total Credit hour: {credit}{" "}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
