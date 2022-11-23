
import { data } from "../components/data";

export function getData() {
  return {
    type: "GET_DATA",
    payload: data,
  };
}

export function filterProducts(prenda) {
  let productsF = data.filter((producto) => producto.categoria === prenda);
  return {
    type: "FILTER_PRODUCTS",
    payload: productsF,
  };
}

export function filterCategories(prenda) {
  let filterCategories = [];
  let categoriesF = filterCategories.push(
    data.filter((producto) => producto.categoria === prenda)
  );
  return {
    type: "FILTER_CATEGORIES",
    payload: categoriesF,
  };
}

export function getCategories() {
  let categories = [];
  data.forEach((product) => categories.push(product.categoria));
  let result = categories.filter((item, index) => {
    return categories.indexOf(item) === index;
  });
  return {
    type: "GET_CATEGORIES",
    payload: result,
  };
}

export function getCategory(category) {
  return {
    type: "GET_CATEGORY",
    payload: category,
  };
}

export function addToCart(product) {
  product.cantidad++;

  return {
    type: "ADD_TO_CART",
    payload: product,
  };
}

export function clearNumber(product) {
    product.cantidad = 0
}

export function removeOne(id, product) {
    clearNumber(product)
  return {
    type: "REMOVE_ONE",
    payload: id, 
  };
}

export function clearCart(product) {
    clearNumber(product)
  return {
    type: "CLEAR_CART",
    payload: [],
  };
}

export function sumaSubTotal(product) {
    const subTotal = product.precio * product.cantidad;
    return {
        type: "SUMA_SUB_TOTAL",
        payload: subTotal,
    };
}


export function selectedProduct(product) {
  return {
    type: "SELECTED_PRODUCT",
    payload: product,
  };
}
