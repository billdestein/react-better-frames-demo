import React from 'react'
import { Canvas } from '@billdestein/react-better-frames'
import { Frame, FrameProps } from '@billdestein/react-better-frames'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
`

const IframeStyle= {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}


const DemoFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      isIframe
      onResize={() => {}}
      title={'Bears'}
    >
      <Wrapper>
        <iframe style={IframeStyle as any} src="https://billdestein.github.io/react-better-frames-demo/" title="React Better Frames" />
      </Wrapper>
    </Frame>
  )
}

const MapFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      isIframe
      onResize={() => {
      }}
      title={'Cades Cove'}
    >
      <Wrapper>
        <iframe style={IframeStyle as any} src="https://www.google.com/maps/embed?pb=!4v1767082958686!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ1Vocm40RlE.!2m2!1d35.59425333581726!2d-83.84184266220906!3f341.3155230784544!4f3.5380127127326233!5f0.7820865974627469" title={"Cades Cove"}/>
      </Wrapper>
    </Frame>
  )
}

// <iframe
//   src="https://www.google.com/maps/embed?pb=!4v1767082958686!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ1Vocm40RlE.!2m2!1d35.59425333581726!2d-83.84184266220906!3f341.3155230784544!4f3.5380127127326233!5f0.7820865974627469"
//   width="600" height="450" style="border:0;" allowFullScreen="" loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"></iframe>
//





const app = (canvas: Canvas) => {
  canvas.addComponent(DemoFrame, {})
  canvas.addComponent(MapFrame, {})
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
