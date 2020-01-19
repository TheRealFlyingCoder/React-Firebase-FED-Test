import firebase from 'firebase';

export const retrieveUserOrganisation = async (User) => {
	const db = firebase.firestore();
	const collection = await db.collection('OrganisationalUsers').get();
	for (let doc of collection.docs) {
		const data = doc.data();
		if (data.userId === User.uid) {
			const org = await db.collection('Organisations').doc(data.orgId).get();
			if (org.exists) {
				const docData = org.data();
				return docData;
			}
		}
	}

	return null;
};

export const openOrganisationTest = async (orgId, testId) => {
	const db = firebase.firestore();
	const code = 'SDFE3'

	try {
		await db.collection('ActiveTests')
		.doc(code)
		.set({
			active: false,
			orgId: orgId,
			testId: testId,
			userId: null,
		});
		return code;
	} catch (err) {
		console.log(err);
		return null;
	}
};
