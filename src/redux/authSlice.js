import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
name: "auth",

initialState:{
role:null,
isLogin:false
},

reducers:{

loginUser(state){
state.role="user"
state.isLogin=true
},

loginVendor(state){
state.role="vendor"
state.isLogin=true
},

loginAdmin(state){
state.role="admin"
state.isLogin=true
},

logout(state){
state.role=null
state.isLogin=false
}

}

})

export const {loginUser,loginVendor,loginAdmin,logout} = authSlice.actions

export default authSlice.reducer