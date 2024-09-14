import React from "react";
import icon from "../assets/icon.png";

const TransactionTable = () => {
  const transactions = [
    {
      id: "0xa91172edd1dbeac...",
      type: "trade",
      from: "0xc2eB5...f5Dec7ab5",
      to: "0xc2eB5...f5Dec7ab5",
      token: 50,
      fees: 0.00203338,
      description: "Renewable Energy",
    },
    {
      id: "0xa91172edd1d5caa...",
      type: "offset",
      from: "0xc2eB5...f5Dec7ab5",
      to: "0xc2eB5...f5Dec7ab5",
      token: 75,
      fees: 0.00203338,
      description: "Afforestation",
    },
    {
      id: "0xa9117d1dbeac5ca...",
      type: "offset",
      from: "0xc2eB5...f5Dec7ab5",
      to: "0xc2eB5...f5Dec7ab5",
      token: 100,
      fees: 0.00203338,
      description: "Carbon Capture",
    },
    {
        id: "0xa91172edd1dbeac...",
        type: "trade",
        from: "0xc2eB5...f5Dec7ab5",
        to: "0xc2eB5...f5Dec7ab5",
        token: 50,
        fees: 0.00203338,
        description: "Renewable Energy",
      },
      {
        id: "0xa91172edd1dbeac...",
        type: "trade",
        from: "0xc2eB5...f5Dec7ab5",
        to: "0xc2eB5...f5Dec7ab5",
        token: 50,
        fees: 0.00203338,
        description: "Renewable Energy",
      },
  ];

  return (
    <div className="container mx-auto mt-4">
      <div className="overflow-x-auto rounded-2xl">
        <table className="min-w-full text-left text-sm ">
          <thead className="bg-gray-900 text-white  ">
            <tr className="">
              <th className="p-3 relative">
                <img src={icon} alt="" className=" w-5 absolute" /> 
                <p className="pl-7">TransactionID</p>
                </th>
              <th className="p-3 relative">
              <img src={icon} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">Type</p>
                
                </th>
              <th className="p-3">From</th>
              <th className="p-3">To</th>
              <th className="p-3">Token</th>
              <th className="p-3">Tnx ;
                Fees</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border">
                <td className="p-3 border">{transaction.id}</td>
                <td className="p-3 border">{transaction.type}</td>
                <td className="p-3 border">{transaction.from}</td>
                <td className="p-3 border">{transaction.to}</td>
                <td className="p-3 border">{transaction.token}</td>
                <td className="p-3 border">{transaction.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
