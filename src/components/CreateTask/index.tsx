import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { CreateTaskContainer } from "./style";
import { TaskTypes } from "@src/store/types/tasks";
import { action } from "typesafe-actions";

type CreateProps = {
  updateStatus: (type: string, msg: string) => void;
};

export const CreateTask: FC<CreateProps> = ({ updateStatus }) => {
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
    setTitle("");
  };
  const onError = (error) => {
    setIsSubmitting(false);
    updateStatus("error", error);
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
