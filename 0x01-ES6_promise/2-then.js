export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      const data = {
        status: 200,
        body: 'success',
      };
      resolve(data);
    } else {
      reject(new Error());
    }
    console.log('Got a response from the API');
  });
}
