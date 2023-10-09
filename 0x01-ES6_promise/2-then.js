export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    const obj = {
      body: 'success',
      status: 200,
    };
    return obj;
  }, () => new Error()).finally(
    console.log('Got a response from the API'),
  );
}
