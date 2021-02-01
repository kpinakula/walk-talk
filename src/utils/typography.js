// import Typography from 'typography';
// const typography = new Typography({
//   baseFontSize: '18px',
//   baseLineHeight: 2,
//   headerFontFamily: [
//     'Grotesk',
//     'Tahoma',
//     'Helvetica Neue',
//     'Verdana',
//     'Segoe UI',
//     'sans-serif',
//   ],
//   bodyFontFamily: ['Tahoma', 'Verdana', 'Segoe UI', 'sans-serif'],
// });
// export default typography;

import Typography from 'typography';
// import grandViewTheme from 'typography-theme-grand-view';
// import grandViewTheme from 'typography-theme-fairy-gates';
// import grandViewTheme from 'typography-theme-irving';
// import grandViewTheme from 'typography-theme-stern-grove';
// import grandViewTheme from 'typography-theme-funston';
import grandViewTheme from 'typography-theme-moraga';
// import grandViewTheme from 'typography-theme-stow-lake';
// import grandViewTheme from 'typography-theme-us-web-design-standards';
// import grandViewTheme from 'typography-theme-wordpress-2010';
// import grandViewTheme from 'typography-theme-wordpress-2011';
// import grandViewTheme from 'typography-theme-wordpress-2012';
// import grandViewTheme from 'typography-theme-wordpress-2013';
// import grandViewTheme from 'typography-theme-wordpress-2014';

const typography = new Typography(grandViewTheme);

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
