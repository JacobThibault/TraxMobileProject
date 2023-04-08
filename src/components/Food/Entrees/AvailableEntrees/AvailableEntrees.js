import classes from "../../Food.module.css";
import Card from "../../../UI/Card/Card";
import EntreesItem from "../EntreesItem/EntreesItem";
import {useEffect, useState} from 'react';

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
                    key: key,
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
            <div className={classes.menu}>
                <section>
                    <Card>
                        <ul>
                            {entreeList}
                        </ul>
                    </Card>
                </section>
            </div>
    );
};
export default AvailableEntrees;