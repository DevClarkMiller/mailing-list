const IconWrapper = ({url, icon, newTab}) =>{
    return(
        <>
            {
                newTab ?
                    <a href={url} target="_blank">{icon}</a>
                :

                <a href={url}>{icon}</a>
            }
        </>
    );
}

export default IconWrapper;