import React from 'react'
import { Canvas } from '@billdestein/react-better-frames'

interface Props {
}

const Implementation = (props: Props) => {
  void props
  return <div>Iframe</div>
}

export const Iframe: React.FunctionComponent<Props> = (props) => {
  void props

  const ready = () => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    canvas.addComponent(Implementation, {})
  }

  return (
    <div ref={ready} style={{ height: '100vh' }} id="container">
    </div>
  );
}

export const IframeMarkdown= () => {
  return (
    <div>
      <h2>Move and resize</h2>
      <br/>
      <p>All frames can be moved and resized</p>
      <br/>
      <p>To move a frame, simply grab the frame header and move your mouse.</p>
      <br/>
      <p>To resize a frame, simply grab on a corner or side of the mouse, and move your mouse.</p>
    </div>
  )
}
