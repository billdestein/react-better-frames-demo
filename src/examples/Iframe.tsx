import React from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'

const GoogleFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Bears'}
    >
      <iframe src="http://google.com" title="Google" />
    </Frame>
  )
}

const YahooFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Cades Cove'}
    >
      <iframe src="http://yahoo.com" title="Yahoo" />
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  canvas.addComponent(GoogleFrame, {})
  canvas.addComponent(YahooFrame, {} )
}

export const Iframes = () => {
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
      <p>Frames can contain images.</p>
    </div>
  )
}
