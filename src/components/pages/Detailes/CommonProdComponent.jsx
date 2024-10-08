

import "react-multi-carousel/lib/styles.css";

import { useEffect } from "react";
import { getProducts } from "../../react_redux/redux/actions/productAction";

import { useDispatch, useSelector } from "react-redux";

import SimilarProdSlide from "./SimilarProdSlide";






const CommonProdComponent = () => {

    const disptach = useDispatch();
    useEffect(() => {
        disptach(getProducts());
    }, [])
    const data = useSelector((state) => state.getProd);

    return (

        <>
            {data && data.loading == false && data.prod &&
                // data.prod.map((prod, ind) => {
                <>
                    <SimilarProdSlide prods={data.prod} time={true} title="Similar Products" />
                    <SimilarProdSlide prods={data.prod} time={true} title="Both Together" />
                    <SimilarProdSlide prods={data.prod} time={true} title="Recently Viewed" />

                </>
                // })


            }
        </>


    )
}
export default CommonProdComponent;


