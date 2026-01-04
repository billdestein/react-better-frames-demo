import React from 'react'
import styled from 'styled-components'
import './MarkdownStyles.css';

const Column = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
`

const Top = styled.div`
`;

const Bottom = styled.div`
    display: flex;
    flex-grow: 1;
`;

const Option = styled.div`
    border-bottom: 1px solid white;
    color: white;
    padding: 5px 15px 5px 15px;
    white-space: nowrap;
    &:hover {
        background-color: #555555;
        cursor: pointer;
    }
`

const exampleNames = [
  'Move and resize',
  'Restack',
  'Images',
  'Iframes',
  'Buttons',
]

interface Props {
  exampleSelected: (exampleName: string) => void
}

export const Picker = (props: Props) => {
  const { exampleSelected } = props

  const renderOption = (exampleName: string) => {
    return (
      <Option key = {exampleName} onClick={ () => exampleSelected(exampleName) }>
        { exampleName }
      </Option>
    )
  }

  return (
    <Column>
      <Top>
        { exampleNames.map(e => renderOption(e))}
      </Top>
      <Bottom/>
    </Column>
  )
}
