import { Stack, Box } from '@chakra-ui/react'
import MenuItem from './MenuItem'

const MenuLinks = ({isOpen}) => {
    return (
        <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
        >
                <Stack
                    spacing={8}
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem href='./'>Inicio</MenuItem>
                    <MenuItem href='./Asedio'>Asedio'23</MenuItem>
                    <MenuItem href='./4Millas'>4Millas'23</MenuItem>
                    <MenuItem href='./Galeria'>Galería</MenuItem>
                </Stack>
        </Box>
    )

}

export default MenuLinks