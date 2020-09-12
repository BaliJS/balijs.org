<template>
  <Layout>
    <Header />
    <c-stack :spacing="5" pt="6" px="6" maxWidth="1000px" mx="auto">
      <c-heading>Social</c-heading>
      <c-stack>
        <c-text v-for="edge in $page.socials.edges" :key="edge.node.id">
          <g-link :href="edge.node.value">{{ edge.node.type }}</g-link>
        </c-text>
      </c-stack>
    </c-stack>
  </Layout>
</template>

<page-query>
{
  socials: allSocial {
  	edges {
      node {
        type
        value
      }
    }
  }
}
</page-query>

<script>
import { CBox, CText, CStack, CHeading } from '@chakra-ui/vue'

import Header from '@/components/Header'

export default {
  components: { Header, CBox, CStack, CHeading, CText },
}
</script>
