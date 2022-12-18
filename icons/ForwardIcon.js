export default {
  name: 'ForwardIcon',
  
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
<path d="M3 8.68819C3 7.82439 3.93317 7.28285 4.68316 7.71141L11.7906 11.7728C12.5464 12.2047 12.5464 13.2945 11.7906 13.7264L4.68316 17.7878C3.93317 18.2164 3 17.6748 3 16.811V8.68819Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.75 8.68819C12.75 7.82439 13.6832 7.28285 14.4332 7.71141L21.5406 11.7728C22.2964 12.2047 22.2964 13.2945 21.5406 13.7264L14.4332 17.7878C13.6832 18.2164 12.75 17.6748 12.75 16.811V8.68819Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}