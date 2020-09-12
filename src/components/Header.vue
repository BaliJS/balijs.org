<template>
  <c-box px="6" bg="white" borderBottomWidth="2xs">
    <c-flex justify="space-between" maxWidth="1024px" py="3">
      <c-box />
      <c-stack is-inline="true">
        <c-text>
          <g-link to="/">home</g-link>
        </c-text>
        <c-text>
          <g-link to="/newsletter">newsletter</g-link>
        </c-text>
        <c-text>
          <g-link to="/contact">contact</g-link>
        </c-text>
      </c-stack>
    </c-flex>
  </c-box>
</template>

<script>
import { CBox, CFlex, CText, CStack, CLink } from '@chakra-ui/vue'

export default {
  name: 'Header',
  components: { CBox, CFlex, CText, CStack, CLink },
}
</script>
