export const Pallette = {
  baby_powder: {
    DEFAULT: '#ffff95',
    100: '#656500',
    200: '#caca00',
    300: '#ffff30',
    400: '#ffff95',
    500: '#fffffa',
    600: '#fffffb',
    700: '#fffffc',
    800: '#fffffd',
    900: '#fffffe',
  },
  vermilion: {
    DEFAULT: '#ff312e',
    100: '#3c0100',
    200: '#780200',
    300: '#b50300',
    400: '#f10400',
    500: '#ff312e',
    600: '#ff5b58',
    700: '#ff8482',
    800: '#ffadab',
    900: '#ffd6d5',
  },
  pine_green: {
    DEFAULT: '#157a6e',
    100: '#041816',
    200: '#08312c',
    300: '#0c4942',
    400: '#116258',
    500: '#157a6e',
    600: '#1fb9a7',
    700: '#43dfcd',
    800: '#81eade',
    900: '#c0f4ee',
  },
  shamrock_green: {
    DEFAULT: '#499f68',
    100: '#0e1f15',
    200: '#1d3f29',
    300: '#2b5e3e',
    400: '#3a7e53',
    500: '#499f68',
    600: '#65b884',
    700: '#8ccaa3',
    800: '#b2dcc1',
    900: '#d9ede0',
  },
  cambridge_blue: {
    DEFAULT: '#77b28c',
    100: '#15261b',
    200: '#2b4c36',
    300: '#407251',
    400: '#55976c',
    500: '#77b28c',
    600: '#91c1a2',
    700: '#add1b9',
    800: '#c8e0d1',
    900: '#e4f0e8',
  },
  ash_gray: {
    DEFAULT: '#c2c5bb',
    100: '#272923',
    200: '#4f5346',
    300: '#767c6a',
    400: '#9ca191',
    500: '#c2c5bb',
    600: '#ced0c8',
    700: '#dadcd6',
    800: '#e6e8e3',
    900: '#f3f3f1',
  },
  burnt_sienna: {
    DEFAULT: '#e26d5a',
    100: '#360f09',
    200: '#6c1f13',
    300: '#a12e1c',
    400: '#d73e26',
    500: '#e26d5a',
    600: '#e88a7b',
    700: '#eea79c',
    800: '#f3c4bd',
    900: '#f9e2de',
  },
} as const;

// export const Light = {
//     primary: '#157a6e', // Teal
//     secondary: '#499f68', // Green
//     tertiary: '#77b28c', // Light green
//     neutral: '#f5f5f5', // Light gray (background)
//     neutralLight: '#ffffff', // White (cards, surfaces)
//     accent: '#e26d5a', // Coral red
//     text: '#1a1a1a', // Dark text
//     textSecondary: '#2e2e2e', // Slightly lighter dark text
//   };

//   export const Dark = {
//     primary: '#0d5c54', // Darker teal
//     secondary: '#2e7d5a', // Darker green
//     tertiary: '#4a8d6e', // Darker light green
//     neutral: '#1a1a1a', // Very dark gray (background)
//     neutralLight: '#2e2e2e', // Slightly lighter gray (cards, surfaces)
//     accent: '#d9534f', // Slightly darker coral red
//     text: '#f5f5f5', // Light text (white-ish)
//     textSecondary: '#c2c5bb', // Original neutral color for secondary text
//   };
// export const Light = {
//   primary: Pallette.pine_green.DEFAULT, // Teal (#157a6e)
//   secondary: Pallette.shamrock_green.DEFAULT, // Green (#499f68)
//   tertiary: Pallette.cambridge_blue.DEFAULT, // Light green (#77b28c)
//   neutral: Pallette.baby_powder[500], // Light gray (#fffffa)
//   neutralDark: '#2e2e2e',
//   neutralLight: Pallette.baby_powder[600], // White-ish (#fffffb)
//   accent: Pallette.burnt_sienna.DEFAULT, // Coral red (#e26d5a)
//   text: Pallette.pine_green[100], // Dark text (#041816)
//   textPrimary: Pallette.baby_powder[500], // Light text (#fffffa)
//   textSecondary: Pallette.shamrock_green[100], // Slightly lighter dark text (#0e1f15)
// } as const;

