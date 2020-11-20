import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Button,
} from '@chakra-ui/react';

function HamburgerMenu() {
  return (
    <Menu bg="black">
      <MenuButton
        as={Button}
        bg="black"
        color="white"
        border="none"
        textAlign="left"
        fontWeight="bold"
      >
        Menu
      </MenuButton>
      <MenuList>
        <MenuGroup title="Clientes" color="white" bg="black" mt="-8px">
          <MenuItem mt="-18px" _hover={{ fontWeight: 'bold' }}>
            Alta Cliente
          </MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>Saldo cliente </MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>
            Estadistica cliente{' '}
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Proveedores" color="white" bg="black" mt="-1px">
          <MenuItem _hover={{ fontWeight: 'bold' }} mt="-18px">
            Alta proveeedor
          </MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>Saldo proveedor</MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>
            Estadistica proveedor
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Productos" color="white" bg="black" mt="-1px">
          <MenuItem mt="-18px" _hover={{ fontWeight: 'bold' }}>
            Alta producto
          </MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>
            Estadistica proveedor
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Ventas" color="white" bg="black" mt="-1px">
          <MenuItem mt="-18px" _hover={{ fontWeight: 'bold' }}>
            Facturar
          </MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>Nota de creditor</MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>Nota de debito</MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>
            Estadisticas de ventas
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Caja" color="white" bg="black" mt="-1px">
          <MenuItem mt="-18px" _hover={{ fontWeight: 'bold' }}>
            Abrir caja
          </MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>Cerrar caja</MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>
            Estadistica de caja
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Compras" color="white" bg="black" mt="-1px">
          <MenuItem mt="-18px" _hover={{ fontWeight: 'bold' }}>
            Cargar compra
          </MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>
            Estadistica de compra
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Pagos" color="white" bg="black" mt="-1px">
          <MenuItem mt="-18px" _hover={{ fontWeight: 'bold' }}>
            Pagos
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Cobros" color="white" bg="black" mt="-1px">
          <MenuItem mt="-18px" _hover={{ fontWeight: 'bold' }}>
            Cobros
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Vendedores" color="white" bg="black" mt="-1px">
          <MenuItem mt="-18px" _hover={{ fontWeight: 'bold' }}>
            Alta vendedor
          </MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>
            Estadistica vendedor
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="Estadisticas" color="white" bg="black" mt="-1px">
          <MenuItem mt="-18px" _hover={{ fontWeight: 'bold' }}>
            Por ventas
          </MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>Por compras</MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>Por proveedores</MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>Por clientes</MenuItem>
          <MenuItem _hover={{ fontWeight: 'bold' }}>Por vendedor</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}

export default HamburgerMenu;
