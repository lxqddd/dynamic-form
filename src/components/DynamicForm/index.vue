import { defineProps } from 'vue';
<template>
  <div class="dynamic-form">
    <el-form>
      <template
        v-for="item in jsonSchema"
        :key="item.id"
      >
        <el-form-item
          v-show="item.isShow"
          :label="item.label"
        >
          <component
            :is="componentsMap[item.component]"
            v-bind="item.attrs"
            :id="item.id"
            :value="item.value"
            @update="onUpdate"
          />
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup lang='ts'>
import { defineEmits, onMounted, ref } from 'vue'
import DInput from './components/DInput.vue'
import DTimePicker from './components/DTimePicker.vue'
import type { IDynamicFormProps } from './components/types'

const props = defineProps<IDynamicFormProps>()
const emits = defineEmits<{
  (e: 'update:modelValue', data: any): void
}>()

onMounted(() => {
  checkShowRules()
})

const componentsMap: {
  [key: string]: any
} = {
  DInput,
  DTimePicker
}

const jsonSchema = ref(props.jsonSchema || {})

function checkShowRules() {
  jsonSchema.value.forEach((field) => {
    if (field.showRules.and.length) {

    }
  })
}
function onUpdate(data: any) {
  const findField = jsonSchema.value.find(item => item.id === data.id)
  if (findField)
    findField.value = data.value
  const schemaValue: {
    [key: string]: any
  } = {}
  jsonSchema.value.forEach((item) => {
    schemaValue[item.key] = item.value
  })
  checkShowRules()
  emits('update:modelValue', schemaValue)
}
</script>

<style scoped lang="scss">
  .dynamic-form {}
</style>
