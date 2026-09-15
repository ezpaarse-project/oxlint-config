# @ezpaarse-project/oxlint-config

## How to use

### JavaScript

1. Add dev dependencies

```sh
npm i -D oxlint @ezpaarse-project/oxlint-config
```

2. Add base configuration to `extends`

You'll need to have the configuration file created.

You can refer to [documentation](https://oxc.rs/docs/guide/usage/linter/quickstart.html)

#### Using `.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": ["./node_modules/@ezpaarse-project/oxlint-config/js.config.jsonc"]
}
```

#### Using `oxlint.config.ts` / Vite+

```ts
import oxlintConfig from "@ezpaarse-project/oxlint-config/js";

export default defineConfig({
  extends: [oxlintConfig],
});
```

### TypeScript

1. Add dev dependencies

```sh
npm i -D oxlint @ezpaarse-project/oxlint-config
```

2. Add base configuration to `extends`

You'll need to have the configuration file created.

You can refer to [documentation](https://oxc.rs/docs/guide/usage/linter/quickstart.html)

#### Using `.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": ["./node_modules/@ezpaarse-project/oxlint-config/ts.config.jsonc"]
}
```

#### Using `oxlint.config.ts` / Vite+

```ts
import oxlintConfig from "@ezpaarse-project/oxlint-config/ts";

export default defineConfig({
  extends: [oxlintConfig],
});
```
