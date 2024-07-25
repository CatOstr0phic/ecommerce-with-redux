import { FavoriteBorder, Favorite } from "@mui/icons-material";

export const initialState = {
  fav: [],
  basket:[],
  categoryName: "",
  user: null,
  products: [
    {
      id: 1,
      productName: "KeyBoard Samsung Galaxy Tab A9 Sm-XX11 LogiTech ",
      productCost: "23 000",
      productImg: "./assets/11.jpg",
      nums: "12",
      icon: <FavoriteBorder />,
    },
    {
      id: 2,
      productName: "KeyBoard LogiTech Samsung Galaxy Tab A9 Sm-XX11",
      productCost: "23 000",
      productImg: "./assets/12.jpg",
      nums: "2",
      icon: <Favorite />,
    },
    {
      id: 3,
      productName: "Apple Samsung Galaxy Tab A9 Sm-XX11 AirPods 3",
      productCost: "230",
      productImg: "./assets/13.jpg",
      nums: "132",
      icon: <Favorite />,
    },
    {
      id: 4,
      productName: "Samsung Galaxy Tab A9 Sm-XX11",
      productCost: "45 000",
      productImg: "./assets/14.jpg",
      nums: "332",
      icon: <FavoriteBorder />,
    },
    {
      id: 1,
      productName: "KeyBoard Samsung Galaxy Tab A9 Sm-XX11 LogiTech ",
      productCost: "23 000",
      productImg: "./assets/11.jpg",
      nums: "12",
      icon: <FavoriteBorder />,
    },
    {
      id: 2,
      productName: "KeyBoard LogiTech Samsung Galaxy Tab A9 Sm-XX11",
      productCost: "23 000",
      productImg: "./assets/12.jpg",
      nums: "2",
      icon: <Favorite />,
    },
    {
      id: 3,
      productName: "Apple Samsung Galaxy Tab A9 Sm-XX11 AirPods 3",
      productCost: "230",
      productImg: "./assets/13.jpg",
      nums: "132",
      icon: <Favorite />,
    },
   
  ],
  filteredItems: [],
  single: [],
  selectedRating: "All"
};

export const getBasketTotal = (basket) =>     //getSavedItem //saved 
  basket?.reduce((amount, item) => Number(item.productCost,1)+ amount, 0); //saved 



function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "FAVORITES":
      
      return {
        ...state,
        fav: [...state.fav, action.item], 
      };
    
      case "SINGLE_PAGE": 
      return {
        ...state,
        single: [action.item],
      }
      

      case "FILTER_RATING": 
      return{
        ...state,
        selectedRating: action.item
      }

    
       
    case "REMOVE_FROM":
      const index = state.fav.findIndex(
        (favItem) => favItem.id === action.id
      );

      let newFav = [...state.fav];
      
      if (index >= 0){
        newFav.splice(index, 1);
      } else {
        console.warn (
          `Can't resolve product (id: ${action.id}) as its not in basket`
        )
      } 
    return {
      ...state,
      fav: newFav,
    }

     case "GET_NAME":
        return {
          ...state,
          categoryName: [action.item],
        };

        case "ADD_TO_BASKET":
          return {
            ...state,
            basket: [...state.basket, action.item],
          };
           
        case "REMOVE_FROM_BASKET":
          const indexBasket = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
    
          let newBasket = [...state.basket];
          
          if (indexBasket >= 0){
            newBasket.splice(indexBasket, 1);
          } else {
            console.warn (
              `Can't resolve product (id: ${action.id}) as its not in basket`
            )
          }
        return {
          ...state,
          basket: newBasket,
        }


    default:
      return state;
  }
}
export default reducer;

//4.19npm~~ 