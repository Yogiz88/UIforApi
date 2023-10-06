// fetch("http://localhost:4000")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("NETWORK RESPONSE ERROR");
//     }
//   })
//   .then(data => {
//     console.log(data);
//     get(data)
//   })
//   .catch((error) => console.error("FETCH ERROR:", error));
// Asynchronously retrieves a joke and displays it
async function getAndDisplayNewSong() {
  const joke = await retrieveSong();
  displaySong(song);
}

async function retrieveSong() {
  // Send a GET request to the dad joke API. Await the response.
  // Declare a variable to store the HTTP response
  const response = await fetch("http://localhost:4000/songs/", {
    headers: {
      Accept: "application/json",
    },
  });

  // Check if the response failed, and if so log an error and halt the app
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  // return the parsed JSON from the response (which contains the joke object)
  const data = await response.json();
  return data;
}

// Function to update the DOM with the provided joke
function displaySong(song) {
  const songElement = document.getElementByClass("songs");
  songElement.textContent = song.song_name;
}

document.addEventListener("DOMContentLoaded", getAndDisplayNewSong);

// Retrieves the "new joke" button
const newSongButton = document.getElementById("getSongs");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newSongButton.addEventListener("click", getAndDisplayNewSong);
