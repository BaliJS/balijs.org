<template>
  <Layout>
    <Header />
    <c-stack :spacing="5" pt="6" px="6" maxWidth="1000px" mx="auto">
      <c-heading>Newsletter</c-heading>
      <c-stack v-for="edge in $page.posts.edges" :key="edge.node.id">
        <c-stack is-inline="true">
          <g-link :to="`/posts/${edge.node.id}`">{{ edge.node.title }}</g-link>
          <c-text>-- {{ edge.node.pubDate }}</c-text>
        </c-stack>
      </c-stack>
    </c-stack>
  </Layout>
</template>

<page-query>
{
  posts: allPost {
    edges {
      node {
        id
        title
        content
        pubDate
      }
    }
  }
}
</page-query>

<script>
import { CBox, CStack, CText, CHeading } from '@chakra-ui/vue'

import Header from '@/components/Header'

export default {
  name: 'Newsletter',
  components: { CBox, CStack, CText, Header, CHeading },
}
</script>
