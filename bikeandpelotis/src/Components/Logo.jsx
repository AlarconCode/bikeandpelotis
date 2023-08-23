import {Box, Image} from '@chakra-ui/react'

function Logo(props) {
    return (
      <Box {...props}>
        <Image boxSize={props.boxSize} src={props.src} alt={props.alt} />
      </Box>
    )
}

export default Logo