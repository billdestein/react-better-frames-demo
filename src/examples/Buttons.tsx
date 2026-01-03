import React, { useState } from 'react'
import { ButtonIcons } from './ButtonIcons'
import { Button, Canvas, Frame, FrameProps } from '@billdestein/react-better-frames'
import bears from './images/bears.jpg'
import cove from './images/cove.jpg'
import elk from './images/elk.jpg'
import flower from './images/flower.jpg'
import waterfall from './images/waterfall.jpg'

const ImgStyle= {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

const images = [
  bears,
  cove,
  elk,
  flower,
  waterfall
]

const ImageFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps
  const [ imageNumber, setImageNumber ] = useState<number>(3)

  const next = () => {
    if (imageNumber === 4) {
      setImageNumber(0)
    } else {
      setImageNumber(imageNumber + 1)
    }
  }

  const previous = () => {
    if (imageNumber === 0) {
      setImageNumber(4)
    } else {
      setImageNumber(imageNumber - 1)
    }
  }

  const buttons: Button[] = [
    {
      icon: ButtonIcons.previous,
      onClick: previous,
      tip: 'Previous',
    },
    {
      icon: ButtonIcons.next,
      onClick: next,
      tip: 'Next',
    },
  ]

  return (
    <Frame
      buttons={buttons}
      canvas={canvas as Canvas}
      geometry={geometry}
      onResize={() => {}}
      title={'Buttons'}
    >
      <img style={ImgStyle as any} src={images[imageNumber]} alt={""}/>
    </Frame>
  )
}


const app = (canvas: Canvas) => {
  canvas.addComponent(ImageFrame, {})
}

export const Buttons = () => {
  const ready = () => {
    const element = document.getElementById('container')
    const canvas = new Canvas(element)
    app(canvas)
  }

  return (
    <div ref={ready} style={{ height: '100vh' }} id="container"/>
  );
}

export const ButtonsMarkdown = () => {
  const code = 'https://github.com/billdestein/react-better-frames-demo/blob/main/src/examples/Buttons.tsx'
  return (
    <div>
      <h2 style={{marginTop: '5px'}}>Buttons</h2>
      <p>The frame header can contain a variable number of configurable buttons.  Each button has an icon, an onclick callback, and a tool tip.</p>
      <a style={{color: 'lightblue'}} href={code} target="_blank" rel="noreferrer">Source Code</a>
    </div>
  )
}
