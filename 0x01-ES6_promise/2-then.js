export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      const data = {
        status: 200,
        body: 'success',
      };
      console.log('Got a response from the API');
      resolve(data);
    } else {
      reject(new Error());
    }
  });
}
