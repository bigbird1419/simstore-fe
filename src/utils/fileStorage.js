import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage'

import { storage } from '../services/firebase'

export const uploadImg = async (name, fileImg) => {
    try {
        const storageref = ref(storage, `images/${name}`)
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
        const desertRef = ref(storage, imgUrl);

        deleteObject(desertRef).then(() => {
            console.log('Ok')
        }).catch((error) => {
            console.log(error)
        });
    } catch (error) {
        console.log(error)
    }
}