const Header = () => {
  return (
    <header className="bg-cyan-900">
      <nav className="relative mx-auto flex flex-row flex-wrap items-center justify-center p-4 container w-9/12 text-xl text-sky-50 font-mono">
        <div className="nav-child">Generate a New Array!</div>
        <div className="vl"></div>
        <div className="nav-child flex flex-row flex-wrap items-center justify-between">
          <div>Change array size</div>
          <div>
            <input
              className="align-middle ml-2"
              type="range"
              min="1"
              max="100"
              id="myRange"
            />
          </div>
        </div>
        <div className="vl"></div>
        <div className="nav-child">Merge Sort</div>
        <div className="nav-child">Quick Sort</div>
        <div className="nav-child">Bubble Sort</div>
        <div className="nav-child">
          <button>Sort</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
