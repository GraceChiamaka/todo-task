import {
  ModalContainer,
  ModalContent,
  FormBtnContainer,
  FormItem,
} from "./style";
import { action } from "typesafe-actions";
import { TaskTypes } from "../../store/types/tasks";
import { useDispatch } from "react-redux";
import React, { FC, useState } from "react";
import { Input } from "../General";

type EditModalProps = {
  hide: () => void;
  initialValues: {
    title: string;
    completed: boolean;
  };
  taskId: string;
  updateStatus?: (type, msg) => void;
};

export const EditModal: FC<EditModalProps> = ({
  hide,
  initialValues,
  taskId,
  updateStatus,
}) => {
  const [editFormDetails, setEditFormDetails] = useState({
    title: initialValues.title,
    completed: initialValues.completed,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = (ev) => {
    ev.preventDefault();
    setIsSubmitting(true);
    dispatch(
      action(
        TaskTypes.REQUEST_UPDATE_TASKS_CALL,
        { ...editFormDetails, id: taskId },
        onSuccess,
        onError
      )
    );
  };

  const onSuccess = (data) => {
    setIsSubmitting(false);
    setEditFormDetails({
      title: initialValues.title,
      completed: initialValues.completed,
    });
    hide();
  };
  const onError = (error) => {
    setIsSubmitting(false);
    updateStatus("error", error);
  };

  const handleChange = (ev) => {
    const {
      target: { value, checked, type, name },
    } = ev;
    if (type === "checkbox") {
      setEditFormDetails({ ...editFormDetails, [name]: checked });
    } else {
      setEditFormDetails({ ...editFormDetails, [name]: value });
    }
  };
  return (
    <ModalContainer>
      <ModalContent>
        <h3>Edit Task</h3>
        <form onSubmit={handleEdit}>
          <FormItem>
            <label htmlFor="">Title</label>
            <Input
              placeholder=""
              name="title"
              value={editFormDetails.title}
              onChange={handleChange}
              required={true}
            />
          </FormItem>
          <FormItem>
            <input
              type="checkbox"
              name="completed"
              checked={editFormDetails.completed}
              onChange={handleChange}
            />{" "}
            Completed
          </FormItem>
          <FormBtnContainer>
            <button
              className="cancel-btn"
              disabled={isSubmitting}
              onClick={hide}
            >
              Cancel
            </button>
            <button disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </FormBtnContainer>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
