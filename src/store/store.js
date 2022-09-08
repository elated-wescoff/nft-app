import { createStore } from "vuex"
import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';

let newid = 0;
const store = createStore({
  state:{
    title: "Some thing ",
    some: newid,
    placeH: 'Insert your nft id: ',
    nfts: [
      {id: ++newid, title: 'A cert of a'},
      {id: ++newid, title: 'B cert of b'}
    ],
    users: []
  },
  getters:{
    certRequest: (state) => (id) => {
      console.log(id)
      return (state.nfts.find(n => n.id === parseInt(id)) == undefined)? state.nfts[0] :state.nfts.find(n => n.id === parseInt(id))
    },
    getNfts(state){
      return state.nfts
    }
  },
  mutations:{},
  actions:{},
  modules: {
    alert,
    account,
    users
  }
});
export default store;