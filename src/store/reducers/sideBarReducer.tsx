import { UilMessage, UilMusic, UilNewspaper, UilSetting, UilUserExclamation, UilUsersAlt } from "@iconscout/react-unicons";

const sideBarState = [
  { link: "feed", title: "Feed", icon: <UilNewspaper size={30}/> },
  { link: "profile", title: "Profile", icon: <UilUserExclamation size={30}/> },
  { link: "dialogs", title: "Dialogs", icon: <UilMessage size={30}/> },
  { link: "friends", title: "Users", icon: <UilUsersAlt size={30}/> },
  { link: "music", title: "Music", icon: <UilMusic size={30}/> },
  { link: "settings", title: "Settings", icon: <UilSetting size={30}/> },
];

const sideBarReducer = (state = sideBarState) => {
  return state;
};

export default sideBarReducer;
