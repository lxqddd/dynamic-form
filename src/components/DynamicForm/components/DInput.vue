<template>
  <el-input v-bind="attrs" v-model="value" />
</template>

<script setup lang='ts'>
import { ref, useAttrs, watch } from 'vue'
import type { ICompVal } from './types'

const props = defineProps<ICompVal>()
const emits = defineEmits<{
  (event: 'update', data: ICompVal): void
}>()
const value = ref(props.value)
const attrs = useAttrs()

watch(() => value.value, (newVal) => {
  emits('update', {
    id: props.id,
    value: newVal
  })
})
</script>

<style>

</style>
