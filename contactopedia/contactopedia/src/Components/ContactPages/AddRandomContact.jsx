import { getRandomUser } from "../../Utility/api";

const GetRandomContact = async (props) => {
  // const responseFromAPI = await getRandomUser();
  // console.log(responseFromAPI);

  // return props.handleRandomContact({
  //   name: `${responseFromAPI.data.results[0].name.first} ${responseFromAPI.data.results[0].name.last}`,
  //   email: responseFromAPI.data.results[0].email,
  //   phone: responseFromAPI.data.results[0].phone,
  // });
};

const AddRandomContact = (props) => {
  return (
    <div>
      <button
        className="btn btn-success form-control"
        onClick={() => GetRandomContact(props)}
      >
        Add Random Contact
      </button>
    </div>
  );
};

export default AddRandomContact;
