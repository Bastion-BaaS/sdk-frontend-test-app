import React, { useState } from "react";

const StripeGetBalance = ({ bastion }) => {
  const [ paymentInfo, setPaymentInfo ] = useState({});

  const runFunction = (name, params) => {
    params = {...params, number: params.number.replaceAll('-', '')};
    bastion.ccf.run(name, JSON.stringify(params))
      .then(result => {
        const payload = JSON.parse(result.data.Payload);
        // setResult(payload)
        console.log(payload);
      });
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPaymentInfo(info => ({...info, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    runFunction('chargeWithCard', paymentInfo)
  }

  return (
    <div>
      <p className="text-2xl text-black my-5">Charge a customer:</p>
      <div className="my-2">
        <input
          className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
          type="text" name="number" onChange={handleChange} placeholder="card number"
        />
      </div>
      <div className="my-2">
        <input
          className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
          type="text" name="exp_month" onChange={handleChange} placeholder="expMonth"
        />
      </div>
      <div className="my-2">
        <input
          className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
          type="text" name="exp_year" onChange={handleChange} placeholder="expYear"
        />
      </div>
      <div className="my-2">
        <input
          className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
          type="text" name="cvc" onChange={handleChange} placeholder="cvc"
        />
      </div>
      <div className="my-2">
        <input
          className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
          type="text" name="name" onChange={handleChange} placeholder="name"
        />
      </div>
      <div className="my-2">
        <input
          className='border-blue3 text-black border-2 px-4 py-1 inline-flex rounded-xl'
          type="text" name="amount" onChange={handleChange} placeholder="amount"
        />
      </div>
      <div className='mb-2 flex flex-row items-start'>
        <button
          className='py-1 px-4 my-4 bg-gray hover:bg-blue2 text-white rounded-xl'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default StripeGetBalance;