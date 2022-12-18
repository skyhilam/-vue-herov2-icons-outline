export default {
  name: 'WifiIcon',
  
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
<path d="M8.28767 15.0378C10.3379 12.9875 13.662 12.9875 15.7123 15.0378M5.10569 11.8558C8.9133 8.04815 15.0867 8.04815 18.8943 11.8558M1.92371 8.67373C7.48868 3.10876 16.5113 3.10876 22.0762 8.67373M12.5303 18.2197L12 18.7501L11.4696 18.2197C11.7625 17.9268 12.2374 17.9268 12.5303 18.2197Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}