import firebase from 'firebase';

export const retrieveUserOrganisation = (User, callback) => {
	const db = firebase.firestore();
	db.collection("OrganisationalUsers").get().then(snapshot => {
		snapshot.forEach(doc => {
			const data = doc.data();
			if(data.userId === User.uid) {
				db.collection("Organisations").doc(data.orgId).get().then(orgDoc => {
					if (doc.exists) {
						const docData = orgDoc.data();
						callback(docData);	
					}					
				})
			}
		})
	});
};