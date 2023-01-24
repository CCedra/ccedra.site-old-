<template>
  <div>
    <Header :h1="title"/>
    <form @submit.prevent="addPostForm">
    <div class="container">
      <div class="row">
          <div class="col-lg-12">
            <nav aria-label="breadcrumb" class="mt-4">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="">Главная</a></li>
                <li class="breadcrumb-item active" aria-current="page">Добавить пост</li>
              </ol>
            </nav>
          </div>
          <div class="md-form mb-0">
            <label for="title" class="sr-only">Заголовок</label>
            <input type="text" id="title" class="form-control" placeholder="Заголовок" v-model="form.title">
          </div>
          <div class="md-form mb-0">
            <label for="slug" class="sr-only">Слаг</label>
            <input type="text" id="slug" class="form-control" placeholder="Слаг" v-model="form.slug">
          </div>
          <div class="md-form mb-0">
            <label for="description" class="sr-only">Описание</label>
            <input type="text" id="description" class="form-control" placeholder="Описание" v-model="form.description">
          </div>
          <textarea type="text" id="content" rows="2" class="form-control md-textarea" placeholder="Тело поста" v-model="form.content"></textarea>
          <div class="md-form mb-0">
            <label for="tags" class="sr-only">Теги</label>
            <input type="text" id="tags" class="form-control" placeholder="Теги через запятую" v-model="form.tags">
          </div>
          
          <button type="submit" class="btn btn-primary">Отправить</button>

      </div>
    </div>
  </form>
  </div>
</template>

<script>
import Header from "@/components/Header";
import axios from "axios";
export default {
  components: {Header},
  layout: "post_detail",
  data() {
    return {
      title: "Добавление поста",
      form:{
            h1:'',
            title:'',
            slug:'',
            description:'',
            content:'',
            created_at:'',
            author:'',
            tags:''        
      }
    }
  },
  methods:{
    addPostForm(){
      try{
        let response = this.$axios.post('http://localhost:8000/api/add_post/',{
          h1: this.form.title,
          title: this.form.title,
          slug: this.form.slug.toLowerCase(),
          description: this.form.description,
          content: this.form.content,
          created_at: "2023-01-20",
          author: this.user.username,
          tags: ["qwe","qwe"]      
        })
        this.$router.push("/add_post_success/")
      } 
      catch (err) {
        console.log(err)
      }
    }
  },
  computed:{
    user() {
      return this.$auth.user
    }
  }  
}
</script>

<style>

</style>