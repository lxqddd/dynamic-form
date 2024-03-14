export interface ICompVal {
  id: string
  value: any
}

export interface IDynamicFormProps {
  modelValue: any
  jsonSchema: {
    component: string
    id: string
    label: string
    key: string
    value: string
    attrs: Record<string, any>
    isShow: boolean
    showRules: {
      and: {
        field: string
        logic: string
        type: string
        value: string
      }[]
      or: {
        field: string
        logic: string
        type: string
        value: string
      }[]
    }
  }[]
}
