<template>
  <var-pagination :current="3" :total="120" :simple="false" />
</template>

<script>
import Pagination from '../Pagination'
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'

export default {
  name: 'BasicUse',
  components: {
    [Pagination.name]: Pagination,
  },
  setup() {
    watchLang(use, 'pc')

    return {
      pack,
    }
  },
}
</script>

<style lang="less" scoped>
ul {
  padding: 10px 0;
  box-shadow: none;
}
</style>