// export const Dark = {
//   primary: Pallette.pine_green[300], // Darker teal (#0c4942)
//   secondary: Pallette.shamrock_green[300], // Darker green (#2b5e3e)
//   tertiary: Pallette.cambridge_blue[300], // Darker light green (#407251)
//   neutral: Pallette.pine_green[100], // Very dark gray (#041816)
//   neutralLight: Pallette.shamrock_green[200], // Slightly lighter gray (#1d3f29)
//   neutralDark: '#2e2e2e',
//   accent: Pallette.burnt_sienna[500], // Slightly darker coral red (#e26d5a)
//   text: Pallette.baby_powder[500], // Light text (#fffffa)
//   textPrimary: Pallette.baby_powder[500], // Light text (#fffffa)
//   textSecondary: Pallette.ash_gray.DEFAULT, // Original neutral color for secondary text (#c2c5bb)
// } as const;

// export const Light = {
//   // Primary Colors (Red, Yellow, Green)
//   red: {
//     primary: '#e26d5a', // Coral Red
//     secondary: '#ff8a7b', // Lighter Coral Red
//     tertiary: '#f9e2de', // Very Light Coral Red (Background-like tone)
//   },
//   yellow: {
//     primary: '#ffe082', // Warm Yellow
//     secondary: '#fff3bf', // Light Yellow
//     tertiary: '#fff9e6', // Very Light Yellow (Background-like tone)
//   },
//   green: {
//     primary: '#499f68', // Shamrock Green
//     secondary: '#8ccaa3', // Lighter Shamrock Green
//     tertiary: '#d9ede0', // Very Light Shamrock Green (Background-like tone)
//   },
//   // Neutral Backgrounds
//   neutral: '#f5f5f5', // Light Gray (Main Background)
//   neutralLight: '#ffffff', // Pure White (Cards, Surfaces)
//   neutralDark: '#e0e0e0', // Slightly Darker Gray (Borders, Subtle Accents),
//   // Text Colors
//   text: '#1a1a1a', // Dark Text
//   textPrimary: '#1a1a1a', // Primary Dark Text
//   textSecondary: '#424242', // Secondary Dark Text
// } as const;

// export const Dark = {
//   // Primary Colors (Red, Yellow, Green)
//   red: {
//     primary: '#ff312e', // Bright Red
//     secondary: '#e85b58', // Slightly Darker Red
//     tertiary: '#360f09', // Very Dark Red (Background-like tone)
//   },
//   yellow: {
//     primary: '#ffb74d', // Warm Yellow
//     secondary: '#e6a73b', // Slightly Darker Yellow
//     tertiary: '#2e2413', // Very Dark Yellow (Background-like tone)
//   },
//   green: {
//     primary: '#2e7d5a', // Dark Shamrock Green
//     secondary: '#4a8d6e', // Slightly Lighter Green
//     tertiary: '#15261b', // Very Dark Green (Background-like tone)
//   },
//   // Neutral Backgrounds
//   neutral: '#1a1a1a', // Dark Gray (Main Background)
//   neutralLight: '#2e2e2e', // Slightly Lighter Gray (Cards, Surfaces)
//   neutralDark: '#000000', // Pure Black (Borders, Subtle Accents),
//   // Text Colors
//   text: '#f5f5f5', // Light Text
//   textPrimary: '#ffffff', // Primary Light Text
//   textSecondary: '#c2c5bb', // Secondary Light Text
// } as const;


