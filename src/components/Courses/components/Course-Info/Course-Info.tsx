import Author from "../author/Author";
import { getCourseDuration } from "../../../../helper/getCourseDuration";
import { getFormattedDate } from "../../../../helper/formatCreationDate";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from "react";

export const CourseInfo: React.FC = () => {
  const AUTHOR = "Authors: ";
  const DURATION = "Duration: ";
  const CREATED = "Created: ";
  console.log(useParams());
  const courseId = useParams()?.id;
  console.log(courseId);
  const { state } = useLocation();
  const navigate = useNavigate();
  const courseData = state.course;
  const cardDetail = courseData.filter((card) => card.id === courseId)?.[0];
  useEffect(() => {
    if (
      localStorage.getItem("token") === undefined ||
      localStorage.getItem("token") === null
    ) {
      navigate("/login", { replace: true });
    }
  }, []);

  return (
    <div>
      <Link to="..">Back to Courses</Link>
      <div id={cardDetail.id} className="card-details">
        <div className="card-body card-body-desc col-7 d-inline-block">
          <h3 className="card-title">{cardDetail.title}</h3>
          <p className="card-text">{cardDetail.description}</p>
        </div>
        <div className="card-body card-body-author col-3 d-inline-block  ">
          <p>
            <span className="font-weight-bold">Id </span>
            <span>{cardDetail.id}</span>
          </p>
          <p>
            <span className="font-weight-bold">{DURATION} </span>
            <span>{getCourseDuration(cardDetail.duration)} hours</span>
          </p>
          <p>
            <span className="font-weight-bold">{CREATED} </span>
            <span>{getFormattedDate(cardDetail.creationDate)}</span>
          </p>
          <p>
            <span className="font-weight-bold">{AUTHOR} </span>
            {cardDetail.authors.map((author) => (
              <Author authorId={author.id} />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
