export async function fetchSongs(mood) {
  const url = `https://api.deezer.com/search/playlist?q=${mood}`;
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}
