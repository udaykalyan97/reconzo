import { useEffect, useState } from 'react';
import { stateList } from './utils/stateList.js';
import { fetchAllData } from './utils/fetchData.js';
import StateStats from './components/StateStats.jsx';
import StateDropdown from './components/StateDropdown.jsx';
import StateOptions from './components/StateOptions.jsx';

function App() {
  const [selectedState, setSelectedState] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [records, setRecords] = useState([]);

  const handleSelect = (option) => {
    setSelectedState(option);
    setIsOpen(false);
  };

  const handleClick = (option) => {
    setSelectedState(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedState) {
      fetchAllData(selectedState)
        .then(data => {
          console.log('Fetched records:', data);
          setRecords(data);
        })
        .catch(err => {
          console.error('Fetch error:', err);
        });
    }
  }, [selectedState]);

  return (
    <div className="flex items-center justify-center p-6 bg-[#fdf6e3] min-h-screen">
      <div className="bg-[#fff8e7] p-6 rounded-lg shadow-md w-full max-w-4xl text-center border-2 border-[#d4af37]">
        <h2 className="text-2xl font-bold mb-4 text-[#2e2e2e] font-mono">Select a State</h2>
        <StateOptions stateList={stateList} onClick={handleClick} />

        <div className="flex items-center justify-center my-6">
          <div className="flex-grow border-t border-[#c4b998]"></div>
          <span className="mx-4 text-[#555] font-mono">or</span>
          <div className="flex-grow border-t border-[#c4b998]"></div>
        </div>

        <StateDropdown
          stateList={stateList}
          selectedState={selectedState}
          onSelect={handleSelect}
          isOpen={isOpen}
          toggleDropdown={() => setIsOpen((prev) => !prev)}
        />

        {selectedState && (<StateStats selectedState={selectedState} records={records} />)}

      </div>
    </div>
  );
}

export default App;
