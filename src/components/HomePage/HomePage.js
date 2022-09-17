import { useSearchParams } from "react-router-dom";
import CoursesPreview from "../CoursesPreview.js/CoursesPreview";
import Offers from "../Offers/Offers";

const HomePage = (props) => {
  const searchKey = useSearchParams()[0];
  const key = searchKey.get("search");
  return (
    <>
      <Offers />
      <CoursesPreview pythonCourses={props.coursesData} searchKey={key} />
    </>
  );
};

export default HomePage;
