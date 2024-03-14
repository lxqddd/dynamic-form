import type { FunctionalComponent } from 'vue'

interface ILButtonProps {
  type: 'primary' | 'danger' | 'success'
  size: 'mini' | 'middle' | 'large'
}

type IEvents = {
  sendMessage(msg: string): void
}

const LButton: FunctionalComponent<ILButtonProps, IEvents> = (props, context) => {
  const handleClick = () => {
    console.log(context)
    console.log('hello, this is button')
  }
  return (
    <div
      class={[props.type, 'l-button', props.size]}
      onClick={handleClick}
    >this is button</div>
  )
}


export default LButton