import React from 'react'
import { Canvas, Frame, FrameProps } from '@billdestein/react-better-frames'
import styled from 'styled-components'

const StyledIframe  = styled.iframe`
      height: 500px;
      left: 0;
      position: absolute;
      top: 0;
      transform: scale(0.5);
      transform-origin: 0 0;
      width: 400px;
`

const WebPageIframe= (frameProps: FrameProps) => {
  const { canvas, geometry, message } = frameProps
  const { title, url } = message

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
      <StyledIframe src={url} title={""}/>
    </Frame>
  )
}

const app = (canvas: Canvas) => {
  const fifteenTilesUrl = 'https://15puzzle.netlify.app/'
  const calculatorUrl = 'https://www.desmos.com/scientific?lang=cs'
  const githubPagesUrl = 'https://billdestein.github.io/react-better-frames-demo/'

  canvas.addComponent(WebPageIframe, { title: '15 Tiles', url: fifteenTilesUrl })
  canvas.addComponent(WebPageIframe, { title: 'Scientific Calculagor', url: calculatorUrl })
  canvas.addComponent(WebPageIframe, { title: 'React Better Frames', url: githubPagesUrl })
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
