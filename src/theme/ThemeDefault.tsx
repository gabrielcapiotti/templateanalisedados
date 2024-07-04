import { ThemeProvider } from "styled-components";



const theme = {
    colors: {
        primary: "#283e19",
        secondary: "#c35800ff",
    }
};

interface ThemeDefaultProps {
    children: React.ReactNode;
}

function ThemeDefault({ children }: ThemeDefaultProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
export default ThemeDefault;