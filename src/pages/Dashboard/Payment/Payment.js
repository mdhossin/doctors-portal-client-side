import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JvwowKC3JWaPkrxsocY4mV0UOYb4E7w6GU4gxNZbHdabF0uCQ801GC6B0cqGfkBbm9Ve2PAVrczTC6MY1VyIweh00Fjcjsyhx"
);

const Payment = () => {
  const { appointmentId } = useParams();

  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);

  return (
    <div>
      <h2>Please pay for : {appointment.serviceName}</h2>
      <h3>Pay amount ${appointment.price}</h3>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckOutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
