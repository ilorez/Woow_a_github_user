import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInterface, template} from "../assets/constants/file";

interface UsersArray {
  users:UserInterface[]
}

const initialState:UsersArray = {
  users:[template]
}
const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    addUser:(state,newUser:PayloadAction<UserInterface>) => {
        state.users = [...state.users,newUser.payload]
        console.log(state.users)
    }
  }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer