import firebase from 'firebase';

export const UploadFiles = (files, prefix, stateListener) => {
	const firebaseStorageRef = firebase.storage().ref();

	files.forEach(file => {
		const uploadTask = firebaseStorageRef.child(`Uploads/${prefix}-${file.name}`).put(file);
		if(stateListener) {
			uploadTask.on(
				'state_changed',
				function(snapshot) {
					stateListener(file, snapshot)
				},
				function(error) {
					stateListener(file);
				},
			);
		}	
	});
}
