import React from 'react'
import { Canvas, Frame, FrameProps, Geometry } from '@billdestein/react-better-frames'
import styled from 'styled-components'

const StyledIframe  = styled.iframe`
      height: 360px;
      left: 0;
      position: absolute;
      top: 0;
      transform: scale(1.0);
      transform-origin: 0 0;
      width: 640px;
`

const WebPageIframe= (frameProps: FrameProps) => {
  const { canvas, geometry, message } = frameProps
  const { title, url } = message
  const id = `iframe-${canvas.getNextKey()}`

  const resize = (frameGeometry: Geometry) => {
    const frameWidth = frameGeometry.width
    const iframeWidth: number = message.width
    const scaleWidth = frameWidth / iframeWidth

    const frameHeight = frameGeometry.height
    const iframeHeight: number = message.height
    const scaleHeight = frameHeight / iframeHeight

    const scale = scaleWidth > scaleHeight ? scaleWidth : scaleHeight
    const element = document.getElementById(id) as HTMLElement
    element.style.transform = `scale(${scale})`;
  }

  // const resize = (frameGeometry: Geometry) => {
  //   const frameWidth = frameGeometry.width
  //   const frameHeight = frameGeometry.height
  //   const iframeWidth: number = message.width
  //   const iframeHeight: number = message.height
  //
  //   console.log(`frameWidth: ${frameWidth}, frameHeight: ${frameHeight}, iframeWidth: ${iframeWidth}, iframeHeight: ${iframeHeight}`)
  //
  //   const width = frameHeight * (iframeWidth / iframeHeight)
  //   const height: number = frameWidth * (iframeHeight / iframeWidth)
  //
  //   let scale
  //
  //   if (width / frameWidth > height / frameHeight ) {
  //     scale = width / frameWidth
  //   } else {
  //     scale = height / frameHeight
  //   }
  //
  //   console.log(`scale: ${scale}`)
  //
  //   const element = document.getElementById(id) as HTMLElement
  //   element.style.transform = `scale(${scale})`;
  // }

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      isIframe
      onResize={resize}
      title={title}
    >
      <StyledIframe id={id} src={url} title={""}/>
    </Frame>
  )
}

const app = (canvas: Canvas) => {

  let message = {
    height: 360,
    title: 'Born to Skate',
    url: 'https://player.vimeo.com/video/28693946?h=c343f615f6&color=ff9933&title=0&byline=0&portrait=0',
    width: 640,
  }

  canvas.addComponent(WebPageIframe, message)

  message = {
    height: 360,
    title: 'BACKFLIP',
    url: 'https://player.vimeo.com/video/868805980?h=9eac7a10c9',
    width: 640,
  }

  canvas.addComponent(WebPageIframe, message)
}

export const Iframes = () => {
  const ready = () => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    app(canvas)
  }

  return (
    <div ref={ready} style={{height: '100vh'}} id="container"/>
  );
}

export const IframesMarkdown = () => {
  const code = 'https://github.com/billdestein/react-better-frames-demo/blob/main/src/examples/Iframes.tsx'
  return (
    <div>
      <h2 style={{marginTop: '5px'}}>Iframes</h2>
      <p>Frames can contain iframes.</p>
      <p>Note that iframes are unlike images in that they do not automatically resize when the containing div is resized.  Instead, resizing is an application concern.  The example code shows one way to handle this.</p>
      <a style={{color: 'lightblue'}} href={code} target="_blank" rel="noreferrer">Source Code</a>
    </div>
  )
}
