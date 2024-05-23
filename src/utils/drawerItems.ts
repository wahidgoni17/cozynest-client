import { USERROLE } from "@/constants/userRole";
import { DrawerItem, UserRole } from "@/types";
//icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USERROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: ``,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage_users`,
          icon: GroupIcon,
        }
      );
      break;

    case USERROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: ``,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage_users`,
          icon: GroupIcon,
        },
        {
          title: "Manage Flats",
          path: `${role}/manage_flats`,
          icon: GroupIcon,
        }
      );
      break;

    case USERROLE.USER:
      roleMenus.push(
        {
          title: "Dashboard",
          path: ``,
          icon: DashboardIcon,
        },
        {
          title: "My Flats",
          path: `${role}/my_flats`,
          icon: CalendarMonthIcon,
        },
        {
          title: "My Request",
          path: `${role}/my_flat_request`,
          icon: CalendarMonthIcon,
        }
      );
    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};
