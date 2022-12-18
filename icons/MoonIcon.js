export default {
  name: 'MoonIcon',
  
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
<path d="M21.7519 15.0019C20.597 15.4839 19.3296 15.75 18 15.75C12.6152 15.75 8.25 11.3848 8.25 5.99999C8.25 4.67039 8.51614 3.40296 8.99806 2.24805C5.47566 3.71785 3 7.19481 3 11.25C3 16.6348 7.36522 21 12.75 21C16.8052 21 20.2821 18.5243 21.7519 15.0019Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}