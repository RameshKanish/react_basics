const conditionalRender = (props) => {

    const {isLoggedIn , userName} = props;

    return (
        <div>
            {
                isLoggedIn  ? (
                    <h1>Welcome {userName} </h1>
                    
                ) : (
                    <h1>Please Login {userName}</h1>
                )
            }
        </div>
    )
}

export default conditionalRender;