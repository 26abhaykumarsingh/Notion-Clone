import { initializeApp, getApp, App, getApps, cert } from "firebase-admin/app";

import { getFirestore } from "firebase-admin/firestore";

const serviceKey = require("@/service_key.json");

let app: App;

if(getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey),
    });
} else {
    app = getApp();
}

const adminDb = getFirestore(app);

export {app as adminApp, adminDb};


//this file is written in node.js and not in next.js cuz it's an server instance
//because we have service key, this server is authenticated to do everything