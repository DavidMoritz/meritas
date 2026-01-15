# ButtonRow

A container for wrapping multiple buttons and adding even space between them. Buttons will auto wrap, and become block buttons at xs screen width.

## Todo

- [ ] CSS Container query to make all the buttons block/full-width on mobile

## Usage

```tsx
<ButtonRow align={"right"}>
  <Button>Submit</Button>
  <Button>Cancel</Button>
</ButtonRow>
```

## Properties

| property  | type                | default | description                                          |
| --------- | ------------------- | ------- | ---------------------------------------------------- |
| id        | string              |         | Unique Identifier                                    |
| className | string              |         | Custom class names                                   |
| align     | left, center, right | left    | Aligns the buttons inside the the ButtonGroup.       |
| noWrap    | boolean             | false   | Prevents the buttons from wrapping to the next line. |
