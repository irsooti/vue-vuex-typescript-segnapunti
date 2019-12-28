import { firebaseInstance } from "@/firebase";
import { partial, call } from "ramda";
import { Room } from "@/models/Room";
const db: firebase.database.Database = firebaseInstance.database();

export function createGame(name: string): Promise<string | null> {
  return db
    .ref("/")
    .push({
      name,
      players: [],
      matches: []
    } as Room)
    .then(r => r.key);
}

export const addGameRoomListener = (key: string) => {
  const scope = db.ref("/" + key);
  return db.ref("/" + key).on.bind(scope);
};

export const removeGameRoomListener = (key: string) => {
  const scope = db.ref("/" + key);
  return db.ref("/" + key).off.bind(scope);
};

export async function addPlayers(key: string, players: string[]) {
  return (await db.ref("/" + key + "/players").set(players));
}
