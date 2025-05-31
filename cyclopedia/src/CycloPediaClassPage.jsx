/* eslint-disable react/require-render-return */
import React from "react";
import { getRandomUser } from "./Utility/api";

// eslint-disable-next-line no-unused-vars

// Below is a class based component that will be used to render the CycloPedia class page.
class CycloPediaClassPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructor: undefined,
      studentList: [],
      studentCount: 0,
      hideInstructor: false,
    };
  }

  componentDidMount = async () => {
    console.log("CycloPediaClassPage mounted");
    const response = await getRandomUser();
    console.log("Response from getRandomUser:", response);
  };

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {}
}

export default CycloPediaClassPage;
