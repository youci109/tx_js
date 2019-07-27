
export const FETCH_USERLIST = "FETCH_USERLIST"

export default  function userAction() {
    console.log("123");
    return {
        type:FETCH_USERLIST
    }

//    return async function (dispatch) {   
//       fetch("http://localhost:8081/rest2/users")
//             .then(res => res.json())
//             .then(udata => dispatch.dispatch({
//                 type:FETCH_USERLIST
//             })) 

//         }
}