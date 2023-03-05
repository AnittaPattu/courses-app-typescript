import { State } from "src/store";
import Button from "../../../common/Button/button";
import { useSelector } from "react-redux/es/hooks/useSelector";
import React from "react";

function AuthorList(props) {
  const ADD_AUTHOR = "Add Author";
  const authorList = props.authorsList;
  const content = [];
  function removeAuthor() {
    if (event.target.tagName === "BUTTON") {
      props.removeAuthor(authorList[parseInt(event.target.id)]);
    }
  }

  if (authorList.length > 0) {
    authorList.map((author, i) => {
      content.push(
        <p key={author.id}>
          <span className="author-name">{author.name}</span>
          <Button
            id={i}
            buttonText={ADD_AUTHOR}
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
    <div className="author-container" id="author-list">
      <h4 className="heading align-center">Authors</h4>
      <div className="align-center">{content}</div>
    </div>
  );
}

export default AuthorList;
