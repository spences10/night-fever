import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import ThemeToggle from './theme-toggle'

const Header = ({ siteTitle }) => (
  <Box as="header" background="rebeccapurple" marginBottom="1.45rem">
    <Box as="div" m="0 auto" maxW="960px" p="1.45rem 1.0875rem">
      <Flex>
        <Heading margin="0">
          <Link
            as={GatsbyLink}
            to="/"
            color="white"
            _hover={{ textDecor: 'none' }}
          >
            {siteTitle}
          </Link>
        </Heading>
        <Spacer />
        <Box as="div" position="relative">
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
