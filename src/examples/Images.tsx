import React from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'
import bears from './images/bears.jpg'
import cove from './images/cove.jpg'

const ImgStyle= {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const bearsFrame= (frameProps: FrameProps) => {
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

const coveFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Cades Cove'}
    >
      <img style={ImgStyle as any} src={cove} alt={"cove"}/>
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  canvas.addComponent(bearsFrame, {})
  canvas.addComponent(coveFrame, {} )
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
      <h2>Images</h2>
      <p>Frames can contain images</p>
    </div>
  )
}
