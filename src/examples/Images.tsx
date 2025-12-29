import React from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'
import waterfall from './images/waterfall.jpg'

const ImgStyle= {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const waterfallFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Far'}
    >
      <img style={ImgStyle as any} src={waterfall} alt={"waterfall"}/>
    </Frame>
  )
}

const riverFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Near'}
    >
      <img style={ImgStyle as any} src={waterfall} alt={"waterfall"}/>
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  canvas.addComponent(waterfallFrame, {})
  canvas.addComponent(riverFrame, {} )
}

export const Images = () => {
  const ready = () => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    app(canvas)
  }

  return (
    <div ref={ready} style={{ height: '100vh' }} id="container">
    </div>
  );
}

export const ImagesMarkdown = () => {
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
