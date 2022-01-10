<template>
  <div>
    <a-row>
      <a-col :xs="24">hello wld</a-col>
      <a-col :xs="24">{{ title }}</a-col>
    </a-row>
  </div>
</template>

<script>
import { dad } from '@/graphql/query.js'

export default {
  name: 'IndexPage',
  data() {
    return {
      title: '',
    }
  },
  async beforeMount() {
    try {
      const data = await dad(this)
      this.title = data.dad.title
    } catch (error) {
      console.log(error)
    }
  },
}
</script>
