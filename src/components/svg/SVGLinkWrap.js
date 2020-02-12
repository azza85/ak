import React from 'react'
export default function SVGLinkWrap(props) {
  return (
    <a
      href={props.link}
      target="_blank"
      title={props.title}
      style={{
        height: props.size,
        margin: '10px 5px',
        width: props.size,
      }}
    >
      {props.children}
    </a>
  )
}
