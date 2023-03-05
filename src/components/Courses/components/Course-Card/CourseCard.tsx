import Author from "../author/Author";
import { getCourseDuration } from "../../../../helper/getCourseDuration";
import Button, { ButtonTypes } from "../../../../common/Button/button";
import { getFormattedDate } from "../../../../helper/formatCreationDate";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { State } from "src/store";
import { addCourseAction, deleteCourseAction } from "src/store/courses/action";
import { useDispatch } from "react-redux";

interface Course {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: Array<AuthorProps>;
}

interface AuthorProps {
  id: string;
  name: string;
}

interface CourseProps {
  updatedSearch: string;
}
export const CourseCard: React.FC = ({ ...props }: CourseProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState([]);
  const cardList: Course[] = useSelector<State>((state) => state.courses);

  const AUTHOR = "Author: ";
  const DURATION = "Duration: ";
  const CREATED = "Created: ";
  const BUTTON_TEXT = "Show Courses";
  const EDIT_BUTTON_TEXT = "E";
  const DELETE_BUTTON_TEXT = "D";

  useEffect(() => {
    setCourseData(cardList);
  });

  const showCourses = () => {
    console.log(event.target);
    if (
      event.target.tagName === "BUTTON" &&
      event.target["textContent"] === "Show Courses"
    ) {
      navigate(event.target.id, {
        replace: true,
        state: { course: cardList },
      });
    }
  };

  const deleteCourses = () => {
    if (
      event.target["tagName"] === "BUTTON" &&
      event.target["textContent"] === "D"
    ) {
      const id = event.target["id"];
      const filterList = courseData.filter((card) => card["id"] !== id);
      setCourseData(filterList);
      dispatch(deleteCourseAction(filterList));
    }
  };

  const editCourses = () => {
    console.log("clicked");
  };

  return (
    <>
      <div>
        {courseData &&
          courseData.length > 0 &&
          courseData
            .filter((data) => {
              return (
                data.title
                  .toLowerCase()
                  .includes(props.updatedSearch.toLowerCase()) ||
                data.id
                  .toLowerCase()
                  .includes(props.updatedSearch.toLowerCase())
              );
            })
            .map((cardDetail) => (
              <div id={cardDetail.id} className="card-details">
                <div className="card-body card-body-desc col-7 d-inline-block">
                  <h3 className="card-title">{cardDetail.title}</h3>
                  <p className="card-text">{cardDetail.description}</p>
                </div>
                <div className="card-body card-body-author col-3 d-inline-block  ">
                  <p>
                    <span className="font-weight-bold">{AUTHOR} </span>
                    {cardDetail.authors.map((author) => (
                      <Author authorId={author} />
                    ))}
                  </p>
                  <p>
                    <span className="font-weight-bold">{DURATION} </span>
                    <span>{getCourseDuration(cardDetail.duration)} hours</span>
                  </p>
                  <p>
                    <span className="font-weight-bold">{CREATED} </span>
                    <span>{getFormattedDate(cardDetail.creationDate)}</span>
                  </p>
                  <Button
                    id={cardDetail.id}
                    type={ButtonTypes.Button}
                    buttonText={BUTTON_TEXT}
                    class="button show-course-btn"
                    handleClick={showCourses}
                  />
                  <Button
                    id={cardDetail.id}
                    type={ButtonTypes.Button}
                    buttonText={EDIT_BUTTON_TEXT}
                    class="button show-course-btn"
                    handleClick={editCourses}
                  />
                  <Button
                    id={cardDetail.id}
                    type={ButtonTypes.Button}
                    buttonText={DELETE_BUTTON_TEXT}
                    class="button show-course-btn"
                    handleClick={deleteCourses}
                  />
                </div>
              </div>
            ))}
      </div>
    </>
  );
};
