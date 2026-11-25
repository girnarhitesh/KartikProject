export default function Button({ variant = 'primary', href, className = '', children, ...rest }) {
  const classes = ['btn', `btn-${variant}`, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  )
}
