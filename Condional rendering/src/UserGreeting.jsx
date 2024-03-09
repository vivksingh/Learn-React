import PropTypes from 'prop-types'

function UserGreeting(props){
    const welcome_msg = <h2 className="welcome-message"> Welcome {props.username} </h2>
    const login_prompt = <h2 className="login-prompt">Please log in to continue</h2>

    return(props.isLoggedIn ? welcome_msg : login_prompt);
}
UserGreeting.prototype = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string
};

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username: "guest"
}

export default UserGreeting