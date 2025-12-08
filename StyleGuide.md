# Enhancv Style Guide Reference

This document provides a comprehensive reference for using the `enhancv-styleguide` package. Use these components, colors, and utilities instead of writing custom implementations.

## Installation & Import

```typescript
// Components
import { Button, Input, Icon, Modal, Checkbox } from 'enhancv-styleguide';

// Utilities
import { useIsInBreakpoint, isInBreakpoint } from 'enhancv-styleguide';

// SCSS Variables (in .scss files)
@import '~enhancv-styleguide/src/shared/variables';
```

---

## Components

### Button

```tsx
import { Button } from 'enhancv-styleguide';

// Primary buttons (filled)
<Button color="green">Save</Button>
<Button color="purple">Continue</Button>
<Button color="red">Delete</Button>
<Button color="grey">Cancel</Button>
<Button color="white">Back</Button>

// Secondary buttons (outlined)
<Button color="green" primary={false}>Save</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>  {/* default */}
<Button size="large">Large</Button>

// With icons
<Button leftIcon="icon-fi-plus">Add Item</Button>
<Button rightIcon="icon-fi-arrow-right">Next</Button>

// Full width
<Button fluid>Full Width Button</Button>

// As link
<Button href="/dashboard">Go to Dashboard</Button>

// Disabled
<Button disabled>Cannot Click</Button>
```

**Props:**
- `color`: "green" | "purple" | "red" | "grey" | "white" (default: "green")
- `size`: "small" | "medium" | "large" (default: "medium")
- `primary`: boolean (default: true) - filled vs outlined
- `fluid`: boolean - full width
- `leftIcon` / `rightIcon`: string - icon class name
- `href`: string - renders as `<a>` tag
- `preserveCasing`: boolean - prevent uppercase transform

### IconButton

```tsx
import { IconButton, Icon } from 'enhancv-styleguide';

<IconButton title="Edit" titlePosition="bottom">
  <Icon icon="icon-fi-edit" />
</IconButton>

// Sizes
<IconButton size="sm">...</IconButton>
<IconButton size="md">...</IconButton>  {/* default */}
<IconButton size="lg">...</IconButton>

// Non-primary (outlined)
<IconButton primary={false}>...</IconButton>
```

**Props:**
- `size`: "sm" | "md" | "lg" (default: "md")
- `primary`: boolean (default: true)
- `title`: string - tooltip text
- `titlePosition`: "top" | "left" | "right" | "bottom" (default: "bottom")
- `disabled`: boolean

### LinkButton

```tsx
import { LinkButton } from 'enhancv-styleguide';

<LinkButton href="/learn-more">Learn More</LinkButton>

// Sizes
<LinkButton size="xsmall">Tiny Link</LinkButton>
<LinkButton size="small">Small Link</LinkButton>
<LinkButton size="medium">Medium Link</LinkButton>  {/* default */}
<LinkButton size="large">Large Link</LinkButton>

// Without arrow icon
<LinkButton showArrowIcon={false}>Plain Link</LinkButton>

// External link (shows external link icon)
<LinkButton showIconTargetBlank href="https://example.com" target="_blank">
  External Site
</LinkButton>
```

### CopyButton

```tsx
import { CopyButton } from 'enhancv-styleguide';

<CopyButton copyContent="Text to copy" />
<CopyButton copyContent="Text to copy" size="sm" />
```

### Input

```tsx
import { Input } from 'enhancv-styleguide';

<Input label="Email" name="email" placeholder="Enter email" />

// Sizes
<Input size="small" />
<Input size="medium" />  {/* default */}
<Input size="large" />

// Full width
<Input fluid />

// With error
<Input error="This field is required" />

// With icon
<Input
  icon={{
    icon: "icon-fi-search",
    position: "left"
  }}
/>

// Clickable icon
<Input
  icon={{
    icon: "icon-fi-eye",
    position: "right",
    onClick: () => togglePasswordVisibility()
  }}
/>
```

