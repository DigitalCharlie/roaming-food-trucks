import AppetizersList from "../AppetizersList/AppetizersList";
import DessertsList from "../DessertsList/DessertsList";
import DrinksList from "../DrinksList/DrinksList";
import EntreeList from "../EntreeList/EntreeList";
import SidesList from "../SidesList/SidesList";
import styles from "./MenuList.module.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab"

import { useState } from "react";

export default function MenuList( {foodTruck }) {

    const [activeTab, setActiveTab] = useState('apps')

    return (
        <section className={styles.MenuList}>
            <div className={styles.menuContainer}>
                <h4 className="heavy">Menu</h4>

                    <div className={styles.MenuNav}>
                        <div onClick={()=>setActiveTab('apps')} className={`${styles.MenuNavOption} ${activeTab==='apps' && styles.ActiveMenu }`}>Apps</div>
                        <div onClick={()=>setActiveTab('entrees')} className={`${styles.MenuNavOption} ${activeTab==='entrees' && styles.ActiveMenu }`}>Entrees</div>
                        <div onClick={()=>setActiveTab('sides')} className={`${styles.MenuNavOption} ${activeTab==='sides' && styles.ActiveMenu }`}>Sides</div>
                        <div onClick={()=>setActiveTab('drinks')} className={`${styles.MenuNavOption} ${activeTab==='drinks' && styles.ActiveMenu }`}>Drinks</div>
                        <div onClick={()=>setActiveTab('desserts')} className={`${styles.MenuNavOption} ${activeTab==='desserts' && styles.ActiveMenu }`}>Desserts</div>
                    </div>
                    {
                        activeTab === 'apps' 
                        ? <AppetizersList foodTruck={foodTruck} />
                        : activeTab === 'entrees'
                        ? <EntreeList foodTruck={foodTruck} />
                        : activeTab === 'sides'
                        ? <SidesList foodTruck={foodTruck}/>
                        : activeTab === 'drinks'
                        ? <DrinksList foodTruck={foodTruck} />
                        :<DessertsList foodTruck={foodTruck} />
                    }
                    <article>

                    </article>

                {/* <Tabs defaultActiveKey="apps" className="mb-3">
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
                </Tabs> */}
            </div>
        </section>
    );
};