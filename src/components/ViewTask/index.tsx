import React, { FC, useState } from "react";
import { Container, ActionContainer } from "./style";
import { action } from "typesafe-actions";
import { TaskTypes } from "../../store/types/tasks";
import { useDispatch } from "react-redux";
import { EditModal } from "../index";

type TaskProps = {
  id: string;
  title: string;
  completed: boolean;
  updateStatus?: (type, msg) => void;
};

export const ViewTask: FC<TaskProps> = ({
  id,
  title,
  completed,
  updateStatus,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    setIsDeleting(true);
    dispatch(action(TaskTypes.REQUEST_DELETE_TASK_CALL, { id: id }, onError));
  };

  const onError = (error) => {
    console.log(error);
    setIsDeleting(false);
    updateStatus("error", error);
  };
  const updateTask = (status) => {
    setIsSubmitting(true);
    dispatch(
      action(
        TaskTypes.REQUEST_UPDATE_TASKS_CALL,
        { id: id, completed: status },
        onUpdateSuccess,
        onUpdateError
      )
    );
  };

  const onUpdateError = (error) => {
    setIsSubmitting(false);
    updateStatus("error", error);
  };
  const onUpdateSuccess = (data) => {
    setIsSubmitting(false);
  };

  return (
    <>
      {showEditModal && (
        <EditModal
          initialValues={{ title: title, completed: completed }}
          hide={() => setShowEditModal(false)}
          taskId={id}
          updateStatus={updateStatus}
        />
      )}
      <Container>
        <p>{completed ? <s>{title}</s> : title}</p>
        <ActionContainer>
          <button
            onClick={() => updateTask(!completed)}
            disabled={isSubmitting}
          >
            {completed ? "Mark as Incomplete" : "Mark as completed"}
          </button>
          <button onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
          <button onClick={() => setShowEditModal(true)}>Edit</button>
        </ActionContainer>
      </Container>
    </>
  );
};
