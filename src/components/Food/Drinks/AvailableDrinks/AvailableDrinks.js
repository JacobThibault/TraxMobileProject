import classes from "../../../Food/Styles/AvailableItems.module.css";
import Card from "../../../UI/Card/Card";
import DrinksItem from "../DrinksItem/DrinksItem";
import {useEffect, useState} from 'react';

const AvailableDrinks = (props) => {

    const [retrievedDrinkList, setRetrievedDrinkList] = useState([]);

    useEffect(() => {
        const fetchDrinks = async () => {
            const response = await fetch('https://foodapp-a3f77-default-rtdb.firebaseio.com/Drinks.json');
            const responseData = await response.json();

            const loadedDrinks = [];

            for(const key in responseData) {
                loadedDrinks.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setRetrievedDrinkList(loadedDrinks);
            console.log(loadedDrinks);
        };
        fetchDrinks();
    }, []);


    const drinkList = retrievedDrinkList.map((drink) => (
        <DrinksItem
            id={drink.id}
            key={drink.id}
            name={drink.name}
            description={drink.description}
            price={drink.price}
        />
    ));
    return(
            <div className={classes.menu}>
                <section>
                    <Card>
                        <ul>
                            {drinkList}
                        </ul>
                    </Card>
                </section>
            </div>
    );
};
export default AvailableDrinks;