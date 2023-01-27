const typography = {
    "bold": "font-bold",  //font-weight: 700
    "semibold": "font-semibold", //font-weight: 600
    "medium": "font-medium", //font-weight: 500
    "regular": "font-normal", //font-weight: 400
}



export type Typography = keyof (typeof typography);

const theme = {
    typography,
   
}
 


export default theme

