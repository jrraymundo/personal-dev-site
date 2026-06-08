import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    meta: {
      title: "Pages Collection",
      description: "Collection for site pages",
    },
    useAsTitle: "title",
    preview: (doc) => `/${doc.slug}`,
  },
  access: {
    // read: isAdminOrSelf,
    // create: isAdmin,
    // update: isAdminOrSelf,
    // delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
};
