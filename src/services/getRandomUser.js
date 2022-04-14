//https://randomuser.me/api/?page=1&results=10

const getRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/?page=1&results=10");
  return await response.json();
};

export default getRandomUser;
