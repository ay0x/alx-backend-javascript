export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
  // Simulating an asynchronous API call
    setTimeout(() => {
      const success = true;
      if (success) {
        const data = 'Response from API';
        resolve(data);
      } else {
        reject(new Error('Failed to fetch data from API'));
      }
    }, 2000); // Simulating a delay of 2 seconds
  });
}
