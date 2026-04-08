import '../Styles/Toast.css'
const Toast = ({ toast }) => {
  return (
    <div>
      <div className={`toast ${toast.type}`}>
      {toast.msg}
    </div>
    </div>
  )
}

export default Toast
