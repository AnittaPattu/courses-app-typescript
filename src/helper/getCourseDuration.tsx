export const getCourseDuration = (props) => {
  if (typeof props === "object") {
    props = Object.values(props).toString().split(",").join("");
  }
  if (props) {
    const hour = parseInt(parseInt(props) / 60);
    const minutes = parseInt(parseInt(props) % 60);
    const validMinutes = minutes > 10 ? minutes : "0" + minutes;
    const updatedHour = hour >= 24 ? hour - 24 : hour;
    const validHour = updatedHour > 10 ? updatedHour : "0" + updatedHour;

    return (
      <span>
        {validHour}:{validMinutes}
      </span>
    );
  }
};
