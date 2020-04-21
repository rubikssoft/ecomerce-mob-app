import {
    LOAD_CATEGORIES, LOAD_CATEGORIES_SUCCESS,
    LOAD_SUBCATEGORIES, LOAD_SUB_CATEGORIES_SUCCESS,
    LOAD_PRODUCTS, LOAD_PRODUCTS_SUCCESS,
    SET_ERROR, CLEAR_ERROR,
    LOAD_SELLER_DATA, LOAD_SELLER_DATA_SUCCESS
} from "src/utils";
import { fetch, POST } from "src/apis";

import { categories } from "../../../data/seller/categories"
import { products } from "../../../data/seller/products"
import { subcategories } from "../../../data/seller/subcategories"


export const loadCategories = () => {
    return async dispatch => {
        await dispatch({
            type: LOAD_CATEGORIES, payload: {
                categories: categories
            }
        });

        await dispatch({
            type: LOAD_CATEGORIES_SUCCESS
        });

    };

};



export const loadSubCategories = (categoryid) => {
    return async dispatch => {
        await dispatch({
            type: LOAD_SUBCATEGORIES, payload: {
                subcategories: subcategories
            }
        });

        await dispatch({
            type: LOAD_SUB_CATEGORIES_SUCCESS
        });

    };

};

export const loadProducts = (categoryid, subcategoryid) => {
    return async dispatch => {
        await dispatch({
            type: LOAD_PRODUCTS, payload: {
                products: products
            }
        });

        await dispatch({
            type: LOAD_PRODUCTS_SUCCESS
        });

    };

};



import { seller } from "  ../../../data/seller/seller"
import { orders } from "../../../data/seller/orders"

export const _addTemplateProduct = (category, subcategory, selected) => {

    //category - array details of category
    //subcategory -array details of subcategory
    //selected - array with selected product in template



    if (!selected.length) {
        return async dispatch => {

            dispatch({
                type: SET_ERROR, payload: {
                    msg: 'You must select a product to add'
                }
            });
        };

    }


    const payload = {
        seller, products, orders
    }
    return async dispatch => {
        await dispatch({
            type: CLEAR_ERROR,
        });

        await dispatch({
            type: LOAD_SELLER_DATA, payload: payload
        });

        await dispatch({
            type: LOAD_SELLER_DATA_SUCCESS
        });

    };

    //function to add new product with category , subcategory ,  products 


};
