function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Asynchronous code goes here
    // For example, making an API request using fetch()
    fetch('https://api.example.com')
      .then(response => {
        // Handle the response
        resolve(response);
      })
      .catch(error => {
        // Handle the error
        reject(error);
      });
  });
}
