const dialogsPageState = {
  dialogs: [
    { id: "1", userName: "Danila"},
    { id: "2", userName: "Vasya" },
    { id: "3", userName: "Petya" },
  ],
  messages: [
    { text: "Hi" },
    { text: "How are you" },
    { text: "Great" },
    { text: "And You" },
  ],
};
export type DialogPageType = {
    dialogs: {
        id: string,
        userName: string
    }[],
    messages: {
        text: string
    }[]
}
export type DialogType = {
  id: string;
  userName: string;
};
export type MessageType = {
  text: string;
};

type ActionsType = ReturnType<typeof addMessageAC>;

const dialogsReducer = (state = dialogsPageState, action: ActionsType) => {
  switch (action.type) {
    case "dialogsPage/addMessage":
      const newState = { ...state };
      newState.messages.push(action.newMessage);
      return newState
    default:
      return state;
  }
};

export const addMessageAC = (newMessage: string) => {
  return { type: "dialogsPage/addMessage", newMessage: {text: newMessage} } as const;
};

export default dialogsReducer;
