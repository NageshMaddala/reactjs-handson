import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMenuItemByIdQuery } from '../Apis/menuItemApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUpdateShoppingCartMutation } from '../Apis/shoppingCartApi';
import { MainLoader, MiniLoader } from '../Components/Page/Common';

// UserID - f62ea628-a6e4-4d61-97e5-e9748d6fa3ff
function MenuItemDetails() {
    // Using Redux Toolkit Query to fetch a single menu item by ID
    // This will automatically fetch the menu item data based on the ID from the URL
    const { menuItemId } = useParams();
    const { data, isLoading } = useGetMenuItemByIdQuery(menuItemId);
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
    const [updateShoppingCart] = useUpdateShoppingCartMutation();

    const handleAddToCart = async (menuItemId: number) => {
        setIsAddingToCart(true);
        try {
            // Call the updateShoppingCart mutation with the menuItemId and quantity
            //await updateShoppingCart({ menuItemId, quantity }).unwrap();
            const response = await updateShoppingCart({
                menuItemId: menuItemId,
                updateQuantityBy: quantity,
                userId: "f62ea628-a6e4-4d61-97e5-e9748d6fa3ff" // Replace with actual user ID
            });
            console.log("Item added to cart successfully:", response);

        } catch (error) {
            console.error("Failed to add item to cart:", error);
        } finally {
            setIsAddingToCart(false);
        }
    }

    // We can also do conditional rendering based on the loading state
    // If the data is still being fetched, we can show a loading message
    // If the data is fetched, we can display the menu item details
    // If the data is not found, we can show a message indicating that the item does
    // not exist or is unavailable

    if (isLoading) {
        return <div className="d-flex justify-content-center"
            style={{ width: "100%" }}><MainLoader /></div>; // Display a loading message while data is being fetched
    }

    console.log(data);

    const handleQuantity = (counter: number) => {
        let newQuantity = quantity + counter;
        if (newQuantity == 0 || newQuantity < 0) {
            newQuantity = 1; // Prevent quantity from going below 1
        }
        setQuantity(newQuantity);
        return;
    }

    // if (isLoading)
    //     return (<div> Loading..
    //     </div>);

    if (isLoading)
        return (<div className="d-flex justify-content-center" style={{ width: "100%" }}>
            <MainLoader />
        </div>);

    return (
        <div className="container pt-4 pt-md-5">
            <div className="row">
                <div className="col-7">
                    <h2 className="text-success">{data.result?.name}</h2>
                    <span>
                        <span
                            className="badge text-bg-dark pt-2"
                            style={{ height: "40px", fontSize: "20px" }}
                        >
                            {data.result?.category}
                        </span>
                    </span>
                    <span>
                        <span
                            className="badge text-bg-light pt-2"
                            style={{ height: "40px", fontSize: "20px" }}
                        >
                            {data.result?.specialTag}
                        </span>
                    </span>
                    <p style={{ fontSize: "20px" }} className="pt-2">
                        {data.result?.description}
                    </p>
                    <span className="h3">{data.result?.price}</span> &nbsp;&nbsp;&nbsp;
                    <span
                        className="pb-2  p-3"
                        style={{ border: "1px solid #333", borderRadius: "30px" }}
                    >
                        <i onClick={() => { handleQuantity(-1); }}
                            className="bi bi-dash p-1"
                            style={{ fontSize: "25px", cursor: "pointer" }}
                        ></i>
                        <span className="h3 mt-3 px-3">{quantity}</span>
                        <i onClick={() => { handleQuantity(+1); }}
                            className="bi bi-plus p-1"
                            style={{ fontSize: "25px", cursor: "pointer" }}
                        ></i>
                    </span>
                    <div className="row pt-4">
                        <div className="col-5">
                            {isAddingToCart ? (<button disabled className="btn btn-success form-control">
                                <MiniLoader />
                            </button>
                            ) : (
                                <button className="btn btn-success form-control"
                                    onClick={() => handleAddToCart(data.result?.id)}>
                                    Add to Cart
                                </button>
                            )}</div>
                        <div className="col-5 ">
                            <button className="btn btn-secondary form-control"
                                onClick={() => navigate(-1)}>
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <img
                        src={data.result?.image}
                        width="100%"
                        style={{ borderRadius: "50%" }}
                        alt="No content"
                    ></img>
                </div>
            </div>
        </div>
    )
}

export default MenuItemDetails
