import React, { useEffect, useState } from "react";
import { State } from "src/store";
import { useSelector } from "react-redux/es/hooks/useSelector";

interface AuthorProps {
  authorId: string;
}

const Author: React.FC = ({ authorId }: AuthorProps) => {
  const [authorName, setAuthorName] = useState("");
  const authorsList = useSelector<State>((state) => state.author);

  useEffect(() => {
    if (authorsList?.length > 0) {
      const authorDetails = authorsList.filter(
        (author) => author.id === authorId
      );
      if (authorDetails && authorDetails.length > 0) {
        setAuthorName(authorDetails?.[0].name);
      }
    }
  });

  return <span id={authorName}>{authorName}</span>;
};

export default Author;
