import React, { useEffect, useState } from "react";
import icon from "../assets/icon.png";
import arrow from "../assets/Arrows-right-left.png";
import wallet from "../assets/wallet.png";
import wallet1 from "../assets/wallet1.png";
import Token from "../assets/scan-coin.png";
import Frame from "../assets/Frame.png";
import copy from "../assets/copy.png";
import eye from "../assets/eye.png";
import axios from "axios"

const TransactionTable = () => {
  const [transactions ,setTranasactions] = useState([])

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get("http://localhost:3001/transactions/userTransactions");
        setTransactions(response.data);  // Update state with API response data
      } catch (error) {
        console.error("Error fetching transactions", error);
      }
    };
    
    fetchTransactions(); // Call the async function
  }, []);

 
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
              <img src={arrow} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">Type</p>
                
                </th>
                <th className="p-3 relative">
              <img src={wallet} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">From</p>
                
                </th>
                <th className="p-3 relative">
              <img src={wallet1} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">To</p>
                
                </th>
                <th className="p-3 relative">
              <img src={Token} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">Token</p>
                
                </th>
                <th className="p-3 relative">
              <img src={Frame} alt="" className=" w-5 absolute" /> 
              <p className="pl-7">Tnx Fees</p>
                
                </th>
            </tr>
          </thead>
          <tbody>
            {transactions && transactions.map((transaction, index) => (
              <tr key={index} className="border text-gray-900">
                <td className="p-3 border ">{transaction.id}
                  <span className="">
                      <img src={copy} alt="" className="w-5 h-5" />
                  </span>
                </td>
                <td className="p-3 border">{transaction.type}</td>
                <td className="p-3 border">{transaction.from}
                <span className="">
                      <img src={copy} alt="" className="w-5 h-5" />
                  </span>
                </td>
                <td className="p-3 border">{transaction.to}
                <span className="">
                      <img src={copy} alt="" className="w-5 h-5" />
                  </span>
                </td>
                <td className="p-3 border">{transaction.totalTokens}</td>
                <td className="p-3 border ">{transaction.amount}
                  <span className="">
                      <img src={eye} alt="" className="w-5 h-5" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
