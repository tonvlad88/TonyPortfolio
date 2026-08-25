/**
 * Firebase is ~400 kB of the bundle and is only needed the moment someone
 * actually submits the contact form, so everything here is dynamically
 * imported on first use rather than pulled into the initial chunk.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

let firestorePromise;

const getFirestoreDb = () => {
  if (!firestorePromise) {
    firestorePromise = (async () => {
      const [{ initializeApp, getApps }, { getFirestore }] = await Promise.all([
        import("firebase/app"),
        import("firebase/firestore"),
      ]);

      const app = getApps().length
        ? getApps()[0]
        : initializeApp(firebaseConfig);

      return getFirestore(app);
    })();
  }

  return firestorePromise;
};

/**
 * Persists a contact-form submission.
 *
 * Note: the Firestore security rules for `contactMessages` must allow `create`
 * only (with field validation) and deny `read`/`update`/`delete` to everyone —
 * this collection is written directly from the browser.
 */
export const saveContactMessage = async ({ name, email, message }) => {
  const [db, { addDoc, collection, serverTimestamp }] = await Promise.all([
    getFirestoreDb(),
    import("firebase/firestore"),
  ]);

  await addDoc(collection(db, "contactMessages"), {
    name,
    email,
    message,
    createdAt: serverTimestamp(),
  });
};