**Props:**
- `label`: string
- `size`: "small" | "medium" | "large"
- `fluid`: boolean
- `error`: string
- `icon`: { icon: string, position?: "left" | "right", onClick?: () => void }
- All standard input HTML attributes

### Textarea

```tsx
import { Textarea } from 'enhancv-styleguide';

<Textarea
  required={false}
  label="Description"
  placeholder="Enter description"
  rows={4}
/>

// Resizable
<Textarea required={false} resize />
```

### Checkbox

```tsx
import { Checkbox } from 'enhancv-styleguide';

<Checkbox
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  label="I agree to terms"
/>

// Sizes
<Checkbox size="sm" checked={checked} />  {/* default */}
<Checkbox size="md" checked={checked} />
<Checkbox size="lg" checked={checked} />

// Partial/indeterminate state
<Checkbox checked={false} partialChecked />
```

### RadioButton

```tsx
import { RadioButton } from 'enhancv-styleguide';

<RadioButton
  checked={selected === 'option1'}
  label="Option 1"
  onClick={() => setSelected('option1')}
/>
```

### ToggleButton

```tsx
import { ToggleButton } from 'enhancv-styleguide';

<ToggleButton
  value={isEnabled}
  onChange={(value) => setIsEnabled(value)}
  label={<span>Enable notifications</span>}
/>

// Small variant
<ToggleButton value={value} onChange={onChange} small />

// Flipped (toggle on left, label on right)
<ToggleButton value={value} onChange={onChange} flipped />

// Full width
<ToggleButton value={value} onChange={onChange} fullWidth />
```

### SelectDropdown

```tsx
import { SelectDropdown } from 'enhancv-styleguide';

const options = [
  { value: 'opt1', text: 'Option 1' },
  { value: 'opt2', text: 'Option 2' },
  { value: 'opt3', text: 'Option 3' },
];

<SelectDropdown
  options={options}
  value={selectedValue}
  onChange={(value) => setSelectedValue(value)}
  label="Select an option"
/>

// Full width
<SelectDropdown options={options} onChange={onChange} fullWidth />
```

### Icon

```tsx
import { Icon } from 'enhancv-styleguide';

<Icon icon="icon-fi-home" />
<Icon icon="icon-fi-settings" className="text-rg" />
<Icon icon="icon-fi-chevron-right" onClick={handleClick} />
```

**Common icons:**
- `icon-fi-home`, `icon-fi-settings`, `icon-fi-user`
- `icon-fi-plus`, `icon-fi-minus`, `icon-fi-x`
- `icon-fi-edit`, `icon-fi-trash`, `icon-fi-copy`
- `icon-fi-search`, `icon-fi-filter`
- `icon-fi-chevron-left`, `icon-fi-chevron-right`, `icon-fi-chevron-down`, `icon-fi-chevron-up`
- `icon-fi-arrow-left`, `icon-fi-arrow-right`, `icon-fi-arrow-up`, `icon-fi-arrow-down`
- `icon-fi-check`, `icon-fi-alert-circle`, `icon-fi-info`
- `icon-fi-external-link`, `icon-fi-download`, `icon-fi-upload`
- `icon-fi-eye`, `icon-fi-eye-off`
- `icon-fa-circle-notch-solid-1` (spinner)

### Loader

```tsx
import { Loader } from 'enhancv-styleguide';

<Loader />
<Loader size="small" />
<Loader size="medium" />  {/* default */}
<Loader size="large" />
```

### Modal

```tsx
import { Modal } from 'enhancv-styleguide';

{isOpen && (
  <Modal onClose={() => setIsOpen(false)} size="md">
    <h2>Modal Title</h2>
    <p>Modal content goes here</p>
  </Modal>
)}

// Sizes
<Modal size="xs" onClose={onClose}>...</Modal>
<Modal size="sm" onClose={onClose}>...</Modal>
<Modal size="md" onClose={onClose}>...</Modal>  {/* default */}
<Modal size="lg" onClose={onClose}>...</Modal>
<Modal size="xl" onClose={onClose}>...</Modal>
<Modal size="full" onClose={onClose}>...</Modal>

// Hide close button
<Modal onClose={onClose} isCloseButtonHidden>...</Modal>
```

