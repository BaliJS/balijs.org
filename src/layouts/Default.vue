<template>
  <div class="container">
    <CBox mx="auto">
      <slot />
    </CBox>
  </div>
</template>

<script>
import { CBox, CFlex } from '@chakra-ui/vue'

import Header from '~/components/Header'

export default {
  name: 'Default',
  components: { CBox, CFlex, Header },
}
</script>
