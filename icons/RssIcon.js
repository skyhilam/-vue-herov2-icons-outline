export default {
  name: 'RssIcon',
  
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
<path d="M12.75 19.5V18.75C12.75 14.6079 9.39214 11.25 5.25 11.25H4.5M4.5 4.5H5.25C13.1201 4.5 19.5 10.8799 19.5 18.75V19.5M6 18.75C6 19.1642 5.66421 19.5 5.25 19.5C4.83579 19.5 4.5 19.1642 4.5 18.75C4.5 18.3358 4.83579 18 5.25 18C5.66421 18 6 18.3358 6 18.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}