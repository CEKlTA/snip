# snip
## Parse HTML Template Literals into DOM Elements

`snip` is a lightweight JavaScript utility that allows you to parse HTML-like template literals into DOM elements effortlessly. This package is ideal for developers looking to dynamically create and manipulate DOM elements without relying on complex or heavy templating libraries.

#### Features
- **Dynamic HTML Parsing**: Converts template literals with embedded expressions directly into DOM elements.
- **Lightweight**: No external dependencies—just pure JavaScript.
- **Convenient Syntax**: Leverages template literals for clean and intuitive DOM creation.

#### Installation
```bash
npm install snip
```

#### Usage
```javascript
import snip from 'snip';

const elements = snip`
  <div>Hello, ${'World'}!</div>
  <span>${'Dynamic Content'}</span>
`;

console.log(elements);
// Output: [<div>Hello, World!</div>, <span>Dynamic Content</span>]
```

#### API

##### `snip(str, ...args)`
- **Parameters**:
  - `str` (`TemplateStringsArray`): Template strings array from a tagged template literal.
  - `...args` (`any`): Values to interpolate into the template strings.
- **Returns**: An array of `HTMLElement` objects parsed from the provided HTML-like string.

#### Example: Reusable Function with `snip`
Create a reusable function to generate a list of items dynamically:

```javascript
import snip from 'snip';

function createList(items) {
  return snip`
    <ul>
      ${items.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;
}

const list = createList(['Item 1', 'Item 2', 'Item 3']);
document.body.append(...list);
```

#### Why `snip`?
- Simplifies the process of turning HTML-like strings into DOM elements.
- Reduces boilerplate code for dynamic content generation.
- Perfect for small projects or as a utility in larger applications.

#### License
This project is open-source and available under the [MIT License](LICENSE). Contributions are welcome!
