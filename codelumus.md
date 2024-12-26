# CodeLumus - Brand Guidelines

## Logo
The primary logo of CodeLumus consists of two elements:
1. A code icon (Lucide React `Code2` icon)
2. The brand name in monospace font with code tag styling

### Code Icon
```jsx
// Using Lucide React Code2 icon
<Code2 className="text-blue-500 w-4 h-4" />
```

### Brand Name Display
```jsx
<span className="font-mono text-sm">
  <span className="text-gray-600">&lt;</span>
  <span className="text-blue-500">CodeLumus</span>
  <span className="text-gray-600">/&gt;</span>
</span>
```

### Typography
- Brand Name: "CodeLumus"
- Font Family: Monospace
- Font Size: Small (text-sm)
- Style: Wrapped in code tags (`<CodeLumus/>`)

### Colors
- Primary Color: Blue-500 (used for brand name and icon)
- Text Colors:
  - Brand Name: Blue-500
  - Code Tags: Gray-600
  - Badge Text: Gray-600

### Badge
- Background: Gray-100
- Text: "dev"
- Style: Rounded full, extra small text
```jsx
<span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full font-medium text-gray-600">dev</span>
```

## Social Media
- X (Twitter): [@codelumus](https://twitter.com/codelumus)

## Brand Elements
- Signature Text: "/* crafted with [energy-drink-icon] */"
- Energy Drink Icon: SVG icon sized at 16x16px (w-4 h-4)
- Font Style: Monospace
- Text Color: Gray-500
```jsx
<span className="font-mono text-gray-500 text-sm flex items-center">
  /* crafted with 
  <img src={energyDrinkIcon} alt="energy drink" className="w-4 h-4 ml-1" />
  */
</span>
```

## Watermark Component
```jsx
<a 
  href="https://twitter.com/CodeLumus" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg hover:bg-white/90 transition-all hover:shadow-xl"
>
  {/* Code Icon */}
  {/* Brand Name */}
  {/* Dev Badge */}
  {/* Signature */}
</a>
```

## Usage Guidelines
1. The logo should always include both the code icon and the brand name
2. Maintain the code tag styling around the brand name
3. Keep the monospace font for brand consistency
4. The "dev" badge is optional but recommended for development-related contexts
5. Social media links should use the hover animation with background and shadow transition
6. The energy drink icon should be used in place of traditional coffee emojis
7. Watermark should be positioned in the bottom-right corner with backdrop blur effect 