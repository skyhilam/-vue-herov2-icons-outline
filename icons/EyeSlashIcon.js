export default {
  name: 'EyeSlashIcon',
  
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
<path d="M3.9799 8.22257C3.05679 9.31382 2.35239 10.596 1.93433 12.0015C3.22562 16.338 7.24308 19.5 11.9991 19.5C12.9916 19.5 13.952 19.3623 14.8622 19.1049M6.2276 6.22763C7.88385 5.13558 9.86768 4.5 11.9999 4.5C16.7559 4.5 20.7734 7.66205 22.0647 11.9985C21.3528 14.3919 19.8105 16.4277 17.772 17.772M6.2276 6.22763L2.99997 3M6.2276 6.22763L9.87865 9.87868M17.772 17.772L21 21M17.772 17.772L14.1213 14.1213M14.1213 14.1213C14.6642 13.5784 15 12.8284 15 12C15 10.3431 13.6568 9 12 9C11.1715 9 10.4215 9.33579 9.87865 9.87868M14.1213 14.1213L9.87865 9.87868" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}