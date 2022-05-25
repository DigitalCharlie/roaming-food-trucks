import AppetizersList from "../AppetizersList/AppetizersList";
import DessertsList from "../DessertsList/DessertsList";
import DrinksList from "../DrinksList/DrinksList";
import EntreeList from "../EntreeList/EntreeList";
import SidesList from "../SidesList/SidesList";
import styles from "./MenuList.module.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"

export default function MenuList( {foodTruck }) {
    return (
        <div className={styles.MenuList}>
            <div className={styles.menuContainer}>
                <h4 className="heavy">Menu</h4>
                <Tabs defaultActiveKey="apps" className="mb-3">
                    <Tab eventKey="apps" title="Apps">
                        <AppetizersList foodTruck={foodTruck} />
                    </Tab>
                    <Tab eventKey="entrees" title="Entrees">
                        <EntreeList foodTruck={foodTruck} />
                    </Tab>
                    <Tab eventKey="sides" title="Sides">
                        <SidesList foodTruck={foodTruck}/>
                    </Tab>
                    <Tab eventKey="drinks" title="Drinks">
                        <DrinksList foodTruck={foodTruck} />
                    </Tab>
                    <Tab eventKey="desserts" title="Desserts">
                        <DessertsList foodTruck={foodTruck} />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};