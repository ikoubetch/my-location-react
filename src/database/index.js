import Dexie from 'dexie';

const db = new Dexie('my-location-local-db');
db.version(1).stores({ lastLocation: '++id, uid, lat,long' });

export default db;