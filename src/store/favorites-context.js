import { createContext, useState } from "react";

// capital F because it will contain a react component, it's conventional to start with capital letter
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
}); 

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    // in order to change the states, we create functions : 

    // addFavoriteHandler should update the state to add the latest user favoriteMeetup
    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    // we want to drop the meetupId by using parameter filter (we return true if meetup.id is not equal to meetupId)
    // here we want to return false to drop the item 
    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }
    // it will help to determine wether a given item is a fave or not,
    // here, we want to return true if a meetup.id is truthly to meetupId to identify some items as fave.
    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;