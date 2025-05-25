import axios from "axios";

// const getRandomUser = () =>{
//     return axios.get('https://random-data-api.com/api/v2/users?size=2&is_xml=true')
//         .then(response => {
//             const user = response.data.results[0];
//             return {
//                 name: `${user.name.first} ${user.name.last}`,
//                 email: user.email,
//                 phone: user.phone,
//                 picture: user.picture.large
//             };
//         })
//         .catch(error => {
//             console.error("Error fetching random user:", error);
//             throw error;
//         });
// }

const getRandomUser = async () => {
  const response = await axios.get(
    "https://random-data-api.com/api/v2/users?size=2&is_xml=true",
    {
      headers: {},
      params: {
        size: 1,
      },
    }
  );
  return response;
};

export { getRandomUser };
