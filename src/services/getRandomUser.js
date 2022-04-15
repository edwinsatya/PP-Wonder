//https://randomuser.me/api/?page=1&results=10

const getRandomUser = async (page, gender, keyword) => {
  const query = `page=${page}&pageSize=10
  ${gender === "all" ? "" : `&gender=${gender}`}&results=10
  ${keyword ? `&keyword=${keyword}` : ""}
  `;
  console.log(query, "query");
  const response = await fetch(`https://randomuser.me/api/?${query}`);
  return response.json();
};

export default getRandomUser;
