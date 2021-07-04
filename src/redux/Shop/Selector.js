import {createSelector} from "reselect";
import memoize from 'lodash.memoize';

const selectShopData = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShopData],
  shop => Object.values(shop.collections)
);

export const selectCollectionById = memoize(collectionId => createSelector(
  [selectShopCollections],
  collections => collections[collectionId]
));