export const Light = {
  // Primary Colors (Red, Yellow, Green)
  red: {
    primary: '#e26d5a', // Coral Red
    secondary: '#ff8a7b', // Lighter Coral Red
    tertiary: '#f9e2de', // Very Light Coral Red (Background-like tone)
  },
  yellow: {
    primary: '#ffe082', // Warm Yellow
    secondary: '#fff3bf', // Light Yellow
    tertiary: '#fff9e6', // Very Light Yellow (Background-like tone)
  },
  green: {
    primary: '#499f68', // Shamrock Green
    secondary: '#8ccaa3', // Lighter Shamrock Green
    tertiary: '#d9ede0', // Very Light Shamrock Green (Background-like tone)
  },
  // Neutral Backgrounds
  neutral: '#f5f5f5', // Light Gray (Main Background)
  neutralLight: '#ffffff', // Pure White (Cards, Surfaces)
  neutralDark: '#e0e0e0', // Slightly Darker Gray (Borders, Subtle Accents),
  // Text Colors
  text: '#1a1a1a', // Dark Text
  textPrimary: '#1a1a1a', // Primary Dark Text
  textSecondary: '#424242', // Secondary Dark Text
  // Text Colors for Each Color Level
  textColors: {
    red: {
      primary: '#ffffff', // White text on primary red
      secondary: '#ffffff', // White text on secondary red
      tertiary: '#1a1a1a', // Dark text on tertiary red
    },
    yellow: {
      primary: '#1a1a1a', // Dark text on primary yellow
      secondary: '#1a1a1a', // Dark text on secondary yellow
      tertiary: '#1a1a1a', // Dark text on tertiary yellow
    },
    green: {
      primary: '#ffffff', // White text on primary green
      secondary: '#1a1a1a', // Dark text on secondary green
      tertiary: '#1a1a1a', // Dark text on tertiary green
    },
    neutral: {
      primary: '#1a1a1a', // Dark text on neutral
      secondary: '#424242', // Secondary dark text on neutral
      tertiary: '#616161', // Tertiary dark text on neutral
    },
  },
} as const;

export const Dark = {
  // Primary Colors (Red, Yellow, Green)
  red: {
    primary: '#ff312e', // Bright Red
    secondary: '#e85b58', // Slightly Darker Red
    tertiary: '#360f09', // Very Dark Red (Background-like tone)
  },
  yellow: {
    primary: '#ffb74d', // Warm Yellow
    secondary: '#e6a73b', // Slightly Darker Yellow
    tertiary: '#2e2413', // Very Dark Yellow (Background-like tone)
  },
  green: {
    primary: '#2e7d5a', // Dark Shamrock Green
    secondary: '#4a8d6e', // Slightly Lighter Green
    tertiary: '#15261b', // Very Dark Green (Background-like tone)
  },
  // Neutral Backgrounds
  neutral: '#1a1a1a', // Dark Gray (Main Background)
  neutralLight: '#2e2e2e', // Slightly Lighter Gray (Cards, Surfaces)
  neutralDark: '#000000', // Pure Black (Borders, Subtle Accents),
  // Text Colors
  text: '#f5f5f5', // Light Text
  textPrimary: '#ffffff', // Primary Light Text
  textSecondary: '#c2c5bb', // Secondary Light Text
  // Text Colors for Each Color Level
  textColors: {
    red: {
      primary: '#ffffff', // White text on primary red
      secondary: '#ffffff', // White text on secondary red
      tertiary: '#ffffff', // White text on tertiary red
    },
    yellow: {
      primary: '#1a1a1a', // Dark text on primary yellow
      secondary: '#1a1a1a', // Dark text on secondary yellow
      tertiary: '#ffffff', // Light text on tertiary yellow
    },
    green: {
      primary: '#ffffff', // White text on primary green
      secondary: '#ffffff', // White text on secondary green
      tertiary: '#ffffff', // White text on tertiary green
    },
    neutral: {
      primary: '#ffffff', // Light text on neutral
      secondary: '#c2c5bb', // Secondary light text on neutral
      tertiary: '#a6a6a6', // Tertiary light text on neutral
    },
  },
} as const;