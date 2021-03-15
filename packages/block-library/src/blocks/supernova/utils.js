import { CardsManager } from "@novablocks/block-editor";

export const cardsManagerAttributes = Object.fromEntries( CardsManager.toggles.map( toggle => {
  return [
    toggle.attribute,
    {
      type: 'string',
      default: true
    }
  ]
} ) );
