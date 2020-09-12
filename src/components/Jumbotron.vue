<template>
  <c-box bg="yellow.100" pt="24" pb="20" px="6">
    <c-stack :spacing="6" textAlign="center">
      <c-heading>bali.js</c-heading>
    </c-stack>
  </c-box>
</template>

<script>
import { CBox, CStack, CHeading } from '@chakra-ui/vue'

export default {
  name: 'Jumbotron',
  components: { CBox, CStack, CHeading },
}
</script>
