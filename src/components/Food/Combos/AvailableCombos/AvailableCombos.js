import classes from './AvailableCombos.module.css'
import Card from "../../../UI/Card/Card";
import CombosItem from "../CombosItem/CombosItem";
import {useEffect, useState} from 'react';
import Modal from "../../../UI/Modal/Modal";

const AvailableCombos = (props) => {

    const [retrievedComboList, setRetrievedComboList] = useState([]);

    useEffect(() => {
        const fetchCombos = async () => {
            const response = await fetch('https://foodapp-a3f77-default-rtdb.firebaseio.com/Combos.json');
            const responseData = await response.json();

            const loadedCombos = [];

            for(const key in responseData) {
                loadedCombos.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setRetrievedComboList(loadedCombos);
            console.log(loadedCombos);
        };
        fetchCombos();
    }, []);


    const comboList = retrievedComboList.map((combo) => (
        <CombosItem
            id={combo.id}
            key={combo.id}
            name={combo.name}
            description={combo.description}
            price={combo.price}
        />
    ));
    return(
        <Modal onClose={props.onClose}>
            <div className={classes.combos}>
                <section>
                    <Card>
                        <ul>
                            {comboList}
                        </ul>
                    </Card>
                </section>
                <button onClick={props.onClose}>Close</button>
            </div>
        </Modal>
    );
};
export default AvailableCombos;