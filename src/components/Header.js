import { useState } from "react";
import sort from "../utilities/algorithms";

const Header = ({ onRangeChange, onGenerateNewArray }) => {
  const INITIAL_RANGE_VALUE = 60;
  const [rangeValue, setRangeValue] = useState(INITIAL_RANGE_VALUE);
  const [disabled, setDisabled] = useState(false);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);

  const onRangeChangeHandler = (e) => {
    setRangeValue(e.target.value);
    onRangeChange(e.target.value);
  };

  const handleSelectAlgorithm = (e) => {
    const sortingAlgorithm = e.target.innerHTML;
    setSelectedAlgorithm(sortingAlgorithm);
  };

  const onClickSortHandler = (e) => {
    if (!selectedAlgorithm) {
      return;
    }

    setDisabled(true);

    sort(selectedAlgorithm).then(() => {
      setDisabled(false);
    });
  };

  const onClickGenerateNewArray = () => {
    onGenerateNewArray();
  };

  return (
    <header className="bg-cyan-900">
      <nav
        className={`relative mx-auto flex flex-row flex-wrap items-center justify-center p-4 container w-full text-l text-sky-50 font-mono ${
          disabled ? "disabled" : ""
        }`}
      >
        <div className="nav-child" onClick={onClickGenerateNewArray}>
          Generate a New Array!
        </div>
        <div className="vl"></div>
        <div className="nav-child flex flex-row flex-wrap items-center justify-between">
          <div>Change array size</div>
          <div>
            <input
              className="align-middle ml-2"
              type="range"
              min="10"
              max="150"
              id="myRange"
              value={rangeValue}
              onChange={onRangeChangeHandler}
            />
          </div>
        </div>
        <div className="vl"></div>
        <div
          className={`nav-child ${
            selectedAlgorithm == "Merge Sort" ? " selected" : ""
          }`}
          onClick={handleSelectAlgorithm}
        >
          Merge Sort
        </div>
        <div
          className={`nav-child ${
            selectedAlgorithm == "Quick Sort" ? " selected" : ""
          }`}
          onClick={handleSelectAlgorithm}
        >
          Quick Sort
        </div>
        <div
          className={`nav-child ${
            selectedAlgorithm == "Bubble Sort" ? " selected" : ""
          }`}
          onClick={handleSelectAlgorithm}
        >
          Bubble Sort
        </div>
        <div className="vl"></div>
        <div className="nav-child relative">
          {selectedAlgorithm && (
            <button className="sort-button" onClick={onClickSortHandler}>
              Sort!
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
