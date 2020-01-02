import firebase from 'firebase';

export const retrieveOrganisation = (User, callback) => {
	const db = firebase.firestore();
	db.collection("OrganisationalUsers").get().then(callback);
};