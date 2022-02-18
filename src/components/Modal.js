function Modal(props) 
{
    function cancelHandler()
    {
        props.onCancel();
    }

    function confirmHandler()
    {
        props.onConfirm();
    }

    return (
    <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
        {/* here, we use the onClick prop, because it is a built-in one, not a custom component, so cannot change the name */}
        <button className="btn" onClick={confirmHandler}>Confirm</button>
    </div>
    );
}

export default Modal;