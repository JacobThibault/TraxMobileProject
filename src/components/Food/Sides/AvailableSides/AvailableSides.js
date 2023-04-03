import classes from './AvailableSides.module.css'
import Card from "../../../UI/Card/Card";
import SidesItem from "../SidesItem/SidesItem";
import {useEffect, useState} from 'react';
import Modal from "../../../UI/Modal";

const AvailableSides = (props) => {

    const [retrievedSideList, setRetrievedSideList] = useState([]);

    useEffect(() => {
        const fetchSides = async () => {
            const response = await fetch('https://foodapp-a3f77-default-rtdb.firebaseio.com/Sides.json');
            const responseData = await response.json();

            const loadedSides = [];

            for(const key in responseData) {
                loadedSides.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setRetrievedSideList(loadedSides);
            console.log(loadedSides);
        };
        fetchSides();
    }, []);


    const sideList = retrievedSideList.map((side) => (
        <SidesItem
            id={side.id}
            key={side.id}
            name={side.name}
            description={side.description}
            price={side.price}
        />
    ));
    return(
        <Modal onClose={props.onClose}>
            <div className={classes.sides}>
                <section className={classes.sides}>
                    <Card>
                        <ul>
                            {sideList}
                        </ul>
                    </Card>
                </section>
                <button onClick={props.onClose}> Close</button>
            </div>
        </Modal>
    );
};
export default AvailableSides;