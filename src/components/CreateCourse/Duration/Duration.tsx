import Input from "../../../common/Input/input";
import { getCourseDuration } from "../../../helper/getCourseDuration";
import React, { useState } from "react";

function Duration(props) {
  const DURATION_PLACEHOLDER = "Enter duration in minutes...";
  const DURATION_LABELTEXT = "Duration";
  const [duration, setDuration] = useState("0");
  const setValue = (newValue) => {
    setDuration({ ...duration, newValue });
  };

  function getDuration(durationTime) {
    setDuration(durationTime);
    let updatedValue = {};
    updatedValue = durationTime;
    props.getDurationTime(durationTime);
    setDuration((duration) => ({
      ...duration,
      ...updatedValue,
    }));
  }

  return (
    <div className="author-container">
      <h4 className="heading align-center">Duration</h4>
      <div>
        <Input
          inputType="number"
          placeholder={DURATION_PLACEHOLDER}
          labelText={DURATION_LABELTEXT}
          labelClass="label-txt"
          class="author-input"
          change={getDuration}
        />
        <p>
          Duration:{" "}
          <span className="font-weight-bold ">
            {getCourseDuration({ ...duration })}
          </span>{" "}
          hours
        </p>
      </div>
    </div>
  );
}

export default Duration;
