export const getFormattedDate = (date) => {
  if (date) {
    const formattedDate = new Date();
    return (
      <span>
        {formattedDate.getDate()}.{formattedDate.getMonth() + 1}.
        {formattedDate.getFullYear()}
      </span>
    );
  }
};
