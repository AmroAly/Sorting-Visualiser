import Stripe from "./Stripe";

const StripesWrapper = ({ numberOfStripes }) => {
  const generateStripes = () => {
    const stripes = [];
    let stripeWidth = Math.floor(500 / numberOfStripes);
    for (let i = 0; i < numberOfStripes; i++) {
      let height = Math.floor(Math.random() * (500 - 50) + 50);
      stripes.push(
        <Stripe key={i} height={height} broderWidth={stripeWidth} />
      );
    }
    return stripes;
  };
  return (
    <div className="stripe-wrapper mx-auto flex flex-row justify-between container w-9/12 overflow-hidden">
      {generateStripes()}
    </div>
  );
};

export default StripesWrapper;