### DialogModal

```tsx
import { DialogModal, DialogModalButtons } from 'enhancv-styleguide';

<DialogModal
  title="Confirm Action"
  description="Are you sure you want to proceed?"
  onClose={() => setIsOpen(false)}
  buttons={
    <DialogModalButtons>
      <Button color="grey" primary={false} onClick={onClose}>Cancel</Button>
      <Button color="green" onClick={onConfirm}>Confirm</Button>
    </DialogModalButtons>
  }
/>
```

### PopupModal

```tsx
import { PopupModal, PopupModalButtons } from 'enhancv-styleguide';

<PopupModal
  title="Success!"
  description="Your changes have been saved."
  onClose={() => setIsOpen(false)}
  buttons={
    <PopupModalButtons>
      <Button onClick={onClose}>Got it</Button>
    </PopupModalButtons>
  }
/>
```

### Breadcrumb

```tsx
import { Breadcrumb } from 'enhancv-styleguide';

const paths = [
  { name: 'Home', url: '/', isHome: true },
  { name: 'Products', url: '/products' },
  { name: 'Category', url: '/products/category' },
];

<Breadcrumb paths={paths} />
```

### MultiSlider / Slider

```tsx
import { MultiSlider, Slider } from 'enhancv-styleguide';

<MultiSlider
  options={5}
  option={currentOption}
  onChange={(option) => setCurrentOption(option)}
  labelLeft="Small"
  labelRight="Large"
/>

// For font size selection
<MultiSlider
  options={5}
  option={fontSize}
  onChange={setFontSize}
  isForFontSize
/>
```

### CustomScrollbar

```tsx
import { CustomScrollbar } from 'enhancv-styleguide';

<CustomScrollbar height="300px">
  {/* Long content here */}
</CustomScrollbar>
```

---

## Colors

### Primary Colors
| Variable | Hex | Usage |
|----------|-----|-------|
| `$primary` | `#2dc08d` | Success, confirmations, primary actions |
| `$secondary` | `#8c7cdb` | Links, secondary actions |
| `$danger` | `#ff576f` | Errors, destructive actions |
| `$warning` | `#feb251` | Warnings, alerts |
| `$info` | `#3f9cdc` | Informational |
| `$white` | `#ffffff` | Backgrounds |
| `$black` | `#000000` | Text |

### Hover States
| Variable | Hex |
|----------|-----|
| `$primary-hover` | `#57cda4` |
| `$secondary-hover` | `#a396e2` |
| `$danger-hover` | `#ff687d` |
| `$info-hover` | `#52a6df` |
| `$warning-hover` | `#feba62` |

### Active States
| Variable | Hex |
|----------|-----|
| `$primary-active` | `#249a71` |
| `$secondary-active` | `#5f4dc7` |
| `$danger-active` | `#d94a5e` |
| `$info-active` | `#3685bb` |
| `$warning-active` | `#d89745` |

### Transparent Variants (10%, 20%, 30% opacity)
- `$primary-10`, `$primary-20`, `$primary-30`
- `$secondary-10`, `$secondary-20`, `$secondary-30`
- `$danger-10`, `$danger-20`, `$danger-30`
- `$info-10`, `$info-20`, `$info-30`
- `$warning-10`, `$warning-20`, `$warning-30`

### Background Colors
| Variable | Hex | Usage |
|----------|-----|-------|
| `$surface` | `#ffffff` | Cards, panels |
| `$page` | `#f5f7fc` | Page background |
| `$page-alt` | `#fafbfd` | Alternate page background |
| `$accent` | `#e3e9f5` | Light accents |

### Text Colors
| Variable | Hex | Usage |
|----------|-----|-------|
| `$heading` | `#2d3639` | Headings |
| `$paragraph` | `#384347` | Body text |
| `$label` | `#60696c` | Labels, secondary text |
| `$caption` | `#afb4b5` | Captions, hints |
| `$subtext` | `#d8d9db` | Disabled, placeholder |

