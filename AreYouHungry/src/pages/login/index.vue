<template>
  <div class="wrap">
    <form class="form">
      <section>
        <input placeholder="账号"/>
      </section>
      <section>
        <input placeholder="密码"/>
        
      </section>
      <section>
        <input placeholder="验证码"/>
      </section>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
</style>
