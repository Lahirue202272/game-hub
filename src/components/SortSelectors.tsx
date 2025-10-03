import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelectors = () => {
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By: Relevance
        </MenuButton>
        <MenuList>
            <MenuItem>Relavance</MenuItem>
            <MenuItem>Date added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average rating</MenuItem>
        </MenuList>
    </Menu>
  )
}

export default SortSelectors