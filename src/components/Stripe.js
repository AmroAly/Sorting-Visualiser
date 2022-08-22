const Stripe = ({ height, broderWidth }) => (
  <div
    className="stripe sm:m-0"
    style={{ height, borderLeft: `${broderWidth}px solid cadetblue` }}
  ></div>
);

export default Stripe;
