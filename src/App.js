import { useEffect, useState } from "react";
import Header from "./components/Header";
import StripesWrapper from "./components/StripesWrapper";

function App() {
  const INITIAL_RANGE_VALUE = 60;
  const [numberOfStripes, setNumberOfStripes] = useState(INITIAL_RANGE_VALUE);
  const [flip, setFlip] = useState(true);
  const onRangeChange = (value) => {
    const rangeValue = value;
    setNumberOfStripes(rangeValue);
  };

  const ongGenerateNewArrayHandler = () => {
    setFlip(!flip);
  };

  return (
    <div className="App w-full">
      <Header
        onRangeChange={onRangeChange}
        onGenerateNewArray={ongGenerateNewArrayHandler}
      />
      <StripesWrapper numberOfStripes={numberOfStripes} />
    </div>
  );
}

export default App;
