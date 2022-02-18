function Backdrop(props)
{
    return <div className="backdrop" onClick={props.onCancel} />;
    // first onClick props can have a different name than the 2nd onClick props which is now called onCancel props
    // this is a custom function, so we can put a customized name
}

export default Backdrop;

// In order to hide the modal after clicking in the backdrop for example, 
// it's important to declare Backdrop function by using the method 'props'.