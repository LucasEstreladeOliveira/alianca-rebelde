import axios from "axios";

const url = "https://alianca-rebelde-api.herokuapp.com/api/posts/";

class PostService {
  //Get Usuários
  static getGifs() {
    //eslint-disable-next-line
    return new Promise (async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(gif => ({
            ...gif,
            createdAt: new Date(gif.createdAt)
          }))
        );
        console.log(data);
      } catch (err) {
        reject(err);
      }
    });
  }
  //Create Usuários
  static insertGif(gif) {
    return axios.post(url, {
      gif
    });
  }
  //Delete Usuários
  static deleteGif(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