### Color Classes
```html
<!-- Text colors -->
<span class="text-primary">Green text</span>
<span class="text-secondary">Purple text</span>
<span class="text-danger">Red text</span>
<span class="text-heading">Heading color</span>
<span class="text-paragraph">Paragraph color</span>
<span class="text-label">Label color</span>

<!-- Background colors -->
<div class="bg-primary">Green background</div>
<div class="bg-secondary">Purple background</div>
<div class="bg-page">Page background</div>
<div class="bg-surface">White surface</div>

<!-- Border colors -->
<div class="border border-primary">Green border</div>
<div class="border border-danger">Red border</div>
```

---

## Typography

### Heading Classes
```html
<h1 class="h1">Heading 1 - 58px</h1>
<h2 class="h2">Heading 2 - 48px</h2>
<h3 class="h3">Heading 3 - 38px</h3>
<h4 class="h4">Heading 4 - 32px</h4>
<h5 class="h5">Heading 5 - 26px</h5>
<h6 class="h6">Heading 6 - 22px</h6>
<span class="h7">Heading 7 - 14px</span>
```

### Text Size Classes
```html
<p class="text-lg">Large text - 20px</p>
<p class="text-md">Medium text - 18px</p>
<p class="text-rg">Regular text - 16px</p>
<p class="text-sm">Small text - 14px</p>
<p class="text-xs">Extra small - 12px</p>
<p class="text-xs-min">Minimum - 10px</p>
```

### Font Weight
```html
<span class="font-weight-300">Light</span>
<span class="font-weight-400">Regular</span>
<span class="font-weight-500">Medium</span>
<span class="font-weight-600">Semi-bold</span>
<span class="font-weight-700">Bold</span>
```

### Text Utilities
```html
<!-- Alignment -->
<p class="text-left">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>

<!-- Transform -->
<span class="text-transform-uppercase">UPPERCASE</span>
<span class="text-transform-lowercase">lowercase</span>
<span class="text-transform-capitalize">Capitalize</span>

<!-- Decoration -->
<span class="text-decoration-underline">Underlined</span>
<span class="text-decoration-line-through">Strikethrough</span>

<!-- Style -->
<span class="text-italic">Italic text</span>

<!-- Links -->
<a class="link-default">Styled link</a>
```

### SCSS Mixins
```scss
@import '~enhancv-styleguide/src/shared/typography';

.custom-heading {
  @include h3;
}

.custom-text {
  @include text-regular;
}
```

---

## Spacing

Base unit: `8px`

### Margin Classes
```html
<!-- All sides: m-{0-12} (0 = 0px, 1 = 8px, 2 = 16px, ... 12 = 96px) -->
<div class="m-2">16px margin all sides</div>
<div class="m-4">32px margin all sides</div>

<!-- Directional -->
<div class="m-top-2">16px margin top</div>
<div class="m-bottom-3">24px margin bottom</div>
<div class="m-left-1">8px margin left</div>
<div class="m-right-2">16px margin right</div>

<!-- Axis -->
<div class="m-inline-2">16px margin left + right</div>
<div class="m-block-2">16px margin top + bottom</div>

<!-- Auto -->
<div class="m-auto">margin: auto</div>
<div class="m-inline-auto">margin: 0 auto (center)</div>

<!-- Negative -->
<div class="-m-1">-8px margin</div>

<!-- Reset -->
<div class="m-no">margin: 0</div>
<div class="m-top-no">margin-top: 0</div>
```

### Padding Classes
```html
<!-- All sides: p-{0-12} -->
<div class="p-2">16px padding all sides</div>
<div class="p-4">32px padding all sides</div>

<!-- Directional -->
<div class="p-top-2">16px padding top</div>
<div class="p-bottom-3">24px padding bottom</div>
<div class="p-left-1">8px padding left</div>
<div class="p-right-2">16px padding right</div>

<!-- Axis -->
<div class="p-inline-2">16px padding left + right</div>
<div class="p-block-2">16px padding top + bottom</div>

<!-- Reset -->
<div class="p-no">padding: 0</div>
```

