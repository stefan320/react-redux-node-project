import React from "react";
import PropTypes from "prop-types";

const Question = (props) => {
  console.log(props);
  return (
    <div>
      <p>{props.questions.questOne}</p>
    </div>
  );
};

Question.propTypes = {
  questions: PropTypes.object,
};

export default Question;
