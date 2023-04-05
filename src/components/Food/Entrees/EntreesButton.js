import {Button} from 'react-bootstrap';
const EntreesButton = props => {

    return(
        
            <Button variant="success" onClick={props.onClick}>
                <span> Choose Entrees </span>
            </Button>
       
    );
};
export default EntreesButton;