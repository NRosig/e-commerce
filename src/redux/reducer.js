export const initialState = {
  products: [],
  filter: [],
  categorias: [],
  filterCategories: [],
  cart: [],
  subTotal: [],
  contador: [],
  category: [],
  selectedProduct: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        products: action.payload,
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        filter: action.payload,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categorias: action.payload,
      };
    case "FILTER_CATEGORIES":
      return {
        ...state,
        filterCategories: action.payload,
      };
    case "ADD_TO_CART":
      const filterIdCart = state.cart.includes(action.payload);
      if (filterIdCart) {
        return {
          ...state,
          cart: [...state.cart],
        };
      } else
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
    case "REMOVE_ONE":
      const newCart = state.cart.filter((el) => action.payload !== el.id);
      return {
        ...state,
        cart: newCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "GET_CATEGORY":
      let categoryProducts = state.products.filter(
        (el) => el.categoria === action.payload
      );
      return {
        ...state,
        category: categoryProducts,
      };

    case "SUMA_SUB_TOTAL":
      return {
        ...state,
        subTotal: action.payload,
      };

    case "SELECTED_PRODUCT":
      return {
        ...state,
        selectedProduct: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
