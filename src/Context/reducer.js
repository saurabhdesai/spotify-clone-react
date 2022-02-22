export const initialstate = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // discover_weekly: [],
  // token:
  //   "BQBwVSEnvNuCXDrW-yI1_nNMkeOn1_61TwZFpz77bbDkXwI4VjhPKCXbRdeldFdA4XExoPrYm-WKYv0S25vmUq597JdVBOCO-4zZ_pNF2g6vngdyziu_FS1Mc6SkUO_Ug0Um-lq1Ci3Ni722PbFH_XXs-mwD4iM3cIGuVr01UeDEmva-dhtrJg9tRLf49EPa2w",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
