import ActionTypes from "./ActionTypes";
import {store} from "../../components/Firebase/utils";

export const updateCollections = (collections) => ({
  type: ActionTypes.updateCollections,
  payload: collections
});

export const fetchCollectionsStart = () => ({
  type: ActionTypes.fetchCollectionStart
});
export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ActionTypes.fetchCollectionSuccess,
  payload: collectionMap
})
export const fetchCollectionsFailure = (errorMessage) => ({
  type: ActionTypes.fetchCollectionFailure,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionsRef = store.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionsRef.get().then(collectionSnapshot => {
      const collections = collectionSnapshot.docs.map(doc => {
        const {items, title} = doc.data();
        return {
          id: doc.id,
          routeName: encodeURI(title.toLowerCase()),
          title,
          items
        }
      });
      const collectionMap = collections.reduce((cumulative, curr) => {
          cumulative[curr.title.toLowerCase()] = curr
          return cumulative;
        }
        , {})
      dispatch(fetchCollectionsSuccess(collectionMap));
    }).catch(error => {
      dispatch(fetchCollectionsFailure(error.message))
    });
  }
};