---

## Flexbox & Grid

### Flex Container
```html
<div class="flex">Flex container (row wrap)</div>
<div class="flex flex-nowrap">No wrap</div>
<div class="flex flex-direction-column">Column direction</div>
```

### Alignment
```html
<!-- Align items (cross axis) -->
<div class="flex flex-align-start">...</div>
<div class="flex flex-align-center">...</div>
<div class="flex flex-align-end">...</div>
<div class="flex flex-align-stretch">...</div>
<div class="flex flex-align-baseline">...</div>

<!-- Justify content (main axis) -->
<div class="flex flex-justify-start">...</div>
<div class="flex flex-justify-center">...</div>
<div class="flex flex-justify-end">...</div>
<div class="flex flex-justify-space-between">...</div>
<div class="flex flex-justify-space-around">...</div>
<div class="flex flex-justify-space-evenly">...</div>

<!-- Align self (individual item) -->
<div class="flex-align-self-center">...</div>
<div class="flex-align-self-start">...</div>
<div class="flex-align-self-end">...</div>
```

### Column System (12 columns)
```html
<div class="flex">
  <div class="col">Equal width</div>
  <div class="col">Equal width</div>
</div>

<div class="flex">
  <div class="col-4">4/12 (33%)</div>
  <div class="col-8">8/12 (67%)</div>
</div>

<div class="flex">
  <div class="col-auto">Auto width</div>
  <div class="col-fluid">Fill remaining</div>
</div>
```

### Gap
```html
<div class="flex gap-2">16px gap</div>
<div class="flex gap-row-2">16px row gap only</div>
<div class="flex gap-column-2">16px column gap only</div>
```

### Order
```html
<div class="order-first">Shows first</div>
<div class="order-last">Shows last</div>
```

---

## Display & Visibility

```html
<div class="display-none">Hidden</div>
<div class="display-block">Block</div>
<div class="display-inline">Inline</div>
<div class="display-inline-block">Inline block</div>

<!-- Responsive hiding -->
<div class="display-none-xs">Hidden on mobile</div>
<div class="display-none-md">Hidden on tablet</div>
```

---

## Borders & Radius

```html
<!-- Border -->
<div class="border">1px solid border</div>
<div class="border border-primary">Green border</div>

<!-- Border radius -->
<div class="border-rounded-0">4px radius</div>
<div class="border-rounded-1">8px radius</div>
<div class="border-rounded-2">12px radius</div>
<div class="border-rounded-3">16px radius</div>
<div class="border-rounded-4">20px radius</div>
<div class="border-rounded-5">50px radius (pill)</div>
<div class="border-rounded">50% (circle)</div>
```

---

## Shadows

```html
<div class="shadow-default">Default shadow</div>
<div class="shadow-hover">Hover shadow</div>
<div class="shadow-flat">Flat shadow</div>
```

### SCSS Variables
```scss
$shadow-default: 0px 4px 8px rgba(0, 0, 0, 0.1);
$shadow-hover: 0px 2px 20px rgba(0, 0, 0, 0.1);
$shadow-flat: 1px 1px 1px rgba(231, 228, 228, 0.5);
```

---

## Animations

### Fade
```html
<div class="animation-fade-in">Fade in</div>
<div class="animation-fade-out">Fade out</div>
```

### Slide
```html
<div class="animation-slide-in-down">Slide in from top</div>
<div class="animation-slide-in-up">Slide in from bottom</div>
<div class="animation-slide-in-left">Slide in from right</div>
<div class="animation-slide-in-right">Slide in from left</div>
```

### Combined Slide & Fade
```html
<div class="animation-slide-fade-in-down">...</div>
<div class="animation-slide-fade-in-up">...</div>
```

### Interactive
```html
<div class="animation-zoom-on-hover">Scale on hover</div>
<div class="animation-opacity-on-hover">Fade on hover</div>
<div class="animation-rotate-on-hover-45">Rotate 45° on hover</div>
```

