import Stripe from "./Stripe";

const StripesWrapper = ({ numberOfStripes }) => {
  const generateStripes = () => {
    const stripes = [];
    let stripeWidth = Math.floor(600 / numberOfStripes);
    let height = 50;
    let increastingRate = Math.floor(500 / numberOfStripes);
    for (let i = 0; i < numberOfStripes; i++) {
      stripes.push(
        <Stripe
          key={i}
          i={i}
          height={height + increastingRate * i}
          broderWidth={stripeWidth}
        />
      );
    }
    // shuffle elements
    stripes.sort(() => Math.random() - 0.5);
    return stripes;
  };

  return (
    <div className="stripe-wrapper mx-auto flex flex-row justify-center container w-9/12 overflow-hidden">
      {generateStripes()}
    </div>
  );
};

export default StripesWrapper;
