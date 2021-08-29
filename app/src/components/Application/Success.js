const Success = () => {
    return (
        <div className="successContainer">
            <div className="successBackground"></div>
            <div className="successTxt">
                <h1 className="successHeader">
                    Hurray!
                </h1>
                <p>Your application has been sent successfully.</p>
                <p>Thanks for trusting <span className="blueHighlight">weReview</span>!</p>
                <p className="successTxtThin">We will email you shortly.</p>
            </div>
        </div>
    )
}

export default Success
