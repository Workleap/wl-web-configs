export const javaScriptFiles = [
    "**/*.js?(x)",
    "**/*.[cm]js"
];

export const typeScriptFiles = [
    "**/*.ts?(x)"
];

export const sourceFiles = [
    ...javaScriptFiles,
    ...typeScriptFiles
];

export const testFiles = [
    "**/*.test.[jt]s",
    "**/*-test.[jt]s",
    "**/__tests__/*.[jt]s",
    "**/test.[jt]s"
];

export const reactTestFiles = [
    "**/*.test.[jt]sx",
    "**/*-test.[jt]sx",
    "**/__tests__/*.[jt]sx",
    "**/test.[jt]sx"
];

export const storybookFiles = [
    "**/*.(stories|storybook|story|chroma).[jt]s?(x)"
];

export const mainStorybookFiles = [
    "**/*.storybook/main.@(js|cjs|mjs|ts)",
    "**/storybook/main.@(js|cjs|mjs|ts)"
];

export const mdxFiles = [
    "**/*.mdx"
];
