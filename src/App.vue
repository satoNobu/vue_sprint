<template>
  <div id = 'app'>
    <h3>掲示板に投稿する</h3>
    <label for = 'name'>ニックネーム</label>
    <input 
      id = 'name' 
      type = text 
      v-model="name">
    <br><br>
    <label for = 'comment'>コメント</label>
    <textarea 
      id = 'comment' 
      v-model="comment"></textarea>
  </div>
  <br><br>
  <button @click="createComment">コメントをサーバーに送る</button>
  <h2>投稿する</h2>
  <div v-for="post in posts" :key="post.name">
    <br>
    <div>名前:{{post.fields.name.stringValue}}</div>
    <div>コメント:{{post.fields.comments.stringValue}}</div>
  </div>
</template>

<script>
import axios from './axios-auth';
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
    }
  },
  created() {
    axios.get(
      '/comments'
      ).then(responce => {
        console.log("get");
        console.log(responce);
        this.posts = responce.data.documents
      });
  },
  methods: {
    createComment() {
      axios.post('/comments',
        {
          fields: {
            name: {
              stringValue: this.name,
            },
            comments: {
              stringValue: this.comment
            }
          }
        }
      ).then(responce => {
        console.log(responce)
      }).catch(error => {
        console.log(error)
      });
      this.name ='';
      this.comment = '';
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
