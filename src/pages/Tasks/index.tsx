import { Container, TaskContainer } from "./style";
import { action } from "typesafe-actions";
import { useState } from "react";
import { TaskTypes } from "../../store/types/tasks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { CreateTask, Header, ViewTask } from "../../components";
import { RootState, useSelector } from "../../store";
import { Alert } from "../../components/General/Alert";

export const Tasks = () => {
  const dispatch = useDispatch();
  const [status, setstatus] = useState({ type: "", msg: "" });
  const { tasks } = useSelector((state: RootState) => state.tasksGroups);
  useEffect(() => {
    getAllTasks();

    // eslint-disable-next-line
  }, []);

  const getAllTasks = () => {
    dispatch(action(TaskTypes.REQUEST_ALL_TASKS_CALL, {}, onError));
  };
  const onError = (error: any) => {
    console.log(error);
  };

  const resetStatus = () => {
    setstatus({ type: "", msg: "" });
  };

  return (
    <>
      <Header />
      <Container>
        {status && status.type === "error" && (
          <Alert type="error" msg={status.msg} close={resetStatus} />
        )}
        {status && status.type === "success" && (
          <Alert type="success" msg={status.msg} close={resetStatus} />
        )}
        <CreateTask />
        <TaskContainer>
          {tasks.length === 0 ? (
            <p>No Tasks Created yet!</p>
          ) : (
            tasks.map(({ id, title, completed }) => {
              return (
                <ViewTask
                  title={title}
                  key={id}
                  id={id}
                  completed={completed}
                />
              );
            })
          )}
        </TaskContainer>
      </Container>
    </>
  );
};
