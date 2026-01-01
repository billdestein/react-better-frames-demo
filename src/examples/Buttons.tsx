import React, { useState } from 'react'
import { ButtonIcons } from './ButtonIcons'
import { Button, Canvas, Frame, FrameProps } from '@billdestein/react-better-frames'
import bears from './images/bears.jpg'
import cove from './images/cove.jpg'
import elk from './images/elk.jpg'
import mill from './images/mill.jpg'
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
  mill,
  waterfall
]

const ImageFrame= (frameProps: FrameProps) => {
  const { canvas, geometry } = frameProps
  const [ imageNumber, setImageNumber ] = useState<number>(0)

  const next = () => {
    console.log('next')
    if (imageNumber < images.length - 1) {
      setImageNumber(imageNumber + 1)
    }
  }

  const previous = () => {
    console.log('previous')
    if (imageNumber > 0) {
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
    <div ref={ready} style={{ height: '100vh' }} id="container">
    </div>
  );
}

export const ButtonsMarkdown = () => {
  return (
    <div>
      <h2>Buttons</h2>
      <p>The frame header can contain a variable number of configurable buttons.  Each button has an icon, an onclick callback, and a tool tip.</p>
    </div>
  )
}
