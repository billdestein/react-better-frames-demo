import React from 'react'
import styled from 'styled-components'
import bears from './examples/images/bears.jpg'
import cove from './examples/images/cove.jpg'
import elk from './examples/images/elk.jpg'
import flower from './examples/images/flower.jpg'
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
      <StyledImg src={flower} alt={"flower"}/>
      <StyledImg src={waterfall} alt={"waterfall"}/>
    </StyledDiv>
  )
}

