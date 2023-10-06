fetch("http://localhost:4000")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    get(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));