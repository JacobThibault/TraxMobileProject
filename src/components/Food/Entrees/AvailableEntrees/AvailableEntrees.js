import classes from './AvailableEntrees.module.css'
import Card from "../../../UI/Card/Card";
import EntreesItem from "../EntreesItem/EntreesItem";
import {useEffect, useState} from 'react';
import Modal from "../../../UI/Modal/Modal";

const AvailableEntrees = (props) => {

    const [retrievedEntreeList, setRetrievedEntreeList] = useState([]);

    useEffect(() => {
        const fetchEntrees = async () => {
            const response = await fetch('https://foodapp-a3f77-default-rtdb.firebaseio.com/Entrees.json');
            const responseData = await response.json();

            const loadedEntrees = [];

            for(const key in responseData) {
                loadedEntrees.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setRetrievedEntreeList(loadedEntrees);
            console.log(loadedEntrees);
        };
        fetchEntrees();
    }, []);


    const entreeList = retrievedEntreeList.map((entree) => (
        <EntreesItem
            id={entree.id}
            key={entree.id}
            name={entree.name}
            description={entree.description}
            price={entree.price}
        />
    ));
    return(
        <Modal onClose={props.onClose}>
            <div className={classes.entrees}>
                <section>
                    <Card>
                        <ul>
                            {entreeList}
                        </ul>
                    </Card>
                </section>
                <br/>
                <button onClick={props.onClose}> Close </button>
            </div>
        </Modal>
    );
};
export default AvailableEntrees;