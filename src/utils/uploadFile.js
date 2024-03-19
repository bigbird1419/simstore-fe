import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { storage } from '../services/firebase'

export const uploadImg = async (networkerName, fileImg) => {
    try {
        // const storageref = ref(storage, `images/${networkerName}`)
        // const uploadTask = await uploadBytesResumable(storageref, fileImg)
        // uploadTask.on(
        //     (error) => { console.log('1: ', error) },
        //     () => {
        //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        //             rs = downloadURL
        //             console.log('rs: ', rs)
        //         })
        //     }
        // )
        // return rs
        const storageref = ref(storage, `images/${networkerName}`)
        const uploadTask = uploadBytesResumable(storageref, fileImg)
        const snapshot = await uploadTask
        const downloadURL = await getDownloadURL(snapshot.ref)
        return downloadURL
    } catch (error) {
        return 'https://simdeponline.vn/images/vng.jpg'
    }
}