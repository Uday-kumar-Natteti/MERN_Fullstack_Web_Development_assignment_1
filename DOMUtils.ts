  export function countElements(this: HTMLElement) {
    console.log(`Total elements inside <${this.tagName}>: ${this.children.length}`);
}
