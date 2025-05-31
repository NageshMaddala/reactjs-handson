import axios from "axios";

const getRandomUser = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1", {
    headers: {},
    params: {
      size: 1,
    },
  });
  return response;
};

export { getRandomUser };