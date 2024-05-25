"use server";

const getAllFlats = async () => {
  const res = await fetch(`http://localhost:4000/api/flats/`);
  const flatInfo = await res.json();
  return flatInfo;
};

export default getAllFlats;
