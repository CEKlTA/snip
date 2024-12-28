/**
 * A utility function that takes a template literal with embedded expressions
 * and parses it into an array of HTML elements.
 * 
 * @module snip
 */

const parser = new DOMParser();

/**
 * Parses a template literal containing HTML-like strings into an array of DOM elements.
 *
 * @param {TemplateStringsArray} str - The template strings array (from a tagged template literal).
 * @param {...any} args - The values to interpolate within the template strings.
 * @returns {HTMLElement[]} - An array of DOM elements parsed from the resulting HTML string.
 *
 * @example
 * import snip from 'snip';
 *
 * const elements = snip`
 *   <div>Hello, ${'World'}!</div>
 *   <span>${'Dynamic Content'}</span>
 * `;
 *
 * console.log(elements); // [<div>Hello, World!</div>, <span>Dynamic Content</span>]
 */
export default function snip(str, ...args) {
    return Array.from(parser.parseFromString(str.map((s, index) => s + (args[index] || '')).join(''), "text/html").body.children);
}