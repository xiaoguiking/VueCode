<template>
<div>
    <div class="title">
         <h1>This is Admin/Edit/{{$route.params.id}}</h1>
    </div>
</div>
</template>

<script>
export default {
  new: 'Admin',
  data () {
    return {
      msg: 'welcome to your Admin.vue'
    }
  }
}
</script>

<style scoped lang="less">

</style>
