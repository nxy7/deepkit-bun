# Deepkit Framework + Bun starter

## Steps to reproduce this repo

- `bun create @deepkit/app`
- `bun install @deepkit/type @deepkit/type-compiler @deepkit/core @deepkit/bun typescript`
- add 'bunfig.toml' according to https://socket.dev/npm/package/@deepkit/bun

```toml
preload = ["@deepkit/bun"]

[install]
peer = true

[test]
preload = ["@deepkit/bun"]
```

## Available commands

- `bun run app`
- `bun run build` (currently has issues with bundling)

## Issues with bundling

Right now this repository has issues with bundling, I've had working `tsconfig.json` but somehow messed it up and cannot figure out what's the issue.
