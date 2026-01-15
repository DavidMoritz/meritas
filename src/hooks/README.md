# /hooks

Folder containing all hooks that are used or could be used in more than one spot.

## Creating a new hook

### Naming hooks

### Generating from the CLI

All hooks should be generated from the command line with `generate-react-cli`.

\*See the `README.md` file in the `/teamplats` directory for detailed instructions on how to build a hook from the CLI.

You can use the following command to create a hook

```bash
npx generate-react-cli component --type=hook <Component Name>
```

## Hook Architecture

```
+-- <HookName>
	|-- <HookName>.(ts|txs)
	|-- <HookName>.schema.ts (optional)
  |-- <HookName>.test.(ts|txs)
  |-- README.md
```
