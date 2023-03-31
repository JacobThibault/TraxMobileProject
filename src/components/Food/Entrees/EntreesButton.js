import classes from './EntreesButton.module.css';
const EntreesButton = props => {

    return(
        <div className={classes.button}>
            <button onClick={props.onClick}>
                <span> > </span>
            </button>
        </div>
    );
};
export default EntreesButton;