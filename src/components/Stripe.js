const Stripe = ({ height, broderWidth, i }) => {
  return (
    <div
      id={`stripe-${i}`}
      className="stripe"
      style={{
        height,
        borderLeft: `${broderWidth}px solid cadetblue`,
      }}
    ></div>
  );
};
export default Stripe;
