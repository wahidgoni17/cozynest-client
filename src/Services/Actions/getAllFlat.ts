"use server";

const getAllFlats = async (searchTerm: string) => {
  const res = await fetch(`http://localhost:4000/api/flats?searchTerm=${searchTerm}`);
  const flatInfo = await res.json();
  return flatInfo;
};

export default getAllFlats;
