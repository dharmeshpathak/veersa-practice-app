const initialState = {
  notes: [
    { title: "firsttTTLE", text: "firsttext" },
    { title: "secondttitle", text: "secondtext" },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: action.payload.title, text: action.payload.text },
        ],
      };
    }
    case "DELETE_TASK": {
      console.log(action.payload);
      return {
        ...state,
        notes: state.notes.filter((note,index)=>{
            return action.payload.id !==index
        }),
      };
    }
    case "EDIT_TASK": {
      return {
        ...state,
        notes: state.notes.map((note, index) => {
          if (+action.payload.id === index) {
            note.title = action.payload.title.trim();
            note.text = action.payload.text.trim();
          }
          return note;
        }),
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
