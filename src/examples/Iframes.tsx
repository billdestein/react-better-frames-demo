import React from 'react'
import { Canvas, Frame, FrameProps } from '@billdestein/react-better-frames'
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

  geometry.height = 360
  geometry.width = 640

  return (
    <Frame
      buttons={[]}
      canvas={canvas as Canvas}
      geometry={geometry}
      isIframe
      onResize={() => {}}
      title={title}
    >
      <StyledIframe src={url} title={""}/>
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
  return (
    <div>
      <h2>Iframes</h2>
      <p>Frames can contain iframes.</p>
      <p>The handling of iframes is tricky for two reasons.</p>
      <p>The first concern is restacking.  When a user clicks on an iframe, the click event is sent to the child DOM and is handled there.  For security reasons, a browser will not propagate the click event from the child dom to the parent DOM.  So the parent DOM is unaware that the click happened, and does not know to restack.</p>
      <p>The approach taken by react-better-frames is this.  For the iframe on the top of the stack, clicks are reported to the child DOM and are handled there.  For iframes that are not at the top of the stack, the parent DOM positions a clear rectangle over the iframe.  Clicks are reported to the parent DOM, and the parent DOM restacks the iframes.  After restacking, clear rectangles are positioned over all but the top-of-stack frame.</p>
    </div>
  )
}





// import React from 'react'
// import { Canvas, Frame, FrameProps } from '@billdestein/react-better-frames'
// import styled from 'styled-components'
//
// const StyledIframe  = styled.iframe`
//       height: 500px;
//       left: 0;
//       position: absolute;
//       top: 0;
//       transform: scale(0.5);
//       transform-origin: 0 0;
//       width: 400px;
// `
//
// const WebPageIframe= (frameProps: FrameProps) => {
//   const { canvas, geometry, message } = frameProps
//   const { title, url } = message
//
//   geometry.height = 270
//   geometry.width = 200
//
//   return (
//     <Frame
//       buttons={[]}
//       canvas={canvas as Canvas}
//       geometry={geometry}
//       isIframe
//       onResize={() => {}}
//       title={title}
//     >
//       <StyledIframe src={url} title={""}/>
//     </Frame>
//   )
// }
//
// const app = (canvas: Canvas) => {
//   canvas.addComponent(WebPageIframe, {
//     title: '15 Tiles',
//     url: 'https://15puzzle.netlify.app/',
//   })
//
//   canvas.addComponent(WebPageIframe, {
//     title: 'Scientific Calculator',
//     url: 'https://www.desmos.com/scientific?lang=cs'
//   })
//
//   canvas.addComponent(WebPageIframe, {
//     title: 'React Better Frames',
//     url: 'https://billdestein.github.io/react-better-frames-demo/'
//   })
//
//   canvas.addComponent(WebPageIframe, {
//     title: 'Back Flip',
//     url: 'https://player.vimeo.com/video/868805980?h=9eac7a10c9'
//   })
//
//   //   <iframe src="https://player.vimeo.com/video/28693946?h=c343f615f6&color=ff9933&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
//   <p><a href="https://vimeo.com/28693946">Born to Skate - Test of Time  (Alex Mizurov - Super Slow Motion)</a> from <a href="https://vimeo.com/user395655">Sebastian Linda</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
//
//
// }
//
// export const Iframes = () => {
//   const ready = () => {
//     const element = document.getElementById('container')
//     const canvas = new Canvas(element)
//     app(canvas)
//   }
//
//   return (
//     <div ref={ready} style={{height: '100vh'}} id="container">
//     </div>
//   );
// }
//
// export const IframesMarkdown = () => {
//   return (
//     <div>
//       <h2>Iframes</h2>
//       <p>Frames can contain iframes.</p>
//     </div>
//   )
// }
