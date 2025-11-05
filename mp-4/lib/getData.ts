'use server';
const API_KEY = process.env.API_KEY;

const breeds = [
  "abys","aege","abob","acur","asho","awir","amau","bamb","beng","birm",
  "bslo","bure","buri","emau","lihu","ebur","esho","hbro","hima","char"
];

export default async function getData() {
  
  const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];

  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${randomBreed}`,
    {
      headers: {
        'x-api-key': API_KEY || ''
      }
    }
  );

  const data = await res.json();
  return data;
}