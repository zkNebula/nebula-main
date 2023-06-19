/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        ss: "300px", 
        xxs: "375px",
        xs: "425px",
        "phone-sm": "527px",
        "sm-md": "655px",
        "sm-lg": "674px",
        "md-lg": "786px",
        "md-xl": "813px",
        phone: "600px",
        xl: "1120px",
      },
      backgroundImage: {
        "feature": "linear-gradient(180deg, #194D63 0%, rgba(25, 52, 99, 0) 100%)"
      },
      fontSize: {
        "5.6xl": "3.6rem"
      },
      fontFamily: {
        sans: ['inter', 'sans'],
        syne: ['var(--font-syne)', 'sans'],
        roboto: ['var(--font-roboto)', 'sans']
      },
      colors: {
        background: "#08161C",
        border: "#667085",
        primary: {
          900: "#2EC7E9",
          border: "#2B2D42",
          tint: {
            100: "#29b3d2",
            200: "#259fba",
            300: "#208ba3"
          },
          shade: {
            100: "#43cdeb",
            200: "#58d2ed",
            300: "#6dd8f0"
          }
        },
        secondary: {
          900: "#502ee9",
          tint: {
            100: "#4829d2",
            200: "#4025ba",
            300: "#3820a3"
          },
          shade: {
            100: "#6243eb",
            200: "#7358ed",
            300: "#856df0"
          }
        },
        accent: {
          900: "#2ee950",
          tint: {
            100: "#29d248",
            200: "#25ba40",
            300: "#20a338"
          },
          shade: {
            100: "#43eb62",
            200: "#58ed73",
            300: "#6df085",
            800: "#79ffe1"
          }
        },
        tertiary: {
          900: "#2874E7",
          shade: {
            900: "#3d82e9"
          },
          tint: {
            800: "#205db9",
            900: "#2468d0",
          }
        } 
      },
      rotate: {
        6: "6deg",
        4: "4deg",
        15: "15deg"
      },
      width: {
        "20vw": "20vw",
        "23vw": "23vw"
      },
      borderRadius: {
        'full-important': "9999px !important"
      }
    },
  },
  plugins: [],
}