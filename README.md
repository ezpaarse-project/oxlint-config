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

```sh
touch .oxlintrc.json
```

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": ["./node_modules/@ezpaarse-project/oxlint-config/js.jsonc"],
}
```

### TypeScript

1. Add dev dependencies

```sh
npm i -D oxlint oxlint-tsgolint @ezpaarse-project/oxlint-config
```

2. Add base configuration to `extends`

You'll need to have the configuration file created.

You can refer to [documentation](https://oxc.rs/docs/guide/usage/linter/quickstart.html)

```sh
touch .oxlintrc.json
```

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "extends": ["./node_modules/@ezpaarse-project/oxlint-config/ts.jsonc"],
}
```
