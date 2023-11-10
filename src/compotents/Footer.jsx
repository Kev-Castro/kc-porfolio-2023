function Footer() {
    const date = new Date()

    return (
        <footer>
            <p>&copy; {date.getFullYear()}</p>
            <p>Developed by Kevin Castro </p>
        </footer>
    )
}

export default Footer