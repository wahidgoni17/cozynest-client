"use server";

const getAllFlats = async (searchTerm: string) => {
  const res = await fetch(
    `https://cozynest-server.vercel.app/api/flats?searchTerm=${searchTerm}`,
    {
      cache: "no-store",
    }
  );
  const flatInfo = await res.json();
  return flatInfo;
};

export default getAllFlats;
