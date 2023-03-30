// Drawer_Left_NavBar_Component
import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
// ! Re_usable Component
import DvrIcon from "@mui/icons-material/Dvr";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { PATHS } from "../../../utils/constants";
import Link from "../../common/Link";
import CollapsableNav from "./CollapsableNav";

const DrawList = ({ setIsOpen }) => {
  const location = useLocation();
  const { role } = JSON.parse(sessionStorage.getItem("userDetails"));
  console.log("role", role);

  const isAdmin = () => {
    if (role === 1) {
      return true;
    }
    return false;
  };
  console.log("isAdmin", isAdmin());

  // ! NavItems
  const navItems = [
    {
      title: "Home",
      link: PATHS.home,
      icon: <DvrIcon />,
    },
    {
      title: "Categories",
      link: PATHS.categories,
      icon: <CategoryIcon />,
      children: [
        {
          title: "Add Category",
          link: PATHS.createCategory,
        },
      ],
    },
    {
      title: "Products",
      link: PATHS.products,
      icon: <ProductionQuantityLimitsIcon />,
      children: [
        {
          title: "Add Product",
          link: PATHS.createProduct,
        },
      ],
    },
    {
      title: "Orders",
      link: PATHS.orders,
      icon: <ShoppingCartIcon />,
    },
  ];

  const closeNavbar = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <List component='nav'>
      {navItems?.map((navItem, index) =>
        !!navItem?.children?.length ? (
          <CollapsableNav
            key={index}
            onClick={closeNavbar}
            primary={navItem?.title}
            links={navItem?.children}
            icon={navItem?.icon}
            root={navItem?.link}
          />
        ) : (
          <List key={index}>
            <Link to={navItem?.link}>
              <ListItemButton
                selected={navItem?.link === location.pathname}
                onClick={closeNavbar}
              >
                <ListItemIcon>{navItem?.icon}</ListItemIcon>
                <ListItemText primary={navItem?.title} />
              </ListItemButton>
            </Link>
          </List>
        ),
      )}
    </List>
  );
};

export default DrawList;
