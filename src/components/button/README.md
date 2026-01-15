# Button

A Button Component.

## Todo

- [ ] Add `forwardRef()` all of the buttons.
- [x] Icons with better spacing. maybe add a prop for Icon and IconPosition
- [x] Add story that shows all button themes.

## Usage

### Basic `<Button />` usage

```tsx
<Button
  theme={"primary"}
  type={"button"}
  size={"md"}
  width={"standard"}
  onClick={(e) => clickFn(e)}
>
  Button Label
</Button>
```

### Buttons as a Link

To use a button as a link add the `.Link`. This will remove the `onClick` prop and add
a required `to` prop.

```tsx
<Button.Link
  to={"/link/path"}
>
  Button Label
</Button.Link>
```

### Buttons in Forms

To use a button in a form add the `.Submit` or `.Reset`. This will remove the `onClick` as a required prop.

```tsx
<Button.Submit>
  Submit
</Button.Submit>
<Button.Reset>
  Reset
</Button.Reset>
```

Use the `.Input` if you want to use a `<input type="button" />` in place of a `<button>`

```tsx
<Button.Input value={"100 tacos!"} />
```

## Properties

| property  | type                        | default    | description                                                 |
| --------- | --------------------------- | ---------- | ----------------------------------------------------------- |
| id        | string                      |            | Unique Identifier                                           |
| className | string                      |            | Custom class names                                          |
| theme     | ButtonThemeOptions          | "default"  | Determines the color and style of the button                |
| disabled  | boolean                     |            |                                                             |
| type      | "button", "submit", "reset" | "button"   |                                                             |
| size      | ButtonSizeOptions           | "md"       |                                                             |
| width     | ButtonWidthOptions          | "standard" |                                                             |
| active    | boolean                     |            |                                                             |
| iconLeft  | IconOptions                 |            |                                                             |
| iconRight | IconOptions                 |            |                                                             |
| onClick   | CallableFunction            |            |                                                             |
| to        | string                      |            | use instead of onclick to convert the button to a nav link. |
