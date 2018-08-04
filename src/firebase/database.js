// import { db } from './firebase';

// const getMessages = () => {
//     return new Promise(r => {
//         const messages = db.ref('messages/').once('value', snapshot => {
//             return snapshot;
//         })
//         r(messages);
//     })
// }

// const addMessage = (message) => {
//     db.ref('messages/' + message.id).set(message)
// }

// export { addMessage };