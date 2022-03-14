export const formatErrMsg = (error: any) => {
  const err = { ...error };
  const { response, request, message } = err;
  let errMsg = response
    ? {
        status: response.status,
        message:
          response.data.message ||
          response.data.password[0] ||
          response.data.password ||
          response.data.email ||
          response.data.detail,
      }
    : request
    ? "Network error, please try again later"
    : message;

  return errMsg;
};
