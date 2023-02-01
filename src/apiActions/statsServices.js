export const getStats = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.stats;
  } catch (error) {
    console.log(error);
  }
};
