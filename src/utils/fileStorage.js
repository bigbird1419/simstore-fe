import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage'

import { storage } from '../services/firebase'

export const uploadImg = async (networkerName, fileImg) => {
    try {
        const storageref = ref(storage, `images/${networkerName}`)
        const uploadTask = uploadBytesResumable(storageref, fileImg)
        const snapshot = await uploadTask
        const downloadURL = await getDownloadURL(snapshot.ref)
        return downloadURL
    } catch (error) {
        return 'https://simdeponline.vn/images/vng.jpg'
    }
}

export const deleteImg = async (imgUrl) => {
    try {
        const desertRef = ref(storage, `images/${imgUrl}`);

        // Delete the file
        deleteObject(desertRef).then(() => {
            // File deleted successfully
        }).catch((error) => {
            // Uh-oh, an error occurred!
        });
    } catch (error) {

    }
}