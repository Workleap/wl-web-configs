import type { Options as TsupConfig } from "tsup";
import { applyTransformers, type TsupConfigTransformer } from "./applyTransformers.ts";

export interface DefineBuildConfigOptions extends TsupConfig {
    transformers?: TsupConfigTransformer[];
}

export function defineBuildConfig(options: DefineBuildConfigOptions = {}) {
    const {
        transformers = [],
        ...rest
    } = options;

    const config: TsupConfig = {
        clean: true,
        dts: true,
        treeshake: true,
        entry: ["./src"],
        outDir: "./dist",
        format: "esm",
        target: "esnext",
        platform: "browser",
        ...rest
    };

    const transformedConfig = applyTransformers(config, transformers, {
        environment: "build"
    });

    return transformedConfig;
}

