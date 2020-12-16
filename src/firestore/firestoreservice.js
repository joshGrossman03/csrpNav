
import firebase from '../config/firebase'


export const db = firebase.firestore();


export function dataFromSnapshot(snapshot) {
    if (!snapshot.exists) return undefined;
    const data = snapshot.data();

    return {
        ...data,
        id: snapshot.id,
        
    }
}


export function getEventsFromFirestore (observer) {
    return db.collection('SWI').get(observer);
}


export async function addDocToCollection (collection,document) {

   try {
        await db.collection(collection).add(document);

    
        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}


 export function getDocFromDB () {
    var docRef = db.collection("SWI").doc("doc");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document Data",doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
    }








    

