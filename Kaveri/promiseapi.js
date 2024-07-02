// Array of API URLs
const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3',
    'https://api.example.com/data4',
    'https://api.example.com/data5'
  ];
  
  // Function to fetch data from an API
  function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Assuming the response is JSON
      });
  }
  
  // Array of promises for API calls
  const promises = urls.map(url => fetchData(url));
  
  // Handling multiple promises with Promise.allSettled
  Promise.allSettled(promises)
    .then(results => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          console.log(`Data from URL ${urls[index]}:`, result.value);
        } else {
          console.error(`Error fetching data from URL ${urls[index]}:`, result.reason);
        }
      });
    });
  