import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LinkButton = styled(Button)`
  background: transparent;
  width: 14rem;
  padding: 8px;
  font-weight: normal;
  justify-content: flex-start;

  &:hover {
    color: #323ebe;
    text-decoration: underline;
    background-color: #e2e4e6;
  }
`

function Links() {
  return (
    <Box as="nav">
      <LinkButton>
        <Image src="/assets/sidebar/home.svg" mr="3" />
        Home
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/reading.svg" mr="3" />
        Reading List
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/listing.svg" mr="3" />
        Listings
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/podcast.svg" mr="3" />
        Podcasts
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/video.svg" mr="3" />
        Videos
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/tag.svg" mr="3" />
        Tags
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/faq.svg" mr="3" />
        FAQ
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/shop.svg" mr="3" />
        DEV Shop
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/sponsor.svg" mr="3" />
        Sponsors
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/about.svg" mr="3" />
        About
      </LinkButton>
      <LinkButton>
        <Image src="/assets/sidebar/contact.svg" mr="3" />
        Contact
      </LinkButton>
    </Box>
  )
}

function TagList({ children }) {
  return (
    <Box>
      {children.map((item, idx) => (
        <LinkButton key={idx}>#{item}</LinkButton>
      ))}
    </Box>
  )
}

function Tags() {
  return (
    <Box mt="6">
      <HStack justify="space-between" pl="2" py="4">
        <Heading as="h3" fontSize="1rem">
          My Tags
        </Heading>
        <IconButton
          icon={<Image src="/assets/settings.svg" />}
          aria-label="Settings"
        />
      </HStack>
      <Box maxH="42vh" overflowY="auto">
        <TagList>
          {[
            'react',
            'javascript',
            'css',
            'beginners',
            'html',
            'career',
            'python',
            'tutorial',
            'productivity',
            'aws',
            'cpp',
            'docker',
            'bash',
            'rust',
            'computerscience',
            'npm',
            'node',
            'php',
            'git',
            'vscode',
            'dart',
            'webassembly',
            'andriod',
            'discuss',
            'typescript',
          ]}
        </TagList>
      </Box>
    </Box>
  )
}

export default function Sidebar() {
  return (
    <Box as="aside">
      <Links />
      <Tags />
    </Box>
  )
}
