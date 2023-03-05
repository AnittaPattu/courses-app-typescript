import Button from "../../../common/Button/button";
import Input from "../../../common/Input/input";

function AddAuthorDetails(props) {
  const AUTHOR_PLACEHOLDER = "Enter author name...";
  const CREATE_AUTHOR = "Create Author";
  const AUTHOR_LABELTEXT = "Author name";
  let authorname = "";

  function getAuthorName(authorName) {
    authorname = authorName;
  }

  function getAuthor() {
    document.getElementById("add-author").value = "";
    props.getAuthor({
      name: authorname,
      id: Math.random().toString().substring(2, 8),
    });
  }

  return (
    <div className="author-container">
      <h4 className="heading align-center">Add Author</h4>
      <div>
        <Input
          inputType="text"
          placeholder={AUTHOR_PLACEHOLDER}
          labelText={AUTHOR_LABELTEXT}
          change={getAuthorName}
          id="add-author"
          labelClass="label-txt"
          class="author-input"
        />
        <Button
          buttonText={CREATE_AUTHOR}
          class="button create-author"
          handleClick={getAuthor}
        />
      </div>
    </div>
  );
}

export default AddAuthorDetails;
