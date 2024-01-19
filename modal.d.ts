// custom.d.ts
declare global {
  interface HTMLElement {
    close: () => void;
    showModal: () => void;
  }
}

export {};
