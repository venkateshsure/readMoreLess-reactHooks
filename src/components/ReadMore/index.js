// Write your code here

import {useState} from 'react'

import {Container, H1, P, Img, Para, Button} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const slicedDescription = reactHooksDescription.slice(0, 170)
  const [isContent, readContent] = useState(false)
  const onReadMore = () => {
    readContent(preState => !preState)
  }
  return (
    <Container>
      <H1>React Hooks</H1>
      <P>Hooks are a new addition to React</P>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Para>{isContent ? reactHooksDescription : slicedDescription}</Para>
      <Button onClick={onReadMore}>
        {isContent ? 'Read Less' : 'Read More'}
      </Button>
    </Container>
  )
}

export default ReadMore
