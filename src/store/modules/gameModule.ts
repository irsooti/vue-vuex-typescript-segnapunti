import { addGameRoomListener, addPlayers } from "@/api/game";
import { ActionContext, GetterTree } from "vuex";
import { Room } from "../../models/Room";

export interface GameModuleState {
  room: Room | null;
}
// initial state
const state: GameModuleState = {
  room: null
};

// getters
const getters = {
  getRoom(state: GameModuleState) {
    return state.room;
  }
};

// actions
const actions = {
  getGameRoom(context: ActionContext<GameModuleState, any>, room: Room) {
    context.commit("getGameRoom", room);
  },
  // setGameRoom(
  //   context: ActionContext<GameModuleState, any>,
  //   payload: { players: string[]; key: string }
  // ) {
  //   addPlayers(payload.key, payload.players).then(room =>
  //     context.commit("setGameRoom", room)
  //   );
  // }
};

// mutations
const mutations = {
  getGameRoom(state: GameModuleState, room: Room) {
    state.room = room;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
