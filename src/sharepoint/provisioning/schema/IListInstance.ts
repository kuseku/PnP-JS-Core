"use strict";

import { IFolder } from "./ifolder";
import { IListInstanceFieldRef } from "./ilistinstancefieldref";
import { IField } from "./ifield";
import { IView } from "./iview";
import { ISecurity } from "./isecurity";
import { IContentTypeBinding } from "./icontenttypebinding";

export interface IListInstance {
    Title: string;
    Url: string;
    Description: string;
    DocumentTemplate: string;
    OnQuickLaunch: boolean;
    TemplateType: number;
    EnableVersioning: boolean;
    EnableMinorVersions: boolean;
    EnableModeration: boolean;
    EnableFolderCreation: boolean;
    EnableAttachments: boolean;
    RemoveExistingContentTypes: boolean;
    RemoveExistingViews: boolean;
    NoCrawl: boolean;
    DefaultDisplayFormUrl: string;
    DefaultEditFormUrl: string;
    DefaultNewFormUrl: string;
    DraftVersionVisibility: string;
    ImageUrl: string;
    Hidden: boolean;
    ForceCheckout: boolean;
    ContentTypeBindings: Array<IContentTypeBinding>;
    FieldRefs: Array<IListInstanceFieldRef>;
    Fields: Array<IField>;
    Folders: Array<IFolder>;
    Views: Array<IView>;
    DataRows: Array<Object>;
    Security: ISecurity;
}
