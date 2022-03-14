import { useState } from "react";
import { useDispatch } from "react-redux";
import { CreateTaskContainer } from "./style";
import { TaskTypes } from "../../store/types/tasks";
import { action } from "typesafe-actions";

export const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setIsSubmitting(true);
    const payload = { title: title };
    dispatch(
      action(
        TaskTypes.REQUEST_CREATE_TASK_CALL,
        { ...payload },
        onSuccess,
        onError
      )
    );
  };

  const onSuccess = (data) => {
    setIsSubmitting(false);
  };
  const onError = (error) => {
    console.log(error);
    setIsSubmitting(false);
  };

  return (
    <CreateTaskContainer onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
        required={true}
      />
      <button disabled={isSubmitting}>
        {isSubmitting ? "submitting..." : "Add"}
      </button>
    </CreateTaskContainer>
  );
};
