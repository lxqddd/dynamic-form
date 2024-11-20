<script setup lang='ts'>
import DynamicForm from '@/components/DynamicForm/index.vue'
import { ref, watch } from 'vue'

const jsonSchema = [
  {
    component: 'DInput',
    id: '1111',
    label: '输入框',
    value: '',
    key: 'name',
    attrs: {
      placeholder: '请输入',
      class: ['aaa', 'bbb'],
    },
    showRules: [],
    isShow: true,
  },
  {
    component: 'DTimePicker',
    id: '2222',
    label: '时间选择器',
    value: '',
    key: 'date',
    attrs: {
      'placeholder': '请选择时间',
      'format': 'HH:mm:ss',
      'date-format': 'HH:mm:ss',
      'value-format': 'HH:mm:ss',
    },
    showRules: {
      or: [],
      and: [{
        field: '1111',
        logic: '=',
        type: 'string',
        value: '123',
      }],
    },
    isShow: true,
  },
]

const data = ref({})

watch(() => data.value, (newVal) => {
  console.log(newVal)
})
</script>

<template>
  <DynamicForm v-model="data" :json-schema="jsonSchema" />
  <span class="block text-red mdi:account-circle" />
  <div class="text-red">
    asdf
  </div>
</template>

<style></style>
