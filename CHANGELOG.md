# Changelog

## [0.0.2] - 2023-01-03

### Added

- Split app into modules: CartModule, ProductModule, OrdersModule, SharedModule;
- TaiwindCSS and Angular Material for styling application;
- Angular Material components in SharedModule;
- Highlight directive
- Possibility to add product to Cart in ProductComponent with button, disable button if there is no product available in ProductModel;
- CartListComponent split with CartItemComponent for showing one cart item;
- totalCost and totalQuantity feature in CartService and in CartListComponent view;
- feature for plus, minus quantity of product or delete item in CartItemComponent;
- ChangeDetectionStrategy changed to OnPush in ProductComponent and CartItemComponent;
- Header in root AppComponent view;
- Changed background on hover in CartItemComponent items with HighlightDirective in SharedModule;
- Two routes in RoutingModule - "/products" and "/cart" and default route redirecting to "/products";


### Changed

- ProductListComponent view items via ProductComponent;
- CartListComponent shows added items;

## [0.0.1] - 2022-12-19

### Added 

- FirstComponent with some primitive fields and few array fields;
- ProductComponent with "Buy" button and click handler which logs to console message. Added to ProductListComponent template;
- ProductsService with getProducts method which returns products;
- ProductModel interface;
- Array with some mock products corresponding ProductModel;
- Display products in ProductListComponent via ProductsService;
- CartListComponent displaying cart list via CartService;