function Profile(props){
    
    const {name, lastname} = props;

    return <h1>
        Name: {name} {lastname}
        {props.children}
        </h1>
}

export default Profile;