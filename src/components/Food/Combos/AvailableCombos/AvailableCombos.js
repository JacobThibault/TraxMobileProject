import classes from "../../Food.module.css";
import Card from "../../../UI/Card/Card";
import CombosItem from "../CombosItem/CombosItem";
import {useEffect, useState} from 'react';

const AvailableCombos = () => {

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
            <div className={classes.menu}>
                <section>
                    <Card>
                        <ul>
                            {comboList}
                        </ul>
                    </Card>
                </section>
            </div>
    );
};
export default AvailableCombos;