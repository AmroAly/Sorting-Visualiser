const Stripe = ({ height, broderWidth }) => (
  <div
    className="stripe"
    style={{ height, borderLeft: `${broderWidth} solid cadetblue` }}
  ></div>
);

export default Stripe;
