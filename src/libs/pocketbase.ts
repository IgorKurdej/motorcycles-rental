import PocketBase from 'pocketbase';

export const pb = new PocketBase(import.meta.env.VITE_PRODUCTION_URL);

pb.autoCancellation(false);
