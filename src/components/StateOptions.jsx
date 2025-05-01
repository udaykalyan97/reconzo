function StateOptions({ stateList, onClick }) {
    return (
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {stateList.map((state) => (
          <button
            key={state}
            onClick={() => onClick(state)}
            className="px-4 py-2 bg-[#008080] text-[#fffbe6] rounded-lg hover:bg-[#006666] transition font-mono shadow-md"
          >
            {state}
          </button>
        ))}
      </div>
    );
  }
  
  export default StateOptions;
  