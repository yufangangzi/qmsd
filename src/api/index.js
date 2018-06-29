/**
 * Created by Administrator on 2018/2/12.
 */
import axios from 'axios';
// 增加默认的请求路径
let baseURL = ""
axios.defaults.baseURL= 'http://219.238.250.44:8080/';//baseURL一定要写对
//如果使用这个拦截方法 home.vue中的getHot等等方法的书写结果就发生改变
//即：async getHot(){asynlet {data:hotBooks}=await getHotBook();this.hotBooks=hotBooks}变为  async getHot(){this.hotBooks=await getHotBook();}

axios.interceptors.response.use((res)=>{
  return res.data;//这里统一拦截结果 把结果处理成res.data；
  // 如果不加这个拦截结果输出的就是{data: Array(6), status: 200, statusText: "OK", headers: {…}, config: {…}, …}
  //加上的话直接输出data的值(6) [{…}, {…}, {…}, {…}, {…}, {…}]
})
// 获取所有数据
export let getHome=()=>{
  return axios.get('/home')
};
// 获取所有数据
export let getMusicList=()=>{
  return axios.get('/detail')
};


