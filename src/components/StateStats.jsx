function StateStats({ selectedState, records }) {
    const uniquePincodes = new Set(records.map((r) => r.pincode)).size;
    const uniqueDistricts = new Set(records.map((r) => r.district)).size;
  
    return (
      <p className="mt-4 text-sm text-[#444] font-mono">
        You selected: <strong>{selectedState}</strong><br />
        Total Unique Pincodes: <strong>{uniquePincodes}</strong><br />
        Number of Districts: <strong>{uniqueDistricts}</strong>
      </p>
    );
  }
  
  export default StateStats;
  