### Timing
```html
<!-- Delays -->
<div class="animation-fade-in animation-delay-200ms">...</div>
<div class="animation-fade-in animation-delay-500ms">...</div>

<!-- Durations -->
<div class="animation-fade-in animation-duration-500ms">...</div>
<div class="animation-fade-in animation-duration-1s">...</div>
```

---

## Utility Classes

### Cards
```html
<div class="card-default">Card with shadow and hover effect</div>
<div class="card-flat">Flat card with border</div>
<div class="card-disabled">Disabled card</div>
```

### Cursor
```html
<div class="cursor-pointer">Clickable</div>
<div class="cursor-not-allowed">Disabled</div>
```

### Sizing
```html
<div class="full-width">width: 100%</div>
<div class="full-height">height: 100%</div>
```

### Overflow
```html
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-x-hidden">Hidden horizontal overflow</div>
<div class="overflow-y-hidden">Hidden vertical overflow</div>
```

### Opacity
```html
<div class="opacity-0">Invisible</div>
<div class="opacity-50">50% opacity</div>
<div class="opacity-1">Fully visible</div>
```

### Z-Index
```html
<div class="z-index-1">z-index: 1</div>
<div class="z-index-2">z-index: 2</div>
<div class="z-index-3">z-index: 3</div>
<div class="z-index-4">z-index: 4</div>
```

---

## Responsive Design

### Breakpoints
| Suffix | Range | Description |
|--------|-------|-------------|
| `-xs` | < 480px | Phones |
| `-sm` | 481px - 768px | Large phones, small tablets |
| `-xsm` | < 768px | All mobile |
| `-md` | 769px - 992px | Tablets |
| `-lg` | 993px - 1200px | Small laptops |
| `-xl` | > 1200px | Desktops |
| `-mxl` | > 768px | Tablets and up |

### Responsive Classes
Almost all utility classes support responsive suffixes:

```html
<!-- Hidden on mobile, visible on desktop -->
<div class="display-none-xs display-block-md">...</div>

<!-- Full width on mobile, half width on desktop -->
<div class="col-12-xs col-6-md">...</div>

<!-- Column on mobile, row on desktop -->
<div class="flex flex-direction-column-xs flex-direction-row-md">...</div>

<!-- Different spacing per breakpoint -->
<div class="m-2-xs m-4-md m-6-xl">...</div>

<!-- Different text sizes -->
<h1 class="h3-xs h2-md h1-xl">Responsive Heading</h1>
```

### useIsInBreakpoint Hook
```tsx
import { useIsInBreakpoint } from 'enhancv-styleguide';

function Component() {
  const isMobile = useIsInBreakpoint('xs');
  const isTablet = useIsInBreakpoint('md');

  return isMobile ? <MobileView /> : <DesktopView />;
}
```

### isInBreakpoint Function
```tsx
import { isInBreakpoint } from 'enhancv-styleguide';

if (isInBreakpoint('xs')) {
  // Mobile logic
}
```

---

## Quick Reference

### Common Patterns

**Centered flex container:**
```html
<div class="flex flex-align-center flex-justify-center">...</div>
```

**Space between items:**
```html
<div class="flex flex-justify-space-between flex-align-center">...</div>
```

**Responsive two-column layout:**
```html
<div class="flex gap-3">
  <div class="col-12-xs col-6-md">Left</div>
  <div class="col-12-xs col-6-md">Right</div>
</div>
```

**Card with padding:**
```html
<div class="card-default p-3 border-rounded-1">
  Content
</div>
```

**Form field with error:**
```tsx
<Input
  label="Email"
  error={errors.email}
  fluid
/>
```

**Modal with dialog:**
```tsx
{showModal && (
  <DialogModal
    title="Confirm"
    description="Are you sure?"
    onClose={() => setShowModal(false)}
    buttons={
      <DialogModalButtons>
        <Button primary={false} onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button onClick={handleConfirm}>Confirm</Button>
      </DialogModalButtons>
    }
  />
)}
```
