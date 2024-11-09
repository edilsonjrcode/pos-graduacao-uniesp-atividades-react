const WithPermission = (WrappedComponent) => {
    return (props) => {
        if (!props.hasPermission) {
            return <h1>Permissão Negada</h1>
        }
        return <WrappedComponent {...props} />
    }
}

export default WithPermission