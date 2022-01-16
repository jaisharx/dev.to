import { Box, Button, HStack, Heading, Spacer } from '@chakra-ui/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const HeaderBtn = styled(Button)`
  position: relative;
  padding: 0.4rem 0.5rem;
  font-weight: normal;

  &:hover {
    color: #3b49df;

    &::after {
      width: 100%;
    }
  }

  &:focus {
    box-shadow: none;
  }

  ${(props) =>
    props.isCurrent &&
    css`
      font-weight: 500;

      &::after {
        transition: width 0.2s ease;
        position: absolute;
        bottom: 0;
        margin: auto;
        content: '';
        height: 3px;
        width: 70%;
        border-radius: 4px;
        background-color: #3b49df;
      }
    `}
`

export default function Header(props: {
  isActive?: string
  timeperiods: string[]
  setIsActive?: (s: string) => void
}) {
  return (
    <Box as="header">
      <HStack spacing=".6rem">
        <Heading fontSize="1.25rem">Posts</Heading>
        <Spacer />
        {props.timeperiods.map((item, idx) => {
          if (props.isActive === item) {
            return (
              <HeaderBtn
                key={idx}
                isCurrent={props.isActive}
                onClick={() => props.setIsActive(item)}
              >
                {item}
              </HeaderBtn>
            )
          }
          return (
            <HeaderBtn key={idx} onClick={() => props.setIsActive(item)}>
              {item}
            </HeaderBtn>
          )
        })}
      </HStack>
    </Box>
  )
}
