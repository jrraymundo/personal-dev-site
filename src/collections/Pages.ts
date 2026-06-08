import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
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
