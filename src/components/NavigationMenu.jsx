import { Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react';

function NavigationMenu() {
  return (
    <Flex height="50px" align="center" justify="center" bg="black">
      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Clientes
        </MenuButton>
        <MenuList
          color="black"
          border="1px solid #c2c2c2"
          borderRadius="5px"
          boxShadow="dark-lg"
          mt="-10px"
        >
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Alta clientes
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Saldo clientes
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Estadisticas Clientes
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Proveedores
        </MenuButton>
        <MenuList
          color="black"
          border="1px solid #c2c2c2"
          borderRadius="5px"
          boxShadow="dark-lg"
          mt="-10px"
        >
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Alta Proveedores
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Saldo Proveedores
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Estadisticas Proveedores
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Productos
        </MenuButton>
        <MenuList
          color="black"
          border="1px solid #c2c2c2"
          borderRadius="5px"
          boxShadow="dark-lg"
          mt="-10px"
        >
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Alta Producto
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Estadisticas Productos
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Ventas
        </MenuButton>
        <MenuList
          color="black"
          border="1px solid #c2c2c2"
          borderRadius="5px"
          boxShadow="dark-lg"
          mt="-10px"
        >
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Facturar
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Nota de credito
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Nota de debito
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Estadisticas de ventas
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Caja
        </MenuButton>
        <MenuList
          color="black"
          border="1px solid #c2c2c2"
          borderRadius="5px"
          boxShadow="dark-lg"
          mt="-10px"
        >
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Abrir caja
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Cerrar Caja
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Estadisticas de caja
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Compras
        </MenuButton>
        <MenuList
          color="black"
          border="1px solid #c2c2c2"
          borderRadius="5px"
          boxShadow="dark-lg"
          mt="-10px"
        >
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Cargar compra
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Estadisticas de compra
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Pagos
        </MenuButton>
      </Menu>

      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Cobros
        </MenuButton>
      </Menu>

      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Vendedores
        </MenuButton>
        <MenuList
          color="black"
          border="1px solid #c2c2c2"
          borderRadius="5px"
          boxShadow="dark-lg"
          mt="-10px"
        >
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Altas Vendedores
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Estadisticas Vendedores
          </MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          fontSize="1rem"
          height="50px"
          bg="black"
          color="white"
          border="none"
          fontWeight="bold"
        >
          Estadisticas
        </MenuButton>
        <MenuList
          color="black"
          border="1px solid #c2c2c2"
          borderRadius="5px"
          boxShadow="dark-lg"
          mt="-10px"
        >
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Por ventas
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Por compras
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Por proveedores
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Por clientes
          </MenuItem>
          <MenuItem
            border="none"
            bg="white"
            fontSize="1rem"
            _hover={{ fontWeight: 'bold' }}
          >
            Por vendedor
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default NavigationMenu;
