const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white'
    },
    light: {
        backgroundColor: 'white',
        color: 'black'
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
}

export { themes, initialState };
