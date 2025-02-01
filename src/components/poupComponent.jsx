const PopupComponent =({isOpen, onClose, children})=>{
    if (!isOpen) return null
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg shadow-lg w-1/3">
          <button className="absolute top-2 right-2" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    )
}
export default PopupComponent