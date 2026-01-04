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

const BearsApplet= (frameProps: FrameProps) => {
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

const CoveApplet= (frameProps: FrameProps) => {
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
  canvas.addComponent(BearsApplet, {})
  canvas.addComponent(CoveApplet, {} )
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
      <p>You'll see in the source code that the objectFit property on the img tag is set to 'cover'.  This way, the image is automatically resized when the frame is resized. The aspect ratio of the image is preserved, and fit is achieved through clipping.</p>
      <p>Try resizing and restacking the images here.</p>
      <a style={{color: 'lightblue'}} href={code} target="_blank" rel="noreferrer">Source Code</a>
    </div>
  )
}
