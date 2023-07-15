const sideBarState = [
  { link: "profile", title: "Profile" },
  { link: "dialogs", title: "Dialogs" },
  { link: "news", title: "News" },
  { link: "music", title: "Music" },
  { link: "settings", title: "Settings" },
];

const sideBarReducer = (state = sideBarState) => {
  return state;
};

export default sideBarReducer;
