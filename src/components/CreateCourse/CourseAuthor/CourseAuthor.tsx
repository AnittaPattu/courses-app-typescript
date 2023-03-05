import Button from "../../../common/Button/button";

function CourseAuthorList(props) {
  const DELETE_AUTHOR = "Delete Author";
  const courseAuthorList = props.courseAuthorList;
  function removeAuthor() {
    if (event.target.tagName === "BUTTON") {
      props.removeCourseAuthor(courseAuthorList[parseInt(event.target.id)]);
    }
  }

  const content = [];
  if (courseAuthorList.length > 0) {
    courseAuthorList.map((author, i) => {
      content.push(
        <p key={author.id}>
          <span className="author-name" key={author.id + i}>
            {author.name}
          </span>
          <Button
            id={i}
            buttonText={DELETE_AUTHOR}
            class="button add-author"
            handleClick={removeAuthor}
          />
        </p>
      );
    });
  } else {
    content.push(<p>No author found</p>);
  }

  return (
    <div className="author-container">
      <h4 className="heading align-center">Course authors</h4>
      <div className="align-center">{content}</div>
    </div>
  );
}

export default CourseAuthorList;
