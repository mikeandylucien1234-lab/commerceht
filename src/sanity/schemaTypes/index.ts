import type { SchemaTypeDefinition } from "sanity";

import { localeString } from "./objects/localeString";
import { localeText } from "./objects/localeText";
import { post } from "./post";
import { documentResource } from "./document";
import { page } from "./page";
import { boardMember } from "./boardMember";
import { partner } from "./partner";
import { alliance } from "./alliance";
import { committee } from "./committee";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects
    localeString,
    localeText,
    // Documents
    post,
    documentResource,
    page,
    boardMember,
    partner,
    alliance,
    committee,
    siteSettings,
  ],
};
