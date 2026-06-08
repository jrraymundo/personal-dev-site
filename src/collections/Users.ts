import type { CollectionConfig } from "payload";
import { isAdmin, isAdminField } from "@/access/isAdmin";
import { isAdminOrSelf } from "@/access/isAdminOrSelf";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: "roles",
      type: "select",
      required: true,
      hasMany: true,
      defaultValue: "editor",
      access: {
        create: isAdminField,
        update: isAdminField,
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
    },
  ],
};
