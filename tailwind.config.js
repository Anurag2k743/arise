// tailwind.config.js
module.exports = {
 content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./sections/**/*.{js,ts,jsx,tsx}", // optional if you have sections folder
]
,
  theme: {
    extend: {
    
       colors: {
        primary: '#1E40AF', 
        secondary: '#F59E0B',   
    
      },
    },
  },
  plugins: [],
}
