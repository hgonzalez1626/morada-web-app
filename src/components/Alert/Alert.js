import { AlertFalseWrapper, AlertTrueWrapper } from "./styles"

const Alert = ({alert}) => {
  return (
    alert.error 
      ? <AlertTrueWrapper>{alert.msg}</AlertTrueWrapper>
      : <AlertFalseWrapper>{alert.msg}</AlertFalseWrapper>
  )};

export default Alert
