# Deepkit Framework + Bun starter

## Steps to reproduce this repo

- `bun create @deepkit/app`
- `bun install @deepkit/type @deepkit/type-compiler @deepkit/core @deepkit/bun typescript`
- add 'bunfig.toml' according to https://socket.dev/npm/package/@deepkit/bun

```toml
preload = ["@deepkit/bun"]

[install]
peer = true
```
