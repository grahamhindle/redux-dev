export const noOp = () => ({ type: "NO_OP" })

export const apiPayloadCreator = ({
  dataType = null,
  callingFn = noOp,
  onSuccess = noOp,
  onFailure = noOp,
  label = "",
  data = null
}) => ({ 
  dataType,
  callingFn,
  onSuccess,
  onFailure,
  data,
  label
});

export function getUserByAuthor(users, user) {
  return (users.find( x => x.id === user))
}    