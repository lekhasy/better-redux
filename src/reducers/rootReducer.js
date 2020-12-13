export default function rootReducer(
  store = { sideBar: { isTeaOnly: true } },
  action
) {
  if (action.type === "IS_TEA_ONLY_FLAG_CHANGED")
    return {
      ...store,
      sideBar: {
        ...store.sideBar,
        isTeaOnly: !store.sideBar.isTeaOnly,
      },
    };
  else return store;
}
