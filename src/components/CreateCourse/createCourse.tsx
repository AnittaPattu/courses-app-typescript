import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "src/common/Button/button";
import InputTextbox from "src/common/Input-textbox/input-textbox";
import Input, { InputType } from "src/common/Input/input";
import AddAuthorDetails from "./AddAuthorDetails/AddAuthorDetails";
import AuthorList from "./AuthorList/AuthorList";
import CourseAuthorList from "./CourseAuthor/CourseAuthor";
import Duration from "./Duration/Duration";
import { State } from "src/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addAuthorAction } from "src/store/author/action";
import { updateCoursesAction } from "src/store/courses/action";

interface Author {
  id: string;
  name: string;
}

export const CreateCourse: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TITLE_PLACEHOLDER = "Enter title...";
  const CREATE_COURSE = "Create course";
  const DESCRIPTION = "Enter description";
  const courseAuthorData: Author[] = [];
  const authorData = [];
  const [courseAuthor, setCourseAuthor] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState(0);
  const authorDataList: Author[] = useSelector<State>((state) => state.author);
  const [authorList, setAuthorList] = useState(authorDataList);

  function getTitle(data) {
    setTitle(data);
  }

  function getDesc(data) {
    setDesc(data);
  }

  function getDuration(data) {
    setDuration(data);
  }

  const getAuthor = (author) => {
    authorDataList.push(author);
    setAuthorList(authorDataList);
    dispatch(addAuthorAction(author));
  };

  const AddCourseAuthor = (author) => {
    if (courseAuthor.length > 0) {
      courseAuthorData.push(...courseAuthor);
    }
    courseAuthorData.push(author);
    setCourseAuthor(courseAuthorData);
    const authArry = authorList.filter((authData) => authData.id !== author.id);
    setAuthorList(authArry);
  };

  const removeCourseAuthor = (author) => {
    if (authorList.length > 0) {
      authorData.push(...authorList);
    }
    authorData.push(author);
    setAuthorList(authorData);
    const courseauthArry = courseAuthor.filter(
      (authData) => authData.id !== author.id
    );
    setCourseAuthor(courseauthArry);
  };

  const updateCourseArray = (data) => {
    const author = [...courseAuthor, ...authorList];
    dispatch(updateCoursesAction(data));
    dispatch(addAuthorAction(author));
    navigate("/courses");
  };

  function updateCourseList() {
    const currentDate = new Date();
    if (
      title.length >= 2 &&
      desc.length >= 2 &&
      courseAuthor.length > 0 &&
      duration > 0
    ) {
      const data = {
        id: Math.random().toString().substring(2, 8),
        title: title,
        description: desc,
        authors: courseAuthor.map((data) => data.id),
        duration: duration,
        creationDate: (
          currentDate.getDate() +
          "/" +
          currentDate.getMonth() +
          "/" +
          currentDate.getFullYear()
        ).toString(),
      };
      updateCourseArray(data);
    } else {
      alert("Invalid values");
    }
  }

  return (
    <div className="create-course-container">
      <div>
        <div className="course-header">
          <Input
            placeholder={TITLE_PLACEHOLDER}
            class="title"
            inputType={InputType.TEXT}
            change={getTitle}
          />
          <Button
            buttonText={CREATE_COURSE}
            class="button header-btn"
            handleClick={updateCourseList}
          />
        </div>
        <InputTextbox
          placeholder={DESCRIPTION}
          textAreaclass="description"
          textChange={getDesc}
        />
      </div>
      <div className="author-container-full">
        <div className="author-card">
          <AddAuthorDetails getAuthor={getAuthor} />
          <AuthorList authorsList={authorList} removeAuthor={AddCourseAuthor} />
        </div>
        <div className="author-card">
          <Duration getDurationTime={getDuration} />
          <CourseAuthorList
            courseAuthorList={courseAuthor}
            removeCourseAuthor={removeCourseAuthor}
          />
        </div>
      </div>
    </div>
  );
};
