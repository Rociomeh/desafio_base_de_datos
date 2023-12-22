export default function Alert ({errorV, success}) {

    return (
        <>
            {errorV.length>0 ? <p style={{color:"red"}}>{errorV}</p> : null}
            {success.length>0 ? <p style={{color:"green"}}>{success}</p> : null}
        </>
    );
};