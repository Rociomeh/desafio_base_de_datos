export default function Alert ({errorV, success}) {

    return (
        <>
            {errorV.length>0 ? <div class="alert alert-danger" role="alert"><p style={{color:"red"}}>{errorV}</p> </div> : null}
            {success.length>0 ? <div class="alert alert-success" role="alert"><p style={{color:"green"}}>{success}</p> </div> : null}
        </>
    );
}



