export const getJson = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
