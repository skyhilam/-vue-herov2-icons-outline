export default {
  name: 'BackwardIcon',
  
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
<path d="M21 16.811C21 17.6748 20.0668 18.2164 19.3168 17.7878L12.2094 13.7264C11.4536 13.2945 11.4536 12.2047 12.2094 11.7728L19.3168 7.71141C20.0668 7.28285 21 7.82439 21 8.68819V16.811Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 16.811C11.25 17.6748 10.3168 18.2164 9.56684 17.7878L2.45935 13.7264C1.70356 13.2945 1.70356 12.2047 2.45935 11.7728L9.56684 7.71141C10.3168 7.28285 11.25 7.82439 11.25 8.68819L11.25 16.811Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}