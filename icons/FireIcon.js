export default {
  name: 'FireIcon',
  
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
<path d="M15.3622 5.21385C18.2427 6.50093 20.25 9.391 20.25 12.7499C20.25 17.3062 16.5563 20.9999 12 20.9999C7.44365 20.9999 3.75 17.3062 3.75 12.7499C3.75 10.5378 4.62058 8.52914 6.03781 7.0477C6.8043 8.11811 7.82048 8.99755 9.00121 9.60089C9.04632 6.82521 10.348 4.35503 12.3621 2.73438C13.1255 3.75813 14.1379 4.61845 15.3622 5.21385Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 18.0003C14.0711 18.0003 15.75 16.3214 15.75 14.2503C15.75 12.347 14.3321 10.7749 12.4949 10.5327C11.4866 11.4372 10.7862 12.6781 10.5703 14.0789C9.78769 13.8876 9.06529 13.5428 8.43682 13.0782C8.31559 13.4469 8.25 13.841 8.25 14.2503C8.25 16.3214 9.92893 18.0003 12 18.0003Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}