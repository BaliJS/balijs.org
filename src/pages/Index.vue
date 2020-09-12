<template>
  <Layout>
    <Header />
    <Jumbotron />
  </Layout>
</template>

<script>
import { format, localeFormat } from 'light-date'

import Header from '@/components/Header'
import Jumbotron from '@/components/Jumbotron'

import { CBox, CStack, CText } from '@chakra-ui/vue'

export default {
  components: { Header, Jumbotron, CBox, CStack, CText },
}
</script>
