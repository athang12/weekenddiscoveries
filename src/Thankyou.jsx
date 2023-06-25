import { motion as m } from "framer-motion";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { BrowserRouter as Router,useNavigate, Switch, Route, Redirect, Link , useLocation} from 'react-router-dom';
import Lottie from 'lottie-react'
import thank from './media/thank.json'


export default function Thankyou() {

  const location=useLocation()
  const email=location.state.id


  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };
//   const router = useRouter();

  useEffect(() => {
    stopConfetti();
  }, []);
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" h-screen items-center flex justify-center relative"
    >
    <div>
      
    </div>
      <div className="bg-[url('./1.jpeg')] w-screen h-screen font-latoRegular text-gray-700 p-16 flex flex-row ">
      <div>
      <Lottie animationData={thank} className="mt-32 ml-44 w-72 h-72"/>
      </div>
      <div className="mt-28 text-[#00df9a]">
        <h1 className="text-6xl text-center pt-24 pb-4 font-bold">
          THANK YOU !!✨
        </h1>
        <p className="text-4xl  text-center px-28">
          We are waiting for the weekend
        </p>
        </div>
      </div>
      <Confetti gravity={0.025} numberOfPieces={pieces} />
    </m.main>
  );
}