export async function fetchAllData(state) {
    const baseURL = 'https://api.data.gov.in/resource/5c2f62fe-5afa-4119-a499-fec9d604d5bd';
    const apiKey = import.meta.env.VITE_API_KEY; 
    const format = 'json';
    const limit = 1000;
    let offset = 0;
    let allRecords = [];
  
    while (true) {
      const url = `${baseURL}?api-key=${apiKey}&format=${format}&offset=${offset}&limit=${limit}&filters[statename]=${state}`;
      const response = await fetch(url);
      const data = await response.json();
  
      if (!data.records || data.records.length === 0) break;
  
      allRecords.push(...data.records);
      if (data.records.length < limit) break;
      offset += limit;
    }
  
    return allRecords;
  }
  