<template>
  <Layout>
    <CBox>
      <h1>{{ $page.post.title }}</h1>
      <div v-html="$page.post.content"></div>
    </CBox>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    id
    title
    content
    pubDate
  }
}
</page-query>

<script>
import { CHeading } from '@chakra-ui/vue'

export default {
  name: 'Post',
  components: { CHeading },
}
</script>
