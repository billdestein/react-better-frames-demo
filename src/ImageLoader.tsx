import React from 'react'
import styled from 'styled-components'
import bears from './examples/images/bears.jpg'
import cove from './examples/images/cove.jpg'
import elk from './examples/images/elk.jpg'
import mill from './examples/images/mill.jpg'
import waterfall from './examples/images/waterfall.jpg'

const StyledDiv = styled.div`
    height: 0;
`

const StyledImg = styled.img`
    height: 0;
    width: 0;
`

export const ImageLoader = () => {
  return (
    <StyledDiv>
      <StyledImg src={bears} alt={"bears"}/>
      <StyledImg src={cove} alt={"cove"}/>
      <StyledImg src={elk} alt={"elk"}/>
      <StyledImg src={mill} alt={"mill"}/>
      <StyledImg src={waterfall} alt={"waterfall"}/>
    </StyledDiv>
  )
}

