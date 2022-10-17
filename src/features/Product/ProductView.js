import React, { useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext"

const ProductView = () => {
    const {productService} = useDeps();
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        onGetAllProduct();
    }, [])

    const onGetAllProduct = async () => {
        setIsLoading(true);
        try {
            const response = await productService.getAllProduct();
            setProducts(response.products)
        } catch (e) {
            console.log(e.response);
            alert('Ooopss...');
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            {isLoading && <div>Loading ... </div>}
            <ul>
                {products.map((product) => {
                    return <li key={product.id}>
                        <div>{product.productName}</div>
                        <div>{product.productInfo}</div>
                    </li>

                })}
            </ul>
        </div>
    )
}

export default ProductView;