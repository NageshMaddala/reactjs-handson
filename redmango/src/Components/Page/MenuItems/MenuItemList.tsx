import React, { useEffect, useState } from 'react'
import { menuItemModel } from '../../../Interfaces';
import MenuItemCard from './MenuItemCard';
import { useDispatch } from 'react-redux';
import { useGetMenuItemsQuery } from '../../../Apis/menuItemApi';
import { setMenuItem } from '../../../Storage/Redux/menuItemSlice';
import { MainLoader } from '../Common';

function MenuItemList() {

    // const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);
    // useEffect(() => {
    //     fetch('https://redmangoapi.azurewebsites.net/api/MenuItem')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setMenuItems(data.result);
    //         })
    //         .catch(error => console.error('Error fetching menu items:', error));
    // }, []);

    // Using Redux Toolkit Query to fetch menu items

    // useDispatch is used to dispatch actions to the Redux store
    // useSelector is used to select data from the Redux store    
    const dispatch = useDispatch();
    const { data, isLoading } = useGetMenuItemsQuery(null);

    // useEffect is used to perform side effects in functional components
    // It is used to fetch data from the API and update the state
    // It is used to manage the lifecycle of the component
    // It is used to perform actions when the component mounts, updates, or unmounts

    useEffect(() => {
        if (!isLoading) {
            dispatch(setMenuItem(data.result))
        }
    }, [isLoading]);

    if (isLoading) {
        // return <div>Loading...</div>; // Display a loading message while data is being fetched
        return <MainLoader />;
    }

    return (
        <div className="container row">
            {/* {menuItems.length > 0 &&
                menuItems.map((menuItem, index) => (
                    <MenuItemCard menuItem={menuItem} key={index} />
                ))} */}

            {data.result.length > 0 &&
                data.result.map((menuItem: menuItemModel, index: number) => (
                    <MenuItemCard menuItem={menuItem} key={index} />
                ))
            }
        </div>
    )
}

export default MenuItemList