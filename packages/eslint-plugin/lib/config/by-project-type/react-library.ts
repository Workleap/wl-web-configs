import type { Linter } from "eslint";
import { sourceFiles } from "../../utils/patterns";

const config: Linter.Config = {
    extends: [
        "plugin:@workleap/core",
        "plugin:@workleap/typescript",
        "plugin:@workleap/react",
        "plugin:@workleap/jest",
        "plugin:@workleap/testing-library",
        "plugin:@workleap/storybook"
    ],
    overrides: [
        {
            files: sourceFiles,
            plugins: ["@workleap"],
            rules: {
                // Custom WorkLeap rules
                "@workleap/strict-css-modules-names": "warn"
            }
        }
    ]
};

export = config;
