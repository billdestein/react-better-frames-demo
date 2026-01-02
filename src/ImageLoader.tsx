import React from 'react'
import styled from 'styled-components'
import bears from './examples/images/bears.jpg'
import cove from './examples/images/cove.jpg'
import elk from './examples/images/elk.jpg'
import mill from './examples/images/mill.jpg'
import waterfall from './examples/images/waterfall.jpg'

const HiddenDiv = styled.div`
    height: 0px;    
`

export const ImageLoader = () => {
  return (
    <HiddenDiv>
      <img src={bears} alt={"bears"}/>
      <img src={cove} alt={"cove"}/>
      <img src={elk} alt={"elk"}/>
      <img src={mill} alt={"mill"}/>
      <img src={waterfall} alt={"waterfall"}/>
    </HiddenDiv>
  )
}

