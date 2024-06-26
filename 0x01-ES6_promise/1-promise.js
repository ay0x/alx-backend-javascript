export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const data = {
        status: 200,
        body: 'Success',
      };
      resolve(data);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
