export default {
  name: 'FingerPrintIcon',
  
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
<path d="M7.86391 4.24259C9.04956 3.45731 10.4714 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5C19.5 13.4194 18.9443 16.2089 17.9324 18.7685M5.7426 6.36391C4.95732 7.54956 4.5 8.97138 4.5 10.5C4.5 11.9677 4.07875 13.3369 3.3501 14.4931M5.33889 18.052C7.14811 16.0555 8.25 13.4065 8.25 10.5C8.25 8.42893 9.92893 6.75 12 6.75C14.0711 6.75 15.75 8.42893 15.75 10.5C15.75 11.0269 15.7286 11.5487 15.686 12.0646M12.0003 10.5C12.0003 14.2226 10.6443 17.6285 8.39916 20.2506M15.033 15.6543C14.4852 17.5743 13.6391 19.3685 12.5479 20.9836" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  }
}