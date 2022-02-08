import { __ } from "@wordpress/i18n";
import * as icons from "./icons";

const TEMPLATE_OPTIONS = [
  {
    title: __( 'Logo on the left side and one navigation menu', '__plugin_txtd' ),
    name: 'logo-left',
    icon: icons.logoLeft,
    template: [
      [ 'novablocks/logo' ],
      [ 'novablocks/navigation', {
        className: "novablocks-navigation novablocks-navigation--primary",
        slug: "primary"
      } ],
    ],
  },
  {
    title: __( 'Logo centered and one navigation menu on each side', '__plugin_txtd' ),
    name: 'logo-center',
    icon: icons.logoCenter,
    template: [
      [ 'novablocks/navigation', {
        className: "novablocks-navigation novablocks-navigation--primary",
        slug: "primary"
      } ],
      [ 'novablocks/logo' ],
      [ 'novablocks/navigation', {
        className: "novablocks-navigation novablocks-navigation--secondary",
        slug: "secondary"
      } ],
    ],
  }
];

export default TEMPLATE_OPTIONS;
