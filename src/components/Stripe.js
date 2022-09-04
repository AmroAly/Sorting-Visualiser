const Stripe = ({ height, broderWidth, i }) => (
  <div
    id={`stripe-${i}`}
    className="stripe sm:m-0"
    style={{
      height,
      borderLeft: `${broderWidth}px solid cadetblue`,
      // order: `${i}`,
    }}
  ></div>
);

export default Stripe;
