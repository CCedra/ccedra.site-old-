<template>
  <div class="col-md-3">
    <div class="card my-4">
      <h5 class="card-header">Теги</h5>
      <div class="card-body">
        <div class="d-flex flex-wrap">
          <nuxt-link :to="`/tags/${tag.slug}`" class='m-2 h5' v-for="tag in tags" :key="tag.name">#{{tag.name}}</nuxt-link>
          <a href="" class="m-2 h5">#О еде</a>
          <a href="" class="m-2 h5">#Рецепты</a>
        </div>
      </div>
    </div>

    <div class="card my-4">
      <h5 class="card-header">Последние статьи</h5>
      <div class="card-body" v-for="post in aside" :key="post.id">
        <h5 class="card-title">{{ post.h1 }}</h5>
        <div class="card-img-top">
          <img :src="post.image" alt="" class="card-img-top">
        </div>
        <div v-html="post.description" class="truncate"></div>
        <nuxt-link :to="`/posts/${post.slug}`" class="card-link">Ссылка на статью</nuxt-link> 
        <hr>   
      </div>
    </div>
  </div>
</template>

<script>
export const ssrRender = () => {};
export default {
  name: "aside.vue",
  props: ['tags','aside'],
}
</script>

<style scoped>

</style>  
