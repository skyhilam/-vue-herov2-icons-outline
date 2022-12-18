export default {
  name: 'EnvelopeOpenIcon',
  
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
<path d="M21.75 9.00021V9.9063C21.75 10.734 21.2955 11.4949 20.5667 11.8874L14.0893 15.3752M2.25 9.00021V9.9063C2.25 10.734 2.70448 11.4949 3.43328 11.8874L9.91074 15.3752M18.75 17.8849L14.0893 15.3752M14.0893 15.3752L13.0667 14.8246C12.4008 14.466 11.5992 14.466 10.9333 14.8246L9.91074 15.3752M9.91074 15.3752L5.25 17.8849M21.75 19.5002C21.75 20.7429 20.7426 21.7502 19.5 21.7502H4.5C3.25736 21.7502 2.25 20.7429 2.25 19.5002L2.25 8.84412C2.25 8.01639 2.70448 7.25549 3.43328 6.86307L10.9333 2.8246C11.5992 2.46602 12.4008 2.46602 13.0667 2.8246L20.5667 6.86307C21.2955 7.2555 21.75 8.01639 21.75 8.84413V19.5002Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}