import React from 'react'
import { Canvas, Frame, FrameProps, Geometry } from '@billdestein/react-better-frames'
import styled from 'styled-components'

const EelIframe = styled.iframe`
      height: 500px;
      left: 0;
      position: absolute;
      top: 0;
      transform: scale(0.5);
      transform-origin: 0 0;
      width: 400px;
  `

const TilesIframe = styled.iframe`
      height: 500px;
      left: 0;
      position: absolute;
      top: 0;
      transform: scale(0.5);
      transform-origin: 0 0;
      width: 400px;
  `

const EelFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  geometry.height = 270
  geometry.width = 200

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      isIframe
      onResize={() => {}}
      title={'Eel Slap'}
    >
      <EelIframe src="http://eelslap.com/" title={"Eel"}/>
    </Frame>
  )
}

const TilesFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  geometry.height = 300
  geometry.width = 200

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      isIframe
      onResize={() => {}}
      title={'15 Tiles'}
    >
      <TilesIframe src="https://15puzzle.netlify.app/" title={"15 Tiles"}/>
    </Frame>
  )
}


const app = (canvas: Canvas) => {
  canvas.addComponent(TilesFrame, {})
  canvas.addComponent(EelFrame, {})
}

export const Iframes = () => {
  const ready = () => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    app(canvas)
  }

  return (
    <div ref={ready} style={{height: '100vh'}} id="container">
    </div>
  );
}

export const IframesMarkdown = () => {
  return (
    <div>
      <h2>Iframes</h2>
      <p>Frames can contain iframes.</p>
    </div>
  )
}
