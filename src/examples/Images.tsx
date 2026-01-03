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

const BearsFrame= (frameProps: FrameProps) => {
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

const CoveFrame= (frameProps: FrameProps) => {
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
  canvas.addComponent(BearsFrame, {})
  canvas.addComponent(CoveFrame, {} )
}

export const Images = () => {
  const ready = () => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    app(canvas)
  }

  return (
    <div ref={ready} style={{ height: '100vh' }} id="container"/>
  );
}

export const ImagesMarkdown = () => {
  const code = 'https://github.com/billdestein/react-better-frames-demo/blob/main/src/examples/Images.tsx'
  return (
    <div>
      <h2 style={{marginTop: '5px'}}>Images</h2>
      <p>Frames can contain images.</p>
      <p>When the frame is resized, the image is automatically resized as well.  The aspect ration of the image is preserved, and fit is achieved through clipping.</p>
      <a style={{color: 'lightblue'}} href={code} target="_blank" rel="noreferrer">Source Code</a>
    </div>
  )
}
