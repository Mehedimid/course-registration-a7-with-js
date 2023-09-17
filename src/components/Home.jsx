import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1 className="text-4xl text-center my-6 font-semibold">
        Course Registration
      </h1>
      <div className="max-w-6xl mx-auto flex gap-5">
        {/* card single */}
        <div className="border w-[75%] grid-cols-3 grid gap-5">
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
                  <button className="btn btn-error mb-3">Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* cart here  */}
        <div className="border">
          <h1 className="5xl"> hello there</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
