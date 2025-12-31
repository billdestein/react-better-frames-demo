import React from 'react'
import { Canvas, Frame, FrameProps } from '@billdestein/react-better-frames'
import bears from './images/bears.jpg'

const ImgStyle= {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const imageFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Bears'}
    >
      <img style={ImgStyle as any} src={bears} alt={"bears"}/>
    </Frame>
  )
}


const app = (canvas: Canvas) => {
  canvas.addComponent(imageFrame, {})
}

export const Buttons = () => {
  return <div>Buttons</div>
  // const ready = () => {
  //   const element = document.getElementById('container')
  //   const canvas = new Canvas(element)
  //   app(canvas)
  // }
  //
  // return (
  //   <div ref={ready} style={{ height: '100vh' }} id="container">
  //   </div>
  // );
}

export const ButtonsMarkdown = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <p>The frame header can contain a variable number of configurable buttons.  Each button has an icon, an onclick callback, and a tool tip.</p>
    </div>
  )
}
