# Deepkit Framework + Bun starter

## Steps to reproduce this repo

- `bun create @deepkit/app`
- `bun install @deepkit/type @deepkit/type-compiler @deepkit/core @deepkit/bun typescript`
- add 'bunfig.toml' according to https://socket.dev/npm/package/@deepkit/bun
- `bun install -D @types/bun` (needed for build.ts file)

```toml
preload = ["@deepkit/bun"]

[install]
peer = true

[test]
preload = ["@deepkit/bun"]
```

## Available commands

- `bun run app`
- `bun run build` - bundles the app into ./out/app.ks
