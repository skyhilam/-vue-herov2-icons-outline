export default {
  name: 'EyeDropperIcon',
  
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },

  functional: true,

  render(h, ctx) {
    const size = ctx.props.size.slice(-1) === 'x' 
      ? ctx.props.size.slice(0, ctx.props.size.length -1) + 'em'
      : parseInt(ctx.props.size) + 'px';

    const attrs = ctx.data.attrs || {}
    attrs.width = attrs.width || size
    attrs.height = attrs.height || size
    ctx.data.attrs = attrs
  
    return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...ctx.data}>
<path d="M15 11.25L16.5 12.75L17.25 12V8.75798L19.5264 8.14802C20.019 8.01652 20.4847 7.75778 20.8712 7.37132C22.0428 6.19975 22.0428 4.30025 20.8712 3.12868C19.6996 1.95711 17.8001 1.95711 16.6286 3.12868C16.2421 3.51509 15.9832 3.98069 15.8517 4.47324L15.2416 6.74998H12L11.25 7.49998L12.75 8.99999M15 11.25L6.53033 19.7197C6.19077 20.0592 5.73022 20.25 5.25 20.25C4.76978 20.25 4.30924 20.4408 3.96967 20.7803L3 21.75L2.25 21L3.21967 20.0303C3.55923 19.6908 3.75 19.2302 3.75 18.75C3.75 18.2698 3.94077 17.8092 4.28033 17.4697L12.75 8.99999M15 11.25L12.75 8.99999" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}