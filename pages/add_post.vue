<template>
  <div>
    <Header :h1="title"/>
      <div class="container">
        <form @submit.prevent="addPostForm" enctype=“multipart/form-data”>
          <div class="row">
            <div class="col-lg-12">
              <nav aria-label="breadcrumb" class="mt-4">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="">Главная</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Добавить пост</li>
                </ol>
              </nav>
            
            <p class="lead">Для добавление поста заполните форму</p>
            <div class="md-form mb-5">
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
            
            <div class="">
              <input type="file" name="image"  @change="uploadImage( $event )">
            </div>

            <div class="md-form mb-0">
              <label for="tags" class="sr-only">Теги</label>
              <input type="text" id="tags" class="form-control" placeholder="Теги через запятую" v-model="form.tags">
            </div>
            <button type="submit" class="btn btn-primary " >Отправить</button>
          </div>
        </div>
        </form>
      </div>
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
      Postslug: this.$route.params.Postslug,
      form:{
            h1:'',
            title:'',
            slug:'',
            description:'',
            content:'',
            author:'',
            image:'',
            created_at:'',
            tags:''
      },
    }
  },
  methods:{
    async uploadImage(e){
      this.form.image = e.target.files[0];
    },

    async addPostForm(e){      
      let tags_list = this.form.tags.split(',');
      console.log(tags_list);
      try{        
        const fd = new FormData();
        fd.append('h1', this.form.title)
        fd.append('title', this.form.title)
        fd.append('slug', this.form.slug.toLowerCase())
        fd.append('description', this.form.description)
        fd.append('content', this.form.content)
        fd.append('author', this.user.username)
        fd.append('created_at', "2023-02-26")
        fd.append('tags', JSON.stringify(this.form.tags.split(',').filter(function(item) { return item}).map(function(item) { return item.trim().replace('\s{1,}', '-').toLowerCase() })))
        fd.append('image', this.form.image)

        const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
        }

        let response = this.$axios.post('http://localhost:8000/api/add_post/',
          fd,
          config
        )
        this.$router.push("posts/"+this.form.slug.toLowerCase())
      } 
      catch (err) {
        console.log("!!!!!!!!" )
        console.log(tags_list);
      }
    }    
  },

  computed:{
    user() {
      return this.$auth.user
    }
  },
  created() {
    this.addPostForm
  },
}
</script>

<style>

</style>