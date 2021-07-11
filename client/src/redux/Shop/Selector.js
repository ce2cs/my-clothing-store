import {createSelector} from "reselect";
import memoize from 'lodash.memoize';

const selectShopData = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShopData],
  shop => Object.values(shop.collections)
);

export const selectCollectionById = memoize(collectionId => createSelector(
  [selectShopData],
  shop => shop.collections[collectionId]
));

export const selectItemsBySlice = memoize((start, end) => (collectionId) => (
  createSelector(
    [selectCollectionById(collectionId)],
    collection => Object.values(collection.items).slice(start, end)
  )
));

export const selectFetchingStatus = createSelector(
  [selectShopData],
  shop => shop.isFetching
);

export const selectCollectionsLoaded = createSelector(
  [selectShopData],
  shop => !!shop.collections
);