function StateDropdown({ stateList, selectedState, onSelect, isOpen, toggleDropdown }) {
    return (
      <div className="relative inline-block text-left">
        <span className="block mb-2 text-[#333] font-mono">Select a state from dropdown:</span>
  
        <button
          onClick={toggleDropdown}
          className="bg-[#8b4513] text-white px-4 py-2 rounded-md hover:bg-[#5c3317] transition font-mono w-48"
        >
          {selectedState || 'Select a State'}
        </button>
  
        {isOpen && (
          <div className="absolute mt-1 w-48 bg-[#fffaf0] rounded-md shadow-lg border border-[#d4af37] z-20">
            {stateList.map((state) => (
              <button
                key={state}
                onClick={() => onSelect(state)}
                className="block w-full text-left px-4 py-2 hover:bg-[#f5deb3] font-mono text-[#222]"
              >
                {state}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  export default StateDropdown;
  