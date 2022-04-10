const parsedMessages = ({response: { data: {errors, error} }}) => {
    let validations = []
    if (error) {
        validations.push(<p key={error}>{error}</p>)
    }
    if (errors) {
        validations = validations.concat(errors.map(({message, field}) => <p key={field || message}>{message}</p>))
    }
    return { validations }
}

export default parsedMessages
