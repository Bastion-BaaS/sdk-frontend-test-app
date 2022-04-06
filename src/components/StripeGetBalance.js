import React, { useState } from "react";

const StripeGetBalance = ({ bastion }) => {
  const [ balance, setBalance ] = useState('');

  const runFunction = (name, params) => {
    if (params === '') {params = '{}'}
    bastion.ccf.run(name, params)
      .then(result => {
        const payload = JSON.parse(result.data.Payload);
        setBalance(payload.body.pending[0].amount)
        console.log(payload.body.pending[0]);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    runFunction('getStripeBalance', '{}')
  }

  return (
    <div>
      <button
        className='py-1 px-4 my-4 bg-gray hover:bg-blue2 text-white rounded-xl'
        onClick={handleSubmit}
      >
        Display account balance
      </button>
      {balance === '' ? null :
        <p>Balance: ${(Math.round(balance * 100) / 10000).toFixed(2)}</p>
      }
    </div>
  )
}

export default StripeGetBalance;