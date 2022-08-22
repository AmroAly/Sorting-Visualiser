import Stripe from "./Stripe";

const StripesWrapper = () => (
  <div className="stripe-wrapper mx-auto flex flex-row items-center justify-between container w-9/12">
    <Stripe height={"50px"} broderWidth={"20px"} />
  </div>
);

export default StripesWrapper;
