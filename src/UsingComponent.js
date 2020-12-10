import React from 'react';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
 
export default function App() {
   const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    // public_key: "FLWPUBK_TEST-b4d7561fbb92590c4bdc772dd412c875-X",
    tx_ref: Date.now(),
    amount: 20,
    // currency: 'ZA',
    currency: 'ZMW',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'Pay Joel',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    
    },
  };
 
  const fwConfig = {
    ...config,
    text: 'Pay Now',
    callback: (response) => {
      console.log("Joel is here ooooooo")
      console.log("Joel is here ooooooo")
      console.log(response);
      // closePaymentModal()
    },
    onClose: () => {},
  };
 
  return (
    <div className="App">
     <h1>Hello Test user</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}